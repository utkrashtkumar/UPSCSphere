'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Compass, 
  Zap, 
  Ban, 
  BookOpen, 
  Layers, 
  Swords, 
  RotateCcw, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  Timer,
  Sparkles,
  Trophy,
  ShieldCheck
} from 'lucide-react';

export default function HowToUsePage() {
  const steps = [
    {
      step: '01',
      title: 'Build Custom Subject Drills or Full Mocks',
      icon: Zap,
      color: 'text-orange-600 dark:text-orange-400',
      badgeBg: 'bg-orange-500/10 border-orange-500/30 text-orange-700 dark:text-orange-300',
      description: 'Navigate to the Quiz Configurator to tailor your mock tests precisely to your current study schedule.',
      features: [
        'Select single subjects (Polity, Economy, Geography, Environment, History, S&T, CSAT) or mixed GS mocks.',
        'Choose Instant Learning Mode (feedback & book citations right after selecting) or Strict Exam Simulation Mode (2-hour timer, negative marking penalty of -0.66).',
        'Pick question count: 5 Q sprint, 10 Q standard drill, or full 100 Q mock.'
      ],
      linkText: 'Open Quiz Configurator',
      linkHref: '/quiz/create',
    },
    {
      step: '02',
      title: 'Master the 50:50 Option Elimination Technique',
      icon: Ban,
      color: 'text-rose-600 dark:text-rose-400',
      badgeBg: 'bg-rose-500/10 border-rose-500/30 text-rose-700 dark:text-rose-300',
      description: 'The difference between clearing Prelims and missing the cutoff is how well you eliminate distracters under uncertainty.',
      features: [
        'Hover over any option button during a live test and click the Strike Icon to eliminate improbable choices.',
        'Eliminated options turn translucent with a strikethrough, allowing you to focus strictly on the surviving choices.',
        'Read the embedded 50:50 Elimination Strategy in every explanation to learn pattern recognition.'
      ],
      linkText: 'Try 50:50 Elimination in a Quiz',
      linkHref: '/quiz/create',
    },
    {
      step: '03',
      title: 'Revise with Exact Book & Page Number Citations',
      icon: BookOpen,
      color: 'text-blue-600 dark:text-blue-400',
      badgeBg: 'bg-blue-500/10 border-blue-500/30 text-blue-700 dark:text-blue-300',
      description: 'Never waste hours wondering why an answer is correct or which source to study.',
      features: [
        'Every single question is tagged with the standard textbook edition, chapter title, and page number range.',
        'Direct references to M. Laxmikanth (7th Ed), Spectrum Rajiv Ahir, Ramesh Singh, Shankar IAS (9th Ed), and NCERTs.',
        'Highlight and bookmark tricky questions to your personal Spaced Repetition Vault with one click.'
      ],
      linkText: 'Explore PYQ Citations Vault',
      linkHref: '/pyq',
    },
    {
      step: '04',
      title: 'Solve the 12-Year Official PYQ Vault (2015–2026)',
      icon: ShieldCheck,
      color: 'text-indigo-600 dark:text-indigo-400',
      badgeBg: 'bg-indigo-500/10 border-indigo-500/30 text-indigo-700 dark:text-indigo-300',
      description: 'Complete official question bank covering all Preliminary exam papers from 2015 to 2026 for both GS-1 and CSAT.',
      features: [
        'One-click launch for official full-length 2-hour papers from 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, and 2026.',
        'Real-time search bar to search PYQs by topic, book reference, or key keyword.',
        'Official UPSC answer keys verified against master answer sheets.'
      ],
      linkText: 'Open 12-Year PYQ Vault',
      linkHref: '/pyq',
    },
    {
      step: '05',
      title: 'Track Micro-Topics & Spaced Revision Rounds',
      icon: Layers,
      color: 'text-emerald-600 dark:text-emerald-400',
      badgeBg: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-300',
      description: 'Transform the overwhelming UPSC syllabus into clear, actionable daily micro-checklists.',
      features: [
        '37 comprehensive syllabus topics broken down into 180+ micro-concepts.',
        'Track 1st Round (reading), 2nd Round (notes consolidation), and 3rd Round (active recall test).',
        'Automatic progress percentage calculations saved directly in your browser.'
      ],
      linkText: 'Open Syllabus Checklist',
      linkHref: '/syllabus',
    },
    {
      step: '06',
      title: '1v1 Aspirant Speed Duels & All-India Rankings',
      icon: Swords,
      color: 'text-amber-600 dark:text-amber-400',
      badgeBg: 'bg-amber-500/10 border-amber-500/30 text-amber-700 dark:text-amber-300',
      description: 'Sharpen your decision-making speed and accuracy under live competitive pressure.',
      features: [
        'Fast 5-question rapid duel against other active civil services aspirants.',
        'Climb the All-India Simulated Leaderboard and earn weekly consistency streak badges.',
        'Real-time accuracy analytics and AIR cutoff percentile predictor.'
      ],
      linkText: 'Enter 1v1 Arena',
      linkHref: '/duel',
    },
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-16 py-10 sm:py-14 space-y-10">
      
      {/* Back Link & Header */}
      <div>
        <Link 
          href="/" 
          className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 dark:text-orange-400 hover:underline mb-4"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 dark:bg-orange-500/15 border border-orange-500/30 text-orange-700 dark:text-orange-300 text-xs font-bold mb-3">
          <Compass className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" />
          <span>Aspirant Guide & Platform Walkthrough</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight font-display">
          How to Use <span className="tricolor-gradient-text">UPSCSphere</span>
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-2xl">
          Learn how to get the maximum score improvement out of our 100% free Prelims mock engine, 12-year PYQ archive, and standard book citations.
        </p>
      </div>

      {/* Quick Start Card Banner */}
      <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 border-orange-500/30 bg-gradient-to-r from-orange-500/5 via-amber-500/5 to-emerald-500/5 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-orange-700 dark:text-orange-400 font-bold text-sm">
            <Sparkles className="w-4 h-4" />
            <span>Recommended Daily 30-Minute Routine</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed max-w-xl">
            1. Solve 10 Daily Current Affairs Editorial questions (7 AM) • 2. Take one 10-Q topic drill in your weak subject • 3. Strike out options using the 50:50 tool • 4. Review the standard book page citation.
          </p>
        </div>

        <Link
          href="/quiz/create"
          className="liquid-glass-btn shrink-0 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 to-emerald-600 text-white font-extrabold text-xs shadow-md hover:scale-105 transition-all"
        >
          <span>Start Daily Mock Drill →</span>
        </Link>
      </div>

      {/* 6 Step Cards */}
      <div className="space-y-6">
        {steps.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.step}
              className="liquid-glass-card rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm hover:border-orange-500/40 transition-all"
            >
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-black text-sm font-display text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10 shadow-sm">
                    {item.step}
                  </div>
                  <div>
                    <h2 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white font-display">
                      {item.title}
                    </h2>
                  </div>
                </div>

                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${item.badgeBg}`}>
                  Step {item.step} Guide
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {item.description}
              </p>

              <div className="p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-950/60 border border-slate-200 dark:border-white/5 space-y-2">
                {item.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex items-center justify-end">
                <Link
                  href={item.linkHref}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 dark:text-orange-400 hover:underline"
                >
                  <span>{item.linkText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Final Call to Action */}
      <div className="text-center py-6 space-y-3">
        <h3 className="font-bold text-lg text-slate-900 dark:text-white">Ready to begin your Prelims journey?</h3>
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <Link
            href="/quiz/create"
            className="px-6 py-3 rounded-xl bg-orange-500 text-white font-bold text-xs hover:bg-orange-600 transition-colors shadow-sm"
          >
            Create Custom Quiz
          </Link>
          <Link
            href="/pyq"
            className="px-6 py-3 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10 font-bold text-xs hover:border-orange-500 transition-colors shadow-sm"
          >
            Browse 12-Yr PYQ Vault
          </Link>
        </div>
      </div>

    </div>
  );
}
