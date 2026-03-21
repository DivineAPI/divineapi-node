import { BaseClient } from '../client.js';
import type { ApiResponse, NewMobileNumberParams, AnalyzeMobileNumberParams, ChaldeanNumerologyParams, CoreNumbersParams } from '../types.js';
/**
 * Numerology API endpoints.
 * Hosts: astroapi-7 and astroapi-4
 */
export declare class NumerologyApi {
    private readonly client;
    constructor(client: BaseClient);
    /** Get new mobile number suggestions. */
    newMobileNumber(params: NewMobileNumberParams): Promise<ApiResponse>;
    /** Analyze an existing mobile number. */
    analyzeMobileNumber(params: AnalyzeMobileNumberParams): Promise<ApiResponse>;
    /** Get Loshu grid. */
    loshuGrid(params: ChaldeanNumerologyParams): Promise<ApiResponse>;
    /** Get zodiac planet number. */
    zodiacPlanetNumber(params: ChaldeanNumerologyParams): Promise<ApiResponse>;
    /** Get luck numerology. */
    luckNumerology(params: ChaldeanNumerologyParams): Promise<ApiResponse>;
    /** Get name number analysis. */
    nameNumber(params: ChaldeanNumerologyParams): Promise<ApiResponse>;
    /** Get birthday number analysis. */
    birthdayNumber(params: ChaldeanNumerologyParams): Promise<ApiResponse>;
    /** Get missing numbers. */
    missingNumbers(params: ChaldeanNumerologyParams): Promise<ApiResponse>;
    /** Get driver and conductor numbers. */
    driverAndConductorNumbers(params: ChaldeanNumerologyParams): Promise<ApiResponse>;
    /** Get two numbers arrows. */
    twoNumbersArrows(params: ChaldeanNumerologyParams): Promise<ApiResponse>;
    /** Get three numbers arrows. */
    threeNumbersArrows(params: ChaldeanNumerologyParams): Promise<ApiResponse>;
    /** Get repeating numbers. */
    repeatingNumbers(params: ChaldeanNumerologyParams): Promise<ApiResponse>;
    /** Get yearly prediction. */
    yearlyPrediction(params: ChaldeanNumerologyParams): Promise<ApiResponse>;
    /** Get gemstone suggestions based on numerology. */
    gemstones(params: ChaldeanNumerologyParams): Promise<ApiResponse>;
    /** Get core numbers (Pythagorean/Chaldean). */
    coreNumbers(params: CoreNumbersParams): Promise<ApiResponse>;
}
//# sourceMappingURL=index.d.ts.map