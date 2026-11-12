import { BaseClient } from '../client.js';
import type { ApiResponse, DailyHoroscopeParams, WeeklyHoroscopeParams, MonthlyHoroscopeParams, YearlyHoroscopeParams, ChineseHoroscopeParams, ChineseWeeklyHoroscopeParams, ChineseMonthlyHoroscopeParams, ChineseYearlyHoroscopeParams, NumerologyHoroscopeParams, LanguageParam, CardImageParams, LoveCompatibilityParams, WhichAnimalParams } from '../types.js';
/**
 * Horoscope & Tarot API endpoints.
 * Host: astroapi-5.divineapi.com
 */
export declare class HoroscopeApi {
    private readonly client;
    constructor(client: BaseClient);
    /**
     * Get daily horoscope for a zodiac sign.
     * The reading is selected by `h_day` ('today' | 'tomorrow' | 'yesterday').
     * The deprecated `day`/`month`/`year` fields are ignored by the API and are
     * not forwarded.
     */
    daily(params: DailyHoroscopeParams): Promise<ApiResponse>;
    /** Get weekly horoscope for a zodiac sign. */
    weekly(params: WeeklyHoroscopeParams): Promise<ApiResponse>;
    /** Get monthly horoscope for a zodiac sign. */
    monthly(params: MonthlyHoroscopeParams): Promise<ApiResponse>;
    /** Get yearly horoscope for a zodiac sign. */
    yearly(params: YearlyHoroscopeParams): Promise<ApiResponse>;
    /** Get Chinese horoscope (daily: `h_day` is 'today', 'tomorrow' or 'yesterday'). */
    chinese(params: ChineseHoroscopeParams): Promise<ApiResponse>;
    /**
     * Get the weekly Chinese horoscope for an animal sign. `data` has `sign`, `week`
     * (e.g. "10 Nov 2026 to 16 Nov 2026") and `prediction` (growth, health, wealth,
     * career, love, family, fortune).
     */
    chineseWeekly(params: ChineseWeeklyHoroscopeParams): Promise<ApiResponse>;
    /** Get the monthly Chinese horoscope. `data` has `sign`, `month` (e.g. "November 2026") and `prediction`. */
    chineseMonthly(params: ChineseMonthlyHoroscopeParams): Promise<ApiResponse>;
    /** Get the yearly Chinese horoscope. `data` has `sign`, `year` and `prediction`. */
    chineseYearly(params: ChineseYearlyHoroscopeParams): Promise<ApiResponse>;
    /** Get numerology-based horoscope. */
    numerology(params: NumerologyHoroscopeParams): Promise<ApiResponse>;
    /** Get a Yes or No tarot reading. */
    yesOrNoTarot(params?: LanguageParam): Promise<ApiResponse>;
    /** Get a daily tarot reading. */
    dailyTarot(params?: LanguageParam): Promise<ApiResponse>;
    /** Get a fortune cookie reading. */
    fortuneCookie(params?: LanguageParam): Promise<ApiResponse>;
    /** Get a coffee cup reading. */
    coffeeCupReading(params?: LanguageParam): Promise<ApiResponse>;
    /** Get career daily reading. */
    careerDailyReading(params?: LanguageParam): Promise<ApiResponse>;
    /** Get divine angel reading. */
    divineAngelReading(params?: LanguageParam): Promise<ApiResponse>;
    /** Get divine magic reading. */
    divineMagicReading(params?: CardImageParams): Promise<ApiResponse>;
    /** Get dream come true reading. */
    dreamComeTrueReading(params?: LanguageParam): Promise<ApiResponse>;
    /** Get Egyptian prediction reading. */
    egyptianPrediction(params?: LanguageParam): Promise<ApiResponse>;
    /** Get erotic love reading. */
    eroticLoveReading(params?: LanguageParam): Promise<ApiResponse>;
    /** Get ex-flame reading. */
    exFlameReading(params?: LanguageParam): Promise<ApiResponse>;
    /** Get flirt love reading. */
    flirtLoveReading(params?: LanguageParam): Promise<ApiResponse>;
    /** Get heartbreak reading. */
    heartbreakReading(params?: CardImageParams): Promise<ApiResponse>;
    /** Get in-depth love reading. */
    inDepthLoveReading(params?: LanguageParam): Promise<ApiResponse>;
    /** Get know your friend reading. */
    knowYourFriendReading(params?: LanguageParam): Promise<ApiResponse>;
    /** Get love compatibility between two signs. */
    loveCompatibility(params: LoveCompatibilityParams): Promise<ApiResponse>;
    /** Get love triangle reading. */
    loveTriangleReading(params?: CardImageParams): Promise<ApiResponse>;
    /** Get made for each other reading. */
    madeForEachOther(params?: LanguageParam): Promise<ApiResponse>;
    /** Get power life reading. */
    powerLifeReading(params?: LanguageParam): Promise<ApiResponse>;
    /** Get past lives connection reading. */
    pastLivesConnectionReading(params?: LanguageParam): Promise<ApiResponse>;
    /** Get past-present-future reading. */
    pastPresentFutureReading(params?: CardImageParams): Promise<ApiResponse>;
    /** Get which animal are you reading. */
    whichAnimalAreYou(params: WhichAnimalParams): Promise<ApiResponse>;
    /** Get wisdom reading. */
    wisdomReading(params?: CardImageParams): Promise<ApiResponse>;
}
//# sourceMappingURL=index.d.ts.map