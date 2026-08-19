'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Trophy, 
  Flame, 
  Target, 
  Clock, 
  Award, 
  Share2, 
  Copy, 
  Check, 
  Swords, 
  Sparkles, 
  BookOpen, 
  CheckCircle2, 
  TrendingUp, 
  Linkedin, 
  ChevronRight,
  ExternalLink,
  ShieldCheck,
  Calendar
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { getStoredProfile, getQuizHistory } from '@/lib/localDB';
import { UserProfile, isImageUrl } from '@/lib/types';

interface Props {
  aspirantId: string;
}

export default function PublicProfileClient({ aspirantId }: Props) {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState<any[]>([]);

  useEffect(() => {
    // If viewing own profile ('me' or matching email/id)
    if (aspirantId === 'me' || aspirantId === 'current') {
      const p = getStoredProfile();
      setProfile(p);
      setHistory(getQuizHistory());
    } else {
      // Mock / Public Aspirant topper profile data
      const topperProfiles: Record<string, UserProfile> = {
        'topper-1': {
          name: 'Priya Nambiar',
          email: 'priya.upsc@upscsphere.in',
          targetYear: 2027,
          optionalSubject: 'Political Science & IR (PSIR)',
          category: 'General',
          streakCount: 14,
          lastActiveDate: new Date().toISOString(),
          totalQuizzesTaken: 42,
          averageScore: 138.5,
          highestScore: 164.0,
          avatarUrl: '👩‍🎓',
        },
        'topper-2': {
          name: 'Aditya Sharma',
          email: 'aditya.upsc@upscsphere.in',
          targetYear: 2026,
          optionalSubject: 'Geography',
          category: 'General',
          streakCount: 10,
          lastActiveDate: new Date().toISOString(),
          totalQuizzesTaken: 38,
          averageScore: 134.0,
          highestScore: 158.0,
          avatarUrl: '👨‍🎓',
        },
        'topper-3': {
          name: 'Ananya Deshmukh',
          email: 'ananya.upsc@upscsphere.in',
          targetYear: 2027,
          optionalSubject: 'Sociology',
          category: 'General',
          streakCount: 9,
          lastActiveDate: new Date().toISOString(),
          totalQuizzesTaken: 31,
          averageScore: 129.5,
          highestScore: 152.0,
          avatarUrl: '👩‍🎓',
        },
      };

      const matched = topperProfiles[aspirantId] || {
        name: aspirantId.replace('-', ' ').replace(/\b\w/g, (l) => l.toUpperCase()),
        email: `${aspirantId}@upscsphere.in`,
        targetYear: 2027,
        optionalSubject: 'General Studies',
        category: 'General',
        streakCount: 7,
        lastActiveDate: new Date().toISOString(),
        totalQuizzesTaken: 25,
        averageScore: 124.0,
        highestScore: 146.0,
        avatarUrl: '👨‍🎓',
      };

      setProfile(matched);
    }
  }, [aspirantId]);

  if (!profile) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center space-y-4">
        <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="text-xs font-bold text-slate-600 dark:text-slate-400">Loading Aspirant Profile...</p>
      </div>
    );
  }

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleShareLinkedIn = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(
      `Check out my UPSC Prelims preparation performance and mock test scores on UPSCSphere! 🎯`
    );
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      `Check out ${profile.name}'s UPSC Prelims profile & test record on UPSCSphere:\n\n${window.location.href}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const achievements = [
    {
      title: 'Aspirant of the Week',
      desc: 'Ranked #1 on the live All-India leaderboard',
      icon: '👑',
      badgeClass: 'bg-amber-500/10 border-amber-500/30 text-amber-600 dark:text-amber-400',
    },
    {
      title: 'Polity & Governance Scholar',
      desc: 'Maintained 85%+ accuracy in Indian Polity & Constitution',
      icon: '🏛️',
      badgeClass: 'bg-blue-500/10 border-blue-500/30 text-blue-600 dark:text-blue-400',
    },
    {
      title: 'Study Streak Champion',
      desc: `${profile.streakCount} Consecutive days of active mock revision`,
      icon: '🔥',
      badgeClass: 'bg-orange-500/10 border-orange-500/30 text-orange-600 dark:text-orange-400',
    },
    {
      title: '12-Yr PYQ Vault Veteran',
      desc: 'Completed 50+ official UPSC previous year questions',
      icon: '📜',
      badgeClass: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400',
    },
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-16 py-8 sm:py-12 space-y-10 max-w-5xl mx-auto">
      
      {/* 1. Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 flex-wrap text-xs font-semibold text-slate-500 dark:text-slate-400">
        <Link href="/" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <Link href="/leaderboard" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
          Leaderboard
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-900 dark:text-white font-bold truncate">
          {profile.name}
        </span>
      </nav>

      {/* 2. Hero Profile Card */}
      <div className="liquid-glass-card rounded-3xl p-6 sm:p-10 border border-orange-500/30 shadow-2xl space-y-6 relative overflow-hidden">
        <div className="h-[2px] w-full running-tricolor-line absolute top-0 left-0 right-0" />

        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
          
          {/* Avatar & User Info */}
          <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-3xl overflow-hidden p-1 bg-gradient-to-tr from-orange-500 via-amber-400 to-emerald-500 shadow-xl shadow-orange-500/20 shrink-0">
              {profile.avatarUrl && isImageUrl(profile.avatarUrl) ? (
                <Image
                  src={profile.avatarUrl}
                  alt={profile.name}
                  width={112}
                  height={112}
                  className="w-full h-full object-cover rounded-2xl bg-white dark:bg-slate-900"
                />
              ) : (
                <div className="w-full h-full rounded-2xl bg-white dark:bg-slate-900 flex items-center justify-center text-4xl sm:text-5xl">
                  {profile.avatarUrl || '👨‍🎓'}
                </div>
              )}
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap">
                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                  {profile.name}
                </h1>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-[11px] font-black border border-emerald-500/20">
                  Verified Aspirant
                </span>
              </div>

              <p className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400">
                Target UPSC CSE {profile.targetYear} • Optional: <strong>{profile.optionalSubject}</strong>
              </p>

              <div className="flex items-center justify-center sm:justify-start gap-3 text-xs pt-1">
                <span className="inline-flex items-center gap-1 font-bold text-orange-600 dark:text-orange-400">
                  <Flame className="w-4 h-4 fill-orange-500 text-orange-500" />
                  <span>{profile.streakCount} Day Streak</span>
                </span>
                <span className="text-slate-400">•</span>
                <span className="text-slate-600 dark:text-slate-300 font-semibold">
                  {profile.totalQuizzesTaken} Tests Completed
                </span>
              </div>
            </div>
          </div>

          {/* Social Share & Challenge Actions */}
          <div className="flex items-center gap-2.5 flex-wrap justify-center shrink-0">
            <button
              type="button"
              onClick={handleShareLinkedIn}
              title="Share on LinkedIn"
              className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 hover:bg-blue-500 hover:text-white transition-all cursor-pointer shadow-sm"
            >
              <Linkedin className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={handleShareWhatsApp}
              title="Share on WhatsApp"
              className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all cursor-pointer shadow-sm"
            >
              <Share2 className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={handleCopyLink}
              title="Copy Profile Link"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-orange-600 transition-all cursor-pointer shadow-sm"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
            </button>

            <Link
              href={`/duel?room=${profile.name.replace(/\s+/g, '').toUpperCase().slice(0, 8)}`}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-rose-600 text-white font-black text-xs hover:scale-105 transition-all shadow-md shadow-orange-500/20 flex items-center gap-1.5"
            >
              <Swords className="w-3.5 h-3.5" />
              <span>Challenge in 1v1 Duel</span>
            </Link>
          </div>

        </div>

        {/* 3. High-Level Stats Dashboard */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-4 border-t border-slate-200 dark:border-white/10">
          <div className="p-4 rounded-2xl bg-white/60 dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 text-center space-y-1">
            <span className="text-[10px] uppercase font-bold text-slate-500 block">Average Score</span>
            <span className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-mono">
              {profile.averageScore}
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-white/60 dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 text-center space-y-1">
            <span className="text-[10px] uppercase font-bold text-slate-500 block">All-India Percentile</span>
            <span className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400 font-mono">
              98.2%
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-white/60 dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 text-center space-y-1">
            <span className="text-[10px] uppercase font-bold text-slate-500 block">Study Streak</span>
            <span className="text-2xl sm:text-3xl font-black text-orange-600 dark:text-orange-400 font-mono">
              {profile.streakCount}d 🔥
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-white/60 dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 text-center space-y-1">
            <span className="text-[10px] uppercase font-bold text-slate-500 block">Total Mocks</span>
            <span className="text-2xl sm:text-3xl font-black text-blue-600 dark:text-blue-400 font-mono">
              {profile.totalQuizzesTaken}
            </span>
          </div>
        </div>

      </div>

      {/* 4. Achievements & Badges Vault */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-base sm:text-lg font-bold text-slate-900 dark:text-white">
          <Trophy className="w-5 h-5 text-amber-500" />
          <span>Aspirant Badges &amp; Hall of Fame</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {achievements.map((ach, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-2xl border ${ach.badgeClass} flex items-start gap-3.5 shadow-sm`}
            >
              <div className="text-2xl sm:text-3xl shrink-0 p-2 rounded-xl bg-white/80 dark:bg-slate-900/80 shadow-xs">
                {ach.icon}
              </div>
              <div className="space-y-0.5">
                <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                  {ach.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {ach.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Direct 1v1 Battle Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-rose-500/10 border border-orange-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-lg">
        <div className="space-y-1">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
            Think You Can Beat {profile.name}?
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Launch a real-time 1v1 speed duel with synchronized questions and live scoring.
          </p>
        </div>

        <Link
          href={`/duel?room=${profile.name.replace(/\s+/g, '').toUpperCase().slice(0, 8)}`}
          className="px-6 py-3 rounded-2xl bg-gradient-to-r from-orange-500 to-rose-600 text-white font-black text-xs hover:scale-105 transition-all shadow-md shrink-0 flex items-center gap-2"
        >
          <Swords className="w-4 h-4" />
          <span>Launch 1v1 Duel Match ⚔️</span>
        </Link>
      </div>

    </div>
  );
}
