import { BaseClient } from '../client.js';
import type {
  ApiResponse,
  PlanetReturnListParams,
  PlanetReturnDetailsParams,
} from '../types.js';

/**
 * Western Planet Returns API endpoints.
 * Host: astroapi-8.divineapi.com
 */
export class PlanetReturnsApi {
  private readonly client: BaseClient;

  constructor(client: BaseClient) {
    this.client = client;
  }

  /** Get planet return list. */
  async list(params: PlanetReturnListParams): Promise<ApiResponse> {
    return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/planet-returns-list', params as unknown as Record<string, unknown>);
  }

  /** Get planet return details. */
  async details(params: PlanetReturnDetailsParams): Promise<ApiResponse> {
    return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/planet-return-details', params as unknown as Record<string, unknown>);
  }
}
