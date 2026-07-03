import { useState } from "react";

import {
  fetchWeatherByCity,
  fetchWeatherByLocation,
  fetchForecastByCity,
  fetchForecastByLocation,
} from "../services/weatherApi";

function useWeather() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Forecast is a "bonus" feature — if it fails, we log a
  // warning and move on. We never let a forecast failure
  // block or hide the main weather result.
  async function loadForecastByCity(city) {
    try {
      const data = await fetchForecastByCity(city);
      setForecast(data.cod === "200" ? data : null);
    } catch (err) {
      console.warn("Forecast fetch failed:", err);
      setForecast(null);
    }
  }

  async function loadForecastByLocation(lat, lon) {
    try {
      const data = await fetchForecastByLocation(lat, lon);
      setForecast(data.cod === "200" ? data : null);
    } catch (err) {
      console.warn("Forecast fetch failed:", err);
      setForecast(null);
    }
  }

  async function handleSearch(city) {
    if (city.trim() === "") {
      setError("Please enter a city.");
      setWeather(null);
      setForecast(null);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const data = await fetchWeatherByCity(city);

      if (data.cod !== 200) {
        setError(data.message);
        setWeather(null);
        setForecast(null);
        return;
      }

      setWeather(data);
      await loadForecastByCity(city);
    } catch (err) {
      setError("Something went wrong.");
      setWeather(null);
      setForecast(null);
    } finally {
      setLoading(false);
    }
  }

  function handleLocation() {
    navigator.geolocation.getCurrentPosition(getLocation, locationError);
  }

  async function getLocation(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    setLoading(true);
    setError("");

    try {
      const data = await fetchWeatherByLocation(latitude, longitude);

      if (data.cod !== 200) {
        setError(data.message);
        setWeather(null);
        setForecast(null);
        return;
      }

      setWeather(data);
      await loadForecastByLocation(latitude, longitude);
    } catch (err) {
      setError("Something went wrong.");
      setWeather(null);
      setForecast(null);
    } finally {
      setLoading(false);
    }
  }

  function locationError() {
    setError("Unable to get your location.");
  }

  return {
    weather,
    forecast,
    loading,
    error,
    handleSearch,
    handleLocation,
  };
}

export default useWeather;