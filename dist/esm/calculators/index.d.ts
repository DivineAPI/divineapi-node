import { BaseClient } from '../client.js';
import type { ApiResponse, FlamesCalculatorParams, LoveCalculatorParams } from '../types.js';
/**
 * Calculator API endpoints.
 * Host: astroapi-7.divineapi.com
 */
export declare class CalculatorApi {
    private readonly client;
    constructor(client: BaseClient);
    /**
     * Calculate FLAMES compatibility.
     * The API field is `your_name` (not `full_name`); a legacy `full_name` is
     * mapped to `your_name` for backward compatibility.
     */
    flames(params: FlamesCalculatorParams): Promise<ApiResponse>;
    /** Calculate love compatibility. */
    love(params: LoveCalculatorParams): Promise<ApiResponse>;
}
//# sourceMappingURL=index.d.ts.map