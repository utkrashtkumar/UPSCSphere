'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Swords, 
  Users, 
  Flame, 
  CheckCircle2,
  KeyRound,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { getStoredProfile, getQuizHistory } from '@/lib/localDB';
import { supabase, isSupabaseConfigured } from '@/lib/supabaseClient';

export default function DuelArenaPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [profile, setProfile] = useState(getStoredProfile());

  const [isSearching, setIsSearching] = useState(false);
  const [matchedOpponent, setMatchedOpponent] = useState<any | null>(null);
  const [countdown, setCountdown] = useState(3);
  const [roomCode, setRoomCode] = useState('');
  const [showRoomModal, setShowRoomModal] = useState(false);

  useEffect(() => {
    setMounted(true);
    setProfile(getStoredProfile());
  }, []);

  const startMatchmaking = async () => {
    setIsSearching(true);
    setMatchedOpponent(null);

    let opponentData = {
      name: 'Priya Nambiar',
      targetYear: 2027,
      optional: 'PSIR',
      streak: 3,
      rating: 1280,
    };

    // If Supabase is connected, find another real user profile
    if (isSupabaseConfigured && supabase) {
      try {
        const { data: users } = await supabase
          .from('profiles')
          .select('name, target_year, optional_subject, streak_count')
          .neq('id', profile.email || '')
          .limit(10);

        if (users && users.length > 0) {
          const randomUser = users[Math.floor(Math.random() * users.length)];
          opponentData = {
            name: randomUser.name || 'Civil Services Aspirant',
            targetYear: randomUser.target_year || 2027,
            optional: randomUser.optional_subject || 'General Studies',
            streak: randomUser.streak_count || 1,
            rating: 1350,
          };
        }
      } catch (err) {
        console.error('Error matching online opponent', err);
      }
    }

    setTimeout(() => {
      setIsSearching(false);
      setMatchedOpponent(opponentData);

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
    }, 1500);
  };

  const handleJoinPrivateRoom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!roomCode.trim()) return;
    const config = {
      title: `1v1 Private Duel (Room: ${roomCode.trim().toUpperCase()})`,
      subjects: ['polity', 'history', 'economy', 'environment'],
      questionCount: 5,
      timeLimitMinutes: 5,
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
      <div className="liquid-glass-card rounded-3xl p-6 sm:p-10 text-center relative overflow-hidden shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Player 1 (You) */}
          <div className="p-6 rounded-2xl bg-white/90 dark:bg-slate-900/80 border border-orange-500/30 flex flex-col items-center shadow-sm">
            <div className="w-16 h-16 rounded-full bg-orange-500/15 border-2 border-orange-400 text-orange-600 dark:text-orange-300 text-2xl font-bold flex items-center justify-center mb-3 shadow-md">
              👨‍🎓
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">{profile.name || 'Aspirant'} (You)</h3>
            <span className="text-xs text-orange-700 dark:text-orange-400 font-semibold mt-1">UPSC {profile.targetYear} • {profile.optionalSubject}</span>
            <div className="mt-3 flex items-center gap-1 text-xs text-orange-600 dark:text-orange-400 font-bold">
              <Flame className="w-3.5 h-3.5" />
              <span suppressHydrationWarning>{mounted ? (profile.streakCount ?? 0) : 0} Day Streak</span>
            </div>
          </div>

          {/* Center VS Indicator / Action Button */}
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 via-amber-500 to-emerald-600 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-orange-500/30">
              VS
            </div>

            {!isSearching && !matchedOpponent && (
              <div className="flex flex-col gap-2.5 w-full max-w-xs">
                <button
                  onClick={startMatchmaking}
                  className="liquid-glass-btn w-full py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-600 text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-orange-500/20 hover:scale-105 transition-all"
                >
                  Find Challenger ⚔️
                </button>

                <button
                  onClick={() => setShowRoomModal(!showRoomModal)}
                  className="py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-slate-200 dark:hover:bg-slate-700 transition-all border border-slate-200 dark:border-white/10"
                >
                  {showRoomModal ? 'Hide Room Option' : 'Play with a Friend (Room Code)'}
                </button>
              </div>
            )}

            {showRoomModal && !isSearching && !matchedOpponent && (
              <form onSubmit={handleJoinPrivateRoom} className="w-full max-w-xs space-y-2 animate-fade-in">
                <div className="relative">
                  <KeyRound className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={roomCode}
                    onChange={(e) => setRoomCode(e.target.value)}
                    placeholder="Enter 6-digit room code"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-xs uppercase font-mono tracking-widest text-slate-900 dark:text-white focus:outline-none focus:border-orange-500"
                  />
                </div>
                <button
                  type="submit"
                  disabled={!roomCode.trim()}
                  className="w-full py-2.5 rounded-xl bg-orange-600 text-white text-xs font-bold shadow-md hover:bg-orange-700 transition-all disabled:opacity-50"
                >
                  Start Private Duel Room →
                </button>
              </form>
            )}

            {isSearching && (
              <div className="flex flex-col items-center gap-2">
                <div className="w-7 h-7 border-2 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
                <span className="text-xs text-orange-700 dark:text-orange-300 font-bold animate-pulse">Matching live active aspirant...</span>
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
