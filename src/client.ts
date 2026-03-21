import { ApiHost, DivineApiConfig } from './types.js';
import {
  DivineApiError,
  AuthenticationError,
  RateLimitError,
  ValidationError,
  NetworkError,
} from './errors.js';

/**
 * Base HTTP client for Divine API.
 * All endpoints use POST with form-data body.
 * Auth is Bearer token in Authorization header + api_key in body.
 */
export class BaseClient {
  private readonly apiKey: string;
  private readonly authToken: string;
  private readonly timeout: number;

  constructor(config: DivineApiConfig) {
    this.apiKey = config.apiKey;
    this.authToken = config.authToken ?? config.apiKey;
    this.timeout = config.timeout ?? 30000;
  }

  /**
   * Make a POST request to a Divine API endpoint.
   * @param host - The API host (e.g., "astroapi-5.divineapi.com")
   * @param path - The endpoint path (e.g., "/api/v5/daily-horoscope")
   * @param params - Request parameters (excluding api_key, which is added automatically)
   */
  async post<T = unknown>(
    host: ApiHost,
    path: string,
    params: Record<string, unknown> = {}
  ): Promise<T> {
    const url = `https://${host}${path}`;

    // Build form data
    const formData = new URLSearchParams();
    formData.append('api_key', this.apiKey);

    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined && value !== null) {
        formData.append(key, String(value));
      }
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.authToken}`,
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json',
        },
        body: formData.toString(),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      // Handle HTTP errors
      if (!response.ok) {
        let body: unknown;
        try {
          body = await response.json();
        } catch {
          body = await response.text().catch(() => null);
        }

        switch (response.status) {
          case 401:
          case 403:
            throw new AuthenticationError(
              `Authentication failed (${response.status}): Check your API key and auth token.`,
              body
            );
          case 429: {
            const retryAfter = response.headers.get('Retry-After');
            throw new RateLimitError(
              'Rate limit exceeded. Please wait before making more requests.',
              retryAfter ? parseInt(retryAfter, 10) : undefined,
              body
            );
          }
          case 400:
            throw new ValidationError(
              `Bad request: ${typeof body === 'object' && body && 'message' in body ? (body as { message: string }).message : 'Invalid parameters'}`,
              body
            );
          default:
            throw new DivineApiError(
              `API request failed with status ${response.status}`,
              response.status,
              body
            );
        }
      }

      const data = await response.json();
      return data as T;
    } catch (error) {
      clearTimeout(timeoutId);

      if (error instanceof DivineApiError) {
        throw error;
      }

      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          throw new NetworkError(`Request timed out after ${this.timeout}ms`, error);
        }
        throw new NetworkError(`Network request failed: ${error.message}`, error);
      }

      throw new NetworkError('An unknown network error occurred');
    }
  }
}
