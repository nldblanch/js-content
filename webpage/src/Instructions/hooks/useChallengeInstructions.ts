import { useMemo } from "react";

export type ChallengeInstruction = {
    slug: string;
    title: string;
    order: number;
    files: Array<{ title: string; markdown: string }>;
};

function getChallengeDirFromPath(path: string): string {
    const normalized = path.replace(/\\/g, "/");
    const match = normalized.match(/(?:^|\/)(?:docs)(?:\/)([^/]+)(?:\/)/);
    return match?.[1] ?? normalized.split("/").slice(-2, -1)[0] ?? "unknown";
}

function getOrderFromPath(path: string): number {
    const folder = getChallengeDirFromPath(path);
    const match = folder.match(/^(\d+)\b/);
    return match ? Number(match[1]) : Number.MAX_SAFE_INTEGER;
}

function getFileNameFromPath(path: string): string {
    const normalized = path.replace(/\\/g, "/");
    return normalized.split("/").slice(-1)[0] ?? "unknown.md";
}

const formatFileName = (fileName: string): string => {
    const base = fileName.replace(/\.md$/i, "");
    const noNumbers = base.replace(/\d+/g, "");
    return noNumbers.split('-').join(" ").trim();
}

const FILE_PRIORITY: Record<string, number> = {
    "instructions.md": 0,
    "readme.md": 1,
    "function_documentation.md": 2,
    "extra_guide.md": 3,
    "solution.md": 4,
};

function sortFiles(aName: string, bName: string): number {
    const aKey = aName.toLowerCase();
    const bKey = bName.toLowerCase();
    const aPri = FILE_PRIORITY[aKey] ?? 100;
    const bPri = FILE_PRIORITY[bKey] ?? 100;
    return aPri - bPri || aKey.localeCompare(bKey);
}


export function useChallengeInstructions(): ChallengeInstruction[] {
    return useMemo(() => {
        const modules = import.meta.glob<string>("@repo/docs/*/**/*.md", {
            query: "?raw",
            import: "default",
            eager: true,
        });

        const docsByDir = new Map<
            string,
            Array<{ title: string; markdown: string }>
        >();

        for (const [sourcePath, markdown] of Object.entries(modules)) {
            const directoryName = getChallengeDirFromPath(sourcePath);
            const fileName = getFileNameFromPath(sourcePath);
            const entry = { title: formatFileName(fileName), markdown };
            const list = docsByDir.get(directoryName);
            if (list) list.push(entry);
            else docsByDir.set(directoryName, [entry]);
        }

        const items: ChallengeInstruction[] = Array.from(docsByDir.entries()).map(
            ([slug, files]) => {
                const sortedFiles = [...files].sort((a, b) => sortFiles(a.title, b.title));
                const order = getOrderFromPath(slug);
                const title = formatFileName(slug);
                return {
                    slug,
                    title,
                    order,
                    files: sortedFiles.map((f) => { 
                        const accessor = `../docs/${slug}/${f.title.split(' ').join('-')}.md`;
                        const markdown = modules[accessor] as string;
                        return { title: formatFileName(f.title), markdown };
                    }),
                };
            }
        );

        return items;
    }, []);
}