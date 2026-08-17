'use client';

import React from 'react';
import Link from 'next/link';
import { Cookie, ShieldCheck, Sliders, Check } from 'lucide-react';
import { useCookies } from '@/lib/cookieContext';

export default function CookieBanner() {
  const { showBanner, acceptAll, rejectNonEssential, openPreferencesModal } = useCookies();

  if (!showBanner) return null;

  return (
    <div
      role="region"
      aria-label="Cookie and Privacy Consent Banner"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-xl z-[90] animate-slide-up"
    >
      <div className="liquid-glass-card rounded-3xl p-5 sm:p-6 border-2 border-orange-500/30 dark:border-orange-500/40 shadow-2xl shadow-orange-500/10 backdrop-blur-2xl bg-white/95 dark:bg-[#070e1b]/95 space-y-4">
        {/* Header with Icon */}
        <div className="flex items-start gap-3.5">
          <div className="p-2.5 rounded-2xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 text-orange-600 dark:text-orange-400 border border-orange-500/30 shrink-0">
            <Cookie className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-sm font-black text-slate-900 dark:text-white">
                Cookie & Privacy Preferences
              </h3>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-[10px] font-extrabold border border-emerald-500/20">
                <ShieldCheck className="w-3 h-3" />
                No Ad Trackers
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              We use strictly necessary cookies &amp; secure storage to keep you logged in, preserve test sessions during network drops, and remember your dark mode preference.{' '}
              <Link
                href="/cookies"
                className="text-orange-600 dark:text-orange-400 hover:underline font-bold"
              >
                Learn more in our Cookie Policy
              </Link>.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5 flex-wrap pt-1">
          <button
            type="button"
            onClick={acceptAll}
            className="flex-1 min-w-[120px] py-2.5 px-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-black text-xs shadow-md shadow-orange-500/20 transition-all hover:scale-[1.02] flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Check className="w-3.5 h-3.5" />
            <span>Accept All</span>
          </button>

          <button
            type="button"
            onClick={rejectNonEssential}
            className="flex-1 min-w-[120px] py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs border border-slate-200 dark:border-white/10 transition-all hover:scale-[1.02] flex items-center justify-center cursor-pointer"
          >
            <span>Essential Only</span>
          </button>

          <button
            type="button"
            onClick={openPreferencesModal}
            className="py-2.5 px-3 rounded-xl bg-orange-500/10 hover:bg-orange-500/20 text-orange-600 dark:text-orange-400 font-bold text-xs border border-orange-500/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            title="Configure individual cookie categories"
          >
            <Sliders className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Customize</span>
          </button>
        </div>
      </div>
    </div>
  );
}
