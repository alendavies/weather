function Forecast({ title }: { title: string }) {
    return (
        <div>
            <div className="flex justify-start items-center mt-6 text-white">
                <p className="uppercase font-medium">{title}</p>
            </div>
            <hr className="my-2" />

            <div className="flex justify-between items-center text-sm text-white">
                <div className="flex flex-col items-center justify-center">
                    <p className="font-light text-sm">04:30 PM</p>
                    <img src="/weather.svg" className="w-12 my-1" />
                    <p className="font-medium">22°</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="font-light text-sm">04:30 PM</p>
                    <img src="/weather.svg" className="w-12 my-1" />
                    <p className="font-medium">22°</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="font-light text-sm">04:30 PM</p>
                    <img src="/weather.svg" className="w-12 my-1" />
                    <p className="font-medium">22°</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="font-light text-sm">04:30 PM</p>
                    <img src="/weather.svg" className="w-12 my-1" />
                    <p className="font-medium">22°</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="font-light text-sm">04:30 PM</p>
                    <img src="/weather.svg" className="w-12 my-1" />
                    <p className="font-medium">22°</p>
                </div>
            </div>
        </div>
    );
}

export default Forecast;
