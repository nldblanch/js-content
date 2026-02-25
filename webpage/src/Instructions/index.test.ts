import { describe, expect, test } from "vitest";
import InstructionsIndex from "./index";
import InstructionsPage from "./page";

describe("Instructions index", () => {
    test("default export is InstructionsPage", () => {
        expect(InstructionsIndex).toBe(InstructionsPage);
    });
});
