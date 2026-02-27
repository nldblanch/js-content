import { useMemo } from "react";

export type Contributor = {
    name: string;
    contributions: number;
};

export function useTopContributors(
    commitStats: Record<string, number>,
    options?: { minContributions?: number; limit?: number },
) {
    const minContributions = options?.minContributions ?? 2;
    const limit = options?.limit ?? 3;

    const contributors = useMemo<Contributor[]>(() => {
        return Object.entries(commitStats)
            .filter(([, contributions]) => contributions >= minContributions)
            .sort(([, a], [, b]) => b - a)
            .slice(0, limit)
            .map(([name, contributions]) => ({ name, contributions }));
    }, [commitStats, minContributions, limit]);

    const totalContributions = useMemo(() => {
        return contributors.reduce((sum, contributor) => sum + contributor.contributions, 0);
    }, [contributors]);

    return { contributors, totalContributions };
}
