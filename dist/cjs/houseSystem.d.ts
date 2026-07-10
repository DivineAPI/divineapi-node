/**
 * Map a friendly house-system name to its single-letter API code. Already-valid
 * letters are returned uppercased. Empty input yields the default "P".
 * @throws {ValidationError} for an unrecognized value (fails like the siblings).
 */
export declare function resolveHouseSystem(value: string): string;
/**
 * Return a copy of params with `house_system` normalized to a letter code.
 * If no (or empty) house_system is present, params is returned unchanged.
 */
export declare function applyHouseSystem(params: Record<string, unknown>): Record<string, unknown>;
/**
 * The Divine API requires a second on every time field: birth (`sec`,
 * `p1_sec`/`p2_sec`), transit (`transit_sec`), and progression
 * (`progressed_sec`). A missing second yields `success:2 "Please enter valid
 * second"` / HTTP 422 on astroapi-4/8. The reference MCP servers always send
 * "0". This fills each second with 0 ONLY when its matching minute field is
 * present, so the SDK matches that behavior without touching endpoints that
 * carry no such minute (they are left untouched).
 */
export declare function applyBirthSecondDefaults(params: Record<string, unknown>): Record<string, unknown>;
//# sourceMappingURL=houseSystem.d.ts.map