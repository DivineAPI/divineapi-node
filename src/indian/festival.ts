import { BaseClient } from '../client.js';
import type {
  ApiResponse,
  FestivalMonthParams,
  EnglishCalendarFestivalParams,
  DateSpecificFestivalParams,
  FindFestivalParams,
} from '../types.js';

/**
 * Indian Festival API endpoints.
 * Host: astroapi-3.divineapi.com
 */
export class FestivalApi {
  private readonly client: BaseClient;

  constructor(client: BaseClient) {
    this.client = client;
  }

  /** Get Margashirsh month festivals. */
  async margashirshFestivals(params: FestivalMonthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v2/margashirsh-festivals', params as unknown as Record<string, unknown>);
  }

  /** Get Ashvina month festivals. */
  async ashvinaFestivals(params: FestivalMonthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v2/ashvina-festivals', params as unknown as Record<string, unknown>);
  }

  /** Get Magha month festivals. */
  async maghaFestivals(params: FestivalMonthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v2/magha-festivals', params as unknown as Record<string, unknown>);
  }

  /** Get Phalguna month festivals. */
  async phalgunaFestivals(params: FestivalMonthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v2/phalguna-festivals', params as unknown as Record<string, unknown>);
  }

  /** Get Chaitra month festivals. */
  async chaitraFestivals(params: FestivalMonthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v2/chaitra-festivals', params as unknown as Record<string, unknown>);
  }

  /** Get Vaishakha month festivals. */
  async vaishakhaFestivals(params: FestivalMonthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v2/vaishakha-festivals', params as unknown as Record<string, unknown>);
  }

  /** Get Jyeshtha month festivals. */
  async jyeshthaFestivals(params: FestivalMonthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v2/jyeshtha-festivals', params as unknown as Record<string, unknown>);
  }

  /** Get Ashada month festivals. */
  async ashadaFestivals(params: FestivalMonthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v2/ashada-festivals', params as unknown as Record<string, unknown>);
  }

  /** Get Shraavana month festivals. */
  async shraavanaFestivals(params: FestivalMonthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v2/shraavana-festivals', params as unknown as Record<string, unknown>);
  }

  /** Get Bhadrapada month festivals. */
  async bhadrapadaFestivals(params: FestivalMonthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v2/bhadrapada-festivals', params as unknown as Record<string, unknown>);
  }

  /** Get Kartika month festivals. */
  async kartikaFestivals(params: FestivalMonthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v2/kartika-festivals', params as unknown as Record<string, unknown>);
  }

  /** Get Pausha month festivals. */
  async paushaFestivals(params: FestivalMonthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v2/pausha-festivals', params as unknown as Record<string, unknown>);
  }

  /** Get English calendar festivals for a given month and year. */
  async englishCalendarFestivals(params: EnglishCalendarFestivalParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/english-calendar-festivals', params as unknown as Record<string, unknown>);
  }

  /** Get festivals for a specific date. */
  async dateSpecificFestivals(params: DateSpecificFestivalParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/date-specific-festivals', params as unknown as Record<string, unknown>);
  }

  /** Find a specific festival. */
  async findFestival(params: FindFestivalParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/find-festival', params as unknown as Record<string, unknown>);
  }
}
