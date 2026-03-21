/**
 * Base error class for all Divine API errors.
 */
export declare class DivineApiError extends Error {
    readonly statusCode?: number;
    readonly responseBody?: unknown;
    constructor(message: string, statusCode?: number, responseBody?: unknown);
}
/**
 * Thrown when the API returns a 401 or 403 status.
 */
export declare class AuthenticationError extends DivineApiError {
    constructor(message?: string, responseBody?: unknown);
}
/**
 * Thrown when the API returns a 429 status (rate limited).
 */
export declare class RateLimitError extends DivineApiError {
    readonly retryAfter?: number;
    constructor(message?: string, retryAfter?: number, responseBody?: unknown);
}
/**
 * Thrown when the API returns a 400 status or validation fails.
 */
export declare class ValidationError extends DivineApiError {
    constructor(message: string, responseBody?: unknown);
}
/**
 * Thrown when a network error occurs (timeout, DNS, connection refused).
 */
export declare class NetworkError extends DivineApiError {
    constructor(message?: string, originalError?: unknown);
}
//# sourceMappingURL=errors.d.ts.map