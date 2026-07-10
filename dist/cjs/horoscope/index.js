"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HoroscopeApi = void 0;
/**
 * Horoscope & Tarot API endpoints.
 * Host: astroapi-5.divineapi.com
 */
class HoroscopeApi {
    client;
    constructor(client) {
        this.client = client;
    }
    /**
     * Get daily horoscope for a zodiac sign.
     * The reading is selected by `h_day` ('today' | 'tomorrow' | 'yesterday').
     * The deprecated `day`/`month`/`year` fields are ignored by the API and are
     * not forwarded.
     */
    async daily(params) {
        // day/month/year are deprecated and ignored by the endpoint; do not send them.
        const { day, month, year, ...payload } = params;
        void day;
        void month;
        void year;
        return this.client.post('astroapi-5.divineapi.com', '/api/v5/daily-horoscope', payload);
    }
    /** Get weekly horoscope for a zodiac sign. */
    async weekly(params) {
        return this.client.post('astroapi-5.divineapi.com', '/api/v5/weekly-horoscope', params);
    }
    /** Get monthly horoscope for a zodiac sign. */
    async monthly(params) {
        return this.client.post('astroapi-5.divineapi.com', '/api/v5/monthly-horoscope', params);
    }
    /** Get yearly horoscope for a zodiac sign. */
    async yearly(params) {
        return this.client.post('astroapi-5.divineapi.com', '/api/v5/yearly-horoscope', params);
    }
    /** Get Chinese horoscope. */
    async chinese(params) {
        return this.client.post('astroapi-5.divineapi.com', '/api/v3/chinese-horoscope', params);
    }
    /** Get numerology-based horoscope. */
    async numerology(params) {
        return this.client.post('astroapi-5.divineapi.com', '/api/v2/numerology-horoscope', params);
    }
    /** Get a Yes or No tarot reading. */
    async yesOrNoTarot(params = {}) {
        return this.client.post('astroapi-5.divineapi.com', '/api/v2/yes-or-no-tarot', params);
    }
    /** Get a daily tarot reading. */
    async dailyTarot(params = {}) {
        return this.client.post('astroapi-5.divineapi.com', '/api/v2/daily-tarot', params);
    }
    /** Get a fortune cookie reading. */
    async fortuneCookie(params = {}) {
        return this.client.post('astroapi-5.divineapi.com', '/api/v2/fortune-cookie', params);
    }
    /** Get a coffee cup reading. */
    async coffeeCupReading(params = {}) {
        return this.client.post('astroapi-5.divineapi.com', '/api/v2/coffee-cup-reading', params);
    }
    /** Get career daily reading. */
    async careerDailyReading(params = {}) {
        return this.client.post('astroapi-5.divineapi.com', '/api/v3/career-daily-reading', params);
    }
    /** Get divine angel reading. */
    async divineAngelReading(params = {}) {
        return this.client.post('astroapi-5.divineapi.com', '/api/v3/divine-angel-reading', params);
    }
    /** Get divine magic reading. */
    async divineMagicReading(params = {}) {
        return this.client.post('astroapi-5.divineapi.com', '/api/v2/divine-magic-reading', params);
    }
    /** Get dream come true reading. */
    async dreamComeTrueReading(params = {}) {
        return this.client.post('astroapi-5.divineapi.com', '/api/v3/dream-come-true-reading', params);
    }
    /** Get Egyptian prediction reading. */
    async egyptianPrediction(params = {}) {
        return this.client.post('astroapi-5.divineapi.com', '/api/v3/egyptian-prediction', params);
    }
    /** Get erotic love reading. */
    async eroticLoveReading(params = {}) {
        return this.client.post('astroapi-5.divineapi.com', '/api/v3/erotic-love-reading', params);
    }
    /** Get ex-flame reading. */
    async exFlameReading(params = {}) {
        return this.client.post('astroapi-5.divineapi.com', '/api/v3/ex-flame-reading', params);
    }
    /** Get flirt love reading. */
    async flirtLoveReading(params = {}) {
        return this.client.post('astroapi-5.divineapi.com', '/api/v3/flirt-love-reading', params);
    }
    /** Get heartbreak reading. */
    async heartbreakReading(params = {}) {
        return this.client.post('astroapi-5.divineapi.com', '/api/v2/heartbreak-reading', params);
    }
    /** Get in-depth love reading. */
    async inDepthLoveReading(params = {}) {
        return this.client.post('astroapi-5.divineapi.com', '/api/v3/in-depth-love-reading', params);
    }
    /** Get know your friend reading. */
    async knowYourFriendReading(params = {}) {
        return this.client.post('astroapi-5.divineapi.com', '/api/v3/know-your-friend-reading', params);
    }
    /** Get love compatibility between two signs. */
    async loveCompatibility(params) {
        return this.client.post('astroapi-5.divineapi.com', '/api/v2/love-compatibility', params);
    }
    /** Get love triangle reading. */
    async loveTriangleReading(params = {}) {
        return this.client.post('astroapi-5.divineapi.com', '/api/v2/love-triangle-reading', params);
    }
    /** Get made for each other reading. */
    async madeForEachOther(params = {}) {
        return this.client.post('astroapi-5.divineapi.com', '/api/v3/made-for-each-other-or-not-reading', params);
    }
    /** Get power life reading. */
    async powerLifeReading(params = {}) {
        return this.client.post('astroapi-5.divineapi.com', '/api/v3/power-life-reading', params);
    }
    /** Get past lives connection reading. */
    async pastLivesConnectionReading(params = {}) {
        return this.client.post('astroapi-5.divineapi.com', '/api/v3/past-lives-connection-reading', params);
    }
    /** Get past-present-future reading. */
    async pastPresentFutureReading(params = {}) {
        return this.client.post('astroapi-5.divineapi.com', '/api/v3/past-present-future-reading', params);
    }
    /** Get which animal are you reading. */
    async whichAnimalAreYou(params) {
        return this.client.post('astroapi-5.divineapi.com', '/api/v2/which-animal-are-you-reading', params);
    }
    /** Get wisdom reading. */
    async wisdomReading(params = {}) {
        return this.client.post('astroapi-5.divineapi.com', '/api/v2/wisdom-reading', params);
    }
}
exports.HoroscopeApi = HoroscopeApi;
//# sourceMappingURL=index.js.map