import { ApiHost, DivineApiConfig } from './types.js';
/**
 * Base HTTP client for Divine API.
 * All endpoints use POST with form-data body.
 * Auth is Bearer token in Authorization header + api_key in body.
 */
export declare class BaseClient {
    private readonly apiKey;
    private readonly authToken;
    private readonly timeout;
    constructor(config: DivineApiConfig);
    /**
     * Make a POST request to a Divine API endpoint.
     * @param host - The API host (e.g., "astroapi-5.divineapi.com")
     * @param path - The endpoint path (e.g., "/api/v5/daily-horoscope")
     * @param params - Request parameters (excluding api_key, which is added automatically)
     */
    post<T = unknown>(host: ApiHost, path: string, params?: Record<string, unknown>): Promise<T>;
    /**
     * POST a JSON body with the API key in an `x-api-key` header.
     * Used by Reports V2 (`/api/v1/reports/generate`, `/api/v1/western/reports/generate`),
     * which rejects form-encoded requests with 401 "x-api-key header required".
     */
    postJson<T = unknown>(host: ApiHost, path: string, body?: Record<string, unknown>): Promise<T>;
    /**
     * POST a JSON body like {@link postJson} and read a Server-Sent Events reply, yielding
     * each event's JSON `data` payload as it arrives. A reply that is plain JSON instead of
     * a stream is yielded as one event. The timeout covers the wait for the response and
     * then each gap between chunks. Breaking out of the loop closes the connection.
     */
    postJsonStream<T = unknown>(host: ApiHost, path: string, body?: Record<string, unknown>): AsyncGenerator<T, void, undefined>;
    /** Send a request with the timeout, and map HTTP and network failures to SDK errors. */
    private send;
    /** Map a non-2xx response to the matching SDK error. */
    private httpError;
    /** Wrap fetch, abort and parse failures as SDK errors; SDK errors pass through. */
    private toSdkError;
}
//# sourceMappingURL=client.d.ts.map