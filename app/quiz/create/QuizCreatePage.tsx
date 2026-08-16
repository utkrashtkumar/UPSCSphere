'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Zap, 
  Clock, 
  BookOpen, 
  Sparkles, 
  Sliders, 
  ShieldCheck, 
  ArrowRight,
  GraduationCap,
  Lock
} from 'lucide-react';
import { QuizMode } from '@/lib/types';
import { useAuth } from '@/lib/authContext';
import AuthLockModal from '@/components/AuthLockModal';

interface SubjectOption {
  id: string;
  name: string;
  paper: 'GS' | 'CSAT';
  standardBook: string;
  icon: any;
  description: string;
}

const subjectsList: SubjectOption[] = [
  {
    id: 'polity',
    name: 'Indian Polity & Governance',
    paper: 'GS',
    standardBook: 'M. Laxmikanth (7th Ed.)',
    icon: BookOpen,
    description: 'Preamble, Fundamental Rights, Writs, Parliament, Judiciary',
  },
  {
    id: 'history',
    name: 'History of India & INM',
    paper: 'GS',
    standardBook: 'Spectrum (Rajiv Ahir) & NCERTs',
    icon: BookOpen,
    description: 'Modern India, 1857 Revolt, Freedom Struggle, Ancient & Medieval',
  },
  {
    id: 'economy',
    name: 'Indian Economy & Macro',
    paper: 'GS',
    standardBook: 'Ramesh Singh / NCERT Class XII',
    icon: BookOpen,
    description: 'Monetary Policy, Banking, BoP, Inflation, Budget & Economic Survey',
  },
  {
    id: 'geography',
    name: 'Physical & Indian Geography',
    paper: 'GS',
    standardBook: 'NCERT Class XI Physical Geography',
    icon: BookOpen,
    description: 'Monsoon, Rivers, Drainage, Geomorphology, Maps & Soils',
  },
  {
    id: 'environment',
    name: 'Environment & Climate Change',
    paper: 'GS',
    standardBook: 'Shankar IAS (9th Ed.)',
    icon: BookOpen,
    description: 'National Parks, Biodiversity, WPA 1972, Ramsar Sites, COP Treaties',
  },
  {
    id: 'science_tech',
    name: 'Science & Technology',
    paper: 'GS',
    standardBook: 'Ravi P. Agrahari & Current Science',
    icon: BookOpen,
    description: 'Biotechnology, CRISPR, Space, AI, Supercomputing, Defense',
  },
  {
    id: 'current_affairs',
    name: 'Daily Current Affairs & Schemes',
    paper: 'GS',
    standardBook: 'The Hindu, PIB & Yojana Monthly',
    icon: BookOpen,
    description: 'National & Global Events, Government Schemes, Geopolitics',
  },
  {
    id: 'csat_quant',
    name: 'CSAT: Quant & Number System',
    paper: 'CSAT',
    standardBook: 'R.S. Aggarwal & Arihant CSAT',
    icon: BookOpen,
    description: 'Divisibility, Remainder Theorem, Percentages, P&C, Time & Work',
  },
  {
    id: 'csat_reasoning',
    name: 'CSAT: Logical Reasoning',
    paper: 'CSAT',
    standardBook: 'R.S. Aggarwal Reasoning',
    icon: BookOpen,
    description: 'Syllogisms, Blood Relations, Puzzles, Critical Inferences',
  },
  {
    id: 'gs_full',
    name: 'Full UPSC GS1 Mock (All Subjects)',
    paper: 'GS',
    standardBook: 'UPSC Standard Comprehensive',
    icon: GraduationCap,
    description: 'Comprehensive 100-Question UPSC Prelims Simulation',
  },
];

const questionCountOptions = [5, 10, 20, 50, 100];
const timeLimitOptions = [
  { label: '5 Min (Sprint)', value: 5 },
  { label: '15 Min (Standard)', value: 15 },
  { label: '30 Min (Deep)', value: 30 },
  { label: '120 Min (Full UPSC)', value: 120 },
  { label: 'No Limit (Relaxed)', value: 0 },
];

export default function CreateQuizPage() {
  const router = useRouter();
  const { user } = useAuth();
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>(['polity']);
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [timeLimit, setTimeLimit] = useState<number | null>(15);
  const [mode, setMode] = useState<QuizMode>('instant');
  const [showAuthModal, setShowAuthModal] = useState<boolean>(false);

  const handleSubjectToggle = (id: string) => {
    if (id === 'gs_full') {
      setSelectedSubjects(['gs_full']);
      return;
    }
    const filtered = selectedSubjects.filter(s => s !== 'gs_full');
    if (filtered.includes(id)) {
      if (filtered.length > 1) {
        setSelectedSubjects(filtered.filter(s => s !== id));
      }
    } else {
      setSelectedSubjects([...filtered, id]);
    }
  };

  const handleStartQuiz = () => {
    if (!user) {
      setShowAuthModal(true);
      return;
    }

    const config = {
      title: selectedSubjects.length === 1 
        ? `${subjectsList.find(s => s.id === selectedSubjects[0])?.name || 'UPSC'} Mock` 
        : `Custom UPSC ${selectedSubjects.length}-Topic Drill`,
      subjects: selectedSubjects,
      questionCount,
      timeLimitMinutes: timeLimit,
      mode,
      paperType: selectedSubjects.some(s => s.startsWith('csat')) ? 'CSAT' : 'GS',
      difficulty: 'all',
    };
    
    // Store in session storage so live quiz page initializes with these exact settings
    sessionStorage.setItem('active_quiz_config', JSON.stringify(config));
    router.push('/quiz/session');
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-16 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 dark:bg-orange-500/15 border border-orange-500/30 text-orange-700 dark:text-orange-300 text-xs font-bold mb-3">
          <Zap className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" />
          <span>Real-Time Custom Quiz Builder</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Configure Your <span className="tricolor-gradient-text">UPSC Prelims Mock</span>
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-2xl mx-auto">
          Choose subjects, question set size, custom timer, and real-time on-the-spot evaluation with exact book and page citations.
        </p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Choose Mode */}
        <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-2 mb-5">
            <Sliders className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            <h2 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">1. Choose Quiz Mode</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Mode 1: Instant Feedback */}
            <div
              onClick={() => setMode('instant')}
              className={`cursor-pointer p-5 rounded-2xl border transition-all ${
                mode === 'instant'
                  ? 'bg-orange-50/80 dark:bg-orange-500/15 border-orange-500 ring-1 ring-orange-500/40 shadow-md'
                  : 'bg-white/80 dark:bg-slate-900/60 border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${mode === 'instant' ? 'bg-orange-500 text-white font-bold' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-400'}`}>
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-sm">Instant Real-Time Feedback Mode</h3>
                    <p className="text-xs text-orange-700 dark:text-orange-400/90 font-medium mt-0.5">Learn on the spot with each question</p>
                  </div>
                </div>
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
                  Recommended
                </span>
              </div>
              <ul className="mt-4 space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-2">✅ Instant Correct/Wrong evaluation on selection</li>
                <li className="flex items-center gap-2">📖 Exact Book Name & Page Number reference panel</li>
                <li className="flex items-center gap-2">💡 UPSC Prelims 50:50 elimination tricks</li>
              </ul>
            </div>

            {/* Mode 2: Exam Simulation */}
            <div
              onClick={() => setMode('exam')}
              className={`cursor-pointer p-5 rounded-2xl border transition-all ${
                mode === 'exam'
                  ? 'bg-blue-50/80 dark:bg-blue-500/15 border-blue-500 ring-1 ring-blue-500/40 shadow-md'
                  : 'bg-white/80 dark:bg-slate-900/60 border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${mode === 'exam' ? 'bg-blue-600 text-white font-bold' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-400'}`}>
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-sm">UPSC Exam Simulation Mode</h3>
                    <p className="text-xs text-blue-700 dark:text-blue-400/90 font-medium mt-0.5">Full exam environment & post-test review</p>
                  </div>
                </div>
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-blue-500/10 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 border border-blue-500/30">
                  Real Exam
                </span>
              </div>
              <ul className="mt-4 space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-2">⏱️ Strict countdown timer & question palette</li>
                <li className="flex items-center gap-2">⚖️ -0.66 / -0.83 Negative marking penalty</li>
                <li className="flex items-center gap-2">📊 Complete diagnostic scorecard at completion</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 2: Choose Topic / Subject */}
        <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="flex items-center justify-between mb-5 flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              <h2 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">2. Select Topics & Subjects</h2>
            </div>
            <span className="text-xs text-slate-600 dark:text-slate-400">
              Selected: <strong className="text-orange-700 dark:text-orange-400 font-bold">{selectedSubjects.length} subject(s)</strong>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {subjectsList.map((subject) => {
              const Icon = subject.icon;
              const isSelected = selectedSubjects.includes(subject.id);
              return (
                <div
                  key={subject.id}
                  onClick={() => handleSubjectToggle(subject.id)}
                  className={`cursor-pointer p-4 rounded-2xl border transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'bg-orange-50/90 dark:bg-orange-500/15 border-orange-500 ring-1 ring-orange-500/30 shadow-sm'
                      : 'bg-white/80 dark:bg-slate-900/60 border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <div className={`p-2 rounded-xl ${isSelected ? 'bg-orange-500/20 text-orange-700 dark:text-orange-400' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-400'}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <h4 className="font-bold text-xs text-slate-900 dark:text-white">{subject.name}</h4>
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${subject.paper === 'CSAT' ? 'bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/20' : 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/20'}`}>
                        {subject.paper}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug line-clamp-2">
                      {subject.description}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-200 dark:border-white/5 text-[10px] text-orange-800 dark:text-orange-300 font-medium flex items-center gap-1">
                    <span>📖 Ref:</span>
                    <span className="truncate">{subject.standardBook}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 3: Select Question Count & Time Limit */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Question Count Selector */}
          <div className="liquid-glass-card rounded-3xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              <h2 className="font-bold text-base text-slate-900 dark:text-white">3. Number of Questions</h2>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {questionCountOptions.map((cnt) => (
                <button
                  key={cnt}
                  type="button"
                  onClick={() => setQuestionCount(cnt)}
                  className={`py-3 rounded-xl font-bold text-sm border transition-all ${
                    questionCount === cnt
                      ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white border-orange-400 shadow-md scale-105'
                      : 'bg-white/80 dark:bg-slate-900/80 text-slate-800 dark:text-slate-300 border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  {cnt} Qs
                </button>
              ))}
            </div>
          </div>

          {/* Time Limit Picker */}
          <div className="liquid-glass-card rounded-3xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              <h2 className="font-bold text-base text-slate-900 dark:text-white">4. Time Limit</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {timeLimitOptions.map((opt, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setTimeLimit(opt.value)}
                  className={`p-2.5 rounded-xl font-medium text-xs border transition-all text-center ${
                    timeLimit === opt.value
                      ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold border-orange-400 shadow-md'
                      : 'bg-white/80 dark:bg-slate-900/80 text-slate-800 dark:text-slate-300 border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Start Button Bar */}
        <div className="liquid-glass-card p-6 sm:p-8 rounded-3xl border-orange-500/30 flex items-center justify-between flex-wrap gap-4 shadow-lg">
          <div>
            <span className="text-xs text-slate-600 dark:text-slate-400 block font-medium">Ready to test yourself:</span>
            <div className="flex items-center gap-3 mt-1 text-sm font-bold text-slate-900 dark:text-white">
              <span>{questionCount} Questions</span>
              <span>•</span>
              <span>{timeLimit ? `${timeLimit} Minutes` : 'Untimed Practice'}</span>
              <span>•</span>
              <span className="text-orange-700 dark:text-orange-400 capitalize">{mode} Feedback Mode</span>
            </div>
          </div>

          <button
            onClick={handleStartQuiz}
            className="liquid-glass-btn flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-600 text-white font-extrabold text-sm shadow-xl shadow-orange-500/25 hover:scale-105 transition-all"
          >
            <span>Launch Live Quiz Engine</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Reusable Auth Lock Modal */}
      <AuthLockModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        title="Sign In to Launch Custom Mock"
        description="Please sign in to attempt custom UPSC speed mocks, evaluate negative marking, and record your score on the live All-India leaderboard."
        redirectPath="/quiz/create"
      />
    </div>
  );
}
