import { getCityDate, WEEKDAYS, MONTHS } from "./timeHelpers";

// Turns the raw 40-entry, 3-hour-step forecast list into one
// summary object per day: { weekday, high, low, icon }.
export function groupForecastByDay(list, timezoneOffsetSeconds, daysToShow = 5) {
  const groups = {}; // dateKey -> { cityDate, temps: [], icons: {} }

  list.forEach((entry) => {
    // Shift each 3-hour reading into the city's own local time,
    // same helper we already use for LiveClock and sunrise/sunset.
    const cityDate = getCityDate(new Date(entry.dt * 1000), timezoneOffsetSeconds);
    const dateKey = `${cityDate.getUTCFullYear()}-${cityDate.getUTCMonth()}-${cityDate.getUTCDate()}`;

    if (!groups[dateKey]) {
      groups[dateKey] = { cityDate, temps: [], icons: {} };
    }

    groups[dateKey].temps.push(entry.main.temp);

    // Force every icon to its "day" version (01n -> 01d) so the
    // daily summary card doesn't show a random moon icon just
    // because one of its 3-hour readings happened at night.
    const icon = entry.weather[0].icon.replace("n", "d");
    groups[dateKey].icons[icon] = (groups[dateKey].icons[icon] || 0) + 1;
  });

  const dateKeys = Object.keys(groups).slice(0, daysToShow);

  return dateKeys.map((key) => {
    const { cityDate, temps, icons } = groups[key];

    // Pick whichever icon appeared most often that day.
    // Object.entries turns {icon: count} into [[icon, count], ...]
    // so we can sort it by count, highest first.
    const topIcon = Object.entries(icons).sort((a, b) => b[1] - a[1])[0][0];

    return {
      key,
      weekday: WEEKDAYS[cityDate.getUTCDay()],
      month: MONTHS[cityDate.getUTCMonth()],
      day: cityDate.getUTCDate(),
      high: Math.round(Math.max(...temps)),
      low: Math.round(Math.min(...temps)),
      icon: topIcon,
    };
  });
}