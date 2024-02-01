import { UilLocationPoint } from "@iconscout/react-unicons";
import { useState } from "react";
import { GEO_API_URL, geoApiOptions } from "../services/geoApi";
import { AsyncPaginate } from "react-select-async-paginate";
import { Datum } from "../services/geoTypes";

function Search({ setQuery }: { setQuery: (query: object) => void }) {
    const [city, setCity] = useState("");

    const loadOptions = (inputValue: string) => {
        return fetch(
            `${GEO_API_URL}/cities?minPopulation=1000&namePrefix=${inputValue}`,
            geoApiOptions
        )
            .then((response) => response.json())
            .then((response) => {
                return {
                    options: response.data.map((city: Datum) => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name}, ${city.countryCode}`,
                        };
                    }),
                };
            })
            .catch((error) => {
                console.error(error);
                return { options: [] };
            });
    };

    const handleOnChange = (value) => {
        if (value !== null && !Array.isArray(value)) {
            const selectedValue = value as { value: string; label: string };
            setQuery({ q: selectedValue.label });
            setCity(selectedValue.label);
        }
    };

    const handleLocationClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;

                setQuery({ lat, lon });
            });
        }
    };

    return (
        <div className="flex flex-row justify-center items-center my-6">
            <div className="flex flex-row justify-center text-white space-x-4 items-center w-3/4">
                <AsyncPaginate
                    placeholder="Search for city"
                    debounceTimeout={600}
                    value={city}
                    onChange={handleOnChange}
                    loadOptions={loadOptions}
                    className="text-lg font-light w-full p-2 focus:outline-none rounded-md text-black  placeholder:lowercase "
                />
                <UilLocationPoint
                    size={25}
                    className="cursor-pointer transition ease-out hover:scale-125"
                    onClick={handleLocationClick}
                />
            </div>
        </div>
    );
}

export default Search;
