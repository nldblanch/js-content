import React from 'react';
import { Minus, Square, X, RotateCw, ChevronLeft, ChevronRight, Lock } from 'lucide-react';
import { useAppStore } from '../../store/useAppStore';

function BrowserFrame({ children }: { children: React.ReactNode }) {

  const browserUrl = useAppStore(state => state.browserUrl);

  return (
    <div className="w-full max-w-4xl mx-auto overflow-hidden rounded-xl border border-slate-700 shadow-2xl bg-slate-900 h-full">
      {/* Top Bar: Tabs & Window Controls */}
      <div className="flex items-center justify-between px-4 pt-3 bg-slate-800 select-none">
        <div className="flex items-center gap-2">

          {/* Active Tab */}
          <div className="px-4 py-2 bg-slate-900 text-slate-300 text-xs rounded-t-lg border-t border-x border-slate-700 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-400"></span>
            New Project
            <X size={12} className="ml-2 opacity-50 hover:opacity-100 cursor-pointer" />
          </div>

          {/* Placeholder Secondary Tab */}
          <div className="px-4 py-2 text-slate-500 text-xs flex items-center gap-2 hover:bg-slate-700/50 rounded-t-lg transition-colors cursor-pointer">
            New Tab
          </div>

        </div>

        {/* Window Controls */}
        <div className="flex items-center gap-3 mb-2">
          <Minus size={14} className="text-slate-500 hover:text-white cursor-pointer" />
          <Square size={12} className="text-slate-500 hover:text-white cursor-pointer" />
          <X size={14} className="text-slate-500 hover:red-400 cursor-pointer" />
        </div>
      </div>

      {/* Address Bar Row */}
      <div className="flex items-center gap-4 px-4 py-2 bg-slate-900 border-b border-slate-800">
        <div className="flex items-center gap-3 text-slate-400">
          <ChevronLeft size={18} className="hover:text-white cursor-pointer opacity-50" />
          <ChevronRight size={18} className="hover:text-white cursor-pointer opacity-50" />
          <RotateCw size={16} className="hover:text-white cursor-pointer" />
        </div>

        <div className="flex-1 flex items-center gap-2 px-3 py-1.5 bg-slate-800 rounded-full border border-slate-700 text-slate-400 text-sm focus-within:border-blue-500/50 transition-all">
          <Lock size={12} className="text-emerald-500" />

          <span className="flex-1 truncate">{browserUrl}</span>

        </div>
      </div>

      {/* Content Area */}
      <div className="bg-white h-full text-slate-900">
        {children}
      </div>
    </div>
  );
}

export default BrowserFrame;
