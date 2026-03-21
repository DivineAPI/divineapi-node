import { BaseClient } from '../client.js';
import type { ApiResponse, FlamesCalculatorParams, LoveCalculatorParams } from '../types.js';
/**
 * Calculator API endpoints.
 * Host: astroapi-7.divineapi.com
 */
export declare class CalculatorApi {
    private readonly client;
    constructor(client: BaseClient);
    /** Calculate FLAMES compatibility. */
    flames(params: FlamesCalculatorParams): Promise<ApiResponse>;
    /** Calculate love compatibility. */
    love(params: LoveCalculatorParams): Promise<ApiResponse>;
}
//# sourceMappingURL=index.d.ts.map