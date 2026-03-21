/**
 * Lifestyle API endpoints.
 * Host: astroapi-7.divineapi.com
 */
export class LifestyleApi {
    client;
    constructor(client) {
        this.client = client;
    }
    /** Get zodiac gift guru suggestions. */
    async zodiacGiftGuru(params) {
        return this.client.post('astroapi-7.divineapi.com', '/api/v1/zodiac-gift-guru', params);
    }
    /** Get beauty by the stars recommendations. */
    async beautyByStars(params) {
        return this.client.post('astroapi-7.divineapi.com', '/api/v1/beauty-by-the-stars', params);
    }
    /** Get astro chic picks. */
    async astroChicPicks(params) {
        return this.client.post('astroapi-7.divineapi.com', '/api/v1/astro-chic-picks', params);
    }
}
//# sourceMappingURL=index.js.map