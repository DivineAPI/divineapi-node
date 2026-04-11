/**
 * Western Natal Astrology API endpoints.
 * Hosts: astroapi-4 and astroapi-8
 */
export class NatalApi {
    client;
    constructor(client) {
        this.client = client;
    }
    /** Get planetary positions. */
    async planetaryPositions(params) {
        return this.client.post('astroapi-4.divineapi.com', '/western-api/v1/planetary-positions', params);
    }
    /** Get house cusps. */
    async houseCusps(params) {
        return this.client.post('astroapi-4.divineapi.com', '/western-api/v1/house-cusps', params);
    }
    /** Get aspect table. */
    async aspectTable(params) {
        return this.client.post('astroapi-4.divineapi.com', '/western-api/v2/aspect-table', params);
    }
    /** Get natal wheel chart image. */
    async natalWheelChart(params) {
        return this.client.post('astroapi-8.divineapi.com', '/western-api/v2/natal-wheel-chart', params);
    }
    /** Get general sign report for a planet. */
    async generalSignReport(planet, params) {
        return this.client.post('astroapi-4.divineapi.com', `/western-api/v2/general-sign-report/${planet}`, params);
    }
    /** Get general house report for a planet. */
    async generalHouseReport(planet, params) {
        return this.client.post('astroapi-4.divineapi.com', `/western-api/v2/general-house-report/${planet}`, params);
    }
    /** Get moon phases. */
    async moonPhases(params) {
        return this.client.post('astroapi-4.divineapi.com', '/western-api/v2/moon-phases', params);
    }
    /** Get ascendant report. */
    async ascendantReport(params) {
        return this.client.post('astroapi-4.divineapi.com', '/western-api/v2/ascendant-report', params);
    }
    /** Get moon phase calendar. */
    async moonPhaseCalendar(params) {
        return this.client.post('astroapi-4.divineapi.com', '/western-api/v1/moon-phase-calendar', params);
    }
    /** Get natal insights. */
    async natalInsights(params) {
        return this.client.post('astroapi-4.divineapi.com', '/western-api/v1/natal-insights', params);
    }
    /** Get Arabic lots (parts). */
    async arabicLots(params) {
        return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/arabic-lots', params);
    }
    /** Get asteroid positions. */
    async asteroidPositions(params) {
        return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/asteroid-positions', params);
    }
    /** Get list of fixed stars. */
    async fixedStarsList() {
        return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/fixed-stars-list', {});
    }
    /** Get details for specific fixed stars. */
    async fixedStarsDetails(params) {
        return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/fixed-stars-details', params);
    }
    /** Get planetary midpoints. */
    async planetaryMidpoints(params) {
        return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/planetary-midpoints', params);
    }
    /** Get eclipse data. */
    async eclipse(params) {
        return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/eclipse', params);
    }
    /** Get declinations and parallels. */
    async declinationsParallels(params) {
        return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/declinations-parallels', params);
    }
    /** Get aspect patterns. */
    async aspectPatterns(params) {
        return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/aspect-patterns', params);
    }
    /** Get chart shape analysis. */
    async chartShape(params) {
        return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/chart-shape', params);
    }
    /** Get other minor bodies positions. */
    async otherMinorBodies(params) {
        return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/other-minor-bodies', params);
    }
    /** Get dominants analysis. */
    async dominants(params) {
        return this.client.post('astroapi-8.divineapi.com', '/western-api/v1/dominants', params);
    }
}
//# sourceMappingURL=natal.js.map