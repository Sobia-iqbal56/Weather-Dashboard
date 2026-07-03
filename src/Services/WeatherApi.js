const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export async function fetchWeatherByCity(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  return await response.json();
}

export async function fetchWeatherByLocation(latitude, longitude) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  return await response.json();
}

// NEW — 5-day / 3-hour-step forecast endpoint.
// Note: this endpoint returns cod as a STRING ("200"),
// unlike the current-weather endpoint above, which
// returns it as a NUMBER (200). Easy trap — watch for it.
export async function fetchForecastByCity(city) {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  return await response.json();
}

export async function fetchForecastByLocation(latitude, longitude) {
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  return await response.json();
}