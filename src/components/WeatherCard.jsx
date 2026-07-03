import DetailCard from "./DetailCard";
import styles from "./WeatherCard.module.css";
import { getCityDate, formatClockTime } from "../utils/timeHelpers";
import { convertTemp, tempUnitLabel } from "../utils/tempConvert";
import { getWeatherIcon } from "../utils/weatherIcons";

function formatCityTime(unixSeconds, timezoneOffsetSeconds) {
  const cityDate = getCityDate(new Date(unixSeconds * 1000), timezoneOffsetSeconds);
  return formatClockTime(cityDate.getUTCHours(), cityDate.getUTCMinutes());
}

function WeatherCard({ weather, unit, onToggleUnit }) {
  const WeatherIcon = getWeatherIcon(weather.weather[0].icon);

  const sunrise = formatCityTime(weather.sys.sunrise, weather.timezone);
  const sunset = formatCityTime(weather.sys.sunset, weather.timezone);

  const temp = convertTemp(weather.main.temp, unit);
  const feelsLike = convertTemp(weather.main.feels_like, unit);
  const unitLabel = tempUnitLabel(unit);

  const details = [
    { title: "🤒 Feels Like", value: `${feelsLike}${unitLabel}` },
    { title: "💧 Humidity", value: weather.main.humidity + "%" },
    { title: "💨 Wind", value: weather.wind.speed + " m/s" },
    { title: "🌅 Sunrise", value: sunrise },
    { title: "🌇 Sunset", value: sunset },
    { title: "📊 Pressure", value: weather.main.pressure + " hPa" },
    { title: "👀 Visibility", value: (weather.visibility / 1000).toFixed(1) + " km" },
  ];

  return (
    <div className={styles.card}>
      <WeatherIcon className={styles.icon} />

      <div className={styles.tempRow}>
        <h1 className={styles.temperature}>
          {temp}{unitLabel}
        </h1>

        <button className={styles.unitToggle} onClick={onToggleUnit}>
          Switch to °{unit === "C" ? "F" : "C"}
        </button>
      </div>

      <h2 className={styles.city}>{weather.name}</h2>

      <p className={styles.description}>
        {weather.weather[0].description}
      </p>

      <div className={styles.detailsGrid}>
        {details.map((detail, index) => (
          <DetailCard
            key={detail.title}
            title={detail.title}
            value={detail.value}
            delay={index * 0.08}
          />
        ))}
      </div>
    </div>
  );
}

export default WeatherCard;