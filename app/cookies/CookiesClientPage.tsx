'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Cookie, 
  ShieldCheck, 
  Sliders, 
  Lock, 
  SlidersHorizontal, 
  BarChart3, 
  Bell, 
  ArrowLeft,
  CheckCircle2,
  HelpCircle,
  Mail,
  RotateCcw
} from 'lucide-react';
import { useCookies } from '@/lib/cookieContext';

export default function CookiesClientPage() {
  const { openPreferencesModal, preferences, acceptAll, rejectNonEssential } = useCookies();

  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-16 py-8 sm:py-12 space-y-10 max-w-5xl mx-auto">
      
      {/* Top Breadcrumb */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
          Last Updated: August 2026
        </span>
      </div>

      {/* Hero Banner */}
      <div className="liquid-glass-card rounded-3xl p-6 sm:p-10 border-orange-500/30 shadow-xl space-y-4 relative overflow-hidden">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 text-orange-600 dark:text-orange-400 border border-orange-500/30 shrink-0">
            <Cookie className="w-8 h-8" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-black border border-emerald-500/20 mb-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>100% Student-First Privacy</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Cookie Policy &amp; Storage Options
            </h1>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
          At <strong>UPSCSphere</strong>, we believe in complete transparency. We use strictly essential cookies and browser storage mechanisms to authenticate your account, remember your revision preferences, and preserve mock exam progress during network drops. We <strong>never</strong> use cross-site advertisement trackers or sell student study data.
        </p>

        {/* Live Cookie Preferences Control Box */}
        <div className="mt-6 pt-6 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-orange-500/5 dark:bg-orange-500/10 p-5 rounded-2xl border border-orange-500/20">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Sliders className="w-4 h-4 text-orange-500" />
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                Your Current Cookie Settings
              </h3>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Functional: <span className="font-bold text-slate-900 dark:text-white">{preferences.functional ? 'Enabled' : 'Disabled'}</span> • 
              Analytics: <span className="font-bold text-slate-900 dark:text-white">{preferences.analytics ? 'Enabled' : 'Disabled'}</span> • 
              Daily Alerts: <span className="font-bold text-slate-900 dark:text-white">{preferences.notifications ? 'Enabled' : 'Disabled'}</span>
            </p>
          </div>

          <button
            type="button"
            onClick={openPreferencesModal}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-black text-xs shadow-md shadow-orange-500/20 transition-all hover:scale-105 flex items-center justify-center gap-2 cursor-pointer shrink-0"
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Customize Cookie Options</span>
          </button>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="space-y-8">
        
        {/* Section 1: What Are Cookies? */}
        <section className="liquid-glass-card rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500" />
            <span>1. What Are Cookies and Browser Local Storage?</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Cookies are small text files placed on your computer or mobile device when you visit websites. Along with cookies, UPSCSphere utilizes standard browser <code>localStorage</code> and <code>sessionStorage</code> to store non-sensitive state locally on your device. This allows instant page transitions, offline quiz continuation, and instant dark mode loading without server round-trips.
          </p>
        </section>

        {/* Section 2: Cookie Categories Table */}
        <section className="liquid-glass-card rounded-3xl p-6 sm:p-8 space-y-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <span>2. Breakdown of Cookie Categories Used on UPSCSphere</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Category 1 Card */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                <Lock className="w-4 h-4" />
                <h3>Strictly Necessary (Required)</h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Required for core website security, account authentication via Supabase and Google OAuth, session token validity, and active test question state preservation.
              </p>
            </div>

            {/* Category 2 Card */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-sm">
                <SlidersHorizontal className="w-4 h-4" />
                <h3>Functional &amp; Customization</h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Remembers your theme (light/dark mode), custom reading font (JetBrains Mono, Lora, Roboto), font size scaling, bookmarked questions, and revision queue.
              </p>
            </div>

            {/* Category 3 Card */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold text-sm">
                <BarChart3 className="w-4 h-4" />
                <h3>Performance &amp; Diagnostics</h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Measures anonymous mock test timing, latency benchmarks, and page load speeds to help us maintain 100% uptime and fast AIR leaderboard calculations.
              </p>
            </div>

            {/* Category 4 Card */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-sm">
                <Bell className="w-4 h-4" />
                <h3>07:30 AM Daily Alerts</h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Remembers your push notification permission and morning alert preferences when today&apos;s 20 fresh UPSC Prelims MCQs are published.
              </p>
            </div>

          </div>
        </section>

        {/* Section 3: Exact Storage Key Inventory Table */}
        <section className="liquid-glass-card rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>3. Complete Storage Key &amp; Cookie Inventory</span>
          </h2>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Below is the full list of storage identifiers used on your device:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-bold bg-slate-50/50 dark:bg-slate-900/50">
                  <th className="py-3 px-3">Identifier / Key</th>
                  <th className="py-3 px-3">Type</th>
                  <th className="py-3 px-3">Category</th>
                  <th className="py-3 px-3">Purpose</th>
                  <th className="py-3 px-3">Retention</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-white/5 text-slate-600 dark:text-slate-400">
                <tr>
                  <td className="py-2.5 px-3 font-mono font-bold text-slate-800 dark:text-slate-200">sb-*-auth-token</td>
                  <td className="py-2.5 px-3">Cookie / Storage</td>
                  <td className="py-2.5 px-3 text-emerald-600 dark:text-emerald-400 font-bold">Necessary</td>
                  <td className="py-2.5 px-3">Encrypted Supabase JWT for secure user authentication</td>
                  <td className="py-2.5 px-3">Session / 1 Year</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-mono font-bold text-slate-800 dark:text-slate-200">upsc_auth_session</td>
                  <td className="py-2.5 px-3">LocalStorage</td>
                  <td className="py-2.5 px-3 text-emerald-600 dark:text-emerald-400 font-bold">Necessary</td>
                  <td className="py-2.5 px-3">Caches basic user name &amp; target year for fast offline header rendering</td>
                  <td className="py-2.5 px-3">Persistent</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-mono font-bold text-slate-800 dark:text-slate-200">upsc_cookie_preferences</td>
                  <td className="py-2.5 px-3">LocalStorage</td>
                  <td className="py-2.5 px-3 text-emerald-600 dark:text-emerald-400 font-bold">Necessary</td>
                  <td className="py-2.5 px-3">Stores your accepted cookie and storage consent choices</td>
                  <td className="py-2.5 px-3">1 Year</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-mono font-bold text-slate-800 dark:text-slate-200">upsc_theme</td>
                  <td className="py-2.5 px-3">LocalStorage</td>
                  <td className="py-2.5 px-3 text-blue-600 dark:text-blue-400 font-bold">Functional</td>
                  <td className="py-2.5 px-3">Remembers your dark/light theme choice</td>
                  <td className="py-2.5 px-3">Persistent</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-mono font-bold text-slate-800 dark:text-slate-200">upsc_typography</td>
                  <td className="py-2.5 px-3">LocalStorage</td>
                  <td className="py-2.5 px-3 text-blue-600 dark:text-blue-400 font-bold">Functional</td>
                  <td className="py-2.5 px-3">Stores selected font family, font size, and line height settings</td>
                  <td className="py-2.5 px-3">Persistent</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-mono font-bold text-slate-800 dark:text-slate-200">upsc_bookmarks</td>
                  <td className="py-2.5 px-3">LocalStorage</td>
                  <td className="py-2.5 px-3 text-blue-600 dark:text-blue-400 font-bold">Functional</td>
                  <td className="py-2.5 px-3">Saves your bookmarked questions for quick revision</td>
                  <td className="py-2.5 px-3">Persistent</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-mono font-bold text-slate-800 dark:text-slate-200">upsc_spaced_queue</td>
                  <td className="py-2.5 px-3">LocalStorage</td>
                  <td className="py-2.5 px-3 text-blue-600 dark:text-blue-400 font-bold">Functional</td>
                  <td className="py-2.5 px-3">Maintains spaced repetition interval calculations for wrong answers</td>
                  <td className="py-2.5 px-3">Persistent</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 4: How to Manage in Browser */}
        <section className="liquid-glass-card rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-500" />
            <span>4. How You Can Control or Clear Cookies in Your Browser</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            In addition to our on-site <strong>Cookie Options</strong> manager, you can manage or delete cookies directly through your browser settings:
          </p>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 list-disc list-inside">
            <li><strong>Google Chrome / Brave:</strong> Settings → Privacy and Security → Third-party cookies → Clear browsing data.</li>
            <li><strong>Mozilla Firefox:</strong> Settings → Privacy &amp; Security → Cookies and Site Data.</li>
            <li><strong>Apple Safari (iOS / macOS):</strong> Settings → Safari → Advanced → Privacy &amp; Website Data.</li>
            <li><strong>Microsoft Edge:</strong> Settings → Cookies and site permissions → Manage and delete cookies and site data.</li>
          </ul>
        </section>

        {/* Contact Support */}
        <section className="liquid-glass-card rounded-3xl p-6 sm:p-8 space-y-3 shadow-sm border-orange-500/20">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Mail className="w-5 h-5 text-orange-500" />
            <span>Questions Regarding Privacy &amp; Cookies?</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            For questions about our Cookie Policy or data storage, contact our support team at{' '}
            <a href="mailto:upscsphereindia@gmail.com" className="text-orange-600 dark:text-orange-400 font-bold hover:underline">
              upscsphereindia@gmail.com
            </a>.
          </p>
        </section>

      </div>
    </div>
  );
}
