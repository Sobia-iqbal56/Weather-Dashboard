import { useState, useEffect } from "react";
import styles from "./LiveClock.module.css";
import { getCityDate, formatClockTime, WEEKDAYS, MONTHS } from "../utils/timeHelpers";

function LiveClock({ weather }) {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  let hours, minutes, seconds, weekday, day, month, label;

  if (weather && typeof weather.timezone === "number") {
    // now.getTime() is already true UTC — getCityDate just
    // shifts it by the city's own offset. No device-timezone
    // math needed at all.
    const cityDate = getCityDate(now, weather.timezone);

    hours = cityDate.getUTCHours();
    minutes = cityDate.getUTCMinutes();
    seconds = cityDate.getUTCSeconds();
    weekday = WEEKDAYS[cityDate.getUTCDay()];
    day = cityDate.getUTCDate();
    month = MONTHS[cityDate.getUTCMonth()];
    label = `Local Time in ${weather.name}`;
  } else {
    // No search yet — the device's own local time is already
    // correct as-is, no shifting required.
    hours = now.getHours();
    minutes = now.getMinutes();
    seconds = now.getSeconds();
    weekday = WEEKDAYS[now.getDay()];
    day = now.getDate();
    month = MONTHS[now.getMonth()];
    label = "Your Local Time";
  }

  return (
    <div className={styles.clockBox}>
      <p className={styles.label}>{label}</p>
      <h2 className={styles.time}>{formatClockTime(hours, minutes, seconds)}</h2>
      <p className={styles.date}>
        {weekday}, {month} {day}
      </p>
    </div>
  );
}

export default LiveClock;