"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkError = exports.ValidationError = exports.RateLimitError = exports.AuthenticationError = exports.DivineApiError = void 0;
/**
 * Base error class for all Divine API errors.
 */
class DivineApiError extends Error {
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
exports.DivineApiError = DivineApiError;
/**
 * Thrown when the API returns a 401 or 403 status.
 */
class AuthenticationError extends DivineApiError {
    constructor(message = 'Authentication failed. Check your API key and auth token.', responseBody) {
        super(message, 401, responseBody);
        this.name = 'AuthenticationError';
    }
}
exports.AuthenticationError = AuthenticationError;
/**
 * Thrown when the API returns a 429 status (rate limited).
 */
class RateLimitError extends DivineApiError {
    retryAfter;
    constructor(message = 'Rate limit exceeded.', retryAfter, responseBody) {
        super(message, 429, responseBody);
        this.name = 'RateLimitError';
        this.retryAfter = retryAfter;
    }
}
exports.RateLimitError = RateLimitError;
/**
 * Thrown when the API returns a 400 status or validation fails.
 */
class ValidationError extends DivineApiError {
    constructor(message, responseBody) {
        super(message, 400, responseBody);
        this.name = 'ValidationError';
    }
}
exports.ValidationError = ValidationError;
/**
 * Thrown when a network error occurs (timeout, DNS, connection refused).
 */
class NetworkError extends DivineApiError {
    constructor(message = 'Network request failed.', originalError) {
        super(message);
        this.name = 'NetworkError';
        if (originalError instanceof Error) {
            this.stack = originalError.stack;
        }
    }
}
exports.NetworkError = NetworkError;
//# sourceMappingURL=errors.js.map