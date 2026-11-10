import { BaseClient } from '../client.js';
import type { ApiResponse, LocationSearchParams } from '../types.js';
/**
 * Location API endpoints: place name -> coordinates and timezone.
 * Host: geolocation.divineapi.com
 */
export declare class LocationApi {
    private readonly client;
    constructor(client: BaseClient);
    /**
     * Search for a place by name (at least 3 characters). Returns up to 10 matches,
     * largest population first, under `data.results`: each has `place_id`, `name`,
     * `full_name`, `country`, `admin1`, `latitude`, `longitude`, `timezone` (IANA name),
     * `timezone_value` and `population`, plus the GeoNames `attribution` (CC BY 4.0).
     *
     * `timezone_value` is the zone's UTC offset today. For a birth date in a zone with
     * summer time it can differ by an hour, so compute the offset for the birth date
     * from `timezone` before using it as `tzone`.
     */
    search(params: LocationSearchParams): Promise<ApiResponse>;
}
//# sourceMappingURL=index.d.ts.map