'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  BookOpen, 
  Calendar, 
  CheckCircle2, 
  Search,
  Bookmark,
  ChevronDown,
  ChevronUp,
  Lock,
  ArrowRight
} from 'lucide-react';
import { pyqVault } from '@/data/pyqVault';
import { PaperType } from '@/lib/types';
import { toggleBookmark, getBookmarks } from '@/lib/localDB';
import { useAuth } from '@/lib/authContext';
import AuthLockModal from '@/components/AuthLockModal';

export default function PYQVaultPage() {
  const router = useRouter();
  const { user } = useAuth();
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');
  const [selectedPaper, setSelectedPaper] = useState<PaperType | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedQId, setExpandedQId] = useState<string | null>(null);
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const [userSelectedPYQAnswers, setUserSelectedPYQAnswers] = useState<Record<string, number>>({});
  const [showAuthModal, setShowAuthModal] = useState<boolean>(false);
  const [authModalConfig, setAuthModalConfig] = useState({
    title: 'Sign In to Attempt Official PYQ Test',
    description: 'Please sign in to take official 2-hour UPSC Prelims PYQ exam simulations with instant scoring, negative marking, and verified answer keys.'
  });

  const handlePYQOptionClick = (questionId: string, optIdx: number) => {
    if (!user) {
      setAuthModalConfig({
        title: 'Sign In to Check Your Answer',
        description: 'Sign in to see if your answer is correct, view verified official UPSC answer keys, and unlock standard textbook page citations.'
      });
      setShowAuthModal(true);
      return;
    }
    setUserSelectedPYQAnswers(prev => ({ ...prev, [questionId]: optIdx }));
    setExpandedQId(questionId);
  };

  React.useEffect(() => {
    setBookmarkedIds(getBookmarks());
  }, []);

  const years = [2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015];

  const filteredPYQs = pyqVault.filter((q) => {
    if (selectedYear !== 'all' && q.pyqYear !== selectedYear) return false;
    if (selectedPaper !== 'all' && q.pyqPaper !== selectedPaper) return false;
    if (searchQuery.trim()) {
      const qText = (q.question + q.topic + q.bookReference.bookName).toLowerCase();
      if (!qText.includes(searchQuery.toLowerCase())) return false;
    }
    return true;
  });

  const handleStartPYQTest = (year: number, paper: PaperType) => {
    if (!user) {
      setAuthModalConfig({
        title: `Sign In to Take UPSC ${year} ${paper} Test`,
        description: `Please sign in to attempt the full ${year} ${paper === 'GS' ? 'Prelims GS-1 (100 Qs)' : 'CSAT Paper 2 (80 Qs)'} under timed 2-hour exam conditions with instant negative marking.`
      });
      setShowAuthModal(true);
      return;
    }

    const config = {
      title: `UPSC ${year} ${paper === 'GS' ? 'Prelims GS Paper 1' : 'CSAT Paper 2'} Official PYQ`,
      subjects: ['mixed_mock'],
      questionCount: paper === 'GS' ? 100 : 80,
      timeLimitMinutes: 120,
      mode: 'instant',
      paperType: paper,
      difficulty: 'all',
      isPYQOnly: true,
      pyqYear: year,
      pyqPaper: paper,
    };
    sessionStorage.setItem('active_quiz_config', JSON.stringify(config));
    router.push('/quiz/session');
  };

  const letters = ['A', 'B', 'C', 'D'];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-16 py-8 space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 dark:bg-blue-500/15 border border-blue-500/30 text-blue-700 dark:text-blue-300 text-xs font-bold mb-3">
          <BookOpen className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
          <span>Last 12 Years (2015 – 2026) Official Vault</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          UPSC Prelims & CSAT <span className="tricolor-gradient-text">PYQ Archive (12 Years)</span>
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-2xl mx-auto">
          Every single question from the last 12 years (2015 to 2026) with official UPSC answer keys, standard book page citations, and elimination strategies.
        </p>
      </div>

      {/* 12-Year Quick Test Launch Cards */}
      <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 shadow-sm space-y-5">
        <h2 className="font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white flex items-center gap-2.5">
          <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <span>Take Full-Length 2-Hour Official PYQ Test (Last 12 Years: 2015–2026)</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-3">
          {years.map((yr) => (
            <div key={yr} className="flex flex-col gap-2">
              <button
                onClick={() => handleStartPYQTest(yr, 'GS')}
                className="p-3 sm:p-3.5 rounded-2xl bg-white/90 dark:bg-slate-900 border border-slate-200 dark:border-white/10 hover:border-orange-500 text-center transition-all group shadow-sm hover:scale-105"
              >
                <span className="font-black text-base sm:text-lg text-slate-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 block">{yr}</span>
                <span className="text-xs font-extrabold text-orange-600 dark:text-orange-400 block mt-0.5">GS-1 Mock</span>
              </button>
              <button
                onClick={() => handleStartPYQTest(yr, 'CSAT')}
                className="p-2 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 text-center transition-all text-xs text-emerald-700 dark:text-emerald-400 font-extrabold shadow-sm hover:scale-105"
              >
                CSAT Paper
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="liquid-glass-card rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
        {/* Search */}
        <div className="relative w-full md:w-96">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions, keywords, books, topics..."
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors shadow-sm"
          />
        </div>

        {/* Year and Paper Dropdowns */}
        <div className="flex items-center gap-3 w-full md:w-auto flex-wrap">
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value === 'all' ? 'all' : Number(e.target.value))}
            className="px-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-sm text-slate-800 dark:text-slate-200 focus:outline-none focus:border-blue-500 shadow-sm cursor-pointer"
          >
            <option value="all">All Years (2015–2026)</option>
            {years.map((y) => (
              <option key={y} value={y}>UPSC {y}</option>
            ))}
          </select>

          <select
            value={selectedPaper}
            onChange={(e) => setSelectedPaper(e.target.value as any)}
            className="px-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-sm text-slate-800 dark:text-slate-200 focus:outline-none focus:border-blue-500 shadow-sm cursor-pointer"
          >
            <option value="all">All Papers (GS + CSAT)</option>
            <option value="GS">GS Paper 1 Only</option>
            <option value="CSAT">CSAT Paper 2 Only</option>
          </select>
        </div>
      </div>

      {/* PYQ Questions List with Book & Page Number Accordion */}
      <div className="space-y-5">
        {filteredPYQs.map((q) => {
          const isExpanded = expandedQId === q.id;
          const isBookmarked = bookmarkedIds.includes(q.id);

          return (
            <div
              key={q.id}
              className="liquid-glass-card rounded-3xl p-6 sm:p-8 space-y-5 shadow-sm"
            >
              {/* Question Header */}
              <div className="flex items-center justify-between flex-wrap gap-3 pb-4 border-b border-slate-200 dark:border-white/10">
                <div className="flex items-center gap-2.5">
                  <span className="font-black text-xs sm:text-sm px-3 py-1 rounded-xl bg-blue-500/10 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 border border-blue-500/30">
                    UPSC {q.pyqYear} ({q.pyqPaper})
                  </span>
                  <span className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">{q.topic}</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <button
                    onClick={() => {
                      const state = toggleBookmark(q.id);
                      setBookmarkedIds((prev) =>
                        state ? [...prev, q.id] : prev.filter((id) => id !== q.id)
                      );
                    }}
                    className={`p-2.5 rounded-2xl border text-xs transition-all ${
                      isBookmarked ? 'bg-orange-500/20 text-orange-600 dark:text-orange-400 border-orange-500/40' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-white/10'
                    }`}
                  >
                    <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-orange-500' : ''}`} />
                  </button>

                  <button
                    onClick={() => setExpandedQId(isExpanded ? null : q.id)}
                    className="flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-orange-700 dark:text-orange-400 bg-orange-500/10 px-4 py-2 rounded-2xl border border-orange-500/20 hover:bg-orange-500/20 transition-all"
                  >
                    <span>{isExpanded ? 'Hide Solution' : 'View Answer & Page Ref'}</span>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Question Text */}
              <div className="text-base sm:text-lg font-medium text-slate-900 dark:text-slate-100 whitespace-pre-line leading-relaxed">
                {q.question}
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {q.options.map((opt, optIdx) => {
                  const selectedByLoggedUser = Boolean(user) && userSelectedPYQAnswers[q.id] === optIdx;
                  const isCorrect = isExpanded && Boolean(user) && optIdx === q.correctAnswer;
                  const isWrong = selectedByLoggedUser && optIdx !== q.correctAnswer;

                  return (
                    <button
                      key={optIdx}
                      type="button"
                      onClick={() => handlePYQOptionClick(q.id, optIdx)}
                      className={`text-left p-4 sm:p-5 rounded-2xl border flex items-start gap-3 text-sm sm:text-base leading-relaxed shadow-sm transition-all cursor-pointer hover:border-orange-400 hover:shadow-md ${
                        isCorrect
                          ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-950 dark:text-emerald-100 font-bold'
                          : isWrong
                          ? 'bg-rose-50 dark:bg-rose-950/60 border-rose-500 text-rose-950 dark:text-rose-100 font-medium'
                          : 'bg-white/90 dark:bg-slate-900/60 border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-300 hover:bg-orange-50/40 dark:hover:bg-orange-500/5'
                      }`}
                    >
                      <span className="font-bold">{letters[optIdx]}.</span>
                      <span className="flex-1">{opt}</span>
                      {isCorrect && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      )}
                      {isWrong && (
                        <span className="text-rose-500 font-bold text-sm shrink-0">✕</span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Expandable Solution & Book Page Reference */}
              {isExpanded && (
                user ? (
                  <div className="mt-4 pt-4 border-t border-slate-200 dark:border-white/10 space-y-3 animate-fade-in">
                    {/* Book Citation Box */}
                    <div className="p-4 rounded-2xl bg-gradient-to-r from-orange-500/5 via-slate-50 to-blue-500/5 dark:from-orange-500/10 dark:via-slate-950 dark:to-blue-500/10 border border-orange-500/30 text-xs shadow-sm">
                      <div className="flex items-center gap-2 text-orange-700 dark:text-orange-400 font-bold mb-2">
                        <BookOpen className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                        <span>Official Source Book & Page Number Reference</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 font-medium">
                        <div className="text-slate-800 dark:text-slate-300">
                          <span className="text-slate-500 block text-[10px]">Standard Book:</span>
                          {q.bookReference.bookName}
                        </div>
                        <div className="text-slate-800 dark:text-slate-300">
                          <span className="text-slate-500 block text-[10px]">Chapter:</span>
                          {q.bookReference.chapter}
                        </div>
                        <div className="text-orange-800 dark:text-orange-300">
                          <span className="text-orange-600 block text-[10px]">Exact Page Number:</span>
                          <span className="font-bold text-orange-800 dark:text-orange-400">{q.bookReference.pageNumber}</span>
                        </div>
                      </div>
                    </div>

                    {/* Elimination Trick */}
                    {q.eliminationTip && (
                      <div className="p-3.5 rounded-2xl bg-blue-50 dark:bg-blue-500/10 border border-blue-500/30 text-xs text-slate-700 dark:text-slate-300 shadow-sm">
                        <strong className="text-blue-700 dark:text-blue-400 block mb-1">💡 UPSC Elimination Technique:</strong>
                        {q.eliminationTip}
                      </div>
                    )}

                    {/* Detailed Explanation */}
                    <div className="p-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/5 text-xs text-slate-700 dark:text-slate-300 whitespace-pre-line leading-relaxed shadow-sm">
                      <strong className="text-slate-900 dark:text-slate-200 block mb-1 font-bold">Official UPSC Analysis:</strong>
                      {q.explanation}
                    </div>
                  </div>
                ) : (
                  <div className="mt-4 p-5 rounded-2xl bg-slate-900/90 dark:bg-slate-950 border border-orange-500/40 text-center space-y-3 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center mx-auto border border-orange-500/30">
                      <Lock className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-white">
                        Official UPSC Answer & Book Page Reference Locked
                      </h4>
                      <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                        Sign in for 100% free access to official UPSC keys, standard textbook citations ({q.bookReference.bookName}, Chapter & Page {q.bookReference.pageNumber}), and strategic elimination notes.
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

      {/* Reusable Auth Requirement Modal */}
      <AuthLockModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        title={authModalConfig.title}
        description={authModalConfig.description}
        redirectPath="/pyq"
      />
    </div>
  );
}
