import { BaseClient } from '../client.js';
import type { ApiResponse, BasicTransitParams, WesternBirthParams, WeeklyTransitParams, FullTransitParams, MonthlyTransitParams, TransitChartParams, PlanetRetrogradeCombustionParams, TransitHouseParams } from '../types.js';
/**
 * Western Transit API endpoints.
 * Hosts: astroapi-4 and astroapi-8
 */
export declare class TransitApi {
    private readonly client;
    constructor(client: BaseClient);
    /** Get basic transit data. */
    basic(params: BasicTransitParams): Promise<ApiResponse>;
    /** Get daily transit. */
    daily(params: WesternBirthParams): Promise<ApiResponse>;
    /** Get weekly transit. */
    weekly(params: WeeklyTransitParams): Promise<ApiResponse>;
    /** Get monthly transit. Requires transit_planet, transit_month, transit_year, and the transit location. */
    monthly(params: MonthlyTransitParams): Promise<ApiResponse>;
    /** Get full transit data. Requires transit_planet plus the transit date and location. */
    full(params: FullTransitParams): Promise<ApiResponse>;
    /** Get planetary ingress data. */
    planetaryIngress(params: PlanetRetrogradeCombustionParams): Promise<ApiResponse>;
    /** Get planet retrograde transit. */
    planetRetrogradeTransit(params: PlanetRetrogradeCombustionParams): Promise<ApiResponse>;
    /** Get planet combustion transit. */
    planetCombustionTransit(params: PlanetRetrogradeCombustionParams): Promise<ApiResponse>;
    /** Get transit wheel chart. Requires the transit date and location (no transit_planet). */
    wheelChart(params: TransitChartParams): Promise<ApiResponse>;
    /** Get transit planetary positions. Requires the transit date and location (no transit_planet). */
    planetaryPositions(params: TransitChartParams): Promise<ApiResponse>;
    /** Get transit house data. */
    house(params: TransitHouseParams): Promise<ApiResponse>;
}
//# sourceMappingURL=transit.d.ts.map