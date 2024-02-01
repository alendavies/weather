import { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
    return (
        <div>
            <div className="flex justify-start items-center flex-row lg:px-10 px-4 py-4">
                <img src="/weather.svg" width={50} height={50} />
                <p className="text-white font-semibold text-2xl">Clime</p>
            </div>
            <div className="lg:mx-auto md:mx-auto h-fit  md:py-5 md:px-32 lg:py-5 lg:px-32 max-w-screen-md mx-3 lg:border-2 md:border-2 rounded-md">
                {children}
            </div>
        </div>
    );
}

export default Layout;
