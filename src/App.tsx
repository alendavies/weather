import { useEffect, useState } from "react";
import Forecast from "./components/Forecast";
import Layout from "./components/Layout";
import Search from "./components/Search";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import TimeAndLocation from "./components/TimeAndLocation";
import getFormattedWeatherData, {
    ForecastItem,
} from "./services/weatherService";

export interface WeatherData {
    forecast: {
        title: string;
        icon: string;
        temp: number;
    }[];
    lat: number;
    lon: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
    name: string;
    dt: number;
    timezone: number;
    country: string;
    sunrise: number;
    sunset: number;
    speed: number;
    details: string;
}

function App() {
    const [query, setQuery] = useState({ q: "berlin" });
    const [weather, setWeather] = useState<WeatherData>();

    useEffect(() => {
        const fetchWeather = async () => {
            await getFormattedWeatherData({ ...query }).then((data) => {
                setWeather(data);
            });
        };

        fetchWeather();
    }, [query]);

    return (
        <div className="bg-gradient-to-br from-[#708090] to-[#001F3F] shadow-xl shadow-gray-400">
            <Layout>
                <Search setQuery={setQuery} />

                {weather && (
                    <div>
                        <TimeAndLocation weather={weather} />
                        <TemperatureAndDetails weather={weather} />
                        <Forecast items={weather.forecast} />
                    </div>
                )}
            </Layout>
        </div>
    );
}

export default App;
