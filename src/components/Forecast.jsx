import ForecastDay from "./ForecastDay";
import styles from "./Forecast.module.css";
import { groupForecastByDay } from "../utils/forecastHelpers";

function Forecast({ forecast, unit }) {
  if (!forecast) return null;

  const days = groupForecastByDay(forecast.list, forecast.city.timezone);

  return (
    <div className={styles.forecastSection}>
      <h3 className={styles.heading}>5-Day Forecast</h3>

      <div className={styles.scrollRow}>
        {days.map((day) => (
          <ForecastDay key={day.key} {...day} unit={unit} />
        ))}
      </div>
    </div>
  );
}

export default Forecast;