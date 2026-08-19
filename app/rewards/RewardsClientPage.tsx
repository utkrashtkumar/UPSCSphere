'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Trophy, 
  Flame, 
  Sparkles, 
  Zap, 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  Lock, 
  ArrowRight, 
  RotateCcw, 
  Download, 
  Share2, 
  Swords, 
  BookOpen, 
  Check, 
  ChevronRight,
  Clock,
  Crown,
  Star,
  LogIn
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useAuth } from '@/lib/authContext';
import { getStoredProfile } from '@/lib/localDB';
import { UserProfile, AchievementBadge, RankTier } from '@/lib/types';
import { RANK_TIERS, ALL_BADGES, getUserRankTier } from '@/lib/rewardSystem';
import AuthLockModal from '@/components/AuthLockModal';

export default function RewardsClientPage() {
  const { user } = useAuth();
  const [profile, setProfile] = useState<UserProfile>(getStoredProfile());
  const [activeBadgeTab, setActiveBadgeTab] = useState<'all' | 'unlocked' | 'locked'>('all');
  const [showAuthModal, setShowAuthModal] = useState<boolean>(false);
  const [isGeneratingCert, setIsGeneratingCert] = useState<boolean>(false);
  const certCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setProfile(getStoredProfile());
  }, [user]);

  const userXP = user ? (profile.xp || 0) : 0;
  const { currentTier, nextTier, progressPercent, xpToNext } = getUserRankTier(userXP);
  const unlockedSet = new Set(user ? (profile.unlockedBadgeIds || []) : []);

  const filteredBadges = ALL_BADGES.filter((b) => {
    const isUnlocked = unlockedSet.has(b.id);
    if (activeBadgeTab === 'unlocked') return isUnlocked;
    if (activeBadgeTab === 'locked') return !isUnlocked;
    return true;
  });

  // Certificate Generator (Canvas PNG)
  const handleDownloadCertificate = () => {
    if (!user) {
      setShowAuthModal(true);
      return;
    }

    setIsGeneratingCert(true);
    const canvas = certCanvasRef.current;
    if (!canvas) {
      setIsGeneratingCert(false);
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      setIsGeneratingCert(false);
      return;
    }

    const width = 1600;
    const height = 1100;
    canvas.width = width;
    canvas.height = height;

    // 1. Background
    const bgGrad = ctx.createLinearGradient(0, 0, width, height);
    bgGrad.addColorStop(0, '#040d1a');
    bgGrad.addColorStop(0.5, '#0b192e');
    bgGrad.addColorStop(1, '#040d1a');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, width, height);

    // 2. Gold/Tricolour Border
    ctx.lineWidth = 14;
    const borderGrad = ctx.createLinearGradient(0, 0, width, 0);
    borderGrad.addColorStop(0, '#f97316');
    borderGrad.addColorStop(0.5, '#f59e0b');
    borderGrad.addColorStop(1, '#10b981');
    ctx.strokeStyle = borderGrad;
    ctx.strokeRect(30, 30, width - 60, height - 60);

    // Inner subtle border
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'rgba(249, 115, 22, 0.4)';
    ctx.strokeRect(50, 50, width - 100, height - 100);

    // 3. Header Branding
    ctx.textAlign = 'center';
    ctx.font = 'bold 36px "Inter", "Segoe UI", sans-serif';
    ctx.fillStyle = '#f97316';
    ctx.fillText('UPSCSphere • National Civil Services Benchmark', width / 2, 140);

    ctx.font = '900 64px "Inter", "Segoe UI", sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText('CERTIFICATE OF ASPIRANT EXCELLENCE', width / 2, 230);

    ctx.font = '24px "Inter", "Segoe UI", sans-serif';
    ctx.fillStyle = '#94a3b8';
    ctx.fillText('This official credential recognizes outstanding dedication in UPSC CSE Prelims preparation', width / 2, 290);

    // 4. Aspirant Name
    ctx.font = 'bold 30px "Inter", "Segoe UI", sans-serif';
    ctx.fillStyle = '#f59e0b';
    ctx.fillText('PROUDLY PRESENTED TO', width / 2, 400);

    ctx.font = '900 70px "Inter", "Segoe UI", sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(profile.name || user?.name || 'Dedicated Aspirant', width / 2, 490);

    // 5. Rank Tier & XP Box
    ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.strokeStyle = 'rgba(249, 115, 22, 0.4)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(width / 2 - 350, 540, 700, 180, [24]);
    ctx.fill();
    ctx.stroke();

    ctx.font = 'bold 28px "Inter", "Segoe UI", sans-serif';
    ctx.fillStyle = '#10b981';
    ctx.fillText(`RANK TIER: ${currentTier.title.toUpperCase()}`, width / 2, 600);

    ctx.font = 'bold 42px "Inter", "Segoe UI", sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(`${userXP} Cumulative XP Points`, width / 2, 660);

    ctx.font = '22px "Inter", "Segoe UI", sans-serif';
    ctx.fillStyle = '#64748b';
    ctx.fillText(`Target UPSC: ${profile.targetYear || 2027} • Streak: ${profile.streakCount || 0} Days • Verified Mock Records`, width / 2, 780);

    // 6. Verification stamp & signatures
    ctx.textAlign = 'left';
    ctx.font = 'bold 22px "Inter", "Segoe UI", sans-serif';
    ctx.fillStyle = '#94a3b8';
    ctx.fillText('Verified by UPSCSphere Evaluation Engine', 120, 960);
    ctx.font = '18px "Inter", "Segoe UI", sans-serif';
    ctx.fillStyle = '#64748b';
    ctx.fillText(`Issued: ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}`, 120, 995);

    ctx.textAlign = 'right';
    ctx.font = 'bold 24px "Inter", "Segoe UI", sans-serif';
    ctx.fillStyle = '#f97316';
    ctx.fillText('www.upscsphere.in', width - 120, 960);
    ctx.font = '18px "Inter", "Segoe UI", sans-serif';
    ctx.fillStyle = '#94a3b8';
    ctx.fillText('Official Aspirant Milestone Verification', width - 120, 995);

    // Download
    const dataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = `UPSCSphere-Milestone-Certificate-${profile.name || 'Aspirant'}.png`;
    link.href = dataUrl;
    link.click();
    setIsGeneratingCert(false);

    try {
      confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
    } catch {
      // silent
    }
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-16 py-8 sm:py-12 space-y-10 max-w-6xl mx-auto">
      
      {/* Hidden Canvas for Certificate Generation */}
      <canvas ref={certCanvasRef} style={{ display: 'none' }} />

      {/* 1. Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 flex-wrap text-xs font-semibold text-slate-500 dark:text-slate-400">
        <Link href="/" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-900 dark:text-white font-bold">
          Aspirant Rewards &amp; Badges Vault
        </span>
      </nav>

      {/* 2. Page Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 dark:bg-orange-500/15 border border-orange-500/30 text-orange-700 dark:text-orange-300 text-xs font-black tracking-wide">
          <Sparkles className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" />
          <span>GAMIFIED ASPIRANT PROGRESSION</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-slate-900 dark:text-white">
          Aspirant <span className="tricolor-gradient-text">Rewards &amp; Rank Tiers</span>
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Earn XP points for mock test completions, study streaks, high accuracy, and 1v1 duels. Level up through 6 prestigious UPSC rank tiers.
        </p>
      </div>

      {/* 3. Authentication Banner / Guest Lock Card */}
      {!user && (
        <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 border-2 border-orange-500/40 bg-gradient-to-r from-orange-500/15 via-amber-500/10 to-emerald-500/15 shadow-2xl space-y-4 animate-scale-up">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-14 h-14 rounded-2xl bg-orange-500 text-white flex items-center justify-center font-black text-2xl shadow-lg shrink-0">
                🔒
              </div>
              <div>
                <span className="text-[11px] font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wider block">
                  Logged-In Aspirants Only
                </span>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
                  Sign In to Unlock XP Points &amp; Achievement Badges
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                  XP points, level milestones, and badge unlocks are permanently saved to your authenticated profile.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowAuthModal(true)}
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-600 text-white font-black text-xs hover:scale-105 transition-all shadow-xl shadow-orange-500/25 flex items-center gap-2 shrink-0 cursor-pointer"
            >
              <LogIn className="w-4 h-4" />
              <span>Sign In / Create Free Account</span>
            </button>
          </div>
        </div>
      )}

      {/* 4. Hero Rank Tier Progress Dashboard */}
      <div className="liquid-glass-card rounded-3xl p-6 sm:p-10 border border-orange-500/30 shadow-2xl space-y-8 relative overflow-hidden">
        <div className="h-[2px] w-full running-tricolor-line absolute top-0 left-0 right-0" />

        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          {/* Current Level Pill & Icon */}
          <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-tr from-orange-500 via-amber-400 to-emerald-500 text-slate-950 flex items-center justify-center font-black text-4xl sm:text-5xl shadow-xl shadow-orange-500/20 shrink-0">
              {currentTier.badgeIcon}
            </div>
            <div className="space-y-1.5">
              <span className="text-[11px] font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wider block">
                Current Aspirant Standing (Level {currentTier.level})
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                {currentTier.title}
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-400 font-semibold">
                Perk Unlocked: <strong className="text-emerald-600 dark:text-emerald-400">{currentTier.perk}</strong>
              </p>
            </div>
          </div>

          {/* XP Counter Box */}
          <div className="p-5 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-white/10 text-center min-w-[200px] shadow-sm">
            <span className="text-[10px] font-bold text-slate-500 uppercase block">Total Aspirant XP</span>
            <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight font-mono">
              {userXP} <span className="text-sm font-bold text-orange-500">XP</span>
            </div>
            <span className="text-[11px] text-slate-500 font-semibold mt-1 block">
              {unlockedSet.size} of {ALL_BADGES.length} Badges Unlocked
            </span>
          </div>
        </div>

        {/* Level Progression Progress Bar */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300">
            <span>Progress to Next Tier: {nextTier ? nextTier.title : 'Max Tier Reached 🏆'}</span>
            <span className="text-orange-600 dark:text-orange-400 font-mono font-black">{progressPercent}%</span>
          </div>

          <div className="w-full h-4 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 overflow-hidden relative">
            <div
              className="h-full bg-gradient-to-r from-orange-500 via-amber-400 to-emerald-500 rounded-full transition-all duration-700 relative shadow-sm"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-500">
            <span>{currentTier.minXP} XP (Lvl {currentTier.level})</span>
            <span>{nextTier ? `${xpToNext} XP needed for ${nextTier.title}` : 'AIR Champion'}</span>
            <span>{nextTier ? `${nextTier.minXP} XP (Lvl ${nextTier.level})` : `${currentTier.maxXP} XP`}</span>
          </div>
        </div>

        {/* Certificate Button */}
        <div className="pt-2 flex items-center justify-end">
          <button
            type="button"
            onClick={handleDownloadCertificate}
            disabled={isGeneratingCert}
            className="px-5 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 hover:border-orange-500 text-slate-800 dark:text-slate-200 font-bold text-xs hover:text-orange-600 transition-all flex items-center gap-2 shadow-sm cursor-pointer disabled:opacity-50"
          >
            <Download className="w-4 h-4 text-orange-500" />
            <span>{isGeneratingCert ? 'Generating...' : 'Download Milestone Certificate (PNG)'}</span>
          </button>
        </div>

      </div>

      {/* 5. Rank Tiers Pathway (6 Levels) */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
          <Trophy className="w-5 h-5 text-amber-500" />
          <span>Official UPSC Rank Tier Progression</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {RANK_TIERS.map((tier) => {
            const isCurrent = currentTier.level === tier.level;
            const isUnlocked = userXP >= tier.minXP;

            return (
              <div
                key={tier.level}
                className={`p-5 rounded-2xl border transition-all relative flex flex-col justify-between ${
                  isCurrent
                    ? 'border-2 border-orange-500 bg-orange-500/10 shadow-lg shadow-orange-500/10'
                    : isUnlocked
                    ? 'border-emerald-500/30 bg-emerald-500/5'
                    : 'border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-slate-900/40 opacity-75'
                }`}
              >
                {isCurrent && (
                  <span className="absolute -top-2.5 right-4 px-2.5 py-0.5 rounded-full bg-orange-500 text-white font-black text-[10px] uppercase shadow-sm">
                    Current Standing
                  </span>
                )}

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">{tier.badgeIcon}</span>
                    <span className="font-mono text-xs font-bold text-slate-500">
                      {tier.minXP}+ XP
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-500 block">Level {tier.level}</span>
                    <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
                      {tier.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    {tier.perk}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-white/5 flex items-center justify-between text-xs font-bold">
                  <span className={isUnlocked ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400'}>
                    {isUnlocked ? '✓ Unlocked' : '🔒 Locked'}
                  </span>
                  <span className="text-[11px] text-slate-500 font-normal">
                    {tier.maxXP >= 99999 ? '6,000+ XP' : `${tier.minXP} - ${tier.maxXP} XP`}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. Achievement Badges Vault (10 Core Badges) */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
            <Award className="w-5 h-5 text-orange-500" />
            <span>Achievement Badges Vault ({unlockedSet.size}/{ALL_BADGES.length} Unlocked)</span>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-xs font-semibold">
            <button
              onClick={() => setActiveBadgeTab('all')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeBadgeTab === 'all' ? 'bg-orange-500 text-white shadow-sm font-bold' : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              All ({ALL_BADGES.length})
            </button>
            <button
              onClick={() => setActiveBadgeTab('unlocked')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeBadgeTab === 'unlocked' ? 'bg-emerald-500 text-white shadow-sm font-bold' : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              Unlocked ({unlockedSet.size})
            </button>
            <button
              onClick={() => setActiveBadgeTab('locked')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeBadgeTab === 'locked' ? 'bg-slate-800 text-white shadow-sm font-bold' : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              Locked ({ALL_BADGES.length - unlockedSet.size})
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredBadges.map((badge) => {
            const isUnlocked = unlockedSet.has(badge.id);

            return (
              <div
                key={badge.id}
                className={`p-5 rounded-2xl border transition-all flex items-start gap-4 ${
                  isUnlocked
                    ? 'border-emerald-500/40 bg-gradient-to-br from-emerald-500/10 via-white to-amber-500/5 dark:from-emerald-500/15 dark:via-slate-900/80 dark:to-amber-500/10 shadow-sm'
                    : 'border-slate-200 dark:border-white/5 bg-slate-50/60 dark:bg-slate-900/30 opacity-70'
                }`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shrink-0 ${
                  isUnlocked ? 'bg-emerald-500/20 border border-emerald-500/30' : 'bg-slate-200 dark:bg-slate-800'
                }`}>
                  {badge.icon}
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-extrabold text-sm text-slate-900 dark:text-white">
                      {badge.title}
                    </h3>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      isUnlocked ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-400' : 'bg-slate-200 dark:bg-slate-800 text-slate-500'
                    }`}>
                      {isUnlocked ? '✓ Active' : '🔒 Locked'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {badge.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. How to Earn XP Points Guide Box */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
          <Zap className="w-4 h-4 text-orange-500" />
          <span>How to Earn XP Points (Logged-In Aspirants)</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/5 space-y-1">
            <strong className="text-orange-600 dark:text-orange-400 font-bold block">+50 XP</strong>
            <span className="text-slate-900 dark:text-white font-semibold block">Complete Mock Test</span>
            <p className="text-[11px] text-slate-500">Any subject or full-length Prelims drill.</p>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/5 space-y-1">
            <strong className="text-emerald-600 dark:text-emerald-400 font-bold block">+25 XP Bonus</strong>
            <span className="text-slate-900 dark:text-white font-semibold block">High Accuracy</span>
            <p className="text-[11px] text-slate-500">Achieve 80%+ accuracy on 5+ questions.</p>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/5 space-y-1">
            <strong className="text-rose-600 dark:text-rose-400 font-bold block">+75 XP</strong>
            <span className="text-slate-900 dark:text-white font-semibold block">Win a 1v1 Duel</span>
            <p className="text-[11px] text-slate-500">Victory in synchronized live battle.</p>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/5 space-y-1">
            <strong className="text-amber-600 dark:text-amber-400 font-bold block">+30 XP</strong>
            <span className="text-slate-900 dark:text-white font-semibold block">Daily Current Affairs</span>
            <p className="text-[11px] text-slate-500">Solve daily 10-MCQ editorial quiz.</p>
          </div>
        </div>
      </div>

      {/* Auth Lock Modal Popup */}
      <AuthLockModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        title="Sign In to Unlock Rewards & XP"
        description="Sign in to save your XP progression, rank up through official UPSC tiers, and showcase unlocked badges on your public profile."
        redirectPath="/rewards"
      />

    </div>
  );
}
