'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  BrainCircuit, 
  Play, 
  BookOpen
} from 'lucide-react';
import { getSpacedQueue, getBookmarks } from '@/lib/localDB';
import { SpacedItem } from '@/lib/types';
import { getQuestionById } from '@/lib/questionLoader';

export default function RevisionPage() {
  const router = useRouter();
  const [spacedQueue, setSpacedQueue] = useState<SpacedItem[]>([]);
  const [bookmarks, setBookmarks] = useState<string[]>([]);

  useEffect(() => {
    setSpacedQueue(getSpacedQueue());
    setBookmarks(getBookmarks());
  }, []);

  const handleStartSpacedQuiz = () => {
    const config = {
      title: 'Spaced Repetition Smart Review',
      subjects: ['mixed_mock'],
      questionCount: 10,
      timeLimitMinutes: 15,
      mode: 'instant',
      paperType: 'GS',
      difficulty: 'all',
    };
    sessionStorage.setItem('active_quiz_config', JSON.stringify(config));
    router.push('/quiz/session');
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-16 py-8 space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs font-bold mb-3">
          <BrainCircuit className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span>Leitner Box Spaced Repetition Engine</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Smart Revision <span className="tricolor-gradient-text">Queue</span>
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-xl mx-auto">
          Questions you answered incorrectly are automatically scheduled for 1-day, 3-day, and 7-day memory consolidation intervals.
        </p>
      </div>

      {/* Hero Revision Action Box */}
      <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 border-emerald-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2">
          <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">Memory Consolidation</span>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white">
            {spacedQueue.length > 0 ? `${spacedQueue.length} Questions Due for Revision` : 'All Caught Up! Zero Backlog'}
          </h2>
          <p className="text-xs text-slate-600 dark:text-slate-300 max-w-md">
            Reviewing questions just before you forget builds long-term factual retention for UPSC Prelims.
          </p>
        </div>

        <button
          onClick={handleStartSpacedQuiz}
          className="liquid-glass-btn flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-extrabold text-xs shadow-xl shadow-emerald-500/25 hover:scale-105 transition-all whitespace-nowrap"
        >
          <Play className="w-4 h-4 fill-white" />
          <span>Start Revision Session</span>
        </button>
      </div>

      {/* Bookmarked Questions Quick-List */}
      <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
        <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-orange-600 dark:text-orange-400" />
          <span>Your Bookmarked Concept Vault ({bookmarks.length})</span>
        </h3>

        {bookmarks.length === 0 ? (
          <p className="text-xs text-slate-500 dark:text-slate-400 italic">
            No questions bookmarked yet. Bookmark tricky questions during any quiz to review them here.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {bookmarks.map((bId) => {
              const q = getQuestionById(bId);
              if (!q) return null;
              return (
                <div
                  key={bId}
                  className="p-4 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-white/5 space-y-2 text-xs shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-orange-700 dark:text-orange-400">{q.topic}</span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400">{q.difficulty}</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 line-clamp-2">{q.question}</p>
                  <div className="pt-2 border-t border-slate-200 dark:border-white/5 text-[11px] text-slate-600 dark:text-slate-400">
                    📖 <strong>{q.bookReference.bookName}</strong> (Page {q.bookReference.pageNumber})
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
