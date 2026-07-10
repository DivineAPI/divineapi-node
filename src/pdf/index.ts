import { BaseClient } from '../client.js';
import type {
  ApiResponse,
  PdfBirthParams,
  PdfCoupleParams,
  PdfReportParams,
  PdfCoupleReportParams,
  PdfNumerologyPredictionParams,
  PdfNumerologyReportParams,
} from '../types.js';

/**
 * PDF Report API endpoints.
 * Host: pdf.divineapi.com
 */
export class PdfReportApi {
  private readonly client: BaseClient;

  constructor(client: BaseClient) {
    this.client = client;
  }

  /** Generate Kundali Sampoorna PDF report. */
  async kundaliSampoorna(params: PdfBirthParams): Promise<ApiResponse> {
    return this.client.post('pdf.divineapi.com', '/indian-api/v2/kundali-sampoorna', params);
  }

  /** Generate Kundali Ananta PDF report. */
  async kundaliAnanta(params: PdfBirthParams): Promise<ApiResponse> {
    return this.client.post('pdf.divineapi.com', '/indian-api/v2/kundali-ananta', params);
  }

  /** Generate Kundali Prakash PDF report. */
  async kundaliPrakash(params: PdfBirthParams): Promise<ApiResponse> {
    return this.client.post('pdf.divineapi.com', '/indian-api/v2/kundali-prakash', params);
  }

  /** Generate Match Making PDF report. */
  async matchMaking(params: PdfCoupleParams): Promise<ApiResponse> {
    return this.client.post('pdf.divineapi.com', '/indian-api/v2/match-making', params);
  }

  /** Generate Government Job Report PDF. */
  async governmentJobReport(params: PdfBirthParams): Promise<ApiResponse> {
    return this.client.post('pdf.divineapi.com', '/indian-api/v2/government-job-report', params);
  }

  /** Generate Foreign Travel & Settlement PDF report. */
  async foreignTravelSettlement(params: PdfBirthParams): Promise<ApiResponse> {
    return this.client.post('pdf.divineapi.com', '/indian-api/v2/foreign-travel-settlement', params);
  }

  /** Generate Vedic Yearly 5-Year Prediction PDF. */
  async vedicYearly5Year(params: PdfBirthParams): Promise<ApiResponse> {
    return this.client.post('pdf.divineapi.com', '/indian-api/v2/vedic-yearly-prediction-5-year', params);
  }

  /** Generate Vedic Yearly 10-Year Prediction PDF. */
  async vedicYearly10Year(params: PdfBirthParams): Promise<ApiResponse> {
    return this.client.post('pdf.divineapi.com', '/indian-api/v2/vedic-yearly-prediction-10-year', params);
  }

  /** Generate Vedic Yearly 15-Year Prediction PDF. */
  async vedicYearly15Year(params: PdfBirthParams): Promise<ApiResponse> {
    return this.client.post('pdf.divineapi.com', '/indian-api/v2/vedic-yearly-prediction-15-year', params);
  }

  /** Generate Natal Report PDF. */
  async natalReport(params: PdfReportParams): Promise<ApiResponse> {
    return this.client.post('pdf.divineapi.com', '/astrology/v2/report', params);
  }

  /** Generate Natal Couple Report PDF. */
  async natalCoupleReport(params: PdfCoupleReportParams): Promise<ApiResponse> {
    return this.client.post('pdf.divineapi.com', '/astrology/v1/couple', params);
  }

  /** Generate Prediction Report PDF. */
  async predictionReport(params: PdfNumerologyPredictionParams): Promise<ApiResponse> {
    return this.client.post('pdf.divineapi.com', '/numerology/v1/prediction_reports', params);
  }

  /** Generate Numerology Report PDF. */
  async numerologyReport(params: PdfNumerologyReportParams): Promise<ApiResponse> {
    return this.client.post('pdf.divineapi.com', '/numerology/v2/report', params);
  }

  /**
   * Generate a Reports V2 PDF (`/api/v1/reports/generate`).
   *
   * TODO / KNOWN LIMITATION (unverified): this endpoint does NOT follow the
   * form-data + api_key convention the rest of the SDK uses. It requires:
   *   1. a SEPARATE reports_v2 credential pair (not the standard PDF key), and
   *   2. a raw JSON request body keyed by `report_type` (not urlencoded
   *      `report_code`).
   * The current call posts urlencoded form-data with the standard PDF key, so
   * it returns 401 with those credentials. It is left in place for API
   * completeness but is not yet supported; do not rely on it until the SDK
   * gains JSON-body + reports_v2-credential support. Not covered by any MCP
   * tool. See SDK-PARITY-AUDIT-JS.md.
   */
  async reportsGenerate(params: PdfReportParams): Promise<ApiResponse> {
    return this.client.post('pdf.divineapi.com', '/api/v1/reports/generate', params);
  }
}
