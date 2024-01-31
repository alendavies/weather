import { ForecastData, WeatherData } from "./types";
import { DateTime } from "luxon";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWeatherData = (infoType: string, searchParams: object) => {
    const url = new URL(BASE_URL + "/" + infoType);
    url.search = new URLSearchParams({
        ...searchParams,
        appid: API_KEY,
    }).toString();

    return fetch(url).then((res) => res.json());
};

const formatCurrentWeather = (data: WeatherData) => {
    const {
        coord: { lat, lon },
        main: { temp, feels_like, temp_min, temp_max, humidity },
        name,
        dt,
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
        country,
        sunrise,
        sunset,
        speed,
        details,
        icon,
    };
};

const formatForecastWeather = (data: ForecastData) => {
    const fiveDays = data.list.slice(1, 6);
    let title;
    let temp;
    let icon;
    fiveDays.map((d) => {
        title = formatToLocalTime(d.dt, data.city.timezone, "ccc");
        temp = d.main.temp;
        icon = d.weather[0].icon;
    });
    return { title, temp, icon };
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

const formatToLocalTime = (
    secs: number,
    zone: number,
    format = "cccc, dd LLL yyyy', | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrlFromCode = (code: string) =>
    `http://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData;

export { formatToLocalTime, iconUrlFromCode };
