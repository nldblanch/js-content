import { describe, expect, test } from "vitest";
import { slugify } from "./slugify";

describe("slugify", () => {
    test("trims and lowercases", () => {
        expect(slugify("  Hello World  ")).toBe("hello-world");
    });

    test("removes zero-width characters", () => {
        expect(slugify("he\u200Bllo\u200D world\uFEFF")).toBe("hello-world");
    });

    test("removes underscores", () => {
        expect(slugify("hello_world")).toBe("helloworld");
        expect(slugify("__hello__world__")).toBe("helloworld");
    });

    test("removes punctuation but keeps hyphens", () => {
        expect(slugify("Hi, Human!")).toBe("hi-human");
        expect(slugify("rock-paper-scissors")).toBe("rock-paper-scissors");
    });

    test("collapses whitespace to hyphens and collapses repeated hyphens", () => {
        expect(slugify("a   b\n\t c")).toBe("a-b-c");
        expect(slugify("a---b")).toBe("a-b");
        expect(slugify("a - - b")).toBe("a-b");
    });

    test("strips leading/trailing hyphens", () => {
        expect(slugify("---Hello---")).toBe("hello");
        expect(slugify("  - hello -  ")).toBe("hello");
    });

    test("returns empty string when nothing remains", () => {
        expect(slugify("   ")).toBe("");
        expect(slugify("!!!___###")).toBe("");
    });
});