import { BaseClient } from '../client.js';
import type { ApiResponse, ProgressedLunarEventsParams, PlanetaryArcDirectionsParams, SecondaryProgressionsParams } from '../types.js';
/**
 * Western Progressions API endpoints.
 * Host: astroapi-8.divineapi.com
 */
export declare class ProgressionsApi {
    private readonly client;
    constructor(client: BaseClient);
    /** Get progressed lunar events. */
    progressedLunarEvents(params: ProgressedLunarEventsParams): Promise<ApiResponse>;
    /** Get planetary arc directions. */
    planetaryArcDirections(params: PlanetaryArcDirectionsParams): Promise<ApiResponse>;
    /** Get secondary progressions. */
    secondaryProgressions(params: SecondaryProgressionsParams): Promise<ApiResponse>;
}
//# sourceMappingURL=progressions.d.ts.map