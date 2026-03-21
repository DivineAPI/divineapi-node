import { BaseClient } from '../client.js';
import type {
  ApiResponse,
  MatchMakingParams,
  MatchingChartParams,
} from '../types.js';

/**
 * Indian Match Making API endpoints.
 * Host: astroapi-3.divineapi.com
 */
export class MatchMakingApi {
  private readonly client: BaseClient;

  constructor(client: BaseClient) {
    this.client = client;
  }

  /** Get Ashtakoot Milan (North Indian matching). */
  async ashtakootMilan(params: MatchMakingParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v2/ashtakoot-milan', params);
  }

  /** Get Dashakoot Milan (South Indian matching). */
  async dashakootMilan(params: MatchMakingParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v2/dashakoot-milan', params);
  }

  /** Get Nav Pancham Yoga. */
  async navPanchamYoga(params: MatchMakingParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/nav-pancham-yoga', params);
  }

  /** Get matching basic astro details. */
  async basicAstroDetails(params: MatchMakingParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v3/matching/basic-astro-details', params);
  }

  /** Get matching planetary positions. */
  async planetaryPositions(params: MatchMakingParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v2/matching/planetary-positions', params);
  }

  /** Get matching Vimshottari dasha. */
  async vimshottariDasha(params: MatchMakingParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/matching/vimshottari-dasha', params);
  }

  /** Get matching Manglik dosha. */
  async manglikDosha(params: MatchMakingParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v2/matching/manglik-dosha', params);
  }

  /** Get matching horoscope chart. */
  async horoscopeChart(params: MatchingChartParams): Promise<ApiResponse> {
    const { chart_id, ...rest } = params;
    return this.client.post('astroapi-3.divineapi.com', `/indian-api/v1/matching/horoscope-chart/${chart_id}`, rest);
  }
}
