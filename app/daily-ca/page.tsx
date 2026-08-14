'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { 
  Sparkles, 
  Flame, 
  Play
} from 'lucide-react';
import { dailyCAQuestions } from '@/data/dailyCAData';
import { getStoredProfile } from '@/lib/localDB';

export default function DailyCAPage() {
  const router = useRouter();
  const profile = getStoredProfile();

  const handleStartDailyQuiz = () => {
    const config = {
      title: 'Daily Current Affairs & Editorial Quiz',
      subjects: ['current_affairs'],
      questionCount: dailyCAQuestions.length,
      timeLimitMinutes: 10,
      mode: 'instant',
      paperType: 'GS',
      difficulty: 'all',
    };
    sessionStorage.setItem('active_quiz_config', JSON.stringify(config));
    router.push('/quiz/session');
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      {/* Hero Header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 dark:bg-blue-500/15 border border-blue-500/30 text-blue-700 dark:text-blue-300 text-xs font-bold mb-3">
          <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
          <span>Updated Daily at 7:00 AM IST</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Daily UPSC <span className="tricolor-gradient-text">Current Affairs Quiz</span>
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-2xl mx-auto">
          10 high-yield questions daily curated from The Hindu, Indian Express, PIB, Down To Earth, and Yojana.
        </p>
      </div>

      {/* Streak & Launch Card */}
      <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 border-orange-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 dark:bg-orange-500/20 text-orange-700 dark:text-orange-400 text-xs font-extrabold border border-orange-500/30">
            <Flame className="w-4 h-4 animate-pulse" />
            <span>{profile.streakCount} Day Daily Streak Active</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white">Today&apos;s High-Yield Prelims CA Test</h2>
          <p className="text-xs text-slate-600 dark:text-slate-300 max-w-md">
            Test today&apos;s editorial concepts, government schemes, and international treaties with on-the-spot book and source citations.
          </p>
        </div>

        <button
          onClick={handleStartDailyQuiz}
          className="liquid-glass-btn flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-600 text-white font-extrabold text-sm shadow-xl shadow-orange-500/25 hover:scale-105 transition-all whitespace-nowrap"
        >
          <Play className="w-4 h-4 fill-white" />
          <span>Start Daily 10-Min Quiz</span>
        </button>
      </div>

      {/* Source Compilations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="liquid-glass-card rounded-2xl p-5 space-y-2 shadow-sm">
          <span className="text-[10px] font-bold uppercase text-blue-700 dark:text-blue-400 px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">
            The Hindu & Indian Express
          </span>
          <h3 className="font-bold text-slate-900 dark:text-white text-sm">Editorials & World Affairs</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">Supreme Court judgments, Bills in Parliament, Geopolitical pacts, and UN treaties.</p>
        </div>

        <div className="liquid-glass-card rounded-2xl p-5 space-y-2 shadow-sm">
          <span className="text-[10px] font-bold uppercase text-emerald-700 dark:text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
            PIB & Government Portals
          </span>
          <h3 className="font-bold text-slate-900 dark:text-white text-sm">Schemes & Ministry Releases</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">Centrally sponsored schemes, budget allocations, subsidies, and portal launches.</p>
        </div>

        <div className="liquid-glass-card rounded-2xl p-5 space-y-2 shadow-sm">
          <span className="text-[10px] font-bold uppercase text-orange-700 dark:text-orange-400 px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">
            Down To Earth & Yojana
          </span>
          <h3 className="font-bold text-slate-900 dark:text-white text-sm">Environment & Social Issues</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">COP declarations, tiger census, Ramsar wetlands, and economic development indices.</p>
        </div>
      </div>
    </div>
  );
}
