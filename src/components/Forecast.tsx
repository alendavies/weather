import { ForecastItem, iconUrlFromCode } from "../services/weatherService";

function Forecast({ items }: { items: ForecastItem[] }) {
    if (!items) {
        return <>Loading...</>;
    }

    return (
        <div>
            <div className="flex justify-start items-center sm:mt-12 mt-10 text-white">
                <p className="uppercase font-medium">daily forecast</p>
            </div>
            <hr className="my-2" />

            <div className="flex justify-between items-center text-sm text-white">
                {items.map((item) => (
                    <div className="flex flex-col items-center justify-center">
                        <p className="font-light text-sm">{item.title}</p>
                        <img
                            src={iconUrlFromCode(item.icon)}
                            className="w-12 my-1"
                        />
                        <p className="font-medium">{`${item.temp.toFixed()}°`}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Forecast;
