import { BaseClient } from './client.js';
import { HoroscopeApi } from './horoscope/index.js';
import { IndianApi } from './indian/index.js';
import { WesternApi } from './western/index.js';
import { PdfReportApi } from './pdf/index.js';
import { NumerologyApi } from './numerology/index.js';
import { LifestyleApi } from './lifestyle/index.js';
import { CalculatorApi } from './calculators/index.js';
import { DivineApiError } from './errors.js';
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
export class DivineApi {
    /** Horoscope & Tarot endpoints */
    horoscope;
    /** Indian Astrology (Panchang, Kundli, Match Making, Festivals) */
    indian;
    /** Western Astrology (Natal, Synastry, Transit, Composite, Returns, Progressions, Prenatal) */
    western;
    /** PDF Report generation endpoints */
    pdf;
    /** Numerology endpoints */
    numerology;
    /** Lifestyle endpoints */
    lifestyle;
    /** Calculator endpoints */
    calculators;
    constructor(config) {
        if (!config.apiKey) {
            throw new DivineApiError('apiKey is required to initialize DivineApi', 0);
        }
        const client = new BaseClient(config);
        this.horoscope = new HoroscopeApi(client);
        this.indian = new IndianApi(client);
        this.western = new WesternApi(client);
        this.pdf = new PdfReportApi(client);
        this.numerology = new NumerologyApi(client);
        this.lifestyle = new LifestyleApi(client);
        this.calculators = new CalculatorApi(client);
    }
}
// Re-export everything
export { BaseClient } from './client.js';
export { HoroscopeApi } from './horoscope/index.js';
export { IndianApi, PanchangApi, KundliApi, MatchMakingApi, FestivalApi } from './indian/index.js';
export { WesternApi, NatalApi, SynastryApi, TransitApi, CompositeApi, PlanetReturnsApi, ProgressionsApi, PrenatalApi } from './western/index.js';
export { PdfReportApi } from './pdf/index.js';
export { NumerologyApi } from './numerology/index.js';
export { LifestyleApi } from './lifestyle/index.js';
export { CalculatorApi } from './calculators/index.js';
export { DivineApiError, AuthenticationError, RateLimitError, ValidationError, NetworkError } from './errors.js';
//# sourceMappingURL=index.js.map