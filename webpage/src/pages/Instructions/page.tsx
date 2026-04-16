import { useMemo } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { MarkdownRenderer } from "./components/MarkdownRenderer";
import {
  useChallengeInstructions,
  type ChallengeInstruction,
} from "./hooks/useChallengeInstructions";
import repoReadme from "@repo/README.md?raw";
import { Navigation } from "./components/Navigation";
import { slugify } from "./utils/slugify";

type Params = { slug?: string };

function getMarkdown(hash: string, current: ChallengeInstruction | undefined) {
  if (hash) {
    return (
      current?.files.find((f) => `#${slugify(f.title)}` === hash)?.markdown ??
      "no markdown"
    );
  }
  const markdown = current?.files.find(
    (f) => f.title.toLowerCase() === "readme",
  )?.markdown;

  if (markdown) return markdown;

  const instructions = current?.files.find(
    (f) => f.title.toLowerCase() === "instructions",
  )?.markdown;

  return (
    instructions ?? "No instructions.md or README.md found for this challenge."
  );
}

const ChevronLeft = ({ color }: { color: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={3}
    stroke={color}
    className="size-10"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 19.5 8.25 12l7.5-7.5"
    />
  </svg>
);

const ChevronRight = ({ color }: { color: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={3}
    stroke={color}
    className="size-10"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m8.25 4.5 7.5 7.5-7.5 7.5"
    />
  </svg>
);

export default function InstructionsPage() {
  const docs = useChallengeInstructions();
  const { slug } = useParams<Params>();
  const { hash } = useLocation();
  const navigate = useNavigate();

  const currentIndex = useMemo(() => {
    if (!slug) return -1;
    return docs.findIndex((d) => d.slug === slug);
  }, [docs, slug]);
  const current = docs.find((doc) => doc.slug === slug);
  const markdown = useMemo(() => getMarkdown(hash, current), [hash, current]);
  const prev = currentIndex > 0 ? docs[currentIndex - 1] : undefined;
  const next =
    currentIndex >= 0 && currentIndex < docs.length - 1
      ? docs[currentIndex + 1]
      : undefined;

  if (docs.length === 0) {
    return (
      <div className="page-container">
        <h1 className="text-4xl font-libre font-extrabold text-white">
          Instructions
        </h1>
        <p className="text-gray font-fira text-2xl">
          No docs found. Check the glob path in
          <code className="text-blue bg-black-900 px-2 py-0.5 rounded">
            useChallengeInstructions
          </code>
          .
        </p>
      </div>
    );
  }

  return (
    <div
      className="grid h-screen overflow-hidden"
      style={{ gridTemplateColumns: "280px 1fr" }}
    >
      <Navigation />

      <section
        aria-label="Instructions"
        className="overflow-y-auto h-full bg-black-800 px-10 py-8"
      >
        {!slug && <MarkdownRenderer markdown={repoReadme} />}

        {slug && !current && (
          <div className="page-container">
            <h1 className="text-4xl font-libre font-extrabold text-white">
              Instructions
            </h1>
            <p className="text-gray font-fira text-2xl">
              Unknown challenge. Pick one from the list.
            </p>
          </div>
        )}

        {current && (
          <>
            <header className="flex items-center justify-between gap-3 mb-8">
              <button
                disabled={!prev}
                onClick={() => prev && navigate(`/instructions/${prev.slug}`)}
                className="cursor-pointer flex items-center gap-2 shrink-0 font-fira text-xl capitalize
                           disabled:opacity-30 disabled:cursor-not-allowed"
                style={{ color: !prev ? "#474747" : "#A9A9A9" }}
              >
                <ChevronLeft color={!prev ? "#474747" : "#A9A9A9"} />
                Previous
              </button>

              <h1 className="text-4xl font-libre font-extrabold text-white text-center flex-1 px-4">
                {current.title}
              </h1>

              <button
                disabled={!next}
                onClick={() => next && navigate(`/instructions/${next.slug}`)}
                className="cursor-pointer flex items-center gap-2 shrink-0 font-fira text-xl capitalize
                           disabled:opacity-30 disabled:cursor-not-allowed"
                style={{ color: "#A9A9A9" }}
              >
                Next
                <ChevronRight color="#A9A9A9" />
              </button>
            </header>

            <MarkdownRenderer markdown={markdown} />

            <footer className="flex justify-between gap-3 mt-12 pt-6 border-t border-gray/20">
              <button
                disabled={!prev}
                onClick={() => prev && navigate(`/instructions/${prev.slug}`)}
                className="cursor-pointer flex items-center gap-2 font-fira text-xl capitalize
                           disabled:opacity-30 disabled:cursor-not-allowed"
                style={{ color: !prev ? "#474747" : "#A9A9A9" }}
              >
                <ChevronLeft color={!prev ? "#474747" : "#A9A9A9"} />
                Previous
              </button>
              <button
                disabled={!next}
                onClick={() => next && navigate(`/instructions/${next.slug}`)}
                className="cursor-pointer flex items-center gap-2 font-fira text-xl capitalize
                           disabled:opacity-30 disabled:cursor-not-allowed"
                style={{ color: "#A9A9A9" }}
              >
                Next
                <ChevronRight color="#A9A9A9" />
              </button>
            </footer>
          </>
        )}
      </section>
    </div>
  );
}
