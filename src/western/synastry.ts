import { BaseClient } from '../client.js';
import type {
  ApiResponse,
  SynastryParams,
  SynastryChartParams,
} from '../types.js';

/**
 * Western Synastry (relationship) API endpoints.
 * Host: astroapi-4.divineapi.com
 */
export class SynastryApi {
  private readonly client: BaseClient;

  constructor(client: BaseClient) {
    this.client = client;
  }

  /** Get synastry planetary positions. */
  async planetaryPositions(params: SynastryParams): Promise<ApiResponse> {
    return this.client.post('astroapi-4.divineapi.com', '/western-api/v1/synastry/planetary-positions', params);
  }

  /** Get synastry house cusps. */
  async houseCusps(params: SynastryParams): Promise<ApiResponse> {
    return this.client.post('astroapi-4.divineapi.com', '/western-api/v1/synastry/house-cusps', params);
  }

  /** Get synastry natal wheel chart. */
  async natalWheelChart(params: SynastryChartParams): Promise<ApiResponse> {
    return this.client.post('astroapi-8.divineapi.com', '/western-api/v2/synastry/natal-wheel-chart', params);
  }

  /** Get synastry aspect table. */
  async aspectTable(params: SynastryParams): Promise<ApiResponse> {
    return this.client.post('astroapi-8.divineapi.com', '/western-api/v2/synastry/aspect-table', params);
  }

  /** Get harmonious aspect reading. */
  async harmoniousAspectReading(params: SynastryParams): Promise<ApiResponse> {
    return this.client.post('astroapi-4.divineapi.com', '/western-api/v1/synastry/harmonious-aspect-reading', params);
  }

  /** Get conflicting aspect reading. */
  async conflictingAspectReading(params: SynastryParams): Promise<ApiResponse> {
    return this.client.post('astroapi-4.divineapi.com', '/western-api/v1/synastry/conflicting-aspect-reading', params);
  }

  /** Get contrasting aspect reading. */
  async contrastingAspectReading(params: SynastryParams): Promise<ApiResponse> {
    return this.client.post('astroapi-4.divineapi.com', '/western-api/v1/synastry/contrasting-aspect-reading', params);
  }

  /** Get intense aspect reading. */
  async intenseAspectReading(params: SynastryParams): Promise<ApiResponse> {
    return this.client.post('astroapi-4.divineapi.com', '/western-api/v1/synastry/intense-aspect-reading', params);
  }

  /** Get physical compatibility. */
  async physicalCompatibility(params: SynastryParams): Promise<ApiResponse> {
    return this.client.post('astroapi-4.divineapi.com', '/western-api/v2/synastry/physical-compatibility', params);
  }

  /** Get emotional compatibility. */
  async emotionalCompatibility(params: SynastryParams): Promise<ApiResponse> {
    return this.client.post('astroapi-4.divineapi.com', '/western-api/v2/synastry/emotional-compatibility', params);
  }

  /** Get sexual compatibility. */
  async sexualCompatibility(params: SynastryParams): Promise<ApiResponse> {
    return this.client.post('astroapi-4.divineapi.com', '/western-api/v2/synastry/sexual-compatibility', params);
  }

  /** Get spiritual compatibility. */
  async spiritualCompatibility(params: SynastryParams): Promise<ApiResponse> {
    return this.client.post('astroapi-4.divineapi.com', '/western-api/v2/synastry/spiritual-compatibility', params);
  }

  /** Get financial compatibility. */
  async financialCompatibility(params: SynastryParams): Promise<ApiResponse> {
    return this.client.post('astroapi-4.divineapi.com', '/western-api/v2/synastry/financial-compatibility', params);
  }
}
