import { isValidElement, type ReactNode, useMemo } from "react";
import { CustomDetails } from "./CustomDetails";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { slugify } from "../utils/slugify";
import MarkdownSummary from "./MarkdownSummary";

type Props = {
  markdown: string;
  stripFirstH1?: boolean;
  headingIdPrefix?: string;
};

export function extractText(node: ReactNode): string {
  if (node == null) return "";
  if (
    typeof node === "string" ||
    typeof node === "number" ||
    typeof node === "boolean"
  )
    return String(node);
  if (Array.isArray(node))
    return node.map((child) => extractText(child as ReactNode)).join("");

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

export function MarkdownRenderer({
  markdown,
  stripFirstH1,
  headingIdPrefix,
}: Props) {
  const normalized = useMemo(
    () => (stripFirstH1 ? stripLeadingH1(markdown) : markdown),
    [markdown, stripFirstH1],
  );

  return (
    <div className="markdown max-w-3xl">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          h1: ({ children, ...props }) => (
            <h1
              id={getIdForHeading(children, headingIdPrefix)}
              {...props}
              className="text-4xl font-libre font-extrabold text-white leading-tight mb-6 mt-8 first:mt-0"
            >
              {children}
            </h1>
          ),
          h2: ({ children, ...props }) => (
            <h2
              id={getIdForHeading(children, headingIdPrefix)}
              {...props}
              className="text-3xl font-libre font-bold text-white leading-tight mb-4 mt-8"
            >
              {children}
            </h2>
          ),
          h3: ({ children, ...props }) => (
            <h3
              id={getIdForHeading(children, headingIdPrefix)}
              {...props}
              className="text-2xl font-libre font-bold text-white leading-tight mb-3 mt-6"
            >
              {children}
            </h3>
          ),
          h4: ({ children, ...props }) => (
            <h4
              id={getIdForHeading(children, headingIdPrefix)}
              {...props}
              className="text-xl font-libre font-semibold text-white leading-tight mb-3 mt-6"
            >
              {children}
            </h4>
          ),
          h5: ({ children, ...props }) => (
            <h5
              id={getIdForHeading(children, headingIdPrefix)}
              {...props}
              className="text-lg font-libre font-semibold text-white mb-2 mt-4"
            >
              {children}
            </h5>
          ),
          h6: ({ children, ...props }) => (
            <h6
              id={getIdForHeading(children, headingIdPrefix)}
              {...props}
              className="text-base font-libre font-semibold text-gray mb-2 mt-4"
            >
              {children}
            </h6>
          ),
          p: ({ children, ...props }) => (
            <p
              {...props}
              className="text-gray font-fira text-xl leading-relaxed mb-4"
            >
              {children}
            </p>
          ),
          pre: ({ children, ...props }) => (
            <pre
              {...props}
              className="bg-black-900 border border-gray/20 rounded-xl p-4 mb-4 overflow-x-auto font-fira text-lg"
            >
              {children}
            </pre>
          ),
          code: ({ children, ...props }) => (
            <code
              {...props}
              className="bg-black-900 text-blue font-fira px-1.5 py-0.5 rounded text-lg"
            >
              {children}
            </code>
          ),
          a: ({ children, href, ...props }) => (
            <a
              href={href}
              {...props}
              className="text-blue underline underline-offset-2 hover:opacity-80 transition-opacity"
            >
              {children}
            </a>
          ),
          blockquote: ({ children, ...props }) => (
            <blockquote
              {...props}
              className="border-l-4 border-blue pl-4 my-4 text-gray font-fira text-xl italic"
            >
              {children}
            </blockquote>
          ),
          details: ({ children }) => <CustomDetails>{children}</CustomDetails>,
          ul: ({ children, ...props }) => (
            <ul
              {...props}
              className="list-disc list-inside text-gray font-fira text-xl mb-4 space-y-2"
            >
              {children}
            </ul>
          ),
          ol: ({ children, ...props }) => (
            <ol
              {...props}
              className="list-decimal list-inside text-gray font-fira text-xl mb-4 space-y-2"
            >
              {children}
            </ol>
          ),
          li: ({ children, ...props }) => (
            <li {...props} className="mb-1">
              {children}
            </li>
          ),
          hr: ({ ...props }) => (
            <hr {...props} className="border-gray/20 my-8" />
          ),
          strong: ({ children, ...props }) => (
            <strong {...props} className="font-semibold">
              {children}
            </strong>
          ),
          summary: MarkdownSummary,
          em: ({ children, ...props }) => (
            <em {...props} className="text-gray italic">
              {children}
            </em>
          ),
          table: ({ children, ...props }) => (
            <div className="overflow-x-auto mb-4">
              <table
                {...props}
                className="w-full font-fira text-xl border-collapse"
              >
                {children}
              </table>
            </div>
          ),
          th: ({ children, ...props }) => (
            <th
              {...props}
              className="text-white font-semibold text-left px-4 py-2 border-b border-gray/30 bg-black-900"
            >
              {children}
            </th>
          ),
          td: ({ children, ...props }) => (
            <td
              {...props}
              className="text-gray px-4 py-2 border-b border-gray/10"
            >
              {children}
            </td>
          ),
        }}
      >
        {normalized}
      </ReactMarkdown>
    </div>
  );
}
