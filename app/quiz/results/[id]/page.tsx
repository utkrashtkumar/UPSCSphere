'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { 
  Trophy, 
  Target, 
  Award, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  MinusCircle, 
  BookOpen, 
  Lightbulb, 
  TrendingUp, 
  Download,
  Share2,
  Check,
  X,
  Swords,
  Camera,
  Copy,
  Sparkles,
  Zap,
  Lock
} from 'lucide-react';
import { getQuizResultById, getStoredProfile } from '@/lib/localDB';
import { QuizResult } from '@/lib/types';
import { useAuth } from '@/lib/authContext';
import { awardXP, AwardXPResult } from '@/lib/rewardSystem';
import ScoreShareCardModal from '@/components/ScoreShareCardModal';
import AuthLockModal from '@/components/AuthLockModal';

export default function QuizResultPage() {
  const params = useParams();
  const resultId = params?.id as string;
  const { user } = useAuth();
  const [result, setResult] = useState<QuizResult | null>(null);
  const [filterTab, setFilterTab] = useState<'all' | 'correct' | 'incorrect' | 'unattempted'>('all');
  const [showShareModal, setShowShareModal] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [challengeCopied, setChallengeCopied] = useState(false);
  const [userProfile, setUserProfile] = useState(getStoredProfile());
  const [xpAwardResult, setXpAwardResult] = useState<AwardXPResult | null>(null);
  const [hasAwardedXP, setHasAwardedXP] = useState(false);

  useEffect(() => {
    setUserProfile(getStoredProfile());
  }, []);

  useEffect(() => {
    if (result && user && !hasAwardedXP) {
      setHasAwardedXP(true);
      const res = awardXP({
        userId: user.id,
        action: result.isDuel ? 'duel_win' : 'complete_quiz',
        accuracy: result.accuracy,
        score: result.score,
        totalQuestions: result.totalQuestions,
        streakDays: userProfile.streakCount,
      });
      setXpAwardResult(res);
    }
  }, [result, user, hasAwardedXP, userProfile.streakCount]);

  // Challenge a friend via WhatsApp
  const handleChallengeFriend = () => {
    if (!result || typeof window === 'undefined') return;
    const hostName = encodeURIComponent(userProfile.name || 'Aspirant');
    const qIds = encodeURIComponent(result.questions.map(q => q.id).join(','));
    const url = `${window.location.origin}/quiz/create?challenge=true&host=${hostName}&targetScore=${result.score}&qIds=${qIds}&count=${result.totalQuestions}&paper=${result.paperType}`;

    const text = encodeURIComponent(
      `⚔️ I challenge you to beat my UPSC Prelims score of *${result.score} / ${result.maxScore}* on UPSCSphere!\n\n` +
      `📝 Test: ${result.title}\n` +
      `🎯 Accuracy: ${result.accuracy}% | Time: ${Math.floor(result.timeSpentSeconds / 60)}m ${result.timeSpentSeconds % 60}s\n\n` +
      `Click link to accept the challenge and attempt the exact same test:\n${url}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  // Copy challenge link
  const handleCopyChallengeLink = () => {
    if (!result || typeof window === 'undefined') return;
    const hostName = encodeURIComponent(userProfile.name || 'Aspirant');
    const qIds = encodeURIComponent(result.questions.map(q => q.id).join(','));
    const url = `${window.location.origin}/quiz/create?challenge=true&host=${hostName}&targetScore=${result.score}&qIds=${qIds}&count=${result.totalQuestions}&paper=${result.paperType}`;

    navigator.clipboard.writeText(url);
    setChallengeCopied(true);
    setTimeout(() => setChallengeCopied(false), 2500);
  };

  useEffect(() => {
    if (!resultId) return;
    const stored = getQuizResultById(resultId);
    if (stored) {
      setResult(stored);
    } else {
      const sess = sessionStorage.getItem(`quiz_result_${resultId}`);
      if (sess) {
        setResult(JSON.parse(sess));
      }
    }
  }, [resultId]);

  if (!result) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Loading Test Results...</h2>
        <p className="text-xs text-slate-600 dark:text-slate-400">Compiling your All-India percentile and subject-wise accuracy.</p>
      </div>
    );
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  const getSubjectDisplayName = (code: string) => {
    const map: Record<string, string> = {
      polity: 'Indian Polity & Governance',
      history: 'History & Modern India',
      economy: 'Economy & Development',
      geography: 'Physical & Human Geography',
      environment: 'Environment & Ecology',
      csat_quant: 'CSAT Quant & Math',
      csat_reasoning: 'CSAT Reasoning',
    };
    return map[code] || code;
  };

  const letters = ['A', 'B', 'C', 'D'];

  const filteredQuestions = result.questions.filter((q) => {
    const userAns = result.answers.find((a) => a.questionId === q.id);
    if (filterTab === 'correct') return userAns?.isCorrect === true;
    if (filterTab === 'incorrect') return userAns?.isCorrect === false && userAns.selectedOption !== null && userAns.selectedOption !== undefined;
    if (filterTab === 'unattempted') return userAns?.selectedOption === null || userAns?.selectedOption === undefined;
    return true;
  });

  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-16 py-8 space-y-8">
      {/* 1v1 Duel Victory / Defeat Highlight Card */}
      {result.isDuel && (
        <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 border-2 border-rose-500/40 bg-gradient-to-r from-rose-500/10 via-amber-500/10 to-emerald-500/10 shadow-2xl space-y-5 animate-fade-in">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-rose-500 text-white flex items-center justify-center font-black text-xl shadow-md">
                ⚔️
              </div>
              <div>
                <span className="text-[11px] font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider block">
                  1v1 Live Aspirant Battle Outcome
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                  {result.score >= 0.5 * result.maxScore ? 'VICTORY! 🏆 You Won the Duel' : 'BATTLE CONCLUDED ⚔️ Hard-Fought Duel'}
                </h2>
              </div>
            </div>

            {result.roomId && (
              <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300">
                Room ID: {result.roomId}
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Player 1 Card (You) */}
            <div className="p-4 rounded-2xl bg-white/90 dark:bg-slate-900/90 border-2 border-emerald-500/50 shadow-sm space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase">You (Player 1)</span>
                <span className="text-xs font-black text-emerald-600">Accuracy: {result.accuracy}%</span>
              </div>
              <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                {result.score} <span className="text-sm font-normal text-slate-500">/ {result.maxScore} pts</span>
              </div>
              <span className="text-[11px] text-slate-500 block">
                {result.correct} Correct • {result.wrong} Wrong • Time: {formatTime(result.timeSpentSeconds)}
              </span>
            </div>

            {/* Player 2 Card (Opponent) */}
            <div className="p-4 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-white/10 shadow-sm space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 uppercase">{result.duelOpponent?.name || 'Challenger (Player 2)'}</span>
                <span className="text-xs font-semibold text-slate-400">Streak: {result.duelOpponent?.streak || 3}d</span>
              </div>
              <div className="text-2xl sm:text-3xl font-black text-slate-700 dark:text-slate-300">
                {Math.max(0, Math.round(result.maxScore * 0.6))} <span className="text-sm font-normal text-slate-500">/ {result.maxScore} pts</span>
              </div>
              <span className="text-[11px] text-slate-500 block">
                UPSC {result.duelOpponent?.targetYear || 2027} • Rating: {result.duelOpponent?.rating || 1350}
              </span>
            </div>
          </div>

          <div className="pt-2 flex items-center justify-end gap-3 flex-wrap">
            <Link
              href="/duel"
              className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-black hover:opacity-95 transition-all shadow-md flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Rematch / Create New Duel Room</span>
            </Link>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="text-center">
        <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
          Diagnostic Evaluation Report
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2">
          UPSC Mock Test <span className="text-amber-600 dark:text-amber-400">Scorecard</span>
        </h1>
        <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
          Comprehensive marks breakdown, All-India percentile, and question-by-question book citations
        </p>
      </div>

      {/* Hero Score Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Net Marks Card */}
        <div className="liquid-card rounded-2xl p-6 border border-amber-500/30 bg-gradient-to-br from-amber-500/10 via-white to-orange-500/5 dark:from-amber-500/15 dark:via-slate-900/80 dark:to-orange-500/10 shadow-sm">
          <div className="flex items-center justify-between text-xs text-amber-700 dark:text-amber-300 font-semibold mb-2">
            <span>Net Score</span>
            <Award className="w-4 h-4 text-amber-600 dark:text-amber-400" />
          </div>
          <div className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            {result.score} <span className="text-lg text-slate-500 dark:text-slate-400 font-normal">/ {result.maxScore}</span>
          </div>
          <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-2">
            Negative marks lost: <span className="text-rose-600 dark:text-rose-400 font-bold">-{result.negativeMarksLost}</span>
          </p>
        </div>

        {/* Estimated AIR Rank */}
        <div className="liquid-card rounded-2xl p-6 border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 via-white to-teal-500/5 dark:from-emerald-500/15 dark:via-slate-900/80 dark:to-teal-500/10 shadow-sm">
          <div className="flex items-center justify-between text-xs text-emerald-700 dark:text-emerald-300 font-semibold mb-2">
            <span>Estimated AIR</span>
            <Trophy className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          </div>
          <div className="text-4xl font-black text-emerald-700 dark:text-emerald-400 tracking-tight">
            AIR {result.estimatedAIR}
          </div>
          <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-2">
            Among 48,500+ mock test takers
          </p>
        </div>

        {/* Accuracy % */}
        <div className="liquid-card rounded-2xl p-6 border border-blue-500/30 bg-gradient-to-br from-blue-500/10 via-white to-indigo-500/5 dark:from-blue-500/15 dark:via-slate-900/80 dark:to-indigo-500/10 shadow-sm">
          <div className="flex items-center justify-between text-xs text-blue-700 dark:text-blue-300 font-semibold mb-2">
            <span>Accuracy</span>
            <Target className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          </div>
          <div className="text-4xl font-black text-blue-700 dark:text-blue-400 tracking-tight">
            {result.accuracy}%
          </div>
          <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-2">
            {result.correct} Correct • {result.wrong} Wrong
          </p>
        </div>

        {/* Percentile */}
        <div className="liquid-card rounded-2xl p-6 border border-purple-500/30 bg-gradient-to-br from-purple-500/10 via-white to-pink-500/5 dark:from-purple-500/15 dark:via-slate-900/80 dark:to-pink-500/10 shadow-sm">
          <div className="flex items-center justify-between text-xs text-purple-700 dark:text-purple-300 font-semibold mb-2">
            <span>Percentile</span>
            <TrendingUp className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          </div>
          <div className="text-4xl font-black text-purple-700 dark:text-purple-300 tracking-tight">
            {result.percentile}%
          </div>
          <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-2">
            Time Spent: {formatTime(result.timeSpentSeconds)}
          </p>
        </div>
      </div>

      {/* ⚡ XP & Reward Notification Strip */}
      {user && xpAwardResult && xpAwardResult.success ? (
        <div className="p-5 rounded-3xl bg-gradient-to-r from-amber-500/15 via-orange-500/10 to-emerald-500/15 border-2 border-amber-500/40 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg animate-fade-in">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 text-slate-950 flex items-center justify-center font-black text-2xl shadow-md shrink-0">
              ⚡
            </div>
            <div>
              <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider block">
                XP Reward Credited to Profile
              </span>
              <h4 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                +{xpAwardResult.awardedXP} XP Earned! Total: {xpAwardResult.newTotalXP} XP ({xpAwardResult.newTier.title})
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                {xpAwardResult.breakdown.map((b) => `${b.label} (+${b.xp} XP)`).join(' • ')}
              </p>
            </div>
          </div>

          <Link
            href="/rewards"
            className="px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 hover:border-orange-500 text-slate-800 dark:text-slate-200 font-bold text-xs hover:text-orange-600 transition-all flex items-center gap-1.5 shadow-sm shrink-0"
          >
            <Trophy className="w-3.5 h-3.5 text-amber-500" />
            <span>View Badges &amp; Rewards Vault →</span>
          </Link>
        </div>
      ) : !user ? (
        <div className="p-5 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center text-xl shrink-0">
              🔒
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                Sign In to Claim +50 XP &amp; Badges for this Test
              </h4>
              <p className="text-xs text-slate-500">
                Logged-in aspirants earn XP points, level up rank tiers, and collect permanent achievement badges.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setShowAuthModal(true)}
            className="px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs transition-all shrink-0 shadow-sm cursor-pointer"
          >
            Sign In / Sign Up
          </button>
        </div>
      ) : null}

      {/* Viral Share Score Card & Challenge Friend Action Strip */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-emerald-500/10 border border-orange-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
        <div className="space-y-1 text-center sm:text-left">
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <Sparkles className="w-4 h-4 text-orange-500" />
            <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
              Share Your Score &amp; Challenge Friends!
            </h3>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Generate a WhatsApp/Instagram story card or challenge peers to beat your score of <strong>{result.score} pts</strong>.
          </p>
        </div>

        <div className="flex items-center gap-3 flex-wrap justify-center shrink-0">
          <button
            type="button"
            onClick={() => setShowShareModal(true)}
            className="px-5 py-3 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-600 text-white font-black text-xs hover:scale-105 transition-all shadow-md shadow-orange-500/20 flex items-center gap-2 cursor-pointer"
          >
            <Camera className="w-4 h-4" />
            <span>Generate Score Card 📸</span>
          </button>

          <button
            type="button"
            onClick={handleChallengeFriend}
            className="px-5 py-3 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-black text-xs transition-all shadow-md flex items-center gap-2 cursor-pointer"
          >
            <Swords className="w-4 h-4" />
            <span>Challenge a Friend ⚔️</span>
          </button>

          <button
            type="button"
            onClick={handleCopyChallengeLink}
            title="Copy Challenge Link"
            className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-orange-600 transition-all cursor-pointer shadow-sm"
          >
            {challengeCopied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Strengths & Weak Areas AI Diagnostic Panel */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="liquid-card rounded-2xl p-6 border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-slate-950/70 shadow-sm">
          <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-sm mb-4">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Strong Concepts (High Accuracy)</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {result.strongAreas.map((area, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs font-semibold"
              >
                ✓ {getSubjectDisplayName(area)}
              </span>
            ))}
          </div>
        </div>

        <div className="liquid-card rounded-2xl p-6 border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-slate-950/70 shadow-sm">
          <div className="flex items-center gap-2 text-rose-700 dark:text-rose-400 font-bold text-sm mb-4">
            <Lightbulb className="w-4 h-4 text-rose-600 dark:text-rose-400" />
            <span>Priority Revision Areas (Needs Attention)</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {result.weakAreas.map((area, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-700 dark:text-rose-300 text-xs font-semibold"
              >
                ⚠️ {getSubjectDisplayName(area)}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Section: Question-by-Question Detailed Review with Exact Book References */}
      <div className="liquid-card rounded-2xl p-6 border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-slate-950/70 space-y-6 shadow-sm">
        <div className="flex items-center justify-between flex-wrap gap-4 pb-4 border-b border-slate-200 dark:border-white/10">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              <span>Detailed Question Analysis & Book Citations</span>
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
              Review every answer against the official standard book page references
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex-wrap">
            <button
              onClick={() => setFilterTab('all')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                filterTab === 'all' ? 'bg-amber-500 text-slate-950 shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              All ({result.questions.length})
            </button>
            <button
              onClick={() => setFilterTab('correct')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                filterTab === 'correct' ? 'bg-emerald-500 text-white shadow-sm' : 'text-emerald-700 dark:text-emerald-400 hover:text-emerald-900 dark:hover:text-emerald-300'
              }`}
            >
              Correct ({result.correct})
            </button>
            <button
              onClick={() => setFilterTab('incorrect')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                filterTab === 'incorrect' ? 'bg-rose-500 text-white shadow-sm' : 'text-rose-700 dark:text-rose-400 hover:text-rose-900 dark:hover:text-rose-300'
              }`}
            >
              Incorrect ({result.wrong})
            </button>
            <button
              onClick={() => setFilterTab('unattempted')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                filterTab === 'unattempted' ? 'bg-slate-700 text-white shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Skipped ({result.unattempted})
            </button>
          </div>
        </div>

        {/* Questions List */}
        <div className="space-y-6">
          {filteredQuestions.map((q, idx) => {
            const userAns = result.answers.find((a) => a.questionId === q.id);
            const isCorrect = userAns?.isCorrect === true;
            const isSkipped = userAns?.selectedOption === null || userAns?.selectedOption === undefined;

            return (
              <div
                key={q.id}
                className="p-6 rounded-2xl bg-slate-50/90 dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 space-y-4 shadow-sm"
              >
                {/* Header status */}
                <div className="flex items-center justify-between flex-wrap gap-2 pb-3 border-b border-slate-200 dark:border-white/5">
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-xs px-2.5 py-1 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white">
                      Q{idx + 1}
                    </span>
                    <span className="text-xs font-semibold text-amber-700 dark:text-amber-400">{q.topic}</span>
                  </div>

                  <div>
                    {isCorrect ? (
                      <span className="flex items-center gap-1 text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/30">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Correct (+2.0)</span>
                      </span>
                    ) : isSkipped ? (
                      <span className="flex items-center gap-1 text-xs font-bold text-slate-600 dark:text-slate-400 bg-slate-200 dark:bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-300 dark:border-slate-700">
                        <MinusCircle className="w-3.5 h-3.5" />
                        <span>Unattempted (0.0)</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-xs font-bold text-rose-700 dark:text-rose-400 bg-rose-500/10 px-2.5 py-1 rounded-lg border border-rose-500/30">
                        <XCircle className="w-3.5 h-3.5" />
                        <span>Incorrect (-0.66)</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Question Content */}
                <div className="text-sm font-medium text-slate-900 dark:text-slate-100 whitespace-pre-line leading-relaxed">
                  {q.question}
                </div>

                {/* Options Review */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {q.options.map((opt, optIdx) => {
                    const isUserChoice = userAns?.selectedOption === optIdx;
                    const isRealCorrect = q.correctAnswer === optIdx;

                    let optClass = 'bg-white dark:bg-slate-950/60 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-300';
                    if (isRealCorrect) {
                      optClass = 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-500/60 text-emerald-900 dark:text-emerald-100 font-semibold';
                    } else if (isUserChoice && !isRealCorrect) {
                      optClass = 'bg-rose-50 dark:bg-rose-950/50 border-rose-500/60 text-rose-900 dark:text-rose-100 line-through';
                    }

                    return (
                      <div
                        key={optIdx}
                        className={`p-3 rounded-xl border flex items-start gap-2.5 text-xs shadow-sm ${optClass}`}
                      >
                        <span className="font-bold shrink-0">{letters[optIdx]}.</span>
                        <span className="flex-1">{opt}</span>
                        {isRealCorrect && <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />}
                        {isUserChoice && !isRealCorrect && <X className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0" />}
                      </div>
                    );
                  })}
                </div>

                {/* Book & Page Citation Box */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/10 via-slate-50 to-blue-500/10 dark:from-amber-500/10 dark:via-slate-950 dark:to-blue-500/10 border border-amber-500/30 text-xs shadow-sm">
                  <div className="flex items-center gap-2 text-amber-800 dark:text-amber-400 font-bold mb-2">
                    <BookOpen className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <span>Exact Source Book & Page Citation</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 font-medium">
                    <div className="text-slate-800 dark:text-slate-300">
                      <span className="text-slate-500 block text-[10px]">Book:</span>
                      {q.bookReference.bookName}
                    </div>
                    <div className="text-slate-800 dark:text-slate-300">
                      <span className="text-slate-500 block text-[10px]">Chapter:</span>
                      {q.bookReference.chapter}
                    </div>
                    <div className="text-amber-800 dark:text-amber-300">
                      <span className="text-amber-600 dark:text-amber-500/80 block text-[10px]">Exact Page:</span>
                      <span className="font-bold text-amber-800 dark:text-amber-400">{q.bookReference.pageNumber}</span>
                    </div>
                  </div>
                </div>

                {/* Detailed Explanation */}
                <div className="text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-white/5 whitespace-pre-line leading-relaxed shadow-sm">
                  <strong className="text-slate-900 dark:text-slate-200 block mb-1 font-semibold">Explanation:</strong>
                  {q.explanation}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="flex items-center justify-between flex-wrap gap-4 pt-4">
        <Link
          href="/quiz/create"
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Attempt Another Test</span>
        </Link>

        <Link
          href="/leaderboard"
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-bold text-xs hover:bg-slate-50 dark:hover:bg-slate-700 shadow-sm"
        >
          <Trophy className="w-4 h-4 text-amber-600 dark:text-amber-400" />
          <span>See Live All-India Leaderboard →</span>
        </Link>
      </div>

      {/* Share Score Card Modal */}
      <ScoreShareCardModal
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
        result={result}
        userName={userProfile.name || 'Civil Services Aspirant'}
        userStreak={userProfile.streakCount || 1}
      />

      {/* Auth Lock Modal Popup */}
      <AuthLockModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        title="Sign In to Claim +50 XP & Badges"
        description="Sign in to save your mock score, earn XP points, rank up your aspirant level, and unlock achievement badges."
        redirectPath={`/quiz/results/${result.quizId}`}
      />
    </div>
  );
}
