import { NavLink } from "react-router";
import { useChallengeInstructions } from "../hooks/useChallengeInstructions";
import { FileAccordion } from "./FileAccordion";
import routes from "@src/routes";

export const Navigation = () => {
  const docs = useChallengeInstructions();
  return (
    <aside
      aria-label="Challenges"
      className="h-full flex flex-col overflow-hidden bg-[#252526] border-r border-white/5"
    >
      <div className="p-6">
        <h2 className="font-fira text-[#A9A9A9] text-2xl uppercase tracking-wider mb-8">
          Challenges
        </h2>
      </div>

      <nav className="overflow-y-auto overflow-x-hidden flex-1 px-4 pb-10 custom-scrollbar">
        <ul className="flex flex-col gap-2 list-none p-0 m-0">
          <li className="navlink">
            <NavLink
              to={routes.SETUP.path}
              className={({ isActive }) => `
                                block py-2 px-4 font-fira text-xl transition-colors
                                ${isActive ? "text-white font-bold" : "text-[#A9A9A9] hover:text-white"}
                            `}
            >
              Overview
            </NavLink>
          </li>
          {docs.map((d) => (
            <li key={d.slug}>
              <FileAccordion slug={d.slug} title={d.title} files={d.files} />
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
