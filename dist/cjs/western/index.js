"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrenatalApi = exports.ProgressionsApi = exports.PlanetReturnsApi = exports.CompositeApi = exports.TransitApi = exports.SynastryApi = exports.NatalApi = exports.WesternApi = void 0;
const natal_js_1 = require("./natal.js");
const synastry_js_1 = require("./synastry.js");
const transit_js_1 = require("./transit.js");
const composite_js_1 = require("./composite.js");
const planetReturns_js_1 = require("./planetReturns.js");
const progressions_js_1 = require("./progressions.js");
const prenatal_js_1 = require("./prenatal.js");
/**
 * Western Astrology API - combines Natal, Synastry, Transit, Composite, Planet Returns, Progressions, and Prenatal sub-modules.
 */
class WesternApi {
    /** Natal chart endpoints */
    natal;
    /** Synastry (relationship) endpoints */
    synastry;
    /** Transit endpoints */
    transit;
    /** Composite chart endpoints */
    composite;
    /** Planet returns endpoints */
    planetReturns;
    /** Progressions endpoints */
    progressions;
    /** Prenatal endpoints */
    prenatal;
    constructor(client) {
        this.natal = new natal_js_1.NatalApi(client);
        this.synastry = new synastry_js_1.SynastryApi(client);
        this.transit = new transit_js_1.TransitApi(client);
        this.composite = new composite_js_1.CompositeApi(client);
        this.planetReturns = new planetReturns_js_1.PlanetReturnsApi(client);
        this.progressions = new progressions_js_1.ProgressionsApi(client);
        this.prenatal = new prenatal_js_1.PrenatalApi(client);
    }
}
exports.WesternApi = WesternApi;
var natal_js_2 = require("./natal.js");
Object.defineProperty(exports, "NatalApi", { enumerable: true, get: function () { return natal_js_2.NatalApi; } });
var synastry_js_2 = require("./synastry.js");
Object.defineProperty(exports, "SynastryApi", { enumerable: true, get: function () { return synastry_js_2.SynastryApi; } });
var transit_js_2 = require("./transit.js");
Object.defineProperty(exports, "TransitApi", { enumerable: true, get: function () { return transit_js_2.TransitApi; } });
var composite_js_2 = require("./composite.js");
Object.defineProperty(exports, "CompositeApi", { enumerable: true, get: function () { return composite_js_2.CompositeApi; } });
var planetReturns_js_2 = require("./planetReturns.js");
Object.defineProperty(exports, "PlanetReturnsApi", { enumerable: true, get: function () { return planetReturns_js_2.PlanetReturnsApi; } });
var progressions_js_2 = require("./progressions.js");
Object.defineProperty(exports, "ProgressionsApi", { enumerable: true, get: function () { return progressions_js_2.ProgressionsApi; } });
var prenatal_js_2 = require("./prenatal.js");
Object.defineProperty(exports, "PrenatalApi", { enumerable: true, get: function () { return prenatal_js_2.PrenatalApi; } });
//# sourceMappingURL=index.js.map