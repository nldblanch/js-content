import { useMemo } from "react";

export type ChallengeInstruction = {
    slug: string;
    title: string;
    order: number;
    files: Array<{ title: string; markdown: string }>;
};

export function getChallengeDirFromPath(path: string): string {
    const normalized = path.replace(/\\/g, "/");
    const match = normalized.match(/(?:^|\/)(?:docs)(?:\/)([^/]+)(?:\/)/);
    return match?.[1] ?? normalized.split("/").slice(-2, -1)[0] ?? "unknown";
}

export function getOrderFromFolder(folder: string): number {
    const match = folder.match(/^(\d+)\b/);
    return match ? Number(match[1]) : Number.MAX_SAFE_INTEGER;
}

export function getOrderFromPath(path: string): number {
    const folder = getChallengeDirFromPath(path);
    return getOrderFromFolder(folder);
}

export function getFileNameFromPath(path: string): string {
    const normalized = path.replace(/\\/g, "/");
    return normalized.split("/").slice(-1)[0] ?? "unknown.md";
}

export const formatFileName = (fileName: string): string => {
    const base = fileName.replace(/\.md$/i, "");
    const noNumbers = base.replace(/\d+/g, "");
    return noNumbers.replace(/[-_]+/g, " ").trim();
}

const FILE_PRIORITY: Record<string, number> = {
    "instructions.md": 0,
    "readme.md": 1,
    "function_documentation.md": 2,
    "function-documentation.md": 2,
    "extra_guide.md": 3,
    "extra-guide.md": 3,
    "solution.md": 4,
};

export function sortFiles(aName: string, bName: string): number {
    const aKey = aName.toLowerCase();
    const bKey = bName.toLowerCase();
    const aPri = FILE_PRIORITY[aKey] ?? 100;
    const bPri = FILE_PRIORITY[bKey] ?? 100;
    return aPri - bPri || aKey.localeCompare(bKey);
}
type GlobModules = Record<string, string>;

export const challengeDocsGlobber = {
    glob(): GlobModules {
        return import.meta.glob<string>("../../../../docs/*/**/*.md", {
            query: "?raw",
            import: "default",
            eager: true,
        }) as unknown as GlobModules;
    },
};

export function globChallengeDocs(): GlobModules {
    return challengeDocsGlobber.glob();
}

export function buildChallengeInstructions(modules: GlobModules): ChallengeInstruction[] {
    const docsByDir = new Map<
        string,
        Array<{ fileName: string; title: string; markdown: string }>
    >();

    for (const [sourcePath, markdown] of Object.entries(modules)) {
        const slug = getChallengeDirFromPath(sourcePath);
        const fileName = getFileNameFromPath(sourcePath);

        const entry = { fileName, title: formatFileName(fileName), markdown };
        const list = docsByDir.get(slug);
        if (list) list.push(entry);
        else docsByDir.set(slug, [entry]);
    }

    const items: ChallengeInstruction[] = Array.from(docsByDir.entries()).map(
        ([slug, files]) => {
            const sortedFiles = [...files].sort((a, b) => sortFiles(a.fileName, b.fileName));

            return {
                slug,
                title: formatFileName(slug),
                order: getOrderFromFolder(slug),
                files: sortedFiles.map((f) => ({ title: f.title, markdown: f.markdown })),
            };
        }
    );

    items.sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
    return items;
}
export function useChallengeInstructions(): ChallengeInstruction[] {
    return useMemo(() => {
        const modules = challengeDocsGlobber.glob();

        return buildChallengeInstructions(modules);
    }, []);
}

export default useChallengeInstructions;