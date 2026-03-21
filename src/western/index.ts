import { BaseClient } from '../client.js';
import { NatalApi } from './natal.js';
import { SynastryApi } from './synastry.js';
import { TransitApi } from './transit.js';
import { CompositeApi } from './composite.js';
import { PlanetReturnsApi } from './planetReturns.js';
import { ProgressionsApi } from './progressions.js';
import { PrenatalApi } from './prenatal.js';

/**
 * Western Astrology API - combines Natal, Synastry, Transit, Composite, Planet Returns, Progressions, and Prenatal sub-modules.
 */
export class WesternApi {
  /** Natal chart endpoints */
  public readonly natal: NatalApi;
  /** Synastry (relationship) endpoints */
  public readonly synastry: SynastryApi;
  /** Transit endpoints */
  public readonly transit: TransitApi;
  /** Composite chart endpoints */
  public readonly composite: CompositeApi;
  /** Planet returns endpoints */
  public readonly planetReturns: PlanetReturnsApi;
  /** Progressions endpoints */
  public readonly progressions: ProgressionsApi;
  /** Prenatal endpoints */
  public readonly prenatal: PrenatalApi;

  constructor(client: BaseClient) {
    this.natal = new NatalApi(client);
    this.synastry = new SynastryApi(client);
    this.transit = new TransitApi(client);
    this.composite = new CompositeApi(client);
    this.planetReturns = new PlanetReturnsApi(client);
    this.progressions = new ProgressionsApi(client);
    this.prenatal = new PrenatalApi(client);
  }
}

export { NatalApi } from './natal.js';
export { SynastryApi } from './synastry.js';
export { TransitApi } from './transit.js';
export { CompositeApi } from './composite.js';
export { PlanetReturnsApi } from './planetReturns.js';
export { ProgressionsApi } from './progressions.js';
export { PrenatalApi } from './prenatal.js';
