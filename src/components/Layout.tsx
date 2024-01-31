import { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
    return (
        <div>
            <div className="flex justify-start items-center flex-row px-10 py-4">
                <img src="/weather.svg" width={50} height={50} />
                <p className="text-white font-semibold text-2xl">Clime</p>
            </div>
            <div className="mx-auto h-fit py-5 px-32 max-w-screen-md border-2 rounded-md">
                {children}
            </div>
        </div>
    );
}

export default Layout;
