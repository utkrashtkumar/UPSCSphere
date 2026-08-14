'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Swords, 
  Users, 
  Flame, 
  CheckCircle2
} from 'lucide-react';
import { getStoredProfile } from '@/lib/localDB';

export default function DuelArenaPage() {
  const router = useRouter();
  const profile = getStoredProfile();

  const [isSearching, setIsSearching] = useState(false);
  const [matchedOpponent, setMatchedOpponent] = useState<any | null>(null);
  const [countdown, setCountdown] = useState(3);

  const startMatchmaking = () => {
    setIsSearching(true);
    setMatchedOpponent(null);

    // Simulate instant matchmaking with active aspirant
    setTimeout(() => {
      setIsSearching(false);
      setMatchedOpponent({
        name: 'Kavya Sengupta',
        targetYear: 2026,
        optional: 'Sociology',
        streak: 18,
        rating: 1420,
      });

      let count = 3;
      const interval = setInterval(() => {
        count -= 1;
        setCountdown(count);
        if (count === 0) {
          clearInterval(interval);
          // Start 5-question rapid duel
          const config = {
            title: '1v1 Rapid Duel Match',
            subjects: ['polity', 'history', 'economy', 'environment'],
            questionCount: 5,
            timeLimitMinutes: 5,
            mode: 'instant',
            paperType: 'GS',
            difficulty: 'all',
          };
          sessionStorage.setItem('active_quiz_config', JSON.stringify(config));
          router.push('/quiz/session');
        }
      }, 1000);
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 dark:bg-rose-500/15 border border-rose-500/30 text-rose-700 dark:text-rose-300 text-xs font-bold mb-3">
          <Swords className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />
          <span>Live 1v1 Aspirant Battle Arena</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Challenge Another <span className="tricolor-gradient-text">Aspirant in Real-Time</span>
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-xl mx-auto">
          Same 5 UPSC questions, same 5-minute timer. Highest score and fastest accuracy wins the duel!
        </p>
      </div>

      {/* Duel Arena Match Card */}
      <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 text-center relative overflow-hidden shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Player 1 (You) */}
          <div className="p-6 rounded-2xl bg-white/90 dark:bg-slate-900/80 border border-orange-500/30 flex flex-col items-center shadow-sm">
            <div className="w-16 h-16 rounded-full bg-orange-500/15 border-2 border-orange-400 text-orange-600 dark:text-orange-300 text-2xl font-bold flex items-center justify-center mb-3 shadow-md">
              👨‍🎓
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">{profile.name} (You)</h3>
            <span className="text-xs text-orange-700 dark:text-orange-400 font-semibold mt-1">UPSC {profile.targetYear} • {profile.optionalSubject}</span>
            <div className="mt-3 flex items-center gap-1 text-xs text-orange-600 dark:text-orange-400 font-bold">
              <Flame className="w-3.5 h-3.5" />
              <span>{profile.streakCount} Day Streak</span>
            </div>
          </div>

          {/* Center VS Indicator / Action Button */}
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 via-amber-500 to-emerald-600 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-orange-500/30">
              VS
            </div>

            {!isSearching && !matchedOpponent && (
              <button
                onClick={startMatchmaking}
                className="liquid-glass-btn px-6 py-3 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-600 text-white font-extrabold text-xs shadow-lg shadow-orange-500/20 hover:scale-105 transition-all"
              >
                Find Challenger ⚔️
              </button>
            )}

            {isSearching && (
              <div className="flex flex-col items-center gap-2">
                <div className="w-6 h-6 border-2 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
                <span className="text-xs text-orange-700 dark:text-orange-300 font-bold animate-pulse">Matching active aspirant...</span>
              </div>
            )}

            {matchedOpponent && (
              <div className="flex flex-col items-center gap-1 text-emerald-700 dark:text-emerald-400 font-bold text-xs animate-bounce">
                <CheckCircle2 className="w-5 h-5" />
                <span>Match Found! Starting in {countdown}s</span>
              </div>
            )}
          </div>

          {/* Player 2 (Opponent) */}
          <div className="p-6 rounded-2xl bg-white/90 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 flex flex-col items-center shadow-sm">
            {matchedOpponent ? (
              <>
                <div className="w-16 h-16 rounded-full bg-rose-500/15 border-2 border-rose-400 text-rose-600 dark:text-rose-300 text-2xl font-bold flex items-center justify-center mb-3 shadow-md">
                  👩‍🎓
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base">{matchedOpponent.name}</h3>
                <span className="text-xs text-rose-700 dark:text-rose-400 font-semibold mt-1">UPSC {matchedOpponent.targetYear} • {matchedOpponent.optional}</span>
                <div className="mt-3 flex items-center gap-1 text-xs text-orange-600 dark:text-orange-400 font-bold">
                  <Flame className="w-3.5 h-3.5" />
                  <span>{matchedOpponent.streak} Day Streak</span>
                </div>
              </>
            ) : (
              <div className="py-6 flex flex-col items-center justify-center text-slate-400 dark:text-slate-500">
                <Users className="w-12 h-12 mb-2 stroke-[1.5]" />
                <span className="text-xs font-semibold">Waiting for Challenger...</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
