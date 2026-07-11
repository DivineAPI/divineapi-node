"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransitApi = void 0;
/**
 * Western Transit API endpoints.
 * Hosts: astroapi-4 and astroapi-8
 */
class TransitApi {
    client;
    constructor(client) {
        this.client = client;
    }
    /** Get basic transit data. */
    async basic(params) {
        return this.client.post('astroapi-4.divineapi.com', '/western-api/v1/transit/basic', params);
    }
    /** Get custom transit data. Requires the natal birth block plus the full transit moment (date, time and location). */
    async customTransit(params) {
        return this.client.post('astroapi-4.divineapi.com', '/western-api/v1/transit/custom', params);
    }
    /** Get daily transit. */
    async daily(params) {
        return this.client.post('astroapi-4.divineapi.com', '/western-api/v1/transit/daily', params);
    }
    /** Get weekly transit. */
    async weekly(params) {
        return this.client.post('astroapi-4.divineapi.com', '/western-api/v1/transit/weekly', params);
    }
    /** Get monthly transit. Requires transit_planet, transit_month, transit_year, and the transit location. */
    async monthly(params) {
        return this.client.post('astroapi-8.divineapi.com', '/western-api/v2/transit/monthly', params);
    }
    /** Get full transit data. Requires transit_planet plus the transit date and location. */
    async full(params) {
        return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/full-transit', params);
    }
    /** Get planetary ingress data. */
    async planetaryIngress(params) {
        return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/planetary-ingress', params);
    }
    /** Get planet retrograde transit. */
    async planetRetrogradeTransit(params) {
        return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/planet-retrograde-transit', params);
    }
    /** Get planet combustion transit. */
    async planetCombustionTransit(params) {
        return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/planet-combustion-transit', params);
    }
    /** Get transit wheel chart. Requires the transit date and location (no transit_planet). */
    async wheelChart(params) {
        return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/transit/wheel-chart', params);
    }
    /** Get transit planetary positions. Requires the transit date and location (no transit_planet). */
    async planetaryPositions(params) {
        return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/transit/planetary-positions', params);
    }
    /** Get transit house data. */
    async house(params) {
        return this.client.post('astroapi-4.divineapi.com', '/western-api/v1/transit/house', params);
    }
}
exports.TransitApi = TransitApi;
//# sourceMappingURL=transit.js.map