'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Clock, 
  Share2, 
  BookOpen, 
  CheckCircle2, 
  Lightbulb, 
  Sparkles, 
  Layers, 
  Copy, 
  Check, 
  ChevronRight,
  HelpCircle,
  XCircle,
  ExternalLink,
  RotateCcw,
  ListOrdered
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { BlogPost } from '@/data/blogData';
import { Question } from '@/lib/types';

interface Props {
  post: BlogPost;
  linkedQuestions: Question[];
}

export default function BlogArticleClient({ post, linkedQuestions }: Props) {
  const [copied, setCopied] = useState(false);
  const [activeQuizQuestionIdx, setActiveQuizQuestionIdx] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      `Read this UPSC Prelims guide: "${post.title}" on UPSCSphere:\n\n${window.location.href}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const handleSelectQuizOption = (questionId: string, optionIdx: number, correctIdx: number) => {
    if (selectedAnswers[questionId] !== undefined) return;
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionIdx }));

    if (optionIdx === correctIdx) {
      try {
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.8 },
        });
      } catch {
        // silent
      }
    }
  };

  const currentQuizQ = linkedQuestions[activeQuizQuestionIdx] || linkedQuestions[0];
  const optionLabels = ['A', 'B', 'C', 'D'];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-16 py-8 sm:py-12 space-y-10 max-w-4xl mx-auto">
      
      {/* 1. Breadcrumb */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 flex-wrap text-xs font-semibold text-slate-500 dark:text-slate-400">
        <Link href="/" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <Link href="/blog" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
          Knowledge Hub
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-orange-600 dark:text-orange-400">{post.category}</span>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-900 dark:text-white font-bold truncate max-w-[200px]">
          {post.title}
        </span>
      </nav>

      {/* 2. Article Header Card */}
      <header className="liquid-glass-card rounded-3xl p-6 sm:p-10 border-orange-500/30 shadow-xl space-y-5 relative overflow-hidden">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-black uppercase tracking-wide shadow-sm">
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 font-semibold">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readTime}</span>
            </span>
            <span className="text-xs text-slate-400">•</span>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Updated: {post.lastUpdated}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyLink}
              title="Copy Article Link"
              className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-orange-600 hover:border-orange-400 transition-all cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
            </button>
            <button
              type="button"
              onClick={handleShareWhatsApp}
              title="Share on WhatsApp"
              className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-snug">
            {post.title}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            {post.subtitle}
          </p>
        </div>

        {/* Author / Reviewer attribution */}
        <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between flex-wrap gap-3 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-500 to-amber-400 flex items-center justify-center text-white font-bold text-xs shadow-sm">
              US
            </div>
            <div>
              <span className="font-bold text-slate-900 dark:text-white block">{post.author.name}</span>
              <span className="text-[11px] text-slate-500">{post.author.role}</span>
            </div>
          </div>
          <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
            Verified with Official Master Keys
          </span>
        </div>
      </header>

      {/* 3. Core Takeaways Box */}
      <section className="p-6 rounded-3xl bg-gradient-to-br from-orange-500/10 via-amber-500/5 to-transparent border border-orange-500/30 space-y-3 shadow-md">
        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-orange-700 dark:text-orange-300">
          <Sparkles className="w-4 h-4 text-orange-500" />
          <span>Core Takeaways for UPSC Prelims</span>
        </div>
        <ul className="space-y-2.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
          {post.takeaways.map((takeaway, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span className="leading-relaxed font-medium">{takeaway}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 4. Table of Contents */}
      {post.toc && post.toc.length > 0 && (
        <nav aria-label="Table of contents" className="liquid-glass-card rounded-2xl p-5 border border-slate-200 dark:border-white/10 space-y-3 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
            <ListOrdered className="w-4 h-4 text-orange-500" />
            <span>Table of Contents</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {post.toc.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors flex items-center gap-1.5 py-1"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                <span className="truncate">{item.title}</span>
              </a>
            ))}
          </div>
        </nav>
      )}

      {/* 5. Main Article Body Sections */}
      <main className="space-y-8">
        {post.sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="liquid-glass-card rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm scroll-mt-20"
          >
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-200 dark:border-white/10 pb-3">
              <span className="w-2 h-2 rounded-full bg-orange-500" />
              <span>{section.heading}</span>
            </h2>

            <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line space-y-3">
              {section.content}
            </div>

            {/* Render comparison / data table if present */}
            {section.table && (
              <div className="overflow-x-auto pt-2">
                <table className="w-full text-left text-xs border-collapse rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-100 dark:bg-slate-900/90 text-slate-900 dark:text-white font-bold border-b border-slate-200 dark:border-white/10">
                      {section.table.headers.map((h, hIdx) => (
                        <th key={hIdx} className="py-3 px-3.5">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-white/5 text-slate-600 dark:text-slate-300">
                    {section.table.rows.map((row, rIdx) => (
                      <tr key={rIdx} className={rIdx % 2 === 1 ? 'bg-slate-50/50 dark:bg-slate-900/30' : ''}>
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className="py-2.5 px-3.5 leading-relaxed font-medium">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Render Tip / Citation box if present */}
            {section.tipBox && (
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2.5 leading-relaxed">
                <BookOpen className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <span>{section.tipBox}</span>
              </div>
            )}
          </section>
        ))}
      </main>

      {/* 6. In-Article Interactive Practice Quiz Widget ("Test Your Understanding Now") */}
      {linkedQuestions && linkedQuestions.length > 0 && currentQuizQ && (
        <section className="liquid-glass-card rounded-3xl p-6 sm:p-8 border-2 border-orange-500/40 shadow-2xl space-y-6 relative overflow-hidden">
          <div className="flex items-center justify-between flex-wrap gap-3 pb-4 border-b border-slate-200 dark:border-white/10">
            <div className="space-y-0.5">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-orange-500/10 text-orange-700 dark:text-orange-400 text-xs font-black uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Interactive Practice Sandbox</span>
              </div>
              <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                Test Your Knowledge on This Topic ({activeQuizQuestionIdx + 1} of {linkedQuestions.length})
              </h3>
            </div>

            {/* Switch question tabs */}
            <div className="flex items-center gap-1.5">
              {linkedQuestions.map((q, idx) => (
                <button
                  key={q.id}
                  onClick={() => setActiveQuizQuestionIdx(idx)}
                  className={`w-8 h-8 rounded-xl text-xs font-black transition-all cursor-pointer ${
                    activeQuizQuestionIdx === idx
                      ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
                      : 'bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  Q{idx + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Question Statement */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-white/5">
            <span className="text-[10px] font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wide block mb-1">
              UPSC {currentQuizQ.pyqYear || 2026} ({currentQuizQ.pyqPaper || 'GS'}) • {currentQuizQ.subTopic}
            </span>
            <p className="text-xs sm:text-sm font-medium text-slate-900 dark:text-slate-100 whitespace-pre-line leading-relaxed">
              {currentQuizQ.question}
            </p>
          </div>

          {/* Options */}
          <div className="space-y-2.5">
            {currentQuizQ.options.map((opt, optIdx) => {
              const isAnswered = selectedAnswers[currentQuizQ.id] !== undefined;
              const isSelected = selectedAnswers[currentQuizQ.id] === optIdx;
              const isCorrect = optIdx === currentQuizQ.correctAnswer;

              let style = 'bg-white dark:bg-slate-900/40 border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 hover:border-orange-500/60';
              let badgeStyle = 'bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300';

              if (isAnswered) {
                if (isCorrect) {
                  style = 'bg-emerald-500/10 border-emerald-500 text-emerald-950 dark:text-emerald-200 font-bold';
                  badgeStyle = 'bg-emerald-500 text-white';
                } else if (isSelected) {
                  style = 'bg-rose-500/10 border-rose-500 text-rose-950 dark:text-rose-200';
                  badgeStyle = 'bg-rose-500 text-white';
                } else {
                  style = 'opacity-50 border-slate-200 dark:border-white/5 text-slate-400';
                }
              }

              return (
                <button
                  key={optIdx}
                  type="button"
                  onClick={() => handleSelectQuizOption(currentQuizQ.id, optIdx, currentQuizQ.correctAnswer)}
                  disabled={isAnswered}
                  className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-start gap-3 text-xs sm:text-sm ${style} ${
                    !isAnswered ? 'cursor-pointer hover:scale-[1.005]' : 'cursor-default'
                  }`}
                >
                  <span className={`w-6 h-6 rounded-lg flex items-center justify-center font-black text-xs shrink-0 ${badgeStyle}`}>
                    {optionLabels[optIdx]}
                  </span>
                  <span className="flex-1 pt-0.5 leading-relaxed">{opt}</span>
                  {isAnswered && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />}
                  {isAnswered && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />}
                </button>
              );
            })}
          </div>

          {/* Solution Breakdown when answered */}
          {selectedAnswers[currentQuizQ.id] !== undefined && (
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 space-y-3 animate-fade-in text-xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider text-[11px]">
                  Official Answer: Option ({optionLabels[currentQuizQ.correctAnswer]})
                </span>
                <Link
                  href={`/pyq/${currentQuizQ.pyqYear || 2026}/${(currentQuizQ.pyqPaper || 'GS').toLowerCase()}/${currentQuizQ.id}`}
                  className="font-bold text-orange-600 dark:text-orange-400 hover:underline inline-flex items-center gap-1"
                >
                  <span>Open Full Question Page</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                {currentQuizQ.explanation}
              </p>
              <div className="p-2.5 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-950 dark:text-orange-200 text-[11px]">
                <strong>Citation:</strong> {currentQuizQ.bookReference.bookName} ({currentQuizQ.bookReference.chapter}, {currentQuizQ.bookReference.pageNumber})
              </div>
            </div>
          )}
        </section>
      )}

      {/* 7. Bottom Navigation & Back to Hub */}
      <footer className="pt-6 border-t border-slate-200 dark:border-white/10 flex items-center justify-between flex-wrap gap-4">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Study Guides</span>
        </Link>

        <Link
          href="/pyq"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-black hover:opacity-95 transition-all shadow-md shadow-orange-500/20"
        >
          <Layers className="w-3.5 h-3.5" />
          <span>Practice 12-Yr PYQ Vault</span>
        </Link>
      </footer>

    </div>
  );
}
