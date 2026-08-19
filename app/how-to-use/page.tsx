'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
  ShieldCheck,
  Calendar,
  Award,
  Flame,
  Camera,
  Share2,
  Lock,
  Search,
  HelpCircle,
  ChevronDown,
  Check,
  Star,
  ExternalLink,
  GraduationCap
} from 'lucide-react';

interface FeatureGuide {
  id: string;
  category: 'core' | 'study' | 'duel' | 'rewards';
  step: string;
  title: string;
  icon: any;
  color: string;
  badgeBg: string;
  tagline: string;
  description: string;
  howToUse: string[];
  proTip?: string;
  linkText: string;
  linkHref: string;
}

export default function HowToUsePage() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'core' | 'study' | 'duel' | 'rewards'>('all');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const features: FeatureGuide[] = [
    {
      id: 'quiz-builder',
      category: 'core',
      step: '01',
      title: 'Custom Quiz Builder & Timed Speed Drills',
      icon: Zap,
      color: 'text-orange-600 dark:text-orange-400',
      badgeBg: 'bg-orange-500/10 border-orange-500/30 text-orange-700 dark:text-orange-300',
      tagline: 'Tailor speed mocks to your exact subject revision needs',
      description: 'Build flexible diagnostic mock tests across Indian Polity, Economy, Modern History, Geography, Environment, Science & Tech, and CSAT.',
      howToUse: [
        'Select single subjects or multi-select any combination of General Studies and CSAT papers.',
        'Choose question count: 5-Q Rapid Sprint, 10-Q Standard Drill, 20-Q Deep Dive, or 100-Q Full Simulation.',
        'Set custom timers: 5 mins, 15 mins, 30 mins, 120 mins, or Untimed practice.',
        'Toggle between Instant Feedback Mode (citations right after selection) and Strict Exam Mode (2-hour timer, negative marking penalty of -0.66).'
      ],
      proTip: 'Use 10-Q Instant Feedback mode during morning study to quickly test active recall on yesterday\'s reading.',
      linkText: 'Configure Custom Mock Test',
      linkHref: '/quiz/create',
    },
    {
      id: 'elimination',
      category: 'core',
      step: '02',
      title: '50:50 Option Elimination Technique',
      icon: Ban,
      color: 'text-rose-600 dark:text-rose-400',
      badgeBg: 'bg-rose-500/10 border-rose-500/30 text-rose-700 dark:text-rose-300',
      tagline: 'Master the art of eliminating extreme and incorrect options under uncertainty',
      description: 'UPSC Prelims requires calculated intelligent guessing. Our interactive strike-through tool trains you to eliminate distractors systematically.',
      howToUse: [
        'Hover over any option in a live test session and click the Strike Icon (🚫) on the right.',
        'The option is immediately grayed out with a strikethrough line, clearing your visual focus.',
        'Read the 50:50 Elimination Notes embedded in every solution to recognize extreme qualifiers (always, never, only).'
      ],
      proTip: 'Eliminating just 2 incorrect choices increases your statistical probability of gaining positive marks from 25% to 50%!',
      linkText: 'Practice 50:50 Elimination',
      linkHref: '/quiz/create',
    },
    {
      id: 'book-citations',
      category: 'study',
      step: '03',
      title: 'Standard Textbook & Page Number Citations',
      icon: BookOpen,
      color: 'text-blue-600 dark:text-blue-400',
      badgeBg: 'bg-blue-500/10 border-blue-500/30 text-blue-700 dark:text-blue-300',
      tagline: 'Zero ambiguity: every answer is cited with exact book editions and page numbers',
      description: 'Never waste hours cross-referencing conflicting coaching keys. Every explanation provides verified textbook sources.',
      howToUse: [
        'After submitting an answer, view the "Verified Book Citation" box below the explanation.',
        'Inspect authoritative references: M. Laxmikanth (7th Ed), Spectrum Rajiv Ahir, Ramesh Singh, Shankar IAS (9th Ed), GC Leong, NCERTs, and Ravi Agrahari.',
        'See exact chapter names and page numbers (e.g., Laxmikanth Ch. 7, Page 7.12) for immediate source revision.'
      ],
      proTip: 'Open your physical textbook directly to the cited page to reinforce spatial memory and read adjacent context.',
      linkText: 'Explore Verified Citations in PYQ Vault',
      linkHref: '/pyq',
    },
    {
      id: 'pyq-vault',
      category: 'study',
      step: '04',
      title: '12-Year Official PYQ Vault (2015–2026)',
      icon: ShieldCheck,
      color: 'text-indigo-600 dark:text-indigo-400',
      badgeBg: 'bg-indigo-500/10 border-indigo-500/30 text-indigo-700 dark:text-indigo-300',
      tagline: 'Solve all official UPSC Prelims GS & CSAT papers with official master keys',
      description: 'The definitive archive of official UPSC Preliminary examination papers from 2015 to 2026 with full question categorization.',
      howToUse: [
        'Select any year (2015 to 2026) and paper (GS Paper 1 or CSAT Paper 2).',
        'Use the real-time search bar to search PYQs by keywords (e.g. "Ramsar", "Governor", "Inflation", "Monetary Policy").',
        'Filter questions by subject or difficulty standard.',
        'Click "Open Standalone Question & Discussion Page" for deep discussion and notes.'
      ],
      proTip: 'UPSC repeats 15-20% of themes across 5-year cycles. Solving 2015–2026 PYQs is mandatory for clearing GS Paper 1.',
      linkText: 'Open 12-Year PYQ Vault',
      linkHref: '/pyq',
    },
    {
      id: 'standalone-pyq',
      category: 'study',
      step: '05',
      title: 'Individual Question & Discussion Pages',
      icon: Search,
      color: 'text-teal-600 dark:text-teal-400',
      badgeBg: 'bg-teal-500/10 border-teal-500/30 text-teal-700 dark:text-teal-300',
      tagline: 'Searchable, shareable individual question pages with personal notes scratchpads',
      description: 'Every PYQ has its own permanent URL (`/pyq/2023/gs1/q15`) with full textbook citations, elimination notes, and discussion.',
      howToUse: [
        'Bookmark specific difficult questions directly in your browser or share with study groups.',
        'Write personal notes in the Aspirant Notes Scratchpad (automatically saved in your browser localStorage).',
        'Navigate seamlessly using Previous / Next Question buttons.',
        'Explore related recommended PYQs under the same subject theme.'
      ],
      proTip: 'Use the personal scratchpad to write your own memory mnemonics for tricky factual questions.',
      linkText: 'View Sample Question Page',
      linkHref: '/pyq/2023/gs1/q1',
    },
    {
      id: 'daily-ca',
      category: 'core',
      step: '06',
      title: 'Daily Current Affairs 10-MCQ Engine',
      icon: Calendar,
      color: 'text-emerald-600 dark:text-emerald-400',
      badgeBg: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-300',
      tagline: 'High-yield editorial MCQs updated daily from The Hindu, Indian Express, and PIB',
      description: 'Transform daily newspaper reading into active test practice with 10 editorial-based current affairs MCQs.',
      howToUse: [
        'Visit `/daily-ca` every morning to solve today\'s 10-MCQ editorial quiz.',
        'Inspect the Daily CA Archive calendar to attempt previous dates.',
        'Review the source newspaper tags and policy background for each news item.',
        'Earn +30 XP upon daily quiz completion.'
      ],
      proTip: 'Subscribe to browser morning notifications to receive the 7:00 AM Daily CA alert automatically.',
      linkText: 'Solve Today\'s Daily CA',
      linkHref: '/daily-ca',
    },
    {
      id: 'knowledge-hub',
      category: 'study',
      step: '07',
      title: 'Topic Deep-Dive Knowledge Hub & Articles',
      icon: GraduationCap,
      color: 'text-purple-600 dark:text-purple-400',
      badgeBg: 'bg-purple-500/10 border-purple-500/30 text-purple-700 dark:text-purple-300',
      tagline: 'High-yield conceptual guides with embedded interactive practice MCQs',
      description: 'Comprehensive syllabus masterclasses covering high-weightage topics like Fundamental Rights, RBI Monetary Tools, Ramsar Wetlands, and Elimination Techniques.',
      howToUse: [
        'Browse the `/blog` directory and filter by Polity, Economy, Geography, Environment, or Strategy.',
        'Read structured guides with Table of Contents, statutory frameworks, and high-yield takeaway boxes.',
        'Attempt the embedded Interactive Practice MCQ widget inside the article to verify your comprehension immediately.'
      ],
      proTip: 'Read the "UPSC Elimination Techniques 2026" guide before taking your full-length mock tests.',
      linkText: 'Explore Knowledge Hub',
      linkHref: '/blog',
    },
    {
      id: 'tracker',
      category: 'study',
      step: '08',
      title: 'UPSC Notification Tracker & Attempt Calculator',
      icon: Timer,
      color: 'text-amber-600 dark:text-amber-400',
      badgeBg: 'bg-amber-500/10 border-amber-500/30 text-amber-700 dark:text-amber-300',
      tagline: 'Live Prelims countdown, milestone calendar, cutoff trends, and eligibility calculator',
      description: 'Stay 100% on schedule with official UPSC calendar dates, historical category cutoffs (2018–2026), and DOB eligibility checks.',
      howToUse: [
        'View the live 4-digit countdown to UPSC Prelims 2027.',
        'Click "Add to Google Calendar" to set reminders for notification release, form deadlines, and exam dates.',
        'Use the Interactive Age & Attempt Calculator: enter your Date of Birth, Category (General/EWS/OBC/SC/ST), and attempts taken to calculate remaining attempts and last eligible exam year.',
        'Analyze 8-year historical Prelims cutoff score and vacancy trends.'
      ],
      proTip: 'Check the historical cutoff trends table to set your target raw mock score (aim for Cutoff + 20 marks).',
      linkText: 'Open Exam Tracker & Calculator',
      linkHref: '/tracker',
    },
    {
      id: 'duel-arena',
      category: 'duel',
      step: '09',
      title: '1v1 Custom Room Duel Arena & Live Battles',
      icon: Swords,
      color: 'text-rose-600 dark:text-rose-400',
      badgeBg: 'bg-rose-500/10 border-rose-500/30 text-rose-700 dark:text-rose-300',
      tagline: 'Host private rooms, challenge study partners, and duel live aspirants across India',
      description: 'Experience real competitive pressure with synchronized questions, custom timers, and head-to-head score comparison.',
      howToUse: [
        '👑 Create Room: generate or type a custom Room Code (e.g. `UPSC-782`), select subjects, question count (5-20), and timer (3-15 min).',
        'Share your 1-click invite link via WhatsApp or Telegram.',
        '🔑 Join Room: enter a friend\'s 6-character room code or open their invite link to launch the synchronized match.',
        '⚔️ Quick Match: match against active online civil services aspirants with an animated 3-second countdown.'
      ],
      proTip: 'Duel with study group partners daily to eliminate second-guessing and build rapid MCQ instinct under time pressure.',
      linkText: 'Enter 1v1 Duel Arena',
      linkHref: '/duel',
    },
    {
      id: 'score-card',
      category: 'duel',
      step: '10',
      title: 'Daily "Share Your Score" Card (PNG Export)',
      icon: Camera,
      color: 'text-emerald-600 dark:text-emerald-400',
      badgeBg: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-300',
      tagline: 'Wordle / Spotify-Wrapped style score cards formatted for WhatsApp & Instagram',
      description: 'Celebrate test milestones with high-resolution visual cards showcasing your marks, percentile, accuracy, streak, and question accuracy matrix.',
      howToUse: [
        'After completing any test, click "Generate Score Card 📸" on the results screen.',
        'View the live preview featuring your score, All-India percentile, study streak, and question grid (🟩 Correct, 🟥 Wrong, ⬜ Skipped).',
        'Click "Download Image (PNG)" to save a 1080×1350 high-DPI image for WhatsApp Status & Instagram Stories.',
        'Click "Copy Formatted Text" to paste a clean Wordle-style summary into study groups.'
      ],
      proTip: 'Posting your daily score card on WhatsApp status creates positive social accountability for your preparation.',
      linkText: 'Create a Mock to Generate Card',
      linkHref: '/quiz/create',
    },
    {
      id: 'challenge-friend',
      category: 'duel',
      step: '11',
      title: '"Challenge a Friend" Direct Match System',
      icon: Share2,
      color: 'text-orange-600 dark:text-orange-400',
      badgeBg: 'bg-orange-500/10 border-orange-500/30 text-orange-700 dark:text-orange-300',
      tagline: 'Generate unique links with your target score to challenge peers on identical questions',
      description: 'After completing a mock test, generate a direct challenge link that encodes the exact question set and your score to beat.',
      howToUse: [
        'On the quiz results page, click "Challenge a Friend ⚔️".',
        'Send the generated link via WhatsApp or copy to clipboard.',
        'When your friend opens the link, a "Direct Aspirant Challenge Accepted" banner displays.',
        'They attempt the exact same questions under the same timer to see if they can beat your marks!'
      ],
      proTip: 'Use this feature in Telegram test groups to host spontaneous mini-mock tests.',
      linkText: 'View Quiz Results & Challenge',
      linkHref: '/leaderboard',
    },
    {
      id: 'leaderboard-profile',
      category: 'rewards',
      step: '12',
      title: 'Aspirant of the Week & Public Profile Pages',
      icon: Trophy,
      color: 'text-amber-600 dark:text-amber-400',
      badgeBg: 'bg-amber-500/10 border-amber-500/30 text-amber-700 dark:text-amber-300',
      tagline: 'Nationwide rankings, weekly topper spotlight, and LinkedIn-ready public profiles',
      description: 'Track your standing on the All-India Leaderboard and share your verified public profile (`/aspirant/[id]`) with badges and achievements.',
      howToUse: [
        'Visit `/leaderboard` to check your All-India Rank, percentile, and average score calculated strictly from real test completions.',
        'Check the "Aspirant of the Week" crown spotlight banner highlighting the #1 weekly topper.',
        'Click on any aspirant\'s name to view their Public Profile page with target year, optional subject, study streak, and achievement badges.',
        'Share your public profile directly on LinkedIn or WhatsApp.'
      ],
      proTip: 'Maintaining a 7-day study streak boosts your percentile and leaderboard visibility significantly.',
      linkText: 'Check All-India Leaderboard',
      linkHref: '/leaderboard',
    },
    {
      id: 'rewards-system',
      category: 'rewards',
      step: '13',
      title: 'Aspirant Reward & XP System (6 Tiers & 10 Badges)',
      icon: Award,
      color: 'text-orange-600 dark:text-orange-400',
      badgeBg: 'bg-orange-500/10 border-orange-500/30 text-orange-700 dark:text-orange-300',
      tagline: 'Earn XP points for logged-in activity and level up through 6 prestigious UPSC rank tiers',
      description: 'Gamify your civil services preparation. Complete tests, maintain streaks, and win duels to unlock rank tiers and achievement badges.',
      howToUse: [
        'Sign in to your free account to activate XP tracking (guests do not earn XP).',
        'Earn points: +50 XP for mock completion, +25 XP for ≥80% accuracy, +75 XP for duel win, +30 XP for Daily CA.',
        'Level up through 6 tiers: Rookie Aspirant (Lvl 1) → Dedicated Aspirant (Lvl 2) → Prelims Scholar (Lvl 3) → Mains Contender (Lvl 4) → Interview Qualifier (Lvl 5) → AIR Topper Champion (Lvl 6).',
        'Unlock 10 badges in the Badges Vault and generate an official Milestone Certificate of Excellence (PNG).'
      ],
      proTip: 'Visit `/rewards` regularly to track your progress bar towards the next rank tier and inspect locked badge criteria.',
      linkText: 'Open Rewards & Badges Hub',
      linkHref: '/rewards',
    },
    {
      id: 'syllabus-revision',
      category: 'study',
      step: '14',
      title: 'Micro-Topic Syllabus Checklist & Spaced Revision',
      icon: Layers,
      color: 'text-emerald-600 dark:text-emerald-400',
      badgeBg: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-300',
      tagline: '3-Round syllabus tracking and Leitner-box spaced repetition active recall vault',
      description: 'Break down the entire UPSC CSE syllabus into 180+ micro-topics and queue tricky questions for automated spaced repetition.',
      howToUse: [
        'Visit `/syllabus` to track 1st Round (reading), 2nd Round (notes), and 3rd Round (active recall test) for 37 syllabus subjects.',
        'Bookmark tricky or incorrect questions during mock tests with the bookmark icon.',
        'Visit `/revision` to review your Spaced Repetition Queue based on Leitner intervals (1 day, 3 days, 7 days, 14 days, Mastered).'
      ],
      proTip: 'Complete at least 5 Spaced Repetition flashcards each evening to convert short-term memory into permanent recall.',
      linkText: 'Open Syllabus Checklist',
      linkHref: '/syllabus',
    },
  ];

  const filteredFeatures = features.filter((f) => {
    if (activeCategory === 'all') return true;
    return f.category === activeCategory;
  });

  const faqs = [
    {
      q: 'Is UPSCSphere really 100% free with no hidden paywalls?',
      a: 'Yes! All features on UPSCSphere — including unlimited custom mock tests, the 12-Year PYQ archive (2015–2026), 50:50 option elimination, verified textbook citations, 1v1 duels, score cards, and the rewards system — are completely free for all civil services aspirants.'
    },
    {
      q: 'How are textbook editions and page citations verified?',
      a: 'Every question in our question bank is tagged with citations from standard UPSC reference textbooks (M. Laxmikanth 7th Edition, Spectrum Modern India, Ramesh Singh Indian Economy, Shankar IAS 9th Edition, GC Leong Physical Geography, NCERT Class XI-XII, etc.). The edition, chapter title, and page range are explicitly specified so you can open your physical book immediately.'
    },
    {
      q: 'How do 1v1 Custom Duel Rooms work?',
      a: 'When you create a 1v1 Duel Room, the system generates a unique Room Code (e.g. UPSC-782) and selects questions based on your chosen subjects and timer. When your friend joins via the room code or invite link, both players receive the exact same questions and options in identical sequence with live synchronized timers.'
    },
    {
      q: 'Why do I need to be logged in to earn XP points and badges?',
      a: 'XP points, level tier progression, study streaks, and achievement badges are permanently stored and credited to your authenticated account. Unauthenticated guests can attempt all quizzes freely, but signing in enables persistent reward tracking, leaderboard rankings, and your public profile.'
    },
    {
      q: 'How does the Age and Attempt Eligibility Calculator work?',
      a: 'The calculator on `/tracker` follows official UPSC CSE notification rules: it computes your exact age on August 1st of your target examination year and calculates your remaining attempts based on your category (General: 6 attempts up to age 32; OBC: 9 attempts up to age 35; SC/ST: unlimited attempts up to age 37; EWS: 6 attempts up to age 32).'
    },
    {
      q: 'Can I use UPSCSphere on my mobile phone and tablet?',
      a: 'Yes! UPSCSphere is a fully responsive Progressive Web App (PWA). You can practice mock tests, eliminate options, download score cards, and duel on any smartphone, iPad, tablet, or desktop computer.'
    }
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-16 py-10 sm:py-14 space-y-12 max-w-6xl mx-auto">
      
      {/* 1. Header & Navigation */}
      <div>
        <Link 
          href="/" 
          className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 dark:text-orange-400 hover:underline mb-4"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        <div className="flex items-center gap-3 mb-3">
          <div className="relative w-10 h-10 rounded-full overflow-hidden p-[1.5px] bg-gradient-to-tr from-orange-500 via-amber-400 to-emerald-500 shadow-md shrink-0">
            <Image
              src="/logo.png"
              alt="UPSCSphere Official Logo"
              width={40}
              height={40}
              className="w-full h-full object-cover rounded-full bg-white dark:bg-slate-900"
            />
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 dark:bg-orange-500/15 border border-orange-500/30 text-orange-700 dark:text-orange-300 text-xs font-black tracking-wide">
            <Compass className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" />
            <span>COMPLETE PLATFORM FEATURE ENCYCLOPEDIA</span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight font-display">
          How to Use <span className="tricolor-gradient-text">UPSCSphere</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 max-w-3xl leading-relaxed">
          Master all 14 state-of-the-art UPSC Prelims features — from custom timed speed drills and verified textbook page citations to 1v1 live duels, shareable score cards, and the aspirant rewards vault.
        </p>
      </div>

      {/* 2. Recommended Daily 30-Minute Routine Banner */}
      <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 border-2 border-orange-500/30 bg-gradient-to-r from-orange-500/10 via-amber-500/5 to-emerald-500/10 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
        <div className="h-[2px] w-full running-tricolor-line absolute top-0 left-0 right-0" />
        
        <div className="space-y-2 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-2 text-orange-700 dark:text-orange-400 font-black text-sm uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Recommended Daily 30-Minute Prelims Master Routine</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl">
            <strong>7:00 AM:</strong> Solve 10 Daily Editorial Current Affairs MCQs (+30 XP) • <strong>2:00 PM:</strong> Take one 10-Q subject speed drill and eliminate distractors with the 50:50 tool • <strong>9:00 PM:</strong> Review textbook page citations and challenge a friend in a 1v1 speed duel.
          </p>
        </div>

        <Link
          href="/quiz/create"
          className="liquid-glass-btn shrink-0 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 to-emerald-600 text-white font-black text-xs shadow-xl shadow-orange-500/25 hover:scale-105 transition-all flex items-center gap-2"
        >
          <span>Start Daily Mock Drill →</span>
        </Link>
      </div>

      {/* 3. Category Filter Navigation Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200 dark:border-white/10">
        {[
          { id: 'all', label: `All Features (${features.length})`, icon: Sparkles },
          { id: 'core', label: 'Core Mock Engine (3)', icon: Zap },
          { id: 'study', label: 'Study & Syllabus Tools (5)', icon: BookOpen },
          { id: 'duel', label: '1v1 Duels & Social (3)', icon: Swords },
          { id: 'rewards', label: 'Rewards & Rankings (3)', icon: Trophy },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeCategory === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                isActive
                  ? 'bg-orange-500 text-white shadow-md shadow-orange-500/25 font-black'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* 4. Elaborated Feature Cards Grid */}
      <div className="space-y-8">
        {filteredFeatures.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              id={item.id}
              className="liquid-glass-card rounded-3xl p-6 sm:p-8 space-y-5 shadow-lg border border-slate-200/80 dark:border-white/10 hover:border-orange-500/40 transition-all relative overflow-hidden"
            >
              {/* Header Strip */}
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-orange-500/20 via-amber-500/20 to-emerald-500/20 text-orange-600 dark:text-orange-400 flex items-center justify-center font-black text-base font-display border border-orange-500/30 shadow-sm shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                      Feature #{item.step}
                    </span>
                    <h2 className="font-black text-lg sm:text-xl text-slate-900 dark:text-white font-display">
                      {item.title}
                    </h2>
                  </div>
                </div>

                <span className={`text-[11px] font-black px-3 py-1 rounded-full border ${item.badgeBg}`}>
                  {item.tagline}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                {item.description}
              </p>

              {/* How to use checklist */}
              <div className="p-5 rounded-2xl bg-slate-50/90 dark:bg-slate-950/70 border border-slate-200 dark:border-white/5 space-y-2.5">
                <span className="text-[11px] font-black uppercase tracking-wider text-slate-500 block">
                  Step-by-Step Instructions:
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {item.howToUse.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pro-Tip Box */}
              {item.proTip && (
                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center gap-2.5 text-xs text-amber-800 dark:text-amber-300 font-semibold">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500 shrink-0" />
                  <span><strong>Topper Pro-Tip:</strong> {item.proTip}</span>
                </div>
              )}

              {/* Action Link Button */}
              <div className="pt-2 flex items-center justify-end">
                <Link
                  href={item.linkHref}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black text-xs hover:bg-orange-500 dark:hover:bg-orange-400 dark:hover:text-white transition-all flex items-center gap-1.5 shadow-sm"
                >
                  <span>{item.linkText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* 5. Frequently Asked Questions (FAQ) Accordion */}
      <section className="space-y-5 pt-6 border-t border-slate-200 dark:border-white/10">
        <div className="text-center space-y-1">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Clear Answers</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Everything you need to know about preparing for UPSC Prelims with UPSCSphere.
          </p>
        </div>

        <div className="space-y-3 max-w-4xl mx-auto">
          {faqs.map((faq, idx) => {
            const isOpen = expandedFaq === idx;
            return (
              <div
                key={idx}
                className="liquid-glass-card rounded-2xl border border-slate-200 dark:border-white/10 overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => setExpandedFaq(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-slate-900 dark:text-white hover:text-orange-600 dark:hover:text-orange-400 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-orange-500' : 'text-slate-400'}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-white/5 animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. Final Call to Action Strip */}
      <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-600 text-white text-center space-y-4 shadow-2xl shadow-orange-500/25">
        <h3 className="text-2xl sm:text-3xl font-black">Ready to Begin Your UPSC Prelims Journey?</h3>
        <p className="text-xs sm:text-sm text-white/90 max-w-xl mx-auto">
          Join thousands of aspirants preparing smarter with standard book citations, 50:50 elimination drills, and 1v1 speed duels.
        </p>
        <div className="flex items-center justify-center gap-3.5 flex-wrap pt-2">
          <Link
            href="/quiz/create"
            className="px-6 py-3.5 rounded-2xl bg-white text-slate-950 font-black text-xs hover:scale-105 transition-all shadow-lg"
          >
            Launch Custom Quiz Builder
          </Link>
          <Link
            href="/duel"
            className="px-6 py-3.5 rounded-2xl bg-slate-950 text-white font-black text-xs hover:scale-105 transition-all shadow-lg border border-white/20"
          >
            Enter 1v1 Duel Arena ⚔️
          </Link>
          <Link
            href="/rewards"
            className="px-6 py-3.5 rounded-2xl bg-amber-400 text-slate-950 font-black text-xs hover:scale-105 transition-all shadow-lg"
          >
            View Rewards &amp; Badges Vault 🎖️
          </Link>
        </div>
      </div>

    </div>
  );
}
