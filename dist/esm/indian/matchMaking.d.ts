import { BaseClient } from '../client.js';
import type { ApiResponse, MatchMakingParams, MatchingChartParams } from '../types.js';
/**
 * Indian Match Making API endpoints.
 * Host: astroapi-3.divineapi.com
 */
export declare class MatchMakingApi {
    private readonly client;
    constructor(client: BaseClient);
    /** Get Ashtakoot Milan (North Indian matching). */
    ashtakootMilan(params: MatchMakingParams): Promise<ApiResponse>;
    /** Get Dashakoot Milan (South Indian matching). */
    dashakootMilan(params: MatchMakingParams): Promise<ApiResponse>;
    /** Get Nav Pancham Yoga. */
    navPanchamYoga(params: MatchMakingParams): Promise<ApiResponse>;
    /** Get matching basic astro details. */
    basicAstroDetails(params: MatchMakingParams): Promise<ApiResponse>;
    /** Get matching planetary positions. */
    planetaryPositions(params: MatchMakingParams): Promise<ApiResponse>;
    /** Get matching Vimshottari dasha. */
    vimshottariDasha(params: MatchMakingParams): Promise<ApiResponse>;
    /** Get matching Manglik dosha. */
    manglikDosha(params: MatchMakingParams): Promise<ApiResponse>;
    /** Get matching horoscope chart. */
    horoscopeChart(params: MatchingChartParams): Promise<ApiResponse>;
}
//# sourceMappingURL=matchMaking.d.ts.map