import { create } from 'zustand';
import { challenges } from '../lib/challenges';

interface ChallengeState {
  /**
   * Completion status per challenge, per step.
   * e.g. { 'basic-navigation': [true, true, false], 'git-basics': [false, false, false] }
   */
  results: Record<string, boolean[]>;

  /** Re-evaluate every step's test function and update results */
  runChecks: () => Promise<void>;
}

export const useChallengeStore = create<ChallengeState>((set) => ({
  results: Object.fromEntries(
    challenges.map(c => [c.id, c.steps.map(() => false)])
  ),

  runChecks: async () => {
    const updated: Record<string, boolean[]> = {};

    // Run all challenge checks in parallel
    await Promise.all(
      challenges.map(async (challenge) => {
        const stepResults = await Promise.all(
          challenge.steps.map(async (step) => {
            try {
              return await step.test();
            } catch {
              return false;
            }
          })
        );
        updated[challenge.id] = stepResults;
      })
    );

    set({ results: updated });
  },
}));
