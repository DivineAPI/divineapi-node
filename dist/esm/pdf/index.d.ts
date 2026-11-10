import { BaseClient } from '../client.js';
import type { ApiResponse, PdfBirthParams, PdfCoupleParams, PdfReportParams, PdfCoupleReportParams, PdfNumerologyPredictionParams, PdfNumerologyReportParams, ReportsV2Params } from '../types.js';
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
     * Reports V2: Vedic and Numerology reports (`POST /api/v1/reports/generate`).
     * Sent as a JSON body with the API key in an `x-api-key` header, as this endpoint
     * requires. Returns `reportId`, `htmlUrl`, `pdfUrl`, `statusUrl` and `status`; the
     * report is ready in about 10-30 seconds.
     *
     * Reports V2 only accepts DivineAPI PDF accounts: create the client with that
     * account's apiKey and authToken. A standard API account gets 401 "Invalid Bearer token".
     */
    reportsGenerate(params: ReportsV2Params): Promise<ApiResponse>;
    /**
     * Reports V2: Western reports (`POST /api/v1/western/reports/generate`). `report_type`
     * is a Western slug (e.g. 'western-natal-blueprint') or a family code with `tier`.
     * Same credentials and branding fields as {@link reportsGenerate}.
     */
    westernReportsGenerate(params: ReportsV2Params): Promise<ApiResponse>;
}
//# sourceMappingURL=index.d.ts.map