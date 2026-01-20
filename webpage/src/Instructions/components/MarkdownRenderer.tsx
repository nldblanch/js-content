import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
    markdown: string;
};

export function MarkdownRenderer({ markdown }: Props) {
    return (
        <div className="markdown">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
        </div>
    );
}