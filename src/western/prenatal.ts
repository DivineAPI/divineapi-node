import { BaseClient } from '../client.js';
import type {
  ApiResponse,
  PrenatalListParams,
  PrenatalDetailsParams,
} from '../types.js';

/**
 * Western Prenatal API endpoints.
 * Host: astroapi-8.divineapi.com
 */
export class PrenatalApi {
  private readonly client: BaseClient;

  constructor(client: BaseClient) {
    this.client = client;
  }

  /** Get prenatal list. */
  async list(params: PrenatalListParams): Promise<ApiResponse> {
    return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/prenatal-list', params as unknown as Record<string, unknown>);
  }

  /** Get prenatal details. */
  async details(params: PrenatalDetailsParams): Promise<ApiResponse> {
    return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/prenatal-details', params as unknown as Record<string, unknown>);
  }
}
