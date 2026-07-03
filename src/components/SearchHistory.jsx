import styles from "./SearchHistory.module.css";
import { FaXmark } from "react-icons/fa6";

function SearchHistory({ history, onSelect, onRemove, clearHistory }) {
  if (history.length === 0) {
    return null;
  }

  return (
    <div className={styles.historyContainer}>
      <div className={styles.header}>
        <h3>Recent Searches</h3>

        <button className={styles.clearButton} onClick={clearHistory}>
          🗑 Clear All
        </button>
      </div>

      <div className={styles.chips}>
        {history.map((city) => (
          // A <div>, not a <button>, wraps each chip — this is
          // what lets us have TWO clickable buttons side by side
          // (select + remove) without nesting buttons inside
          // buttons, which broke things before.
          <div key={city} className={styles.chip}>
            <button
              className={styles.chipLabel}
              onClick={() => onSelect(city)}
            >
              {city}
            </button>

            <button
              className={styles.chipRemove}
              onClick={() => onRemove(city)}
              aria-label={`Remove ${city} from history`}
            >
              <FaXmark />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchHistory;