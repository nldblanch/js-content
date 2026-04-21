import { describe, expect, test, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import * as challenge from "./useChallengeInstructions";

import {
    buildChallengeInstructions,
    formatFileName,
    getFileNameFromPath,
    getOrderFromPath,
    getChallengeDirFromPath,
    sortFiles,
    getOrderFromFolder
} from "./useChallengeInstructions";

describe("formatFileName", () => {
    test("formats file name correctly", () => {
        expect(formatFileName("01-readme.md")).toBe("readme");
    });

    test("handles underscores and hyphens", () => {
        expect(formatFileName("function_documentation.md")).toBe("function documentation");
        expect(formatFileName("function-documentation.md")).toBe("function documentation");
    });
});

describe("getFileNameFromPath", () => {
    test("extracts file name from path", () => {
        expect(getFileNameFromPath("/path/to/01-readme.md")).toBe("01-readme.md");
    });
});

describe("getOrderFromFolder", () => {
    test("extracts order from folder", () => {
        expect(getOrderFromFolder("01-challenge")).toBe(1);
        expect(getOrderFromFolder("10-challenge")).toBe(10);
        expect(getOrderFromFolder("challenge")).toBe(Number.MAX_SAFE_INTEGER);
    });
});

describe("getOrderFromPath", () => {
    test("extracts order from path", () => {
        expect(getOrderFromPath("/path/to/01-challenge/instructions.md")).toBe(1);
        expect(getOrderFromPath("/path/to/10-challenge/instructions.md")).toBe(10);
        expect(getOrderFromPath("/path/to/challenge/instructions.md")).toBe(Number.MAX_SAFE_INTEGER);
    });
});

describe("getChallengeDirFromPath", () => {
    test("extracts challenge directory from docs path", () => {
        expect(getChallengeDirFromPath("/x/docs/01-challenge/instructions.md")).toBe("01-challenge");
    });

    test("works with windows paths", () => {
        expect(getChallengeDirFromPath("C:\\x\\docs\\02-advanced\\readme.md")).toBe("02-advanced");
    });

    test("fallback extracts parent folder when docs segment is missing", () => {
        expect(getChallengeDirFromPath("/path/to/challenge/instructions.md")).toBe("challenge");
    });
});

describe("sortFiles", () => {
    test("sorts files based on priority and name", () => {
        const files = [
            "solution.md",
            "readme.md",
            "extra_guide.md",
            "instructions.md",
            "function_documentation.md",
        ];
        const sorted = [...files].sort(sortFiles);
        expect(sorted).toEqual([
            "instructions.md",
            "readme.md",
            "function_documentation.md",
            "extra_guide.md",
            "solution.md",
        ]);
    });
});

describe("buildChallengeInstructions", () => {
    test("groups by challenge dir, sorts challenges by order, and sorts files by priority", () => {
        const modules: Record<string, string> = {
            "../../../../docs/02-advanced/solution.md": "sol2",
            "../../../../docs/02-advanced/readme.md": "read2",
            "../../../../docs/02-advanced/function_documentation.md": "func2",
            "../../../../docs/01-intro/readme.md": "read1",
            "../../../../docs/01-intro/instructions.md": "inst1",
        };

        const items = buildChallengeInstructions(modules);

        expect(items.map((i) => i.slug)).toEqual(["01-intro", "02-advanced"]);
        expect(items.map((i) => i.order)).toEqual([1, 2]);

        expect(items[0]?.title).toBe("intro");
        expect(items[0]?.files.map((f) => f.title)).toEqual(["instructions", "readme"]);
        expect(items[0]?.files.map((f) => f.markdown)).toEqual(["inst1", "read1"]);

        expect(items[1]?.files.map((f) => f.title)).toEqual([
            "readme",
            "function documentation",
            "solution",
        ]);
        expect(items[1]?.files.map((f) => f.markdown)).toEqual(["read2", "func2", "sol2"]);
    });
});
describe("useChallengeInstructions (hook)", () => {
    test("returns built instructions and memoizes the glob call", () => {
        const modules: Record<string, string> = {
            "../../../../docs/02-advanced/solution.md": "sol2",
            "../../../../docs/02-advanced/readme.md": "read2",
            "../../../../docs/02-advanced/function_documentation.md": "func2",
            "../../../../docs/01-intro/readme.md": "read1",
            "../../../../docs/01-intro/instructions.md": "inst1",
        };

        const globSpy = vi
            .spyOn(challenge.challengeDocsGlobber, "glob")
            .mockReturnValue(modules);

        const { result, rerender } = renderHook(() => challenge.useChallengeInstructions());

        const initialCalls = globSpy.mock.calls.length;
        expect(initialCalls).toBeGreaterThan(0);

        expect(result.current).toEqual(challenge.buildChallengeInstructions(modules));

        rerender();

        expect(globSpy.mock.calls.length).toBe(initialCalls);
        expect(result.current).toEqual(challenge.buildChallengeInstructions(modules));
    });
});