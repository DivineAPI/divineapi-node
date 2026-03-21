import { BaseClient } from '../client.js';
import type {
  ApiResponse,
  NewMobileNumberParams,
  AnalyzeMobileNumberParams,
  ChaldeanNumerologyParams,
  CoreNumbersParams,
} from '../types.js';

/**
 * Numerology API endpoints.
 * Hosts: astroapi-7 and astroapi-4
 */
export class NumerologyApi {
  private readonly client: BaseClient;

  constructor(client: BaseClient) {
    this.client = client;
  }

  /** Get new mobile number suggestions. */
  async newMobileNumber(params: NewMobileNumberParams): Promise<ApiResponse> {
    return this.client.post('astroapi-7.divineapi.com', '/numerology/v1/new-mobile-number', params);
  }

  /** Analyze an existing mobile number. */
  async analyzeMobileNumber(params: AnalyzeMobileNumberParams): Promise<ApiResponse> {
    return this.client.post('astroapi-7.divineapi.com', '/numerology/v1/analyze-mobile-number', params);
  }

  /** Get Loshu grid. */
  async loshuGrid(params: ChaldeanNumerologyParams): Promise<ApiResponse> {
    return this.client.post('astroapi-7.divineapi.com', '/numerology/v1/loshu-grid', params);
  }

  /** Get zodiac planet number. */
  async zodiacPlanetNumber(params: ChaldeanNumerologyParams): Promise<ApiResponse> {
    return this.client.post('astroapi-7.divineapi.com', '/numerology/v1/zodiac-planet-number', params);
  }

  /** Get luck numerology. */
  async luckNumerology(params: ChaldeanNumerologyParams): Promise<ApiResponse> {
    return this.client.post('astroapi-7.divineapi.com', '/numerology/v1/luck-numerology', params);
  }

  /** Get name number analysis. */
  async nameNumber(params: ChaldeanNumerologyParams): Promise<ApiResponse> {
    return this.client.post('astroapi-7.divineapi.com', '/numerology/v1/name-number', params);
  }

  /** Get birthday number analysis. */
  async birthdayNumber(params: ChaldeanNumerologyParams): Promise<ApiResponse> {
    return this.client.post('astroapi-7.divineapi.com', '/numerology/v1/birthday-number', params);
  }

  /** Get missing numbers. */
  async missingNumbers(params: ChaldeanNumerologyParams): Promise<ApiResponse> {
    return this.client.post('astroapi-7.divineapi.com', '/numerology/v1/missing-numbers', params);
  }

  /** Get driver and conductor numbers. */
  async driverAndConductorNumbers(params: ChaldeanNumerologyParams): Promise<ApiResponse> {
    return this.client.post('astroapi-7.divineapi.com', '/numerology/v1/driver-and-conductor-numbers', params);
  }

  /** Get two numbers arrows. */
  async twoNumbersArrows(params: ChaldeanNumerologyParams): Promise<ApiResponse> {
    return this.client.post('astroapi-7.divineapi.com', '/numerology/v1/two-numbers-arrows', params);
  }

  /** Get three numbers arrows. */
  async threeNumbersArrows(params: ChaldeanNumerologyParams): Promise<ApiResponse> {
    return this.client.post('astroapi-7.divineapi.com', '/numerology/v1/three-numbers-arrows', params);
  }

  /** Get repeating numbers. */
  async repeatingNumbers(params: ChaldeanNumerologyParams): Promise<ApiResponse> {
    return this.client.post('astroapi-7.divineapi.com', '/numerology/v1/repeating-numbers', params);
  }

  /** Get yearly prediction. */
  async yearlyPrediction(params: ChaldeanNumerologyParams): Promise<ApiResponse> {
    return this.client.post('astroapi-7.divineapi.com', '/numerology/v1/yearly-prediction', params);
  }

  /** Get gemstone suggestions based on numerology. */
  async gemstones(params: ChaldeanNumerologyParams): Promise<ApiResponse> {
    return this.client.post('astroapi-7.divineapi.com', '/numerology/v1/gemstones', params);
  }

  /** Get core numbers (Pythagorean/Chaldean). */
  async coreNumbers(params: CoreNumbersParams): Promise<ApiResponse> {
    return this.client.post('astroapi-4.divineapi.com', '/numerology/v1/core-numbers', params);
  }
}
