/**
 * Indian Match Making API endpoints.
 * Host: astroapi-3.divineapi.com
 */
export class MatchMakingApi {
    client;
    constructor(client) {
        this.client = client;
    }
    /** Get Ashtakoot Milan (North Indian matching). */
    async ashtakootMilan(params) {
        return this.client.post('astroapi-3.divineapi.com', '/indian-api/v2/ashtakoot-milan', params);
    }
    /** Get Dashakoot Milan (South Indian matching). */
    async dashakootMilan(params) {
        return this.client.post('astroapi-3.divineapi.com', '/indian-api/v2/dashakoot-milan', params);
    }
    /** Get Nav Pancham Yoga. */
    async navPanchamYoga(params) {
        return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/nav-pancham-yoga', params);
    }
    /** Get matching basic astro details. */
    async basicAstroDetails(params) {
        return this.client.post('astroapi-3.divineapi.com', '/indian-api/v3/matching/basic-astro-details', params);
    }
    /** Get matching planetary positions. */
    async planetaryPositions(params) {
        return this.client.post('astroapi-3.divineapi.com', '/indian-api/v2/matching/planetary-positions', params);
    }
    /** Get matching Vimshottari dasha. */
    async vimshottariDasha(params) {
        return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/matching/vimshottari-dasha', params);
    }
    /** Get matching Manglik dosha. */
    async manglikDosha(params) {
        return this.client.post('astroapi-3.divineapi.com', '/indian-api/v2/matching/manglik-dosha', params);
    }
    /** Get matching horoscope chart. */
    async horoscopeChart(params) {
        const { chart_id, ...rest } = params;
        return this.client.post('astroapi-3.divineapi.com', `/indian-api/v1/matching/horoscope-chart/${chart_id}`, rest);
    }
}
//# sourceMappingURL=matchMaking.js.map