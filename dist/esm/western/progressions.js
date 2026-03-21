/**
 * Western Progressions API endpoints.
 * Host: astroapi-8.divineapi.com
 */
export class ProgressionsApi {
    client;
    constructor(client) {
        this.client = client;
    }
    /** Get progressed lunar events. */
    async progressedLunarEvents(params) {
        return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/progressed-lunar-events', params);
    }
    /** Get planetary arc directions. */
    async planetaryArcDirections(params) {
        return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/planetary-arc-directions', params);
    }
    /** Get secondary progressions. */
    async secondaryProgressions(params) {
        return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/secondary-progressions', params);
    }
}
//# sourceMappingURL=progressions.js.map