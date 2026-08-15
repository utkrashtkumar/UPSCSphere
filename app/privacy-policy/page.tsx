'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Lock, 
  Database, 
  Cookie, 
  EyeOff, 
  HelpCircle, 
  ArrowLeft,
  Mail,
  CheckCircle2
} from 'lucide-react';

export default function PrivacyPolicyPage() {
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

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs font-bold mb-3">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span>Privacy & Data Protection</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight font-display">
          Privacy <span className="tricolor-gradient-text">Policy</span>
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
          Effective Date: August 15, 2026 • Last Reviewed: August 2026
        </p>
      </div>

      {/* Core Privacy Promise Banner */}
      <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 border-emerald-500/30 bg-emerald-500/5 space-y-3 shadow-sm">
        <div className="flex items-center gap-2.5 text-emerald-700 dark:text-emerald-300 font-bold text-base">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
          <span>Our Transparent Privacy Pledge for UPSC Aspirants</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          UPSCSphere is an open, 100% free educational portal. We do not sell your personal information, run invasive behavioral tracking ad scripts, or monetize your study data. Your quiz history, syllabus tracking, and bookmarks are stored safely on your own browser device.
        </p>
      </div>

      {/* Policy Sections */}
      <div className="space-y-8 text-slate-800 dark:text-slate-200">
        
        {/* Section 1 */}
        <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 space-y-3.5 shadow-sm">
          <div className="flex items-center gap-2.5 text-slate-900 dark:text-white font-bold text-lg font-display">
            <div className="p-2 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400">
              <Database className="w-4 h-4" />
            </div>
            <h2>1. Information We Collect</h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            We only collect minimal data necessary to deliver your personalized preparation experience:
          </p>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 list-disc list-inside">
            <li><strong>Account Information:</strong> If you voluntarily create an account, we store your name, email address, and target UPSC Prelims year.</li>
            <li><strong>Mock Performance Data:</strong> Your test scores, accuracy percentages, time spent per question, and simulated AIR benchmarks.</li>
            <li><strong>Technical Telemetry:</strong> Standard browser type, device screen resolution, and session timestamps for responsive layout optimization.</li>
          </ul>
        </div>

        {/* Section 2 */}
        <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 space-y-3.5 shadow-sm">
          <div className="flex items-center gap-2.5 text-slate-900 dark:text-white font-bold text-lg font-display">
            <div className="p-2 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
              <Lock className="w-4 h-4" />
            </div>
            <h2>2. Client-Side & Local Storage Protection</h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            By default, UPSCSphere uses your browser&apos;s native <code className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono text-xs text-orange-600 dark:text-orange-400">localStorage</code> and <code className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono text-xs text-orange-600 dark:text-orange-400">sessionStorage</code> APIs to preserve:
          </p>
          <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 list-disc list-inside">
            <li>Your active test configuration, live timer countdown, and answer selections.</li>
            <li>Bookmarked questions and revision flashcards.</li>
            <li>Micro-syllabus checkmarks and revision counts (1st, 2nd, and 3rd revision rounds).</li>
            <li>Theme preference (Light or Dark Mode) and typography font scaling.</li>
          </ul>
          <p className="text-xs text-slate-500 dark:text-slate-400 pt-1">
            You have complete sovereignty over this data and can reset it at any time by clearing your browser cache.
          </p>
        </div>

        {/* Section 3 */}
        <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 space-y-3.5 shadow-sm">
          <div className="flex items-center gap-2.5 text-slate-900 dark:text-white font-bold text-lg font-display">
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <EyeOff className="w-4 h-4" />
            </div>
            <h2>3. Zero Third-Party Advertising or Selling of Data</h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            We hold a strict policy regarding student data protection:
          </p>
          <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 list-disc list-inside">
            <li>We <strong>do NOT</strong> sell, rent, or trade your personal email or study patterns to coaching institutes or third-party telemarketers.</li>
            <li>We <strong>do NOT</strong> host banner ads or pop-up tracker networks that distract your revision.</li>
            <li>All questions, book citations, and PYQ materials are accessible freely without forced paywalls.</li>
          </ul>
        </div>

        {/* Section 4 */}
        <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 space-y-3.5 shadow-sm">
          <div className="flex items-center gap-2.5 text-slate-900 dark:text-white font-bold text-lg font-display">
            <div className="p-2 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
              <Cookie className="w-4 h-4" />
            </div>
            <h2>4. Cookies & Session Management</h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            We use strictly essential cookies and session tokens exclusively to keep you authenticated when you log in and to prevent test session loss during network fluctuations. We do not use cross-site tracking cookies.
          </p>
        </div>

        {/* Section 5: Google User Data Policy Compliance */}
        <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 space-y-3.5 shadow-sm border-orange-500/20">
          <div className="flex items-center gap-2.5 text-slate-900 dark:text-white font-bold text-lg font-display">
            <div className="p-2 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h2>5. Google API Services User Data Policy Compliance</h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            UPSCSphere uses Google OAuth solely for user authentication and cross-device account synchronization. 
          </p>
          <div className="p-4 rounded-2xl bg-orange-500/5 border border-orange-500/20 text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2">
            <p className="font-semibold text-slate-900 dark:text-white">
              Limited Use Disclosure:
            </p>
            <p className="leading-relaxed">
              UPSCSphere&apos;s use and transfer to any other app of information received from Google APIs will adhere to the <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer" className="text-orange-600 dark:text-orange-400 underline font-bold">Google API Services User Data Policy</a>, including the Limited Use requirements.
            </p>
            <ul className="list-disc list-inside space-y-1 text-xs opacity-90 pt-1">
              <li>We only access basic profile information (email, full name, avatar URL) to establish your account.</li>
              <li>We do not transfer or disclose Google user data to third parties, data brokers, or advertising networks.</li>
              <li>We do not use Google user data for training generalized AI or machine learning models.</li>
            </ul>
          </div>
        </div>

        {/* Section 6 */}
        <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 space-y-3.5 shadow-sm">
          <div className="flex items-center gap-2.5 text-slate-900 dark:text-white font-bold text-lg font-display">
            <div className="p-2 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400">
              <HelpCircle className="w-4 h-4" />
            </div>
            <h2>6. Contact & Privacy Inquiries</h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            If you have questions regarding this Privacy Policy, wish to request account deletion, or want to export your study records, please contact our data grievance desk:
          </p>
          
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div>
              <span className="font-bold text-slate-900 dark:text-white block">Utkrasht Kumar — Data Grievance Desk</span>
              <span className="text-slate-500 dark:text-slate-400">UPSCSphere Open Aspirants Initiative</span>
            </div>
            <a
              href="mailto:utkrashtkumar@gmail.com"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-orange-500 text-white font-bold hover:bg-orange-600 transition-colors shadow-sm"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>utkrashtkumar@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
