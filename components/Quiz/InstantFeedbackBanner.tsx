'use client';

import React from 'react';
import Link from 'next/link';
import { CheckCircle2, XCircle, BookOpen, Lightbulb, Bookmark, Lock, ArrowRight } from 'lucide-react';
import { Question } from '@/lib/types';
import { toggleBookmark, getBookmarks } from '@/lib/localDB';
import { useAuth } from '@/lib/authContext';

interface InstantFeedbackBannerProps {
  question: Question;
  selectedOption: number | null;
  onNext?: () => void;
  isLastQuestion?: boolean;
}

export default function InstantFeedbackBanner({
  question,
  selectedOption,
  onNext,
  isLastQuestion = false,
}: InstantFeedbackBannerProps) {
  const { user } = useAuth();
  const [isBookmarked, setIsBookmarked] = React.useState(false);

  React.useEffect(() => {
    const bms = getBookmarks();
    setIsBookmarked(bms.includes(question.id));
  }, [question.id]);

  const handleBookmarkToggle = () => {
    const state = toggleBookmark(question.id);
    setIsBookmarked(state);
  };

  if (selectedOption === null) return null;

  if (!user) {
    return (
      <div className="mt-6 rounded-2xl border border-orange-500/40 liquid-card bg-slate-900/90 dark:bg-slate-950 p-6 text-center space-y-4 shadow-xl animate-slide-up">
        <div className="w-12 h-12 rounded-2xl bg-orange-500/20 text-orange-400 flex items-center justify-center mx-auto border border-orange-500/30">
          <Lock className="w-6 h-6" />
        </div>
        <div className="space-y-1">
          <h3 className="font-bold text-base text-white">Sign In to View Instant Citations & Solution</h3>
          <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
            Detailed textbook citations ({question.bookReference.bookName}), page numbers, elimination strategies, and scoring are available for registered members.
          </p>
        </div>
        <Link
          href="/auth"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-emerald-600 text-white font-extrabold text-xs shadow-lg shadow-orange-500/25 hover:scale-105 transition-all"
        >
          <span>Sign In to Unlock Citations</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    );
  }

  const isCorrect = selectedOption === question.correctAnswer;
  const letters = ['A', 'B', 'C', 'D'];

  return (
    <div className="mt-6 rounded-2xl border border-slate-200 dark:border-white/10 liquid-card bg-white/95 dark:bg-slate-900/90 p-6 animate-slide-up overflow-hidden relative shadow-sm">
      {/* Header status bar */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/10 flex-wrap gap-3">
        <div className="flex items-center gap-3">
          {isCorrect ? (
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="w-6 h-6" />
            </div>
          ) : (
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 dark:bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-600 dark:text-rose-400">
              <XCircle className="w-6 h-6" />
            </div>
          )}
          <div>
            <div className="flex items-center gap-2">
              <span className={`font-bold text-lg ${isCorrect ? 'text-emerald-700 dark:text-emerald-400' : 'text-rose-700 dark:text-rose-400'}`}>
                {isCorrect ? 'Correct Answer! (+2.0 Marks)' : 'Incorrect Attempt (-0.66 Marks)'}
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">
                Correct Option: {letters[question.correctAnswer]}
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              {isCorrect ? 'Great grasp of concept. Review the source citation below.' : 'Concept clarification required. Refer to standard reference below.'}
            </p>
          </div>
        </div>

        {/* Bookmark & Action */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleBookmarkToggle}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
              isBookmarked
                ? 'bg-amber-500/20 text-amber-800 dark:text-amber-300 border-amber-500/40'
                : 'bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-amber-500 text-amber-500' : ''}`} />
            {isBookmarked ? 'Bookmarked' : 'Save for Revision'}
          </button>

          {onNext && (
            <button
              onClick={onNext}
              className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold text-xs hover:from-amber-600 hover:to-orange-600 shadow-md shadow-amber-500/20"
            >
              {isLastQuestion ? 'View Detailed Scorecard →' : 'Next Question →'}
            </button>
          )}
        </div>
      </div>

      {/* Book & Page Reference Citation Box */}
      <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-amber-500/5 via-slate-50 to-blue-500/5 dark:from-amber-500/10 dark:via-slate-900/60 dark:to-blue-500/10 border border-amber-500/25 dark:border-amber-500/30">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2 text-amber-800 dark:text-amber-400 font-bold text-sm">
            <BookOpen className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span>Standard UPSC Book Reference & Citation</span>
          </div>
          <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-amber-500/10 dark:bg-amber-500/20 text-amber-800 dark:text-amber-300 border border-amber-500/30">
            {question.bookReference.edition || 'Latest Edition'}
          </span>
        </div>

        <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-white/5 shadow-sm">
            <span className="text-slate-500 dark:text-slate-400 block text-[11px]">Source Book</span>
            <span className="font-semibold text-slate-900 dark:text-white">{question.bookReference.bookName}</span>
          </div>
          <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-white/5 shadow-sm">
            <span className="text-slate-500 dark:text-slate-400 block text-[11px]">Chapter / Section</span>
            <span className="font-semibold text-slate-800 dark:text-slate-200">{question.bookReference.chapter}</span>
          </div>
          <div className="p-2.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-500/30 shadow-sm">
            <span className="text-amber-800 dark:text-amber-300/80 block text-[11px] font-medium">Exact Page Number</span>
            <span className="font-bold text-amber-800 dark:text-amber-400 text-sm">{question.bookReference.pageNumber}</span>
          </div>
        </div>

        {question.bookReference.keyExcerpt && (
          <div className="mt-3 text-xs text-slate-700 dark:text-slate-300 italic bg-slate-50 dark:bg-slate-950/60 p-2.5 rounded-lg border-l-2 border-amber-500 dark:border-amber-400">
            &ldquo;{question.bookReference.keyExcerpt}&rdquo;
          </div>
        )}
      </div>

      {/* UPSC Elimination Strategy Tip */}
      {question.eliminationTip && (
        <div className="mt-4 p-3.5 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-500/20 dark:border-blue-500/30 text-xs">
          <div className="flex items-center gap-1.5 text-blue-700 dark:text-blue-400 font-bold mb-1">
            <Lightbulb className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>UPSC Prelims Elimination Trick</span>
          </div>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{question.eliminationTip}</p>
        </div>
      )}

      {/* Comprehensive Explanation */}
      <div className="mt-4 text-xs text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line bg-slate-50 dark:bg-slate-900/60 p-4 rounded-xl border border-slate-200 dark:border-white/5">
        <span className="font-bold text-slate-900 dark:text-slate-200 block mb-2 text-sm">Detailed Explanation & Analysis:</span>
        {question.explanation}
      </div>
    </div>
  );
}
