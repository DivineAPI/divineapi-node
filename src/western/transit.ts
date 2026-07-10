import { BaseClient } from '../client.js';
import type {
  ApiResponse,
  BasicTransitParams,
  WesternBirthParams,
  WeeklyTransitParams,
  FullTransitParams,
  MonthlyTransitParams,
  TransitChartParams,
  PlanetRetrogradeCombustionParams,
  TransitHouseParams,
} from '../types.js';

/**
 * Western Transit API endpoints.
 * Hosts: astroapi-4 and astroapi-8
 */
export class TransitApi {
  private readonly client: BaseClient;

  constructor(client: BaseClient) {
    this.client = client;
  }

  /** Get basic transit data. */
  async basic(params: BasicTransitParams): Promise<ApiResponse> {
    return this.client.post('astroapi-4.divineapi.com', '/western-api/v1/transit/basic', params);
  }

  /** Get daily transit. */
  async daily(params: WesternBirthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-4.divineapi.com', '/western-api/v1/transit/daily', params);
  }

  /** Get weekly transit. */
  async weekly(params: WeeklyTransitParams): Promise<ApiResponse> {
    return this.client.post('astroapi-4.divineapi.com', '/western-api/v1/transit/weekly', params);
  }

  /** Get monthly transit. Requires transit_planet, transit_month, transit_year, and the transit location. */
  async monthly(params: MonthlyTransitParams): Promise<ApiResponse> {
    return this.client.post('astroapi-8.divineapi.com', '/western-api/v2/transit/monthly', params);
  }

  /** Get full transit data. Requires transit_planet plus the transit date and location. */
  async full(params: FullTransitParams): Promise<ApiResponse> {
    return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/full-transit', params);
  }

  /** Get planetary ingress data. */
  async planetaryIngress(params: PlanetRetrogradeCombustionParams): Promise<ApiResponse> {
    return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/planetary-ingress', params);
  }

  /** Get planet retrograde transit. */
  async planetRetrogradeTransit(params: PlanetRetrogradeCombustionParams): Promise<ApiResponse> {
    return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/planet-retrograde-transit', params);
  }

  /** Get planet combustion transit. */
  async planetCombustionTransit(params: PlanetRetrogradeCombustionParams): Promise<ApiResponse> {
    return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/planet-combustion-transit', params);
  }

  /** Get transit wheel chart. Requires the transit date and location (no transit_planet). */
  async wheelChart(params: TransitChartParams): Promise<ApiResponse> {
    return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/transit/wheel-chart', params);
  }

  /** Get transit planetary positions. Requires the transit date and location (no transit_planet). */
  async planetaryPositions(params: TransitChartParams): Promise<ApiResponse> {
    return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/transit/planetary-positions', params);
  }

  /** Get transit house data. */
  async house(params: TransitHouseParams): Promise<ApiResponse> {
    return this.client.post('astroapi-4.divineapi.com', '/western-api/v1/transit/house', params);
  }
}
