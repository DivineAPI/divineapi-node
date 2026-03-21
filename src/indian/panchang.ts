import { BaseClient } from '../client.js';
import type {
  ApiResponse,
  PanchangBaseParams,
  PanchangWithSanskritParams,
  ChandramasaParams,
  MonthlyPanchangParams,
  PlanetTransitParams,
  NakshatraTransitParams,
  ChandrashtamaParams,
  MonthSuryaNakshatraParams,
} from '../types.js';

/**
 * Indian Panchang API endpoints.
 * Various hosts under /indian-api/
 */
export class PanchangApi {
  private readonly client: BaseClient;

  constructor(client: BaseClient) {
    this.client = client;
  }

  /** Find sun and moon positions. */
  async findSunAndMoon(params: PanchangBaseParams): Promise<ApiResponse> {
    return this.client.post('astroapi-2.divineapi.com', '/indian-api/v2/find-sun-and-moon', params as unknown as Record<string, unknown>);
  }

  /** Find panchang details for a given date and location. */
  async findPanchang(params: PanchangWithSanskritParams): Promise<ApiResponse> {
    return this.client.post('astroapi-1.divineapi.com', '/indian-api/v2/find-panchang', params as unknown as Record<string, unknown>);
  }

  /** Find chandramasa details. */
  async findChandramasa(params: ChandramasaParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v2/chandramasa', params as unknown as Record<string, unknown>);
  }

  /** Find samvat details. */
  async findSamvat(params: PanchangBaseParams): Promise<ApiResponse> {
    return this.client.post('astroapi-2.divineapi.com', '/indian-api/v1/find-samvat', params as unknown as Record<string, unknown>);
  }

  /** Find nakshatra details. */
  async findNakshatra(params: PanchangBaseParams): Promise<ApiResponse> {
    return this.client.post('astroapi-1.divineapi.com', '/indian-api/v2/find-nakshatra', params as unknown as Record<string, unknown>);
  }

  /** Find surya nakshatra details. */
  async findSuryaNakshatra(params: PanchangBaseParams): Promise<ApiResponse> {
    return this.client.post('astroapi-1.divineapi.com', '/indian-api/v2/find-surya-nakshatra', params as unknown as Record<string, unknown>);
  }

  /** Find tithi details. */
  async findTithi(params: PanchangBaseParams): Promise<ApiResponse> {
    return this.client.post('astroapi-1.divineapi.com', '/indian-api/v1/find-tithi', params as unknown as Record<string, unknown>);
  }

  /** Find yoga details. */
  async findYoga(params: PanchangBaseParams): Promise<ApiResponse> {
    return this.client.post('astroapi-1.divineapi.com', '/indian-api/v2/find-yoga', params as unknown as Record<string, unknown>);
  }

  /** Find karana details. */
  async findKarana(params: PanchangBaseParams): Promise<ApiResponse> {
    return this.client.post('astroapi-1.divineapi.com', '/indian-api/v1/find-karana', params as unknown as Record<string, unknown>);
  }

  /** Find ritu and anaya details. */
  async findRituAndAnaya(params: PanchangWithSanskritParams): Promise<ApiResponse> {
    return this.client.post('astroapi-2.divineapi.com', '/indian-api/v1/find-ritu-and-anaya', params as unknown as Record<string, unknown>);
  }

  /** Find auspicious timings. */
  async findAuspiciousTimings(params: PanchangBaseParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/auspicious-timings', params as unknown as Record<string, unknown>);
  }

  /** Find inauspicious timings. */
  async findInauspiciousTimings(params: PanchangBaseParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/inauspicious-timings', params as unknown as Record<string, unknown>);
  }

  /** Find nivas and shool details. */
  async findNivasAndShool(params: PanchangBaseParams): Promise<ApiResponse> {
    return this.client.post('astroapi-2.divineapi.com', '/indian-api/v1/find-nivas-and-shool', params as unknown as Record<string, unknown>);
  }

  /** Find other calendars and epoch. */
  async findOtherCalendars(params: PanchangBaseParams): Promise<ApiResponse> {
    return this.client.post('astroapi-2.divineapi.com', '/indian-api/v2/find-other-calendars-and-epoch', params as unknown as Record<string, unknown>);
  }

  /** Get chandrashtama details. */
  async chandrashtama(params: ChandrashtamaParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v2/chandrashtama', params as unknown as Record<string, unknown>);
  }

  /** Get grah gochar (planet transit) for a specific planet. */
  async grahGochar(planet: string, params: PlanetTransitParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', `/indian-api/v2/grah-gochar/${planet}`, params as unknown as Record<string, unknown>);
  }

  /** Get planet nakshatra transit for a specific planet. */
  async planetNakshatraTransit(planet: string, params: NakshatraTransitParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', `/indian-api/v2/planet-nakshatra-transit/${planet}`, params as unknown as Record<string, unknown>);
  }

  /** Get planet retrograde transit for a specific planet. */
  async planetRetrogradeTransit(planet: string, params: PlanetTransitParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', `/indian-api/v2/planet-retrograde-transit/${planet}`, params as unknown as Record<string, unknown>);
  }

  /** Get planet combustion transit for a specific planet. */
  async planetCombustionTransit(planet: string, params: PlanetTransitParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', `/indian-api/v2/planet-combustion-transit/${planet}`, params as unknown as Record<string, unknown>);
  }

  /** Find chandrabalam and tarabalam. */
  async findChandrabalamAndTarabalam(params: PanchangWithSanskritParams): Promise<ApiResponse> {
    return this.client.post('astroapi-2.divineapi.com', '/indian-api/v2/find-chandrabalam-and-tarabalam', params as unknown as Record<string, unknown>);
  }

  /** Find panchak rahita. */
  async findPanchakRahita(params: PanchangBaseParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v1/panchak-rahita', params as unknown as Record<string, unknown>);
  }

  /** Find uday lagna. */
  async findUdayLagna(params: PanchangWithSanskritParams): Promise<ApiResponse> {
    return this.client.post('astroapi-3.divineapi.com', '/indian-api/v2/uday-lagna', params as unknown as Record<string, unknown>);
  }

  /** Find choghadiya. */
  async findChoghadiya(params: PanchangBaseParams): Promise<ApiResponse> {
    return this.client.post('astroapi-2.divineapi.com', '/indian-api/v1/find-choghadiya', params as unknown as Record<string, unknown>);
  }

  /** Get monthly sunrise-sunset list. */
  async monthSunriseSunset(params: MonthlyPanchangParams): Promise<ApiResponse> {
    return this.client.post('astroapi-8.divineapi.com', '/indian-api/v1/month-sunrise-sunset-list', params as unknown as Record<string, unknown>);
  }

  /** Get monthly nakshatra list. */
  async monthNakshatraList(params: MonthlyPanchangParams): Promise<ApiResponse> {
    return this.client.post('astroapi-8.divineapi.com', '/indian-api/v1/month-nakshatra-list', params as unknown as Record<string, unknown>);
  }

  /** Get monthly tithi list. */
  async monthTithiList(params: MonthlyPanchangParams): Promise<ApiResponse> {
    return this.client.post('astroapi-8.divineapi.com', '/indian-api/v1/month-tithi-list', params as unknown as Record<string, unknown>);
  }

  /** Get monthly surya nakshatra list. */
  async monthSuryaNakshatraList(params: MonthSuryaNakshatraParams): Promise<ApiResponse> {
    return this.client.post('astroapi-8.divineapi.com', '/indian-api/v1/month-surya-nakshatra-list', params as unknown as Record<string, unknown>);
  }
}
