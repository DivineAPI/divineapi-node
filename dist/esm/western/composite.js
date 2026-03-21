/**
 * Western Composite Chart API endpoints.
 * Host: astroapi-8.divineapi.com
 */
export class CompositeApi {
    client;
    constructor(client) {
        this.client = client;
    }
    /** Get composite planetary positions. */
    async planetaryPositions(params) {
        return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/composite/planetary-positions', params);
    }
    /** Get composite house cusps. */
    async houseCusps(params) {
        return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/composite/house-cusps', params);
    }
    /** Get composite aspect table. */
    async aspectTable(params) {
        return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/composite/aspect-table', params);
    }
    /** Get composite natal wheel chart. */
    async natalWheelChart(params) {
        return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/composite/natal-wheel-chart', params);
    }
}
//# sourceMappingURL=composite.js.map