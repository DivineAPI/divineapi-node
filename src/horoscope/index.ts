import { BaseClient } from '../client.js';
import type {
  ApiResponse,
  DailyHoroscopeParams,
  WeeklyHoroscopeParams,
  MonthlyHoroscopeParams,
  YearlyHoroscopeParams,
  ChineseHoroscopeParams,
  NumerologyHoroscopeParams,
  LanguageParam,
  CardImageParams,
  LoveCompatibilityParams,
  WhichAnimalParams,
} from '../types.js';

/**
 * Horoscope & Tarot API endpoints.
 * Host: astroapi-5.divineapi.com
 */
export class HoroscopeApi {
  private readonly client: BaseClient;

  constructor(client: BaseClient) {
    this.client = client;
  }

  /** Get daily horoscope for a zodiac sign. */
  async daily(params: DailyHoroscopeParams): Promise<ApiResponse> {
    return this.client.post('astroapi-5.divineapi.com', '/api/v5/daily-horoscope', params as unknown as Record<string, unknown>);
  }

  /** Get weekly horoscope for a zodiac sign. */
  async weekly(params: WeeklyHoroscopeParams): Promise<ApiResponse> {
    return this.client.post('astroapi-5.divineapi.com', '/api/v5/weekly-horoscope', params as unknown as Record<string, unknown>);
  }

  /** Get monthly horoscope for a zodiac sign. */
  async monthly(params: MonthlyHoroscopeParams): Promise<ApiResponse> {
    return this.client.post('astroapi-5.divineapi.com', '/api/v5/monthly-horoscope', params as unknown as Record<string, unknown>);
  }

  /** Get yearly horoscope for a zodiac sign. */
  async yearly(params: YearlyHoroscopeParams): Promise<ApiResponse> {
    return this.client.post('astroapi-5.divineapi.com', '/api/v5/yearly-horoscope', params as unknown as Record<string, unknown>);
  }

  /** Get Chinese horoscope. */
  async chinese(params: ChineseHoroscopeParams): Promise<ApiResponse> {
    return this.client.post('astroapi-5.divineapi.com', '/api/v3/chinese-horoscope', params as unknown as Record<string, unknown>);
  }

  /** Get numerology-based horoscope. */
  async numerology(params: NumerologyHoroscopeParams): Promise<ApiResponse> {
    return this.client.post('astroapi-5.divineapi.com', '/api/v2/numerology-horoscope', params as unknown as Record<string, unknown>);
  }

  /** Get a Yes or No tarot reading. */
  async yesOrNoTarot(params: LanguageParam = {}): Promise<ApiResponse> {
    return this.client.post('astroapi-5.divineapi.com', '/api/v2/yes-or-no-tarot', params as unknown as Record<string, unknown>);
  }

  /** Get a daily tarot reading. */
  async dailyTarot(params: LanguageParam = {}): Promise<ApiResponse> {
    return this.client.post('astroapi-5.divineapi.com', '/api/v2/daily-tarot', params as unknown as Record<string, unknown>);
  }

  /** Get a fortune cookie reading. */
  async fortuneCookie(params: LanguageParam = {}): Promise<ApiResponse> {
    return this.client.post('astroapi-5.divineapi.com', '/api/v2/fortune-cookie', params as unknown as Record<string, unknown>);
  }

  /** Get a coffee cup reading. */
  async coffeeCupReading(params: LanguageParam = {}): Promise<ApiResponse> {
    return this.client.post('astroapi-5.divineapi.com', '/api/v2/coffee-cup-reading', params as unknown as Record<string, unknown>);
  }

  /** Get career daily reading. */
  async careerDailyReading(params: LanguageParam = {}): Promise<ApiResponse> {
    return this.client.post('astroapi-5.divineapi.com', '/api/v3/career-daily-reading', params as unknown as Record<string, unknown>);
  }

  /** Get divine angel reading. */
  async divineAngelReading(params: LanguageParam = {}): Promise<ApiResponse> {
    return this.client.post('astroapi-5.divineapi.com', '/api/v3/divine-angel-reading', params as unknown as Record<string, unknown>);
  }

  /** Get divine magic reading. */
  async divineMagicReading(params: CardImageParams = {}): Promise<ApiResponse> {
    return this.client.post('astroapi-5.divineapi.com', '/api/v2/divine-magic-reading', params as unknown as Record<string, unknown>);
  }

  /** Get dream come true reading. */
  async dreamComeTrueReading(params: LanguageParam = {}): Promise<ApiResponse> {
    return this.client.post('astroapi-5.divineapi.com', '/api/v3/dream-come-true-reading', params as unknown as Record<string, unknown>);
  }

  /** Get Egyptian prediction reading. */
  async egyptianPrediction(params: LanguageParam = {}): Promise<ApiResponse> {
    return this.client.post('astroapi-5.divineapi.com', '/api/v3/egyptian-prediction', params as unknown as Record<string, unknown>);
  }

  /** Get erotic love reading. */
  async eroticLoveReading(params: LanguageParam = {}): Promise<ApiResponse> {
    return this.client.post('astroapi-5.divineapi.com', '/api/v3/erotic-love-reading', params as unknown as Record<string, unknown>);
  }

  /** Get ex-flame reading. */
  async exFlameReading(params: LanguageParam = {}): Promise<ApiResponse> {
    return this.client.post('astroapi-5.divineapi.com', '/api/v3/ex-flame-reading', params as unknown as Record<string, unknown>);
  }

  /** Get flirt love reading. */
  async flirtLoveReading(params: LanguageParam = {}): Promise<ApiResponse> {
    return this.client.post('astroapi-5.divineapi.com', '/api/v3/flirt-love-reading', params as unknown as Record<string, unknown>);
  }

  /** Get heartbreak reading. */
  async heartbreakReading(params: CardImageParams = {}): Promise<ApiResponse> {
    return this.client.post('astroapi-5.divineapi.com', '/api/v2/heartbreak-reading', params as unknown as Record<string, unknown>);
  }

  /** Get in-depth love reading. */
  async inDepthLoveReading(params: LanguageParam = {}): Promise<ApiResponse> {
    return this.client.post('astroapi-5.divineapi.com', '/api/v3/in-depth-love-reading', params as unknown as Record<string, unknown>);
  }

  /** Get know your friend reading. */
  async knowYourFriendReading(params: LanguageParam = {}): Promise<ApiResponse> {
    return this.client.post('astroapi-5.divineapi.com', '/api/v3/know-your-friend-reading', params as unknown as Record<string, unknown>);
  }

  /** Get love compatibility between two signs. */
  async loveCompatibility(params: LoveCompatibilityParams): Promise<ApiResponse> {
    return this.client.post('astroapi-5.divineapi.com', '/api/v2/love-compatibility', params as unknown as Record<string, unknown>);
  }

  /** Get love triangle reading. */
  async loveTriangleReading(params: CardImageParams = {}): Promise<ApiResponse> {
    return this.client.post('astroapi-5.divineapi.com', '/api/v2/love-triangle-reading', params as unknown as Record<string, unknown>);
  }

  /** Get made for each other reading. */
  async madeForEachOther(params: LanguageParam = {}): Promise<ApiResponse> {
    return this.client.post('astroapi-5.divineapi.com', '/api/v3/made-for-each-other-or-not-reading', params as unknown as Record<string, unknown>);
  }

  /** Get power life reading. */
  async powerLifeReading(params: LanguageParam = {}): Promise<ApiResponse> {
    return this.client.post('astroapi-5.divineapi.com', '/api/v3/power-life-reading', params as unknown as Record<string, unknown>);
  }

  /** Get past lives connection reading. */
  async pastLivesConnectionReading(params: LanguageParam = {}): Promise<ApiResponse> {
    return this.client.post('astroapi-5.divineapi.com', '/api/v3/past-lives-connection-reading', params as unknown as Record<string, unknown>);
  }

  /** Get past-present-future reading. */
  async pastPresentFutureReading(params: CardImageParams = {}): Promise<ApiResponse> {
    return this.client.post('astroapi-5.divineapi.com', '/api/v3/past-present-future-reading', params as unknown as Record<string, unknown>);
  }

  /** Get which animal are you reading. */
  async whichAnimalAreYou(params: WhichAnimalParams): Promise<ApiResponse> {
    return this.client.post('astroapi-5.divineapi.com', '/api/v2/which-animal-are-you-reading', params as unknown as Record<string, unknown>);
  }

  /** Get wisdom reading. */
  async wisdomReading(params: CardImageParams = {}): Promise<ApiResponse> {
    return this.client.post('astroapi-5.divineapi.com', '/api/v2/wisdom-reading', params as unknown as Record<string, unknown>);
  }
}
