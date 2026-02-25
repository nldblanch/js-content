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
                        const text = extractText(children);
                        const slug = slugify(text);
                        const id = slug ? `${headingIdPrefix ?? ""}${slug}` : undefined;
                        return (
                            <h1 id={id} {...props}>
                                {children}
                            </h1>
                        );
                    },
                    h2: ({ children, ...props }) => {
                        const text = extractText(children);
                        const slug = slugify(text);
                        const id = slug ? `${headingIdPrefix ?? ""}${slug}` : undefined;
                        return (
                            <h2 id={id} {...props}>
                                {children}
                            </h2>
                        );
                    },
                    h3: ({ children, ...props }) => {
                        const text = extractText(children);
                        const slug = slugify(text);
                        const id = slug ? `${headingIdPrefix ?? ""}${slug}` : undefined;
                        return (
                            <h3 id={id} {...props}>
                                {children}
                            </h3>
                        );
                    },
                    h4: ({ children, ...props }) => {
                        const text = extractText(children);
                        const slug = slugify(text);
                        const id = slug ? `${headingIdPrefix ?? ""}${slug}` : undefined;
                        return (
                            <h4 id={id} {...props}>
                                {children}
                            </h4>
                        );
                    },
                    h5: ({ children, ...props }) => {
                        const text = extractText(children);
                        const slug = slugify(text);
                        const id = slug ? `${headingIdPrefix ?? ""}${slug}` : undefined;
                        return (
                            <h5 id={id} {...props}>
                                {children}
                            </h5>
                        );
                    },
                    h6: ({ children, ...props }) => {
                        const text = extractText(children);
                        const slug = slugify(text);
                        const id = slug ? `${headingIdPrefix ?? ""}${slug}` : undefined;
                        return (
                            <h6 id={id} {...props}>
                                {children}
                            </h6>
                        );
                    },
                }}
            >
                {normalized}
            </ReactMarkdown>
        </div>
    );
}