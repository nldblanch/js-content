import { render, screen, fireEvent } from "@testing-library/react";
import { CustomDetails } from "./CustomDetails";
import MarkdownSummary from "./MarkdownSummary";

describe("CustomDetails Component", () => {
  const renderDetails = (summaryText: string, contentText: string) => {
    return render(
      <CustomDetails>
        <MarkdownSummary>{summaryText}</MarkdownSummary>
        <p>{contentText}</p>
      </CustomDetails>,
    );
  };

  it("opens the modal when clicking a standard summary", () => {
    renderDetails("Solution", "This is the hidden answer");

    const summary = screen.getByText("Solution");
    fireEvent.click(summary);

    // Modal should appear
    expect(screen.getByText("Confirm Access")).toBeInTheDocument();
    // Content should NOT be visible yet
    expect(
      screen.queryByText("This is the hidden answer"),
    ).not.toBeInTheDocument();
  });

  it("reveals content immediately if summary contains 'table of contents'", () => {
    renderDetails("The Table of Contents", "List of chapters");

    const summary = screen.getByText("The Table of Contents");
    fireEvent.click(summary);

    // Modal should NOT appear
    expect(screen.queryByText("Confirm Access")).not.toBeInTheDocument();
    // Content should be visible immediately
    expect(screen.getByText("List of chapters")).toBeInTheDocument();
  });

  it("reveals content after clicking 'Show Content' in the modal", () => {
    renderDetails("Example Summary", "Example Content");

    // Click summary to open modal
    fireEvent.click(screen.getByText("Example Summary"));

    // Click proceed button
    const proceedBtn = screen.getByText("Show Content");
    fireEvent.click(proceedBtn);

    // Modal should be gone and content visible
    expect(screen.queryByText("Confirm Access")).not.toBeInTheDocument();
    expect(screen.getByText("Example Content")).toBeInTheDocument();
  });

  it("toggles content off when clicked while already expanded", () => {
    renderDetails("Table of Contents", "Content");

    const summary = screen.getByText("Table of Contents");

    // Expand
    fireEvent.click(summary);
    expect(screen.getByText("Content")).toBeInTheDocument();

    // Collapse
    fireEvent.click(summary);
    expect(screen.queryByText("Content")).not.toBeInTheDocument();
  });
});
