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
export type ApiHost = 'astroapi-1.divineapi.com' | 'astroapi-2.divineapi.com' | 'astroapi-3.divineapi.com' | 'astroapi-4.divineapi.com' | 'astroapi-5.divineapi.com' | 'astroapi-7.divineapi.com' | 'astroapi-8.divineapi.com' | 'pdf.divineapi.com' | 'geolocation.divineapi.com' | 'ask.divineapi.com';
/**
 * Minimal POST surface the sub-API modules depend on. Both {@link BaseClient}
 * and the Western house-system wrapper satisfy it structurally.
 */
export interface PostClient {
    post<T = unknown>(host: ApiHost, path: string, params?: Record<string, unknown>): Promise<T>;
}
/** Daily-horoscope / lifestyle day selector. The API rejects calendar dates. */
export type HDaySelector = 'today' | 'tomorrow' | 'yesterday';
/** Weekly / monthly / yearly horoscope period selector. The API rejects dates or numbers. */
export type PeriodSelector = 'current' | 'prev' | 'next';
/** core-numbers calculation method. */
export type CoreNumberMethod = 'general' | 'chaldean' | 'pythagorean';
/** dominants calculation method. */
export type DominantsMethod = 'TRADITIONAL' | 'MODERN';
/**
 * Western house system. Friendly names are mapped to the single-letter code the
 * API requires (placidus -> P, koch -> K, ...) before the request is sent, so
 * either form works. Letter codes pass through unchanged.
 */
export type HouseSystem = 'placidus' | 'koch' | 'porphyry' | 'regiomontanus' | 'campanus' | 'equal' | 'equal-asc' | 'equal_asc' | 'equal-mc' | 'equal_mc' | 'vehlow' | 'vehlow-equal' | 'whole-sign' | 'whole_sign' | 'wholesign' | 'meridian' | 'axial-rotation' | 'morinus' | 'sripati' | 'topocentric' | 'polich-page' | 'alcabitius' | 'whole-sign-aries' | 'whole_sign_aries' | 'P' | 'K' | 'O' | 'R' | 'C' | 'A' | 'E' | 'D' | 'V' | 'W' | 'X' | 'M' | 'S' | 'T' | 'B' | 'N';
/** Planet whose natal degree the transiting Sun must reach for a persona chart. */
export type PersonaPlanet = 'sun' | 'moon' | 'mercury' | 'venus' | 'mars' | 'jupiter' | 'saturn' | 'uranus' | 'neptune' | 'pluto';
/**
 * Wheel-image layout for the persona chart. Affects the chart images only,
 * never the numeric data, and is case-sensitive on the wire.
 */
export type PersonaGraphicLayout = 'PLANETS_ONLY' | 'PLANETS_DEGREES' | 'PLANETS_DEGREES_SIGNS' | 'INNER_V1_HOUSE_CUSPS_PLANETS' | 'INNER_V1_HOUSE_CUSPS_PLANETS_DEGREES' | 'INNER_V1_HOUSE_CUSPS_PLANETS_DEGREES_SIGNS' | 'INNER_V2_HOUSE_CUSPS_PLANETS' | 'INNER_V2_HOUSE_CUSPS_PLANETS_DEGREES' | 'INNER_V2_HOUSE_CUSPS_PLANETS_DEGREES_SIGNS' | 'OUTER_HOUSE_CUSPS_PLANETS' | 'OUTER_HOUSE_CUSPS_PLANETS_DEGREES' | 'OUTER_HOUSE_CUSPS_PLANETS_DEGREES_SIGNS';
/** Lunar node convention used for the North/South Node positions. */
export type NodeType = 'meannode' | 'truenode';
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
/**
 * Company branding block that the PDF backend REQUIRES on every report
 * (verified live: a call missing any of the six 400s / success:2). Only
 * company_mobile is genuinely optional.
 */
export interface PdfRequiredCompanyParams extends BaseParams {
    company_name: string;
    company_url: string;
    company_email: string;
    company_bio: string;
    logo_url: string;
    footer_text: string;
    company_mobile?: string;
}
export interface DailyHoroscopeParams extends TimezoneParam, LanguageParam {
    sign: string;
    /** Day selector: 'today', 'tomorrow', or 'yesterday'. Required by the API. */
    h_day: HDaySelector;
    /** @deprecated Ignored by this endpoint (the reading is selected via h_day). Accepted for back-compat but NOT sent. */
    day?: number;
    /** @deprecated Ignored by this endpoint. Accepted for back-compat but NOT sent. */
    month?: number;
    /** @deprecated Ignored by this endpoint. Accepted for back-compat but NOT sent. */
    year?: number;
}
export interface WeeklyHoroscopeParams extends TimezoneParam, LanguageParam {
    sign: string;
    /** Week selector: 'current', 'prev', or 'next'. Calendar dates are rejected. */
    week: PeriodSelector;
}
export interface MonthlyHoroscopeParams extends TimezoneParam, LanguageParam {
    sign: string;
    /** Month selector: 'current', 'prev', or 'next'. Month numbers are rejected. */
    month: PeriodSelector;
}
export interface YearlyHoroscopeParams extends TimezoneParam, LanguageParam {
    sign: string;
    /** Year selector: 'current', 'prev', or 'next'. Calendar years are rejected. */
    year: PeriodSelector;
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
export interface MuhuratMonthlyParams extends LocationParams, TimezoneParam, LanguageParam {
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
/**
 * When and where a KP Prashna (horary) question is asked. These are not birth
 * details. The API requires `full_name` and `gender` but does not use them in
 * the calculation; the SDK sends 'Querent' and 'other' when they are omitted.
 */
export interface KpPrashnaParams extends DateParams, LocationParams, TimezoneParam {
    hour: number;
    min: number;
    /** Default 0; the API requires it. */
    sec?: number;
    full_name?: string;
    /** 'male', 'female' or 'other' */
    gender?: string;
}
export interface KpPrashnaChartParams extends KpPrashnaParams {
    /** The number (1-249) the querent thinks of. */
    horary_number: number;
    node_type?: 'meannode' | 'truenode';
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
export interface VarshphalParams extends BirthParams {
    /** Year for the annual (varshphal) chart */
    varshphal_year: number;
}
export interface MatchMakingParams extends CoupleBirthParams {
}
export interface MatchingChartParams extends CoupleBirthParams {
    chart_id: string;
}
export interface WesternBirthParams extends BirthParams {
    /** Optional. Friendly name or letter code; mapped to a letter before sending. Omit to use the API default (Placidus / P). */
    house_system?: HouseSystem;
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
    /** Required by the API. 'TRADITIONAL' or 'MODERN' (results differ). */
    method: DominantsMethod;
}
export interface PersonaChartParams extends WesternBirthParams {
    /** Required. Planet whose natal degree the transiting Sun must reach. Case-insensitive on the wire. */
    persona_planet: PersonaPlanet | string;
    /** Optional. Lunar node convention for the North/South Node positions. */
    node_type?: NodeType;
    /**
     * Optional. Response size control; comma-separated tokens. The API defaults
     * to 'raw_data' (~21 KB, numeric data only). Chart images are large: the
     * *_svg and *_base64 tokens are ~0.5 MB each and 'all' returns ~4.3 MB.
     */
    output_include?: string;
    /** Optional. Wheel-image layout. Affects images only, never the numeric data. */
    graphic_layout?: PersonaGraphicLayout;
}
export interface SynastryParams extends CoupleBirthParams {
    /** Optional. Friendly name or letter code; mapped to a letter before sending. */
    house_system?: HouseSystem;
}
export interface SynastryChartParams extends SynastryParams {
    show_symbol?: string;
    wheel_color?: string;
    wheel_bg_color?: string;
}
/** Transit event location. Required by full-transit, transit house, monthly, wheel-chart, and transit planetary-positions. */
export interface TransitLocationParams extends BaseParams {
    transit_place: string;
    transit_lat: number;
    transit_lon: number;
    transit_tzone: number;
}
export interface BasicTransitParams extends WesternBirthParams, TransitDateParams {
}
export interface WeeklyTransitParams extends WesternBirthParams {
    /** Required by the API. Transiting planet to track (e.g. 'moon', 'mars'); the value changes the result. */
    transit_planet: string;
}
/** Natal chart + a specific transit moment and place (full-transit, transit house, wheel-chart, transit planetary-positions). */
export interface TransitChartParams extends WesternBirthParams, TransitDateParams, TransitLocationParams {
}
export interface FullTransitParams extends TransitChartParams {
    /** Required by the API. Transiting planet to analyze (e.g. 'moon', 'mars'). */
    transit_planet: string;
    aspects_type?: string;
    aspect_orbs_type?: string;
    aspect_orbs_value?: string;
}
export interface MonthlyTransitParams extends WesternBirthParams, TransitLocationParams {
    /** Required. Transiting planet to track for the month. */
    transit_planet: string;
    /** Required. Transit month number (e.g. 10). */
    transit_month: number;
    /** Required. Transit year (e.g. 2025). */
    transit_year: number;
    aspects_type?: string;
    aspect_orbs_type?: string;
    aspect_orbs_value?: string;
}
export interface PlanetRetrogradeCombustionParams extends LocationParams, TimezoneParam {
    planet?: string;
    month: number;
    year: number;
}
export interface TransitHouseParams extends TransitChartParams {
}
/** Natal chart + a specific transit moment and place. Custom transit does not require house_system. */
export interface CustomTransitParams extends TransitChartParams {
}
export interface CompositeParams extends CoupleBirthParams {
    /** Optional. Friendly name or letter code; mapped to a letter before sending. */
    house_system?: HouseSystem;
}
export interface CompositeChartParams extends CompositeParams {
    show_symbol?: string;
    wheel_color?: string;
    wheel_bg_color?: string;
}
export interface PlanetReturnListParams extends WesternBirthParams {
    /** Required. Planet whose returns to list (e.g. 'moon', 'sun'). */
    planet: string;
    /** Required. Year to list returns for (e.g. 2024). */
    return_year: number;
    /** Required. Return-location latitude. */
    return_lat: number;
    /** Required. Return-location longitude. */
    return_lon: number;
    /** Required. Return-location timezone offset. */
    return_tzone: number;
    /** Required. Return-location place name. */
    return_place: string;
}
export interface PlanetReturnDetailsParams extends WesternBirthParams {
    /** Required. Planet whose return chart to compute. */
    planet: string;
    /** Required. Return identifier from planetReturns.list (e.g. 'MOON_P_1705862940000'). */
    return_key: string;
    /** Required. Year of the return. */
    return_year: number;
    /** Required. Return-location latitude. */
    return_lat: number;
    /** Required. Return-location longitude. */
    return_lon: number;
    /** Required. Return-location timezone offset. */
    return_tzone: number;
    /** Required. Return-location place name. */
    return_place: string;
}
export interface ProgressedLunarEventsParams extends WesternBirthParams {
    /** Required. Prenatal event type (e.g. 'SYZYGY'). */
    prenatal_type: string;
}
export interface PlanetaryArcDirectionsParams extends WesternBirthParams {
    /** Required. Planet to direct (e.g. 'mars'). */
    planet: string;
    /** Required. Target date day. */
    progressed_day: number;
    /** Required. Target date month. */
    progressed_month: number;
    /** Required. Target date year. */
    progressed_year: number;
}
export interface SecondaryProgressionsParams extends WesternBirthParams {
    /** Required. Target date day. */
    progressed_day: number;
    /** Required. Target date month. */
    progressed_month: number;
    /** Required. Target date year. */
    progressed_year: number;
    /** Required. Target time hour (24h). */
    progressed_hour: number;
    /** Required. Target time minute. */
    progressed_min: number;
    /** Required. Target time second. */
    progressed_sec: number;
    /** Required. Progression rate method (e.g. 'ARMC1_NAIBOD'). */
    progressed_type: string;
    /** Optional. Focus the progression on one planet. */
    planet?: string;
}
export interface PrenatalListParams extends WesternBirthParams {
    /** Required. Prenatal event type (e.g. 'SYZYGY'). */
    prenatal_type: string;
}
export interface PrenatalDetailsParams extends WesternBirthParams {
    /** Required. Prenatal event identifier from prenatal.list (e.g. 'SYZYGY_NM_P_648635040000'). */
    prenatal_key: string;
}
/** Cover-page options of the Vedic V1 PDF reports (DV-529). */
export interface PdfCoverParams extends BaseParams {
    /** URL of a cover image for the first page (PNG or JPEG). */
    front_image?: string;
    /** Show only front_image on the cover. The SDK sends true/false as 1/0, as the V1 API expects. */
    hide_frontpage_details?: boolean | 0 | 1;
}
export interface PdfBirthParams extends BirthParams, PdfRequiredCompanyParams, PdfCoverParams {
}
export interface PdfCoupleParams extends CoupleBirthParams, PdfRequiredCompanyParams, PdfCoverParams {
}
/** Reports V2 request body (`/api/v1/reports/generate` and `/api/v1/western/reports/generate`). */
export interface ReportsV2Params extends BaseParams {
    /** Report slug, e.g. 'vedic-career-report' or 'western-natal-blueprint' (or a Western family code with tier). */
    report_type: string;
    /** Western only: depth for a family code. Omit for 'comprehensive'. */
    tier?: 'snapshot' | 'insight' | 'advanced' | 'comprehensive';
    company_name: string;
    company_url: string;
    company_email: string;
    company_mobile: string;
    company_bio: string;
    footer_text: string;
    logo_url: string;
    /** URL of the cover image (PNG or JPEG). */
    front_image?: string;
    /** True shows only front_image on the cover (requires front_image). Default false. */
    hide_frontpage_details?: boolean | 'true' | 'false';
}
export interface PdfReportParams extends BirthParams, PdfRequiredCompanyParams {
    /** Required. Report code selecting the report (e.g. 'CAREER-REPORT'). */
    report_code: string;
    /** Required by the API. Visual theme code for the PDF (e.g. '001'). */
    theme: string;
}
export interface PdfCoupleReportParams extends CoupleBirthParams, PdfRequiredCompanyParams {
    /** Required. Report code (e.g. 'ALIGNED-ENERGIES-REPORT'). */
    report_code: string;
}
export interface PdfNumerologyPredictionParams extends PdfRequiredCompanyParams {
    full_name: string;
    day: number;
    month: number;
    year: number;
    /** Required by the API. 'male' or 'female'. */
    gender: string;
    /** Required. Report code (e.g. 'YEARLY-PREDICTION-3-YEAR'). */
    report_code: string;
    /** Optional birth time/place; the report generates without them. */
    hour?: number;
    min?: number;
    sec?: number;
    place?: string;
    lat?: number;
    lon?: number;
    tzone?: number;
    lan?: string;
}
export interface PdfNumerologyReportParams extends PdfRequiredCompanyParams {
    full_name: string;
    day: number;
    month: number;
    year: number;
    /** Required by the API. 'male' or 'female'. */
    gender: string;
    /** Required. Report code (e.g. 'SCHOLARLY-SPIRITS'). */
    report_code: string;
    /** Optional birth time/place; the report generates without them. */
    hour?: number;
    min?: number;
    sec?: number;
    place?: string;
    lat?: number;
    lon?: number;
    tzone?: number;
    lan?: string;
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
export interface NameCorrectionParams extends LanguageParam {
    full_name: string;
    day: number;
    month: number;
    year: number;
}
export interface CoreNumbersParams extends BaseParams {
    full_name: string;
    day: number;
    month: number;
    year: number;
    /** Required by the API. 'general', 'chaldean', or 'pythagorean'. */
    method: CoreNumberMethod;
    /** Optional. Accepted by the API but does not change the result. */
    gender?: string;
}
export interface LifestyleParams extends TimezoneParam, LanguageParam {
    sign: string;
    h_day: string;
}
export interface LocationSearchParams extends BaseParams {
    /** Place name to search for, at least 3 characters (e.g. "Patna"). */
    place: string;
}
/**
 * Birth details for the Astro Chatbot. Numbers are fine: the SDK sends every value as
 * the string the chatbot requires (it rejects JSON numbers with 422).
 */
export interface ChatbotBirthDetails {
    /** Name used to address the person. */
    full_name?: string;
    /** Day of birth, 1-31. */
    day?: number | string;
    /** Month of birth, 1-12. */
    month?: number | string;
    /** Year of birth, e.g. 1996. */
    year?: number | string;
    /** Hour of birth, 0-23 (24-hour clock). */
    hour?: number | string;
    /** Minute of birth, 0-59. */
    min?: number | string;
    /** Second of birth, 0-59 (default 0). */
    sec?: number | string;
    /** "male" or "female". */
    gender?: string;
    /** Birth city, e.g. "New Delhi". */
    place?: string;
    /** Latitude of the birth place, e.g. 28.7041. */
    lat?: number | string;
    /** Longitude of the birth place, e.g. 77.1025. */
    lon?: number | string;
    /** Hours ahead of UTC at birth, e.g. 5.5. */
    tzone?: number | string;
}
/** Answer depth: quick costs 20 credits, standard 30, deep 50. */
export type ChatbotDepth = 'quick' | 'standard' | 'deep';
/** Style and cost options for a chat message. All optional. */
export interface ChatbotChatOptions {
    /** quick (20 credits), standard (30, default) or deep (50). */
    depth?: ChatbotDepth;
    /** Answer length ceiling (default medium). */
    length_cap?: 'short' | 'medium' | 'full';
    /** "English" (default), "Hindi", any other language name, or "auto" to mirror the message. */
    language?: string;
    /** Astrology school (default western). */
    school?: 'western' | 'vedic' | 'kp' | 'lalkitab';
    /** Topic focus (default general). */
    lens?: 'general' | 'career' | 'love' | 'health' | 'money' | 'spiritual';
    /** How firmly predictions are worded (default balanced). */
    confidence?: 'balanced' | 'definitive' | 'careful';
    /** "strict" is recommended for matrimony and relationship products (default standard). */
    sensitivity?: 'standard' | 'strict';
    /** Free text, default "warm, friendly". */
    tone?: string;
    /** Free text, default "empowering". */
    framing?: string;
    /** What the astrologer calls itself. */
    assistant_name?: string;
    /** Free text describing your brand's voice. */
    brand_voice?: string;
    /** Appended to every answer. */
    sign_off?: string;
    /** Free-text output instructions, at most 500 characters. */
    style_notes?: string;
}
/**
 * One chat message. Send the birth details with the first message of a session; later
 * messages in the same session reuse them until a new complete set replaces them.
 */
export interface ChatbotChatParams extends ChatbotBirthDetails, ChatbotChatOptions {
    /** Your ID for the end user. Sessions are scoped to it. */
    user_id: string | number;
    /** Your ID for the conversation; a new one starts a fresh thread. */
    session_id: string | number;
    /** The user's question, in any language. */
    message: string;
}
/** Daily horoscope for one date. Every call needs the complete birth details. */
export interface ChatbotHoroscopeParams extends ChatbotBirthDetails {
    /** Your ID for the end user. */
    user_id: string | number;
    /** Date of the horoscope, YYYY-MM-DD (1900-01-01 to 2100-12-30). */
    date: string;
    /** quick (up to 20 words), standard (35-50, default) or deep (50-80). Same credits as chat. */
    depth?: ChatbotDepth;
    /** "English" (default) or any other language name. */
    language?: string;
}
export interface ChatbotSessionsParams {
    /** Your ID for the end user. */
    user_id: string | number;
}
export interface ChatbotSessionParams {
    /** Your ID for the end user. */
    user_id: string | number;
    /** One of this user's session IDs. */
    session_id: string | number;
}
/** Answer to a chat message. */
export interface ChatbotChatResponse {
    request_id: string;
    answer: string;
    band: string;
    /** Absent on a blocked (free) reply. */
    credits_charged?: number;
    credits_remaining: number;
    /** true when the guardrails answered instead; nothing is charged. */
    blocked?: boolean;
    block_reason?: string;
    [key: string]: unknown;
}
/**
 * One event from {@link ChatbotApi.chatStream}: `{ delta }` while the answer is written,
 * then one last event with `done: true` and the fields of {@link ChatbotChatResponse}.
 */
export interface ChatbotStreamEvent extends Partial<ChatbotChatResponse> {
    delta?: string;
    done?: boolean;
}
export interface ChatbotHoroscopeResponse {
    request_id: string;
    date: string;
    prediction: string;
    moon_phase_today: string;
    credits_charged: number;
    credits_remaining: number;
    [key: string]: unknown;
}
export interface ChatbotSessionSummary {
    session_id: string;
    /** Number of messages. */
    messages: number;
    /** Unix seconds. */
    started: number;
    /** Unix seconds. */
    last_active: number;
    has_birth_details: boolean;
}
export interface ChatbotSessionsResponse {
    /** Most recent first. */
    sessions: ChatbotSessionSummary[];
}
export interface ChatbotMessage {
    role: 'user' | 'assistant';
    text: string;
    /** Unix seconds. */
    ts: number;
}
export interface ChatbotSessionResponse {
    session_id: string;
    /** Oldest first. */
    messages: ChatbotMessage[];
    /** The stored birth details, as strings. */
    birth_details: Record<string, string> | null;
}
export interface ChatbotDeleteSessionResponse {
    deleted: boolean;
    session_id: string;
    messages_removed: number;
}
export interface ChatbotBalanceResponse {
    state: 'active' | 'expired' | 'limit_reached';
    credits_remaining: number;
    /** YYYY-MM-DD */
    expires: string;
}
export interface FlamesCalculatorParams extends BaseParams {
    /** Your name. The API's field is `your_name` (not `full_name`). */
    your_name: string;
    partner_name: string;
    /** @deprecated Use your_name. Mapped to your_name when your_name is absent. */
    full_name?: string;
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