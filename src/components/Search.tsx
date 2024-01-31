import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import { useState } from "react";

function Search({ setQuery }) {
    const [city, setCity] = useState("");

    const handleSearchClick = () => {
        if (city !== "") {
            setQuery({ q: city });
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
                <input
                    value={city}
                    onChange={(e) => setCity(e.currentTarget.value)}
                    type="text"
                    placeholder="Search..."
                    className="text-lg font-light w-full p-2 shadow-xl focus:outline-none rounded-md text-black capitalize placeholder:lowercase"
                />
                <UilSearch
                    size={20}
                    className="cursor-pointer transition ease-out hover:scale-125"
                    onClick={handleSearchClick}
                />
                <UilLocationPoint
                    size={20}
                    className="cursor-pointer transition ease-out hover:scale-125"
                    onClick={handleLocationClick}
                />
            </div>
        </div>
    );
}

export default Search;
