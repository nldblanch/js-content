import { NavLink } from "react-router";
import { useChallengeInstructions } from "../hooks/useChallengeInstructions";
import { FileAccordion } from "./FileAccordion";
import routes from "../../routes";

export const Navigation = () => {
    const docs = useChallengeInstructions();
    return (
        <aside aria-label="Challenges"
            style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
            }}
        >
            <nav style={{ overflowY: 'auto', overflowX: "hidden", minHeight: 0, flex: '1 1 auto', paddingRight: 16 }}>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, gap: 12, display: "flex", flexDirection: "column", fontSize: 18 }}>
                    <li className='navlink'>
                        <NavLink
                            to={routes.SETUP.path}
                            style={({ isActive }) => ({
                                fontWeight: isActive ? 700 : 400,
                                textDecoration: "none",
                            })}
                        >
                            Overview
                        </NavLink>
                    </li>
                    {docs.map(d => (
                        <li key={d.slug} style={{ padding: 0, margin: 0 }}>
                            <FileAccordion slug={d.slug} title={d.title} files={d.files} />
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}