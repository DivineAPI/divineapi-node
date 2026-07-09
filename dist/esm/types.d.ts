/**
 * Configuration for the Divine API client.
 */
export interface DivineApiConfig {
    /** Your Divine API key */
    apiKey: string;
    /** Bearer auth token (if not provided, apiKey is used) */
    authToken?: string;
    /** Request timeout in milliseconds (default: 30000) */
    timeout?: number;
}
/** Base host definitions */
export type ApiHost = 'astroapi-1.divineapi.com' | 'astroapi-2.divineapi.com' | 'astroapi-3.divineapi.com' | 'astroapi-4.divineapi.com' | 'astroapi-5.divineapi.com' | 'astroapi-7.divineapi.com' | 'astroapi-8.divineapi.com' | 'pdf.divineapi.com';
/** Allow all param interfaces to be passed as Record<string, unknown> */
export interface BaseParams {
    [key: string]: unknown;
}
export interface LanguageParam extends BaseParams {
    /** Language code (e.g., "en", "hi") */
    lan?: string;
}
export interface TimezoneParam extends BaseParams {
    /** Timezone offset (e.g., 5.5 for IST) */
    tzone: number;
}
export interface DateParams extends BaseParams {
    day: number;
    month: number;
    year: number;
}
export interface LocationParams extends BaseParams {
    place: string;
    lat: number;
    lon: number;
}
export interface BirthParams extends DateParams, LocationParams, TimezoneParam, LanguageParam {
    full_name?: string;
    hour: number;
    min: number;
    sec?: number;
    gender?: string;
}
export interface ChartStylingParams extends BaseParams {
    chart_style?: string;
    chart_color?: string;
    font_color?: string;
    font_size?: string;
    sign_color?: string;
    sign_font_size?: string;
}
export interface CoupleBirthParams extends LanguageParam, BaseParams {
    p1_full_name: string;
    p1_day: number;
    p1_month: number;
    p1_year: number;
    p1_hour: number;
    p1_min: number;
    p1_sec?: number;
    p1_gender: string;
    p1_place: string;
    p1_lat: number;
    p1_lon: number;
    p1_tzone: number;
    p2_full_name: string;
    p2_day: number;
    p2_month: number;
    p2_year: number;
    p2_hour: number;
    p2_min: number;
    p2_sec?: number;
    p2_gender: string;
    p2_place: string;
    p2_lat: number;
    p2_lon: number;
    p2_tzone: number;
}
export interface TransitDateParams extends BaseParams {
    transit_day: number;
    transit_month: number;
    transit_year: number;
    transit_hour: number;
    transit_min: number;
    transit_sec?: number;
}
export interface PdfCompanyParams extends BaseParams {
    company_name?: string;
    company_url?: string;
    company_email?: string;
    company_mobile?: string;
    company_bio?: string;
    logo_url?: string;
    footer_text?: string;
}
export interface DailyHoroscopeParams extends TimezoneParam, LanguageParam {
    sign: string;
    day: number;
    month: number;
    year: number;
}
export interface WeeklyHoroscopeParams extends TimezoneParam, LanguageParam {
    sign: string;
    week: string;
}
export interface MonthlyHoroscopeParams extends TimezoneParam, LanguageParam {
    sign: string;
    month: number;
}
export interface YearlyHoroscopeParams extends TimezoneParam, LanguageParam {
    sign: string;
    year: number;
}
export interface ChineseHoroscopeParams extends TimezoneParam, LanguageParam {
    sign: string;
    h_day: string;
}
export interface NumerologyHoroscopeParams extends TimezoneParam, LanguageParam, DateParams {
    number: number;
}
export interface CardImageParams extends LanguageParam, BaseParams {
    card_image?: string;
}
export interface LoveCompatibilityParams extends LanguageParam, BaseParams {
    sign_1: string;
    sign_2: string;
}
export interface WhichAnimalParams extends DateParams, LanguageParam {
    full_name: string;
}
export interface PanchangBaseParams extends DateParams, LocationParams, TimezoneParam, LanguageParam {
}
export interface PanchangWithSanskritParams extends PanchangBaseParams {
    sanskrit_sign?: string;
}
export interface ChandramasaParams extends LocationParams, TimezoneParam, LanguageParam {
    day: number;
    month: number;
    year: number;
    month_type?: string;
}
export interface MonthlyPanchangParams extends LocationParams, TimezoneParam {
    month: number;
    year: number;
}
export interface PlanetTransitParams extends LocationParams, TimezoneParam, LanguageParam {
    month: number;
    year: number;
    sanskrit_sign?: string;
}
export interface NakshatraTransitParams extends PlanetTransitParams {
    pada_transit?: string;
}
export interface ChandrashtamaParams extends LocationParams, TimezoneParam, LanguageParam {
    month: number;
    year: number;
    sanskrit_sign?: string;
}
export interface MonthSuryaNakshatraParams extends DateParams, LocationParams, TimezoneParam, LanguageParam {
}
export interface FestivalMonthParams extends LocationParams, TimezoneParam {
    year: number;
}
export interface EnglishCalendarFestivalParams extends LocationParams, TimezoneParam {
    year: number;
    month: number;
}
export interface DateSpecificFestivalParams extends DateParams, LocationParams, TimezoneParam {
}
export interface FindFestivalParams extends LocationParams, TimezoneParam {
    year: number;
    festival: string;
}
export interface MalayalamFestivalParams extends LocationParams, TimezoneParam {
    year: number;
}
export interface TamilFestivalParams extends LocationParams, TimezoneParam {
    year: number;
}
export interface SankrantiFestivalParams extends LocationParams, TimezoneParam {
    year: number;
}
export interface KundliBirthParams extends BirthParams {
}
export interface HoroscopeChartParams extends BirthParams, ChartStylingParams {
    chart_id: string;
}
export interface VimshottariDashaParams extends BirthParams {
    dasha_type?: string;
}
export interface DashaAnalysisParams extends BirthParams {
    maha_dasha?: string;
    antar_dasha?: string;
    pratyantar_dasha?: string;
}
export interface SubPlanetChartParams extends BirthParams, ChartStylingParams {
}
export interface KundliTransitParams extends BirthParams, TransitDateParams, ChartStylingParams {
}
export interface PlanetAnalysisParams extends BirthParams {
    analysis_planet: string;
}
export interface LalKitabMahadashaContentParams extends LanguageParam {
    /** Mahadasha planet (no birth data needed) */
    maha_dasha: string;
}
export interface LalKitabAntardashaContentParams extends LanguageParam {
    /** Mahadasha planet (no birth data needed) */
    maha_dasha: string;
    /** Must be a valid antardasha for the chosen mahadasha; the API lists the valid values on mismatch */
    antar_dasha: string;
}
export interface LalKitabHouseSignificationParams extends BirthParams {
    /** House number (1-12) */
    house_no: number;
}
export interface LalKitabVarshphalParams extends BirthParams {
    /** Year for the annual (varshphal) chart */
    varshphal_year: number;
}
export interface MatchMakingParams extends CoupleBirthParams {
}
export interface MatchingChartParams extends CoupleBirthParams {
    chart_id: string;
}
export interface WesternBirthParams extends BirthParams {
    house_system?: string;
}
export interface NatalWheelChartParams extends WesternBirthParams {
    show_symbol?: string;
    wheel_color?: string;
    wheel_bg_color?: string;
}
export interface PlanetReportParams extends WesternBirthParams {
    planet: string;
}
export interface MoonPhaseCalendarParams extends LocationParams, TimezoneParam, LanguageParam {
    month: number;
    year: number;
}
export interface FixedStarsDetailsParams extends WesternBirthParams {
    star_list: string;
}
export interface DominantsParams extends WesternBirthParams {
    method?: string;
}
export interface SynastryParams extends CoupleBirthParams {
    house_system?: string;
}
export interface SynastryChartParams extends SynastryParams {
    show_symbol?: string;
    wheel_color?: string;
    wheel_bg_color?: string;
}
export interface BasicTransitParams extends WesternBirthParams, TransitDateParams {
}
export interface WeeklyTransitParams extends WesternBirthParams {
    transit_planet?: string;
}
export interface FullTransitParams extends WesternBirthParams, TransitDateParams {
    transit_place?: string;
    transit_lat?: number;
    transit_lon?: number;
    transit_tzone?: number;
}
export interface PlanetRetrogradeCombustionParams extends LocationParams, TimezoneParam {
    planet?: string;
    month: number;
    year: number;
}
export interface TransitHouseParams extends FullTransitParams {
}
export interface CompositeParams extends CoupleBirthParams {
    house_system?: string;
}
export interface CompositeChartParams extends CompositeParams {
    show_symbol?: string;
    wheel_color?: string;
    wheel_bg_color?: string;
}
export interface PlanetReturnListParams extends WesternBirthParams {
    planet?: string;
}
export interface PlanetReturnDetailsParams extends WesternBirthParams {
    planet?: string;
    return_key?: string;
    return_day?: number;
    return_month?: number;
    return_year?: number;
    return_hour?: number;
    return_min?: number;
    return_place?: string;
    return_lat?: number;
    return_lon?: number;
    return_tzone?: number;
}
export interface ProgressedLunarEventsParams extends WesternBirthParams {
    prenatal_type?: string;
}
export interface PlanetaryArcDirectionsParams extends WesternBirthParams {
    planet?: string;
    progressed_day?: number;
    progressed_month?: number;
    progressed_year?: number;
}
export interface SecondaryProgressionsParams extends WesternBirthParams {
    planet?: string;
    progressed_day?: number;
    progressed_month?: number;
    progressed_year?: number;
    progressed_type?: string;
}
export interface PrenatalListParams extends WesternBirthParams {
    prenatal_type?: string;
}
export interface PrenatalDetailsParams extends WesternBirthParams {
    prenatal_key?: string;
}
export interface PdfBirthParams extends BirthParams, PdfCompanyParams {
}
export interface PdfCoupleParams extends CoupleBirthParams, PdfCompanyParams {
}
export interface PdfReportParams extends BirthParams, PdfCompanyParams {
    report_code: string;
    theme?: string;
}
export interface PdfCoupleReportParams extends CoupleBirthParams, PdfCompanyParams {
    report_code: string;
}
export interface PdfNumerologyPredictionParams extends PdfCompanyParams {
    full_name: string;
    day: number;
    month: number;
    year: number;
    report_code: string;
}
export interface PdfNumerologyReportParams extends PdfCompanyParams {
    full_name: string;
    day: number;
    month: number;
    year: number;
    report_code: string;
}
export interface NewMobileNumberParams extends BaseParams {
    fname: string;
    lname: string;
    day: number;
    month: number;
    year: number;
}
export interface AnalyzeMobileNumberParams extends NewMobileNumberParams {
    mobile_number: string;
}
export interface ChaldeanNumerologyParams extends LanguageParam {
    day: number;
    month: number;
    year: number;
    fname: string;
    lname: string;
}
export interface CoreNumbersParams extends BaseParams {
    full_name: string;
    day: number;
    month: number;
    year: number;
    gender: string;
    method?: string;
}
export interface LifestyleParams extends TimezoneParam, LanguageParam {
    sign: string;
    h_day: string;
}
export interface FlamesCalculatorParams extends BaseParams {
    full_name: string;
    partner_name: string;
}
export interface LoveCalculatorParams extends BaseParams {
    your_name: string;
    partner_name: string;
    your_gender: string;
    partner_gender: string;
}
/** Generic API response wrapper */
export interface ApiResponse<T = unknown> {
    success: boolean | number;
    data?: T;
    message?: string;
    [key: string]: unknown;
}
//# sourceMappingURL=types.d.ts.map