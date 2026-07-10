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
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), this.timeout);
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${this.authToken}`,
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json',
                },
                body: formData.toString(),
                signal: controller.signal,
            });
            clearTimeout(timeoutId);
            // Handle HTTP errors
            if (!response.ok) {
                let body;
                try {
                    body = await response.json();
                }
                catch {
                    body = await response.text().catch(() => null);
                }
                switch (response.status) {
                    case 401:
                    case 403:
                        throw new AuthenticationError(`Authentication failed (${response.status}): Check your API key and auth token.`, body);
                    case 429: {
                        const retryAfter = response.headers.get('Retry-After');
                        throw new RateLimitError('Rate limit exceeded. Please wait before making more requests.', retryAfter ? parseInt(retryAfter, 10) : undefined, body);
                    }
                    case 400:
                        throw new ValidationError(`Bad request: ${typeof body === 'object' && body && 'message' in body ? body.message : 'Invalid parameters'}`, body);
                    default:
                        throw new DivineApiError(`API request failed with status ${response.status}`, response.status, body);
                }
            }
            const data = await response.json();
            return data;
        }
        catch (error) {
            clearTimeout(timeoutId);
            if (error instanceof DivineApiError) {
                throw error;
            }
            if (error instanceof Error) {
                if (error.name === 'AbortError') {
                    throw new NetworkError(`Request timed out after ${this.timeout}ms`, error);
                }
                throw new NetworkError(`Network request failed: ${error.message}`, error);
            }
            throw new NetworkError('An unknown network error occurred');
        }
    }
}
//# sourceMappingURL=client.js.map