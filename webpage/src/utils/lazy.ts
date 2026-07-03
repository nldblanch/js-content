import { lazy as reactLazy } from 'react';
import type { ComponentType } from 'react';

type LazyModule<T extends ComponentType<unknown>> = { default: T };

const delay = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

/**
 * Wraps `React.lazy` but ensures the import takes at least `minDelayMs`.
 * Useful to avoid 1-frame loader flashes when chunks resolve instantly.
 */
export function lazyWithMinDelay<T extends ComponentType<unknown>>(
  factory: () => Promise<LazyModule<T>>,
  minDelayMs: number,
) {
  return reactLazy(() => Promise.all([factory(), delay(minDelayMs)]).then(([mod]) => mod));
}

/** Default min delay (300ms) convenience wrapper. */
export function lazyWithDelay<T extends ComponentType<unknown>>(factory: () => Promise<LazyModule<T>>, delayMs = 300) {
  return lazyWithMinDelay(factory, delayMs);
}
