import { BaseClient } from '../client.js';
import type {
  ApiResponse,
  LifestyleParams,
} from '../types.js';

/**
 * Lifestyle API endpoints.
 * Host: astroapi-7.divineapi.com
 */
export class LifestyleApi {
  private readonly client: BaseClient;

  constructor(client: BaseClient) {
    this.client = client;
  }

  /** Get zodiac gift guru suggestions. */
  async zodiacGiftGuru(params: LifestyleParams): Promise<ApiResponse> {
    return this.client.post('astroapi-7.divineapi.com', '/api/v1/zodiac-gift-guru', params);
  }

  /** Get beauty by the stars recommendations. */
  async beautyByStars(params: LifestyleParams): Promise<ApiResponse> {
    return this.client.post('astroapi-7.divineapi.com', '/api/v1/beauty-by-the-stars', params);
  }

  /** Get astro chic picks. */
  async astroChicPicks(params: LifestyleParams): Promise<ApiResponse> {
    return this.client.post('astroapi-7.divineapi.com', '/api/v1/astro-chic-picks', params);
  }
}
