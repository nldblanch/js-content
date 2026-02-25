import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test, vi } from "vitest";
import { MemoryRouter, Route, Routes } from "react-router";
import InstructionsPage from "./page";
import type { ChallengeInstruction } from "./hooks/useChallengeInstructions";

const mocks = vi.hoisted(() => ({
    useChallengeInstructionsMock: vi.fn<() => ChallengeInstruction[]>(),
}));

vi.mock("./hooks/useChallengeInstructions", async () => {
    const actual = await vi.importActual<typeof import("./hooks/useChallengeInstructions")>(
        "./hooks/useChallengeInstructions"
    );

    return {
        ...actual,
        useChallengeInstructions: mocks.useChallengeInstructionsMock,
    };
});

vi.mock("./components/Navigation", () => ({
    Navigation: () => <aside aria-label="Challenges" />, // keep layout simple
}));

vi.mock("./components/MarkdownRenderer", () => ({
    MarkdownRenderer: ({ markdown }: { markdown: string }) => (
        <pre data-testid="markdown">{markdown}</pre>
    ),
}));

vi.mock("@repo/README.md?raw", () => ({
    default: "# Repo Readme\n\nWelcome",
}));

function renderAt(path: string) {
    return render(
        <MemoryRouter initialEntries={[path]}>
            <Routes>
                <Route path="/instructions" element={<InstructionsPage />} />
                <Route path="/instructions/:slug" element={<InstructionsPage />} />
            </Routes>
        </MemoryRouter>
    );
}

describe("InstructionsPage", () => {
    test("shows empty state when no docs exist", () => {
        mocks.useChallengeInstructionsMock.mockReturnValue([]);
        renderAt("/instructions");

        expect(screen.getByText("Instructions")).toBeInTheDocument();
        expect(screen.getByText(/No docs markdown found/i)).toBeInTheDocument();
    });

    test("renders repo README on overview route", () => {
        mocks.useChallengeInstructionsMock.mockReturnValue([
            { slug: "01-intro", title: "intro", order: 1, files: [] },
        ]);

        renderAt("/instructions");

        expect(screen.getByTestId("markdown")).toHaveTextContent("# Repo Readme");
    });

    test("shows unknown challenge message when slug not found", () => {
        mocks.useChallengeInstructionsMock.mockReturnValue([
            { slug: "01-intro", title: "intro", order: 1, files: [] },
        ]);

        renderAt("/instructions/does-not-exist");

        expect(screen.getByText(/Unknown challenge/i)).toBeInTheDocument();
    });

    test("selects markdown by hash when present", () => {
        mocks.useChallengeInstructionsMock.mockReturnValue([
            {
                slug: "01-intro",
                title: "intro",
                order: 1,
                files: [
                    { title: "readme", markdown: "README1" },
                    { title: "function documentation", markdown: "FUNC1" },
                    { title: "solution", markdown: "SOL1" },
                ],
            },
        ]);

        renderAt("/instructions/01-intro#function-documentation");

        expect(screen.getByTestId("markdown")).toHaveTextContent("FUNC1");
    });

    test("defaults to readme markdown when no hash is present", () => {
        mocks.useChallengeInstructionsMock.mockReturnValue([
            {
                slug: "01-intro",
                title: "intro",
                order: 1,
                files: [
                    { title: "readme", markdown: "README1" },
                    { title: "instructions", markdown: "INST1" },
                ],
            },
        ]);

        renderAt("/instructions/01-intro");

        expect(screen.getByTestId("markdown")).toHaveTextContent("README1");
    });

    test("Next navigates to the next challenge", async () => {
        mocks.useChallengeInstructionsMock.mockReturnValue([
            {
                slug: "01-intro",
                title: "intro",
                order: 1,
                files: [{ title: "readme", markdown: "README1" }],
            },
            {
                slug: "02-advanced",
                title: "advanced",
                order: 2,
                files: [{ title: "readme", markdown: "README2" }],
            },
        ]);

        renderAt("/instructions/01-intro");

        const user = userEvent.setup();

        expect(screen.getByTestId("markdown")).toHaveTextContent("README1");
        expect(screen.getByRole("button", { name: "Prev" })).toBeDisabled();
        expect(screen.getByRole("button", { name: "Next" })).not.toBeDisabled();

        await user.click(screen.getByRole("button", { name: "Next" }));
        expect(screen.getByTestId("markdown")).toHaveTextContent("README2");
    });
});
