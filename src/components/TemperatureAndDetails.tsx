import {
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
} from "@iconscout/react-unicons";

function TemperatureAndDetails() {
    return (
        <div>
            <div className="flex justify-center items-center py-6">
                <p className="text-[#87CEEB] font-medium">Clear</p>
            </div>

            <div className="flex flex-row justify-between py-3 items-center text-white">
                <img src="/weather.svg" className="w-20" />
                <p className="text-5xl">34°</p>
                <div className="text-sm flex flex-col space-y-2">
                    <div className="flex font-light text-sm space-x-1 flex-row">
                        <UilTemperature size={18} />
                        <p>
                            Real feel: <span className="font-medium">32°</span>
                        </p>
                    </div>
                    <div className="font-light text-sm space-x-1 flex flex-row">
                        <UilTear size={18} />
                        <p>
                            Humidity: <span className="font-medium">40%</span>
                        </p>
                    </div>
                    <div className="font-light text-sm space-x-1 flex flex-row">
                        <UilWind size={18} />
                        <p>
                            Wind: <span className="font-medium">10 km/h</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-row space-x-2 text-white justify-center items-center text-sm py-3 font-light">
                <UilSun />
                <p>
                    Rise: <span className="font-medium">06:45 AM</span>
                </p>
                <p>|</p>
                <UilSunset />
                <p>
                    Set: <span className="font-medium">07:35 PM</span>
                </p>
                <p>|</p>
                <UilArrowUp />
                <p>
                    High: <span className="font-medium">45°</span>
                </p>
                <p>|</p>
                <UilArrowDown />
                <p>
                    Low: <span className="font-medium">40°</span>
                </p>
            </div>
        </div>
    );
}

export default TemperatureAndDetails;
