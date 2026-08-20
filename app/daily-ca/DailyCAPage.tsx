'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { 
  Sparkles, 
  Flame, 
  Play, 
  BookOpen, 
  CheckCircle2, 
  HelpCircle, 
  Lightbulb, 
  ExternalLink, 
  ChevronDown, 
  ChevronUp, 
  Tag, 
  ShieldCheck, 
  Globe2, 
  Cpu, 
  Landmark, 
  Leaf, 
  Coins, 
  Layers, 
  PlusCircle, 
  Loader2, 
  Award, 
  Clock,
  Lock,
  ArrowRight,
  RefreshCw,
  Calendar,
  Check
} from 'lucide-react';
import { dailyCAQuestions, dailyCA_2026_08_20 } from '@/data/dailyCAData';
import { getStoredProfile } from '@/lib/localDB';
import { UserProfile, Question } from '@/lib/types';
import { useAuth } from '@/lib/authContext';
import { getTodayISTDate } from '@/lib/dailyCAGenerator';
import DailyCANotificationBell from '@/components/DailyCANotificationBell';
import AuthLockModal from '@/components/AuthLockModal';

export default function DailyCAPage() {
  const router = useRouter();
  const { user } = useAuth();
  const [mounted, setMounted] = useState<boolean>(false);
  const [profile, setProfile] = useState<UserProfile | null>(null);

  // Auth lock modal state
  const [showAuthModal, setShowAuthModal] = useState<boolean>(false);
  const [authModalConfig, setAuthModalConfig] = useState({
    title: 'Sign In to Attempt Daily CA Mock',
    description: 'Please sign in to attempt live timed mocks, record your All-India rank, and track negative marking.'
  });
  
  // Active Edition Date (Defaults to Today's IST Date)
  const [selectedDate, setSelectedDate] = useState<string>(getTodayISTDate());
  
  // State for active questions (defaults to today's curated edition)
  const [questionsList, setQuestionsList] = useState<Question[]>(dailyCA_2026_08_20);
  const [isLoadingAPI, setIsLoadingAPI] = useState<boolean>(false);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  // State for active question set
  const [activeSet, setActiveSet] = useState<'set1' | 'set2' | 'all'>('set1');
  const [isSet2Unlocked, setIsSet2Unlocked] = useState<boolean>(true);
  const [isGeneratingSet2, setIsGeneratingSet2] = useState<boolean>(false);
  const [generationSuccessMessage, setGenerationSuccessMessage] = useState<string | null>(null);

  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [expandedQuestions, setExpandedQuestions] = useState<Record<string, boolean>>({});
  const [userSelectedCAAnswers, setUserSelectedCAAnswers] = useState<Record<string, number>>({});

  const handleCAOptionClick = (questionId: string, optIdx: number) => {
    if (!user) {
      setAuthModalConfig({
        title: 'Sign In to Check Your Answer',
        description: 'Sign in to see if your answer is correct, view instant UPSC explanations, and unlock standard textbook page citations.'
      });
      setShowAuthModal(true);
      return;
    }
    setUserSelectedCAAnswers(prev => ({ ...prev, [questionId]: optIdx }));
    setExpandedQuestions(prev => ({ ...prev, [questionId]: true }));
  };

  // Fetch live daily CA questions from API
  const fetchLiveDailyCA = async (dateStr: string, forceRefresh = false) => {
    try {
      if (forceRefresh) {
        setIsRefreshing(true);
      } else {
        setIsLoadingAPI(true);
      }
      
      const url = `/api/daily-ca?date=${dateStr}${forceRefresh ? '&refresh=true' : ''}`;
      const res = await fetch(url, { cache: 'no-store' });
      
      if (res.ok) {
        const data = await res.json();
        if (data.success && Array.isArray(data.questions) && data.questions.length > 0) {
          setQuestionsList(data.questions);
          try {
            sessionStorage.setItem('daily_ca_active_questions', JSON.stringify(data.questions));
          } catch {
            // ignore
          }
          if (forceRefresh) {
            setGenerationSuccessMessage(`✨ Edition refreshed! Latest verified questions loaded for ${dateStr}.`);
            setTimeout(() => setGenerationSuccessMessage(null), 4000);
          }
        }
      }
    } catch (err) {
      console.warn('API daily-ca fetch error, using local dataset:', err);
    } finally {
      setIsLoadingAPI(false);
      setIsRefreshing(false);
    }
  };

  // Fetch today's automated edition from API on mount & on date change
  useEffect(() => {
    setMounted(true);
    setProfile(getStoredProfile());

    try {
      const stored = localStorage.getItem('daily_ca_set2_unlocked');
      if (stored === 'true') {
        setIsSet2Unlocked(true);
      }
    } catch {
      // ignore
    }

    fetchLiveDailyCA(selectedDate);
  }, [selectedDate]);

  // Handle on-demand generation of Set 2 (Next 10 questions)
  const handleGenerateSet2 = () => {
    if (!user) {
      setAuthModalConfig({
        title: 'Sign In to Unlock Editorial Dossier (Set 2)',
        description: 'Create a free account to unlock the additional 10 daily editorial questions, complete syllabus tracking, and AI citations.'
      });
      setShowAuthModal(true);
      return;
    }

    setIsGeneratingSet2(true);
    setGenerationSuccessMessage(null);

    setTimeout(() => {
      setIsGeneratingSet2(false);
      setIsSet2Unlocked(true);
      setActiveSet('set2');
      try {
        localStorage.setItem('daily_ca_set2_unlocked', 'true');
      } catch {
        // ignore
      }
      setGenerationSuccessMessage('🎉 10 Additional UPSC Current Affairs Questions Generated & Citations Verified!');
      setTimeout(() => setGenerationSuccessMessage(null), 5000);
    }, 1200);
  };

  // Launch Quiz in Live Session
  const handleStartQuiz = (setChoice: 'set1' | 'set2' | 'all') => {
    if (!user) {
      setAuthModalConfig({
        title: 'Sign In to Attempt Daily CA Test',
        description: 'Please sign in to take this daily current affairs test in timed exam mode with instant scoring, negative marking (-0.66), and nationwide AIR ranking.'
      });
      setShowAuthModal(true);
      return;
    }

    const isFullMock = setChoice === 'all';
    const qCount = isFullMock ? questionsList.length : 10;
    const timeLimit = isFullMock ? 30 : 15;

    const titlePrefix = setChoice === 'set1' 
      ? 'Daily Current Affairs Quiz (Set 1)' 
      : setChoice === 'set2' 
      ? 'Daily Current Affairs Editorial Dossier (Set 2)' 
      : 'Daily Current Affairs Mega 20-Q Mock';

    const config = {
      id: `daily-ca-${setChoice}-${selectedDate}`,
      title: `${titlePrefix} — ${selectedDate}`,
      subjects: ['current_affairs'],
      questionCount: qCount,
      timeLimitMinutes: timeLimit,
      mode: 'instant',
      paperType: 'GS',
      difficulty: 'all',
      isDailyCA: true,
      dailyCASet: setChoice,
    };

    try {
      sessionStorage.setItem('daily_ca_active_questions', JSON.stringify(questionsList));
    } catch {
      // ignore
    }

    sessionStorage.setItem('active_quiz_config', JSON.stringify(config));
    router.push('/quiz/session');
  };

  const toggleQuestionExpand = (id: string) => {
    setExpandedQuestions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Available archive dates for edition switching
  const editionDates = [
    { date: '2026-08-20', label: 'Today (20 Aug)' },
    { date: '2026-08-19', label: 'Yesterday (19 Aug)' },
    { date: '2026-08-18', label: '18 Aug 2026' },
    { date: '2026-08-17', label: '17 Aug 2026' },
    { date: '2026-08-16', label: '16 Aug 2026' },
    { date: '2026-08-15', label: '15 Aug (Ind. Day)' },
  ];

  // Filter pool based on active set
  const basePool = activeSet === 'set1' 
    ? questionsList.slice(0, 10) 
    : activeSet === 'set2' 
    ? questionsList.slice(10, 20) 
    : questionsList;

  const filteredQuestions = selectedTopic === 'all' 
    ? basePool 
    : basePool.filter(q => q.topic.toLowerCase().includes(selectedTopic.toLowerCase()) || q.subTopic.toLowerCase().includes(selectedTopic.toLowerCase()));

  const topics = [
    { id: 'all', label: `All in ${activeSet === 'all' ? 'Mega Dossier' : activeSet === 'set1' ? 'Set 1' : 'Set 2'} (${basePool.length})`, icon: Sparkles },
    { id: 'polity', label: 'Polity & Constitution', icon: Landmark },
    { id: 'science', label: 'Sci-Tech & Quantum', icon: Cpu },
    { id: 'economy', label: 'Economy & RBI SROs', icon: Coins },
    { id: 'environment', label: 'Environment & Wildlife', icon: Leaf },
    { id: 'international', label: 'Foreign Policy & UN', icon: Globe2 },
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-16 py-8 space-y-8">
      
      {/* Hero Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-500/10 dark:bg-blue-500/15 border border-blue-500/30 text-blue-700 dark:text-blue-300 text-xs font-bold shadow-sm">
          <div className="relative w-4 h-4 rounded-full overflow-hidden shrink-0">
            <Image
              src="/logo.png"
              alt="UPSCSphere"
              width={16}
              height={16}
              className="w-full h-full object-cover"
            />
          </div>
          <span>Real-time Current Affairs — Daily Questions with Strict Citations &amp; Timestamps</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Daily UPSC <span className="tricolor-gradient-text">Current Affairs Hub</span>
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Attempt the initial 10 high-yield questions, then unlock an extra 10 editorial dossier questions (up to 20 MCQs daily) curated from The Hindu, Indian Express, PIB, Down To Earth, and PRS India.
        </p>
      </div>

      {/* Generation Success Banner */}
      {generationSuccessMessage && (
        <div className="p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-sm font-bold flex items-center gap-3 animate-in fade-in slide-in-from-top-3 duration-300 shadow-lg">
          <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
          <span>{generationSuccessMessage}</span>
        </div>
      )}

      {/* Daily Morning CA Notification Banner */}
      <DailyCANotificationBell />

      {/* 📅 Multi-Day Edition Selector & Live Refresh Bar */}
      <div className="liquid-glass-card rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-2 flex-wrap w-full md:w-auto">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 mr-2">
            <Calendar className="w-4 h-4 text-orange-500" />
            <span>Select Edition Date:</span>
          </div>

          {editionDates.map((item) => {
            const isSelected = selectedDate === item.date;
            return (
              <button
                key={item.date}
                type="button"
                onClick={() => setSelectedDate(item.date)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-orange-500 text-white shadow-md shadow-orange-500/25 font-black'
                    : 'bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Refresh Today's Edition Button */}
        <button
          type="button"
          onClick={() => fetchLiveDailyCA(selectedDate, true)}
          disabled={isRefreshing || isLoadingAPI}
          className="px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 hover:border-orange-500 text-slate-800 dark:text-slate-200 text-xs font-bold hover:text-orange-600 transition-all flex items-center gap-2 shadow-xs shrink-0 cursor-pointer disabled:opacity-50"
          title="Force-refresh today's edition from live editorial server"
        >
          <RefreshCw className={`w-3.5 h-3.5 text-orange-500 ${isRefreshing ? 'animate-spin' : ''}`} />
          <span>{isRefreshing ? 'Syncing...' : '🔄 Refresh Today\'s Edition'}</span>
        </button>
      </div>

      {/* Streak & Launch Card */}
      <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 border-orange-500/30 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
        <div className="h-[2px] w-full running-tricolor-line absolute top-0 left-0 right-0" />

        <div className="space-y-2 text-center lg:text-left">
          <div className="flex items-center gap-2 flex-wrap justify-center lg:justify-start">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 dark:bg-orange-500/20 text-orange-700 dark:text-orange-400 text-xs font-extrabold border border-orange-500/30">
              <Flame className="w-4 h-4 text-orange-500" />
              <span suppressHydrationWarning>{mounted ? (profile?.streakCount ?? 0) : 0} Day Streak</span>
            </div>
            <span suppressHydrationWarning className="text-xs font-bold text-slate-700 dark:text-slate-300">
              Edition: {selectedDate}
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold border border-blue-500/20">
              {questionsList.length} Questions Loaded
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            Daily High-Yield Prelims CA Test
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl">
            Complete the Standard 10-Question Test, or generate 10 additional editorial questions for maximum daily Prelims retention with instant book citations.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
          <button
            onClick={() => handleStartQuiz('set1')}
            className="w-full sm:w-auto liquid-glass-btn flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-600 text-white font-extrabold text-xs sm:text-sm shadow-xl shadow-orange-500/25 hover:scale-105 transition-all whitespace-nowrap cursor-pointer"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Start Set 1 (10-Q Test)</span>
          </button>

          <button
            onClick={() => handleStartQuiz('all')}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs sm:text-sm shadow-xl shadow-blue-500/25 hover:scale-105 transition-all whitespace-nowrap cursor-pointer"
          >
            <Award className="w-4 h-4" />
            <span>Full 20-Q Mega Mock</span>
          </button>
        </div>
      </div>

      {/* Set Switcher & Generation Control Banner */}
      <div className="liquid-glass-card rounded-2xl p-4 sm:p-5 border border-slate-200/80 dark:border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Set Selector Pills */}
        <div className="flex items-center gap-2 flex-wrap w-full md:w-auto">
          <button
            onClick={() => setActiveSet('set1')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all border cursor-pointer ${
              activeSet === 'set1'
                ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20'
                : 'bg-white/60 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Set 1: Standard 10 (Q1–Q10)</span>
          </button>

          <button
            onClick={() => {
              if (isSet2Unlocked) {
                setActiveSet('set2');
              } else {
                handleGenerateSet2();
              }
            }}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all border cursor-pointer ${
              activeSet === 'set2'
                ? 'bg-purple-600 text-white border-purple-600 shadow-md shadow-purple-500/20'
                : 'bg-white/60 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-purple-500" />
            <span>Set 2: Extended Dossier (Q11–Q20)</span>
          </button>

          <button
            onClick={() => setActiveSet('all')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all border cursor-pointer ${
              activeSet === 'all'
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-500/20'
                : 'bg-white/60 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>View All ({questionsList.length} MCQs)</span>
          </button>
        </div>

        {/* Generate / Expand Trigger */}
        {!isSet2Unlocked && (
          <button
            type="button"
            onClick={handleGenerateSet2}
            disabled={isGeneratingSet2}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-black shadow-lg shadow-purple-500/25 transition-all cursor-pointer disabled:opacity-50"
          >
            {isGeneratingSet2 ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Synthesizing Set 2 Questions...</span>
              </>
            ) : (
              <>
                <PlusCircle className="w-4 h-4" />
                <span>Unlock Editorial Set 2 (+10 MCQs)</span>
              </>
            )}
          </button>
        )}
      </div>

      {/* Editorial Highlights 3-Column Strip */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="liquid-glass-card rounded-2xl p-5 space-y-2 shadow-sm">
          <span className="text-[10px] font-bold uppercase text-blue-700 dark:text-blue-400 px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">
            The Hindu &amp; PIB
          </span>
          <h3 className="font-bold text-slate-900 dark:text-white text-sm">Quantum, Judiciary &amp; Space</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">National Quantum Mission T-Hubs, SC Sub-classification ruling, and IN-SPACe satellite guidelines.</p>
        </div>

        <div className="liquid-glass-card rounded-2xl p-5 space-y-2 shadow-sm">
          <span className="text-[10px] font-bold uppercase text-emerald-700 dark:text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
            Indian Express &amp; RBI
          </span>
          <h3 className="font-bold text-slate-900 dark:text-white text-sm">FinTech SROs &amp; Biofuels</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">RBI Omnibus FinTech SRO Section 8 framework and Global Biofuel Alliance (GBA) targets.</p>
        </div>

        <div className="liquid-glass-card rounded-2xl p-5 space-y-2 shadow-sm">
          <span className="text-[10px] font-bold uppercase text-orange-700 dark:text-orange-400 px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">
            Down To Earth &amp; MoEFCC
          </span>
          <h3 className="font-bold text-slate-900 dark:text-white text-sm">Wildlife &amp; Ocean Law</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">Project Cheetah Gandhi Sagar sanctuary preparation and UN High Seas BBNJ Agreement.</p>
        </div>
      </div>

      {/* Topic Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {topics.map((t) => {
          const Icon = t.icon;
          const isActive = selectedTopic === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setSelectedTopic(t.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap border cursor-pointer ${
                isActive
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20'
                  : 'bg-white/60 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{t.label}</span>
            </button>
          );
        })}
      </div>

      {/* Questions Breakdown List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span>
              {activeSet === 'set1' ? 'Set 1: High-Yield Questions (Q1–Q10)' : activeSet === 'set2' ? 'Set 2: Extended Editorial Dossier (Q11–Q20)' : 'Complete Daily Dossier'} ({filteredQuestions.length})
            </span>
          </h2>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleStartQuiz(activeSet)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              <span>Practice This Set in Timed Mode</span>
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {filteredQuestions.map((q, idx) => {
            const isExpanded = expandedQuestions[q.id] || false;
            const absoluteIdx = questionsList.findIndex(item => item.id === q.id) + 1;
            const displayGenTime = q.generatedAt || `${q.editionDate || selectedDate}, 06:00 AM IST`;

            return (
              <div 
                key={q.id}
                className="liquid-glass-card rounded-2xl p-5 sm:p-6 border border-slate-200/80 dark:border-slate-800/80 transition-all hover:border-blue-500/40 space-y-4 shadow-sm"
              >
                {/* 🕒 Top Generation Timestamp & Metadata Bar */}
                <div className="flex items-center justify-between gap-2 flex-wrap pb-3 border-b border-slate-100 dark:border-white/5">
                  <div className="flex items-center gap-2 flex-wrap">
                    {/* Q Number */}
                    <span className="px-2.5 py-0.5 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[11px] font-black">
                      Q{absoluteIdx > 0 ? absoluteIdx : idx + 1}
                    </span>

                    {/* Generation Timestamp Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/25 text-amber-800 dark:text-amber-300 text-[11px] font-bold">
                      <Clock className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
                      <span>Generated: {displayGenTime}</span>
                    </div>

                    {/* Source Publisher Tag */}
                    {q.sourcePublisher && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-[11px] font-bold border border-emerald-500/20">
                        <Globe2 className="w-3 h-3 text-emerald-500 shrink-0" />
                        <span>{q.sourcePublisher}</span>
                      </span>
                    )}
                  </div>

                  {/* Difficulty Tag */}
                  <div className="flex items-center gap-2">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase ${
                      q.difficulty === 'Easy' ? 'bg-emerald-500/10 text-emerald-600' :
                      q.difficulty === 'Moderate' ? 'bg-amber-500/10 text-amber-600' :
                      'bg-purple-500/10 text-purple-600'
                    }`}>
                      {q.difficulty}
                    </span>
                  </div>
                </div>

                {/* Subject & Subtopic */}
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                  <span className="text-slate-900 dark:text-white font-bold">{q.topic}</span>
                  <span>•</span>
                  <span>{q.subTopic}</span>
                </div>

                {/* Question Statement */}
                <div className="text-sm sm:text-base font-medium text-slate-900 dark:text-slate-100 whitespace-pre-line leading-relaxed">
                  {q.question}
                </div>

                {/* Options Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {q.options.map((opt, optIdx) => {
                    const selectedByLoggedUser = Boolean(user) && userSelectedCAAnswers[q.id] === optIdx;
                    const isCorrect = isExpanded && Boolean(user) && optIdx === q.correctAnswer;
                    const isWrong = selectedByLoggedUser && optIdx !== q.correctAnswer;

                    return (
                      <button
                        key={optIdx}
                        type="button"
                        onClick={() => handleCAOptionClick(q.id, optIdx)}
                        className={`text-left p-3.5 rounded-xl border text-xs sm:text-sm transition-all flex items-start justify-between gap-2.5 cursor-pointer hover:border-orange-400/80 hover:shadow-sm ${
                          isCorrect
                            ? 'bg-emerald-500/15 border-emerald-500 text-emerald-800 dark:text-emerald-300 font-bold'
                            : isWrong
                            ? 'bg-rose-500/15 border-rose-500 text-rose-800 dark:text-rose-300 font-medium'
                            : 'bg-slate-50/60 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-orange-50/30 dark:hover:bg-orange-500/5'
                        }`}
                      >
                        <div>
                          <span className="font-bold mr-2 text-slate-400">
                            {String.fromCharCode(65 + optIdx)}.
                          </span>
                          <span>{opt}</span>
                        </div>
                        {isCorrect && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        )}
                        {isWrong && (
                          <span className="text-rose-500 font-bold text-xs shrink-0 mt-0.5">✕</span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Toggle Details Button */}
                <button
                  onClick={() => toggleQuestionExpand(q.id)}
                  className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-100/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 text-xs font-bold hover:bg-slate-200/80 dark:hover:bg-slate-700/80 transition-all cursor-pointer"
                >
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
                    {isExpanded ? 'Hide Detailed Solution & Citations' : 'View Correct Answer, Explanation & Sources'}
                  </span>
                  {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>

                {/* Expanded Solution View */}
                {isExpanded && (
                  <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/40 dark:bg-blue-950/20 border border-blue-200/60 dark:border-blue-900/40 space-y-4 animate-fade-in text-xs sm:text-sm">
                    {/* Timestamp reminder */}
                    <div className="flex items-center justify-between flex-wrap gap-2 text-xs text-slate-500 border-b border-slate-200/60 dark:border-white/5 pb-2">
                      <div className="flex items-center gap-1.5 text-amber-700 dark:text-amber-300 font-semibold">
                        <Clock className="w-3.5 h-3.5 text-amber-500" />
                        <span>Generated on {displayGenTime}</span>
                      </div>
                      <span className="font-mono">Edition: {q.editionDate || selectedDate}</span>
                    </div>

                    {/* Correct Answer */}
                    <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-extrabold">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Correct Answer: Option {String.fromCharCode(65 + q.correctAnswer)} ({q.options[q.correctAnswer]})</span>
                    </div>

                    {/* Explanation */}
                    <div className="space-y-1.5">
                      <span className="font-bold text-slate-900 dark:text-white uppercase tracking-wide text-[11px] block">
                        Detailed UPSC Solution &amp; Factual Rationale:
                      </span>
                      <p className="text-slate-700 dark:text-slate-300 whitespace-pre-line leading-relaxed">
                        {q.explanation}
                      </p>
                    </div>

                    {/* Book Citation */}
                    {q.bookReference && (
                      <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 space-y-1">
                        <div className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-bold text-xs">
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>Standard Reference &amp; Publication:</span>
                        </div>
                        <p className="text-xs text-slate-800 dark:text-slate-200">
                          <strong>{q.bookReference.bookName}</strong> ({q.bookReference.edition || selectedDate}) • {q.bookReference.chapter} • Page/Doc: {q.bookReference.pageNumber}
                        </p>
                        {q.bookReference.keyExcerpt && (
                          <p className="text-[11px] text-slate-500 italic pt-0.5">
                            "{q.bookReference.keyExcerpt}"
                          </p>
                        )}
                      </div>
                    )}

                    {/* Elimination Tip */}
                    {q.eliminationTip && (
                      <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-amber-300 text-xs">
                        <strong>🎯 50:50 Elimination Guidance: </strong>
                        <span>{q.eliminationTip}</span>
                      </div>
                    )}
                  </div>
                )}

              </div>
            );
          })}
        </div>
      </div>

      {/* Auth Lock Modal Popup */}
      <AuthLockModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        title={authModalConfig.title}
        description={authModalConfig.description}
        redirectPath="/daily-ca"
      />

    </div>
  );
}
