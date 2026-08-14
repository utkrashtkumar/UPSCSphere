'use client';

import React from 'react';

interface QuestionPaletteProps {
  totalQuestions: number;
  currentIndex: number;
  answers: Record<string, { selectedOption: number | null; isMarkedForReview: boolean }>;
  questionIds: string[];
  onSelectIndex: (index: number) => void;
}

export default function QuestionPalette({
  totalQuestions,
  currentIndex,
  answers,
  questionIds,
  onSelectIndex,
}: QuestionPaletteProps) {
  let answeredCount = 0;
  let reviewCount = 0;
  let unattemptedCount = 0;

  questionIds.forEach((id) => {
    const ans = answers[id];
    if (ans?.isMarkedForReview) {
      reviewCount++;
    } else if (ans?.selectedOption !== null && ans?.selectedOption !== undefined) {
      answeredCount++;
    } else {
      unattemptedCount++;
    }
  });

  return (
    <div className="liquid-card rounded-2xl p-5 border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-slate-900/90 shadow-sm">
      <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/10 mb-4">
        <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
          <span>Question Palette</span>
          <span className="text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-normal">
            {currentIndex + 1} of {totalQuestions}
          </span>
        </h3>
      </div>

      {/* Legend summary pills */}
      <div className="grid grid-cols-3 gap-2 mb-4 text-[11px]">
        <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          <span>{answeredCount} Done</span>
        </div>
        <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-400">
          <span className="w-2 h-2 rounded-full bg-amber-500"></span>
          <span>{reviewCount} Review</span>
        </div>
        <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">
          <span className="w-2 h-2 rounded-full bg-slate-400"></span>
          <span>{unattemptedCount} Left</span>
        </div>
      </div>

      {/* Question Number Buttons Grid */}
      <div className="grid grid-cols-5 gap-2 max-h-64 overflow-y-auto pr-1">
        {questionIds.map((id, index) => {
          const ans = answers[id];
          const isAnswered = ans?.selectedOption !== null && ans?.selectedOption !== undefined;
          const isReview = ans?.isMarkedForReview;
          const isCurrent = index === currentIndex;

          let btnClass = 'bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-amber-500/40';
          if (isReview) {
            btnClass = 'bg-amber-500/20 text-amber-800 dark:text-amber-300 border-amber-500/50 font-bold';
          } else if (isAnswered) {
            btnClass = 'bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border-emerald-500/50 font-bold';
          }

          return (
            <button
              key={id}
              onClick={() => onSelectIndex(index)}
              className={`h-9 rounded-lg text-xs font-semibold border flex items-center justify-center transition-all relative ${btnClass} ${
                isCurrent ? 'ring-2 ring-amber-500 ring-offset-2 ring-offset-white dark:ring-offset-slate-950 scale-105' : ''
              }`}
            >
              {index + 1}
              {isReview && <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 rounded-full bg-amber-500"></span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}
