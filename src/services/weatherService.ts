import { ForecastData, WeatherData } from "./types";
import { DateTime } from "luxon";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWeatherData = (infoType: string, searchParams: object) => {
    const url = new URL(BASE_URL + "/" + infoType);
    url.search = new URLSearchParams({
        ...searchParams,
        appid: API_KEY,
        units: "metric",
    }).toString();

    return fetch(url).then((res) => res.json());
};

const formatCurrentWeather = (data: WeatherData) => {
    const {
        coord: { lat, lon },
        main: { temp, feels_like, temp_min, temp_max, humidity },
        name,
        dt,
        timezone,
        sys: { country, sunrise, sunset },
        weather,
        wind: { speed },
    } = data;
    const { main: details, icon } = weather[0];

    return {
        lat,
        lon,
        temp,
        feels_like,
        temp_min,
        temp_max,
        humidity,
        name,
        dt,
        timezone,
        country,
        sunrise,
        sunset,
        speed,
        details,
        icon,
    };
};
export interface ForecastItem {
    title: string;
    temp: number;
    icon: string;
}

const formatForecastWeather = (data: ForecastData) => {
    const fiveDays: ForecastItem[] = data.list.map((d) => {
        return {
            title: formatToLocalTime(
                d.dt,
                data.city.timezone,
                { weekday: "short" },
                false
            ),
            temp: d.main.temp,
            icon: d.weather[0].icon,
        };
    });
    const forecast = fiveDays
        .filter(
            (obj, index, self) =>
                index === self.findIndex((o) => o.title === obj.title)
        )
        .slice(0, 5);
    return { forecast };
};

const getFormattedWeatherData = async (searchParams: object) => {
    const formattedCurrentWeather = await getWeatherData(
        "weather",
        searchParams
    ).then(formatCurrentWeather);

    const { lat, lon } = formattedCurrentWeather;

    const formattedForecastWeather = await getWeatherData("forecast", {
        lat,
        lon,
        units: "metric",
    }).then(formatForecastWeather);

    return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

const formatToLocalTime = (secs, timezone, options, custom) => {
    const dateFormatter = new Intl.DateTimeFormat("en-US", options);
    const date = new Date(secs * 1000);
    date.setSeconds(date.getSeconds() + timezone);
    const formattedDate = dateFormatter.format(date).toString();

    if (!custom) return formattedDate;

    const [day, month, year, hour] = formattedDate.split(", ");
    const customFormattedDate = `${day}, ${month} ${year} | Local time: ${hour}`;
    return customFormattedDate;
};

const iconUrlFromCode = (code: string) =>
    `http://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData;

export { formatToLocalTime, iconUrlFromCode };
