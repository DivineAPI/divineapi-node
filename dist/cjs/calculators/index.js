"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculatorApi = void 0;
/**
 * Calculator API endpoints.
 * Host: astroapi-7.divineapi.com
 */
class CalculatorApi {
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
exports.CalculatorApi = CalculatorApi;
//# sourceMappingURL=index.js.map