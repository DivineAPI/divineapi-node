/**
 * PDF Report API endpoints.
 * Host: pdf.divineapi.com
 */
export class PdfReportApi {
    client;
    constructor(client) {
        this.client = client;
    }
    /** Generate Kundali Sampoorna PDF report. */
    async kundaliSampoorna(params) {
        return this.client.post('pdf.divineapi.com', '/indian-api/v2/kundali-sampoorna', params);
    }
    /** Generate Kundali Ananta PDF report. */
    async kundaliAnanta(params) {
        return this.client.post('pdf.divineapi.com', '/indian-api/v2/kundali-ananta', params);
    }
    /** Generate Kundali Prakash PDF report. */
    async kundaliPrakash(params) {
        return this.client.post('pdf.divineapi.com', '/indian-api/v2/kundali-prakash', params);
    }
    /** Generate Match Making PDF report. */
    async matchMaking(params) {
        return this.client.post('pdf.divineapi.com', '/indian-api/v2/match-making', params);
    }
    /** Generate Government Job Report PDF. */
    async governmentJobReport(params) {
        return this.client.post('pdf.divineapi.com', '/indian-api/v2/government-job-report', params);
    }
    /** Generate Foreign Travel & Settlement PDF report. */
    async foreignTravelSettlement(params) {
        return this.client.post('pdf.divineapi.com', '/indian-api/v2/foreign-travel-settlement', params);
    }
    /** Generate Vedic Yearly 5-Year Prediction PDF. */
    async vedicYearly5Year(params) {
        return this.client.post('pdf.divineapi.com', '/indian-api/v2/vedic-yearly-prediction-5-year', params);
    }
    /** Generate Vedic Yearly 10-Year Prediction PDF. */
    async vedicYearly10Year(params) {
        return this.client.post('pdf.divineapi.com', '/indian-api/v2/vedic-yearly-prediction-10-year', params);
    }
    /** Generate Vedic Yearly 15-Year Prediction PDF. */
    async vedicYearly15Year(params) {
        return this.client.post('pdf.divineapi.com', '/indian-api/v2/vedic-yearly-prediction-15-year', params);
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
    /** Generate Reports V2 PDF. */
    async reportsGenerate(params) {
        return this.client.post('pdf.divineapi.com', '/api/v1/reports/generate', params);
    }
}
//# sourceMappingURL=index.js.map