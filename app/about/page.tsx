'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Zap, 
  BookOpen, 
  Trophy, 
  Layers, 
  Swords, 
  RotateCcw, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Mail,
  Linkedin,
  Instagram,
  GraduationCap,
  Sparkles,
  Heart,
  ExternalLink,
  Target,
  Clock,
  Compass,
  Check
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-16 py-10 sm:py-16 space-y-16 sm:space-y-20">
      
      {/* 1. Hero Showcase */}
      <section className="relative running-tricolor-card p-8 sm:p-12 lg:p-16 shadow-xl">
        <div className="running-shimmer-stream" />

        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="flex items-center gap-3.5 flex-wrap">
            <div className="relative w-12 h-12 rounded-full overflow-hidden p-[1.5px] bg-gradient-to-tr from-orange-500 via-amber-400 to-emerald-500 shadow-md">
              <Image
                src="/logo.png"
                alt="UPSCSphere Official Logo"
                width={48}
                height={48}
                className="w-full h-full object-cover rounded-full bg-white dark:bg-slate-900"
              />
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 dark:bg-orange-500/15 border border-orange-500/30 text-orange-700 dark:text-orange-300 text-xs sm:text-sm font-black tracking-wide">
              <GraduationCap className="w-4 h-4 text-orange-600 dark:text-orange-400" />
              <span>ABOUT UPSCSPHERE • OUR PHILOSOPHY & VISION</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-slate-900 dark:text-white leading-[1.14]">
            Empowering Every Aspirant with <br />
            <span className="tricolor-gradient-text">
              100% Free, Transparent
            </span> <br />
            UPSC Prelims Practice
          </h1>

          <p className="text-sm sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-3xl">
            <strong>UPSCSphere</strong> is an open educational web portal engineered to eliminate ambiguity in UPSC Civil Services Examination (CSE) preparation. We combine real-time question evaluation, authentic standard textbook citations, official 12-year PYQs, and nationwide peer benchmarks into a fast, beautiful, zero-cost platform.
          </p>

          <div className="pt-2 flex items-center gap-4 flex-wrap">
            <Link
              href="/quiz/create"
              className="liquid-glass-btn flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-600 text-white font-black text-xs sm:text-sm shadow-xl shadow-orange-500/20 hover:scale-105 transition-all"
            >
              <Zap className="w-4 h-4 fill-white" />
              <span>Start Free Practice Mock</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/pyq"
              className="liquid-glass-btn flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-white font-bold text-xs sm:text-sm border border-slate-200 dark:border-white/15 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
            >
              <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Explore 12-Yr PYQ Vault</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Key Metrics & Impact Numbers */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 text-center space-y-2 border-orange-500/20 shadow-sm">
          <span className="text-3xl sm:text-5xl font-black text-orange-600 dark:text-orange-400 font-display block">12 Years</span>
          <span className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 block">Official PYQ Papers</span>
          <span className="text-[11px] text-slate-500 dark:text-slate-400 block font-medium">2015 to 2026 GS-1 & CSAT</span>
        </div>

        <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 text-center space-y-2 border-emerald-500/20 shadow-sm">
          <span className="text-3xl sm:text-5xl font-black text-emerald-600 dark:text-emerald-400 font-display block">100% Free</span>
          <span className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 block">Zero Hidden Fees</span>
          <span className="text-[11px] text-slate-500 dark:text-slate-400 block font-medium">No paywalls or premium tiers</span>
        </div>

        <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 text-center space-y-2 border-blue-500/20 shadow-sm">
          <span className="text-3xl sm:text-5xl font-black text-blue-600 dark:text-blue-400 font-display block">Page-Exact</span>
          <span className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 block">Standard Book Citations</span>
          <span className="text-[11px] text-slate-500 dark:text-slate-400 block font-medium">Laxmikanth, Spectrum, Ramesh Singh</span>
        </div>

        <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 text-center space-y-2 border-purple-500/20 shadow-sm">
          <span className="text-3xl sm:text-5xl font-black text-purple-600 dark:text-purple-400 font-display block">Instant</span>
          <span className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 block">On-the-Spot Feedback</span>
          <span className="text-[11px] text-slate-500 dark:text-slate-400 block font-medium">Real-time negative marking</span>
        </div>
      </section>

      {/* 3. Why UPSCSphere Was Created (The Problem & Solution) */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 text-orange-700 dark:text-orange-400 text-xs font-bold border border-orange-500/20">
            <Target className="w-4 h-4 text-orange-500" />
            <span>THE ORIGIN STORY</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black font-display text-slate-900 dark:text-white tracking-tight">
            Solving the Three Biggest Frustrations in UPSC Prep
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Every year, over 10 lakh aspirants dedicate countless hours preparing for the UPSC Preliminary Examination. Yet, most practice platforms suffer from three systemic flaws:
          </p>

          <div className="space-y-3.5">
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 space-y-1 shadow-sm">
              <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
                <span className="text-rose-500">❌</span> Vague Explanations with No Authentic Proof
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Aspirants spend 30 minutes searching through thick books to verify if an answer key is correct. <strong>UPSCSphere solves this</strong> by mapping every question to exact textbook edition page numbers.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 space-y-1 shadow-sm">
              <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
                <span className="text-rose-500">❌</span> Expensive & Paywalled Test Series
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Commercial test series charge ₹15,000–₹35,000, creating financial barriers for deserving candidates. <strong>UPSCSphere is 100% free</strong> and always will be.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 space-y-1 shadow-sm">
              <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
                <span className="text-rose-500">❌</span> Passive Memorization Instead of Active Elimination
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                UPSC Prelims is an exam of elimination under severe time pressure. <strong>UPSCSphere incorporates 50:50 option elimination strikes</strong> and live 5-minute 1v1 speed duels.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Architectural Principles Card */}
        <div className="liquid-glass-card rounded-3xl p-7 sm:p-10 border border-emerald-500/30 space-y-6 shadow-xl relative overflow-hidden">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-500/30">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white font-display">
                Our Core Pillars
              </h3>
              <span className="text-xs text-emerald-700 dark:text-emerald-400 font-bold">Built for Speed & Reliability</span>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <div className="flex items-start gap-3">
              <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
              <div>
                <strong className="text-slate-900 dark:text-white block mb-0.5">Authentic Negative Marking</strong>
                Accurate UPSC standard: +2.0 and -0.667 marks for GS Paper-1; +2.5 and -0.833 marks for CSAT Paper-2.
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
              <div>
                <strong className="text-slate-900 dark:text-white block mb-0.5">Spaced Repetition Engine</strong>
                Automatically queues tricky or incorrect questions for 1-day, 3-day, and 7-day revision intervals.
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
              <div>
                <strong className="text-slate-900 dark:text-white block mb-0.5">Granular Syllabus Micro-Tracker</strong>
                Breaks down all 6 GS subjects and CSAT into sub-topic checklists with 3 revision checkmark rounds.
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
              <div>
                <strong className="text-slate-900 dark:text-white block mb-0.5">Client-First Privacy Architecture</strong>
                All mocks and history work offline with browser storage, syncing securely to the cloud when signed in.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Complete Platform Features Suite */}
      <section className="space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-700 dark:text-blue-300 text-xs font-bold border border-blue-500/20">
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span>FULL FEATURE SUITE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black font-display text-slate-900 dark:text-white">
            Everything You Need for Prelims in One Unified Hub
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            No cluttered interfaces, no distracting advertisements — just pure, focused exam preparation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 space-y-3.5 shadow-sm">
            <div className="w-11 h-11 rounded-2xl bg-orange-500/15 text-orange-600 dark:text-orange-400 flex items-center justify-center font-bold">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white">Custom Mock Configurator</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Create tailored mock quizzes by selecting specific subjects, difficulties (Easy, Medium, Hard, Extreme), question quantities, and optional countdown timers.
            </p>
          </div>

          <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 space-y-3.5 shadow-sm">
            <div className="w-11 h-11 rounded-2xl bg-blue-500/15 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white">12-Year PYQ Vault (2015–2026)</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Solve official past UPSC Prelims papers in real exam mode with paper-wise filters, topic search, and comprehensive explanations.
            </p>
          </div>

          <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 space-y-3.5 shadow-sm">
            <div className="w-11 h-11 rounded-2xl bg-rose-500/15 text-rose-600 dark:text-rose-400 flex items-center justify-center font-bold">
              <Swords className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white">1v1 Aspirant Speed Duel</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Match against a live peer aspirant for a rapid 5-minute timed battle to build composure, speed, and accuracy under pressure.
            </p>
          </div>

          <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 space-y-3.5 shadow-sm">
            <div className="w-11 h-11 rounded-2xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white">Syllabus Micro-Tracker</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Track granular sub-topics across Polity, Economy, Modern History, Geography, Environment, and CSAT with 1st, 2nd, and 3rd revision rounds.
            </p>
          </div>

          <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 space-y-3.5 shadow-sm">
            <div className="w-11 h-11 rounded-2xl bg-purple-500/15 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold">
              <RotateCcw className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white">Spaced Revision Vault</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Review saved bookmarks and challenging questions based on cognitive spaced repetition algorithms to ensure long-term retention.
            </p>
          </div>

          <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 space-y-3.5 shadow-sm">
            <div className="w-11 h-11 rounded-2xl bg-amber-500/15 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
              <Trophy className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white">All-India AIR Benchmarks</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Compare your mock percentiles and net scores with historical general cutoffs and nationwide aspirant cohorts.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Founder & Author Profile */}
      <section className="liquid-glass-card rounded-3xl p-8 sm:p-12 border border-orange-500/30 space-y-8 shadow-lg">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-200 dark:border-white/10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-700 dark:text-orange-400 text-xs font-bold">
              <Heart className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
              <span>CREATOR & LEAD ARCHITECT</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black font-display text-slate-900 dark:text-white">
              Built with Passion by Utkrasht Kumar
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl">
              UPSCSphere was engineered to empower the millions of hardworking aspirants preparing in libraries, hostels, and homes across India.
            </p>
          </div>

          {/* Connect Badges */}
          <div className="flex items-center gap-2.5 flex-wrap">
            <a
              href="https://www.linkedin.com/in/utkrashtkumar/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-bold shadow-md hover:bg-blue-700 transition-all"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://x.com/utkrashtkumar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold shadow-md hover:opacity-90 transition-all"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span>X / Twitter</span>
            </a>

            <a
              href="https://www.instagram.com/utkrashtkumarr/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-bold shadow-md hover:opacity-90 transition-all"
            >
              <Instagram className="w-4 h-4" />
              <span>Instagram</span>
            </a>

            <a
              href="mailto:utkrashtkumar@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold border border-slate-200 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
            >
              <Mail className="w-4 h-4 text-orange-500" />
              <span>Email Desk</span>
            </a>
          </div>
        </div>

        {/* Data Privacy & Google Verification Disclosure */}
        <div className="space-y-4">
          <div className="flex items-center gap-2.5 text-slate-900 dark:text-white font-bold text-sm sm:text-base">
            <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <span>Transparency, User Privacy & Google API Adherence</span>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            UPSCSphere does not sell or monetize student data. We adhere strictly to the <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer" className="underline text-orange-600 dark:text-orange-400 font-bold">Google API Services User Data Policy</a>, including the Limited Use requirements. Google Sign-In is utilized solely for authenticating your account and synchronizing your mock test results, bookmarks, and syllabus checklists.
          </p>

          <div className="flex items-center gap-4 text-xs font-bold text-orange-600 dark:text-orange-400">
            <Link href="/privacy-policy" className="hover:underline">Privacy Policy →</Link>
            <Link href="/terms" className="hover:underline">Terms of Service →</Link>
            <Link href="/contact" className="hover:underline">Contact Desk →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
