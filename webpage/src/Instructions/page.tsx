import { useMemo } from "react";
import { NavLink, useNavigate, useParams } from "react-router";
import { MarkdownRenderer } from "./components/MarkdownRenderer";
import { useChallengeInstructions } from "./hooks/useChallengeInstructions";
import repoReadme from "@repo/README.md?raw";

type Params = { slug?: string };

export default function InstructionsPage() {
    const docs = useChallengeInstructions();
    const { slug } = useParams<Params>();
    const navigate = useNavigate();

    const currentIndex = useMemo(() => {
        if (!slug) return -1;
        return docs.findIndex((d) => d.slug === slug);
    }, [docs, slug]);

    const current = currentIndex >= 0 ? docs[currentIndex] : undefined;
    const prev = currentIndex > 0 ? docs[currentIndex - 1] : undefined;
    const next = currentIndex >= 0 && currentIndex < docs.length - 1 ? docs[currentIndex + 1] : undefined;

    if (docs.length === 0) {
        return (
            <div className="inner">
                <h1>Instructions</h1>
                <p>No challenge READMEs found. Check the glob path in <code>useChallengeInstructions</code>.</p>
            </div>
        );
    }

    return (
        <div id="main">
            <div className="inner" style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 24 }}>
                <aside aria-label="Challenges">
                    <h2 style={{ marginTop: 0 }}>Challenges</h2>
                    <nav>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                            <li style={{ marginBottom: 8 }}>
                                <NavLink
                                    to={`/`}
                                    style={({ isActive }) => ({
                                        fontWeight: isActive ? 700 : 400,
                                        textDecoration: "none",
                                    })}
                                >
                                    Go Home
                                </NavLink>
                            </li>
                            <li style={{ marginBottom: 8 }}>
                                <NavLink
                                    to={`/instructions`}
                                    style={({ isActive }) => ({
                                        fontWeight: isActive ? 700 : 400,
                                        textDecoration: "none",
                                    })}
                                >
                                    Overview
                                </NavLink>
                            </li>
                            {docs.map((d) => (
                                <li key={d.slug} style={{ marginBottom: 8 }}>
                                    <NavLink
                                        to={`/instructions/${d.slug}`}
                                        style={({ isActive }) => ({
                                            fontWeight: isActive ? 700 : 400,
                                            textDecoration: "none",
                                        })}
                                    >
                                        {d.title}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>

                <section aria-label="Instructions">
                    {!slug && (
                        <>
                            <MarkdownRenderer markdown={repoReadme} />
                        </>
                    )}

                    {slug && !current && (
                        <>
                            <h1 style={{ marginTop: 0 }}>Instructions</h1>
                            <p>Unknown challenge. Pick one from the list.</p>
                        </>
                    )}

                    {current && (
                        <>
                            <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                                <h1 style={{ margin: 0 }}>{current.title}</h1>

                                <div style={{ display: "flex", gap: 8 }}>
                                    <button disabled={!prev} onClick={() => prev && navigate(`/instructions/${prev.slug}`)}>
                                        Prev
                                    </button>
                                    <button disabled={!next} onClick={() => next && navigate(`/instructions/${next.slug}`)}>
                                        Next
                                    </button>
                                </div>
                            </header>

                            <MarkdownRenderer markdown={current.markdown} stripFirstH1 />
                        </>
                    )}
                </section>
            </div>
        </div>
    );
}