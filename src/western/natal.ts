import { BaseClient } from '../client.js';
import type {
  ApiResponse,
  WesternBirthParams,
  NatalWheelChartParams,
  PlanetReportParams,
  MoonPhaseCalendarParams,
  FixedStarsDetailsParams,
  DominantsParams,
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

  /** Get planetary positions. */
  async planetaryPositions(params: WesternBirthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-4.divineapi.com', '/western-api/v1/planetary-positions', params as unknown as Record<string, unknown>);
  }

  /** Get house cusps. */
  async houseCusps(params: WesternBirthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-4.divineapi.com', '/western-api/v1/house-cusps', params as unknown as Record<string, unknown>);
  }

  /** Get aspect table. */
  async aspectTable(params: WesternBirthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-4.divineapi.com', '/western-api/v2/aspect-table', params as unknown as Record<string, unknown>);
  }

  /** Get natal wheel chart image. */
  async natalWheelChart(params: NatalWheelChartParams): Promise<ApiResponse> {
    return this.client.post('astroapi-4.divineapi.com', '/western-api/v1/natal-wheel-chart', params as unknown as Record<string, unknown>);
  }

  /** Get general sign report for a planet. */
  async generalSignReport(planet: string, params: WesternBirthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-4.divineapi.com', `/western-api/v2/general-sign-report/${planet}`, params as unknown as Record<string, unknown>);
  }

  /** Get general house report for a planet. */
  async generalHouseReport(planet: string, params: WesternBirthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-4.divineapi.com', `/western-api/v2/general-house-report/${planet}`, params as unknown as Record<string, unknown>);
  }

  /** Get moon phases. */
  async moonPhases(params: WesternBirthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-4.divineapi.com', '/western-api/v2/moon-phases', params as unknown as Record<string, unknown>);
  }

  /** Get ascendant report. */
  async ascendantReport(params: WesternBirthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-4.divineapi.com', '/western-api/v2/ascendant-report', params as unknown as Record<string, unknown>);
  }

  /** Get moon phase calendar. */
  async moonPhaseCalendar(params: MoonPhaseCalendarParams): Promise<ApiResponse> {
    return this.client.post('astroapi-4.divineapi.com', '/western-api/v1/moon-phase-calendar', params as unknown as Record<string, unknown>);
  }

  /** Get natal insights. */
  async natalInsights(params: WesternBirthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-4.divineapi.com', '/western-api/v1/natal-insights', params as unknown as Record<string, unknown>);
  }

  /** Get Arabic lots (parts). */
  async arabicLots(params: WesternBirthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/arabic-lots', params as unknown as Record<string, unknown>);
  }

  /** Get asteroid positions. */
  async asteroidPositions(params: WesternBirthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/asteroid-positions', params as unknown as Record<string, unknown>);
  }

  /** Get list of fixed stars. */
  async fixedStarsList(): Promise<ApiResponse> {
    return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/fixed-stars-list', {});
  }

  /** Get details for specific fixed stars. */
  async fixedStarsDetails(params: FixedStarsDetailsParams): Promise<ApiResponse> {
    return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/fixed-stars-details', params as unknown as Record<string, unknown>);
  }

  /** Get planetary midpoints. */
  async planetaryMidpoints(params: WesternBirthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/planetary-midpoints', params as unknown as Record<string, unknown>);
  }

  /** Get eclipse data. */
  async eclipse(params: WesternBirthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/eclipse', params as unknown as Record<string, unknown>);
  }

  /** Get declinations and parallels. */
  async declinationsParallels(params: WesternBirthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/declinations-parallels', params as unknown as Record<string, unknown>);
  }

  /** Get aspect patterns. */
  async aspectPatterns(params: WesternBirthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/aspect-patterns', params as unknown as Record<string, unknown>);
  }

  /** Get chart shape analysis. */
  async chartShape(params: WesternBirthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/chart-shape', params as unknown as Record<string, unknown>);
  }

  /** Get other minor bodies positions. */
  async otherMinorBodies(params: WesternBirthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/other-minor-bodies', params as unknown as Record<string, unknown>);
  }

  /** Get dominants analysis. */
  async dominants(params: DominantsParams): Promise<ApiResponse> {
    return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/dominants', params as unknown as Record<string, unknown>);
  }
}
