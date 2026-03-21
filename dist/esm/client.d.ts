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
}
//# sourceMappingURL=client.d.ts.map