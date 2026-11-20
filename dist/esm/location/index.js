import { ValidationError } from '../errors.js';
/**
 * Location API endpoints: place search, the timezone offset on a date, and the service health.
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
     * summer time it can differ by an hour, so get the offset for the birth date with
     * {@link timezone} before using it as `tzone`.
     */
    async search(params) {
        return this.client.post('geolocation.divineapi.com', '/location', params);
    }
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
    async timezone(params) {
        const given = [
            ['place_id', params.place_id !== undefined && params.place_id !== null],
            ['lat/lon', (params.lat !== undefined && params.lat !== null) || (params.lon !== undefined && params.lon !== null)],
            ['timezone', typeof params.timezone === 'string' && params.timezone.trim() !== ''],
        ].filter(([, present]) => present).map(([name]) => name);
        if (given.length !== 1) {
            throw new ValidationError('Give exactly one of place_id, lat and lon, or timezone' +
                (given.length ? ` (got ${given.join(' and ')})` : ''));
        }
        const body = { ...params };
        if (typeof params.timezone === 'string') {
            body.timezone = params.timezone.trim();
        }
        return this.client.post('geolocation.divineapi.com', '/timezone', body);
    }
    /**
     * Check that the Location API service is up (`GET /health`). Needs no credentials and
     * uses no credits. When healthy, `data` is `{ service: 'location-api', status: 'ok' }`.
     */
    async health() {
        return this.client.get('geolocation.divineapi.com', '/health');
    }
}
//# sourceMappingURL=index.js.map