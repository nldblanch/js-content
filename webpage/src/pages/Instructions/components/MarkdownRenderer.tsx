import { isValidElement, type ReactNode, useMemo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { slugify } from "../utils/slugify";

type Props = {
    markdown: string;
    stripFirstH1?: boolean;
    headingIdPrefix?: string;
};

function extractText(node: ReactNode): string {
    if (node == null) return "";
    if (typeof node === "string" || typeof node === "number" || typeof node === "boolean") return String(node);
    if (Array.isArray(node)) return node.map((child) => extractText(child as ReactNode)).join("");

    if (isValidElement<{ children?: ReactNode }>(node)) {
        return extractText(node.props.children ?? null);
    }

    return "";
}

function stripLeadingH1(markdown: string): string {
    const lines = markdown.split("\n");

    let i = 0;
    while (i < lines.length && lines[i].trim() === "") i++;

    if (i < lines.length && /^#\s+/.test(lines[i].trim())) {
        i++;
        while (i < lines.length && lines[i].trim() === "") i++;
        return lines.slice(i).join("\n");
    }

    return markdown;
}

const getIdForHeading = (children: ReactNode, headingIdPrefix?: string) => {
    const text = extractText(children);
    const slug = slugify(text);
    return slug ? `${headingIdPrefix ?? ""}${slug}` : undefined;
};

export function MarkdownRenderer({ markdown, stripFirstH1, headingIdPrefix }: Props) {
    const normalized = useMemo(
        () => (stripFirstH1 ? stripLeadingH1(markdown) : markdown),
        [markdown, stripFirstH1],
    );

    return (
        <div className="markdown">
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                    h1: ({ children, ...props }) => {
                        const id = getIdForHeading(children, headingIdPrefix);
                        return (
                            <h1 id={id} {...props} className="text-4xl font-bold lineheight-1.25 mb-4">
                                {children}
                            </h1>
                        );
                    },
                    h2: ({ children, ...props }) => {
                        const id = getIdForHeading(children, headingIdPrefix);
                        return (
                            <h2 id={id} {...props} className="text-3xl font-bold lineheight-1.25 mb-4">
                                {children}
                            </h2>
                        );
                    },
                    h3: ({ children, ...props }) => {
                        const id = getIdForHeading(children, headingIdPrefix);
                        return (
                            <h3 id={id} {...props} className="text-2xl font-bold lineheight-1.25 mb-4">
                                {children}
                            </h3>
                        );
                    },
                    h4: ({ children, ...props }) => {
                        const id = getIdForHeading(children, headingIdPrefix);
                        return (
                            <h4 id={id} {...props} className="text-xl font-semibold lineheight-1.25 mb-4">
                                {children}
                            </h4>
                        );
                    },
                    h5: ({ children, ...props }) => {
                        const id = getIdForHeading(children, headingIdPrefix);
                        return (
                            <h5 id={id} {...props} className="text-lg font-semibold lineheight-1.25 mb-4">
                                {children}
                            </h5>
                        );
                    },
                    h6: ({ children, ...props }) => {
                        const id = getIdForHeading(children, headingIdPrefix);
                        return (
                            <h6 id={id} {...props} className="text-base font-semibold lineheight-1.25 mb-4">
                                {children}
                            </h6>
                        );
                    },
                    p: ({ children, ...props }) => {
                        return (
                            <p {...props} className="mb-4 lineheight-1.5">
                                {children}
                            </p>
                        );
                    },
                    pre : ({ children, ...props }) => {
                        return (
                            <pre {...props} className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
                                {children}
                            </pre>
                        );
                    },
                    code: ({ children, ...props }) => {
                        return (
                            <code {...props} className="bg-gray-100 px-1 py-0.5 rounded">
                                {children}
                            </code>
                        );
                    },
                    ol: ({ children, ...props }) => {
                        return (
                            <ol {...props} className="list-inside mb-4">
                                {children}
                            </ol>
                        );
                    },
                    li: ({ children, ...props }) => {
                        return (
                            <li {...props} className="mb-2">
                                {children}
                            </li>
                        );
                    }
                }}
            >
                {normalized}
            </ReactMarkdown>
        </div>
    );
}