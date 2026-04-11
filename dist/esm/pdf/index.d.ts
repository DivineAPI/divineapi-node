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
    /** Generate Reports V2 PDF. */
    reportsGenerate(params: PdfReportParams): Promise<ApiResponse>;
}
//# sourceMappingURL=index.d.ts.map