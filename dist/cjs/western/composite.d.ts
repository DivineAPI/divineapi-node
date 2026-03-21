import { BaseClient } from '../client.js';
import type { ApiResponse, CompositeParams, CompositeChartParams } from '../types.js';
/**
 * Western Composite Chart API endpoints.
 * Host: astroapi-8.divineapi.com
 */
export declare class CompositeApi {
    private readonly client;
    constructor(client: BaseClient);
    /** Get composite planetary positions. */
    planetaryPositions(params: CompositeParams): Promise<ApiResponse>;
    /** Get composite house cusps. */
    houseCusps(params: CompositeParams): Promise<ApiResponse>;
    /** Get composite aspect table. */
    aspectTable(params: CompositeParams): Promise<ApiResponse>;
    /** Get composite natal wheel chart. */
    natalWheelChart(params: CompositeChartParams): Promise<ApiResponse>;
}
//# sourceMappingURL=composite.d.ts.map