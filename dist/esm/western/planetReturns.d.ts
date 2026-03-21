import { BaseClient } from '../client.js';
import type { ApiResponse, PlanetReturnListParams, PlanetReturnDetailsParams } from '../types.js';
/**
 * Western Planet Returns API endpoints.
 * Host: astroapi-8.divineapi.com
 */
export declare class PlanetReturnsApi {
    private readonly client;
    constructor(client: BaseClient);
    /** Get planet return list. */
    list(params: PlanetReturnListParams): Promise<ApiResponse>;
    /** Get planet return details. */
    details(params: PlanetReturnDetailsParams): Promise<ApiResponse>;
}
//# sourceMappingURL=planetReturns.d.ts.map