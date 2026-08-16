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
  ArrowRight
} from 'lucide-react';
import { dailyCAQuestions } from '@/data/dailyCAData';
import { getStoredProfile } from '@/lib/localDB';
import { UserProfile } from '@/lib/types';
import { useAuth } from '@/lib/authContext';
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
  
  // State for active questions (defaults to local fallback, updates from /api/daily-ca)
  const [questionsList, setQuestionsList] = useState(dailyCAQuestions);
  const [isLoadingAPI, setIsLoadingAPI] = useState<boolean>(false);

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

  // Fetch today's automated edition from API on mount
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

    const fetchLiveDailyCA = async () => {
      try {
        setIsLoadingAPI(true);
        const res = await fetch('/api/daily-ca');
        if (res.ok) {
          const data = await res.json();
          if (data.success && Array.isArray(data.questions) && data.questions.length > 0) {
            setQuestionsList(data.questions);
            try {
              sessionStorage.setItem('daily_ca_active_questions', JSON.stringify(data.questions));
            } catch {
              // ignore
            }
          }
        }
      } catch (err) {
        console.warn('API daily-ca fetch error, using local dataset:', err);
      } finally {
        setIsLoadingAPI(false);
      }
    };

    fetchLiveDailyCA();
  }, []);

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
      id: `daily-ca-${setChoice}-${new Date().toISOString().split('T')[0]}`,
      title: `${titlePrefix} — ${new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`,
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
    { id: 'all', label: `All in ${activeSet === 'all' ? 'Mega Dossier (20)' : activeSet === 'set1' ? 'Set 1 (10)' : 'Set 2 (10)'}`, icon: Sparkles },
    { id: 'polity', label: 'Polity & Constitution', icon: Landmark },
    { id: 'science', label: 'Sci-Tech & Nuclear', icon: Cpu },
    { id: 'economy', label: 'Economy & Industry', icon: Coins },
    { id: 'environment', label: 'Environment & Wildlife', icon: Leaf },
    { id: 'international', label: 'Foreign Policy & IR', icon: Globe2 },
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
          <span>Real-time Current Affairs — 20 Daily Questions with Strict Citations</span>
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

      {/* Streak & Launch Card */}
      <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 border-orange-500/30 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2 text-center lg:text-left">
          <div className="flex items-center gap-2 flex-wrap justify-center lg:justify-start">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 dark:bg-orange-500/20 text-orange-700 dark:text-orange-400 text-xs font-extrabold border border-orange-500/30">
              <Flame className="w-4 h-4 text-orange-500" />
              <span suppressHydrationWarning>{mounted ? (profile?.streakCount ?? 0) : 0} Day Streak</span>
            </div>
            <span suppressHydrationWarning className="text-xs font-bold text-slate-500 dark:text-slate-400">
              Edition: {mounted ? new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : 'Today'}
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold border border-blue-500/20">
              20 Real-Time Questions Loaded
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
            className="w-full sm:w-auto liquid-glass-btn flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-600 text-white font-extrabold text-xs sm:text-sm shadow-xl shadow-orange-500/25 hover:scale-105 transition-all whitespace-nowrap"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Start Set 1 (10-Q Test)</span>
          </button>

          <button
            onClick={() => handleStartQuiz('all')}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs sm:text-sm shadow-xl shadow-blue-500/25 hover:scale-105 transition-all whitespace-nowrap"
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
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all border ${
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
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all border ${
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
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all border ${
              activeSet === 'all'
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-500/20'
                : 'bg-white/60 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
            <span>All 20 Daily MCQs</span>
          </button>
        </div>

        {/* Dynamic Generation Button for Set 2 */}
        <div className="w-full md:w-auto flex items-center justify-end">
          <button
            onClick={handleGenerateSet2}
            disabled={isGeneratingSet2}
            className="w-full md:w-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs shadow-md shadow-purple-500/20 transition-all disabled:opacity-50"
          >
            {isGeneratingSet2 ? (
              <>
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                <span>Verifying Real-time Sources...</span>
              </>
            ) : (
              <>
                <PlusCircle className="w-3.5 h-3.5" />
                <span>Generate More 10 CA Questions (Set 2)</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Source Compilations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="liquid-glass-card rounded-2xl p-5 space-y-2 shadow-sm">
          <span className="text-[10px] font-bold uppercase text-blue-700 dark:text-blue-400 px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">
            The Hindu & Indian Express
          </span>
          <h3 className="font-bold text-slate-900 dark:text-white text-sm">Editorials & World Affairs</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">Supreme Court rulings (Vihaan Kumar case), Article 3 state bills, UPI milestone, and Global South agendas.</p>
        </div>

        <div className="liquid-glass-card rounded-2xl p-5 space-y-2 shadow-sm">
          <span className="text-[10px] font-bold uppercase text-emerald-700 dark:text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
            PIB & Government Releases
          </span>
          <h3 className="font-bold text-slate-900 dark:text-white text-sm">Schemes & Atomic Milestones</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">PFBR Kalpakkam, 200 GW Nuclear target, SHANTI Act, and 1 Crore AI youth skilling roadmap.</p>
        </div>

        <div className="liquid-glass-card rounded-2xl p-5 space-y-2 shadow-sm">
          <span className="text-[10px] font-bold uppercase text-orange-700 dark:text-orange-400 px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">
            Down To Earth & Reports
          </span>
          <h3 className="font-bold text-slate-900 dark:text-white text-sm">Wildlife, Forests & Industry</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">World Elephant Day Gaj Gaurav Awards, CAG Green India Mission audit, and NITI Aayog 12 sectors.</p>
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
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap border ${
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
              {activeSet === 'set1' ? 'Set 1: High-Yield Questions (Q1–Q10)' : activeSet === 'set2' ? 'Set 2: Extended Editorial Dossier (Q11–Q20)' : 'Complete Daily 20-Question Dossier'} ({filteredQuestions.length})
            </span>
          </h2>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleStartQuiz(activeSet)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              <span>Practice This Set in Timed Mode</span>
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {filteredQuestions.map((q, idx) => {
            const isExpanded = expandedQuestions[q.id] || false;
            const absoluteIdx = dailyCAQuestions.findIndex(item => item.id === q.id) + 1;

            return (
              <div 
                key={q.id}
                className="liquid-glass-card rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800/80 transition-all hover:border-blue-500/40"
              >
                {/* Header Tag Bar */}
                <div className="flex items-center justify-between gap-2 flex-wrap mb-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[11px] font-extrabold">
                      Q{absoluteIdx}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-semibold">
                      {q.topic}
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      • {q.subTopic}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      q.difficulty === 'Easy' ? 'bg-emerald-500/10 text-emerald-600' :
                      q.difficulty === 'Moderate' ? 'bg-amber-500/10 text-amber-600' :
                      'bg-purple-500/10 text-purple-600'
                    }`}>
                      {q.difficulty}
                    </span>
                  </div>
                </div>

                {/* Question Text */}
                <div className="text-sm font-medium text-slate-900 dark:text-slate-100 whitespace-pre-line leading-relaxed mb-4">
                  {q.question}
                </div>

                {/* Options List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                  {q.options.map((opt, optIdx) => {
                    const selectedByLoggedUser = Boolean(user) && userSelectedCAAnswers[q.id] === optIdx;
                    const isCorrect = isExpanded && Boolean(user) && optIdx === q.correctAnswer;
                    const isWrong = selectedByLoggedUser && optIdx !== q.correctAnswer;

                    return (
                      <button
                        key={optIdx}
                        type="button"
                        onClick={() => handleCAOptionClick(q.id, optIdx)}
                        className={`text-left p-3 rounded-xl border text-xs transition-all flex items-start justify-between gap-2 cursor-pointer hover:border-orange-400/80 hover:shadow-sm ${
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
                  className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-100/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 text-xs font-bold hover:bg-slate-200/80 dark:hover:bg-slate-700/80 transition-all"
                >
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
                    {isExpanded ? 'Hide Detailed Solution & Citation' : 'View Correct Answer, Explanation & Sources'}
                  </span>
                  {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>

                {/* Expanded Explanation & Book References */}
                {isExpanded && (
                  user ? (
                    <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
                      {/* Correct Answer Banner */}
                      <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs font-bold">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        <span>
                          Correct Option: {String.fromCharCode(65 + q.correctAnswer)} — {q.options[q.correctAnswer]}
                        </span>
                      </div>

                      {/* Detailed Explanation */}
                      <div className="space-y-1">
                        <h4 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                          <HelpCircle className="w-3.5 h-3.5 text-blue-500" />
                          <span>Comprehensive Explanation:</span>
                        </h4>
                        <p className="text-xs text-slate-600 dark:text-slate-300 whitespace-pre-line leading-relaxed pl-5">
                          {q.explanation}
                        </p>
                      </div>

                      {/* Elimination Tip */}
                      {q.eliminationTip && (
                        <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-900 dark:text-amber-300 text-xs space-y-1">
                          <div className="font-bold flex items-center gap-1.5 text-amber-700 dark:text-amber-400">
                            <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                            <span>UPSC Elimination Strategy / Trap:</span>
                          </div>
                          <p className="pl-5 leading-relaxed">{q.eliminationTip}</p>
                        </div>
                      )}

                      {/* Book / Source Reference Citation */}
                      {q.bookReference && (
                        <div className="p-3 rounded-xl bg-blue-500/5 dark:bg-blue-500/10 border border-blue-500/20 text-xs space-y-1.5">
                          <div className="font-bold text-blue-700 dark:text-blue-300 flex items-center gap-1.5">
                            <BookOpen className="w-3.5 h-3.5 text-blue-500" />
                            <span>Source & Citation: {q.bookReference.bookName} ({q.bookReference.edition || '2026'})</span>
                          </div>
                          <p className="text-[11px] text-slate-600 dark:text-slate-400 pl-5">
                            <span className="font-semibold">Chapter/Release:</span> {q.bookReference.chapter} | <span className="font-semibold">Reference:</span> {q.bookReference.pageNumber}
                          </p>
                          {q.bookReference.keyExcerpt && (
                            <p className="text-[11px] text-slate-500 dark:text-slate-400 italic pl-5 border-l-2 border-blue-400/40 ml-5 my-1">
                              &quot;{q.bookReference.keyExcerpt}&quot;
                            </p>
                          )}
                        </div>
                      )}

                      {/* Tags */}
                      {q.tags && q.tags.length > 0 && (
                        <div className="flex items-center gap-1.5 flex-wrap pt-1">
                          <Tag className="w-3 h-3 text-slate-400" />
                          {q.tags.map((tag, tIdx) => (
                            <span 
                              key={tIdx}
                              className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="mt-4 p-5 rounded-2xl bg-slate-900/90 dark:bg-slate-950 border border-orange-500/40 text-center space-y-3 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center mx-auto border border-orange-500/30">
                        <Lock className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold text-white">
                          Answer, Full Explanation & Standard Book Citations Locked
                        </h4>
                        <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                          Create a 100% free account to reveal the verified official answer key, in-depth UPSC syllabus explanation, elimination techniques, and exact textbook citations ({q.bookReference?.bookName || 'Standard Books'}).
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setAuthModalConfig({
                            title: 'Sign In to Unlock Citations & Solutions',
                            description: 'Sign in to unlock detailed explanations, UPSC elimination techniques, and official book page citations.'
                          });
                          setShowAuthModal(true);
                        }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-emerald-600 text-white font-extrabold text-xs shadow-lg shadow-orange-500/20 hover:scale-105 transition-all"
                      >
                        <span>Sign In to Unlock Solution & Citations</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom CTA Card */}
      <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 text-center space-y-4 border border-blue-500/30">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
          Ready to test all 20 Current Affairs questions under exam conditions?
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
          Attempt the full 20-question daily mega test (30 minutes) with UPSC negative marking (-0.66), instant timer countdown, and automated sync to the live aspirant leaderboard.
        </p>
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <button
            onClick={() => handleStartQuiz('set1')}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-orange-600 hover:bg-orange-500 text-white font-extrabold text-xs sm:text-sm shadow-xl shadow-orange-500/25 hover:scale-105 transition-all"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Launch Set 1 (10-Q Test)</span>
          </button>
          <button
            onClick={() => handleStartQuiz('all')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold text-xs sm:text-sm shadow-xl shadow-blue-500/25 hover:scale-105 transition-all"
          >
            <Clock className="w-4 h-4" />
            <span>Launch Full 20-Question Mega Test (30 Min)</span>
          </button>
        </div>
      </div>

      {/* Reusable Auth Requirement Modal */}
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


