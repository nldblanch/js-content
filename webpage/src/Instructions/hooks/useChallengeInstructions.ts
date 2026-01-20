import { useMemo } from "react";

export type ChallengeInstruction = {
    slug: string;
    title: string;
    order: number;
    markdown: string;
    sourcePath: string;
};

function getOrderFromPath(path: string): number {
    const folder = path.split("/").slice(-2, -1)[0] ?? "";
    const match = folder.match(/^(\d+)\b/);
    return match ? Number(match[1]) : Number.MAX_SAFE_INTEGER;
}

function getSlugFromPath(path: string): string {
    const folder = path.split("/").slice(-2, -1)[0] ?? "unknown";
    return folder
        .toLowerCase()
        .replace(/&/g, "and")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
}

function getTitleFromMarkdown(md: string, fallback: string): string {
    const firstHeading =
        md
            .split("\n")
            .map((l) => l.trim())
            .find((l) => l.startsWith("# ")) ?? "";
    return firstHeading ? firstHeading.replace(/^#\s+/, "").trim() : fallback;
}

export function useChallengeInstructions(): ChallengeInstruction[] {
    return useMemo(() => {
        const modules = import.meta.glob<string>("@repo/challenges/**/README.md", {
            query: "?raw",
            import: "default",
            eager: true,
        });

        const items = Object.entries(modules).map(([sourcePath, markdown]) => {
            const order = getOrderFromPath(sourcePath);
            const slug = getSlugFromPath(sourcePath);
            const fallbackTitle = sourcePath.split("/").slice(-2, -1)[0] ?? slug;
            const title = getTitleFromMarkdown(markdown, fallbackTitle);

            return { slug, title, order, markdown, sourcePath };
        });

        items.sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
        return items;
    }, []);
}