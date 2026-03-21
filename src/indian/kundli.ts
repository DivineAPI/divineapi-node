import { BaseClient } from '../client.js';
import type {
  ApiResponse,
  KundliBirthParams,
  HoroscopeChartParams,
  VimshottariDashaParams,
  DashaAnalysisParams,
  SubPlanetChartParams,
  KundliTransitParams,
  PlanetAnalysisParams,
} from '../types.js';

/**
 * Indian Kundli (Birth Chart) API endpoints.
 * Host: astroapi-3.divineapi.com
 */
export class KundliApi {
  private readonly client: BaseClient;

  constructor(client: BaseClient) {
    this.client = client;
  }

  // ── Jaimini Astrology ──

  /** Get Jaimini planetary positions. */
  async jaiminiPlanetaryPositions(params: KundliBirthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v2/jaimini-astrology/planetary-positions', params as unknown as Record<string, unknown>);
  }

  /** Get Jaimini padas. */
  async jaiminiPadas(params: KundliBirthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/jaimini-astrology/padas', params as unknown as Record<string, unknown>);
  }

  /** Get Jaimini karakamsha lagna. */
  async jaiminiKarakamshaLagna(params: KundliBirthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/jaimini-astrology/karakamsha-lagna', params as unknown as Record<string, unknown>);
  }

  /** Get Jaimini chara dasha. */
  async jaiminiCharaDasha(params: KundliBirthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/jaimini-astrology/chara-dasha', params as unknown as Record<string, unknown>);
  }

  // ── Sub Planet ──

  /** Get sub planet positions. */
  async subPlanetPositions(params: KundliBirthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v2/sub-planet-positions', params as unknown as Record<string, unknown>);
  }

  /** Get sub planet chart. */
  async subPlanetChart(params: SubPlanetChartParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/sub-planet-chart', params as unknown as Record<string, unknown>);
  }

  // ── KP (Krishnamurti Paddhati) ──

  /** Get KP planetary positions. */
  async kpPlanetaryPositions(params: KundliBirthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v2/kp/planetary-positions', params as unknown as Record<string, unknown>);
  }

  /** Get KP cuspal details. */
  async kpCuspal(params: KundliBirthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v2/kp/cuspal', params as unknown as Record<string, unknown>);
  }

  /** Get KP planetary sub. */
  async kpPlanetarySub(params: KundliBirthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/kp/planetary-sub', params as unknown as Record<string, unknown>);
  }

  /** Get KP planetary cuspal significator table. */
  async kpPlanetaryCuspalSignificatorTable(params: KundliBirthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/kp/planetary-cuspal-significator-table', params as unknown as Record<string, unknown>);
  }

  /** Get KP cuspal sub. */
  async kpCuspalSub(params: KundliBirthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/kp/cuspal-sub', params as unknown as Record<string, unknown>);
  }

  // ── Kundali Transit ──

  /** Get kundali transit ascendant chart. */
  async transitAscendant(params: KundliTransitParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/kundli-transit/ascendant', params as unknown as Record<string, unknown>);
  }

  /** Get kundali transit moon chart. */
  async transitMoon(params: KundliTransitParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/kundli-transit/moon', params as unknown as Record<string, unknown>);
  }

  // ── Bhinnashtakvarga ──

  /** Get ashtakvarga details. */
  async ashtakvarga(params: KundliBirthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/bhinnashtakvarga/ashtakvarga', params as unknown as Record<string, unknown>);
  }

  /** Get sarvashtakavarga chart. */
  async sarvashtakavarga(chart: string, params: KundliBirthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', `/indian-api/v1/bhinnashtakvarga/sarvashtakavarga/${chart}`, params as unknown as Record<string, unknown>);
  }

  /** Get prasthara chakra. */
  async prastharaChakra(params: KundliBirthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/bhinnashtakvarga/prasthara-chakra', params as unknown as Record<string, unknown>);
  }

  // ── Dasha Analysis ──

  /** Get maha dasha analysis. */
  async mahaDashaAnalysis(params: DashaAnalysisParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/maha-dasha-analysis', params as unknown as Record<string, unknown>);
  }

  /** Get antar dasha analysis. */
  async antarDashaAnalysis(params: DashaAnalysisParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/antar-dasha-analysis', params as unknown as Record<string, unknown>);
  }

  /** Get pratyantar dasha analysis. */
  async pratyantarDashaAnalysis(params: DashaAnalysisParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/pratyantar-dasha-analysis', params as unknown as Record<string, unknown>);
  }

  // ── Core Kundli Endpoints ──

  /** Get basic astro details. */
  async basicAstroDetails(params: KundliBirthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v3/basic-astro-details', params as unknown as Record<string, unknown>);
  }

  /** Get planetary positions. */
  async planetaryPositions(params: KundliBirthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v2/planetary-positions', params as unknown as Record<string, unknown>);
  }

  /** Get horoscope chart by chart ID. */
  async horoscopeChart(params: HoroscopeChartParams): Promise<ApiResponse> {
    const { chart_id, ...rest } = params;
    return this.client.post('astroapi-3.divineapi.com', `/indian-api/v1/horoscope-chart/${chart_id}`, rest as unknown as Record<string, unknown>);
  }

  /** Get Vimshottari dasha. */
  async vimshottariDasha(params: VimshottariDashaParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/vimshottari-dasha', params as unknown as Record<string, unknown>);
  }

  /** Get Kaal Sarpa dosha analysis. */
  async kaalSarpaDosha(params: KundliBirthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/kaal-sarpa-yoga', params as unknown as Record<string, unknown>);
  }

  /** Get Manglik dosha analysis. */
  async manglikDosha(params: KundliBirthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v2/manglik-dosha', params as unknown as Record<string, unknown>);
  }

  /** Get ascendant report. */
  async ascendantReport(params: KundliBirthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v2/ascendant-report', params as unknown as Record<string, unknown>);
  }

  /** Get composite friendship chart. */
  async compositeFriendship(params: KundliBirthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/composite-friendship', params as unknown as Record<string, unknown>);
  }

  /** Get bhava kundli chart. */
  async bhavaKundli(chartId: string, params: KundliBirthParams & { chart_style?: string; chart_color?: string; font_color?: string; font_size?: string; sign_color?: string; sign_font_size?: string }): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', `/indian-api/v1/bhava-kundli/${chartId}`, params as unknown as Record<string, unknown>);
  }

  /** Get Sadhe Sati analysis. */
  async sadheSati(params: KundliBirthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v3/sadhe-sati', params as unknown as Record<string, unknown>);
  }

  /** Get ghata chakra. */
  async ghataChakra(params: KundliBirthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/ghata-chakra', params as unknown as Record<string, unknown>);
  }

  /** Get shadbala (planetary strength). */
  async shadbala(params: KundliBirthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v2/shadbala', params as unknown as Record<string, unknown>);
  }

  /** Get gemstone suggestions. */
  async gemstoneSuggestion(params: KundliBirthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v2/gemstone-suggestion', params as unknown as Record<string, unknown>);
  }

  /** Get Yogini dasha. */
  async yoginiDasha(params: KundliBirthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v2/yogini-dasha', params as unknown as Record<string, unknown>);
  }

  /** Get Kaal Chakra dasha. */
  async kaalChakraDasha(params: KundliBirthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/kaal-chakra-dasha', params as unknown as Record<string, unknown>);
  }

  /** Get yogas present in the birth chart. */
  async yogas(params: KundliBirthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v2/yogas', params as unknown as Record<string, unknown>);
  }

  /** Get Pitra dosha analysis. */
  async pitraDosha(params: KundliBirthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/pitra-dosha', params as unknown as Record<string, unknown>);
  }

  /** Get planet-specific analysis. */
  async planetAnalysis(params: PlanetAnalysisParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v2/planet-analysis', params as unknown as Record<string, unknown>);
  }

  /** Get sudarshana chakra. */
  async sudarshanChakra(params: KundliBirthParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/sudarshana-chakra', params as unknown as Record<string, unknown>);
  }
}
