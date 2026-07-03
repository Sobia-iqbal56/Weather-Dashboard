import { useState, useEffect } from "react";
import useWeather from "./hooks/useWeather";
import useTheme from "./hooks/useTheme";
import useSearchHistory from "./hooks/useSearchHistory";
import { getBackgroundKey } from "./utils/weatherBackground";

import SearchBox from "./components/SearchBox";
import SearchHistory from "./components/SearchHistory";
import WeatherCard from "./components/WeatherCard";
import Forecast from "./components/Forecast";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorCard from "./components/ErrorCard";
import LiveClock from "./components/LiveClock";

import styles from "./App.module.css";

function App() {
  const [city, setCity] = useState("");

  const { weather, forecast, loading, error, handleSearch, handleLocation } =
    useWeather();

  const { theme, toggleTheme } = useTheme();
  const { history, clearHistory, removeHistoryItem } = useSearchHistory(weather);

  const [unit, setUnit] = useState(() => localStorage.getItem("unit") || "C");

  useEffect(() => {
    localStorage.setItem("unit", unit);
  }, [unit]);

  function toggleUnit() {
    setUnit((prev) => (prev === "C" ? "F" : "C"));
  }

  function handleHistoryClick(selectedCity) {
    setCity(selectedCity);
    handleSearch(selectedCity);
  }

  // One line now, instead of a 20-line switch statement
  // sitting in the middle of the component.
  const backgroundClass = styles[getBackgroundKey(weather)];

  return (
    <div className={`${styles.app} ${styles[theme]} ${backgroundClass}`}>
      <div className={styles.container}>
        <div className={styles.themeToggle}>
          <button className={styles.themeButton} onClick={toggleTheme}>
            {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        <h1 className={styles.title}>Weather App</h1>
        <p className={styles.subtitle}>Find weather anywhere 🌍</p>

        <LiveClock weather={weather} />

        <SearchBox
          city={city}
          setCity={setCity}
          handleSearch={() => handleSearch(city)}
          handleLocation={handleLocation}
          loading={loading}
        />

        <div className={styles.historySection}>
          <SearchHistory
            history={history}
            onSelect={handleHistoryClick}
            onRemove={removeHistoryItem}
            clearHistory={clearHistory}
          />
        </div>

        {error && (
          <ErrorCard message={error} onRetry={() => handleSearch(city)} />
        )}

        {loading ? (
          <LoadingSpinner />
        ) : (
          weather && (
            <>
              <WeatherCard
                weather={weather}
                unit={unit}
                onToggleUnit={toggleUnit}
              />
              <Forecast forecast={forecast} unit={unit} />
            </>
          )
        )}
      </div>
    </div>
  );
}

export default App;