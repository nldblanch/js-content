import { Link, useLocation } from "react-router"
import routes from "../../routes"
import { getAsset } from "../../utils/getAsset"

const Banner = () => {

    return (
        <div className="w-full bg-[#3C3C3C] flex justify-between items-center px-4 py-2">
            <div className="flex justify-evenly gap-2">
                {["bg-red-500", "bg-yellow-500", "bg-green-500"].map((color) => {
                    return <div key={color} className={`rounded-full aspect-square h-3 ${color}`} />
                })}
            </div>
            <h1 className="text-4xl font-semibold text-[#A9A9A9]">JavaScript Content</h1>
            <div className="flex gap-4 justify-between">
                <img src={getAsset("sunshine.svg")} className="h-8 aspect-square" alt="Theme" />
                <img src={getAsset("help.svg")} className="h-8 aspect-square" alt="Help" />
            </div>
        </div>
    )
}

const NavBar = () => {
    return (
        <nav className="w-full bg-[#252526]">
            <ul className="flex justify-evenly items-center flex-nowrap">
                {[routes.HOME, routes.SETUP, routes.INSTRUCTIONS, routes.EXTRA_TASKS, routes.HELP, routes.CREDITS].map(({label, path}) => {
                    return (
                        <li key={label} className="grow">
                            <Link to={path} className="text-[#A9A9A9] text-center text-md block py-2 px-4 hover:bg-[#1F1F1F] cursor-pointer">
                                {label}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

const Breadcrumbs = () => {
    const activeTab = useLocation().pathname.split("/")[1] || "home";

    return (
        <nav className="bg-[#1E1E1E] w-full text-[#FFFFFF21] px-4 py-2 text-sm">
            {`src > ${activeTab.split(' ').join('-')}.html`}
        </nav>
    )
}

export function AppHeader() {
    return (
        <header id="header" className="flex flex-col">
            <Banner />
            <NavBar />
            <Breadcrumbs />
        </header>
    );
}
