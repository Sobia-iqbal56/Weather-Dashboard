import styles from "./SearchBox.module.css";
import { FaSearch } from "react-icons/fa";
import { FaLocationDot, FaXmark } from "react-icons/fa6";

function SearchBox({ city, setCity, handleSearch, handleLocation, loading }) {
  function handleSubmit(e) {
    e.preventDefault();

    if (!city.trim()) return;

    handleSearch();
  }

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      {/* Visually hidden label — screen readers read this even
          though it's invisible on screen. Placeholders alone
          aren't enough for accessibility. */}
      <label htmlFor="city-input" className={styles.srOnly}>
        Search for a city
      </label>

      <div className={styles.inputWrapper}>
        <span className={styles.icon}>
          <FaSearch />
        </span>

        <input
          id="city-input"
          type="text"
          placeholder="Search for a city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className={styles.input}
          autoComplete="off"
        />

        {/* Only show the clear button once there's something to clear */}
        {city && (
          <button
            type="button"
            className={styles.clearButton}
            onClick={() => setCity("")}
            aria-label="Clear search"
          >
            <FaXmark />
          </button>
        )}
      </div>

      {/* Announces status changes to screen readers automatically.
          Visually hidden, but "live" — no extra JS needed. */}
      <p className={styles.srOnly} aria-live="polite">
        {loading ? "Searching for weather data" : ""}
      </p>

      <div className={styles.buttonGroup}>
        <button
          type="submit"
          className={styles.searchButton}
          disabled={loading}
        >
          <FaSearch className={loading ? styles.spinIcon : ""} />
          <span>{loading ? "Searching..." : "Search"}</span>
        </button>

        <button
          type="button"
          className={styles.locationButton}
          onClick={handleLocation}
          disabled={loading}
        >
          <FaLocationDot className={loading ? styles.pulseIcon : ""} />
          <span>{loading ? "Locating..." : "Location"}</span>
        </button>
      </div>
    </form>
  );
}

export default SearchBox;