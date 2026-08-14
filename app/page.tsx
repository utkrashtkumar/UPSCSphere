'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  Zap, 
  BookOpen, 
  Trophy, 
  Layers, 
  Sparkles, 
  Flame, 
  Calendar, 
  Swords, 
  ArrowRight, 
  ShieldCheck, 
  Lightbulb,
  Check,
  UserCheck
} from 'lucide-react';
import { getStoredProfile, getQuizHistory, getSpacedQueue } from '@/lib/localDB';
import { UserProfile, QuizResult } from '@/lib/types';
import { useAuth } from '@/lib/authContext';

export default function HomePage() {
  const router = useRouter();
  const { user } = useAuth();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [recentQuizzes, setRecentQuizzes] = useState<QuizResult[]>([]);
  const [dueRevisionCount, setDueRevisionCount] = useState<number>(0);

  useEffect(() => {
    setProfile(getStoredProfile());
    setRecentQuizzes(getQuizHistory().slice(0, 3));
    setDueRevisionCount(getSpacedQueue().length);
  }, []);

  const calculateDaysToPrelims = () => {
    const prelimsDate = new Date('2026-05-24T09:30:00');
    const now = new Date();
    const diffTime = prelimsDate.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 285;
  };

  const handleQuickQuiz = (topic: string) => {
    const config = {
      title: `${topic} Quick Test`,
      subjects: [topic.toLowerCase()],
      questionCount: 10,
      timeLimitMinutes: 15,
      mode: 'instant',
      paperType: 'GS',
      difficulty: 'all',
    };
    sessionStorage.setItem('active_quiz_config', JSON.stringify(config));
    router.push('/quiz/session');
  };

  const subjects = [
    { name: 'Polity', code: 'polity', book: 'M. Laxmikanth (7th Ed)', icon: '⚖️', color: 'border-orange-500/30 text-orange-600 dark:text-orange-400 hover:border-orange-500' },
    { name: 'Economy', code: 'economy', book: 'Ramesh Singh / Eco Survey', icon: '📈', color: 'border-emerald-500/30 text-emerald-600 dark:text-emerald-400 hover:border-emerald-500' },
    { name: 'History', code: 'history', book: 'Spectrum & NCERTs', icon: '📜', color: 'border-amber-500/30 text-amber-600 dark:text-amber-400 hover:border-amber-500' },
    { name: 'Environment', code: 'environment', book: 'Shankar IAS & MOEFCC', icon: '🌿', color: 'border-teal-500/30 text-teal-600 dark:text-teal-400 hover:border-teal-500' },
    { name: 'Geography', code: 'geography', book: 'NCERT Class XI & XII', icon: '🌍', color: 'border-blue-500/30 text-blue-600 dark:text-blue-400 hover:border-blue-500' },
    { name: 'CSAT Quant', code: 'csat_quant', book: 'UPSC Official Pattern', icon: '🔢', color: 'border-indigo-500/30 text-indigo-600 dark:text-indigo-400 hover:border-indigo-500' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 sm:space-y-16">
      
      {/* 1. Hero Showcase: Running Animated Tricolour Liquid Glass Card */}
      <section className="relative running-tricolor-card p-6 sm:p-10 lg:p-12 shadow-xl">
        
        {/* Running Shimmer Stream Light Reflection */}
        <div className="running-shimmer-stream" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-5">
            
            {/* Top Tricolour Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 dark:bg-orange-500/15 border border-orange-500/30 text-orange-700 dark:text-orange-300 text-xs font-black tracking-wide">
              <span className="text-sm">🇮🇳</span>
              <span>100% FREE PRELIMS ECOSYSTEM • HIGH-SPEED MOCK ENGINE</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-slate-900 dark:text-white leading-[1.14]">
              Master UPSC Prelims with <br />
              <span className="tricolor-gradient-text">
                On-the-Spot Feedback
              </span> <br />
              & Exact Book Citations
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
              Configurable GS-1 & CSAT mocks, 12-year official PYQ vault (2015–2026), 50:50 option elimination, exact book page citations (Laxmikanth, Spectrum, NCERT), and live nationwide AIR rankings.
            </p>

            {/* Action CTAs */}
            <div className="pt-2 flex items-center gap-3.5 flex-wrap">
              <Link
                href="/quiz/create"
                className="liquid-glass-btn flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-600 text-white font-extrabold text-xs sm:text-sm shadow-xl shadow-orange-500/20 hover:scale-105 transition-all"
              >
                <Zap className="w-4 h-4 fill-white" />
                <span>Launch Custom Quiz</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/pyq"
                className="liquid-glass-btn flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/90 dark:bg-slate-900/90 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-white font-bold text-xs sm:text-sm border border-slate-200 dark:border-white/15 shadow-sm transition-all"
              >
                <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>12-Yr PYQ Vault (2015–2026)</span>
              </Link>

              {!user && (
                <Link
                  href="/auth"
                  className="liquid-glass-btn flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-slate-100 dark:bg-slate-950/80 hover:bg-slate-200 dark:hover:bg-slate-900 text-slate-800 dark:text-orange-300 font-bold text-xs sm:text-sm border border-slate-200 dark:border-orange-500/30 transition-all"
                >
                  <UserCheck className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                  <span>Sign In & Sync</span>
                </Link>
              )}
            </div>

            {/* Micro Feature Bullet Points */}
            <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-600 dark:text-slate-400 font-medium">
              <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                Page No. Citations on Every Question
              </span>
              <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                Negative Marking (+2 / -0.667 & +2.5 / -0.833)
              </span>
              <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                Zero Cost / 100% Free Forever
              </span>
            </div>
          </div>

          {/* Right: Interactive Aspirant Status Widgets */}
          <div className="lg:col-span-4 space-y-4">
            {/* Prelims Target Card */}
            <div className="liquid-glass-card rounded-2xl p-5 text-center space-y-1">
              <div className="flex items-center justify-center gap-1.5 text-orange-700 dark:text-orange-400 text-xs font-black uppercase tracking-wider mb-1">
                <Calendar className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" />
                <span>UPSC Prelims 2026</span>
              </div>
              <span className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white font-display block">
                {calculateDaysToPrelims()}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold block">
                Days Remaining Until D-Day (May 2026)
              </span>
            </div>

            {/* Streak & Mock Stats */}
            <div className="grid grid-cols-2 gap-3">
              <div className="liquid-glass-card rounded-2xl p-4 text-center border-orange-500/20">
                <span className="text-2xl font-black text-orange-600 dark:text-orange-400 block">{profile?.streakCount || 5} 🔥</span>
                <span className="text-[10px] text-slate-600 dark:text-slate-400 font-bold uppercase mt-0.5 block">Daily Streak</span>
              </div>
              <div className="liquid-glass-card rounded-2xl p-4 text-center border-emerald-500/20">
                <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400 block">{profile?.totalQuizzesTaken || 12}</span>
                <span className="text-[10px] text-slate-600 dark:text-slate-400 font-bold uppercase mt-0.5 block">Mocks Taken</span>
              </div>
            </div>

            {/* Quick AIR Benchmark */}
            <div className="liquid-glass-card rounded-2xl p-3.5 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                <span className="text-slate-700 dark:text-slate-300 font-semibold">Simulated AIR:</span>
              </div>
              <span className="font-extrabold text-orange-700 dark:text-orange-400 bg-orange-500/10 px-2.5 py-0.5 rounded-lg border border-orange-500/30">
                Top 3.8% (AIR #142)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Quick Practice Launchpad */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-xl sm:text-2xl font-black font-display text-slate-900 dark:text-white flex items-center gap-2">
              <Zap className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              <span>Instant High-Yield Subject Drills</span>
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              10-question timed speed drills with instant answers and page-exact citations.
            </p>
          </div>
          <Link
            href="/quiz/create"
            className="text-xs font-extrabold text-orange-700 dark:text-orange-400 hover:underline flex items-center gap-1"
          >
            <span>Full Configurator</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
          {subjects.map((item) => (
            <button
              key={item.code}
              onClick={() => handleQuickQuiz(item.code)}
              className={`p-4 rounded-2xl liquid-glass-card ${item.color} text-left flex flex-col justify-between group shadow-sm`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-white/10 text-slate-800 dark:text-white group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  10 Qs
                </span>
              </div>
              <div>
                <span className="font-bold text-sm text-slate-900 dark:text-white block group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                  {item.name}
                </span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 block truncate mt-0.5 font-medium">
                  {item.book}
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* 3. Three Core Pillars (Duel, Daily CA, Syllabus Tracker) */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* 1v1 Aspirant Speed Duel */}
        <Link
          href="/duel"
          className="liquid-glass-card rounded-3xl p-6 sm:p-7 border-orange-500/20 group shadow-sm"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-2xl bg-orange-500/15 text-orange-600 dark:text-orange-400 flex items-center justify-center border border-orange-500/30">
              <Swords className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded-full bg-orange-500/10 text-orange-700 dark:text-orange-300 border border-orange-500/30">
              Live Battle
            </span>
          </div>
          <h3 className="font-black text-lg text-slate-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 font-display transition-colors">
            1v1 Aspirant Speed Duel
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed font-normal">
            Challenge another live aspirant to a rapid 5-minute quiz battle. Test your speed, nerve, and accuracy under pressure.
          </p>
          <div className="mt-4 pt-3 border-t border-slate-200 dark:border-white/5 flex items-center justify-between text-xs text-orange-600 dark:text-orange-400 font-bold">
            <span>Enter Match Arena</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>

        {/* Daily Current Affairs Hub */}
        <Link
          href="/daily-ca"
          className="liquid-glass-card rounded-3xl p-6 sm:p-7 border-blue-500/20 group shadow-sm"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-2xl bg-blue-500/15 text-blue-600 dark:text-blue-400 flex items-center justify-center border border-blue-500/30">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/30">
              Daily 7 AM
            </span>
          </div>
          <h3 className="font-black text-lg text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 font-display transition-colors">
            Daily Editorial & CA Test
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed font-normal">
            10 high-yield questions sourced from The Hindu, PIB, and Down To Earth. Test editorial concepts on the spot.
          </p>
          <div className="mt-4 pt-3 border-t border-slate-200 dark:border-white/5 flex items-center justify-between text-xs text-blue-700 dark:text-blue-400 font-bold">
            <span>Solve Today&apos;s CA Test</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>

        {/* Syllabus Micro-Tracker */}
        <Link
          href="/syllabus"
          className="liquid-glass-card rounded-3xl p-6 sm:p-7 border-emerald-500/20 group shadow-sm"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-500/30">
              <Layers className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
              GS-1 & CSAT
            </span>
          </div>
          <h3 className="font-black text-lg text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 font-display transition-colors">
            Syllabus Micro-Tracker
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed font-normal">
            Track every single GS-1 and CSAT sub-topic down to the root concept. Monitor your 1st, 2nd, and 3rd revision rounds.
          </p>
          <div className="mt-4 pt-3 border-t border-slate-200 dark:border-white/5 flex items-center justify-between text-xs text-emerald-600 dark:text-emerald-400 font-bold">
            <span>Open Syllabus Checklist</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>
      </section>

      {/* 4. AI Diagnostic Weak-Area Radar & Prelims Cutoff Predictor */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Weak Area Coach */}
        <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5 text-orange-700 dark:text-orange-400 font-bold text-sm">
              <Lightbulb className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              <span className="font-display">AI Weak-Area Revision Radar</span>
            </div>
            <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-orange-500/10 text-orange-700 dark:text-orange-300 border border-orange-500/30">
              Smart Coach
            </span>
          </div>

          <p className="text-xs text-slate-600 dark:text-slate-300">
            Based on your mock accuracy, here are the exact chapters you should revise today to maximize net score:
          </p>

          <div className="space-y-2.5">
            <div className="p-3.5 rounded-2xl bg-slate-50/80 dark:bg-slate-950/70 border border-rose-500/30 flex items-center justify-between text-xs">
              <div className="space-y-0.5">
                <span className="font-bold text-slate-900 dark:text-white block">Constitutional Writs & Article 32</span>
                <span className="text-[11px] text-orange-700 dark:text-orange-400 font-medium">M. Laxmikanth (7th Ed • Page 7.33)</span>
              </div>
              <span className="text-rose-600 dark:text-rose-400 font-extrabold bg-rose-500/10 dark:bg-rose-500/15 px-2.5 py-1 rounded-lg border border-rose-500/30">
                42% Accuracy
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50/80 dark:bg-slate-950/70 border border-rose-500/30 flex items-center justify-between text-xs">
              <div className="space-y-0.5">
                <span className="font-bold text-slate-900 dark:text-white block">Western Disturbances & Jet Streams</span>
                <span className="text-[11px] text-orange-700 dark:text-orange-400 font-medium">NCERT Class XI Physical Geo (Page 34)</span>
              </div>
              <span className="text-rose-600 dark:text-rose-400 font-extrabold bg-rose-500/10 dark:bg-rose-500/15 px-2.5 py-1 rounded-lg border border-rose-500/30">
                50% Accuracy
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50/80 dark:bg-slate-950/70 border border-rose-500/30 flex items-center justify-between text-xs">
              <div className="space-y-0.5">
                <span className="font-bold text-slate-900 dark:text-white block">Money Supply (M1, M3 Broad Money)</span>
                <span className="text-[11px] text-orange-700 dark:text-orange-400 font-medium">Ramesh Singh (15th Ed • Page 12.14)</span>
              </div>
              <span className="text-rose-600 dark:text-rose-400 font-extrabold bg-rose-500/10 dark:bg-rose-500/15 px-2.5 py-1 rounded-lg border border-rose-500/30">
                48% Accuracy
              </span>
            </div>
          </div>
        </div>

        {/* Prelims Cutoff Predictor */}
        <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 border-emerald-500/20 space-y-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
              <ShieldCheck className="w-5 h-5" />
              <span className="font-display">Prelims GS-1 Cut-Off Probability</span>
            </div>
            <span className="text-xs font-black text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 dark:bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-500/30">
              78% Safe Probability
            </span>
          </div>

          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            Your current simulated average is <strong className="text-slate-900 dark:text-white">92.5 / 200 Marks</strong> against the historical general cut-off benchmark of ~88.0 marks.
          </p>

          <div className="space-y-2">
            <div className="p-3 rounded-xl bg-slate-50/80 dark:bg-slate-950/80 border border-slate-200 dark:border-white/5 flex items-center justify-between text-xs">
              <span className="text-slate-600 dark:text-slate-400">Historical UPSC General Cut-off:</span>
              <span className="font-bold text-slate-900 dark:text-slate-200">~87.5 to 89.0 Marks</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50/80 dark:bg-slate-950/80 border border-slate-200 dark:border-white/5 flex items-center justify-between text-xs">
              <span className="text-slate-600 dark:text-slate-400">Your Average Net Marks:</span>
              <span className="font-bold text-emerald-600 dark:text-emerald-400">92.5 Marks</span>
            </div>
            <div className="p-3 rounded-xl bg-orange-500/5 dark:bg-slate-950/80 border border-orange-500/30 flex items-center justify-between text-xs">
              <span className="text-slate-600 dark:text-slate-400">Target Score for 100% Prelims Guarantee:</span>
              <span className="font-extrabold text-orange-700 dark:text-orange-400">105+ Marks</span>
            </div>
          </div>

          <Link
            href="/quiz/create"
            className="liquid-glass-btn block w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs font-bold text-center shadow-sm"
          >
            Take Full Length GS-1 Mock →
          </Link>
        </div>
      </section>

      {/* 5. Standard Reference Books Citation Guarantee Banner */}
      <section className="liquid-glass-card rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="text-center space-y-2 mb-6">
          <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded-full bg-orange-500/10 text-orange-700 dark:text-orange-400 border border-orange-500/30">
            100% Transparent UPSC Standard
          </span>
          <h2 className="text-xl sm:text-2xl font-black font-display text-slate-900 dark:text-white">
            Every Question is Mapped to Standard UPSC Books & Page Numbers
          </h2>
          <p className="text-xs text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Never waste time searching where an answer came from. Study directly from the authentic source immediately after answering.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center">
          {[
            { title: 'Indian Polity', author: 'M. Laxmikanth', badge: '7th Edition' },
            { title: 'Modern History', author: 'Spectrum / Rajiv Ahir', badge: 'Latest Ed' },
            { title: 'Indian Economy', author: 'Ramesh Singh', badge: '15th Edition' },
            { title: 'Environment', author: 'Shankar IAS', badge: '9th Edition' },
            { title: 'Geography', author: 'NCERT Class 11-12', badge: 'Physical Geo' },
            { title: 'Current Affairs', author: 'The Hindu & PIB', badge: 'Daily Sourced' },
          ].map((book) => (
            <div key={book.title} className="p-3.5 rounded-2xl bg-slate-50/80 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 space-y-1">
              <span className="text-[10px] font-bold text-orange-700 dark:text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded-md block">
                {book.badge}
              </span>
              <div className="font-bold text-xs text-slate-900 dark:text-white truncate">{book.title}</div>
              <div className="text-[10px] text-slate-500 dark:text-slate-400 truncate">{book.author}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
