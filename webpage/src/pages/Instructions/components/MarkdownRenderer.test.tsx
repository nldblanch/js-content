import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { MarkdownRenderer } from "./MarkdownRenderer";

describe("MarkdownRenderer", () => {
    test("renders markdown and adds ids to headings", () => {
        render(
            <MarkdownRenderer
                markdown={"## Hello World\n\nSome text"}
                headingIdPrefix="x-"
            />
        );

        const heading = screen.getByRole("heading", { level: 2, name: "Hello World" });
        expect(heading).toHaveAttribute("id", "x-hello-world");
        expect(screen.getByText("Some text")).toBeInTheDocument();
    });

    test.each([[1], [2], [3], [4], [5], [6]])("heading id is omitted when slug is empty", (level) => {
        render(<MarkdownRenderer markdown={`${"#".repeat(level)} !!!`} />);

        const heading = screen.getByRole("heading", { level, name: "!!!" });
        expect(heading.getAttribute("id")).toBeNull();
    });

    test("extracts heading text when it contains emphasis", () => {
        render(
            <MarkdownRenderer markdown={"## Hello **World**"} />
        );

        const heading = screen.getByRole("heading", { level: 2, name: "Hello World" });
        expect(heading).toHaveAttribute("id", "hello-world");
    });

    test("stripFirstH1 removes the first top-level heading", () => {
        render(
            <MarkdownRenderer
                markdown={"# Title\n\nIntro\n\n## Section"}
                stripFirstH1
            />
        );

        expect(screen.queryByRole("heading", { level: 1, name: "Title" })).toBeNull();
        expect(screen.getByText("Intro")).toBeInTheDocument();
        expect(screen.getByRole("heading", { level: 2, name: "Section" })).toBeInTheDocument();
    });
});
