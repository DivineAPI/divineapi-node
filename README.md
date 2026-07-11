# divineapi

Official JavaScript/TypeScript SDK for [Divine API](https://divineapi.com) - Astrology, Horoscope, Numerology, Tarot, and more.

## Requirements

- Node.js 18+ (uses native `fetch`)
- Zero external dependencies

## Installation

```bash
npm install divineapi
```

## Quick Start

```typescript
import { DivineApi } from 'divineapi';

const client = new DivineApi({
  apiKey: 'your-api-key',
  authToken: 'your-bearer-token', // optional, defaults to apiKey
});

// Daily Horoscope
// The reading is chosen with h_day: 'today', 'tomorrow', or 'yesterday'
// (the API does not accept a calendar date here).
const horoscope = await client.horoscope.daily({
  sign: 'aries',
  h_day: 'today',
  tzone: 5.5,
  lan: 'en',
});

console.log(horoscope);
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
client.horoscope.divineAngelReading(params)
client.horoscope.divineMagicReading(params)
client.horoscope.dreamComeTrueReading(params)
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
// Sub Planet
client.indian.kundli.subPlanetPositions(params)
client.indian.kundli.subPlanetChart(params)
// KP
client.indian.kundli.kpPlanetaryPositions(params)
client.indian.kundli.kpCuspal(params)
client.indian.kundli.kpPlanetarySub(params)
client.indian.kundli.kpPlanetaryCuspalSignificatorTable(params)
client.indian.kundli.kpCuspalSub(params)
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
client.western.natal.planetaryPositions(params)
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

// Note: house_system accepts a friendly name ('placidus', 'koch', 'whole-sign', ...)
// or a letter code ('P', 'K', 'W', ...); it is mapped to the letter code the API
// requires before the request is sent. Omit it to use the default (Placidus).
```

### Western Astrology - Synastry

```typescript
client.western.synastry.planetaryPositions(params)
client.western.synastry.houseCusps(params)
client.western.synastry.natalWheelChart(params)
client.western.synastry.aspect(params)
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

All PDF reports REQUIRE the six branding fields on every call:
`company_url`, `logo_url`, `footer_text`, `company_name`, `company_email`,
`company_bio` (only `company_mobile` is optional). `natalReport` also needs
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

## Configuration

```typescript
const client = new DivineApi({
  apiKey: 'your-api-key',       // Required
  authToken: 'your-token',      // Optional (defaults to apiKey)
  timeout: 60000,               // Optional (default: 30000ms)
});
```

## License

MIT
