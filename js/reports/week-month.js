// Enterprise Sales Engagement — weekly/monthly reports
// The month view is fully auto-derived from dayData_YYYY_MM_DD() functions.
// renderMonth() in core.js calls autoMonthSummaryHTML / autoWeekCallsHTML /
// autoWeekPulsesHTML / autoWeekAeHTML / autoProductMatrixHTML directly.
//
// To override a specific month tab with hand-written HTML, define a function here:
//   monthSummaryHTML_2026_05()  — overrides Summary tab for May 2026
//   monthCallsHTML_2026_05()    — overrides Call Log tab for May 2026
//   monthPulsesHTML_2026_05()   — overrides Account Log tab for May 2026
//   monthAeHTML_2026_05()       — overrides AE Breakdown tab for May 2026
//   monthProductsHTML_2026_05() — overrides Products tab for May 2026
// (renderMonth checks for these and uses them if found — future enhancement)
//
// Similarly for weeks:
//   weekSummaryHTML_2026_W19()  — hand-written summary for week 19
//   weekCallsHTML_2026_W19()    — hand-written calls for week 19
//   etc.
