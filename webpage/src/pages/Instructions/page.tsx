import { useMemo } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { MarkdownRenderer } from "./components/MarkdownRenderer";
import { useChallengeInstructions, type ChallengeInstruction } from "./hooks/useChallengeInstructions";
import repoReadme from "@repo/README.md?raw";
import { Navigation } from "./components/Navigation";
import { slugify } from "./utils/slugify";

type Params = { slug?: string };

function getMarkdown(hash: string, current: ChallengeInstruction | undefined) {
    if (hash) {
        return current?.files.find(f => `#${slugify(f.title)}` === hash)?.markdown ?? 'no markdown'
    }
    const markdown = current?.files.find(f => f.title.toLowerCase() === "readme")?.markdown;

    if (markdown) return markdown

    const instructions = current?.files.find(f => f.title.toLowerCase() === "instructions")?.markdown;

    return instructions ?? "No instructions.md or README.md found for this challenge.";
}

export default function InstructionsPage() {
    const docs = useChallengeInstructions();
    const { slug } = useParams<Params>();
    const { hash } = useLocation();
    const navigate = useNavigate();

    const currentIndex = useMemo(() => {
        if (!slug) return -1;
        return docs.findIndex((d) => d.slug === slug);
    }, [docs, slug]);
    const current = docs.find(doc => doc.slug === slug)
    const markdown = useMemo(() => getMarkdown(hash, current), [hash, current]);
    const prev = currentIndex > 0 ? docs[currentIndex - 1] : undefined;
    const next = currentIndex >= 0 && currentIndex < docs.length - 1 ? docs[currentIndex + 1] : undefined;

    if (docs.length === 0) {
        return (
            <div className="inner">
                <h1>Instructions</h1>
                <p>No docs markdown found. Check the glob path in <code>useChallengeInstructions</code>.</p>
            </div>
        );
    }

    return (
        <div id="main" style={{ display: "grid", height: "100vh", gridTemplateColumns: "280px 1fr", gap: 24 }}>
            <Navigation />
            <section aria-label="Instructions" style={{ overflow: "auto", height: "100%" }}>
                {!slug && (
                    <MarkdownRenderer markdown={repoReadme} />
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
                            {/* <h1 style={{ margin: 0 }}>{current.title}</h1> */}

                            <div style={{ display: "flex", gap: 8 }}>
                                <button disabled={!prev} onClick={() => prev && navigate(`/instructions/${prev.slug}`)}>
                                    Prev
                                </button>
                                <button disabled={!next} onClick={() => next && navigate(`/instructions/${next.slug}`)}>
                                    Next
                                </button>
                            </div>
                        </header>

                        <MarkdownRenderer markdown={markdown} />
                    </>
                )}
            </section>
        </div>
    );
}