import { BaseClient } from '../client.js';
import { PanchangApi } from './panchang.js';
import { KundliApi } from './kundli.js';
import { MatchMakingApi } from './matchMaking.js';
import { FestivalApi } from './festival.js';
/**
 * Indian Astrology API - combines Panchang, Kundli, MatchMaking, and Festival sub-modules.
 */
export declare class IndianApi {
    /** Panchang (almanac) endpoints */
    readonly panchang: PanchangApi;
    /** Kundli (birth chart) endpoints */
    readonly kundli: KundliApi;
    /** Match Making (compatibility) endpoints */
    readonly matchMaking: MatchMakingApi;
    /** Festival calendar endpoints */
    readonly festival: FestivalApi;
    constructor(client: BaseClient);
}
export { PanchangApi } from './panchang.js';
export { KundliApi } from './kundli.js';
export { MatchMakingApi } from './matchMaking.js';
export { FestivalApi } from './festival.js';
//# sourceMappingURL=index.d.ts.map