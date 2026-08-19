'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeft, 
  ArrowRight, 
  Bookmark, 
  BookmarkCheck, 
  Share2, 
  CheckCircle2, 
  XCircle, 
  BookOpen, 
  Lightbulb, 
  Sparkles, 
  Copy, 
  Check, 
  RotateCcw, 
  Layers, 
  Flame, 
  HelpCircle,
  Clock,
  ChevronRight,
  ExternalLink,
  Edit3,
  Save,
  MessageSquare
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Question, PaperType } from '@/lib/types';

interface Props {
  question: Question;
  year: number;
  paper: PaperType;
  prevQuestion: Question | null;
  nextQuestion: Question | null;
  relatedQuestions: Question[];
  totalInSet: number;
  currentIndex: number;
}

export default function QuestionDetailPage({
  question,
  year,
  paper,
  prevQuestion,
  nextQuestion,
  relatedQuestions,
  totalInSet,
  currentIndex,
}: Props) {
  const router = useRouter();

  // Interactive Quiz State
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [copied, setCopied] = useState(false);
  const [userNote, setUserNote] = useState('');
  const [isSavingNote, setIsSavingNote] = useState(false);
  const [noteSavedToast, setNoteSavedToast] = useState(false);

  // Load bookmark and notes state from localStorage
  useEffect(() => {
    try {
      const storedBookmarks = JSON.parse(localStorage.getItem('upsc_bookmarks') || '[]');
      if (Array.isArray(storedBookmarks)) {
        setIsBookmarked(storedBookmarks.includes(question.id));
      }

      const notesMap = JSON.parse(localStorage.getItem('upsc_question_notes') || '{}');
      if (notesMap[question.id]) {
        setUserNote(notesMap[question.id]);
      }
    } catch {
      // LocalStorage access fallback
    }
  }, [question.id]);

  // Handle Bookmark Toggle
  const toggleBookmark = () => {
    try {
      const storedBookmarks = JSON.parse(localStorage.getItem('upsc_bookmarks') || '[]');
      let updated: string[];
      if (storedBookmarks.includes(question.id)) {
        updated = storedBookmarks.filter((id: string) => id !== question.id);
        setIsBookmarked(false);
      } else {
        updated = [...storedBookmarks, question.id];
        setIsBookmarked(true);
      }
      localStorage.setItem('upsc_bookmarks', JSON.stringify(updated));
    } catch {
      setIsBookmarked(!isBookmarked);
    }
  };

  // Handle Option Click
  const handleSelectOption = (index: number) => {
    if (selectedOption !== null || isRevealed) return;
    setSelectedOption(index);
    setIsRevealed(true);

    if (index === question.correctAnswer) {
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 },
        });
      } catch {
        // silent
      }
    }
  };

  // Reset attempt for revision
  const handleReset = () => {
    setSelectedOption(null);
    setIsRevealed(false);
  };

  // Save Personal Aspirant Note
  const handleSaveNote = () => {
    setIsSavingNote(true);
    try {
      const notesMap = JSON.parse(localStorage.getItem('upsc_question_notes') || '{}');
      notesMap[question.id] = userNote;
      localStorage.setItem('upsc_question_notes', JSON.stringify(notesMap));
      setNoteSavedToast(true);
      setTimeout(() => setNoteSavedToast(false), 2500);
    } catch {
      // silent
    }
    setIsSavingNote(false);
  };

  // Copy Link to Clipboard
  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  // Share to WhatsApp
  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      `Solve this official UPSC ${year} (${paper}) question on "${question.topic}":\n\n${window.location.href}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  // Share to Telegram
  const handleShareTelegram = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`UPSC ${year} Solved PYQ: ${question.topic}`);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  };

  const optionLabels = ['A', 'B', 'C', 'D'];
  const isAnswered = selectedOption !== null || isRevealed;

  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-16 py-8 sm:py-12 space-y-8 max-w-5xl mx-auto">
      
      {/* 1. Top Breadcrumbs */}
      <div className="flex items-center justify-between flex-wrap gap-4 text-xs font-semibold text-slate-500 dark:text-slate-400">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 flex-wrap">
          <Link href="/" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/pyq" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
            12-Yr PYQ Vault
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link 
            href={`/pyq?year=${year}&paper=${paper}`}
            className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
          >
            UPSC {year} ({paper})
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 dark:text-white font-bold truncate max-w-[200px] sm:max-w-xs">
            Question #{currentIndex > 0 ? currentIndex : '1'}
          </span>
        </nav>

        {/* Full Exam Shortcut */}
        <Link
          href={`/pyq?year=${year}&paper=${paper}`}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-orange-500/10 hover:bg-orange-500/20 text-orange-600 dark:text-orange-400 text-xs font-bold transition-colors"
        >
          <Layers className="w-3.5 h-3.5" />
          <span>Attempt Full {year} Paper</span>
        </Link>
      </div>

      {/* 2. Question Header & Meta Bar */}
      <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 space-y-6 shadow-lg border-orange-500/20 relative overflow-hidden">
        
        {/* Meta badges */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-white/10">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-black uppercase tracking-wider shadow-sm">
              UPSC {year} {paper}
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-white/10 text-slate-800 dark:text-slate-200 text-xs font-bold border border-slate-200 dark:border-white/10 capitalize">
              {question.subject.replace('_', ' ')}
            </span>
            <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-700 dark:text-blue-400 text-xs font-bold border border-blue-500/20">
              {question.difficulty}
            </span>
            {question.frequency && question.frequency > 1 && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 text-xs font-bold border border-amber-500/20">
                <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                <span>Repeated {question.frequency}x in UPSC</span>
              </span>
            )}
          </div>

          {/* Action buttons (Bookmark, Share, Copy) */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleBookmark}
              title={isBookmarked ? 'Remove Bookmark' : 'Bookmark Question'}
              className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                isBookmarked
                  ? 'bg-amber-500 text-white border-amber-500 shadow-md shadow-amber-500/20'
                  : 'bg-slate-100 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-amber-600 hover:border-amber-400'
              }`}
            >
              {isBookmarked ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
            </button>

            <button
              type="button"
              onClick={handleCopyLink}
              title="Copy Question Link"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-orange-600 hover:border-orange-400 transition-all cursor-pointer relative"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
            </button>

            <button
              type="button"
              onClick={handleShareWhatsApp}
              title="Share on WhatsApp"
              className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Topic Title */}
        <div className="space-y-1">
          <span className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wide">
            {question.subTopic}
          </span>
          <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-snug">
            {question.topic}
          </h1>
        </div>

        {/* Question Statement Box */}
        <div className="p-5 sm:p-6 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/5">
          <p className="text-sm sm:text-base text-slate-900 dark:text-slate-100 font-medium leading-relaxed whitespace-pre-line">
            {question.question}
          </p>
        </div>

        {/* 3. Multiple Choice Option Buttons */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Select Option to Test Your Knowledge:
            </span>
            {isAnswered && (
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1 text-xs font-bold text-orange-600 dark:text-orange-400 hover:underline cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retry Question</span>
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 gap-3">
            {question.options.map((optionText, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrect = idx === question.correctAnswer;

              let optionStyle = 'border-slate-200 dark:border-white/10 hover:border-orange-500/60 bg-white dark:bg-slate-900/40 text-slate-800 dark:text-slate-200';
              let badgeStyle = 'bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300';

              if (isAnswered) {
                if (isCorrect) {
                  optionStyle = 'border-emerald-500 bg-emerald-500/10 text-emerald-950 dark:text-emerald-200 shadow-sm shadow-emerald-500/10';
                  badgeStyle = 'bg-emerald-500 text-white';
                } else if (isSelected) {
                  optionStyle = 'border-rose-500 bg-rose-500/10 text-rose-950 dark:text-rose-200';
                  badgeStyle = 'bg-rose-500 text-white';
                } else {
                  optionStyle = 'opacity-50 border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-slate-900/20 text-slate-500 dark:text-slate-400';
                }
              }

              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswered}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-3.5 ${optionStyle} ${
                    !isAnswered ? 'cursor-pointer hover:scale-[1.005]' : 'cursor-default'
                  }`}
                >
                  <span className={`w-7 h-7 rounded-xl flex items-center justify-center font-black text-xs shrink-0 transition-colors ${badgeStyle}`}>
                    {optionLabels[idx]}
                  </span>
                  <span className="text-xs sm:text-sm font-medium leading-relaxed pt-0.5 flex-1">
                    {optionText}
                  </span>
                  {isAnswered && isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  )}
                  {isAnswered && isSelected && !isCorrect && (
                    <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Reveal answer button if user wants to look directly */}
          {!isAnswered && (
            <div className="pt-2 text-center">
              <button
                type="button"
                onClick={() => setIsRevealed(true)}
                className="text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 underline cursor-pointer"
              >
                Skip practicing and reveal official UPSC answer key &amp; citations
              </button>
            </div>
          )}
        </div>

        {/* 4. Official UPSC Solution, Citations & Elimination Tip */}
        {isAnswered && (
          <div className="space-y-6 pt-6 border-t border-slate-200 dark:border-white/10 animate-fade-in">
            
            {/* Answer Result Banner */}
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-black text-sm shadow-sm">
                  {optionLabels[question.correctAnswer]}
                </div>
                <div>
                  <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider block">
                    Official UPSC CSE Answer
                  </span>
                  <span className="text-xs sm:text-sm font-black text-slate-900 dark:text-white">
                    Option ({optionLabels[question.correctAnswer]}): {question.options[question.correctAnswer]}
                  </span>
                </div>
              </div>
            </div>

            {/* Detailed Explanation Breakdown */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-orange-500" />
                <span>Statement-by-Statement Detailed Explanation</span>
              </h3>
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                {question.explanation}
              </div>
            </div>

            {/* Standard Textbook Citation Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-orange-500/5 via-amber-500/5 to-transparent border border-orange-500/20 space-y-3">
              <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400 font-bold text-xs uppercase tracking-wider">
                <BookOpen className="w-4 h-4" />
                <span>Authentic Textbook Reference &amp; Source Citation</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-white/5">
                  <span className="text-slate-500 dark:text-slate-400 block text-[10px] uppercase font-bold">Standard Book</span>
                  <span className="font-bold text-slate-900 dark:text-white">{question.bookReference.bookName}</span>
                </div>
                <div className="p-3 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-white/5">
                  <span className="text-slate-500 dark:text-slate-400 block text-[10px] uppercase font-bold">Chapter</span>
                  <span className="font-bold text-slate-900 dark:text-white">{question.bookReference.chapter}</span>
                </div>
                <div className="p-3 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-white/5">
                  <span className="text-slate-500 dark:text-slate-400 block text-[10px] uppercase font-bold">Exact Page &amp; Edition</span>
                  <span className="font-bold text-slate-900 dark:text-white">{question.bookReference.pageNumber} ({question.bookReference.edition || 'Standard Edition'})</span>
                </div>
              </div>
              {question.bookReference.keyExcerpt && (
                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-900 dark:text-amber-200 italic leading-relaxed">
                  &ldquo;{question.bookReference.keyExcerpt}&rdquo;
                </div>
              )}
            </div>

            {/* Elimination & Exam Trap Strategy */}
            {question.eliminationTip && (
              <div className="p-5 rounded-2xl bg-blue-500/5 border border-blue-500/20 space-y-2">
                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-wider">
                  <Lightbulb className="w-4 h-4" />
                  <span>Topper&apos;s Elimination Strategy &amp; Cognitive Traps</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {question.eliminationTip}
                </p>
              </div>
            )}

            {/* Aspirant Personal Notes / Scratchpad */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white">
                  <Edit3 className="w-4 h-4 text-orange-500" />
                  <span>My Personal Study Notes (Saved on Device)</span>
                </div>
                {noteSavedToast && (
                  <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    <Check className="w-3 h-3" /> Saved!
                  </span>
                )}
              </div>
              <textarea
                value={userNote}
                onChange={(e) => setUserNote(e.target.value)}
                placeholder="Write your personal mnemonics, quick revision pointers, or mistakes to remember for this question..."
                rows={3}
                className="w-full p-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/10 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-orange-500"
              />
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleSaveNote}
                  disabled={isSavingNote}
                  className="px-4 py-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold hover:opacity-90 transition-opacity flex items-center gap-1.5 cursor-pointer"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Save Note</span>
                </button>
              </div>
            </div>

          </div>
        )}

      </div>

      {/* 5. Previous / Next Question Navigation Bar */}
      <div className="flex items-center justify-between gap-4 flex-wrap pt-2">
        {prevQuestion ? (
          <Link
            href={`/pyq/${year}/${paper.toLowerCase()}/${prevQuestion.id}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-xs font-bold text-slate-800 dark:text-slate-200 hover:border-orange-500 hover:text-orange-600 transition-all shadow-sm group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="truncate max-w-[150px] sm:max-w-xs">Previous Question</span>
          </Link>
        ) : (
          <div />
        )}

        <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
          UPSC {year} {paper} • Question {currentIndex > 0 ? currentIndex : '1'} of {totalInSet}
        </span>

        {nextQuestion ? (
          <Link
            href={`/pyq/${year}/${paper.toLowerCase()}/${nextQuestion.id}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-black hover:opacity-95 transition-all shadow-md shadow-orange-500/20 group"
          >
            <span>Next Question</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        ) : (
          <Link
            href={`/pyq?year=${year}&paper=${paper}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-emerald-600 text-white text-xs font-black hover:bg-emerald-700 transition-all shadow-md"
          >
            <span>View Full Paper Summary</span>
            <CheckCircle2 className="w-4 h-4" />
          </Link>
        )}
      </div>

      {/* 6. Related Questions Carousel / Grid */}
      {relatedQuestions && relatedQuestions.length > 0 && (
        <section className="space-y-4 pt-6">
          <div className="flex items-center justify-between">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span>Related PYQs on {question.topic}</span>
            </h2>
            <Link
              href="/pyq"
              className="text-xs font-bold text-orange-600 dark:text-orange-400 hover:underline"
            >
              Browse All 12 Years →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {relatedQuestions.map((relQ) => {
              const relYear = relQ.pyqYear || 2026;
              const relPaper = (relQ.pyqPaper || 'GS').toLowerCase();
              return (
                <Link
                  key={relQ.id}
                  href={`/pyq/${relYear}/${relPaper}/${relQ.id}`}
                  className="liquid-glass-card rounded-2xl p-5 border border-slate-200/80 dark:border-white/5 hover:border-orange-500/40 transition-all hover:scale-[1.01] space-y-2.5 block group"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded-md bg-orange-500/10 text-orange-700 dark:text-orange-400 text-[10px] font-black uppercase">
                      UPSC {relYear} {relQ.pyqPaper || 'GS'}
                    </span>
                    <span className="text-[10px] font-bold text-slate-500 capitalize">
                      {relQ.subject.replace('_', ' ')}
                    </span>
                  </div>

                  <h3 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white line-clamp-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                    {relQ.topic}
                  </h3>

                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                    {relQ.question.replace(/\n+/g, ' ')}
                  </p>

                  <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500 font-semibold border-t border-slate-100 dark:border-white/5">
                    <span>{relQ.bookReference.bookName}</span>
                    <span className="text-orange-600 dark:text-orange-400 font-bold group-hover:translate-x-0.5 transition-transform">
                      Solve Question →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

    </div>
  );
}
