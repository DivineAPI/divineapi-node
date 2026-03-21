/**
 * Western Planet Returns API endpoints.
 * Host: astroapi-8.divineapi.com
 */
export class PlanetReturnsApi {
    client;
    constructor(client) {
        this.client = client;
    }
    /** Get planet return list. */
    async list(params) {
        return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/planet-returns-list', params);
    }
    /** Get planet return details. */
    async details(params) {
        return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/planet-return-details', params);
    }
}
//# sourceMappingURL=planetReturns.js.map