/**
 * Indian Kundli (Birth Chart) API endpoints.
 * Host: astroapi-3.divineapi.com
 */
export class KundliApi {
    client;
    constructor(client) {
        this.client = client;
    }
    // ── Jaimini Astrology ──
    /** Get Jaimini planetary positions. */
    async jaiminiPlanetaryPositions(params) {
        return this.client.post('astroapi-3.divineapi.com', '/indian-api/v2/jaimini-astrology/planetary-positions', params);
    }
    /** Get Jaimini padas. */
    async jaiminiPadas(params) {
        return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/jaimini-astrology/padas', params);
    }
    /** Get Jaimini karakamsha lagna. */
    async jaiminiKarakamshaLagna(params) {
        return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/jaimini-astrology/karakamsha-lagna', params);
    }
    /** Get Jaimini chara dasha. */
    async jaiminiCharaDasha(params) {
        return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/jaimini-astrology/chara-dasha', params);
    }
    // ── Sub Planet ──
    /** Get sub planet positions. */
    async subPlanetPositions(params) {
        return this.client.post('astroapi-3.divineapi.com', '/indian-api/v2/sub-planet-positions', params);
    }
    /** Get sub planet chart. */
    async subPlanetChart(params) {
        return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/sub-planet-chart', params);
    }
    // ── KP (Krishnamurti Paddhati) ──
    /** Get KP planetary positions. */
    async kpPlanetaryPositions(params) {
        return this.client.post('astroapi-3.divineapi.com', '/indian-api/v2/kp/planetary-positions', params);
    }
    /** Get KP cuspal details. */
    async kpCuspal(params) {
        return this.client.post('astroapi-3.divineapi.com', '/indian-api/v2/kp/cuspal', params);
    }
    /** Get KP planetary sub. */
    async kpPlanetarySub(params) {
        return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/kp/planetary-sub', params);
    }
    /** Get KP planetary cuspal significator table. */
    async kpPlanetaryCuspalSignificatorTable(params) {
        return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/kp/planetary-cuspal-significator-table', params);
    }
    /** Get KP cuspal sub. */
    async kpCuspalSub(params) {
        return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/kp/cuspal-sub', params);
    }
    // ── Kundali Transit ──
    /** Get kundali transit ascendant chart. */
    async transitAscendant(params) {
        return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/kundli-transit/ascendant', params);
    }
    /** Get kundali transit moon chart. */
    async transitMoon(params) {
        return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/kundli-transit/moon', params);
    }
    // ── Bhinnashtakvarga ──
    /** Get ashtakvarga details. */
    async ashtakvarga(params) {
        return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/bhinnashtakvarga/ashtakvarga', params);
    }
    /** Get sarvashtakavarga chart. */
    async sarvashtakavarga(chart, params) {
        return this.client.post('astroapi-3.divineapi.com', `/indian-api/v1/bhinnashtakvarga/sarvashtakavarga/${chart}`, params);
    }
    /** Get prasthara chakra. */
    async prastharaChakra(params) {
        return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/bhinnashtakvarga/prasthara-chakra', params);
    }
    // ── Dasha Analysis ──
    /** Get maha dasha analysis. */
    async mahaDashaAnalysis(params) {
        return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/maha-dasha-analysis', params);
    }
    /** Get antar dasha analysis. */
    async antarDashaAnalysis(params) {
        return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/antar-dasha-analysis', params);
    }
    /** Get pratyantar dasha analysis. */
    async pratyantarDashaAnalysis(params) {
        return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/pratyantar-dasha-analysis', params);
    }
    // ── Core Kundli Endpoints ──
    /** Get basic astro details. */
    async basicAstroDetails(params) {
        return this.client.post('astroapi-3.divineapi.com', '/indian-api/v3/basic-astro-details', params);
    }
    /** Get planetary positions. */
    async planetaryPositions(params) {
        return this.client.post('astroapi-3.divineapi.com', '/indian-api/v2/planetary-positions', params);
    }
    /** Get horoscope chart by chart ID. */
    async horoscopeChart(params) {
        const { chart_id, ...rest } = params;
        return this.client.post('astroapi-3.divineapi.com', `/indian-api/v1/horoscope-chart/${chart_id}`, rest);
    }
    /** Get Vimshottari dasha. */
    async vimshottariDasha(params) {
        return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/vimshottari-dasha', params);
    }
    /** Get Kaal Sarpa dosha analysis. */
    async kaalSarpaDosha(params) {
        return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/kaal-sarpa-yoga', params);
    }
    /** Get Manglik dosha analysis. */
    async manglikDosha(params) {
        return this.client.post('astroapi-3.divineapi.com', '/indian-api/v2/manglik-dosha', params);
    }
    /** Get ascendant report. */
    async ascendantReport(params) {
        return this.client.post('astroapi-3.divineapi.com', '/indian-api/v2/ascendant-report', params);
    }
    /** Get composite friendship chart. */
    async compositeFriendship(params) {
        return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/composite-friendship', params);
    }
    /** Get bhava kundli chart. */
    async bhavaKundli(chartId, params) {
        return this.client.post('astroapi-3.divineapi.com', `/indian-api/v1/bhava-kundli/${chartId}`, params);
    }
    /** Get Sadhe Sati analysis. */
    async sadheSati(params) {
        return this.client.post('astroapi-3.divineapi.com', '/indian-api/v3/sadhe-sati', params);
    }
    /** Get ghata chakra. */
    async ghataChakra(params) {
        return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/ghata-chakra', params);
    }
    /** Get shadbala (planetary strength). */
    async shadbala(params) {
        return this.client.post('astroapi-3.divineapi.com', '/indian-api/v2/shadbala', params);
    }
    /** Get gemstone suggestions. */
    async gemstoneSuggestion(params) {
        return this.client.post('astroapi-3.divineapi.com', '/indian-api/v2/gemstone-suggestion', params);
    }
    /** Get Yogini dasha. */
    async yoginiDasha(params) {
        return this.client.post('astroapi-3.divineapi.com', '/indian-api/v2/yogini-dasha', params);
    }
    /** Get Kaal Chakra dasha. */
    async kaalChakraDasha(params) {
        return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/kaal-chakra-dasha', params);
    }
    /** Get yogas present in the birth chart. */
    async yogas(params) {
        return this.client.post('astroapi-3.divineapi.com', '/indian-api/v2/yogas', params);
    }
    /** Get Pitra dosha analysis. */
    async pitraDosha(params) {
        return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/pitra-dosha', params);
    }
    /** Get planet-specific analysis. */
    async planetAnalysis(params) {
        return this.client.post('astroapi-3.divineapi.com', '/indian-api/v2/planet-analysis', params);
    }
    /** Get sudarshana chakra. */
    async sudarshanChakra(params) {
        return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/sudarshana-chakra', params);
    }
}
//# sourceMappingURL=kundli.js.map