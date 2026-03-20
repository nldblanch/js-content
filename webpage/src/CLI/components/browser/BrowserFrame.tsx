import React, { useState, useCallback, useMemo } from "react";
import {
  Minus,
  Square,
  X,
  RotateCw,
  ChevronLeft,
  ChevronRight,
  Lock,
} from "lucide-react";
import { useAppStore } from "@CLI/store/useAppStore";

// Wrapper to provide tab metadata
interface BrowserTabProps {
  tabTitle: string;
  children: React.ReactNode;
}

export function BrowserTab({ children }: BrowserTabProps) {
  return <>{children}</>;
}

function getTabTitle(child: React.ReactElement, index: number): string {
  const props = child.props as Record<string, unknown>;

  // Check for explicit tabTitle prop first
  if (typeof props.tabTitle === "string") {
    return props.tabTitle;
  }

  // Minification causes issues with relying on function names, so we prioritize explicit titles.
  // Consider removing or refactoring these fallbacks

  // If no explicit title, try to infer from the type
  const type = child.type;

  // If the type is a string, it's a native HTML element (e.g. 'div'), so we can use that as the title
  if (typeof type === "string") return type;

  // If the type is a function, it might be a React component. We can check for displayName or name.
  if (typeof type === "function") {
    const fn = type as ((...args: unknown[]) => unknown) & {
      displayName?: string;
      name?: string;
    };
    return fn.displayName || fn.name || `Tab ${index + 1}`;
  }

  // If the type is an object, it might be a React.memo or React.forwardRef component. We can check for displayName.
  if (typeof type === "object" && type !== null) {
    const obj = type as Record<string, unknown>;
    if (typeof obj.displayName === "string") return obj.displayName;
  }

  // Fallback to generic title
  return `Tab ${index + 1}`;
}

function BrowserFrame({ children }: { children: React.ReactNode }) {
  const browserUrl = useAppStore((state) => state.browserUrl);

  const childArray = useMemo(
    () => React.Children.toArray(children).filter(React.isValidElement),
    [children],
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const safeIndex = Math.min(activeIndex, childArray.length - 1);

  // useCallback will return a memoized version of the callback that only changes if one of the inputs has changed
  const selectTab = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const handleTabClick = useCallback(
    (index: number) => () => {
      selectTab(index);
    },
    [selectTab],
  );

  return (
    <div className="w-full mx-auto overflow-hidden rounded-xl border border-slate-700 shadow-2xl bg-slate-900 h-full flex flex-col">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 pt-3 bg-slate-800 select-none">
        <div className="flex items-center gap-1 overflow-x-auto">
          {childArray.map((child, index) => {
            const isActive = index === safeIndex;
            const title = getTabTitle(child as React.ReactElement, index);

            return (
              <div
                key={index}
                onClick={handleTabClick(index)}
                className={`
                  group flex items-center gap-2 px-4 py-2 text-xs rounded-t-lg cursor-pointer transition-colors shrink-0
                  ${
                    isActive
                      ? "bg-slate-900 text-slate-300 border-t border-x border-slate-700"
                      : "text-slate-500 hover:bg-slate-700/50"
                  }
                `}
              >
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0" />
                )}
                <span className="truncate max-w-[140px]">{title}</span>
              </div>
            );
          })}
        </div>

        {/* Window Controls */}
        <div className="flex items-center gap-3 mb-2 shrink-0">
          <Minus
            size={14}
            className="text-slate-500 hover:text-white cursor-pointer"
          />
          <Square
            size={12}
            className="text-slate-500 hover:text-white cursor-pointer"
          />
          <X
            size={14}
            className="text-slate-500 hover:text-red-400 cursor-pointer"
          />
        </div>
      </div>

      {/* Address Bar */}
      <div className="flex items-center gap-4 px-4 py-2 bg-slate-900 border-b border-slate-800">
        <div className="flex items-center gap-3 text-slate-400">
          <ChevronLeft
            size={18}
            className="hover:text-white cursor-pointer opacity-50"
          />
          <ChevronRight
            size={18}
            className="hover:text-white cursor-pointer opacity-50"
          />
          <RotateCw size={16} className="hover:text-white cursor-pointer" />
        </div>

        <div className="flex-1 flex items-center gap-2 px-3 py-1.5 bg-slate-800 rounded-full border border-slate-700 text-slate-400 text-sm focus-within:border-blue-500/50 transition-all">
          <Lock size={12} className="text-emerald-500" />
          <span className="flex-1 truncate">{browserUrl}</span>
        </div>
      </div>

      {/* Content Area */}
      <div className="bg-white flex-1 overflow-auto text-slate-900">
        {childArray[safeIndex]}
      </div>
    </div>
  );
}

export default BrowserFrame;
