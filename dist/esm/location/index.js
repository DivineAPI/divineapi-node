/**
 * Location API endpoints: place name -> coordinates and timezone.
 * Host: geolocation.divineapi.com
 */
export class LocationApi {
    client;
    constructor(client) {
        this.client = client;
    }
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
    async search(params) {
        return this.client.post('geolocation.divineapi.com', '/location', params);
    }
}
//# sourceMappingURL=index.js.map