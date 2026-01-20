import { useMemo } from "react";

export type Particle = {
    id: string;
    sizePx: number;
    leftPct: number;
    topPct: number;
    animationDelayS: number;
    animationDurationS: number;
};

function mulberry32(seed: number) {
    return function () {
        let t = (seed += 0x6d2b79f5);
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

function createParticles(seed: number, count: number): Particle[] {
    const rand = mulberry32(seed);
    return Array.from({ length: count }, (_, index) => ({
        id: `p-${index}`,
        sizePx: rand() * 15 + 5,
        leftPct: rand() * 100,
        topPct: rand() * 100,
        animationDelayS: rand() * 15,
        animationDurationS: rand() * 10 + 10,
    }));
}

export function useParticles(options?: { seed?: number; count?: number }) {
    const seed = options?.seed ?? 1337;
    const count = options?.count ?? 30;

    return useMemo<Particle[]>(() => createParticles(seed, count), [seed, count]);
}
