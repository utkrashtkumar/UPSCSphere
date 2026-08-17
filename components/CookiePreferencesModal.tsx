'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Cookie, 
  ShieldCheck, 
  Sliders, 
  Check, 
  X, 
  Lock, 
  SlidersHorizontal, 
  BarChart3, 
  Bell, 
  ExternalLink,
  RotateCcw
} from 'lucide-react';
import { useCookies, CookiePreferences } from '@/lib/cookieContext';

export default function CookiePreferencesModal() {
  const { 
    isModalOpen, 
    closePreferencesModal, 
    preferences, 
    savePreferences, 
    acceptAll, 
    rejectNonEssential 
  } = useCookies();

  const [localPrefs, setLocalPrefs] = useState<CookiePreferences>(preferences);

  useEffect(() => {
    if (isModalOpen) {
      setLocalPrefs(preferences);
    }
  }, [isModalOpen, preferences]);

  if (!isModalOpen) return null;

  const handleToggle = (key: keyof CookiePreferences) => {
    if (key === 'strictlyNecessary') return; // Cannot disable strictly necessary
    setLocalPrefs(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSave = () => {
    savePreferences(localPrefs);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 animate-fade-in overflow-y-auto"
    >
      {/* Backdrop overlay */}
      <div 
        onClick={closePreferencesModal}
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-md transition-opacity" 
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-white dark:bg-[#070f1e] rounded-3xl border border-slate-200 dark:border-white/10 shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] flex flex-col z-10 my-auto">
        
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 border-b border-slate-100 dark:border-white/5 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 text-orange-600 dark:text-orange-400 border border-orange-500/30">
              <Cookie className="w-6 h-6" />
            </div>
            <div>
              <h2 id="cookie-modal-title" className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
                Cookie &amp; Storage Preferences
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Manage how UPSCSphere stores data on your browser.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={closePreferencesModal}
            aria-label="Close modal"
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Category Options */}
        <div className="space-y-4 overflow-y-auto pr-1 flex-1">
          
          {/* Category 1: Strictly Necessary (Locked) */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 space-y-2">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    Strictly Necessary Cookies &amp; Auth Tokens
                  </h4>
                  <span className="text-[10px] uppercase font-extrabold text-emerald-600 dark:text-emerald-400">
                    Always Active (Required)
                  </span>
                </div>
              </div>

              {/* Locked Active Pill */}
              <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold shrink-0">
                Required
              </div>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pl-8">
              Essential for logging in via Supabase/Google OAuth, session security, CSRF protection, and preserving active mock quiz answers during unexpected network drops.
            </p>
          </div>

          {/* Category 2: Functional & Customization */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 space-y-2">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  <SlidersHorizontal className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    Functional &amp; Study Customization
                  </h4>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400">
                    Theme, typography, sound &amp; offline queue
                  </span>
                </div>
              </div>

              {/* Toggle Switch */}
              <button
                type="button"
                role="switch"
                aria-checked={localPrefs.functional}
                onClick={() => handleToggle('functional')}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                  localPrefs.functional ? 'bg-orange-500' : 'bg-slate-300 dark:bg-slate-700'
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                    localPrefs.functional ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pl-8">
              Remembers your dark/light theme, custom reading fonts (JetBrains Mono, Lora, Inter), font sizing, and offline question bookmarks.
            </p>
          </div>

          {/* Category 3: Analytics & Performance */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 space-y-2">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    Performance &amp; Speed Diagnostics
                  </h4>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400">
                    Anonymous latency &amp; mock performance metrics
                  </span>
                </div>
              </div>

              {/* Toggle Switch */}
              <button
                type="button"
                role="switch"
                aria-checked={localPrefs.analytics}
                onClick={() => handleToggle('analytics')}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                  localPrefs.analytics ? 'bg-orange-500' : 'bg-slate-300 dark:bg-slate-700'
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                    localPrefs.analytics ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pl-8">
              Aggregates anonymous test completion latency and page load speeds to optimize server response times and All-India Rank calculations.
            </p>
          </div>

          {/* Category 4: Daily CA Notifications */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 space-y-2">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400">
                  <Bell className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    07:30 AM Daily Current Affairs Alerts
                  </h4>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400">
                    Push notifications &amp; morning test reminders
                  </span>
                </div>
              </div>

              {/* Toggle Switch */}
              <button
                type="button"
                role="switch"
                aria-checked={localPrefs.notifications}
                onClick={() => handleToggle('notifications')}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                  localPrefs.notifications ? 'bg-orange-500' : 'bg-slate-300 dark:bg-slate-700'
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                    localPrefs.notifications ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pl-8">
              Stores your notification preference and browser push subscription token to send you daily notifications when 20 fresh MCQs are published.
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="border-t border-slate-100 dark:border-white/5 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <Link
            href="/cookies"
            onClick={closePreferencesModal}
            className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 font-semibold"
          >
            <span>Full Cookie Policy</span>
            <ExternalLink className="w-3 h-3" />
          </Link>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              type="button"
              onClick={rejectNonEssential}
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs border border-slate-200 dark:border-white/10 transition-colors cursor-pointer"
            >
              Reject Optional
            </button>

            <button
              type="button"
              onClick={acceptAll}
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold text-xs border border-slate-300 dark:border-white/15 transition-colors cursor-pointer"
            >
              Accept All
            </button>

            <button
              type="button"
              onClick={handleSave}
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-black text-xs shadow-md shadow-orange-500/20 transition-all hover:scale-[1.02] cursor-pointer"
            >
              Save Preferences
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
