// Converts a Celsius number to whichever unit is currently
// selected, and rounds it to a whole number for display.
export function convertTemp(celsius, unit) {
  if (unit === "F") {
    return Math.round((celsius * 9) / 5 + 32);
  }
  return Math.round(celsius);
}

export function tempUnitLabel(unit) {
  return unit === "F" ? "°F" : "°C";
}