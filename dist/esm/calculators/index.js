/**
 * Calculator API endpoints.
 * Host: astroapi-7.divineapi.com
 */
export class CalculatorApi {
    client;
    constructor(client) {
        this.client = client;
    }
    /** Calculate FLAMES compatibility. */
    async flames(params) {
        return this.client.post('astroapi-7.divineapi.com', '/calculator/v1/flames-calculator', params);
    }
    /** Calculate love compatibility. */
    async love(params) {
        return this.client.post('astroapi-7.divineapi.com', '/calculator/v1/love-calculator', params);
    }
}
//# sourceMappingURL=index.js.map