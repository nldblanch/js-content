import { useEffect } from 'react';
import { challenges } from '@CLI/lib/challenges';
import { useChallengeStore } from '@CLI/store/useChallengeStore';
import { useAppStore } from '@CLI/store/useAppStore';
import { CheckCircle2, Circle, ChevronRight, Lightbulb } from 'lucide-react';

export default function Challenges() {
  const results = useChallengeStore((state) => state.results);
  const runChecks = useChallengeStore((state) => state.runChecks);
  const gitRevision = useAppStore((state) => state.gitRevision);

  // Set the browser URL when this page becomes the active tab
  useEffect(() => {
    useAppStore.getState().setBrowserUrl('https://localhost:3000/home');
  }, []);

  // Re-run checks on mount and whenever gitRevision changes
  // (gitRevision bumps after push/createRepo, covering browser-side actions)
  useEffect(() => {
    runChecks();
  }, [gitRevision, runChecks]);

  return (
    <div className="p-6 max-w-4xl">
      <h1 className="text-2xl font-bold mb-2">Welcome to GitSim!</h1>
      <p className="text-sm text-slate-600 mb-6">
        This tool is designed to get you familiar with basic shell commands and learning how to safely work within a
        Git-based repository. Complete the challenges below using the terminal on the right. Your progress is tracked
        automatically!
      </p>

      <div className="grid gap-5">
        <div className="px-4 py-2 bg-red-200 rounded-lg shadow-md">
          <p className="font-semibold">
            DEBUGGING: Run the command <code className="bg-red-100 px-1 rounded">clearFs</code> to reset the file system
            and remote repo.
          </p>
        </div>

        {challenges.map((challenge) => {
          const stepResults = results[challenge.id] ?? [];
          const completedCount = stepResults.filter(Boolean).length;
          const totalSteps = challenge.steps.length;
          const isComplete = completedCount === totalSteps;

          return (
            <ChallengeCard
              key={challenge.id}
              challenge={challenge}
              stepResults={stepResults}
              completedCount={completedCount}
              totalSteps={totalSteps}
              isComplete={isComplete}
            />
          );
        })}
      </div>
    </div>
  );
}

interface ChallengeCardProps {
  challenge: (typeof challenges)[number];
  stepResults: boolean[];
  completedCount: number;
  totalSteps: number;
  isComplete: boolean;
}

function ChallengeCard({ challenge, stepResults, completedCount, totalSteps, isComplete }: ChallengeCardProps) {
  return (
    <div
      className={`
      p-4 rounded-lg border transition-colors
      ${isComplete ? 'bg-emerald-50 border-emerald-300' : 'bg-slate-50 border-slate-200'}
    `}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          {isComplete ? (
            <CheckCircle2 size={20} className="text-emerald-500" />
          ) : (
            <ChevronRight size={20} className="text-slate-400" />
          )}
          {challenge.title}
        </h3>
        <span
          className={`text-xs font-mono px-2 py-1 rounded-full ${
            isComplete ? 'bg-emerald-200 text-emerald-800' : 'bg-slate-200 text-slate-600'
          }`}
        >
          {completedCount}/{totalSteps}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-slate-600 mb-3 ml-7">{challenge.description}</p>

      {/* Steps */}
      <div className="space-y-1.5 ml-7">
        {challenge.steps.map((step, i) => (
          <div key={i} className="flex items-center gap-2 text-sm">
            {stepResults[i] ? (
              <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
            ) : (
              <Circle size={16} className="text-slate-300 shrink-0" />
            )}
            <span className={stepResults[i] ? 'text-slate-500 line-through' : 'text-slate-700'}>{step.label}</span>
          </div>
        ))}
      </div>

      {!isComplete && challenge.hints.length > 0 && (
        <div className="mt-3 ml-7 p-2 bg-amber-50 border border-amber-200 rounded text-xs text-amber-800">
          <div className="flex items-center gap-1 font-semibold mb-1">
            <Lightbulb size={12} />
            Hints
          </div>
          <ul className="list-disc list-inside space-y-0.5">
            {challenge.hints.map((hint, i) => (
              <li key={i}>{hint}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
