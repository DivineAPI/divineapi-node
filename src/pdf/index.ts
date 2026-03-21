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
    return this.client.post('pdf.divineapi.com', '/indian-api/v2/kundali-sampoorna', params as unknown as Record<string, unknown>);
  }

  /** Generate Kundali Ananta PDF report. */
  async kundaliAnanta(params: PdfBirthParams): Promise<ApiResponse> {
    return this.client.post('pdf.divineapi.com', '/indian-api/v2/kundali-ananta', params as unknown as Record<string, unknown>);
  }

  /** Generate Kundali Prakash PDF report. */
  async kundaliPrakash(params: PdfBirthParams): Promise<ApiResponse> {
    return this.client.post('pdf.divineapi.com', '/indian-api/v2/kundali-prakash', params as unknown as Record<string, unknown>);
  }

  /** Generate Match Making PDF report. */
  async matchMaking(params: PdfCoupleParams): Promise<ApiResponse> {
    return this.client.post('pdf.divineapi.com', '/indian-api/v2/match-making', params as unknown as Record<string, unknown>);
  }

  /** Generate Government Job Report PDF. */
  async governmentJobReport(params: PdfBirthParams): Promise<ApiResponse> {
    return this.client.post('pdf.divineapi.com', '/indian-api/v2/government-job-report', params as unknown as Record<string, unknown>);
  }

  /** Generate Foreign Travel & Settlement PDF report. */
  async foreignTravelSettlement(params: PdfBirthParams): Promise<ApiResponse> {
    return this.client.post('pdf.divineapi.com', '/indian-api/v2/foreign-travel-settlement', params as unknown as Record<string, unknown>);
  }

  /** Generate Vedic Yearly 5-Year Prediction PDF. */
  async vedicYearly5Year(params: PdfBirthParams): Promise<ApiResponse> {
    return this.client.post('pdf.divineapi.com', '/indian-api/v2/vedic-yearly-prediction-5-year', params as unknown as Record<string, unknown>);
  }

  /** Generate Vedic Yearly 10-Year Prediction PDF. */
  async vedicYearly10Year(params: PdfBirthParams): Promise<ApiResponse> {
    return this.client.post('pdf.divineapi.com', '/indian-api/v2/vedic-yearly-prediction-10-year', params as unknown as Record<string, unknown>);
  }

  /** Generate Vedic Yearly 15-Year Prediction PDF. */
  async vedicYearly15Year(params: PdfBirthParams): Promise<ApiResponse> {
    return this.client.post('pdf.divineapi.com', '/indian-api/v2/vedic-yearly-prediction-15-year', params as unknown as Record<string, unknown>);
  }

  /** Generate Natal Report PDF. */
  async natalReport(params: PdfReportParams): Promise<ApiResponse> {
    return this.client.post('pdf.divineapi.com', '/astrology/v2/report', params as unknown as Record<string, unknown>);
  }

  /** Generate Natal Couple Report PDF. */
  async natalCoupleReport(params: PdfCoupleReportParams): Promise<ApiResponse> {
    return this.client.post('pdf.divineapi.com', '/astrology/v1/couple', params as unknown as Record<string, unknown>);
  }

  /** Generate Prediction Report PDF. */
  async predictionReport(params: PdfNumerologyPredictionParams): Promise<ApiResponse> {
    return this.client.post('pdf.divineapi.com', '/numerology/v1/prediction_reports', params as unknown as Record<string, unknown>);
  }

  /** Generate Numerology Report PDF. */
  async numerologyReport(params: PdfNumerologyReportParams): Promise<ApiResponse> {
    return this.client.post('pdf.divineapi.com', '/numerology/v2/report', params as unknown as Record<string, unknown>);
  }
}
