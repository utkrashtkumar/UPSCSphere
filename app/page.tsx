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
  UserCheck,
  Lock,
  CheckCircle2,
  GraduationCap
} from 'lucide-react';
import { getStoredProfile, getQuizHistory, getSpacedQueue } from '@/lib/localDB';
import { UserProfile, QuizResult } from '@/lib/types';
import { useAuth } from '@/lib/authContext';

export default function HomePage() {
  const router = useRouter();
  const { user } = useAuth();
  const [mounted, setMounted] = useState(false);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [recentQuizzes, setRecentQuizzes] = useState<QuizResult[]>([]);
  const [dueRevisionCount, setDueRevisionCount] = useState<number>(0);

  useEffect(() => {
    setMounted(true);
    setProfile(getStoredProfile());
    setRecentQuizzes(getQuizHistory().slice(0, 3));
    setDueRevisionCount(getSpacedQueue().length);
  }, []);

  const calculateDaysToPrelims = () => {
    const prelimsDate = new Date('2027-05-23T09:30:00');
    const now = new Date();
    const diffTime = prelimsDate.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return Math.max(0, diffDays);
  };

  const getRealAIRDisplay = () => {
    const total = profile?.totalQuizzesTaken || 0;
    const avg = profile?.averageScore || 0;
    if (total === 0) {
      return {
        label: 'Simulated AIR:',
        badge: 'Take 1st Mock to Rank',
      };
    }
    if (avg >= 120) {
      return { label: 'Simulated AIR: Top 0.8%', badge: `Avg ${avg} Marks 🏆` };
    } else if (avg >= 105) {
      return { label: 'Simulated AIR: Top 3.5%', badge: `Avg ${avg} Marks (Safe)` };
    } else if (avg >= 90) {
      return { label: 'Simulated AIR: Top 8.2%', badge: `Avg ${avg} Marks` };
    } else {
      return { label: `AIR Benchmark (${total} tests)`, badge: `Avg ${avg} Marks` };
    }
  };

  const calculateCutoffProb = () => {
    const total = profile?.totalQuizzesTaken || 0;
    const avg = profile?.averageScore || 0;
    if (total === 0) {
      return {
        percentage: 'Pending Mock',
        isSafe: false,
        summary: 'Complete your first mock test to generate an authentic cutoff clearance probability.',
      };
    }
    const prob = Math.min(99, Math.max(15, Math.round((avg / 110) * 100)));
    return {
      percentage: `${prob}% Clearance Probability`,
      isSafe: prob >= 70,
      summary: `Based on your real mock average of ${avg} / 200 Marks against the historical General cutoff of ~88.0 marks.`,
    };
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

  const airInfo = getRealAIRDisplay();
  const cutoffInfo = calculateCutoffProb();

  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-16 py-8 sm:py-12 space-y-12 sm:space-y-16">
      
      {/* 1. Hero Showcase: Running Animated Tricolour Liquid Glass Card */}
      <section className="relative running-tricolor-card p-6 sm:p-10 lg:p-12 shadow-xl">
        
        {/* Running Shimmer Stream Light Reflection */}
        <div className="running-shimmer-stream" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-5">
            
            {/* Top Tricolour Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 dark:bg-orange-500/15 border border-orange-500/30 text-orange-700 dark:text-orange-300 text-xs font-black tracking-wide">
              <span className="text-sm">🏛️</span>
              <span>UPSCSphere • 100% FREE PRELIMS ECOSYSTEM • HIGH-SPEED MOCK ENGINE</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-slate-900 dark:text-white leading-[1.14]">
              <span className="text-orange-600 dark:text-orange-400">UPSCSphere</span>: Master UPSC Prelims with <br />
              <span className="tricolor-gradient-text">
                On-the-Spot Feedback
              </span> <br />
              & Exact Book Citations
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
              <strong>UPSCSphere</strong> is an open-access educational platform tailored for UPSC Civil Services Examination (CSE) aspirants. Practice configurable GS-1 & CSAT mocks, explore our 12-year official PYQ vault (2015–2026), leverage 50:50 option elimination, study exact book page citations (Laxmikanth, Spectrum, NCERT), and compare live nationwide AIR benchmarks.
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
            <div className="liquid-glass-card rounded-3xl p-6 sm:p-7 text-center space-y-2 shadow-sm">
              <div className="flex items-center justify-center gap-2 text-orange-700 dark:text-orange-400 text-xs sm:text-sm font-black uppercase tracking-wider mb-1">
                <Calendar className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                <span>UPSC Prelims 2027</span>
              </div>
              <span className="text-5xl sm:text-6xl font-black text-slate-900 dark:text-white font-display block" suppressHydrationWarning>
                {calculateDaysToPrelims()}
              </span>
              <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-bold block">
                Days Remaining Until D-Day (May 23, 2027)
              </span>
            </div>

            {/* Streak & Mock Stats */}
            <div className="grid grid-cols-2 gap-3.5">
              <div className="liquid-glass-card rounded-3xl p-5 text-center border-orange-500/20 shadow-sm">
                <span className="text-3xl font-black text-orange-600 dark:text-orange-400 block" suppressHydrationWarning>
                  {profile?.streakCount ?? 0} 🔥
                </span>
                <span className="text-xs text-slate-600 dark:text-slate-400 font-extrabold uppercase mt-1 block">Daily Streak</span>
              </div>
              <div className="liquid-glass-card rounded-3xl p-5 text-center border-emerald-500/20 shadow-sm">
                <span className="text-3xl font-black text-emerald-600 dark:text-emerald-400 block" suppressHydrationWarning>
                  {profile?.totalQuizzesTaken ?? 0}
                </span>
                <span className="text-xs text-slate-600 dark:text-slate-400 font-extrabold uppercase mt-1 block">Mocks Taken</span>
              </div>
            </div>

            {/* Quick AIR Benchmark */}
            <div className="liquid-glass-card rounded-2xl p-4 sm:p-5 flex items-center justify-between text-xs sm:text-sm shadow-sm">
              <div className="flex items-center gap-2.5">
                <Trophy className="w-4 h-4 sm:w-5 h-5 text-orange-600 dark:text-orange-400" />
                <span className="text-slate-700 dark:text-slate-300 font-bold" suppressHydrationWarning>{mounted ? airInfo.label : 'Simulated AIR:'}</span>
              </div>
              <span className="font-extrabold text-orange-700 dark:text-orange-400 bg-orange-500/10 px-3 py-1 rounded-xl border border-orange-500/30" suppressHydrationWarning>
                {mounted ? airInfo.badge : 'Take 1st Mock to Rank'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Quick Practice Launchpad */}
      <section className="space-y-5">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-black font-display text-slate-900 dark:text-white flex items-center gap-2.5">
              <Zap className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              <span>Instant High-Yield Subject Drills</span>
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              10-question timed speed drills with instant answers and page-exact citations.
            </p>
          </div>
          <Link
            href="/quiz/create"
            className="text-xs sm:text-sm font-extrabold text-orange-700 dark:text-orange-400 hover:underline flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-orange-500/10 border border-orange-500/30"
          >
            <span>Full Configurator</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {subjects.map((item) => (
            <button
              key={item.code}
              onClick={() => handleQuickQuiz(item.code)}
              className={`p-5 sm:p-6 rounded-3xl liquid-glass-card ${item.color} text-left flex flex-col justify-between group shadow-sm hover:scale-[1.03] transition-all`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl sm:text-4xl">{item.icon}</span>
                <span className="text-xs font-black px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/10 text-slate-800 dark:text-white group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  10 Qs
                </span>
              </div>
              <div>
                <span className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white block group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                  {item.name}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 block truncate mt-1 font-medium">
                  {item.book}
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* 3. Three Core Pillars (Duel, Daily CA, Syllabus Tracker) */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        
        {/* 1v1 Aspirant Speed Duel */}
        <Link
          href="/duel"
          className="liquid-glass-card rounded-3xl p-7 sm:p-9 border-orange-500/20 group shadow-sm flex flex-col justify-between"
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/15 text-orange-600 dark:text-orange-400 flex items-center justify-center border border-orange-500/30">
                <Swords className="w-6 h-6" />
              </div>
              <span className="text-xs font-black uppercase px-3 py-1 rounded-full bg-orange-500/10 text-orange-700 dark:text-orange-300 border border-orange-500/30">
                Live Battle
              </span>
            </div>
            <h3 className="font-black text-xl sm:text-2xl text-slate-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 font-display transition-colors">
              1v1 Aspirant Speed Duel
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
              Challenge another live aspirant to a rapid 5-minute quiz battle. Test your speed, nerve, and accuracy under pressure.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-sm text-orange-600 dark:text-orange-400 font-bold">
            <span>Enter Match Arena</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </div>
        </Link>

        {/* Daily Current Affairs Hub */}
        <Link
          href="/daily-ca"
          className="liquid-glass-card rounded-3xl p-7 sm:p-9 border-blue-500/20 group shadow-sm flex flex-col justify-between"
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/15 text-blue-600 dark:text-blue-400 flex items-center justify-center border border-blue-500/30">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="text-xs font-black uppercase px-3 py-1 rounded-full bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/30">
                Daily 7 AM
              </span>
            </div>
            <h3 className="font-black text-xl sm:text-2xl text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 font-display transition-colors">
              Daily Editorial & CA Test
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
              10 high-yield questions sourced from The Hindu, PIB, and Down To Earth. Test editorial concepts on the spot.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-sm text-blue-700 dark:text-blue-400 font-bold">
            <span>Solve Today&apos;s CA Test</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </div>
        </Link>

        {/* Syllabus Micro-Tracker */}
        <Link
          href="/syllabus"
          className="liquid-glass-card rounded-3xl p-7 sm:p-9 border-emerald-500/20 group shadow-sm flex flex-col justify-between"
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                <Layers className="w-6 h-6" />
              </div>
              <span className="text-xs font-black uppercase px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
                GS-1 & CSAT
              </span>
            </div>
            <h3 className="font-black text-xl sm:text-2xl text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 font-display transition-colors">
              Syllabus Micro-Tracker
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
              Track every single GS-1 and CSAT sub-topic down to the root concept. Monitor your 1st, 2nd, and 3rd revision rounds.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-sm text-emerald-600 dark:text-emerald-400 font-bold">
            <span>Open Syllabus Checklist</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </div>
        </Link>
      </section>

      {/* 4. Real AI Diagnostic Weak-Area Radar & Prelims Cutoff Predictor */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        
        {/* Real Weak Area Coach */}
        <div className="liquid-glass-card rounded-3xl p-7 sm:p-9 space-y-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5 text-orange-700 dark:text-orange-400 font-bold text-base sm:text-lg">
              <Lightbulb className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              <span className="font-display">AI Weak-Area Revision Radar</span>
            </div>
            <span className="text-xs font-black uppercase px-3 py-1 rounded-full bg-orange-500/10 text-orange-700 dark:text-orange-300 border border-orange-500/30">
              Smart Coach
            </span>
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {recentQuizzes.length > 0
              ? 'Based on your real mock accuracy, here are the targeted chapters recommended for your revision today:'
              : 'Launch your first mock test to unlock personalized AI diagnostic chapter recommendations based on your real performance.'}
          </p>

          {recentQuizzes.length > 0 ? (
            <div className="space-y-3">
              {recentQuizzes.map((quiz, idx) => (
                <div key={quiz.quizId || idx} className="p-4 sm:p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-950/70 border border-rose-500/30 flex items-center justify-between gap-3 text-sm">
                  <div className="space-y-1">
                    <span className="font-bold text-slate-900 dark:text-white block text-sm sm:text-base">{quiz.title}</span>
                    <span className="text-xs sm:text-sm text-orange-700 dark:text-orange-400 font-medium">Attempted on {new Date(quiz.date || Date.now()).toLocaleDateString()} • {quiz.totalQuestions} Questions</span>
                  </div>
                  <span className="text-rose-600 dark:text-rose-400 font-extrabold text-xs sm:text-sm bg-rose-500/10 dark:bg-rose-500/15 px-3 py-1.5 rounded-xl border border-rose-500/30 shrink-0">
                    {quiz.accuracy}% Accuracy
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-6 rounded-2xl bg-slate-50/80 dark:bg-slate-950/60 border border-slate-200 dark:border-white/10 text-center space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center mx-auto">
                🎯
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                No mock test data recorded yet. Take a 10-question speed drill to start mapping your strengths and weak areas.
              </p>
              <Link
                href="/quiz/create"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 dark:text-orange-400 hover:underline"
              >
                <span>Take Diagnostic Mock Test →</span>
              </Link>
            </div>
          )}
        </div>

        {/* Real Prelims Cutoff Predictor */}
        <div className="liquid-glass-card rounded-3xl p-7 sm:p-9 border-emerald-500/20 space-y-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5 text-emerald-600 dark:text-emerald-400 font-bold text-base sm:text-lg">
              <ShieldCheck className="w-5 h-5" />
              <span className="font-display">Prelims GS-1 Cut-Off Probability</span>
            </div>
            <span className={`text-xs sm:text-sm font-black px-3.5 py-1 rounded-full border ${
              (profile?.totalQuizzesTaken || 0) > 0
                ? 'text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 dark:bg-emerald-500/20 border-emerald-500/30'
                : 'text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-white/10'
            }`}>
              {cutoffInfo.percentage}
            </span>
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {cutoffInfo.summary}
          </p>

          <div className="space-y-2.5">
            <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-950/80 border border-slate-200 dark:border-white/5 flex items-center justify-between text-xs sm:text-sm">
              <span className="text-slate-600 dark:text-slate-400 font-medium">Historical UPSC General Cut-off:</span>
              <span className="font-bold text-slate-900 dark:text-slate-200">~87.5 to 89.0 Marks</span>
            </div>
            <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-950/80 border border-slate-200 dark:border-white/5 flex items-center justify-between text-xs sm:text-sm">
              <span className="text-slate-600 dark:text-slate-400 font-medium">Your Actual Average Score:</span>
              <span className="font-bold text-emerald-600 dark:text-emerald-400">
                {(profile?.totalQuizzesTaken || 0) > 0 ? `${profile?.averageScore} Marks` : '0.0 Marks (No Mocks Taken)'}
              </span>
            </div>
            <div className="p-3.5 sm:p-4 rounded-2xl bg-orange-500/5 dark:bg-slate-950/80 border border-orange-500/30 flex items-center justify-between text-xs sm:text-sm">
              <span className="text-slate-600 dark:text-slate-400 font-medium">Target Score for 100% Prelims Guarantee:</span>
              <span className="font-extrabold text-orange-700 dark:text-orange-400">105+ Marks</span>
            </div>
          </div>

          <Link
            href="/quiz/create"
            className="liquid-glass-btn block w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs sm:text-sm font-extrabold text-center shadow-md hover:scale-[1.02] transition-all"
          >
            {(profile?.totalQuizzesTaken || 0) > 0 ? 'Take Another GS-1 Mock →' : 'Take First GS-1 Mock Test →'}
          </Link>
        </div>
      </section>

      {/* 5. Standard Reference Books Citation Guarantee Banner */}
      <section className="liquid-glass-card rounded-3xl p-8 sm:p-10 shadow-sm">
        <div className="text-center space-y-2 mb-8">
          <span className="text-xs font-black uppercase px-3.5 py-1 rounded-full bg-orange-500/10 text-orange-700 dark:text-orange-400 border border-orange-500/30">
            100% Transparent UPSC Standard
          </span>
          <h2 className="text-2xl sm:text-3xl font-black font-display text-slate-900 dark:text-white">
            Every Question is Mapped to Standard UPSC Books & Page Numbers
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Never waste time searching where an answer came from. Study directly from the authentic source immediately after answering.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
          {[
            { title: 'Indian Polity', author: 'M. Laxmikanth', badge: '7th Edition' },
            { title: 'Modern History', author: 'Spectrum / Rajiv Ahir', badge: 'Latest Ed' },
            { title: 'Indian Economy', author: 'Ramesh Singh', badge: '15th Edition' },
            { title: 'Environment', author: 'Shankar IAS', badge: '9th Edition' },
            { title: 'Geography', author: 'NCERT Class 11-12', badge: 'Physical Geo' },
            { title: 'Current Affairs', author: 'The Hindu & PIB', badge: 'Daily Sourced' },
          ].map((book) => (
            <div key={book.title} className="p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 space-y-1.5 shadow-sm hover:scale-105 transition-transform">
              <span className="text-xs font-bold text-orange-700 dark:text-orange-400 bg-orange-500/10 px-2.5 py-0.5 rounded-md block">
                {book.badge}
              </span>
              <div className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white truncate">{book.title}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 truncate font-medium">{book.author}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. About UPSCSphere & Application Purpose (Google Cloud OAuth & Aspirant Transparency) */}
      <section className="liquid-glass-card rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-white/10 shadow-lg space-y-8">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 dark:bg-orange-500/15 border border-orange-500/30 text-orange-700 dark:text-orange-300 text-xs font-black tracking-wide">
            <GraduationCap className="w-4 h-4 text-orange-600 dark:text-orange-400" />
            <span>EDUCATIONAL MISSION & APPLICATION PURPOSE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black font-display text-slate-900 dark:text-white tracking-tight">
            About <span className="text-orange-600 dark:text-orange-400">UPSCSphere</span> & Platform Purpose
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
            <strong>UPSCSphere</strong> is an open, non-commercial educational web application created to democratize access to high-quality preparation tools for the <strong>UPSC Civil Services Examination (CSE)</strong>. Our mission is to eliminate guesswork from Prelims practice by combining active recall, realistic timed mocks, and standard book page references.
          </p>
        </div>

        {/* 3 Core Functional Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-white/10 space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center font-bold">
              📚
            </div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white">Authentic Reference Citations</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Every question is directly mapped to standard UPSC textbooks (M. Laxmikanth, Spectrum, Ramesh Singh, NCERT) with exact edition and page numbers.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-white/10 space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
              ⏱️
            </div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white">12-Year Official PYQ Vault</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Complete, verified question papers from 2015 to 2026 for GS Paper-1 and CSAT Paper-2 with 50:50 option elimination techniques.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-white/10 space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
              📊
            </div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white">Syllabus & Diagnostic Analytics</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Granular topic-by-topic tracking, spaced repetition revision queues, and cutoff probability calculators benchmarked against historical data.
            </p>
          </div>
        </div>

        {/* User Account & Google OAuth Scope Transparency */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-50/80 dark:bg-slate-950/70 border border-slate-200 dark:border-white/10 space-y-4">
          <div className="flex items-center gap-2.5 text-slate-900 dark:text-white font-bold text-base sm:text-lg">
            <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <span>Why UPSCSphere Requests Google Sign-In & How Your Data is Protected</span>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            When you sign in with Google on <strong>UPSCSphere</strong>, we only request access to your primary email address and basic profile name. This information is strictly utilized to:
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <span>Authenticate your account securely across your mobile and desktop devices.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <span>Persist your mock quiz scores, accuracy metrics, and All-India Rank benchmarks.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <span>Save your bookmarked questions and spaced repetition revision cards.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <span>Synchronize your 1st, 2nd, and 3rd syllabus revision rounds in real time.</span>
            </li>
          </ul>

          <div className="pt-2 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="text-slate-500 dark:text-slate-400">
              UPSCSphere adheres to the <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer" className="underline text-orange-600 dark:text-orange-400 font-bold">Google API Services User Data Policy</a>, including Limited Use requirements.
            </div>
            <div className="flex items-center gap-3">
              <Link href="/privacy-policy" className="text-xs font-bold text-orange-600 dark:text-orange-400 hover:underline">
                Read Privacy Policy →
              </Link>
              <Link href="/terms" className="text-xs font-bold text-slate-600 dark:text-slate-400 hover:underline">
                Terms of Service →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
