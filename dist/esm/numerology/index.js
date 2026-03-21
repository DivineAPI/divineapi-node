/**
 * Numerology API endpoints.
 * Hosts: astroapi-7 and astroapi-4
 */
export class NumerologyApi {
    client;
    constructor(client) {
        this.client = client;
    }
    /** Get new mobile number suggestions. */
    async newMobileNumber(params) {
        return this.client.post('astroapi-7.divineapi.com', '/numerology/v1/new-mobile-number', params);
    }
    /** Analyze an existing mobile number. */
    async analyzeMobileNumber(params) {
        return this.client.post('astroapi-7.divineapi.com', '/numerology/v1/analyze-mobile-number', params);
    }
    /** Get Loshu grid. */
    async loshuGrid(params) {
        return this.client.post('astroapi-7.divineapi.com', '/numerology/v1/loshu-grid', params);
    }
    /** Get zodiac planet number. */
    async zodiacPlanetNumber(params) {
        return this.client.post('astroapi-7.divineapi.com', '/numerology/v1/zodiac-planet-number', params);
    }
    /** Get luck numerology. */
    async luckNumerology(params) {
        return this.client.post('astroapi-7.divineapi.com', '/numerology/v1/luck-numerology', params);
    }
    /** Get name number analysis. */
    async nameNumber(params) {
        return this.client.post('astroapi-7.divineapi.com', '/numerology/v1/name-number', params);
    }
    /** Get birthday number analysis. */
    async birthdayNumber(params) {
        return this.client.post('astroapi-7.divineapi.com', '/numerology/v1/birthday-number', params);
    }
    /** Get missing numbers. */
    async missingNumbers(params) {
        return this.client.post('astroapi-7.divineapi.com', '/numerology/v1/missing-numbers', params);
    }
    /** Get driver and conductor numbers. */
    async driverAndConductorNumbers(params) {
        return this.client.post('astroapi-7.divineapi.com', '/numerology/v1/driver-and-conductor-numbers', params);
    }
    /** Get two numbers arrows. */
    async twoNumbersArrows(params) {
        return this.client.post('astroapi-7.divineapi.com', '/numerology/v1/two-numbers-arrows', params);
    }
    /** Get three numbers arrows. */
    async threeNumbersArrows(params) {
        return this.client.post('astroapi-7.divineapi.com', '/numerology/v1/three-numbers-arrows', params);
    }
    /** Get repeating numbers. */
    async repeatingNumbers(params) {
        return this.client.post('astroapi-7.divineapi.com', '/numerology/v1/repeating-numbers', params);
    }
    /** Get yearly prediction. */
    async yearlyPrediction(params) {
        return this.client.post('astroapi-7.divineapi.com', '/numerology/v1/yearly-prediction', params);
    }
    /** Get gemstone suggestions based on numerology. */
    async gemstones(params) {
        return this.client.post('astroapi-7.divineapi.com', '/numerology/v1/gemstones', params);
    }
    /** Get core numbers (Pythagorean/Chaldean). */
    async coreNumbers(params) {
        return this.client.post('astroapi-4.divineapi.com', '/numerology/v1/core-numbers', params);
    }
}
//# sourceMappingURL=index.js.map