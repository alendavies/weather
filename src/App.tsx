import { useState } from "react";
import Forecast from "./components/Forecast";
import Layout from "./components/Layout";
import Search from "./components/Search";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import TimeAndLocation from "./components/TimeAndLocation";
import getFormattedWeatherData from "./services/weatherService";

function App() {
    const [query, setQuery] = useState("");
    const fetchWeather = async () => {
        const data = await getFormattedWeatherData({ q: "london" });
        console.log(data);
    };

    fetchWeather();

    return (
        <div className="bg-gradient-to-br from-[#708090] to-[#001F3F] shadow-xl shadow-gray-400">
            <Layout>
                <Search />
                <TimeAndLocation />
                <TemperatureAndDetails />
                <Forecast title="daily forecast" />
            </Layout>
        </div>
    );
}

export default App;
