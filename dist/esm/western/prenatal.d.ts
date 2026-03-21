import { BaseClient } from '../client.js';
import type { ApiResponse, PrenatalListParams, PrenatalDetailsParams } from '../types.js';
/**
 * Western Prenatal API endpoints.
 * Host: astroapi-8.divineapi.com
 */
export declare class PrenatalApi {
    private readonly client;
    constructor(client: BaseClient);
    /** Get prenatal list. */
    list(params: PrenatalListParams): Promise<ApiResponse>;
    /** Get prenatal details. */
    details(params: PrenatalDetailsParams): Promise<ApiResponse>;
}
//# sourceMappingURL=prenatal.d.ts.map