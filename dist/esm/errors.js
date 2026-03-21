/**
 * Base error class for all Divine API errors.
 */
export class DivineApiError extends Error {
    statusCode;
    responseBody;
    constructor(message, statusCode, responseBody) {
        super(message);
        this.name = 'DivineApiError';
        this.statusCode = statusCode;
        this.responseBody = responseBody;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
/**
 * Thrown when the API returns a 401 or 403 status.
 */
export class AuthenticationError extends DivineApiError {
    constructor(message = 'Authentication failed. Check your API key and auth token.', responseBody) {
        super(message, 401, responseBody);
        this.name = 'AuthenticationError';
    }
}
/**
 * Thrown when the API returns a 429 status (rate limited).
 */
export class RateLimitError extends DivineApiError {
    retryAfter;
    constructor(message = 'Rate limit exceeded.', retryAfter, responseBody) {
        super(message, 429, responseBody);
        this.name = 'RateLimitError';
        this.retryAfter = retryAfter;
    }
}
/**
 * Thrown when the API returns a 400 status or validation fails.
 */
export class ValidationError extends DivineApiError {
    constructor(message, responseBody) {
        super(message, 400, responseBody);
        this.name = 'ValidationError';
    }
}
/**
 * Thrown when a network error occurs (timeout, DNS, connection refused).
 */
export class NetworkError extends DivineApiError {
    constructor(message = 'Network request failed.', originalError) {
        super(message);
        this.name = 'NetworkError';
        if (originalError instanceof Error) {
            this.stack = originalError.stack;
        }
    }
}
//# sourceMappingURL=errors.js.map