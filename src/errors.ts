/**
 * Base error class for all Divine API errors.
 */
export class DivineApiError extends Error {
  public readonly statusCode?: number;
  public readonly responseBody?: unknown;

  constructor(message: string, statusCode?: number, responseBody?: unknown) {
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
  constructor(message: string = 'Authentication failed. Check your API key and auth token.', responseBody?: unknown) {
    super(message, 401, responseBody);
    this.name = 'AuthenticationError';
  }
}

/**
 * Thrown when the API returns a 429 status (rate limited).
 */
export class RateLimitError extends DivineApiError {
  public readonly retryAfter?: number;

  constructor(message: string = 'Rate limit exceeded.', retryAfter?: number, responseBody?: unknown) {
    super(message, 429, responseBody);
    this.name = 'RateLimitError';
    this.retryAfter = retryAfter;
  }
}

/**
 * Thrown when the API returns a 400 or 422 status or validation fails.
 */
export class ValidationError extends DivineApiError {
  constructor(message: string, responseBody?: unknown, statusCode: number = 400) {
    super(message, statusCode, responseBody);
    this.name = 'ValidationError';
  }
}

/**
 * Thrown when a network error occurs (timeout, DNS, connection refused).
 */
export class NetworkError extends DivineApiError {
  constructor(message: string = 'Network request failed.', originalError?: unknown) {
    super(message);
    this.name = 'NetworkError';
    if (originalError instanceof Error) {
      this.stack = originalError.stack;
    }
  }
}
