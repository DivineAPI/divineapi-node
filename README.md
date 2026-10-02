# Astrology API Node.js SDK (DivineAPI)

![Astrology API Node.js SDK (DivineAPI)](https://raw.githubusercontent.com/DivineAPI/DivineAPI/main/assets/divineapi-node.png)

[![npm](https://img.shields.io/npm/v/divineapi)](https://www.npmjs.com/package/divineapi)
[![Docs](https://img.shields.io/badge/Docs-developers.divineapi.com-blue)](https://developers.divineapi.com)
[![Trial](https://img.shields.io/badge/Trial-14--day-green)](https://divineapi.com/start-trial)
[![Status](https://img.shields.io/badge/Status-status.divineapi.com-lightgrey)](https://status.divineapi.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)

Verified live against the DivineAPI API on 2 October 2026.

Official [DivineAPI](https://divineapi.com) JavaScript and TypeScript client for Vedic, Western, horoscope, tarot and numerology astrology endpoints. It has typed parameters and returns the API's JSON.

## Get your API key

1. Start the [14-day free trial](https://divineapi.com/start-trial) (credit card required to activate the trial).
2. Copy your **API key** and **auth token** from the DivineAPI dashboard. The SDK sends the token as an
   `Authorization: Bearer` header and the key as the `api_key` form field on every request.

## Requirements

- Node.js 18+ (uses native `fetch`)
- Zero external dependencies

## Installation

```bash
npm install divineapi
```

## Quick Start

ES module (save as `index.mjs`, run with `node index.mjs`):

```javascript
import { DivineApi } from 'divineapi';

const client = new DivineApi({ apiKey: 'YOUR_API_KEY', authToken: 'YOUR_AUTH_TOKEN' });

// Western natal chart: planets for a birth in New York (tzone -4 = EDT on that date)
const res = await client.western.natal.planetaryPositions({
  full_name: 'Jane Smith', gender: 'female',
  day: 15, month: 6, year: 1995, hour: 8, min: 0, sec: 0,
  place: 'new york', lat: 40.7128, lon: -74.006, tzone: -4,
  house_system: 'placidus',
});

console.log(res.status);                               // 'success'
for (const p of res.data.slice(0, 4)) console.log(p.name, p.sign, p.longitude, 'house', p.house);
// Ascendant Cancer 26:25:42 house 1
// Sun Gemini 23:55:56 house 11
// Moon Capricorn 26:59:57 house 7
// Mars Virgo 10:6:0 house 3
```

CommonJS works too: `const { DivineApi } = require('divineapi');`

Real response (2 Oct 2026, trimmed with `...`). Since 1.10.0 this method uses `astroapi-8`, so the envelope is `status`, not `success`:

```json
{
  "status": "success",
  "code": 200,
  "message": "Request successful",
  "data": [
    {
      "name": "Ascendant",
      "full_degree": "116.4283411",
      "sign": "Cancer",
      "sign_no": 4,
      "longitude": "26:25:42",
      "house": 1,
      "element": "Water",
      "modality": "Cardinal",
      "...": "..."
    },
    {
      "name": "Sun",
      "full_degree": "83.9322195",
      "sign": "Gemini",
      "longitude": "23:55:56",
      "is_retro": "false",
      "house": 11,
      "...": "..."
    },
    {
      "name": "Moon",
      "full_degree": "296.9992259",
      "sign": "Capricorn",
      "longitude": "26:59:57",
      "is_setting": "true",
      "house": 7,
      "...": "..."
    },
    "..."
  ]
}
```

## Configuration

```typescript
const client = new DivineApi({
  apiKey: 'YOUR_API_KEY',       // Required: API key from the dashboard
  authToken: 'YOUR_AUTH_TOKEN', // Use the auth token from the dashboard (if omitted, the SDK sends apiKey as the Bearer token)
  timeout: 60000,               // Optional (default: 30000ms)
});
```

## API Categories

### Horoscope & Tarot

```typescript
client.horoscope.daily(params)    // params.h_day: 'today' | 'tomorrow' | 'yesterday'
client.horoscope.weekly(params)   // params.week:  'current' | 'prev' | 'next'
client.horoscope.monthly(params)  // params.month: 'current' | 'prev' | 'next'
client.horoscope.yearly(params)   // params.year:  'current' | 'prev' | 'next'
client.horoscope.chinese(params)
client.horoscope.numerology(params)
client.horoscope.yesOrNoTarot(params)
client.horoscope.dailyTarot(params)
client.horoscope.fortuneCookie(params)
client.horoscope.coffeeCupReading(params)
client.horoscope.careerDailyReading(params)
client.horoscope.divineAngelReading(params)        // Divine Angel Reading: an angel-card reading with a short message of encouragement
client.horoscope.divineMagicReading(params)
client.horoscope.dreamComeTrueReading(params)      // Dream Come True Reading: 1 to 5 tarot cards about a wish (love, hopes, goals)
client.horoscope.egyptianPrediction(params)
client.horoscope.eroticLoveReading(params)
client.horoscope.exFlameReading(params)
client.horoscope.flirtLoveReading(params)
client.horoscope.heartbreakReading(params)
client.horoscope.inDepthLoveReading(params)
client.horoscope.knowYourFriendReading(params)
client.horoscope.loveCompatibility(params)
client.horoscope.loveTriangleReading(params)
client.horoscope.madeForEachOther(params)
client.horoscope.powerLifeReading(params)
client.horoscope.pastLivesConnectionReading(params)
client.horoscope.pastPresentFutureReading(params)
client.horoscope.whichAnimalAreYou(params)
client.horoscope.wisdomReading(params)
```

### Indian Astrology - Panchang

```typescript
client.indian.panchang.findPanchang(params)
client.indian.panchang.findSunAndMoon(params)
client.indian.panchang.findChandramasa(params)
client.indian.panchang.findSamvat(params)
client.indian.panchang.findNakshatra(params)
client.indian.panchang.findSuryaNakshatra(params)
client.indian.panchang.findTithi(params)
client.indian.panchang.findYoga(params)
client.indian.panchang.findKarana(params)
client.indian.panchang.findRituAndAnaya(params)
client.indian.panchang.findAuspiciousTimings(params)
client.indian.panchang.findInauspiciousTimings(params)
client.indian.panchang.findGowriPanchangam(params)
client.indian.panchang.findNivasAndShool(params)
client.indian.panchang.findOtherCalendars(params)
client.indian.panchang.chandrashtama(params)
client.indian.panchang.grahGochar(planet, params)
client.indian.panchang.planetNakshatraTransit(planet, params)
client.indian.panchang.planetRetrogradeTransit(planet, params)
client.indian.panchang.planetCombustionTransit(planet, params)
client.indian.panchang.findChandrabalamAndTarabalam(params)
client.indian.panchang.findPanchakRahita(params)
client.indian.panchang.findUdayLagna(params)
client.indian.panchang.findChoghadiya(params)
client.indian.panchang.monthSunriseSunset(params)
client.indian.panchang.monthNakshatraList(params)
client.indian.panchang.monthTithiList(params)
client.indian.panchang.monthSuryaNakshatraList(params)
```

### Indian Astrology - Kundli

```typescript
client.indian.kundli.basicAstroDetails(params)
client.indian.kundli.planetaryPositions(params)
client.indian.kundli.horoscopeChart(params)
client.indian.kundli.vimshottariDasha(params)
client.indian.kundli.kaalSarpaDosha(params)
client.indian.kundli.manglikDosha(params)
client.indian.kundli.ascendantReport(params)
client.indian.kundli.compositeFriendship(params)
client.indian.kundli.bhavaKundli(chartId, params)
client.indian.kundli.sadheSati(params)
client.indian.kundli.ghataChakra(params)
client.indian.kundli.shadbala(params)
client.indian.kundli.gemstoneSuggestion(params)
client.indian.kundli.yoginiDasha(params)
client.indian.kundli.kaalChakraDasha(params)
client.indian.kundli.yogas(params)
client.indian.kundli.pitraDosha(params)
client.indian.kundli.planetAnalysis(params)
client.indian.kundli.sudarshanChakra(params)
// Jaimini
client.indian.kundli.jaiminiPlanetaryPositions(params)
client.indian.kundli.jaiminiPadas(params)
client.indian.kundli.jaiminiKarakamshaLagna(params)
client.indian.kundli.jaiminiCharaDasha(params)
client.indian.kundli.jaiminiSwamsaChart(params)   // atmakaraka, swamsha/lagnamsha signs + chart svg
// Sub Planet
client.indian.kundli.subPlanetPositions(params)
client.indian.kundli.subPlanetChart(params)
// Transit
client.indian.kundli.transitAscendant(params)
client.indian.kundli.transitMoon(params)
// Bhinnashtakvarga
client.indian.kundli.ashtakvarga(params)
client.indian.kundli.sarvashtakavarga(chart, params)
client.indian.kundli.prastharaChakra(params)
// Dasha Analysis
client.indian.kundli.mahaDashaAnalysis(params)
client.indian.kundli.antarDashaAnalysis(params)
client.indian.kundli.pratyantarDashaAnalysis(params)
// Lal Kitab
client.indian.kundli.lalKitabPlanetaryPositions(params)
client.indian.kundli.lalKitabHoroscopeChart(params)
client.indian.kundli.lalKitabHousePosition(params)
client.indian.kundli.lalKitabConjunctions(params)
client.indian.kundli.lalKitabTeva(params)
client.indian.kundli.lalKitabPlanetAnalysis(params)   // params + analysis_planet
client.indian.kundli.lalKitabDasha(params)
client.indian.kundli.lalKitabPlanetTypes(params)
client.indian.kundli.lalKitabMahadashaContent({ maha_dasha: 'saturn' })
client.indian.kundli.lalKitabAntardashaContent({ maha_dasha: 'saturn', antar_dasha: 'mercury' })
client.indian.kundli.lalKitabDebts(params)
client.indian.kundli.lalKitabHouseSignification(params)   // params + house_no (1-12)
// Lal Kitab Varshphal (params + varshphal_year)
client.indian.kundli.lalKitabVarshphalVarshaPravesh(params)
client.indian.kundli.lalKitabVarshphalPlanetaryPositions(params)
client.indian.kundli.lalKitabVarshphalMuntha(params)
client.indian.kundli.lalKitabVarshphalChart(params)
// Additional Kundli Analysis
client.indian.kundli.vargottamaPlanets(params)
client.indian.kundli.bhavBala(params)
client.indian.kundli.shaniAshtamShani(params)
client.indian.kundli.bhavaAnalysis(params)
client.indian.kundli.bhavaGroupPredictions(params)
client.indian.kundli.planetRemedies(params)   // params + analysis_planet
```

### Indian Astrology - Match Making

```typescript
client.indian.matchMaking.ashtakootMilan(params)
client.indian.matchMaking.dashakootMilan(params)
client.indian.matchMaking.navPanchamYoga(params)
client.indian.matchMaking.basicAstroDetails(params)
client.indian.matchMaking.planetaryPositions(params)
client.indian.matchMaking.vimshottariDasha(params)
client.indian.matchMaking.manglikDosha(params)
client.indian.matchMaking.horoscopeChart(params)
```

### Indian Astrology - Festivals

```typescript
client.indian.festival.margashirshFestivals(params)
client.indian.festival.ashvinaFestivals(params)
// ... all 12 Hindu calendar month festivals
client.indian.festival.englishCalendarFestivals(params)
client.indian.festival.dateSpecificFestivals(params)
client.indian.festival.findFestival(params)
client.indian.festival.malayalamFestivals(params)
client.indian.festival.tamilFestivals(params)
client.indian.festival.sankrantiFestivals(params)
```

### Western Astrology - Natal

```typescript
client.western.natal.planetaryPositions(params)   // 18 bodies incl. Vertex (astroapi-8 since 1.10.0; see note below)
client.western.natal.houseCusps(params)
client.western.natal.aspectTable(params)
client.western.natal.natalWheelChart(params)
client.western.natal.generalSignReport(planet, params)
client.western.natal.generalHouseReport(planet, params)
client.western.natal.moonPhases(params)
client.western.natal.ascendantReport(params)
client.western.natal.moonPhaseCalendar(params)
client.western.natal.natalInsights(params)
client.western.natal.arabicLots(params)
client.western.natal.asteroidPositions(params)
client.western.natal.fixedStarsList()
client.western.natal.fixedStarsDetails(params)
client.western.natal.planetaryMidpoints(params)
client.western.natal.eclipse(params)
client.western.natal.declinationsParallels(params)
client.western.natal.aspectPatterns(params)
client.western.natal.chartShape(params)
client.western.natal.otherMinorBodies(params)
client.western.natal.dominants(params)   // params.method: 'TRADITIONAL' | 'MODERN' (required)
client.western.natal.personaChart(params)  // params.persona_planet: 'sun' | 'moon' | ... (required)

// personaChart: the chart for the moment, within the first year of life, that the
// transiting Sun reaches the natal degree of persona_planet. output_include controls
// response size and defaults to 'raw_data' (~21 KB); image tokens are ~0.5 MB per SVG
// and output_include: 'all' returns ~4.3 MB.

// Note: house_system accepts a friendly name ('placidus', 'koch', 'whole-sign', ...)
// or a letter code ('P', 'K', 'W', ...); it is mapped to the letter code the API
// requires before the request is sent. Omit it to use the default (Placidus).
```

> **`planetaryPositions` changed in 1.10.0.** It now calls astroapi-8 instead of astroapi-4, so the response includes **Vertex** (18 bodies instead of 17). Two behaviour changes come with it:
> - the envelope is `{ status: 'success', code: 200, message, data }` - there is no longer a `success` key, so code checking `res.success === 1` must switch to `res.status === 'success'` (or just read `res.data`);
> - invalid input now rejects with a `DivineApiError` whose `statusCode` is `422` (`responseBody.error.details` names the bad field) instead of resolving with `{ success: 2 }`.
>
> The `data` array is otherwise unchanged: same fields, same types, identical values for the other 17 bodies.

### Western Astrology - Synastry

```typescript
client.western.synastry.planetaryPositions(params)
client.western.synastry.houseCusps(params)
client.western.synastry.natalWheelChart(params)
client.western.synastry.aspectTable(params)
client.western.synastry.harmoniousAspectReading(params)
client.western.synastry.conflictingAspectReading(params)
client.western.synastry.contrastingAspectReading(params)
client.western.synastry.intenseAspectReading(params)
client.western.synastry.physicalCompatibility(params)
client.western.synastry.emotionalCompatibility(params)
client.western.synastry.sexualCompatibility(params)
client.western.synastry.spiritualCompatibility(params)
client.western.synastry.financialCompatibility(params)
```

### Western Astrology - Transit

```typescript
client.western.transit.basic(params)    // + transit_day/month/year/hour/min/sec
client.western.transit.customTransit(params) // + transit_day/month/year/hour/min/sec, transit_place/lat/lon/tzone
client.western.transit.daily(params)
client.western.transit.weekly(params)   // + transit_planet (required)
client.western.transit.monthly(params)  // + transit_planet, transit_month, transit_year, transit_place/lat/lon/tzone
client.western.transit.full(params)     // + transit_planet, transit_day/month/year, transit_place/lat/lon/tzone
client.western.transit.planetaryIngress(params)
client.western.transit.planetRetrogradeTransit(params)
client.western.transit.planetCombustionTransit(params)
client.western.transit.house(params)    // + transit_day/month/year/hour/min/sec, transit_place/lat/lon/tzone
```

### Western Astrology - Composite Chart

```typescript
client.western.composite.planetaryPositions(params)
client.western.composite.houseCusps(params)
client.western.composite.aspectTable(params)
client.western.composite.natalWheelChart(params)
```

### Western Astrology - Planet Returns

```typescript
client.western.planetReturns.list(params)     // + planet, return_year, return_place/lat/lon/tzone
client.western.planetReturns.details(params)  // + planet, return_key, return_year, return_place/lat/lon/tzone
```

### Western Astrology - Progressions

```typescript
client.western.progressions.progressedLunarEvents(params)   // + prenatal_type (required)
client.western.progressions.planetaryArcDirections(params)  // + planet, progressed_day/month/year
client.western.progressions.secondaryProgressions(params)   // + progressed_day/month/year/hour/min/sec, progressed_type
```

### Western Astrology - Prenatal

```typescript
client.western.prenatal.list(params)     // + prenatal_type (required)
client.western.prenatal.details(params)  // + prenatal_key (required)
```

### PDF Reports

The API requires seven branding fields on every PDF request: `company_name`,
`company_url`, `company_email`, `company_mobile`, `company_bio`, `logo_url` and
`footer_text` (a few legacy reports also need `company_landline`). Pass
`company_mobile` even though the SDK types mark it optional. `natalReport` also needs
`report_code` + `theme`; the numerology PDFs (`predictionReport`,
`numerologyReport`) need `full_name` + `gender` + `report_code`.

```typescript
client.pdf.kundaliSampoorna(params)
client.pdf.kundaliAnanta(params)
client.pdf.kundaliPrakash(params)
client.pdf.matchMaking(params)
client.pdf.governmentJobReport(params)
client.pdf.foreignTravelSettlement(params)
client.pdf.vedicYearly5Year(params)
client.pdf.vedicYearly10Year(params)
client.pdf.vedicYearly15Year(params)
client.pdf.natalReport(params)
client.pdf.natalCoupleReport(params)
client.pdf.predictionReport(params)
client.pdf.numerologyReport(params)
```

### Numerology

```typescript
client.numerology.newMobileNumber(params)
client.numerology.analyzeMobileNumber(params)
client.numerology.loshuGrid(params)
client.numerology.zodiacPlanetNumber(params)
client.numerology.luckNumerology(params)
client.numerology.nameNumber(params)
client.numerology.nameCorrection(params)
client.numerology.birthdayNumber(params)
client.numerology.missingNumbers(params)
client.numerology.driverAndConductorNumbers(params)
client.numerology.twoNumbersArrows(params)
client.numerology.threeNumbersArrows(params)
client.numerology.repeatingNumbers(params)
client.numerology.yearlyPrediction(params)
client.numerology.gemstones(params)
client.numerology.coreNumbers(params)   // params.method: 'general' | 'chaldean' | 'pythagorean' (required)
```

### Lifestyle

```typescript
client.lifestyle.zodiacGiftGuru(params)
client.lifestyle.beautyByStars(params)
client.lifestyle.astroChicPicks(params)
```

### Calculators

```typescript
client.calculators.flames(params)   // params: { your_name, partner_name }
client.calculators.love(params)
```

## Error Handling

```typescript
import { DivineApi, AuthenticationError, RateLimitError, ValidationError, NetworkError } from 'divineapi';

try {
  const result = await client.horoscope.daily({ ... });
} catch (error) {
  if (error instanceof AuthenticationError) {
    console.error('Invalid API key or token');
  } else if (error instanceof RateLimitError) {
    console.error(`Rate limited. Retry after ${error.retryAfter} seconds`);
  } else if (error instanceof ValidationError) {
    console.error('Invalid parameters:', error.message);
  } else if (error instanceof NetworkError) {
    console.error('Network error:', error.message);
  }
}
```

## Related repos

| Type | Repo |
|---|---|
| SDK | [divineapi-python](https://github.com/DivineAPI/divineapi-python): Python SDK (`pip install divineapi`) |
| SDK | [divineapi-php](https://github.com/DivineAPI/divineapi-php): PHP SDK (`composer require divineapi/divineapi`) |
| REST API | [kundli-api](https://github.com/DivineAPI/kundli-api): Kundli / Kundali API (Vedic birth chart, dashas, doshas) |
| REST API | [kundli-matching-api](https://github.com/DivineAPI/kundli-matching-api): Kundli matching API (Ashtakoot, Dashakoot) |
| REST API | [lal-kitab-api](https://github.com/DivineAPI/lal-kitab-api): Lal Kitab API |
| REST API | [panchang-api](https://github.com/DivineAPI/panchang-api): Panchang API |
| REST API | [hindu-festival-api](https://github.com/DivineAPI/hindu-festival-api): Hindu Festival API |
| REST API | [birth-chart-api](https://github.com/DivineAPI/birth-chart-api): Birth Chart API |
| REST API | [horoscope-api](https://github.com/DivineAPI/horoscope-api): Horoscope API |
| REST API | [tarot-api](https://github.com/DivineAPI/tarot-api): Tarot API |
| REST API | [numerology-api](https://github.com/DivineAPI/numerology-api): Numerology API |
| REST API | [astrology-api](https://github.com/DivineAPI/astrology-api): Astrology API (overview of all domains) |
| MCP | [mcp-indian-astrology](https://github.com/DivineAPI/mcp-indian-astrology): Vedic astrology MCP server |
| MCP | [mcp-western-astrology](https://github.com/DivineAPI/mcp-western-astrology): Western astrology MCP server |
| MCP | [mcp-horoscope-numerology](https://github.com/DivineAPI/mcp-horoscope-numerology): Horoscope, tarot and numerology MCP server |

## Support

- API reference: [developers.divineapi.com](https://developers.divineapi.com)
- Postman collection: [documenter.getpostman.com/view/26759678/2sBYAysU8Y](https://documenter.getpostman.com/view/26759678/2sBYAysU8Y)
- API status: [status.divineapi.com](https://status.divineapi.com)
- Help centre: [support.divineapi.com](https://support.divineapi.com)
- Plans and prices: [divineapi.com/pricing](https://divineapi.com/pricing)
- SDK bugs: open an issue in this repo

## License

MIT
