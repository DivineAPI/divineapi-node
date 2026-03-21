import { BaseClient } from '../client.js';
import type {
  ApiResponse,
  BasicTransitParams,
  WesternBirthParams,
  WeeklyTransitParams,
  FullTransitParams,
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
    return this.client.post('astroapi-4.divineapi.com', '/western-api/v1/transit/basic', params as unknown as Record<string, unknown>);
  }

  /** Get daily transit. */
  async daily(params: WesternBirthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-4.divineapi.com', '/western-api/v1/transit/daily', params as unknown as Record<string, unknown>);
  }

  /** Get weekly transit. */
  async weekly(params: WeeklyTransitParams): Promise<ApiResponse> {
    return this.client.post('astroapi-4.divineapi.com', '/western-api/v1/transit/weekly', params as unknown as Record<string, unknown>);
  }

  /** Get monthly transit. */
  async monthly(params: FullTransitParams): Promise<ApiResponse> {
    return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/transit/monthly', params as unknown as Record<string, unknown>);
  }

  /** Get full transit data. */
  async full(params: FullTransitParams): Promise<ApiResponse> {
    return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/full-transit', params as unknown as Record<string, unknown>);
  }

  /** Get planetary ingress data. */
  async planetaryIngress(params: PlanetRetrogradeCombustionParams): Promise<ApiResponse> {
    return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/planet-retrograde-transit', params as unknown as Record<string, unknown>);
  }

  /** Get planet retrograde transit. */
  async planetRetrogradeTransit(params: PlanetRetrogradeCombustionParams): Promise<ApiResponse> {
    return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/planet-retrograde-transit', params as unknown as Record<string, unknown>);
  }

  /** Get planet combustion transit. */
  async planetCombustionTransit(params: PlanetRetrogradeCombustionParams): Promise<ApiResponse> {
    return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/planet-combustion-transit', params as unknown as Record<string, unknown>);
  }

  /** Get transit house data. */
  async house(params: TransitHouseParams): Promise<ApiResponse> {
    return this.client.post('astroapi-4.divineapi.com', '/western-api/v1/transit/house', params as unknown as Record<string, unknown>);
  }
}
