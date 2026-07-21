"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PanchangApi = void 0;
/**
 * Indian Panchang API endpoints.
 * Various hosts under /indian-api/
 */
class PanchangApi {
    client;
    constructor(client) {
        this.client = client;
    }
    /** Find sun and moon positions. */
    async findSunAndMoon(params) {
        return this.client.post('astroapi-2.divineapi.com', '/indian-api/v2/find-sun-and-moon', params);
    }
    /** Find panchang details for a given date and location. */
    async findPanchang(params) {
        return this.client.post('astroapi-1.divineapi.com', '/indian-api/v2/find-panchang', params);
    }
    /** Find chandramasa details. */
    async findChandramasa(params) {
        return this.client.post('astroapi-3.divineapi.com', '/indian-api/v2/chandramasa', params);
    }
    /** Find samvat details. */
    async findSamvat(params) {
        return this.client.post('astroapi-2.divineapi.com', '/indian-api/v1/find-samvat', params);
    }
    /** Find nakshatra details. */
    async findNakshatra(params) {
        return this.client.post('astroapi-1.divineapi.com', '/indian-api/v2/find-nakshatra', params);
    }
    /** Find surya nakshatra details. */
    async findSuryaNakshatra(params) {
        return this.client.post('astroapi-1.divineapi.com', '/indian-api/v2/find-surya-nakshatra', params);
    }
    /** Find tithi details. */
    async findTithi(params) {
        return this.client.post('astroapi-1.divineapi.com', '/indian-api/v1/find-tithi', params);
    }
    /** Find yoga details. */
    async findYoga(params) {
        return this.client.post('astroapi-1.divineapi.com', '/indian-api/v2/find-yoga', params);
    }
    /** Find karana details. */
    async findKarana(params) {
        return this.client.post('astroapi-1.divineapi.com', '/indian-api/v1/find-karana', params);
    }
    /** Find ritu and anaya details. */
    async findRituAndAnaya(params) {
        return this.client.post('astroapi-2.divineapi.com', '/indian-api/v1/find-ritu-and-anaya', params);
    }
    /** Find auspicious timings. */
    async findAuspiciousTimings(params) {
        return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/auspicious-timings', params);
    }
    /** Find Gowri Panchangam (auspicious/inauspicious day and night segments, Nalla Neram). */
    async findGowriPanchangam(params) {
        return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/find-gowri-panchangam', params);
    }
    /** Find inauspicious timings. */
    async findInauspiciousTimings(params) {
        return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/inauspicious-timings', params);
    }
    /** Find nivas and shool details. */
    async findNivasAndShool(params) {
        return this.client.post('astroapi-2.divineapi.com', '/indian-api/v1/find-nivas-and-shool', params);
    }
    /** Find other calendars and epoch. */
    async findOtherCalendars(params) {
        return this.client.post('astroapi-2.divineapi.com', '/indian-api/v2/find-other-calendars-and-epoch', params);
    }
    /** Get chandrashtama details. */
    async chandrashtama(params) {
        return this.client.post('astroapi-3.divineapi.com', '/indian-api/v2/chandrashtama', params);
    }
    /** Get grah gochar (planet transit) for a specific planet. */
    async grahGochar(planet, params) {
        return this.client.post('astroapi-3.divineapi.com', `/indian-api/v2/grah-gochar/${planet}`, params);
    }
    /** Get planet nakshatra transit for a specific planet. */
    async planetNakshatraTransit(planet, params) {
        return this.client.post('astroapi-3.divineapi.com', `/indian-api/v2/planet-nakshatra-transit/${planet}`, params);
    }
    /** Get planet retrograde transit for a specific planet. */
    async planetRetrogradeTransit(planet, params) {
        return this.client.post('astroapi-3.divineapi.com', `/indian-api/v2/planet-retrograde-transit/${planet}`, params);
    }
    /** Get planet combustion transit for a specific planet. */
    async planetCombustionTransit(planet, params) {
        return this.client.post('astroapi-3.divineapi.com', `/indian-api/v2/planet-combustion-transit/${planet}`, params);
    }
    /** Find chandrabalam and tarabalam. */
    async findChandrabalamAndTarabalam(params) {
        return this.client.post('astroapi-2.divineapi.com', '/indian-api/v2/find-chandrabalam-and-tarabalam', params);
    }
    /** Find panchak rahita. */
    async findPanchakRahita(params) {
        return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/panchak-rahita', params);
    }
    /** Find uday lagna. */
    async findUdayLagna(params) {
        return this.client.post('astroapi-3.divineapi.com', '/indian-api/v2/uday-lagna', params);
    }
    /** Find choghadiya. */
    async findChoghadiya(params) {
        return this.client.post('astroapi-2.divineapi.com', '/indian-api/v1/find-choghadiya', params);
    }
    /** Get monthly sunrise-sunset list. */
    async monthSunriseSunset(params) {
        return this.client.post('astroapi-8.divineapi.com', '/indian-api/v1/month-sunrise-sunset-list', params);
    }
    /** Get monthly nakshatra list. */
    async monthNakshatraList(params) {
        return this.client.post('astroapi-8.divineapi.com', '/indian-api/v1/month-nakshatra-list', params);
    }
    /** Get monthly tithi list. */
    async monthTithiList(params) {
        return this.client.post('astroapi-8.divineapi.com', '/indian-api/v1/month-tithi-list', params);
    }
    /** Get monthly surya nakshatra list. */
    async monthSuryaNakshatraList(params) {
        return this.client.post('astroapi-8.divineapi.com', '/indian-api/v1/month-surya-nakshatra-list', params);
    }
    /** Marriage Muhurat. */
    async muhuratMarriage(params) {
        return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/muhurat/marriage', params);
    }
    /** Griha Pravesh (House Entering) Muhurat. */
    async muhuratHouseEntering(params) {
        return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/muhurat/house-entering', params);
    }
    /** Vehicle Purchase Muhurat. */
    async muhuratVehiclePurchase(params) {
        return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/muhurat/vehicle-purchase', params);
    }
    /** Property Purchase Muhurat. */
    async muhuratPropertyPurchase(params) {
        return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/muhurat/property-purchase', params);
    }
    /** Business Start Muhurat. */
    async muhuratBusinessStart(params) {
        return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/muhurat/business-start', params);
    }
    /** Foundation Laying (Bhoomi Pujan) Muhurat. */
    async muhuratFoundationLaying(params) {
        return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/muhurat/foundation-laying', params);
    }
    /** Do Ghati Muhurat. */
    async muhuratDoGhati(params) {
        return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/muhurat/do-ghati', params);
    }
    /** Hora. */
    async muhuratHora(params) {
        return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/muhurat/hora', params);
    }
    /** Jain Pachakkhan. */
    async muhuratJainPachakkhan(params) {
        return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/muhurat/jain-pachakkhan', params);
    }
}
exports.PanchangApi = PanchangApi;
//# sourceMappingURL=panchang.js.map