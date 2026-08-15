'use client';

import React from 'react';
import { Check, X, Ban } from 'lucide-react';

// UPSC standard option labels — exactly as on OMR sheets
const UPSC_LABELS = ['(a)', '(b)', '(c)', '(d)'];

interface OptionButtonProps {
  index: number;
  letter: string;
  text: string;
  isSelected: boolean;
  isEliminated: boolean;
  correctAnswer: number;
  showInstantFeedback: boolean; // if user is in instant feedback mode and has selected an answer
  onSelect: (index: number) => void;
  onToggleEliminate: (index: number) => void;
}

export default function OptionButton({
  index,
  text,
  isSelected,
  isEliminated,
  correctAnswer,
  showInstantFeedback,
  onSelect,
  onToggleEliminate,
}: OptionButtonProps) {
  const isCorrect = index === correctAnswer;
  const label = UPSC_LABELS[index] ?? `(${index + 1})`;

  // --- Style logic ---
  let containerStyle =
    'bg-white/90 dark:bg-slate-900/80 border-slate-200 dark:border-white/10 hover:border-orange-400/60 dark:hover:border-orange-500/40 text-slate-800 dark:text-slate-200 shadow-sm hover:shadow-md hover:bg-orange-50/40 dark:hover:bg-orange-500/5';
  let badgeStyle =
    'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-300 dark:border-white/10 font-mono';

  if (showInstantFeedback) {
    if (isCorrect) {
      containerStyle =
        'bg-emerald-50/95 dark:bg-emerald-950/50 border-emerald-500 text-emerald-900 dark:text-emerald-100 ring-1 ring-emerald-500/40 shadow-md';
      badgeStyle = 'bg-emerald-600 text-white border-emerald-500 font-bold';
    } else if (isSelected && !isCorrect) {
      containerStyle =
        'bg-rose-50/95 dark:bg-rose-950/50 border-rose-500 text-rose-900 dark:text-rose-100 ring-1 ring-rose-500/40 shadow-md';
      badgeStyle = 'bg-rose-600 text-white border-rose-500 font-bold';
    }
  } else if (isSelected) {
    containerStyle =
      'bg-orange-50/95 dark:bg-orange-500/15 border-orange-500 text-slate-900 dark:text-orange-50 ring-1 ring-orange-500/50 shadow-md';
    badgeStyle = 'bg-orange-500 text-white border-orange-400 font-bold';
  }

  return (
    <div
      className={`relative flex items-center group transition-all duration-150 ${
        isEliminated ? 'opacity-35 pointer-events-none' : ''
      }`}
    >
      <button
        onClick={() => onSelect(index)}
        disabled={isEliminated || (showInstantFeedback && !isSelected && !isCorrect ? false : false)}
        className={`w-full text-left px-5 py-4 sm:px-6 sm:py-5 rounded-2xl border flex items-start gap-4 transition-all duration-150 ${containerStyle} ${
          isEliminated ? 'cursor-not-allowed' : 'cursor-pointer'
        }`}
      >
        {/* UPSC-style (a) (b) (c) (d) badge */}
        <span
          className={`min-w-[2.5rem] h-9 rounded-xl text-sm flex items-center justify-center shrink-0 border transition-colors ${badgeStyle}`}
        >
          {showInstantFeedback && isCorrect ? (
            <Check className="w-5 h-5 stroke-[3]" />
          ) : showInstantFeedback && isSelected && !isCorrect ? (
            <X className="w-5 h-5 stroke-[3]" />
          ) : (
            <span className="font-bold tracking-tight">{label}</span>
          )}
        </span>

        {/* Option text */}
        <span
          className={`text-sm sm:text-base leading-relaxed flex-1 pt-1 ${
            isEliminated ? 'line-through text-slate-400 dark:text-slate-600' : ''
          }`}
        >
          {text}
        </span>
      </button>

      {/* 50:50 Elimination Strike Button — appears on hover */}
      {!showInstantFeedback && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleEliminate(index);
          }}
          title={
            isEliminated
              ? 'Restore this option'
              : 'Strike out (50:50 elimination — UPSC technique)'
          }
          className={`absolute right-3 p-1.5 rounded-xl text-xs transition-all ${
            isEliminated
              ? 'bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-400 opacity-100 border border-rose-500/30 pointer-events-auto'
              : 'opacity-0 group-hover:opacity-100 bg-slate-100 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-300 hover:bg-rose-50 dark:hover:bg-rose-950/50 shadow-sm border border-transparent hover:border-rose-300 dark:hover:border-rose-700/50'
          }`}
        >
          <Ban className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
}
