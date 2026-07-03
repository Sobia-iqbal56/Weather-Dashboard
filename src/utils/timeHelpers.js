// ==========================
// Shared time helpers
// Used by LiveClock.jsx and WeatherCard.jsx so the
// UTC-offset math only lives in ONE place.
// ==========================

export const WEEKDAYS = [
  "Sunday", "Monday", "Tuesday", "Wednesday",
  "Thursday", "Friday", "Saturday",
];

export const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

// Takes an absolute moment (a real Date object, always UTC-correct
// internally) and a city's UTC offset in seconds (that's exactly
// what OpenWeather's `timezone` field gives us — e.g. Pakistan is
// +18000). Returns a NEW Date shifted to represent that city's
// wall-clock time.
//
// IMPORTANT: baseDate.getTime() is already true UTC — we do NOT
// adjust for the visitor's own device timezone here. That was
// the bug: adding getTimezoneOffset() on top double-shifted it.
export function getCityDate(baseDate, timezoneOffsetSeconds) {
  const cityMs = baseDate.getTime() + timezoneOffsetSeconds * 1000;
  return new Date(cityMs);
}

// Turns 24-hour numbers into a clean "hh:mm(:ss) AM/PM" string.
export function formatClockTime(hours24, minutes, seconds) {
  const period = hours24 >= 12 ? "PM" : "AM";
  const hours12 = hours24 % 12 === 0 ? 12 : hours24 % 12;
  const pad = (num) => String(num).padStart(2, "0");

  return seconds === undefined
    ? `${pad(hours12)}:${pad(minutes)} ${period}`
    : `${pad(hours12)}:${pad(minutes)}:${pad(seconds)} ${period}`;
}