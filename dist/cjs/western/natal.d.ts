import { BaseClient } from '../client.js';
import type { ApiResponse, WesternBirthParams, NatalWheelChartParams, MoonPhaseCalendarParams, FixedStarsDetailsParams, DominantsParams, PersonaChartParams } from '../types.js';
/**
 * Western Natal Astrology API endpoints.
 * Hosts: astroapi-4 and astroapi-8
 */
export declare class NatalApi {
    private readonly client;
    constructor(client: BaseClient);
    /**
     * Get planetary positions (18 bodies, including Vertex).
     *
     * Served from astroapi-8; the older astroapi-4 version omits Vertex. The
     * response uses the newer envelope - `{ status: 'success', code: 200,
     * message, data }` - rather than `{ success: 1, data }`, and invalid input
     * now rejects with a `DivineApiError` whose `statusCode` is 422 (and
     * `responseBody.error.details` names the bad field) instead of resolving
     * with `{ success: 2 }`. The `data` array is unchanged apart from Vertex.
     */
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
    /**
     * Get a Persona Chart for a chosen natal planet.
     *
     * Casts the full chart for the exact moment - within the first year of life -
     * that the transiting Sun reaches the natal degree of `persona_planet`. The
     * search starts one day after birth and scans up to 366 days forward.
     *
     * Returns `persona_planet`, `persona_datetime`, `planetary_positions`,
     * `house_cusps`, `aspect_table` (persona-to-persona) and
     * `persona_natal_aspect` (persona-planet-to-natal-planet).
     *
     * `output_include` controls response size and defaults to `raw_data`
     * server-side (~21 KB). Image tokens are ~0.5 MB per SVG and `all` returns
     * ~4.3 MB, so request only what you need.
     *
     * Note `persona_planet: 'sun'` is accepted but reduces to a one-year-later
     * Solar Return chart.
     */
    personaChart(params: PersonaChartParams): Promise<ApiResponse>;
}
//# sourceMappingURL=natal.d.ts.map