import { useState, useEffect } from "react";

const STORAGE_KEY = "history";

// Takes the current `weather` result as input, and whenever
// it changes (a new successful search), adds that city to
// the saved history automatically.
function useSearchHistory(weather) {
  const [history, setHistory] = useState([]);

  // Runs once on mount — load whatever was saved last time.
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) setHistory(JSON.parse(saved));
  }, []);

  // Runs every time `weather` changes.
  useEffect(() => {
    if (!weather) return;

    setHistory((previous) => {
      const updated = [
        weather.name,
        ...previous.filter((city) => city !== weather.name),
      ];

      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  }, [weather]);

  function clearHistory() {
    setHistory([]);
    localStorage.removeItem(STORAGE_KEY);
  }

  function removeHistoryItem(cityToRemove) {
    setHistory((previous) => {
      const updated = previous.filter((city) => city !== cityToRemove);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  }

  return { history, clearHistory, removeHistoryItem };
}

export default useSearchHistory;