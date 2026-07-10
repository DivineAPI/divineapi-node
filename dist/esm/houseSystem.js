import { ValidationError } from './errors.js';
/**
 * Request-parameter normalization applied by the transport (BaseClient.post):
 *   1. Western house-system friendly-name -> letter-code mapping.
 *   2. Birth-second defaulting (the API requires `sec`; the MCP always sends 0).
 *
 * Western house-system normalization.
 *
 * The Divine Western API (astroapi-4) accepts ONLY single-letter house-system
 * codes and rejects friendly names such as "placidus" with
 * `success:2 "Please enter valid house system"`. This module maps the friendly
 * names the docs advertise to those letter codes, mirroring the fixed Western
 * MCP server, and passes already-valid letters through unchanged.
 *
 * `applyHouseSystem` is invoked by the transport (BaseClient.post) for every
 * request. Only Western params ever carry a `house_system` field, so it is a
 * no-op for all other endpoints. Omitting `house_system` leaves the request
 * untouched (the API defaults to Placidus / "P").
 */
const HOUSE_SYSTEM_MAP = {
    placidus: 'P',
    koch: 'K',
    porphyry: 'O',
    regiomontanus: 'R',
    campanus: 'C',
    equal: 'E',
    'whole-sign': 'W',
    whole_sign: 'W',
    wholesign: 'W',
    morinus: 'M',
    alcabitius: 'B',
};
const VALID_HOUSE_SYSTEM_LETTERS = new Set(Object.values(HOUSE_SYSTEM_MAP));
const HOUSE_SYSTEM_FRIENDLY_NAMES = 'placidus, koch, porphyry, regiomontanus, campanus, equal, whole-sign, morinus, alcabitius';
/**
 * Map a friendly house-system name to its single-letter API code. Already-valid
 * letters are returned uppercased. Empty input yields the default "P".
 * @throws {ValidationError} for an unrecognized value (fails like the siblings).
 */
export function resolveHouseSystem(value) {
    const hs = (value ?? '').toString().trim();
    if (!hs) {
        return 'P';
    }
    if (VALID_HOUSE_SYSTEM_LETTERS.has(hs.toUpperCase())) {
        return hs.toUpperCase();
    }
    const mapped = HOUSE_SYSTEM_MAP[hs.toLowerCase()];
    if (mapped) {
        return mapped;
    }
    throw new ValidationError(`Invalid house_system '${value}'. Must be one of: ${HOUSE_SYSTEM_FRIENDLY_NAMES} ` +
        `(or a single-letter code: ${[...VALID_HOUSE_SYSTEM_LETTERS].sort().join(', ')}).`);
}
/**
 * Return a copy of params with `house_system` normalized to a letter code.
 * If no (or empty) house_system is present, params is returned unchanged.
 */
export function applyHouseSystem(params) {
    const hs = params?.house_system;
    if (hs === undefined || hs === null || hs === '') {
        return params;
    }
    return { ...params, house_system: resolveHouseSystem(String(hs)) };
}
/**
 * The Divine API requires a second on every time field: birth (`sec`,
 * `p1_sec`/`p2_sec`), transit (`transit_sec`), and progression
 * (`progressed_sec`). A missing second yields `success:2 "Please enter valid
 * second"` / HTTP 422 on astroapi-4/8. The reference MCP servers always send
 * "0". This fills each second with 0 ONLY when its matching minute field is
 * present, so the SDK matches that behavior without touching endpoints that
 * carry no such minute (they are left untouched).
 */
export function applyBirthSecondDefaults(params) {
    let out = params;
    const fill = (secKey, minKey) => {
        const hasMinute = out[minKey] !== undefined && out[minKey] !== null;
        const missingSecond = out[secKey] === undefined || out[secKey] === null;
        if (hasMinute && missingSecond) {
            if (out === params) {
                out = { ...params };
            }
            out[secKey] = 0;
        }
    };
    fill('sec', 'min');
    fill('p1_sec', 'p1_min');
    fill('p2_sec', 'p2_min');
    fill('transit_sec', 'transit_min');
    fill('progressed_sec', 'progressed_min');
    return out;
}
//# sourceMappingURL=houseSystem.js.map