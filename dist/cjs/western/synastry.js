"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynastryApi = void 0;
/**
 * Western Synastry (relationship) API endpoints.
 * Host: astroapi-4.divineapi.com
 */
class SynastryApi {
    client;
    constructor(client) {
        this.client = client;
    }
    /** Get synastry planetary positions. */
    async planetaryPositions(params) {
        return this.client.post('astroapi-4.divineapi.com', '/western-api/v1/synastry/planetary-positions', params);
    }
    /** Get synastry house cusps. */
    async houseCusps(params) {
        return this.client.post('astroapi-4.divineapi.com', '/western-api/v1/synastry/house-cusps', params);
    }
    /** Get synastry natal wheel chart. */
    async natalWheelChart(params) {
        return this.client.post('astroapi-4.divineapi.com', '/western-api/v1/synastry/natal-wheel-chart', params);
    }
    /** Get synastry aspects. */
    async aspect(params) {
        return this.client.post('astroapi-4.divineapi.com', '/western-api/v1/synastry/aspect', params);
    }
    /** Get harmonious aspect reading. */
    async harmoniousAspectReading(params) {
        return this.client.post('astroapi-4.divineapi.com', '/western-api/v1/synastry/harmonious-aspect-reading', params);
    }
    /** Get conflicting aspect reading. */
    async conflictingAspectReading(params) {
        return this.client.post('astroapi-4.divineapi.com', '/western-api/v1/synastry/conflicting-aspect-reading', params);
    }
    /** Get contrasting aspect reading. */
    async contrastingAspectReading(params) {
        return this.client.post('astroapi-4.divineapi.com', '/western-api/v1/synastry/contrasting-aspect-reading', params);
    }
    /** Get intense aspect reading. */
    async intenseAspectReading(params) {
        return this.client.post('astroapi-4.divineapi.com', '/western-api/v1/synastry/intense-aspect-reading', params);
    }
    /** Get physical compatibility. */
    async physicalCompatibility(params) {
        return this.client.post('astroapi-4.divineapi.com', '/western-api/v2/synastry/physical-compatibility', params);
    }
    /** Get emotional compatibility. */
    async emotionalCompatibility(params) {
        return this.client.post('astroapi-4.divineapi.com', '/western-api/v2/synastry/emotional-compatibility', params);
    }
    /** Get sexual compatibility. */
    async sexualCompatibility(params) {
        return this.client.post('astroapi-4.divineapi.com', '/western-api/v2/synastry/sexual-compatibility', params);
    }
    /** Get spiritual compatibility. */
    async spiritualCompatibility(params) {
        return this.client.post('astroapi-4.divineapi.com', '/western-api/v2/synastry/spiritual-compatibility', params);
    }
    /** Get financial compatibility. */
    async financialCompatibility(params) {
        return this.client.post('astroapi-4.divineapi.com', '/western-api/v2/synastry/financial-compatibility', params);
    }
}
exports.SynastryApi = SynastryApi;
//# sourceMappingURL=synastry.js.map