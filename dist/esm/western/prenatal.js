/**
 * Western Prenatal API endpoints.
 * Host: astroapi-8.divineapi.com
 */
export class PrenatalApi {
    client;
    constructor(client) {
        this.client = client;
    }
    /** Get prenatal list. */
    async list(params) {
        return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/prenatal-list', params);
    }
    /** Get prenatal details. */
    async details(params) {
        return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/prenatal-details', params);
    }
}
//# sourceMappingURL=prenatal.js.map