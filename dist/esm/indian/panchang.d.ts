import { BaseClient } from '../client.js';
import type { ApiResponse, PanchangBaseParams, PanchangWithSanskritParams, ChandramasaParams, MonthlyPanchangParams, PlanetTransitParams, NakshatraTransitParams, ChandrashtamaParams, MonthSuryaNakshatraParams } from '../types.js';
/**
 * Indian Panchang API endpoints.
 * Various hosts under /indian-api/
 */
export declare class PanchangApi {
    private readonly client;
    constructor(client: BaseClient);
    /** Find sun and moon positions. */
    findSunAndMoon(params: PanchangBaseParams): Promise<ApiResponse>;
    /** Find panchang details for a given date and location. */
    findPanchang(params: PanchangWithSanskritParams): Promise<ApiResponse>;
    /** Find chandramasa details. */
    findChandramasa(params: ChandramasaParams): Promise<ApiResponse>;
    /** Find samvat details. */
    findSamvat(params: PanchangBaseParams): Promise<ApiResponse>;
    /** Find nakshatra details. */
    findNakshatra(params: PanchangBaseParams): Promise<ApiResponse>;
    /** Find surya nakshatra details. */
    findSuryaNakshatra(params: PanchangBaseParams): Promise<ApiResponse>;
    /** Find tithi details. */
    findTithi(params: PanchangBaseParams): Promise<ApiResponse>;
    /** Find yoga details. */
    findYoga(params: PanchangBaseParams): Promise<ApiResponse>;
    /** Find karana details. */
    findKarana(params: PanchangBaseParams): Promise<ApiResponse>;
    /** Find ritu and anaya details. */
    findRituAndAnaya(params: PanchangWithSanskritParams): Promise<ApiResponse>;
    /** Find auspicious timings. */
    findAuspiciousTimings(params: PanchangBaseParams): Promise<ApiResponse>;
    /** Find inauspicious timings. */
    findInauspiciousTimings(params: PanchangBaseParams): Promise<ApiResponse>;
    /** Find nivas and shool details. */
    findNivasAndShool(params: PanchangBaseParams): Promise<ApiResponse>;
    /** Find other calendars and epoch. */
    findOtherCalendars(params: PanchangBaseParams): Promise<ApiResponse>;
    /** Get chandrashtama details. */
    chandrashtama(params: ChandrashtamaParams): Promise<ApiResponse>;
    /** Get grah gochar (planet transit) for a specific planet. */
    grahGochar(planet: string, params: PlanetTransitParams): Promise<ApiResponse>;
    /** Get planet nakshatra transit for a specific planet. */
    planetNakshatraTransit(planet: string, params: NakshatraTransitParams): Promise<ApiResponse>;
    /** Get planet retrograde transit for a specific planet. */
    planetRetrogradeTransit(planet: string, params: PlanetTransitParams): Promise<ApiResponse>;
    /** Get planet combustion transit for a specific planet. */
    planetCombustionTransit(planet: string, params: PlanetTransitParams): Promise<ApiResponse>;
    /** Find chandrabalam and tarabalam. */
    findChandrabalamAndTarabalam(params: PanchangWithSanskritParams): Promise<ApiResponse>;
    /** Find panchak rahita. */
    findPanchakRahita(params: PanchangBaseParams): Promise<ApiResponse>;
    /** Find uday lagna. */
    findUdayLagna(params: PanchangWithSanskritParams): Promise<ApiResponse>;
    /** Find choghadiya. */
    findChoghadiya(params: PanchangBaseParams): Promise<ApiResponse>;
    /** Get monthly sunrise-sunset list. */
    monthSunriseSunset(params: MonthlyPanchangParams): Promise<ApiResponse>;
    /** Get monthly nakshatra list. */
    monthNakshatraList(params: MonthlyPanchangParams): Promise<ApiResponse>;
    /** Get monthly tithi list. */
    monthTithiList(params: MonthlyPanchangParams): Promise<ApiResponse>;
    /** Get monthly surya nakshatra list. */
    monthSuryaNakshatraList(params: MonthSuryaNakshatraParams): Promise<ApiResponse>;
}
//# sourceMappingURL=panchang.d.ts.map