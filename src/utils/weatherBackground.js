// Pure function: weather data in, a background "key" out.
// No React, no CSS — App.jsx decides what to DO with the key.
export function getBackgroundKey(weather) {
  if (!weather) return "default";

  const weatherType = weather.weather[0].main;

  switch (weatherType) {
    case "Clear":
      return "clear";
    case "Clouds":
      return "clouds";
    case "Rain":
    case "Drizzle":
      return "rain";
    case "Thunderstorm":
      return "thunderstorm";
    case "Snow":
      return "snow";
    case "Mist":
    case "Fog":
    case "Haze":
      return "mist";
    default:
      return "default";
  }
}