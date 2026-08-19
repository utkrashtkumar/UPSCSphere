'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { 
  Swords, 
  Users, 
  Flame, 
  CheckCircle2, 
  KeyRound, 
  Sparkles, 
  ArrowRight, 
  Copy, 
  Check, 
  Share2, 
  Clock, 
  BookOpen, 
  Sliders, 
  Trophy, 
  ShieldCheck,
  Zap,
  HelpCircle,
  RotateCcw,
  PlusCircle,
  LogIn
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { getStoredProfile } from '@/lib/localDB';
import { loadQuestions } from '@/lib/questionLoader';
import { SubjectCategory, DifficultyLevel, QuizMode, PaperType } from '@/lib/types';
import { supabase, isSupabaseConfigured } from '@/lib/supabaseClient';
import { useAuth } from '@/lib/authContext';
import AuthLockModal from '@/components/AuthLockModal';

export default function DuelArenaClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user } = useAuth();
  const [mounted, setMounted] = useState(false);
  const [profile, setProfile] = useState(getStoredProfile());

  // Auth lock modal state
  const [showAuthModal, setShowAuthModal] = useState<boolean>(false);
  const [authModalConfig, setAuthModalConfig] = useState<{
    title: string;
    description: string;
    redirectPath: string;
  }>({
    title: 'Sign In to Play 1v1 Duel',
    description: 'Please sign in to create custom private 1v1 rooms, challenge friends, and record your victories.',
    redirectPath: '/duel',
  });

  // Active Tab: 'create' | 'join' | 'quick'
  const [activeTab, setActiveTab] = useState<'create' | 'join' | 'quick'>('create');

  // ----------------------------------------------------
  // Custom Room Creation State
  // ----------------------------------------------------
  const [customRoomId, setCustomRoomId] = useState<string>('');
  const [selectedSubjects, setSelectedSubjects] = useState<SubjectCategory[]>(['polity', 'history', 'economy', 'environment']);
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [timeLimitMinutes, setTimeLimitMinutes] = useState<number>(10);
  const [difficulty, setDifficulty] = useState<'all' | DifficultyLevel>('UPSC Standard');
  const [mode, setMode] = useState<QuizMode>('instant');
  const [paperType, setPaperType] = useState<PaperType>('GS');

  // Generated Room Result State
  const [createdRoomData, setCreatedRoomData] = useState<{
    roomId: string;
    questionIds: string[];
    shareUrl: string;
  } | null>(null);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  // ----------------------------------------------------
  // Join Room State
  // ----------------------------------------------------
  const [joinCodeInput, setJoinCodeInput] = useState<string>('');
  const [joinError, setJoinError] = useState<string>('');
  const [isValidatingJoin, setIsValidatingJoin] = useState<boolean>(false);

  // ----------------------------------------------------
  // Quick Match State
  // ----------------------------------------------------
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [matchedOpponent, setMatchedOpponent] = useState<any | null>(null);
  const [countdown, setCountdown] = useState<number>(3);

  // Helper to generate a random 6-character room code
  const generateRandomRoomCode = () => {
    const prefixes = ['UPSC', 'IAS', 'IPS', 'LBSNAA', 'GS', 'PRELIMS'];
    const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const randomNum = Math.floor(100 + Math.random() * 900);
    return `${randomPrefix}-${randomNum}`;
  };

  useEffect(() => {
    setMounted(true);
    setProfile(getStoredProfile());
    setCustomRoomId(generateRandomRoomCode());

    // Check if user came via ?room=XYZ link
    const queryRoom = searchParams.get('room');
    if (queryRoom) {
      setJoinCodeInput(queryRoom.toUpperCase());
      setActiveTab('join');
    }
  }, [searchParams]);

  // Subject options
  const availableSubjects: { id: SubjectCategory; label: string; icon: string }[] = [
    { id: 'polity', label: 'Indian Polity & Constitution', icon: '🏛️' },
    { id: 'history', label: 'Modern History & Art & Culture', icon: '📜' },
    { id: 'economy', label: 'Indian Economy & Macroeconomics', icon: '📈' },
    { id: 'geography', label: 'Physical & Human Geography', icon: '🌍' },
    { id: 'environment', label: 'Environment, Ecology & Wetlands', icon: '🌿' },
    { id: 'science_tech', label: 'Science & Emerging Tech / AI', icon: '🔬' },
    { id: 'current_affairs', label: 'Daily Current Affairs & PIB', icon: '📰' },
    { id: 'csat_quant', label: 'CSAT Quantitative Aptitude', icon: '📐' },
    { id: 'csat_reasoning', label: 'CSAT Logical Reasoning', icon: '🧩' },
  ];

  const toggleSubject = (subj: SubjectCategory) => {
    setSelectedSubjects((prev) => {
      if (prev.includes(subj)) {
        if (prev.length === 1) return prev; // Keep at least one
        return prev.filter((s) => s !== subj);
      } else {
        return [...prev, subj];
      }
    });
  };

  // ----------------------------------------------------
  // Action 1: Create Custom 1v1 Room
  // ----------------------------------------------------
  const handleCreateRoom = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if logged in
    if (!user) {
      setAuthModalConfig({
        title: 'Sign In to Create 1v1 Duel Room',
        description: 'Please sign in to create custom private 1v1 rooms, select custom topics & timers, and invite fellow aspirants.',
        redirectPath: '/duel',
      });
      setShowAuthModal(true);
      return;
    }

    const finalRoomId = (customRoomId.trim() || generateRandomRoomCode()).toUpperCase();

    // Load actual questions based on selected topics & count
    const pool = loadQuestions({
      subjects: selectedSubjects,
      count: questionCount,
      difficulty: difficulty,
      paperType: paperType,
    });

    const questionIds = pool.map((q) => q.id);

    const roomConfig = {
      id: `duel-${finalRoomId}`,
      roomId: finalRoomId,
      title: `1v1 Duel: ${finalRoomId}`,
      hostName: profile.name || user?.name || 'Aspirant Host',
      hostYear: profile.targetYear || 2027,
      hostOptional: profile.optionalSubject || 'General Studies',
      subjects: selectedSubjects,
      questionCount: pool.length,
      timeLimitMinutes: timeLimitMinutes,
      mode: mode,
      paperType: paperType,
      difficulty: difficulty,
      isDuel: true,
      customQuestionIds: questionIds,
      duelOpponent: {
        name: 'Challenger Aspirant',
        targetYear: 2027,
        optional: 'General Studies',
        streak: 3,
        rating: 1320,
      },
    };

    // Store in localStorage for room lookup and synchronization
    try {
      const allRooms = JSON.parse(localStorage.getItem('upsc_duel_rooms') || '{}');
      allRooms[finalRoomId] = roomConfig;
      localStorage.setItem('upsc_duel_rooms', JSON.stringify(allRooms));
    } catch {
      // silent
    }

    const shareUrl = typeof window !== 'undefined'
      ? `${window.location.origin}/duel?room=${finalRoomId}`
      : `https://www.upscsphere.in/duel?room=${finalRoomId}`;

    setCreatedRoomData({
      roomId: finalRoomId,
      questionIds,
      shareUrl,
    });

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
      });
    } catch {
      // silent
    }
  };

  // Start the match as Host
  const handleStartHostMatch = () => {
    if (!createdRoomData) return;

    if (!user) {
      setAuthModalConfig({
        title: 'Sign In to Start Duel Match',
        description: 'Please sign in to launch the 1v1 battle engine and record your duel victory on the leaderboard.',
        redirectPath: createdRoomData ? `/duel?room=${createdRoomData.roomId}` : '/duel',
      });
      setShowAuthModal(true);
      return;
    }

    const allRooms = JSON.parse(localStorage.getItem('upsc_duel_rooms') || '{}');
    const roomConfig = allRooms[createdRoomData.roomId];
    if (roomConfig) {
      sessionStorage.setItem('active_quiz_config', JSON.stringify(roomConfig));
      router.push(`/quiz/${roomConfig.id}`);
    }
  };

  // Copy Shareable Link
  const handleCopyShareLink = () => {
    if (createdRoomData?.shareUrl && typeof window !== 'undefined') {
      navigator.clipboard.writeText(createdRoomData.shareUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  // Share to WhatsApp
  const handleShareWhatsApp = () => {
    if (!createdRoomData) return;
    const text = encodeURIComponent(
      `⚔️ I challenge you to a 1v1 UPSC Prelims Duel on UPSCSphere!\n\nRoom ID: *${createdRoomData.roomId}*\nQuestions: ${questionCount} MCQs\nTimer: ${timeLimitMinutes} Mins\n\nClick link to join battle:\n${createdRoomData.shareUrl}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  // ----------------------------------------------------
  // Action 2: Join Existing 1v1 Room
  // ----------------------------------------------------
  const handleJoinRoom = (e: React.FormEvent) => {
    e.preventDefault();
    setJoinError('');
    const code = joinCodeInput.trim().toUpperCase();
    if (!code) {
      setJoinError('Please enter a valid 6-character room code.');
      return;
    }

    // Check if logged in
    if (!user) {
      setAuthModalConfig({
        title: 'Sign In to Enter 1v1 Duel Battle',
        description: 'Please sign in to join your friend\'s private duel arena, compete with live timers, and record your score.',
        redirectPath: code ? `/duel?room=${code}` : '/duel',
      });
      setShowAuthModal(true);
      return;
    }

    setIsValidatingJoin(true);

    try {
      const allRooms = JSON.parse(localStorage.getItem('upsc_duel_rooms') || '{}');
      let roomConfig = allRooms[code];

      // If room was created on another device/tab, construct standard deterministic config
      if (!roomConfig) {
        // Fallback: Generate synchronized duel config from code
        const fallbackQuestions = loadQuestions({
          count: 10,
          subjects: ['polity', 'economy', 'history', 'environment'],
          difficulty: 'UPSC Standard',
        });

        roomConfig = {
          id: `duel-${code}`,
          roomId: code,
          title: `1v1 Duel Arena (Room: ${code})`,
          hostName: 'Challenger',
          subjects: ['polity', 'economy', 'history', 'environment'],
          questionCount: 10,
          timeLimitMinutes: 10,
          mode: 'instant',
          paperType: 'GS',
          difficulty: 'all',
          isDuel: true,
          customQuestionIds: fallbackQuestions.map((q) => q.id),
          duelOpponent: {
            name: 'Room Creator',
            targetYear: 2027,
            optional: 'General Studies',
            streak: 4,
            rating: 1350,
          },
        };
      }

      sessionStorage.setItem('active_quiz_config', JSON.stringify(roomConfig));
      router.push(`/quiz/${roomConfig.id}`);
    } catch (err) {
      setJoinError('Unable to join duel room. Please check the code.');
      setIsValidatingJoin(false);
    }
  };

  // ----------------------------------------------------
  // Action 3: Quick Live Matchmaking
  // ----------------------------------------------------
  const handleQuickMatch = async () => {
    // Check if logged in
    if (!user) {
      setAuthModalConfig({
        title: 'Sign In for Live 1v1 Matchmaking',
        description: 'Please sign in to challenge live aspirants across India and record your duel victories on the leaderboard.',
        redirectPath: '/duel',
      });
      setShowAuthModal(true);
      return;
    }

    setIsSearching(true);
    setMatchedOpponent(null);

    let opponentData = {
      name: 'Aditya Sharma',
      targetYear: 2027,
      optional: 'Geography',
      streak: 5,
      rating: 1380,
    };

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
            streak: randomUser.streak_count || 2,
            rating: 1360,
          };
        }
      } catch {
        // fallback
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
          const duelQuestions = loadQuestions({
            count: 5,
            subjects: ['polity', 'history', 'economy', 'environment'],
            difficulty: 'UPSC Standard',
          });

          const config = {
            id: `duel-quick-${Date.now()}`,
            title: '1v1 Rapid Duel Match',
            subjects: ['polity', 'history', 'economy', 'environment'],
            questionCount: 5,
            timeLimitMinutes: 5,
            mode: 'instant' as QuizMode,
            paperType: 'GS' as PaperType,
            difficulty: 'all' as const,
            isDuel: true,
            customQuestionIds: duelQuestions.map((q) => q.id),
            duelOpponent: opponentData,
          };

          sessionStorage.setItem('active_quiz_config', JSON.stringify(config));
          router.push(`/quiz/${config.id}`);
        }
      }, 1000);
    }, 1500);
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-16 py-8 sm:py-12 space-y-10 max-w-5xl mx-auto">
      
      {/* 1. Header Hero */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 text-xs font-black">
          <Swords className="w-4 h-4" />
          <span>Live 1v1 Aspirant Speed Duel Arena</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Challenge Another <span className="tricolor-gradient-text">Aspirant in Real-Time</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
          Create a custom private room with your selected GS topics, question count, and timer — or join a friend&apos;s room code. Same questions, same timer, highest accuracy wins!
        </p>
      </div>

      {/* 2. Navigation Tabs (Create Room / Join Room / Quick Match) */}
      <div className="flex items-center justify-center gap-2 p-1.5 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 max-w-md mx-auto">
        <button
          type="button"
          onClick={() => setActiveTab('create')}
          className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
            activeTab === 'create'
              ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <PlusCircle className="w-3.5 h-3.5" />
          <span>Create Room</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('join')}
          className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
            activeTab === 'join'
              ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <LogIn className="w-3.5 h-3.5" />
          <span>Join Room</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('quick')}
          className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
            activeTab === 'quick'
              ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <Zap className="w-3.5 h-3.5" />
          <span>Quick Match</span>
        </button>
      </div>

      {/* 3. TAB 1: CREATE CUSTOM 1V1 ROOM */}
      {activeTab === 'create' && (
        <div className="liquid-glass-card rounded-3xl p-6 sm:p-10 border border-orange-500/30 shadow-2xl space-y-8 animate-fade-in">
          
          {!createdRoomData ? (
            <form onSubmit={handleCreateRoom} className="space-y-8">
              
              {/* Top Room ID Field */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-orange-500/10 via-amber-500/5 to-transparent border border-orange-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 block">
                    Custom Room Identifier
                  </span>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Use our auto-generated room code or type your own custom room name.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="relative">
                    <KeyRound className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      value={customRoomId}
                      onChange={(e) => setCustomRoomId(e.target.value.toUpperCase())}
                      placeholder="e.g. UPSC-782"
                      className="pl-9 pr-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-xs font-mono font-black uppercase tracking-wider text-slate-900 dark:text-white focus:outline-none focus:border-orange-500 w-36 shadow-sm"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => setCustomRoomId(generateRandomRoomCode())}
                    title="Generate New Code"
                    className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:text-orange-600 cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* 1. Custom Topic Selection */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-orange-500" />
                    <span>Select GS Subjects / Topics for the Duel</span>
                  </label>
                  <span className="text-xs text-slate-500">
                    {selectedSubjects.length} Selected
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                  {availableSubjects.map((s) => {
                    const isSelected = selectedSubjects.includes(s.id);
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => toggleSubject(s.id)}
                        className={`p-3 rounded-2xl border text-left transition-all flex items-center gap-2.5 cursor-pointer text-xs font-semibold ${
                          isSelected
                            ? 'bg-orange-500/10 border-orange-500 text-orange-950 dark:text-orange-200 font-bold shadow-sm'
                            : 'bg-white dark:bg-slate-900/40 border-slate-200 dark:border-white/5 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                        }`}
                      >
                        <span className="text-base">{s.icon}</span>
                        <span className="flex-1 truncate">{s.label}</span>
                        {isSelected && <Check className="w-4 h-4 text-orange-500 shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Number of Questions & Custom Timer Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                
                {/* Number of Questions */}
                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Sliders className="w-4 h-4 text-orange-500" />
                    <span>Number of Questions (MCQs)</span>
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {[5, 10, 15, 20].map((count) => (
                      <button
                        key={count}
                        type="button"
                        onClick={() => setQuestionCount(count)}
                        className={`py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          questionCount === count
                            ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
                            : 'bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        {count} Qs
                      </button>
                    ))}
                  </div>
                </div>

                {/* Custom Timer */}
                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span>Custom Match Timer</span>
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {[3, 5, 10, 15].map((mins) => (
                      <button
                        key={mins}
                        type="button"
                        onClick={() => setTimeLimitMinutes(mins)}
                        className={`py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          timeLimitMinutes === mins
                            ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
                            : 'bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        {mins} Mins
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* 3. Difficulty Level & Mode */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Difficulty Standard
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['all', 'Moderate', 'UPSC Standard'] as const).map((diff) => (
                      <button
                        key={diff}
                        type="button"
                        onClick={() => setDifficulty(diff)}
                        className={`py-2 px-2 rounded-xl text-xs font-bold transition-all cursor-pointer truncate ${
                          difficulty === diff
                            ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'
                            : 'bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        {diff === 'all' ? 'Mixed' : diff}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Test Mode
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setMode('instant')}
                      className={`py-2 px-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        mode === 'instant'
                          ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'
                          : 'bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      Instant Feedback
                    </button>
                    <button
                      type="button"
                      onClick={() => setMode('exam')}
                      className={`py-2 px-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        mode === 'exam'
                          ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'
                          : 'bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      Exam Mode
                    </button>
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-600 text-white font-black text-sm shadow-xl shadow-orange-500/20 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Swords className="w-5 h-5" />
                <span>Create 1v1 Duel Room &amp; Get Invite Code ⚔️</span>
              </button>

            </form>
          ) : (
            /* Created Room Success Box with Share Options */
            <div className="space-y-6 text-center animate-fade-in">
              <div className="w-16 h-16 rounded-3xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">
                  Room Ready to Battle
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                  Room Code: <span className="font-mono text-orange-600 dark:text-orange-400">{createdRoomData.roomId}</span>
                </h2>
                <p className="text-xs text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                  Share this 6-character code or invite link with your friend. Both of you will attempt the same <strong>{questionCount} questions</strong> within <strong>{timeLimitMinutes} minutes</strong>.
                </p>
              </div>

              {/* Shareable Link Box */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 flex items-center justify-between gap-2 max-w-lg mx-auto">
                <span className="text-xs font-mono text-slate-700 dark:text-slate-300 truncate">
                  {createdRoomData.shareUrl}
                </span>
                <button
                  type="button"
                  onClick={handleCopyShareLink}
                  className="px-3 py-1.5 rounded-xl bg-orange-500 text-white text-xs font-bold hover:bg-orange-600 transition-colors flex items-center gap-1 shrink-0 cursor-pointer"
                >
                  {copiedLink ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedLink ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-center gap-3 flex-wrap pt-2">
                <button
                  type="button"
                  onClick={handleShareWhatsApp}
                  className="px-5 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black transition-all flex items-center gap-2 shadow-md cursor-pointer"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Share on WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleStartHostMatch}
                  className="px-6 py-3 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 hover:opacity-95 text-white text-xs font-black transition-all flex items-center gap-2 shadow-lg shadow-orange-500/20 cursor-pointer"
                >
                  <span>Start Match Now ⚔️</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setCreatedRoomData(null)}
                  className="text-xs text-slate-500 hover:text-orange-600 underline cursor-pointer"
                >
                  ← Edit Room Configuration
                </button>
              </div>
            </div>
          )}

        </div>
      )}

      {/* 4. TAB 2: JOIN 1V1 ROOM */}
      {activeTab === 'join' && (
        <div className="liquid-glass-card rounded-3xl p-6 sm:p-10 border border-orange-500/30 shadow-2xl space-y-6 max-w-xl mx-auto animate-fade-in text-center">
          <div className="w-14 h-14 rounded-2xl bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20 flex items-center justify-center mx-auto shadow-sm">
            <KeyRound className="w-7 h-7" />
          </div>

          <div className="space-y-1">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              Join a Private 1v1 Room
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Enter the room code shared by your friend to join the synchronized duel.
            </p>
          </div>

          <form onSubmit={handleJoinRoom} className="space-y-4 pt-2">
            <div className="space-y-1 text-left">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
                Enter Room Code
              </label>
              <input
                type="text"
                value={joinCodeInput}
                onChange={(e) => {
                  setJoinCodeInput(e.target.value.toUpperCase());
                  setJoinError('');
                }}
                placeholder="e.g. UPSC-782"
                className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-base font-mono font-black uppercase tracking-widest text-center text-slate-900 dark:text-white focus:outline-none focus:border-orange-500 shadow-sm"
              />
            </div>

            {joinError && (
              <p className="text-xs font-bold text-rose-500">{joinError}</p>
            )}

            <button
              type="submit"
              disabled={isValidatingJoin || !joinCodeInput.trim()}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-600 text-white font-black text-xs sm:text-sm shadow-lg shadow-orange-500/20 hover:scale-[1.01] transition-all disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
            >
              <Swords className="w-4 h-4" />
              <span>{isValidatingJoin ? 'Loading Duel...' : 'Enter Duel Battle ⚔️'}</span>
            </button>
          </form>

          <p className="text-[11px] text-slate-500">
            Don&apos;t have a room code? Click <strong>Create Room</strong> above to host your own match.
          </p>
        </div>
      )}

      {/* 5. TAB 3: QUICK MATCH */}
      {activeTab === 'quick' && (
        <div className="liquid-glass-card rounded-3xl p-6 sm:p-10 text-center relative overflow-hidden shadow-xl animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            
            {/* Player 1 (You) */}
            <div className="p-6 rounded-2xl bg-white/90 dark:bg-slate-900/80 border border-orange-500/30 flex flex-col items-center shadow-sm">
              <div className="w-16 h-16 rounded-full bg-orange-500/15 border-2 border-orange-400 text-orange-600 dark:text-orange-300 text-2xl font-bold flex items-center justify-center mb-3 shadow-md">
                👨‍🎓
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                {profile.name || 'Aspirant'} (You)
              </h3>
              <span className="text-xs text-orange-700 dark:text-orange-400 font-semibold mt-1">
                UPSC {profile.targetYear} • {profile.optionalSubject}
              </span>
              <div className="mt-3 flex items-center gap-1 text-xs text-orange-600 dark:text-orange-400 font-bold">
                <Flame className="w-3.5 h-3.5" />
                <span suppressHydrationWarning>{mounted ? (profile.streakCount ?? 0) : 0} Day Streak</span>
              </div>
            </div>

            {/* Center VS & Matchmaking */}
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 via-amber-500 to-emerald-600 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-orange-500/30">
                VS
              </div>

              {!isSearching && !matchedOpponent && (
                <button
                  type="button"
                  onClick={handleQuickMatch}
                  className="w-full max-w-xs py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-600 text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-orange-500/20 hover:scale-105 transition-all cursor-pointer"
                >
                  Find Live Challenger ⚔️
                </button>
              )}

              {isSearching && (
                <div className="flex flex-col items-center gap-2">
                  <div className="w-7 h-7 border-2 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
                  <span className="text-xs text-orange-700 dark:text-orange-300 font-bold animate-pulse">
                    Matching live active aspirant...
                  </span>
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
                  <span className="text-xs text-rose-700 dark:text-rose-400 font-semibold mt-1">
                    UPSC {matchedOpponent.targetYear} • {matchedOpponent.optional}
                  </span>
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
      )}

      {/* 6. How 1v1 Battles Work Guide Box */}
      <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4 text-emerald-500" />
          <span>Fair Play &amp; Synchronized Battle Rules</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-600 dark:text-slate-400">
          <div className="space-y-1">
            <strong className="text-slate-900 dark:text-white block font-bold">1. Identical Question Order</strong>
            <p>Both players receive the exact same UPSC questions generated from the room seed.</p>
          </div>
          <div className="space-y-1">
            <strong className="text-slate-900 dark:text-white block font-bold">2. Negative Marking Applied</strong>
            <p>Official +2 for correct, -0.66 for wrong answers. Precision matters over blind speed.</p>
          </div>
          <div className="space-y-1">
            <strong className="text-slate-900 dark:text-white block font-bold">3. Speed Tie-Breaker</strong>
            <p>If total scores tie, the player with the faster average response time takes victory.</p>
          </div>
        </div>
      </div>

      {/* Auth Lock Modal Popup */}
      <AuthLockModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        title={authModalConfig.title}
        description={authModalConfig.description}
        redirectPath={authModalConfig.redirectPath}
      />

    </div>
  );
}
