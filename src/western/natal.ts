import { BaseClient } from '../client.js';
import type {
  ApiResponse,
  WesternBirthParams,
  NatalWheelChartParams,
  PlanetReportParams,
  MoonPhaseCalendarParams,
  FixedStarsDetailsParams,
  DominantsParams,
  PersonaChartParams,
} from '../types.js';

/**
 * Western Natal Astrology API endpoints.
 * Hosts: astroapi-4 and astroapi-8
 */
export class NatalApi {
  private readonly client: BaseClient;

  constructor(client: BaseClient) {
    this.client = client;
  }

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
  async planetaryPositions(params: WesternBirthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/planetary-positions', params);
  }

  /** Get house cusps. */
  async houseCusps(params: WesternBirthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-4.divineapi.com', '/western-api/v1/house-cusps', params);
  }

  /** Get aspect table. */
  async aspectTable(params: WesternBirthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-4.divineapi.com', '/western-api/v2/aspect-table', params);
  }

  /** Get natal wheel chart image. */
  async natalWheelChart(params: NatalWheelChartParams): Promise<ApiResponse> {
    return this.client.post('astroapi-8.divineapi.com', '/western-api/v2/natal-wheel-chart', params);
  }

  /** Get general sign report for a planet. */
  async generalSignReport(planet: string, params: WesternBirthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-4.divineapi.com', `/western-api/v2/general-sign-report/${planet}`, params);
  }

  /** Get general house report for a planet. */
  async generalHouseReport(planet: string, params: WesternBirthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-4.divineapi.com', `/western-api/v2/general-house-report/${planet}`, params);
  }

  /** Get moon phases. */
  async moonPhases(params: WesternBirthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-4.divineapi.com', '/western-api/v2/moon-phases', params);
  }

  /** Get ascendant report. */
  async ascendantReport(params: WesternBirthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-4.divineapi.com', '/western-api/v2/ascendant-report', params);
  }

  /** Get moon phase calendar. */
  async moonPhaseCalendar(params: MoonPhaseCalendarParams): Promise<ApiResponse> {
    return this.client.post('astroapi-4.divineapi.com', '/western-api/v1/moon-phase-calendar', params);
  }

  /** Get natal insights. */
  async natalInsights(params: WesternBirthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-4.divineapi.com', '/western-api/v1/natal-insights', params);
  }

  /** Get Arabic lots (parts). */
  async arabicLots(params: WesternBirthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/arabic-lots', params);
  }

  /** Get asteroid positions. */
  async asteroidPositions(params: WesternBirthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/asteroid-positions', params);
  }

  /** Get list of fixed stars. */
  async fixedStarsList(): Promise<ApiResponse> {
    return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/fixed-stars-list', {});
  }

  /** Get details for specific fixed stars. */
  async fixedStarsDetails(params: FixedStarsDetailsParams): Promise<ApiResponse> {
    return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/fixed-stars-details', params);
  }

  /** Get planetary midpoints. */
  async planetaryMidpoints(params: WesternBirthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/planetary-midpoints', params);
  }

  /** Get eclipse data. */
  async eclipse(params: WesternBirthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/eclipse', params);
  }

  /** Get declinations and parallels. */
  async declinationsParallels(params: WesternBirthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/declinations-parallels', params);
  }

  /** Get aspect patterns. */
  async aspectPatterns(params: WesternBirthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/aspect-patterns', params);
  }

  /** Get chart shape analysis. */
  async chartShape(params: WesternBirthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/chart-shape', params);
  }

  /** Get other minor bodies positions. */
  async otherMinorBodies(params: WesternBirthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/other-minor-bodies', params);
  }

  /** Get dominants analysis. */
  async dominants(params: DominantsParams): Promise<ApiResponse> {
    return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/dominants', params);
  }

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
  async personaChart(params: PersonaChartParams): Promise<ApiResponse> {
    return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/persona-chart', params);
  }
}
