"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkError = exports.ValidationError = exports.RateLimitError = exports.AuthenticationError = exports.DivineApiError = exports.CalculatorApi = exports.LifestyleApi = exports.NumerologyApi = exports.PdfReportApi = exports.PrenatalApi = exports.ProgressionsApi = exports.PlanetReturnsApi = exports.CompositeApi = exports.TransitApi = exports.SynastryApi = exports.NatalApi = exports.WesternApi = exports.FestivalApi = exports.MatchMakingApi = exports.KundliApi = exports.PanchangApi = exports.IndianApi = exports.HoroscopeApi = exports.BaseClient = exports.DivineApi = void 0;
const client_js_1 = require("./client.js");
const index_js_1 = require("./horoscope/index.js");
const index_js_2 = require("./indian/index.js");
const index_js_3 = require("./western/index.js");
const index_js_4 = require("./pdf/index.js");
const index_js_5 = require("./numerology/index.js");
const index_js_6 = require("./lifestyle/index.js");
const index_js_7 = require("./calculators/index.js");
const errors_js_1 = require("./errors.js");
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
class DivineApi {
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
            throw new errors_js_1.DivineApiError('apiKey is required to initialize DivineApi', 0);
        }
        const client = new client_js_1.BaseClient(config);
        this.horoscope = new index_js_1.HoroscopeApi(client);
        this.indian = new index_js_2.IndianApi(client);
        this.western = new index_js_3.WesternApi(client);
        this.pdf = new index_js_4.PdfReportApi(client);
        this.numerology = new index_js_5.NumerologyApi(client);
        this.lifestyle = new index_js_6.LifestyleApi(client);
        this.calculators = new index_js_7.CalculatorApi(client);
    }
}
exports.DivineApi = DivineApi;
// Re-export everything
var client_js_2 = require("./client.js");
Object.defineProperty(exports, "BaseClient", { enumerable: true, get: function () { return client_js_2.BaseClient; } });
var index_js_8 = require("./horoscope/index.js");
Object.defineProperty(exports, "HoroscopeApi", { enumerable: true, get: function () { return index_js_8.HoroscopeApi; } });
var index_js_9 = require("./indian/index.js");
Object.defineProperty(exports, "IndianApi", { enumerable: true, get: function () { return index_js_9.IndianApi; } });
Object.defineProperty(exports, "PanchangApi", { enumerable: true, get: function () { return index_js_9.PanchangApi; } });
Object.defineProperty(exports, "KundliApi", { enumerable: true, get: function () { return index_js_9.KundliApi; } });
Object.defineProperty(exports, "MatchMakingApi", { enumerable: true, get: function () { return index_js_9.MatchMakingApi; } });
Object.defineProperty(exports, "FestivalApi", { enumerable: true, get: function () { return index_js_9.FestivalApi; } });
var index_js_10 = require("./western/index.js");
Object.defineProperty(exports, "WesternApi", { enumerable: true, get: function () { return index_js_10.WesternApi; } });
Object.defineProperty(exports, "NatalApi", { enumerable: true, get: function () { return index_js_10.NatalApi; } });
Object.defineProperty(exports, "SynastryApi", { enumerable: true, get: function () { return index_js_10.SynastryApi; } });
Object.defineProperty(exports, "TransitApi", { enumerable: true, get: function () { return index_js_10.TransitApi; } });
Object.defineProperty(exports, "CompositeApi", { enumerable: true, get: function () { return index_js_10.CompositeApi; } });
Object.defineProperty(exports, "PlanetReturnsApi", { enumerable: true, get: function () { return index_js_10.PlanetReturnsApi; } });
Object.defineProperty(exports, "ProgressionsApi", { enumerable: true, get: function () { return index_js_10.ProgressionsApi; } });
Object.defineProperty(exports, "PrenatalApi", { enumerable: true, get: function () { return index_js_10.PrenatalApi; } });
var index_js_11 = require("./pdf/index.js");
Object.defineProperty(exports, "PdfReportApi", { enumerable: true, get: function () { return index_js_11.PdfReportApi; } });
var index_js_12 = require("./numerology/index.js");
Object.defineProperty(exports, "NumerologyApi", { enumerable: true, get: function () { return index_js_12.NumerologyApi; } });
var index_js_13 = require("./lifestyle/index.js");
Object.defineProperty(exports, "LifestyleApi", { enumerable: true, get: function () { return index_js_13.LifestyleApi; } });
var index_js_14 = require("./calculators/index.js");
Object.defineProperty(exports, "CalculatorApi", { enumerable: true, get: function () { return index_js_14.CalculatorApi; } });
var errors_js_2 = require("./errors.js");
Object.defineProperty(exports, "DivineApiError", { enumerable: true, get: function () { return errors_js_2.DivineApiError; } });
Object.defineProperty(exports, "AuthenticationError", { enumerable: true, get: function () { return errors_js_2.AuthenticationError; } });
Object.defineProperty(exports, "RateLimitError", { enumerable: true, get: function () { return errors_js_2.RateLimitError; } });
Object.defineProperty(exports, "ValidationError", { enumerable: true, get: function () { return errors_js_2.ValidationError; } });
Object.defineProperty(exports, "NetworkError", { enumerable: true, get: function () { return errors_js_2.NetworkError; } });
//# sourceMappingURL=index.js.map