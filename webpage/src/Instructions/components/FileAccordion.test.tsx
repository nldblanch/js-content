import { afterEach, beforeEach, describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router";
import { FileAccordion } from "./FileAccordion";

function renderWithRoute(
    ui: React.ReactNode,
    { initialEntry = "/instructions/8-whale-talk" }: { initialEntry?: string } = {}
) {
    return render(
        <MemoryRouter initialEntries={[initialEntry]}>
            <Routes>
                <Route path="/instructions/:slug" element={ui} />
            </Routes>
        </MemoryRouter>
    );
}

describe("FileAccordion", () => {
    const files = [
        { title: "readme", markdown: "# readme" },
        { title: "function documentation", markdown: "# function docs" },
        { title: "solution", markdown: "# solution" },
    ];

    beforeEach(() => {
        window.location.hash = "";
    });

    afterEach(() => {
        window.location.hash = "";
    });

    test("renders title link and is collapsed by default", () => {
        renderWithRoute(
            <FileAccordion title="whale talk" slug="8-whale-talk" files={files} />
        );

        expect(screen.getByRole("link", { name: "whale talk" })).toBeInTheDocument();
        expect(screen.queryByRole("link", { name: "function documentation" })).toBeNull();
    });

    test("opens and closes when clicking the toggle button", async () => {
        renderWithRoute(
            <FileAccordion title="whale talk" slug="8-whale-talk" files={files} />
        );

        const user = userEvent.setup();

        const toggle = screen.getByRole("button");

        await user.click(toggle);
        expect(screen.getByRole("link", { name: "function documentation" })).toBeInTheDocument();
        expect(screen.getByRole("link", { name: "solution" })).toBeInTheDocument();

        // readme entries are not rendered in the accordion list
        expect(screen.queryByRole("link", { name: "readme" })).toBeNull();

        await user.click(toggle);
        expect(screen.queryByRole("link", { name: "function documentation" })).toBeNull();
    });

    test("builds file links with slugified hash anchors", async () => {
        renderWithRoute(
            <FileAccordion title="whale talk" slug="8-whale-talk" files={files} />
        );

        const user = userEvent.setup();

        await user.click(screen.getByRole("button"));

        const link = screen.getByRole("link", { name: "function documentation" });
        expect(link).toHaveAttribute(
            "href",
            expect.stringContaining("/instructions/8-whale-talk#function-documentation")
        );
    });

    test("bolds the selected file when route matches and hash points to it", async () => {
        window.location.hash = "#function-documentation";

        renderWithRoute(
            <FileAccordion title="whale talk" slug="8-whale-talk" files={files} />,
            { initialEntry: "/instructions/8-whale-talk" }
        );

        const user = userEvent.setup();

        await user.click(screen.getByRole("button"));

        const selectedLink = screen.getByRole("link", { name: "function documentation" });
        expect(selectedLink).toHaveStyle("font-weight: 700");

        const unselectedLink = screen.getByRole("link", { name: "solution" });
        expect(unselectedLink).toHaveStyle("font-weight: 400");
    });

    test("does not mark a file selected when route slug does not match accordion title", async () => {
        window.location.hash = "#function-documentation";

        renderWithRoute(
            <FileAccordion title="whale talk" slug="8-whale-talk" files={files} />,
            { initialEntry: "/instructions/99-something-else" }
        );

        const user = userEvent.setup();

        await user.click(screen.getByRole("button"));

        const link = screen.getByRole("link", { name: "function documentation" });
        expect(link).toHaveStyle("font-weight: 400");
    });
});