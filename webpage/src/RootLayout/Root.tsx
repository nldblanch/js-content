import { Outlet } from "react-router";
import { AppFooter } from "./components/AppFooter";
import { AppHeader } from "./components/AppHeader";
import { usePreloadClass } from "./hooks/usePreloadClass";
const RootLayout = () => {
    usePreloadClass();

    return (
        <div className="flex flex-col min-h-screen">
            <AppHeader />
            <main className="bg-black-700 grow"><Outlet /></main>
            <AppFooter />
        </div>
    );
};

export default RootLayout;