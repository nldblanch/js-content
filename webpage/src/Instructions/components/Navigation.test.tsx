import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { MemoryRouter } from "react-router";
import { Navigation } from "./Navigation";

const mocks = vi.hoisted(() => ({
    useChallengeInstructionsMock: vi.fn(),
}));

vi.mock("../hooks/useChallengeInstructions", async () => {
    const actual = await vi.importActual<typeof import("../hooks/useChallengeInstructions")>(
        "../hooks/useChallengeInstructions"
    );

    return {
        ...actual,
        useChallengeInstructions: mocks.useChallengeInstructionsMock,
    };
});

vi.mock("./FileAccordion", () => {
    return {
        FileAccordion: ({ slug, title }: { slug: string; title: string }) => (
            <div data-testid="accordion">{slug}:{title}</div>
        ),
    };
});

describe("Navigation", () => {
    test("renders static links and one accordion per challenge", () => {
        mocks.useChallengeInstructionsMock.mockReturnValue([
            { slug: "01-intro", title: "intro", order: 1, files: [] },
            { slug: "02-advanced", title: "advanced", order: 2, files: [] },
        ]);

        render(
            <MemoryRouter initialEntries={["/instructions"]}>
                <Navigation />
            </MemoryRouter>
        );

        expect(screen.getByRole("link", { name: "Go Home" })).toHaveAttribute("href", "/");
        expect(screen.getByRole("link", { name: "Overview" })).toHaveAttribute(
            "href",
            "/instructions"
        );

        const accordions = screen.getAllByTestId("accordion");
        expect(accordions).toHaveLength(2);
        expect(accordions[0]?.textContent).toBe("01-intro:intro");
        expect(accordions[1]?.textContent).toBe("02-advanced:advanced");
    });
});
