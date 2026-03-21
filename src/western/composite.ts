import { BaseClient } from '../client.js';
import type {
  ApiResponse,
  CompositeParams,
  CompositeChartParams,
} from '../types.js';

/**
 * Western Composite Chart API endpoints.
 * Host: astroapi-8.divineapi.com
 */
export class CompositeApi {
  private readonly client: BaseClient;

  constructor(client: BaseClient) {
    this.client = client;
  }

  /** Get composite planetary positions. */
  async planetaryPositions(params: CompositeParams): Promise<ApiResponse> {
    return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/composite/planetary-positions', params as unknown as Record<string, unknown>);
  }

  /** Get composite house cusps. */
  async houseCusps(params: CompositeParams): Promise<ApiResponse> {
    return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/composite/house-cusps', params as unknown as Record<string, unknown>);
  }

  /** Get composite aspect table. */
  async aspectTable(params: CompositeParams): Promise<ApiResponse> {
    return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/composite/aspect-table', params as unknown as Record<string, unknown>);
  }

  /** Get composite natal wheel chart. */
  async natalWheelChart(params: CompositeChartParams): Promise<ApiResponse> {
    return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/composite/natal-wheel-chart', params as unknown as Record<string, unknown>);
  }
}
