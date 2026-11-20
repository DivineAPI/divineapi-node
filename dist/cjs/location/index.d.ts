import { BaseClient } from '../client.js';
import type { ApiResponse, LocationHealthResponse, LocationSearchParams, TimezoneParams, TimezoneResponse } from '../types.js';
/**
 * Location API endpoints: place search, the timezone offset on a date, and the service health.
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
     * summer time it can differ by an hour, so get the offset for the birth date with
     * {@link timezone} before using it as `tzone`.
     */
    search(params: LocationSearchParams): Promise<ApiResponse>;
    /**
     * The UTC offset that applied at a place on a local date and time, with summer time
     * (DST) and historical changes: `data.timezone_value` is the `tzone` to send for a
     * birth date.
     *
     * The place is one of: `place_id` from {@link search} (the documented input), `lat` +
     * `lon` (the nearest known place), or `timezone` (an IANA name). None or several
     * throws a `ValidationError` (with several, the API would silently use `place_id`).
     * Give `day`, `month`, `year`, `hour` and `min` together, or none of them for the
     * current time.
     *
     * `data.ambiguous` is true when the local time happened twice (clocks went back): the
     * first of the two is used. A local time skipped when the clocks went forward is a
     * `ValidationError` (HTTP 422); an unknown `place_id` is a 404.
     */
    timezone(params: TimezoneParams): Promise<TimezoneResponse>;
    /**
     * Check that the Location API service is up (`GET /health`). Needs no credentials and
     * uses no credits. When healthy, `data` is `{ service: 'location-api', status: 'ok' }`.
     */
    health(): Promise<LocationHealthResponse>;
}
//# sourceMappingURL=index.d.ts.map