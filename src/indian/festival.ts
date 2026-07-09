import { BaseClient } from '../client.js';
import type {
  ApiResponse,
  FestivalMonthParams,
  EnglishCalendarFestivalParams,
  DateSpecificFestivalParams,
  FindFestivalParams,
  MalayalamFestivalParams,
  TamilFestivalParams,
  SankrantiFestivalParams,
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
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v2/margashirsh-festivals', params);
  }

  /** Get Ashvina month festivals. */
  async ashvinaFestivals(params: FestivalMonthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v2/ashvina-festivals', params);
  }

  /** Get Magha month festivals. */
  async maghaFestivals(params: FestivalMonthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v2/magha-festivals', params);
  }

  /** Get Phalguna month festivals. */
  async phalgunaFestivals(params: FestivalMonthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v2/phalguna-festivals', params);
  }

  /** Get Chaitra month festivals. */
  async chaitraFestivals(params: FestivalMonthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v2/chaitra-festivals', params);
  }

  /** Get Vaishakha month festivals. */
  async vaishakhaFestivals(params: FestivalMonthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v2/vaishakha-festivals', params);
  }

  /** Get Jyeshtha month festivals. */
  async jyeshthaFestivals(params: FestivalMonthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v2/jyeshtha-festivals', params);
  }

  /** Get Ashada month festivals. */
  async ashadaFestivals(params: FestivalMonthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v2/ashada-festivals', params);
  }

  /** Get Shraavana month festivals. */
  async shraavanaFestivals(params: FestivalMonthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v2/shraavana-festivals', params);
  }

  /** Get Bhadrapada month festivals. */
  async bhadrapadaFestivals(params: FestivalMonthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v2/bhadrapada-festivals', params);
  }

  /** Get Kartika month festivals. */
  async kartikaFestivals(params: FestivalMonthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v2/kartika-festivals', params);
  }

  /** Get Pausha month festivals. */
  async paushaFestivals(params: FestivalMonthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v2/pausha-festivals', params);
  }

  /** Get English calendar festivals for a given month and year. */
  async englishCalendarFestivals(params: EnglishCalendarFestivalParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/english-calendar-festivals', params);
  }

  /** Get festivals for a specific date. */
  async dateSpecificFestivals(params: DateSpecificFestivalParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/date-specific-festivals', params);
  }

  /** Find a specific festival. */
  async findFestival(params: FindFestivalParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/find-festival', params);
  }

  /** Get Malayalam (Kerala) festivals for a year (Vishu, Onam, Guruvayur Ekadashi, etc.). */
  async malayalamFestivals(params: MalayalamFestivalParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/malayalam-festivals', params);
  }

  /** Get Tamil festivals for a year (Thai Pongal, Puthandu, Karthigai Deepam, etc.). */
  async tamilFestivals(params: TamilFestivalParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/tamil-festivals', params);
  }

  /** Get Sankranti festivals for a year. */
  async sankrantiFestivals(params: SankrantiFestivalParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/sankranti-festivals', params);
  }
}
