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
            <div className="flex justify-center items-center lg:py-6">
                <p className="text-[#87CEEB] font-medium">{details}</p>
            </div>

            <div className="flex flex-col space-y-2 lg:flex-row justify-between w-full pt-2 lg:py-3 items-center text-white">
                <img src={iconUrlFromCode(icon)} className="w-20" />
                <p className="text-5xl pb-4">{`${temp.toFixed()}°`}</p>

                <div className="text-sm flex flex-col space-y-2 pb-5">
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

            <div className="flex flex-row text-white lg:justify-center md:justify-center sm:justify-center justify-around md:py-4 sm-py-4 text-sm pt-4 lg:py-4 font-light items-center lg:space-x-2 md:space-x-2 sm:space-x-2">
                <div className="lg:flex flex-row md:flex sm:flex items-center justify-center md:space-x-2 lg:space-x-2 sm:space-x-2">
                    <div className="flex space-x-1 items-center ">
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
                    </div>
                    <p className="text-transparent lg:text-current md:text-current sm:text-current">
                        |
                    </p>
                    <div className="flex space-x-1 items-center ">
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
                    </div>
                </div>
                <p className="text-transparent lg:text-current md:text-current sm:text-current">
                    |
                </p>
                <div className="lg:flex flex-row md:flex md:space-x-2 sm:flex lg:space-x-2 sm:space-x-2 items-center justify-center">
                    <div className="flex space-x-1 items-center">
                        <UilArrowUp />
                        <p className="space-x-1">
                            <span>High:</span>
                            <span className="font-medium">{`${temp_max.toFixed()}°`}</span>
                        </p>
                    </div>
                    <p className="text-transparent lg:text-current md:text-current sm:text-current">
                        |
                    </p>
                    <div className="flex space-x-1 items-center ">
                        <UilArrowDown />
                        <p className="space-x-1">
                            <span>Low:</span>
                            <span className="font-medium">{`${temp_min.toFixed()}°`}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TemperatureAndDetails;
