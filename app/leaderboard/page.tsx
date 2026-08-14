'use client';

import React, { useState, useEffect } from 'react';
import { 
  Trophy, 
  Flame, 
  Search, 
  Crown
} from 'lucide-react';
import { mockLeaderboardData } from '@/data/mockLeaderboard';
import { LeaderboardEntry, UserProfile } from '@/lib/types';
import { getStoredProfile, getQuizHistory } from '@/lib/localDB';

export default function LeaderboardPage() {
  const [entries, setEntries] = useState<LeaderboardEntry[]>(mockLeaderboardData);
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [profile, setProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    const userProf = getStoredProfile();
    setProfile(userProf);

    // If user has taken quizzes, integrate their personal score into the leaderboard
    const history = getQuizHistory();
    if (history.length > 0) {
      const myAvgScore = userProf.averageScore;
      const myEntry: LeaderboardEntry = {
        id: 'me',
        name: `${userProf.name} (You)`,
        targetYear: userProf.targetYear,
        score: myAvgScore,
        accuracy: history[0]?.accuracy || 85,
        testsTaken: userProf.totalQuizzesTaken,
        airRank: 0,
        percentile: 0,
        optionalSubject: userProf.optionalSubject,
        streakCount: userProf.streakCount,
        badge: 'Your Rank 🎯',
      };

      const combined = [...mockLeaderboardData.filter(e => e.id !== 'me'), myEntry];
      combined.sort((a, b) => b.score - a.score);
      combined.forEach((e, idx) => {
        e.airRank = idx + 1;
        e.percentile = parseFloat((100 - (idx / combined.length) * 10).toFixed(1));
      });

      setEntries(combined);
    }
  }, []);

  const filteredEntries = entries.filter((e) => {
    if (selectedYear !== 'all' && e.targetYear !== selectedYear) return false;
    if (searchQuery.trim() && !e.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  const myRank = entries.find((e) => e.id === 'me');

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 dark:bg-orange-500/15 border border-orange-500/30 text-orange-700 dark:text-orange-300 text-xs font-bold mb-3">
          <Trophy className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" />
          <span>Real-Time All-India Rankings</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          All-India Aspirant <span className="tricolor-gradient-text">Leaderboard</span>
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-2xl mx-auto">
          Compare your mock scores and accuracy against 48,500+ serious UPSC civil services aspirants across India.
        </p>
      </div>

      {/* Top 3 Podium Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
        {/* Rank 2 */}
        {entries[1] && (
          <div className="liquid-glass-card rounded-3xl p-6 text-center relative order-2 md:order-1 flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 font-black text-lg mx-auto flex items-center justify-center border-2 border-slate-400 mb-3 shadow-md">
                2
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base">{entries[1].name}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">UPSC {entries[1].targetYear} • {entries[1].optionalSubject}</p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200 dark:border-white/5">
              <span className="text-2xl font-extrabold text-slate-900 dark:text-white">{entries[1].score}</span>
              <span className="text-xs text-slate-500 dark:text-slate-400 block">Avg Marks ({entries[1].accuracy}% Acc)</span>
            </div>
          </div>
        )}

        {/* Rank 1 (Champion) */}
        {entries[0] && (
          <div className="liquid-glass-card rounded-3xl p-6 border-orange-500/40 text-center relative order-1 md:order-2 md:-translate-y-2 flex flex-col justify-between shadow-xl">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-black text-[10px] uppercase tracking-wider flex items-center gap-1 shadow-md">
              <Crown className="w-3 h-3" /> AIR 1 Aspirant
            </div>
            <div className="pt-2">
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
          <div className="liquid-glass-card rounded-3xl p-6 text-center relative order-3 flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-200 font-black text-lg mx-auto flex items-center justify-center border-2 border-amber-600 mb-3 shadow-md">
                3
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base">{entries[2].name}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">UPSC {entries[2].targetYear} • {entries[2].optionalSubject}</p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200 dark:border-white/5">
              <span className="text-2xl font-extrabold text-slate-900 dark:text-white">{entries[2].score}</span>
              <span className="text-xs text-slate-500 dark:text-slate-400 block">Avg Marks ({entries[2].accuracy}% Acc)</span>
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
                        <span className="text-slate-900 dark:text-white font-semibold">{entry.name}</span>
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
                    <td className="py-4 px-4 text-slate-600 dark:text-slate-400">{entry.optionalSubject || 'PSIR'}</td>
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
    </div>
  );
}
