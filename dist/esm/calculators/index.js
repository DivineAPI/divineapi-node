/**
 * Calculator API endpoints.
 * Host: astroapi-7.divineapi.com
 */
export class CalculatorApi {
    client;
    constructor(client) {
        this.client = client;
    }
    /**
     * Calculate FLAMES compatibility.
     * The API field is `your_name` (not `full_name`); a legacy `full_name` is
     * mapped to `your_name` for backward compatibility.
     */
    async flames(params) {
        const { full_name, your_name, ...rest } = params;
        const payload = { ...rest, your_name: your_name ?? full_name };
        return this.client.post('astroapi-7.divineapi.com', '/calculator/v1/flames-calculator', payload);
    }
    /** Calculate love compatibility. */
    async love(params) {
        return this.client.post('astroapi-7.divineapi.com', '/calculator/v1/love-calculator', params);
    }
}
//# sourceMappingURL=index.js.map