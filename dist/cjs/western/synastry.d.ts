import { BaseClient } from '../client.js';
import type { ApiResponse, SynastryParams, SynastryChartParams } from '../types.js';
/**
 * Western Synastry (relationship) API endpoints.
 * Host: astroapi-4.divineapi.com
 */
export declare class SynastryApi {
    private readonly client;
    constructor(client: BaseClient);
    /** Get synastry planetary positions. */
    planetaryPositions(params: SynastryParams): Promise<ApiResponse>;
    /** Get synastry house cusps. */
    houseCusps(params: SynastryParams): Promise<ApiResponse>;
    /** Get synastry natal wheel chart. */
    natalWheelChart(params: SynastryChartParams): Promise<ApiResponse>;
    /** Get synastry aspect table. */
    aspectTable(params: SynastryParams): Promise<ApiResponse>;
    /** Get harmonious aspect reading. */
    harmoniousAspectReading(params: SynastryParams): Promise<ApiResponse>;
    /** Get conflicting aspect reading. */
    conflictingAspectReading(params: SynastryParams): Promise<ApiResponse>;
    /** Get contrasting aspect reading. */
    contrastingAspectReading(params: SynastryParams): Promise<ApiResponse>;
    /** Get intense aspect reading. */
    intenseAspectReading(params: SynastryParams): Promise<ApiResponse>;
    /** Get physical compatibility. */
    physicalCompatibility(params: SynastryParams): Promise<ApiResponse>;
    /** Get emotional compatibility. */
    emotionalCompatibility(params: SynastryParams): Promise<ApiResponse>;
    /** Get sexual compatibility. */
    sexualCompatibility(params: SynastryParams): Promise<ApiResponse>;
    /** Get spiritual compatibility. */
    spiritualCompatibility(params: SynastryParams): Promise<ApiResponse>;
    /** Get financial compatibility. */
    financialCompatibility(params: SynastryParams): Promise<ApiResponse>;
}
//# sourceMappingURL=synastry.d.ts.map