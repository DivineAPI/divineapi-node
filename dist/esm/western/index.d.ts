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
export declare class WesternApi {
    /** Natal chart endpoints */
    readonly natal: NatalApi;
    /** Synastry (relationship) endpoints */
    readonly synastry: SynastryApi;
    /** Transit endpoints */
    readonly transit: TransitApi;
    /** Composite chart endpoints */
    readonly composite: CompositeApi;
    /** Planet returns endpoints */
    readonly planetReturns: PlanetReturnsApi;
    /** Progressions endpoints */
    readonly progressions: ProgressionsApi;
    /** Prenatal endpoints */
    readonly prenatal: PrenatalApi;
    constructor(client: BaseClient);
}
export { NatalApi } from './natal.js';
export { SynastryApi } from './synastry.js';
export { TransitApi } from './transit.js';
export { CompositeApi } from './composite.js';
export { PlanetReturnsApi } from './planetReturns.js';
export { ProgressionsApi } from './progressions.js';
export { PrenatalApi } from './prenatal.js';
//# sourceMappingURL=index.d.ts.map