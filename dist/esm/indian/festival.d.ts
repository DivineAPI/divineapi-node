import { BaseClient } from '../client.js';
import type { ApiResponse, FestivalMonthParams, EnglishCalendarFestivalParams, DateSpecificFestivalParams, FindFestivalParams } from '../types.js';
/**
 * Indian Festival API endpoints.
 * Host: astroapi-3.divineapi.com
 */
export declare class FestivalApi {
    private readonly client;
    constructor(client: BaseClient);
    /** Get Margashirsh month festivals. */
    margashirshFestivals(params: FestivalMonthParams): Promise<ApiResponse>;
    /** Get Ashvina month festivals. */
    ashvinaFestivals(params: FestivalMonthParams): Promise<ApiResponse>;
    /** Get Magha month festivals. */
    maghaFestivals(params: FestivalMonthParams): Promise<ApiResponse>;
    /** Get Phalguna month festivals. */
    phalgunaFestivals(params: FestivalMonthParams): Promise<ApiResponse>;
    /** Get Chaitra month festivals. */
    chaitraFestivals(params: FestivalMonthParams): Promise<ApiResponse>;
    /** Get Vaishakha month festivals. */
    vaishakhaFestivals(params: FestivalMonthParams): Promise<ApiResponse>;
    /** Get Jyeshtha month festivals. */
    jyeshthaFestivals(params: FestivalMonthParams): Promise<ApiResponse>;
    /** Get Ashada month festivals. */
    ashadaFestivals(params: FestivalMonthParams): Promise<ApiResponse>;
    /** Get Shraavana month festivals. */
    shraavanaFestivals(params: FestivalMonthParams): Promise<ApiResponse>;
    /** Get Bhadrapada month festivals. */
    bhadrapadaFestivals(params: FestivalMonthParams): Promise<ApiResponse>;
    /** Get Kartika month festivals. */
    kartikaFestivals(params: FestivalMonthParams): Promise<ApiResponse>;
    /** Get Pausha month festivals. */
    paushaFestivals(params: FestivalMonthParams): Promise<ApiResponse>;
    /** Get English calendar festivals for a given month and year. */
    englishCalendarFestivals(params: EnglishCalendarFestivalParams): Promise<ApiResponse>;
    /** Get festivals for a specific date. */
    dateSpecificFestivals(params: DateSpecificFestivalParams): Promise<ApiResponse>;
    /** Find a specific festival. */
    findFestival(params: FindFestivalParams): Promise<ApiResponse>;
}
//# sourceMappingURL=festival.d.ts.map