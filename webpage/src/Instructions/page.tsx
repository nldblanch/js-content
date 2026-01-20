import { MarkdownRenderer } from "./components/MarkdownRenderer";
import readme from "@repo/README.md?raw";
const Instructions = () => {
        return <MarkdownRenderer markdown={readme} />;

}

export default Instructions;