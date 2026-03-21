import { BaseClient } from '../client.js';
import { PanchangApi } from './panchang.js';
import { KundliApi } from './kundli.js';
import { MatchMakingApi } from './matchMaking.js';
import { FestivalApi } from './festival.js';

/**
 * Indian Astrology API - combines Panchang, Kundli, MatchMaking, and Festival sub-modules.
 */
export class IndianApi {
  /** Panchang (almanac) endpoints */
  public readonly panchang: PanchangApi;
  /** Kundli (birth chart) endpoints */
  public readonly kundli: KundliApi;
  /** Match Making (compatibility) endpoints */
  public readonly matchMaking: MatchMakingApi;
  /** Festival calendar endpoints */
  public readonly festival: FestivalApi;

  constructor(client: BaseClient) {
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
