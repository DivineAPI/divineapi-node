/**
 * Western Transit API endpoints.
 * Hosts: astroapi-4 and astroapi-8
 */
export class TransitApi {
    client;
    constructor(client) {
        this.client = client;
    }
    /** Get basic transit data. */
    async basic(params) {
        return this.client.post('astroapi-4.divineapi.com', '/western-api/v1/transit/basic', params);
    }
    /** Get daily transit. */
    async daily(params) {
        return this.client.post('astroapi-4.divineapi.com', '/western-api/v1/transit/daily', params);
    }
    /** Get weekly transit. */
    async weekly(params) {
        return this.client.post('astroapi-4.divineapi.com', '/western-api/v1/transit/weekly', params);
    }
    /** Get monthly transit. */
    async monthly(params) {
        return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/transit/monthly', params);
    }
    /** Get full transit data. */
    async full(params) {
        return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/full-transit', params);
    }
    /** Get planetary ingress data. */
    async planetaryIngress(params) {
        return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/planet-retrograde-transit', params);
    }
    /** Get planet retrograde transit. */
    async planetRetrogradeTransit(params) {
        return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/planet-retrograde-transit', params);
    }
    /** Get planet combustion transit. */
    async planetCombustionTransit(params) {
        return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/planet-combustion-transit', params);
    }
    /** Get transit house data. */
    async house(params) {
        return this.client.post('astroapi-4.divineapi.com', '/western-api/v1/transit/house', params);
    }
}
//# sourceMappingURL=transit.js.map