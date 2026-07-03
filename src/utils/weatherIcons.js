import {
  WiDaySunny, WiNightClear,
  WiDayCloudy, WiNightAltCloudy,
  WiCloud, WiCloudy,
  WiDayShowers, WiNightShowers,
  WiDayRain, WiNightRain,
  WiDayThunderstorm, WiNightThunderstorm,
  WiDaySnow, WiNightSnow,
  WiFog,
} from "react-icons/wi";

export const ICON_MAP = {
  "01d": WiDaySunny,        "01n": WiNightClear,
  "02d": WiDayCloudy,       "02n": WiNightAltCloudy,
  "03d": WiCloud,           "03n": WiCloud,
  "04d": WiCloudy,          "04n": WiCloudy,
  "09d": WiDayShowers,      "09n": WiNightShowers,
  "10d": WiDayRain,         "10n": WiNightRain,
  "11d": WiDayThunderstorm, "11n": WiNightThunderstorm,
  "13d": WiDaySnow,         "13n": WiNightSnow,
  "50d": WiFog,             "50n": WiFog,
};

export function getWeatherIcon(iconCode) {
  return ICON_MAP[iconCode] || WiCloud;
}