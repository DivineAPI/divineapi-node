import { BaseClient } from '../client.js';
import type { ApiResponse, LifestyleParams } from '../types.js';
/**
 * Lifestyle API endpoints.
 * Host: astroapi-7.divineapi.com
 */
export declare class LifestyleApi {
    private readonly client;
    constructor(client: BaseClient);
    /** Get zodiac gift guru suggestions. */
    zodiacGiftGuru(params: LifestyleParams): Promise<ApiResponse>;
    /** Get beauty by the stars recommendations. */
    beautyByStars(params: LifestyleParams): Promise<ApiResponse>;
    /** Get astro chic picks. */
    astroChicPicks(params: LifestyleParams): Promise<ApiResponse>;
}
//# sourceMappingURL=index.d.ts.map