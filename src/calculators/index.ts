import { BaseClient } from '../client.js';
import type {
  ApiResponse,
  FlamesCalculatorParams,
  LoveCalculatorParams,
} from '../types.js';

/**
 * Calculator API endpoints.
 * Host: astroapi-7.divineapi.com
 */
export class CalculatorApi {
  private readonly client: BaseClient;

  constructor(client: BaseClient) {
    this.client = client;
  }

  /** Calculate FLAMES compatibility. */
  async flames(params: FlamesCalculatorParams): Promise<ApiResponse> {
    return this.client.post('astroapi-7.divineapi.com', '/calculator/v1/flames-calculator', params as unknown as Record<string, unknown>);
  }

  /** Calculate love compatibility. */
  async love(params: LoveCalculatorParams): Promise<ApiResponse> {
    return this.client.post('astroapi-7.divineapi.com', '/calculator/v1/love-calculator', params as unknown as Record<string, unknown>);
  }
}
