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
  ChevronUp
} from 'lucide-react';
import { pyqVault } from '@/data/pyqVault';
import { PaperType } from '@/lib/types';
import { toggleBookmark, getBookmarks } from '@/lib/localDB';

export default function PYQVaultPage() {
  const router = useRouter();
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');
  const [selectedPaper, setSelectedPaper] = useState<PaperType | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedQId, setExpandedQId] = useState<string | null>(null);
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);

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
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
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
      <div className="liquid-glass-card rounded-3xl p-6 shadow-sm">
        <h2 className="font-bold text-base text-slate-900 dark:text-white mb-4 flex items-center gap-2">
          <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span>Take Full-Length 2-Hour Official PYQ Test (Last 12 Years: 2015–2026)</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2">
          {years.map((yr) => (
            <div key={yr} className="flex flex-col gap-1.5">
              <button
                onClick={() => handleStartPYQTest(yr, 'GS')}
                className="p-2.5 rounded-xl bg-white/90 dark:bg-slate-900 border border-slate-200 dark:border-white/10 hover:border-orange-500 text-center transition-all group shadow-sm"
              >
                <span className="font-extrabold text-sm text-slate-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 block">{yr}</span>
                <span className="text-[10px] font-bold text-orange-600 dark:text-orange-400 block mt-0.5">GS-1 Mock</span>
              </button>
              <button
                onClick={() => handleStartPYQTest(yr, 'CSAT')}
                className="p-1.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 text-center transition-all text-[10px] text-emerald-700 dark:text-emerald-400 font-bold shadow-sm"
              >
                CSAT Paper
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="liquid-glass-card rounded-2xl p-5 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search topic, book, or keyword..."
            className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-orange-500 shadow-sm"
          />
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2 flex-wrap w-full md:w-auto justify-end">
          {/* Year Filter */}
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value === 'all' ? 'all' : Number(e.target.value))}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-orange-500 shadow-sm cursor-pointer"
          >
            <option value="all">All Years (2015-2026)</option>
            {years.map((y) => (
              <option key={y} value={y}>{y} Exam</option>
            ))}
          </select>

          {/* Paper Filter */}
          <select
            value={selectedPaper}
            onChange={(e) => setSelectedPaper(e.target.value as any)}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-orange-500 shadow-sm cursor-pointer"
          >
            <option value="all">All Papers (GS1 + CSAT)</option>
            <option value="GS">GS Paper 1</option>
            <option value="CSAT">CSAT Paper 2</option>
          </select>
        </div>
      </div>

      {/* PYQ Questions List with Book & Page Number Accordion */}
      <div className="space-y-4">
        {filteredPYQs.map((q) => {
          const isExpanded = expandedQId === q.id;
          const isBookmarked = bookmarkedIds.includes(q.id);

          return (
            <div
              key={q.id}
              className="liquid-glass-card rounded-3xl p-6 space-y-4 shadow-sm"
            >
              {/* Question Header */}
              <div className="flex items-center justify-between flex-wrap gap-2 pb-3 border-b border-slate-200 dark:border-white/10">
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-xs px-2.5 py-1 rounded-lg bg-blue-500/10 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 border border-blue-500/30">
                    UPSC {q.pyqYear} ({q.pyqPaper})
                  </span>
                  <span className="text-xs font-bold text-slate-900 dark:text-white">{q.topic}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      const state = toggleBookmark(q.id);
                      setBookmarkedIds((prev) =>
                        state ? [...prev, q.id] : prev.filter((id) => id !== q.id)
                      );
                    }}
                    className={`p-2 rounded-xl border text-xs transition-all ${
                      isBookmarked ? 'bg-orange-500/20 text-orange-600 dark:text-orange-400 border-orange-500/40' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-white/10'
                    }`}
                  >
                    <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-orange-500' : ''}`} />
                  </button>

                  <button
                    onClick={() => setExpandedQId(isExpanded ? null : q.id)}
                    className="flex items-center gap-1 text-xs font-bold text-orange-700 dark:text-orange-400 bg-orange-500/10 px-3 py-1.5 rounded-xl border border-orange-500/20 hover:bg-orange-500/20 transition-all"
                  >
                    <span>{isExpanded ? 'Hide Solution' : 'View Answer & Page Ref'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Question Text */}
              <div className="text-sm font-medium text-slate-900 dark:text-slate-100 whitespace-pre-line leading-relaxed">
                {q.question}
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {q.options.map((opt, optIdx) => (
                  <div
                    key={optIdx}
                    className={`p-3.5 rounded-2xl border flex items-start gap-2.5 text-xs shadow-sm ${
                      isExpanded && optIdx === q.correctAnswer
                        ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-950 dark:text-emerald-100 font-bold'
                        : 'bg-white/90 dark:bg-slate-900/60 border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-300'
                    }`}
                  >
                    <span className="font-bold">{letters[optIdx]}.</span>
                    <span className="flex-1">{opt}</span>
                    {isExpanded && optIdx === q.correctAnswer && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    )}
                  </div>
                ))}
              </div>

              {/* Expandable Solution & Book Page Reference */}
              {isExpanded && (
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
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
