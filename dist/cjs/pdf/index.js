"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PdfReportApi = void 0;
/**
 * The V1 PDF endpoints take hide_frontpage_details only as 0/1; a boolean would be
 * form-encoded as "true"/"false" and rejected, so map it to 1/0.
 */
function v1Cover(params) {
    const hide = params.hide_frontpage_details;
    return typeof hide === 'boolean' ? { ...params, hide_frontpage_details: hide ? 1 : 0 } : params;
}
/** Reports V2 wants a real boolean (or "true"/"false"); accept 0/1 too. */
function v2Body(params) {
    const hide = params.hide_frontpage_details;
    return hide === 0 || hide === 1 || hide === '0' || hide === '1'
        ? { ...params, hide_frontpage_details: hide === 1 || hide === '1' }
        : { ...params };
}
/**
 * PDF Report API endpoints.
 * Host: pdf.divineapi.com
 */
class PdfReportApi {
    client;
    constructor(client) {
        this.client = client;
    }
    /** Generate Kundali Sampoorna PDF report. */
    async kundaliSampoorna(params) {
        return this.client.post('pdf.divineapi.com', '/indian-api/v2/kundali-sampoorna', v1Cover(params));
    }
    /** Generate Kundali Ananta PDF report. */
    async kundaliAnanta(params) {
        return this.client.post('pdf.divineapi.com', '/indian-api/v2/kundali-ananta', v1Cover(params));
    }
    /** Generate Kundali Prakash PDF report. */
    async kundaliPrakash(params) {
        return this.client.post('pdf.divineapi.com', '/indian-api/v2/kundali-prakash', v1Cover(params));
    }
    /** Generate Match Making PDF report. */
    async matchMaking(params) {
        return this.client.post('pdf.divineapi.com', '/indian-api/v2/match-making', v1Cover(params));
    }
    /** Generate Government Job Report PDF. */
    async governmentJobReport(params) {
        return this.client.post('pdf.divineapi.com', '/indian-api/v2/government-job-report', v1Cover(params));
    }
    /** Generate Foreign Travel & Settlement PDF report. */
    async foreignTravelSettlement(params) {
        return this.client.post('pdf.divineapi.com', '/indian-api/v2/foreign-travel-settlement', v1Cover(params));
    }
    /** Generate Vedic Yearly 5-Year Prediction PDF. */
    async vedicYearly5Year(params) {
        return this.client.post('pdf.divineapi.com', '/indian-api/v2/vedic-yearly-prediction-5-year', v1Cover(params));
    }
    /** Generate Vedic Yearly 10-Year Prediction PDF. */
    async vedicYearly10Year(params) {
        return this.client.post('pdf.divineapi.com', '/indian-api/v2/vedic-yearly-prediction-10-year', v1Cover(params));
    }
    /** Generate Vedic Yearly 15-Year Prediction PDF. */
    async vedicYearly15Year(params) {
        return this.client.post('pdf.divineapi.com', '/indian-api/v2/vedic-yearly-prediction-15-year', v1Cover(params));
    }
    /** Generate Natal Report PDF. */
    async natalReport(params) {
        return this.client.post('pdf.divineapi.com', '/astrology/v2/report', params);
    }
    /** Generate Natal Couple Report PDF. */
    async natalCoupleReport(params) {
        return this.client.post('pdf.divineapi.com', '/astrology/v1/couple', params);
    }
    /** Generate Prediction Report PDF. */
    async predictionReport(params) {
        return this.client.post('pdf.divineapi.com', '/numerology/v1/prediction_reports', params);
    }
    /** Generate Numerology Report PDF. */
    async numerologyReport(params) {
        return this.client.post('pdf.divineapi.com', '/numerology/v2/report', params);
    }
    /**
     * Reports V2: Vedic and Numerology reports (`POST /api/v1/reports/generate`).
     * Sent as a JSON body with the API key in an `x-api-key` header, as this endpoint
     * requires. Returns `reportId`, `htmlUrl`, `pdfUrl`, `statusUrl` and `status`; the
     * report is ready in about 10-30 seconds.
     *
     * Reports V2 only accepts DivineAPI PDF accounts: create the client with that
     * account's apiKey and authToken. A standard API account gets 401 "Invalid Bearer token".
     * `hide_frontpage_details: true` shows only `front_image` on the cover and requires it.
     */
    async reportsGenerate(params) {
        return this.client.postJson('pdf.divineapi.com', '/api/v1/reports/generate', v2Body(params));
    }
    /**
     * Reports V2: Western reports (`POST /api/v1/western/reports/generate`). `report_type`
     * is a Western slug (e.g. 'western-natal-blueprint') or a family code with `tier`.
     * Same credentials, branding fields and cover options as {@link reportsGenerate}.
     */
    async westernReportsGenerate(params) {
        return this.client.postJson('pdf.divineapi.com', '/api/v1/western/reports/generate', v2Body(params));
    }
}
exports.PdfReportApi = PdfReportApi;
//# sourceMappingURL=index.js.map