import { BaseClient } from '../client.js';
import type { ApiResponse, KundliBirthParams, HoroscopeChartParams, VimshottariDashaParams, DashaAnalysisParams, SubPlanetChartParams, KundliTransitParams, PlanetAnalysisParams, LalKitabMahadashaContentParams, LalKitabAntardashaContentParams, LalKitabHouseSignificationParams, LalKitabVarshphalParams } from '../types.js';
/**
 * Indian Kundli (Birth Chart) API endpoints.
 * Host: astroapi-3.divineapi.com
 */
export declare class KundliApi {
    private readonly client;
    constructor(client: BaseClient);
    /** Get Jaimini planetary positions. */
    jaiminiPlanetaryPositions(params: KundliBirthParams): Promise<ApiResponse>;
    /** Get Jaimini padas. */
    jaiminiPadas(params: KundliBirthParams): Promise<ApiResponse>;
    /** Get Jaimini karakamsha lagna. */
    jaiminiKarakamshaLagna(params: KundliBirthParams): Promise<ApiResponse>;
    /** Get Jaimini chara dasha. */
    jaiminiCharaDasha(params: KundliBirthParams): Promise<ApiResponse>;
    /** Get sub planet positions. */
    subPlanetPositions(params: KundliBirthParams): Promise<ApiResponse>;
    /** Get sub planet chart. */
    subPlanetChart(params: SubPlanetChartParams): Promise<ApiResponse>;
    /** Get KP planetary positions. */
    kpPlanetaryPositions(params: KundliBirthParams): Promise<ApiResponse>;
    /** Get KP cuspal details. */
    kpCuspal(params: KundliBirthParams): Promise<ApiResponse>;
    /** Get KP planetary sub. */
    kpPlanetarySub(params: KundliBirthParams): Promise<ApiResponse>;
    /** Get KP planetary cuspal significator table. */
    kpPlanetaryCuspalSignificatorTable(params: KundliBirthParams): Promise<ApiResponse>;
    /** Get KP cuspal sub. */
    kpCuspalSub(params: KundliBirthParams): Promise<ApiResponse>;
    /** Get kundali transit ascendant chart. */
    transitAscendant(params: KundliTransitParams): Promise<ApiResponse>;
    /** Get kundali transit moon chart. */
    transitMoon(params: KundliTransitParams): Promise<ApiResponse>;
    /** Get ashtakvarga details. */
    ashtakvarga(params: KundliBirthParams): Promise<ApiResponse>;
    /** Get sarvashtakavarga chart. */
    sarvashtakavarga(chart: string, params: KundliBirthParams): Promise<ApiResponse>;
    /** Get prasthara chakra. */
    prastharaChakra(params: KundliBirthParams): Promise<ApiResponse>;
    /** Get maha dasha analysis. */
    mahaDashaAnalysis(params: DashaAnalysisParams): Promise<ApiResponse>;
    /** Get antar dasha analysis. */
    antarDashaAnalysis(params: DashaAnalysisParams): Promise<ApiResponse>;
    /** Get pratyantar dasha analysis. */
    pratyantarDashaAnalysis(params: DashaAnalysisParams): Promise<ApiResponse>;
    /** Get basic astro details. */
    basicAstroDetails(params: KundliBirthParams): Promise<ApiResponse>;
    /** Get planetary positions. */
    planetaryPositions(params: KundliBirthParams): Promise<ApiResponse>;
    /** Get horoscope chart by chart ID. */
    horoscopeChart(params: HoroscopeChartParams): Promise<ApiResponse>;
    /** Get Vimshottari dasha. */
    vimshottariDasha(params: VimshottariDashaParams): Promise<ApiResponse>;
    /** Get Kaal Sarpa dosha analysis. */
    kaalSarpaDosha(params: KundliBirthParams): Promise<ApiResponse>;
    /** Get Manglik dosha analysis. */
    manglikDosha(params: KundliBirthParams): Promise<ApiResponse>;
    /** Get ascendant report. */
    ascendantReport(params: KundliBirthParams): Promise<ApiResponse>;
    /** Get composite friendship chart. */
    compositeFriendship(params: KundliBirthParams): Promise<ApiResponse>;
    /** Get bhava kundli chart. */
    bhavaKundli(chartId: string, params: KundliBirthParams & {
        chart_style?: string;
        chart_color?: string;
        font_color?: string;
        font_size?: string;
        sign_color?: string;
        sign_font_size?: string;
    }): Promise<ApiResponse>;
    /** Get Sadhe Sati analysis. */
    sadheSati(params: KundliBirthParams): Promise<ApiResponse>;
    /** Get ghata chakra. */
    ghataChakra(params: KundliBirthParams): Promise<ApiResponse>;
    /** Get shadbala (planetary strength). */
    shadbala(params: KundliBirthParams): Promise<ApiResponse>;
    /** Get gemstone suggestions. */
    gemstoneSuggestion(params: KundliBirthParams): Promise<ApiResponse>;
    /** Get Yogini dasha. */
    yoginiDasha(params: KundliBirthParams): Promise<ApiResponse>;
    /** Get Kaal Chakra dasha. */
    kaalChakraDasha(params: KundliBirthParams): Promise<ApiResponse>;
    /** Get yogas present in the birth chart. */
    yogas(params: KundliBirthParams): Promise<ApiResponse>;
    /** Get Pitra dosha analysis. */
    pitraDosha(params: KundliBirthParams): Promise<ApiResponse>;
    /** Get planet-specific analysis. */
    planetAnalysis(params: PlanetAnalysisParams): Promise<ApiResponse>;
    /** Get sudarshana chakra. */
    sudarshanChakra(params: KundliBirthParams): Promise<ApiResponse>;
    /** Get Lal Kitab planetary positions. */
    lalKitabPlanetaryPositions(params: KundliBirthParams): Promise<ApiResponse>;
    /** Get Lal Kitab horoscope chart. */
    lalKitabHoroscopeChart(params: KundliBirthParams): Promise<ApiResponse>;
    /** Get Lal Kitab house position. */
    lalKitabHousePosition(params: KundliBirthParams): Promise<ApiResponse>;
    /** Get Lal Kitab conjunctions. */
    lalKitabConjunctions(params: KundliBirthParams): Promise<ApiResponse>;
    /** Get Lal Kitab teva. */
    lalKitabTeva(params: KundliBirthParams): Promise<ApiResponse>;
    /** Get Lal Kitab planet-specific analysis (analysis_planet: sun, moon, mars, mercury, jupiter, venus, saturn, rahu or ketu). */
    lalKitabPlanetAnalysis(params: PlanetAnalysisParams): Promise<ApiResponse>;
    /** Get Lal Kitab dasha. */
    lalKitabDasha(params: KundliBirthParams): Promise<ApiResponse>;
    /** Get Lal Kitab planet types. */
    lalKitabPlanetTypes(params: KundliBirthParams): Promise<ApiResponse>;
    /** Get Lal Kitab mahadasha content (no birth data needed). */
    lalKitabMahadashaContent(params: LalKitabMahadashaContentParams): Promise<ApiResponse>;
    /** Get Lal Kitab antardasha content (no birth data needed). The antar_dasha must be valid for the chosen maha_dasha; the API lists the valid values on mismatch. */
    lalKitabAntardashaContent(params: LalKitabAntardashaContentParams): Promise<ApiResponse>;
    /** Get Lal Kitab debts. */
    lalKitabDebts(params: KundliBirthParams): Promise<ApiResponse>;
    /** Get Lal Kitab house signification (house_no: 1-12). */
    lalKitabHouseSignification(params: LalKitabHouseSignificationParams): Promise<ApiResponse>;
    /** Get Lal Kitab varshphal varsha pravesh for the given varshphal_year. */
    lalKitabVarshphalVarshaPravesh(params: LalKitabVarshphalParams): Promise<ApiResponse>;
    /** Get Lal Kitab varshphal planetary positions for the given varshphal_year. */
    lalKitabVarshphalPlanetaryPositions(params: LalKitabVarshphalParams): Promise<ApiResponse>;
    /** Get Lal Kitab varshphal muntha for the given varshphal_year. */
    lalKitabVarshphalMuntha(params: LalKitabVarshphalParams): Promise<ApiResponse>;
    /** Get Lal Kitab varshphal chart for the given varshphal_year. */
    lalKitabVarshphalChart(params: LalKitabVarshphalParams): Promise<ApiResponse>;
    /** Get vargottama planets. */
    vargottamaPlanets(params: KundliBirthParams): Promise<ApiResponse>;
    /** Get bhav bala. */
    bhavBala(params: KundliBirthParams): Promise<ApiResponse>;
    /** Get shani ashtam shani. */
    shaniAshtamShani(params: KundliBirthParams): Promise<ApiResponse>;
    /** Get bhava analysis. */
    bhavaAnalysis(params: KundliBirthParams): Promise<ApiResponse>;
    /** Get bhava group predictions. */
    bhavaGroupPredictions(params: KundliBirthParams): Promise<ApiResponse>;
    /** Get planet remedies (analysis_planet: sun, moon, mars, mercury, jupiter, venus, saturn, rahu or ketu). */
    planetRemedies(params: PlanetAnalysisParams): Promise<ApiResponse>;
    rudrakshaSuggestion(params: KundliBirthParams): Promise<ApiResponse>;
}
//# sourceMappingURL=kundli.d.ts.map