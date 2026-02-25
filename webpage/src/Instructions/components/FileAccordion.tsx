import { useState } from "react";
import { NavLink, useParams } from "react-router";
import { slugify } from "../utils/slugify";
import { SlArrowDown } from "react-icons/sl";

type Params = { slug?: string };

export const FileAccordion = ({ title, slug, files }: { title: string; slug: string; files: { title: string; markdown: string }[] }) => {
    const [open, setOpen] = useState(false);
    const { slug: loc } = useParams<Params>();
    const selected = loc?.replace(/\d/g, '').split('-').join(' ').trim() === title
        ? files.find(f => `#${slugify(f.title)}` === window.location.hash)?.title ?? title
        : null;

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation();
        setOpen(!open);
    }

    return (
        <section>
            <div
                style={{
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "baseline",
                }}
                className="navlink"
            >
                <NavLink
                    to={`/instructions/${slug}`}
                    onClick={() => {
                        if (!open) {
                            setOpen(true);
                        }
                    }}
                    style={{
                        fontWeight: selected === title ? 700 : 400,
                        textDecoration: "none",
                        flex: "1 1 auto",
                        border: 'none',
                        paddingLeft: 8,
                    }}
                >
                    {title}
                </NavLink>
                <button style={{
                    border: 'none',
                    outline: 'none',
                    boxShadow: 'none',
                    background: 'none',
                    padding: 0,
                    margin: '0 8px 0 0',

                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    lineHeight: 1,
                    height: '1em',
                    width: '1em',
                    verticalAlign: 'baseline'
                }}
                    onClick={clickHandler}>
                    <span style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', display: 'inline-block', transition: 'transform 0.2s' }}>
                        <SlArrowDown />
                    </span>
                </button>
            </div>

            {open && <ul style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: 12
            }}>
                {files.map((f) => {
                    if (f.title.toLowerCase() === 'readme') return null;
                    const anchor = f.title.toLowerCase() === 'readme' ? "" : `#${slugify(f.title)}`;
                    const to = `/instructions/${slug}${anchor}`;
                    return (
                        <li key={`${slug}-${f.title}`} 
                        style={{
                            padding: 0,
                        }} 
                        className="navlink accordion-link">
                            <NavLink
                                to={to}
                                style={{
                                    fontWeight: selected === f.title ? 700 : 400,
                                    textDecoration: "none",
                                    opacity: 0.9,
                                    border: 'none',
                                    paddingLeft: 24
                                }}
                            >
                                {f.title}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>}
        </section>
    );
} 