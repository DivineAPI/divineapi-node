import { BaseClient } from '../client.js';
import type { ApiResponse, PdfBirthParams, PdfCoupleParams, PdfReportParams, PdfCoupleReportParams, PdfNumerologyPredictionParams, PdfNumerologyReportParams } from '../types.js';
/**
 * PDF Report API endpoints.
 * Host: pdf.divineapi.com
 */
export declare class PdfReportApi {
    private readonly client;
    constructor(client: BaseClient);
    /** Generate Kundali Sampoorna PDF report. */
    kundaliSampoorna(params: PdfBirthParams): Promise<ApiResponse>;
    /** Generate Kundali Ananta PDF report. */
    kundaliAnanta(params: PdfBirthParams): Promise<ApiResponse>;
    /** Generate Kundali Prakash PDF report. */
    kundaliPrakash(params: PdfBirthParams): Promise<ApiResponse>;
    /** Generate Match Making PDF report. */
    matchMaking(params: PdfCoupleParams): Promise<ApiResponse>;
    /** Generate Government Job Report PDF. */
    governmentJobReport(params: PdfBirthParams): Promise<ApiResponse>;
    /** Generate Foreign Travel & Settlement PDF report. */
    foreignTravelSettlement(params: PdfBirthParams): Promise<ApiResponse>;
    /** Generate Vedic Yearly 5-Year Prediction PDF. */
    vedicYearly5Year(params: PdfBirthParams): Promise<ApiResponse>;
    /** Generate Vedic Yearly 10-Year Prediction PDF. */
    vedicYearly10Year(params: PdfBirthParams): Promise<ApiResponse>;
    /** Generate Vedic Yearly 15-Year Prediction PDF. */
    vedicYearly15Year(params: PdfBirthParams): Promise<ApiResponse>;
    /** Generate Natal Report PDF. */
    natalReport(params: PdfReportParams): Promise<ApiResponse>;
    /** Generate Natal Couple Report PDF. */
    natalCoupleReport(params: PdfCoupleReportParams): Promise<ApiResponse>;
    /** Generate Prediction Report PDF. */
    predictionReport(params: PdfNumerologyPredictionParams): Promise<ApiResponse>;
    /** Generate Numerology Report PDF. */
    numerologyReport(params: PdfNumerologyReportParams): Promise<ApiResponse>;
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
    reportsGenerate(params: PdfReportParams): Promise<ApiResponse>;
}
//# sourceMappingURL=index.d.ts.map