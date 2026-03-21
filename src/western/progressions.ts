import { BaseClient } from '../client.js';
import type {
  ApiResponse,
  ProgressedLunarEventsParams,
  PlanetaryArcDirectionsParams,
  SecondaryProgressionsParams,
} from '../types.js';

/**
 * Western Progressions API endpoints.
 * Host: astroapi-8.divineapi.com
 */
export class ProgressionsApi {
  private readonly client: BaseClient;

  constructor(client: BaseClient) {
    this.client = client;
  }

  /** Get progressed lunar events. */
  async progressedLunarEvents(params: ProgressedLunarEventsParams): Promise<ApiResponse> {
    return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/progressed-lunar-events', params);
  }

  /** Get planetary arc directions. */
  async planetaryArcDirections(params: PlanetaryArcDirectionsParams): Promise<ApiResponse> {
    return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/planetary-arc-directions', params);
  }

  /** Get secondary progressions. */
  async secondaryProgressions(params: SecondaryProgressionsParams): Promise<ApiResponse> {
    return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/secondary-progressions', params);
  }
}
