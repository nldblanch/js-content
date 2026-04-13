import { Link, useLocation } from "react-router";
import routes from "@src/routes";
import { getAsset } from "@src/utils/getAsset";
import { CLI_FEATURE_FLAG } from "@src/config";
import { WindowControlButtons } from "@src/ui/WindowControlButtons"

const Banner = () => {

    return (
        <div className="w-full bg-black-700 flex justify-between items-center px-4 py-2">
            <WindowControlButtons />
            <h1 className="text-5xl font-mono font-semibold text-gray">JavaScript Content</h1>
            <div className="flex gap-4 justify-between">
                <img src={getAsset("sunshine.svg")} className="h-8 aspect-square" alt="Theme" />
                <img src={getAsset("help.svg")} className="h-8 aspect-square" alt="Help" />
            </div>
        </div>
    )
}

const NavBar = () => {
    const activeTab = useLocation().pathname.split("/")[1] || "";
  return (
    <nav className="w-full bg-black-800">
      <ul className="flex justify-evenly items-center flex-nowrap">
        {[
          routes.HOME,
          routes.SETUP,
          routes.INSTRUCTIONS,
          routes.EXTRA_TASKS,
          routes.HELP,
          routes.CREDITS,
          ...(CLI_FEATURE_FLAG ? [routes.CLI] : []),
        ].map(({ label, path }) => {
          return (
            <li key={label} className="grow font-fira">
              <Link
                to={path}
                className={`text-gray text-center text-md block py-2 px-4 hover:bg-black-900 cursor-pointer text-2xl ${activeTab === path.split("/")[1] ? "bg-black-900" : ""}`}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

const Breadcrumbs = () => {
  const activeTab = useLocation().pathname.split("/")[1] || "home";

    return (
        <nav className="bg-black-900 w-full text-white/20 px-4 py-2 text-2xl font-mono">
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
