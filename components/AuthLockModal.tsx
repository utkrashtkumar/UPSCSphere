'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Lock, ArrowRight, X, Sparkles, BookOpen, Trophy } from 'lucide-react';

interface AuthLockModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  redirectPath?: string;
  feature?: 'quiz' | 'solution' | 'citation' | 'daily_ca';
}

export default function AuthLockModal({
  isOpen,
  onClose,
  title = 'Sign In to Continue Preparation',
  description = 'Sign in to attempt timed mocks, track your All-India rank, and unlock standard textbook page citations.',
  redirectPath = '/daily-ca',
  feature = 'quiz',
}: AuthLockModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-md liquid-glass-card rounded-3xl p-6 sm:p-8 border-orange-500/40 bg-white/95 dark:bg-slate-950/95 shadow-2xl space-y-6 text-center animate-scale-up">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Icon & Badge */}
        <div className="space-y-3 pt-2">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500/20 via-amber-500/20 to-emerald-500/20 text-orange-600 dark:text-orange-400 flex items-center justify-center mx-auto border-2 border-orange-500/30 shadow-lg shadow-orange-500/20">
            <Lock className="w-8 h-8 text-orange-600 dark:text-orange-400" />
          </div>
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 text-orange-700 dark:text-orange-300 text-xs font-black uppercase tracking-wider border border-orange-500/30">
            <Sparkles className="w-3.5 h-3.5 text-orange-500" />
            <span>100% Free Member Access</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black font-display text-slate-900 dark:text-white">
            {title}
          </h2>
          
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm mx-auto">
            {description}
          </p>
        </div>

        {/* Member Perks Box */}
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 text-left space-y-2 text-xs">
          <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
            <BookOpen className="w-4 h-4 text-blue-500 shrink-0" />
            <span>Exact Laxmikanth, Spectrum & Ramesh Singh citations</span>
          </div>
          <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
            <Trophy className="w-4 h-4 text-amber-500 shrink-0" />
            <span>Live Nationwide AIR Benchmarking & Percentile</span>
          </div>
          <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
            <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>100% Free Forever • Zero Ads • No Paywalls</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pt-2">
          <Link
            href={`/auth?redirect=${encodeURIComponent(redirectPath)}`}
            className="liquid-glass-btn w-full py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-600 text-white font-extrabold text-sm shadow-xl shadow-orange-500/25 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>Sign In / Create Free Account</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <button
            type="button"
            onClick={onClose}
            className="w-full py-2.5 text-xs font-bold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
          >
            Continue Previewing Questions
          </button>
        </div>

      </div>
    </div>
  );
}