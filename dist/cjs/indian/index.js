"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FestivalApi = exports.MatchMakingApi = exports.KundliApi = exports.PanchangApi = exports.IndianApi = void 0;
const panchang_js_1 = require("./panchang.js");
const kundli_js_1 = require("./kundli.js");
const matchMaking_js_1 = require("./matchMaking.js");
const festival_js_1 = require("./festival.js");
/**
 * Indian Astrology API - combines Panchang, Kundli, MatchMaking, and Festival sub-modules.
 */
class IndianApi {
    /** Panchang (almanac) endpoints */
    panchang;
    /** Kundli (birth chart) endpoints */
    kundli;
    /** Match Making (compatibility) endpoints */
    matchMaking;
    /** Festival calendar endpoints */
    festival;
    constructor(client) {
        this.panchang = new panchang_js_1.PanchangApi(client);
        this.kundli = new kundli_js_1.KundliApi(client);
        this.matchMaking = new matchMaking_js_1.MatchMakingApi(client);
        this.festival = new festival_js_1.FestivalApi(client);
    }
}
exports.IndianApi = IndianApi;
var panchang_js_2 = require("./panchang.js");
Object.defineProperty(exports, "PanchangApi", { enumerable: true, get: function () { return panchang_js_2.PanchangApi; } });
var kundli_js_2 = require("./kundli.js");
Object.defineProperty(exports, "KundliApi", { enumerable: true, get: function () { return kundli_js_2.KundliApi; } });
var matchMaking_js_2 = require("./matchMaking.js");
Object.defineProperty(exports, "MatchMakingApi", { enumerable: true, get: function () { return matchMaking_js_2.MatchMakingApi; } });
var festival_js_2 = require("./festival.js");
Object.defineProperty(exports, "FestivalApi", { enumerable: true, get: function () { return festival_js_2.FestivalApi; } });
//# sourceMappingURL=index.js.map