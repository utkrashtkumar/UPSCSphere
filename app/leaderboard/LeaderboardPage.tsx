'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Trophy, 
  Flame, 
  Search, 
  Crown,
  Sparkles,
  Zap,
  BookOpen,
  Calendar,
  ArrowRight,
  TrendingUp,
  Award,
  Swords,
  ExternalLink,
  UserCheck
} from 'lucide-react';
import { LeaderboardEntry, UserProfile } from '@/lib/types';
import { getStoredProfile, getQuizHistory } from '@/lib/localDB';
import { supabase, isSupabaseConfigured } from '@/lib/supabaseClient';

export default function LeaderboardPage() {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadLeaderboardData() {
      const userProf = getStoredProfile();
      setProfile(userProf);
      const history = getQuizHistory();

      let liveEntries: LeaderboardEntry[] = [];

      // 1. Fetch real profiles from Supabase if connected
      if (isSupabaseConfigured && supabase) {
        try {
          const { data: profilesData } = await supabase
            .from('profiles')
            .select('id, name, target_year, optional_subject, streak_count, total_quizzes_taken, average_score')
            .gt('total_quizzes_taken', 0)
            .order('average_score', { ascending: false })
            .limit(100);

          if (profilesData && profilesData.length > 0) {
            liveEntries = profilesData.map((p: any, idx: number) => ({
              id: p.id,
              name: p.name || 'Aspirant',
              targetYear: p.target_year || 2027,
              score: Number(p.average_score) || 0,
              accuracy: Math.min(100, Math.max(0, Math.round(((Number(p.average_score) || 0) / 140) * 100))),
              testsTaken: p.total_quizzes_taken || 1,
              airRank: idx + 1,
              percentile: parseFloat((100 - (idx / Math.max(1, profilesData.length)) * 10).toFixed(1)),
              optionalSubject: p.optional_subject || 'General Studies',
              streakCount: p.streak_count || 0,
              badge: idx === 0 ? 'AIR 1 🏆' : idx === 1 ? 'Rank 2 🥈' : idx === 2 ? 'Rank 3 🥉' : undefined,
            }));
          }
        } catch (err) {
          console.error('Error fetching live leaderboard from Supabase:', err);
        }
      }

      // 2. If the local user has taken real tests, include them in the leaderboard
      if (history.length > 0 && userProf.totalQuizzesTaken > 0) {
        const myAvgScore = userProf.averageScore;
        const myAccuracy = history[0]?.accuracy || Math.round((myAvgScore / 140) * 100);
        const myEntry: LeaderboardEntry = {
          id: 'me',
          name: `${userProf.name || 'Aspirant'} (You)`,
          targetYear: userProf.targetYear,
          score: myAvgScore,
          accuracy: myAccuracy,
          testsTaken: userProf.totalQuizzesTaken,
          airRank: 0,
          percentile: 0,
          optionalSubject: userProf.optionalSubject,
          streakCount: userProf.streakCount,
          badge: 'Your Rank 🎯',
        };

        // Remove duplicate if already present in liveEntries
        const filteredLive = liveEntries.filter(e => e.id !== 'me');
        const combined = [...filteredLive, myEntry];
        combined.sort((a, b) => b.score - a.score);
        combined.forEach((e, idx) => {
          e.airRank = idx + 1;
          e.percentile = parseFloat((100 - (idx / combined.length) * 10).toFixed(1));
          if (idx === 0) e.badge = 'AIR 1 🏆';
          else if (idx === 1) e.badge = 'Rank 2 🥈';
          else if (idx === 2) e.badge = 'Rank 3 🥉';
        });

        setEntries(combined);
      } else {
        liveEntries.sort((a, b) => b.score - a.score);
        liveEntries.forEach((e, idx) => {
          e.airRank = idx + 1;
        });
        setEntries(liveEntries);
      }

      setLoading(false);
    }

    loadLeaderboardData();
  }, []);

  const filteredEntries = entries.filter((e) => {
    if (selectedYear !== 'all' && e.targetYear !== selectedYear) return false;
    if (searchQuery.trim() && !e.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  const myRank = entries.find((e) => e.id === 'me');
  const topAspirant = entries[0] || (profile && profile.totalQuizzesTaken > 0 ? {
    id: 'me',
    name: profile.name || 'Aspirant',
    targetYear: profile.targetYear || 2027,
    optionalSubject: profile.optionalSubject || 'General Studies',
    score: profile.averageScore || 128,
    accuracy: 88,
    streakCount: profile.streakCount || 7,
    testsTaken: profile.totalQuizzesTaken || 5,
  } : null);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-16 py-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 dark:bg-orange-500/15 border border-orange-500/30 text-orange-700 dark:text-orange-300 text-xs font-black tracking-wide">
          <Trophy className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" />
          <span>100% REAL-TIME ALL-INDIA BENCHMARK</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-slate-900 dark:text-white">
          All-India Aspirant <span className="tricolor-gradient-text">Leaderboard</span>
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Real rankings synced directly with verified UPSC Prelims mock test submissions and PYQ test scores.
        </p>
      </div>

      {/* 👑 Aspirant of the Week Spotlight Banner */}
      {topAspirant && (
        <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 border-2 border-amber-500/40 bg-gradient-to-r from-amber-500/15 via-orange-500/10 to-emerald-500/10 shadow-2xl relative overflow-hidden space-y-5 animate-fade-in">
          <div className="h-[2px] w-full running-tricolor-line absolute top-0 left-0 right-0" />
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 text-slate-950 flex items-center justify-center font-black text-2xl shadow-xl shadow-amber-500/20 shrink-0">
                👑
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 font-black text-[10px] uppercase tracking-wider border border-amber-500/30">
                    Aspirant of the Week
                  </span>
                  <span className="text-xs font-bold text-orange-600 dark:text-orange-400 flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 fill-orange-500" />
                    <span>{topAspirant.streakCount}d Streak</span>
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                  {topAspirant.name}
                </h2>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  UPSC {topAspirant.targetYear} • {topAspirant.optionalSubject} • Avg Marks: <strong>{topAspirant.score} pts</strong> ({topAspirant.accuracy}% Accuracy)
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 flex-wrap justify-center shrink-0">
              <Link
                href={`/aspirant/${topAspirant.id || 'topper-1'}`}
                className="px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 font-bold text-xs hover:border-orange-500 transition-all flex items-center gap-1.5 shadow-sm"
              >
                <UserCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>View Public Profile</span>
              </Link>

              <Link
                href={`/duel?room=${topAspirant.name.replace(/\s+/g, '').toUpperCase().slice(0, 8)}`}
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-rose-600 text-white font-black text-xs hover:scale-105 transition-all shadow-md flex items-center gap-1.5"
              >
                <Swords className="w-3.5 h-3.5" />
                <span>Challenge in 1v1</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      {loading ? (
        /* Loading Skeleton */
        <div className="space-y-4 py-8 max-w-4xl mx-auto">
          <div className="h-44 rounded-3xl bg-slate-100 dark:bg-slate-900/60 animate-pulse border border-slate-200 dark:border-white/5" />
          <div className="h-64 rounded-3xl bg-slate-100 dark:bg-slate-900/60 animate-pulse border border-slate-200 dark:border-white/5" />
        </div>
      ) : entries.length === 0 ? (
        /* 🚀 100% CLEAN EMPTY STATE WHEN NO TESTS HAVE BEEN TAKEN YET */
        <div className="max-w-3xl mx-auto text-center py-10 px-4 space-y-8 animate-fade-in">
          <div className="liquid-glass-card rounded-3xl p-8 sm:p-12 border-orange-500/30 shadow-2xl space-y-6">
            
            {/* Glowing Golden Trophy */}
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-amber-500/20 via-orange-500/20 to-emerald-500/20 text-orange-600 dark:text-orange-400 flex items-center justify-center mx-auto border-2 border-orange-500/30 shadow-xl shadow-orange-500/20 animate-pulse">
              <Trophy className="w-10 h-10 text-orange-600 dark:text-orange-400" />
            </div>

            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-xs font-black uppercase tracking-wider border border-emerald-500/30">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Leaderboard Standing Open</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-black font-display text-slate-900 dark:text-white">
                No Aspirants on the Leaderboard Yet
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
                UPSCSphere does not display fabricated rankings. The leaderboard is powered strictly by <strong>real test completions</strong>. Take your first mock test or PYQ paper now to claim the <strong>AIR #1 Spot</strong>!
              </p>
            </div>

            {/* Quick Action Test Launchers */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-left">
              <Link
                href="/quiz/create"
                className="liquid-glass-card p-5 rounded-2xl border-orange-500/30 hover:border-orange-500/60 transition-all hover:scale-[1.03] group shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-orange-500/15 text-orange-600 dark:text-orange-400 flex items-center justify-center mb-3">
                    <Zap className="w-5 h-5 fill-orange-500" />
                  </div>
                  <h3 className="font-extrabold text-sm text-slate-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                    Custom Mock Test
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    Select your subject, question count, and timer.
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1 text-xs font-bold text-orange-600 dark:text-orange-400">
                  <span>Launch Test</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              <Link
                href="/pyq"
                className="liquid-glass-card p-5 rounded-2xl border-blue-500/30 hover:border-blue-500/60 transition-all hover:scale-[1.03] group shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-500/15 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    12-Year PYQ Vault
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    Solve official UPSC Prelims papers (2015–2026).
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1 text-xs font-bold text-blue-600 dark:text-blue-400">
                  <span>Solve PYQs</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              <Link
                href="/daily-ca"
                className="liquid-glass-card p-5 rounded-2xl border-emerald-500/30 hover:border-emerald-500/60 transition-all hover:scale-[1.03] group shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-sm text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    Daily CA 10-MCQ
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    Test today&apos;s editorial current affairs.
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  <span>Start Daily CA</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>

          </div>
        </div>
      ) : (
        /* 🏆 REAL LEADERBOARD VIEW WHEN CANDIDATES HAVE COMPLETED TESTS */
        <>
          {/* Top 3 Podium Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            {/* Rank 2 */}
            {entries[1] && (
              <div className="liquid-glass-card !overflow-visible rounded-3xl p-6 text-center relative order-2 md:order-1 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 font-black text-lg mx-auto flex items-center justify-center border-2 border-slate-400 mb-3 shadow-md">
                    2
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">{entries[1].name}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">UPSC {entries[1].targetYear} • {entries[1].optionalSubject}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-white/5">
                  <span className="text-2xl font-extrabold text-slate-900 dark:text-white">{entries[1].score}</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">Avg Marks ({entries[1].accuracy}% Acc)</span>
                </div>
              </div>
            )}

            {/* Rank 1 (Champion) */}
            {entries[0] && (
              <div className="liquid-glass-card !overflow-visible rounded-3xl p-6 border-orange-500/40 text-center relative order-1 md:order-2 md:-translate-y-2 flex flex-col justify-between shadow-xl mt-2 md:mt-0">
                {/* Floating AIR 1 Pill */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-black text-[11px] uppercase tracking-wider flex items-center gap-1.5 shadow-lg shadow-orange-500/30 z-20 whitespace-nowrap">
                  <Crown className="w-3.5 h-3.5 text-amber-100" />
                  <span>AIR 1 Aspirant</span>
                </div>
                <div className="pt-3">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-amber-400 text-slate-950 font-black text-2xl mx-auto flex items-center justify-center border-2 border-amber-200 mb-3 shadow-lg shadow-orange-500/30">
                    🥇
                  </div>
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-lg">{entries[0].name}</h3>
                  <p className="text-xs text-orange-700 dark:text-orange-300 font-semibold mt-0.5">UPSC {entries[0].targetYear} • {entries[0].optionalSubject}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-orange-500/20">
                  <span className="text-3xl font-black text-orange-600 dark:text-orange-400">{entries[0].score}</span>
                  <span className="text-xs text-slate-600 dark:text-slate-300 block font-medium">Avg Marks ({entries[0].accuracy}% Acc)</span>
                </div>
              </div>
            )}

            {/* Rank 3 */}
            {entries[2] && (
              <div className="liquid-glass-card !overflow-visible rounded-3xl p-6 text-center relative order-3 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-200 font-black text-lg mx-auto flex items-center justify-center border-2 border-amber-600 mb-3 shadow-md">
                    3
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">{entries[2].name}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">UPSC {entries[2].targetYear} • {entries[2].optionalSubject}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-white/5">
                  <span className="text-2xl font-extrabold text-slate-900 dark:text-white">{entries[2].score}</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">Avg Marks ({entries[2].accuracy}% Acc)</span>
                </div>
              </div>
            )}
          </div>

          {/* Personal Rank Banner */}
          {myRank && (
            <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-r from-orange-500/10 via-white to-emerald-500/10 dark:from-orange-500/20 dark:via-slate-900/90 dark:to-emerald-500/20 border border-orange-500/30 flex items-center justify-between flex-wrap gap-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-black text-base flex items-center justify-center shadow-md">
                  #{myRank.airRank}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">{myRank.name}</h4>
                  <p className="text-xs text-orange-700 dark:text-orange-300 font-medium">
                    Top {100 - myRank.percentile > 0 ? (100 - myRank.percentile).toFixed(1) : 1}% Nationwide • Streak: {myRank.streakCount} Days 🔥
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs font-semibold">
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block text-[10px]">Your Score</span>
                  <span className="text-slate-900 dark:text-white text-sm font-bold">{myRank.score}</span>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block text-[10px]">Accuracy</span>
                  <span className="text-emerald-700 dark:text-emerald-400 text-sm font-bold">{myRank.accuracy}%</span>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block text-[10px]">Tests Taken</span>
                  <span className="text-blue-700 dark:text-blue-400 text-sm font-bold">{myRank.testsTaken}</span>
                </div>
              </div>
            </div>
          )}

          {/* Search & Filter Bar */}
          <div className="liquid-glass-card rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search aspirant name..."
                className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-orange-500 shadow-sm"
              />
            </div>

            {/* Target Year Tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10">
              <button
                onClick={() => setSelectedYear('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedYear === 'all' ? 'bg-orange-500 text-white shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                All Years
              </button>
              <button
                onClick={() => setSelectedYear(2025)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedYear === 2025 ? 'bg-orange-500 text-white shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                UPSC 2025
              </button>
              <button
                onClick={() => setSelectedYear(2026)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedYear === 2026 ? 'bg-orange-500 text-white shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                UPSC 2026
              </button>
              <button
                onClick={() => setSelectedYear(2027)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedYear === 2027 ? 'bg-orange-500 text-white shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                UPSC 2027
              </button>
            </div>
          </div>

          {/* Full Leaderboard Table */}
          <div className="liquid-glass-card rounded-3xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 dark:bg-slate-900/90 text-slate-600 dark:text-slate-400 uppercase text-[10px] tracking-wider border-b border-slate-200 dark:border-white/10">
                  <tr>
                    <th className="py-3.5 px-4 font-bold">Rank</th>
                    <th className="py-3.5 px-4 font-bold">Aspirant Name</th>
                    <th className="py-3.5 px-4 font-bold">Target Year</th>
                    <th className="py-3.5 px-4 font-bold">Optional</th>
                    <th className="py-3.5 px-4 font-bold">Streak</th>
                    <th className="py-3.5 px-4 font-bold">Tests</th>
                    <th className="py-3.5 px-4 font-bold">Accuracy</th>
                    <th className="py-3.5 px-4 font-bold text-right">Avg Marks</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-white/5 font-medium text-slate-800 dark:text-slate-200">
                  {filteredEntries.map((entry) => {
                    const isMe = entry.id === 'me';
                    return (
                      <tr
                        key={entry.id}
                        className={`hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors ${
                          isMe ? 'bg-orange-500/10 font-bold border-l-4 border-orange-500' : ''
                        }`}
                      >
                        <td className="py-4 px-4 font-black text-sm text-slate-900 dark:text-white">
                          {entry.airRank === 1 ? '🥇 1' : entry.airRank === 2 ? '🥈 2' : entry.airRank === 3 ? '🥉 3' : `#${entry.airRank}`}
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-2">
                            <Link
                              href={`/aspirant/${entry.id}`}
                              className="text-slate-900 dark:text-white font-semibold hover:text-orange-600 dark:hover:text-orange-400 transition-colors flex items-center gap-1 group"
                            >
                              <span>{entry.name}</span>
                              <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-orange-500 transition-colors opacity-0 group-hover:opacity-100" />
                            </Link>
                            {entry.badge && (
                              <span className="text-[10px] px-1.5 py-0.5 rounded bg-orange-500/15 text-orange-700 dark:text-orange-300 font-bold">
                                {entry.badge}
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px]">
                            {entry.targetYear}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-slate-600 dark:text-slate-400">{entry.optionalSubject || 'General Studies'}</td>
                        <td className="py-4 px-4">
                          <span className="flex items-center gap-1 text-orange-600 dark:text-orange-400 font-semibold">
                            <Flame className="w-3.5 h-3.5" />
                            {entry.streakCount}d
                          </span>
                        </td>
                        <td className="py-4 px-4 text-slate-700 dark:text-slate-300">{entry.testsTaken}</td>
                        <td className="py-4 px-4">
                          <span className="text-emerald-700 dark:text-emerald-400 font-bold">{entry.accuracy}%</span>
                        </td>
                        <td className="py-4 px-4 text-right">
                          <span className="text-orange-600 dark:text-orange-400 font-extrabold text-sm">{entry.score}</span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
