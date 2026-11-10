import { applyHouseSystem, applyBirthSecondDefaults } from './houseSystem.js';
import { DivineApiError, AuthenticationError, RateLimitError, ValidationError, NetworkError, } from './errors.js';
/**
 * Base HTTP client for Divine API.
 * All endpoints use POST with form-data body.
 * Auth is Bearer token in Authorization header + api_key in body.
 */
export class BaseClient {
    apiKey;
    authToken;
    timeout;
    constructor(config) {
        this.apiKey = config.apiKey;
        this.authToken = config.authToken ?? config.apiKey;
        this.timeout = config.timeout ?? 30000;
    }
    /**
     * Make a POST request to a Divine API endpoint.
     * @param host - The API host (e.g., "astroapi-5.divineapi.com")
     * @param path - The endpoint path (e.g., "/api/v5/daily-horoscope")
     * @param params - Request parameters (excluding api_key, which is added automatically)
     */
    async post(host, path, params = {}) {
        const url = `https://${host}${path}`;
        // Normalize request params before sending:
        //  - map the Western house_system friendly name to its letter code, and
        //  - default the birth second(s) to 0 (the API requires `sec`).
        // Both are no-ops for endpoints that lack the relevant fields.
        const normalized = applyBirthSecondDefaults(applyHouseSystem(params));
        // Build form data
        const formData = new URLSearchParams();
        formData.append('api_key', this.apiKey);
        for (const [key, value] of Object.entries(normalized)) {
            if (value !== undefined && value !== null) {
                formData.append(key, String(value));
            }
        }
        return this.send(url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${this.authToken}`,
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json',
            },
            body: formData.toString(),
        });
    }
    /**
     * POST a JSON body with the API key in an `x-api-key` header.
     * Used by Reports V2 (`/api/v1/reports/generate`, `/api/v1/western/reports/generate`),
     * which rejects form-encoded requests with 401 "x-api-key header required".
     */
    async postJson(host, path, body = {}) {
        return this.send(`https://${host}${path}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${this.authToken}`,
                'x-api-key': this.apiKey,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(body),
        });
    }
    /**
     * POST a JSON body like {@link postJson} and read a Server-Sent Events reply, yielding
     * each event's JSON `data` payload as it arrives. A reply that is plain JSON instead of
     * a stream is yielded as one event. The timeout covers the wait for the response and
     * then each gap between chunks. Breaking out of the loop closes the connection.
     */
    async *postJsonStream(host, path, body = {}) {
        const url = `https://${host}${path}`;
        const controller = new AbortController();
        let timeoutId = setTimeout(() => controller.abort(), this.timeout);
        const restartTimeout = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => controller.abort(), this.timeout);
        };
        try {
            let response;
            try {
                response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${this.authToken}`,
                        'x-api-key': this.apiKey,
                        'Content-Type': 'application/json',
                        'Accept': 'text/event-stream',
                    },
                    body: JSON.stringify(body),
                    signal: controller.signal,
                });
                if (!response.ok) {
                    throw await this.httpError(response);
                }
            }
            catch (error) {
                throw this.toSdkError(error);
            }
            if (!response.body || !(response.headers.get('Content-Type') ?? '').includes('text/event-stream')) {
                try {
                    yield (await response.json());
                }
                catch (error) {
                    throw this.toSdkError(error);
                }
                return;
            }
            const reader = response.body.getReader();
            const decoder = new TextDecoder('utf-8');
            let buffer = '';
            let dataLines = [];
            try {
                for (;;) {
                    // The timeout runs only while waiting for data, not while the caller
                    // handles an event.
                    restartTimeout();
                    let chunk;
                    try {
                        chunk = await reader.read();
                    }
                    catch (error) {
                        throw this.toSdkError(error);
                    }
                    finally {
                        clearTimeout(timeoutId);
                    }
                    buffer += chunk.done ? decoder.decode() : decoder.decode(chunk.value, { stream: true });
                    if (chunk.done && buffer && !buffer.endsWith('\n')) {
                        buffer += '\n';
                    }
                    let newline;
                    while ((newline = buffer.indexOf('\n')) >= 0) {
                        let line = buffer.slice(0, newline);
                        buffer = buffer.slice(newline + 1);
                        if (line.endsWith('\r')) {
                            line = line.slice(0, -1);
                        }
                        if (line.startsWith('data:')) {
                            dataLines.push(line.slice(line.startsWith('data: ') ? 6 : 5));
                        }
                        else if (line === '' && dataLines.length) {
                            yield parseEvent(dataLines, url);
                            dataLines = [];
                        }
                    }
                    if (chunk.done) {
                        break;
                    }
                }
                if (dataLines.length) {
                    yield parseEvent(dataLines, url);
                }
            }
            finally {
                await reader.cancel().catch(() => undefined);
            }
        }
        finally {
            clearTimeout(timeoutId);
        }
    }
    /** Send a request with the timeout, and map HTTP and network failures to SDK errors. */
    async send(url, init) {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), this.timeout);
        try {
            const response = await fetch(url, { ...init, signal: controller.signal });
            clearTimeout(timeoutId);
            if (!response.ok) {
                throw await this.httpError(response);
            }
            const data = await response.json();
            return data;
        }
        catch (error) {
            clearTimeout(timeoutId);
            throw this.toSdkError(error);
        }
    }
    /** Map a non-2xx response to the matching SDK error. */
    async httpError(response) {
        const text = await response.text().catch(() => '');
        let body = text || null;
        try {
            body = JSON.parse(text);
        }
        catch {
            // not JSON: keep the raw text
        }
        const detail = errorMessage(body);
        switch (response.status) {
            case 401:
            case 403:
                return new AuthenticationError(`Authentication failed (${response.status}): ${detail || 'Check your API key and auth token.'}`, body);
            case 429: {
                const retryAfter = response.headers.get('Retry-After');
                return new RateLimitError('Rate limit exceeded. Please wait before making more requests.', retryAfter ? parseInt(retryAfter, 10) : undefined, body);
            }
            case 400:
            case 422:
                return new ValidationError(`Bad request: ${detail || 'Invalid parameters'}`, body, response.status);
            default:
                return new DivineApiError(`API request failed with status ${response.status}${detail ? `: ${detail}` : ''}`, response.status, body);
        }
    }
    /** Wrap fetch, abort and parse failures as SDK errors; SDK errors pass through. */
    toSdkError(error) {
        if (error instanceof DivineApiError) {
            return error;
        }
        if (error instanceof Error) {
            if (error.name === 'AbortError') {
                return new NetworkError(`Request timed out after ${this.timeout}ms`, error);
            }
            return new NetworkError(`Network request failed: ${error.message}`, error);
        }
        return new NetworkError('An unknown network error occurred');
    }
}
/**
 * The server's error text: `message` or `error` (DivineAPI), or FastAPI's `detail`
 * (ask.divineapi.com), which is a string or a list of field errors such as
 * `[{ loc: ['body', 'user_id'], msg: 'Field required' }]`.
 */
function errorMessage(body) {
    if (!body || typeof body !== 'object') {
        return '';
    }
    const fields = body;
    for (const key of ['message', 'error']) {
        const value = fields[key];
        if (typeof value === 'string' && value) {
            return value;
        }
    }
    const detail = fields.detail;
    if (typeof detail === 'string') {
        return detail;
    }
    if (Array.isArray(detail)) {
        return detail
            .map((item) => {
            if (item && typeof item === 'object') {
                const { loc, msg } = item;
                const field = Array.isArray(loc) && loc.length ? String(loc[loc.length - 1]) : '';
                const text = msg === undefined ? '' : String(msg);
                return field ? `${field}: ${text}` : text;
            }
            return String(item);
        })
            .filter(Boolean)
            .join('; ');
    }
    return '';
}
/** Parse the joined `data` lines of one Server-Sent Event as JSON. */
function parseEvent(dataLines, url) {
    const data = dataLines.join('\n');
    try {
        return JSON.parse(data);
    }
    catch {
        throw new DivineApiError(`Unreadable event in the stream from ${url}: ${data.slice(0, 200)}`);
    }
}
//# sourceMappingURL=client.js.map