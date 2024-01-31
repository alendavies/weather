import { WeatherData } from "../App";
import { formatToLocalTime, iconUrlFromCode } from "../services/weatherService";
import {
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
} from "@iconscout/react-unicons";

function TemperatureAndDetails({ weather }: { weather: WeatherData }) {
    const {
        details,
        icon,
        temp,
        temp_min,
        temp_max,
        sunrise,
        sunset,
        speed,
        humidity,
        feels_like,
        timezone,
    } = weather;

    if (!weather) return <>Loading...</>;
    return (
        <div>
            <div className="flex justify-center items-center py-6">
                <p className="text-[#87CEEB] font-medium">{details}</p>
            </div>

            <div className="flex flex-row justify-between py-3 items-center text-white">
                <img src={iconUrlFromCode(icon)} className="w-20" />
                <p className="text-5xl">{`${temp.toFixed()}°`}</p>
                <div className="text-sm flex flex-col space-y-2">
                    <div className="flex font-light text-sm space-x-1 flex-row">
                        <UilTemperature size={18} />
                        <p>Real feel:</p>
                        <span className="font-medium">
                            {`${feels_like.toFixed()}°`}
                        </span>
                    </div>
                    <div className="font-light text-sm space-x-1 flex flex-row">
                        <UilTear size={18} />
                        <p>Humidity:</p>
                        <span className="font-medium">
                            {`${humidity.toFixed()}%`}
                        </span>
                    </div>
                    <div className="font-light text-sm space-x-1 flex flex-row">
                        <UilWind size={18} />
                        <p>Wind:</p>
                        <span className="font-medium">
                            {`${speed.toFixed()} km/h`}
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex flex-row space-x-2 text-white justify-center items-center text-sm py-3 font-light">
                <UilSun />
                <p className="space-x-1">
                    <span>Rise:</span>
                    <span className="font-medium">
                        {formatToLocalTime(
                            sunrise,
                            timezone,
                            {
                                hour: "numeric",
                                minute: "numeric",
                                hour12: true,
                                timeZone: "UTC",
                            },
                            false
                        )}
                    </span>
                </p>
                <p>|</p>
                <UilSunset />
                <p className="space-x-1">
                    <span>Set:</span>
                    <span className="font-medium">
                        {formatToLocalTime(
                            sunset,
                            timezone,
                            {
                                hour: "numeric",
                                minute: "numeric",
                                hour12: true,
                                timeZone: "UTC",
                            },
                            false
                        )}
                    </span>
                </p>
                <p>|</p>
                <UilArrowUp />
                <p className="space-x-1">
                    <span>High:</span>
                    <span className="font-medium">{`${temp_max.toFixed()}°`}</span>
                </p>
                <p>|</p>
                <UilArrowDown />
                <p className="space-x-1">
                    <span>Low:</span>
                    <span className="font-medium">{`${temp_min.toFixed()}°`}</span>
                </p>
            </div>
        </div>
    );
}

export default TemperatureAndDetails;
