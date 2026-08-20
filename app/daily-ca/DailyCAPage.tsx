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
  ShieldCheck, 
  Globe2, 
  Cpu, 
  Landmark, 
  Leaf, 
  Coins, 
  ScrollText,
  Award, 
  Clock,
  ChevronDown, 
  ChevronUp, 
  RefreshCw,
  Calendar,
  Star,
  Zap,
  Layers,
  HelpCircle,
  ArrowRight
} from 'lucide-react';
import { dailyCA_2026_08_20_All } from '@/data/dailyCAData';
import { getStoredProfile } from '@/lib/localDB';
import { UserProfile, Question } from '@/lib/types';
import { useAuth } from '@/lib/authContext';
import { getTodayISTDate } from '@/lib/dailyCAGenerator';
import DailyCANotificationBell from '@/components/DailyCANotificationBell';
import AuthLockModal from '@/components/AuthLockModal';

interface SubjectStreamMeta {
  id: 'polity' | 'economy' | 'science_tech' | 'international' | 'environment' | 'history';
  title: string;
  shortName: string;
  icon: any;
  color: string;
  bgGradient: string;
  badgeColor: string;
  borderColor: string;
  topicsSample: string;
  sources: string;
}

const SUBJECT_STREAMS: SubjectStreamMeta[] = [
  {
    id: 'polity',
    title: 'Polity, Constitution & Governance',
    shortName: 'Polity & Governance',
    icon: Landmark,
    color: 'text-blue-600 dark:text-blue-400',
    bgGradient: 'from-blue-500/10 via-blue-500/5 to-transparent',
    badgeColor: 'bg-blue-500/15 text-blue-700 dark:text-blue-300 border-blue-500/30',
    borderColor: 'hover:border-blue-500/50',
    topicsSample: 'SC Sub-classification, Article 3 Name Bills, CEC Act, DPDP Board, 16th FinCom',
    sources: 'The Hindu • Supreme Court • PRS India • PIB'
  },
  {
    id: 'economy',
    title: 'Indian Economy, Banking & Trade',
    shortName: 'Indian Economy',
    icon: Coins,
    color: 'text-emerald-600 dark:text-emerald-400',
    bgGradient: 'from-emerald-500/10 via-emerald-500/5 to-transparent',
    badgeColor: 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/30',
    borderColor: 'hover:border-emerald-500/50',
    topicsSample: 'RBI FinTech SROs, SDF Liquidity, T+0 Settlement, PM-PRANAM, SVRAs, InvITs',
    sources: 'RBI • Indian Express • Ministry of Finance • DPIIT'
  },
  {
    id: 'science_tech',
    title: 'Science & Technology, Space & AI',
    shortName: 'Science & Tech',
    icon: Cpu,
    color: 'text-purple-600 dark:text-purple-400',
    bgGradient: 'from-purple-500/10 via-purple-500/5 to-transparent',
    badgeColor: 'bg-purple-500/15 text-purple-700 dark:text-purple-300 border-purple-500/30',
    borderColor: 'hover:border-purple-500/50',
    topicsSample: 'National Quantum Mission (NQM), Bharat 6G, IN-SPACe, SMRs, CRISPR, Aditya-L1',
    sources: 'DST • ISRO • MeitY • C-DAC • Nature'
  },
  {
    id: 'international',
    title: 'International Relations & Global Affairs',
    shortName: 'International Relations',
    icon: Globe2,
    color: 'text-cyan-600 dark:text-cyan-400',
    bgGradient: 'from-cyan-500/10 via-cyan-500/5 to-transparent',
    badgeColor: 'bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border-cyan-500/30',
    borderColor: 'hover:border-cyan-500/50',
    topicsSample: 'UN High Seas Treaty (BBNJ), ASEAN AITIGA, IPEF, IMEC Corridor, Chagos Deal',
    sources: 'MEA India • UN News • ORF • International Law'
  },
  {
    id: 'environment',
    title: 'Geography, Environment & Wildlife',
    shortName: 'Geography & Environment',
    icon: Leaf,
    color: 'text-teal-600 dark:text-teal-400',
    bgGradient: 'from-teal-500/10 via-teal-500/5 to-transparent',
    badgeColor: 'bg-teal-500/15 text-teal-700 dark:text-teal-300 border-teal-500/30',
    borderColor: 'hover:border-teal-500/50',
    topicsSample: 'Project Cheetah Gandhi Sagar, Ramsar 85+ Sites, NCAP PRANA, Green Hydrogen',
    sources: 'Down To Earth • MoEFCC • CPCB • ZSI'
  },
  {
    id: 'history',
    title: 'History, Art, Culture & Heritage',
    shortName: 'History & Culture',
    icon: ScrollText,
    color: 'text-amber-600 dark:text-amber-400',
    bgGradient: 'from-amber-500/10 via-amber-500/5 to-transparent',
    badgeColor: 'bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/30',
    borderColor: 'hover:border-amber-500/50',
    topicsSample: '150 Yrs Vande Mataram, Moidams of Charaideo, Keezhadi Excavations, GI Tags',
    sources: 'ASI • Ministry of Culture • NCERT • UNESCO'
  },
];

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
  
  // State for all 60 active questions
  const [questionsList, setQuestionsList] = useState<Question[]>(dailyCA_2026_08_20_All);
  const [isLoadingAPI, setIsLoadingAPI] = useState<boolean>(false);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  // Filter selection: 'all' or subject id
  const [selectedSubjectTab, setSelectedSubjectTab] = useState<string>('all');
  const [favoriteSubject, setFavoriteSubject] = useState<string | null>(null);

  const [expandedQuestions, setExpandedQuestions] = useState<Record<string, boolean>>({});
  const [userSelectedCAAnswers, setUserSelectedCAAnswers] = useState<Record<string, number>>({});
  const [feedbackToast, setFeedbackToast] = useState<string | null>(null);

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
            setFeedbackToast(`✨ All 6 subjects refreshed! 60 fresh verified questions loaded for ${dateStr}.`);
            setTimeout(() => setFeedbackToast(null), 4000);
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

  useEffect(() => {
    setMounted(true);
    setProfile(getStoredProfile());

    try {
      const fav = localStorage.getItem('user_fav_ca_subject');
      if (fav) {
        setFavoriteSubject(fav);
      }
    } catch {
      // ignore
    }

    fetchLiveDailyCA(selectedDate);
  }, [selectedDate]);

  // Toggle favorite subject
  const handleToggleFavoriteSubject = (subId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const newFav = favoriteSubject === subId ? null : subId;
    setFavoriteSubject(newFav);
    try {
      if (newFav) {
        localStorage.setItem('user_fav_ca_subject', newFav);
        setFeedbackToast(`⭐ Pinned ${subId.toUpperCase()} as your favorite field of interest!`);
      } else {
        localStorage.removeItem('user_fav_ca_subject');
        setFeedbackToast('Removed favorite subject pin.');
      }
      setTimeout(() => setFeedbackToast(null), 3000);
    } catch {
      // ignore
    }
  };

  // Launch Quiz in Live Session (Subject-wise or Full Mega Mock)
  const handleStartQuiz = (subjectChoice: 'all' | 'polity' | 'economy' | 'science_tech' | 'international' | 'environment' | 'history') => {
    if (!user) {
      setAuthModalConfig({
        title: 'Sign In to Attempt Daily CA Test',
        description: 'Please sign in to take this daily current affairs test in timed exam mode with instant scoring, negative marking (-0.66), and nationwide AIR ranking.'
      });
      setShowAuthModal(true);
      return;
    }

    const isFullMock = subjectChoice === 'all';
    const qCount = isFullMock ? Math.min(60, questionsList.length) : 10;
    const timeLimit = isFullMock ? 60 : 15;

    const stream = SUBJECT_STREAMS.find(s => s.id === subjectChoice);
    const titlePrefix = isFullMock 
      ? 'Daily UPSC 6-Subject Mega Mock (60 MCQs)' 
      : `Daily Current Affairs Drill: ${stream?.shortName || subjectChoice.toUpperCase()} (10 MCQs)`;

    const config = {
      id: `daily-ca-${subjectChoice}-${selectedDate}`,
      title: `${titlePrefix} — ${selectedDate}`,
      subjects: ['current_affairs'],
      questionCount: qCount,
      timeLimitMinutes: timeLimit,
      mode: 'instant',
      paperType: 'GS',
      difficulty: 'all',
      isDailyCA: true,
      dailyCASet: 'all',
      dailyCASubject: subjectChoice,
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

  // Filter questions based on selected subject tab
  const filteredQuestions = selectedSubjectTab === 'all' 
    ? questionsList 
    : questionsList.filter(q => {
        const streamKeywords: Record<string, string[]> = {
          polity: ['polity', 'governance', 'constitution', 'judiciary'],
          economy: ['economy', 'banking', 'finance', 'taxation', 'industry'],
          science_tech: ['science', 'tech', 'quantum', 'space', 'nuclear'],
          international: ['international', 'ir', 'foreign', 'un', 'treaty'],
          environment: ['environment', 'ecology', 'wildlife', 'climate', 'pollution'],
          history: ['history', 'culture', 'heritage', 'art', 'archaeology'],
        };
        const keywords = streamKeywords[selectedSubjectTab] || [selectedSubjectTab];
        return keywords.some(k => 
          q.subject?.toLowerCase().includes(k) || 
          q.topic?.toLowerCase().includes(k) || 
          q.subTopic?.toLowerCase().includes(k)
        );
      });

  // Calculate subject counts
  const getSubjectCount = (subId: string) => {
    const streamKeywords: Record<string, string[]> = {
      polity: ['polity', 'governance', 'constitution', 'judiciary'],
      economy: ['economy', 'banking', 'finance', 'taxation', 'industry'],
      science_tech: ['science', 'tech', 'quantum', 'space', 'nuclear'],
      international: ['international', 'ir', 'foreign', 'un', 'treaty'],
      environment: ['environment', 'ecology', 'wildlife', 'climate', 'pollution'],
      history: ['history', 'culture', 'heritage', 'art', 'archaeology'],
    };
    const keywords = streamKeywords[subId] || [subId];
    return questionsList.filter(q => 
      keywords.some(k => 
        q.subject?.toLowerCase().includes(k) || 
        q.topic?.toLowerCase().includes(k)
      )
    ).length;
  };

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
          <span>6 Core UPSC Subjects • 10 Questions Each • 60 Total MCQs Daily with Exact Generation Timestamps</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Daily 6-Subject <span className="tricolor-gradient-text">Current Affairs Hub</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
          Choose your favorite field of interest to attempt 10 focused daily questions in Polity, Economy, Sci-Tech, IR, Environment, or History — or launch the <strong>Full 60-Question All-Subject Mega Mock</strong>.
        </p>
      </div>

      {/* Feedback Toast */}
      {feedbackToast && (
        <div className="p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-sm font-bold flex items-center gap-3 animate-in fade-in slide-in-from-top-3 duration-300 shadow-lg">
          <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
          <span>{feedbackToast}</span>
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
          title="Force-refresh today's 6-subject edition from live editorial server"
        >
          <RefreshCw className={`w-3.5 h-3.5 text-orange-500 ${isRefreshing ? 'animate-spin' : ''}`} />
          <span>{isRefreshing ? 'Syncing 60 Questions...' : '🔄 Refresh Today\'s Edition'}</span>
        </button>
      </div>

      {/* 🚀 Hero Banner: 60-Question All-Subject Daily Mega Mock */}
      <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 border-orange-500/30 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden bg-gradient-to-br from-orange-500/5 via-amber-500/5 to-blue-500/5">
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
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-xs font-bold border border-emerald-500/20">
              ✨ 60 MCQs Ready Across 6 Subjects
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            Daily Comprehensive 60-Question Mega Mock
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
            Simulate a full UPSC Prelims test environment covering all 6 subjects (10 questions each, 60 minutes, -0.66 negative marking, instant AI textbook citations).
          </p>
        </div>

        {/* Mega Mock Launch CTA */}
        <button
          onClick={() => handleStartQuiz('all')}
          className="w-full lg:w-auto liquid-glass-btn flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-600 text-white font-black text-sm sm:text-base shadow-xl shadow-orange-500/25 hover:scale-105 transition-all whitespace-nowrap cursor-pointer"
        >
          <Award className="w-5 h-5 fill-white" />
          <span>Launch 60-Q Mega Mock (All Subjects)</span>
        </button>
      </div>

      {/* 🎯 Choose Your Field of Interest / Subject Stream Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <h2 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-500" />
              <span>Choose Your Field of Interest (10 MCQs Each)</span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Pick your primary subject to practice only its 10 daily editorial questions, or pin it as your favorite.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SUBJECT_STREAMS.map((stream) => {
            const Icon = stream.icon;
            const isFav = favoriteSubject === stream.id;
            const count = getSubjectCount(stream.id);
            const isTabActive = selectedSubjectTab === stream.id;

            return (
              <div
                key={stream.id}
                onClick={() => setSelectedSubjectTab(stream.id)}
                className={`liquid-glass-card rounded-2xl p-5 border transition-all cursor-pointer space-y-4 relative group flex flex-col justify-between shadow-sm ${
                  isTabActive
                    ? 'border-orange-500 shadow-md shadow-orange-500/10 ring-2 ring-orange-500/20'
                    : `border-slate-200/80 dark:border-white/10 ${stream.borderColor}`
                }`}
              >
                <div className="space-y-3">
                  {/* Top Bar: Icon + Subject Title + Fav Pin */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 ${stream.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white leading-snug">
                          {stream.title}
                        </h3>
                        <span className={`inline-block text-[10px] font-black px-2 py-0.5 rounded-md border mt-1 ${stream.badgeColor}`}>
                          {count || 10} Questions Ready
                        </span>
                      </div>
                    </div>

                    {/* Favorite Pin Button */}
                    <button
                      type="button"
                      onClick={(e) => handleToggleFavoriteSubject(stream.id, e)}
                      className={`p-1.5 rounded-xl transition-all ${
                        isFav 
                          ? 'text-amber-500 bg-amber-500/15' 
                          : 'text-slate-400 hover:text-amber-500 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                      title={isFav ? 'Pinned as your favorite subject' : 'Pin as favorite field of interest'}
                    >
                      <Star className={`w-4 h-4 ${isFav ? 'fill-amber-500' : ''}`} />
                    </button>
                  </div>

                  {/* Core Topics Covered */}
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-slate-500 block">Today's Topics:</span>
                    <p className="text-xs text-slate-700 dark:text-slate-300 line-clamp-2 leading-relaxed">
                      {stream.topicsSample}
                    </p>
                  </div>

                  {/* Sources tag */}
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 flex items-center gap-1 font-medium">
                    <Globe2 className="w-3 h-3 text-slate-400 shrink-0" />
                    <span>{stream.sources}</span>
                  </div>
                </div>

                {/* 1-Click Launch Button for This Subject */}
                <div className="pt-2 border-t border-slate-100 dark:border-white/5 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleStartQuiz(stream.id);
                    }}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-900 hover:bg-orange-600 dark:bg-white/10 dark:hover:bg-orange-600 text-white text-xs font-black transition-all shadow-xs cursor-pointer group-hover:bg-orange-500"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>Attempt 10-Q {stream.shortName} Test</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 📚 Filter Navigation Tabs */}
      <div className="space-y-4 pt-4 border-t border-slate-200/80 dark:border-white/10">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none w-full md:w-auto">
            <button
              onClick={() => setSelectedSubjectTab('all')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-extrabold transition-all whitespace-nowrap border cursor-pointer ${
                selectedSubjectTab === 'all'
                  ? 'bg-orange-500 text-white border-orange-500 shadow-md shadow-orange-500/20'
                  : 'bg-white/60 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>All Subjects ({questionsList.length} MCQs)</span>
            </button>

            {SUBJECT_STREAMS.map((s) => {
              const Icon = s.icon;
              const isActive = selectedSubjectTab === s.id;
              const count = getSubjectCount(s.id);
              return (
                <button
                  key={s.id}
                  onClick={() => setSelectedSubjectTab(s.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap border cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20'
                      : 'bg-white/60 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{s.shortName} ({count || 10})</span>
                </button>
              );
            })}
          </div>

          {/* Quick practice for active tab */}
          <button
            onClick={() => handleStartQuiz(selectedSubjectTab as any)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all cursor-pointer shadow-sm"
          >
            <Play className="w-3.5 h-3.5 fill-white" />
            <span>Practice {selectedSubjectTab === 'all' ? 'All 60 Questions' : 'This Subject'} in Exam Mode</span>
          </button>
        </div>

        {/* Questions Feed */}
        <div className="space-y-4">
          {filteredQuestions.map((q, idx) => {
            const isExpanded = expandedQuestions[q.id] || false;
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
                      Q{idx + 1}
                    </span>

                    {/* Subject Tag */}
                    <span className="px-2.5 py-0.5 rounded-lg bg-purple-500/10 text-purple-700 dark:text-purple-300 text-[11px] font-bold uppercase">
                      {q.subject}
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
