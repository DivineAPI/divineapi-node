import { HoroscopeApi } from './horoscope/index.js';
import { IndianApi } from './indian/index.js';
import { WesternApi } from './western/index.js';
import { PdfReportApi } from './pdf/index.js';
import { NumerologyApi } from './numerology/index.js';
import { LifestyleApi } from './lifestyle/index.js';
import { CalculatorApi } from './calculators/index.js';
import type { DivineApiConfig } from './types.js';
/**
 * Divine API SDK client.
 *
 * @example
 * ```typescript
 * import { DivineApi } from 'divineapi';
 *
 * const client = new DivineApi({
 *   apiKey: 'your-api-key',
 *   authToken: 'your-bearer-token',
 * });
 *
 * // Get daily horoscope
 * const result = await client.horoscope.daily({
 *   sign: 'aries',
 *   day: 21,
 *   month: 3,
 *   year: 2026,
 *   tzone: 5.5,
 *   lan: 'en',
 * });
 * ```
 */
export declare class DivineApi {
    /** Horoscope & Tarot endpoints */
    readonly horoscope: HoroscopeApi;
    /** Indian Astrology (Panchang, Kundli, Match Making, Festivals) */
    readonly indian: IndianApi;
    /** Western Astrology (Natal, Synastry, Transit, Composite, Returns, Progressions, Prenatal) */
    readonly western: WesternApi;
    /** PDF Report generation endpoints */
    readonly pdf: PdfReportApi;
    /** Numerology endpoints */
    readonly numerology: NumerologyApi;
    /** Lifestyle endpoints */
    readonly lifestyle: LifestyleApi;
    /** Calculator endpoints */
    readonly calculators: CalculatorApi;
    constructor(config: DivineApiConfig);
}
export { BaseClient } from './client.js';
export { HoroscopeApi } from './horoscope/index.js';
export { IndianApi, PanchangApi, KundliApi, MatchMakingApi, FestivalApi } from './indian/index.js';
export { WesternApi, NatalApi, SynastryApi, TransitApi, CompositeApi, PlanetReturnsApi, ProgressionsApi, PrenatalApi } from './western/index.js';
export { PdfReportApi } from './pdf/index.js';
export { NumerologyApi } from './numerology/index.js';
export { LifestyleApi } from './lifestyle/index.js';
export { CalculatorApi } from './calculators/index.js';
export { DivineApiError, AuthenticationError, RateLimitError, ValidationError, NetworkError } from './errors.js';
export type * from './types.js';
//# sourceMappingURL=index.d.ts.map