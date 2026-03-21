import { BaseClient } from '../client.js';
import type { ApiResponse, WesternBirthParams, NatalWheelChartParams, MoonPhaseCalendarParams, FixedStarsDetailsParams, DominantsParams } from '../types.js';
/**
 * Western Natal Astrology API endpoints.
 * Hosts: astroapi-4 and astroapi-8
 */
export declare class NatalApi {
    private readonly client;
    constructor(client: BaseClient);
    /** Get planetary positions. */
    planetaryPositions(params: WesternBirthParams): Promise<ApiResponse>;
    /** Get house cusps. */
    houseCusps(params: WesternBirthParams): Promise<ApiResponse>;
    /** Get aspect table. */
    aspectTable(params: WesternBirthParams): Promise<ApiResponse>;
    /** Get natal wheel chart image. */
    natalWheelChart(params: NatalWheelChartParams): Promise<ApiResponse>;
    /** Get general sign report for a planet. */
    generalSignReport(planet: string, params: WesternBirthParams): Promise<ApiResponse>;
    /** Get general house report for a planet. */
    generalHouseReport(planet: string, params: WesternBirthParams): Promise<ApiResponse>;
    /** Get moon phases. */
    moonPhases(params: WesternBirthParams): Promise<ApiResponse>;
    /** Get ascendant report. */
    ascendantReport(params: WesternBirthParams): Promise<ApiResponse>;
    /** Get moon phase calendar. */
    moonPhaseCalendar(params: MoonPhaseCalendarParams): Promise<ApiResponse>;
    /** Get natal insights. */
    natalInsights(params: WesternBirthParams): Promise<ApiResponse>;
    /** Get Arabic lots (parts). */
    arabicLots(params: WesternBirthParams): Promise<ApiResponse>;
    /** Get asteroid positions. */
    asteroidPositions(params: WesternBirthParams): Promise<ApiResponse>;
    /** Get list of fixed stars. */
    fixedStarsList(): Promise<ApiResponse>;
    /** Get details for specific fixed stars. */
    fixedStarsDetails(params: FixedStarsDetailsParams): Promise<ApiResponse>;
    /** Get planetary midpoints. */
    planetaryMidpoints(params: WesternBirthParams): Promise<ApiResponse>;
    /** Get eclipse data. */
    eclipse(params: WesternBirthParams): Promise<ApiResponse>;
    /** Get declinations and parallels. */
    declinationsParallels(params: WesternBirthParams): Promise<ApiResponse>;
    /** Get aspect patterns. */
    aspectPatterns(params: WesternBirthParams): Promise<ApiResponse>;
    /** Get chart shape analysis. */
    chartShape(params: WesternBirthParams): Promise<ApiResponse>;
    /** Get other minor bodies positions. */
    otherMinorBodies(params: WesternBirthParams): Promise<ApiResponse>;
    /** Get dominants analysis. */
    dominants(params: DominantsParams): Promise<ApiResponse>;
}
//# sourceMappingURL=natal.d.ts.map