import styles from "./ForecastDay.module.css";
import { getWeatherIcon } from "../utils/weatherIcons";
import { convertTemp, tempUnitLabel } from "../utils/tempConvert";

function ForecastDay({ weekday, month, day, high, low, icon, unit }) {
  const Icon = getWeatherIcon(icon);
  const unitLabel = tempUnitLabel(unit);

  return (
    <div className={styles.day}>
      <p className={styles.weekday}>{weekday.slice(0, 3)}</p>
      <p className={styles.date}>
        {month.slice(0, 3)} {day}
      </p>

      <Icon className={styles.icon} />

      <div className={styles.temps}>
        <span className={styles.high}>
          {convertTemp(high, unit)}{unitLabel}
        </span>
        <span className={styles.low}>
          {convertTemp(low, unit)}{unitLabel}
        </span>
      </div>
    </div>
  );
}

export default ForecastDay;