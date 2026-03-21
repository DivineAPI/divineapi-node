import { PanchangApi } from './panchang.js';
import { KundliApi } from './kundli.js';
import { MatchMakingApi } from './matchMaking.js';
import { FestivalApi } from './festival.js';
/**
 * Indian Astrology API - combines Panchang, Kundli, MatchMaking, and Festival sub-modules.
 */
export class IndianApi {
    /** Panchang (almanac) endpoints */
    panchang;
    /** Kundli (birth chart) endpoints */
    kundli;
    /** Match Making (compatibility) endpoints */
    matchMaking;
    /** Festival calendar endpoints */
    festival;
    constructor(client) {
        this.panchang = new PanchangApi(client);
        this.kundli = new KundliApi(client);
        this.matchMaking = new MatchMakingApi(client);
        this.festival = new FestivalApi(client);
    }
}
export { PanchangApi } from './panchang.js';
export { KundliApi } from './kundli.js';
export { MatchMakingApi } from './matchMaking.js';
export { FestivalApi } from './festival.js';
//# sourceMappingURL=index.js.map