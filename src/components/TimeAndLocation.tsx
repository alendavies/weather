import { WeatherData } from "../App";
import { formatToLocalTime } from "../services/weatherService";

function TimeAndLocation({ weather }: { weather: WeatherData }) {
    const { dt, timezone, country, name } = weather;

    if (!weather) return <>Loading...</>;

    return (
        <div className="flex flex-col justify-center items-center my-6 space-y-3 text-white">
            <p className="text-lg font-extralight">
                {formatToLocalTime(
                    dt,
                    timezone,
                    {
                        weekday: "long",
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                        hour12: true,
                        timeZone: "UTC",
                    },
                    true
                )}
            </p>
            <p className="text-3xl font-medium">{`${name}, ${country}`}</p>
        </div>
    );
}

export default TimeAndLocation;
