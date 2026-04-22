import { render, screen } from "@testing-library/react";
import MarkdownSummary from "./MarkdownSummary";

describe("MarkdownSummary", () => {
  it("renders a summary element with provided children", () => {
    render(<MarkdownSummary>Example Summary</MarkdownSummary>);

    const summary = screen.getByText("Example Summary");
    expect(summary.tagName.toLowerCase()).toBe("summary");
  });

  it("applies base styling classes", () => {
    render(<MarkdownSummary>Styled Summary</MarkdownSummary>);

    const summary = screen.getByText("Styled Summary");
    expect(summary).toHaveClass("p-4");
    expect(summary).toHaveClass("text-xl");
    expect(summary).toHaveClass("font-bold");
  });

  it("renders the arrow icon", () => {
    render(<MarkdownSummary>With Icon</MarkdownSummary>);

    const arrow = screen.getByText("▶");
    expect(arrow).toBeInTheDocument();
    expect(arrow).toHaveAttribute("aria-hidden", "true");
  });

  it("does not rotate the arrow when isOpen is false or undefined", () => {
    render(<MarkdownSummary>Collapsed</MarkdownSummary>);

    const arrow = screen.getByText("▶");
    expect(arrow.className).toContain("rotate-0");
    expect(arrow.className).not.toContain("rotate-90");
  });

  it("rotates the arrow when isOpen is true", () => {
    render(<MarkdownSummary isOpen>Expanded</MarkdownSummary>);

    const arrow = screen.getByText("▶");
    expect(arrow.className).toContain("rotate-90");
  });

  it("passes additional props to the summary element", () => {
    render(
      <MarkdownSummary data-testid="markdown-summary">
        Prop Test
      </MarkdownSummary>,
    );

    const summary = screen.getByTestId("markdown-summary");
    expect(summary).toBeInTheDocument();
  });
});