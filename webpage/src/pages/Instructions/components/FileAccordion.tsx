import { useState } from "react";
import { NavLink, useParams, useLocation } from "react-router";
import { slugify } from "../utils/slugify";
import { SlArrowDown } from "react-icons/sl";

type Params = { slug?: string };

const ChevronDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    className="size-5 shrink-0 transition-colors text-[#78C4FF]"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
    />
  </svg>
);

export const FileAccordion = ({
  title,
  slug,
  files,
}: {
  title: string;
  slug: string;
  files: { title: string; markdown: string }[];
}) => {
  const [open, setOpen] = useState(false);
  const { slug: loc } = useParams<Params>();
  const { hash } = useLocation();

  // Incorporating the original selection logic
  // This determines the 'title' of the currently active item (parent or sub-file)
  const selected =
    loc?.replace(/\d/g, "").split("-").join(" ").trim() === title
      ? (files.find((f) => `#${slugify(f.title)}` === hash)?.title ?? title)
      : null;

  // Helper for the parent link styling
  const isParentActive = selected === title;

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    setOpen(!open);
  };

  return (
    <section className="flex flex-col">
      <div className="group flex items-center justify-between py-2 px-4 hover:bg-white/5 rounded-md transition-all">
        {/* 1. The Toggle Button (ie, Chevron) comes first */}
        <button
          onClick={clickHandler}
          className="cursor-pointer mr-3 text-[#818181] hover:text-white transition-transform duration-200 flex items-center justify-center shrink-0"
          style={{ transform: open ? "rotate(0deg)" : "rotate(-90deg)" }}
        >
          <SlArrowDown size={16} strokeWidth={100} />
        </button>

        {/* 2. The NavLink (Text) follows the chevron */}
        <NavLink
          to={`/instructions/${slug}`}
          onClick={() => !open && setOpen(true)}
          className={`flex-1 font-fira text-xl truncate transition-colors ${
            isParentActive
              ? "text-[#FF9C56]"
              : "text-[#A9A9A9] group-hover:text-white"
          }`}
          style={{ fontWeight: isParentActive ? 700 : 400 }}
        >
          {title}
        </NavLink>
      </div>

      {open && (
        <ul className="list-none m-0 p-0 flex flex-col gap-1 mt-1 ml-4 border-l-[5px] border-white/10">
          {files.map((f) => {
            if (f.title.toLowerCase() === "readme") return null;

            // Incorporating the anchor and 'to' logic from the original
            const anchor =
              f.title.toLowerCase() === "readme" ? "" : `#${slugify(f.title)}`;
            const to = `/instructions/${slug}${anchor}`;

            // 3. Check if THIS specific file is the one selected
            const isActiveFile = selected === f.title;

            return (
              <li key={`${slug}-${f.title}`}>
                <NavLink
                  to={to}
                  className={`
                    flex items-center gap-3 py-2 px-4 font-fira text-lg transition-all
                    ${
                      isActiveFile
                        ? "text-white bg-white/5"
                        : "text-[#A9A9A9] hover:text-white hover:bg-white/5"
                    }
                  `}
                  style={{ fontWeight: isActiveFile ? 700 : 400 }}
                >
                  {/* Replaced span with Information SVG */}
                  <ChevronDown />
                  <span className="truncate">{f.title}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};
