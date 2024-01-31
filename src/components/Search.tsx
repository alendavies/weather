import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

function Search() {
    return (
        <div className="flex flex-row justify-center items-center my-6">
            <div className="flex flex-row justify-center text-white space-x-4 items-center w-3/4">
                <input
                    type="text"
                    placeholder="Search..."
                    className="text-lg font-light w-full p-2 shadow-xl focus:outline-none rounded-md text-black capitalize placeholder:lowercase"
                />
                <UilSearch
                    size={20}
                    className="cursor-pointer transition ease-out hover:scale-125"
                />
                <UilLocationPoint
                    size={20}
                    className="cursor-pointer transition ease-out hover:scale-125"
                />
            </div>
        </div>
    );
}

export default Search;
