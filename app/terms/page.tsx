'use client';

import React from 'react';
import Link from 'next/link';
import { 
  FileText, 
  Scale, 
  BookOpen, 
  ShieldAlert, 
  CheckCircle, 
  ArrowLeft,
  Mail,
  AlertTriangle
} from 'lucide-react';

export default function TermsAndConditionsPage() {
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

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 dark:bg-blue-500/15 border border-blue-500/30 text-blue-700 dark:text-blue-300 text-xs font-bold mb-3">
          <Scale className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
          <span>Terms of Use & Fair Practice</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight font-display">
          Terms & <span className="tricolor-gradient-text">Conditions</span>
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
          Effective Date: August 15, 2026 • Platform Version 2.4
        </p>
      </div>

      {/* Overview Notice */}
      <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 border-blue-500/30 bg-blue-500/5 space-y-3 shadow-sm">
        <div className="flex items-center gap-2.5 text-blue-700 dark:text-blue-300 font-bold text-base">
          <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
          <span>Agreement to Terms of Educational Fair Use</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          By accessing and using UPSCSphere, you agree to comply with these terms. Our mission is to democratize high-quality UPSC Civil Services preparation for every aspirant in India without financial or geographical barriers.
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-8 text-slate-800 dark:text-slate-200">
        
        {/* Section 1 */}
        <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 space-y-3.5 shadow-sm">
          <div className="flex items-center gap-2.5 text-slate-900 dark:text-white font-bold text-lg font-display">
            <div className="p-2 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400">
              <CheckCircle className="w-4 h-4" />
            </div>
            <h2>1. 100% Free Educational Access Guarantee</h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            All quizzes, 12-Year PYQ Vault (2015–2026), Daily Current Affairs editorials, 1v1 speed duels, and standard book citations are provided completely free of cost for individual non-commercial educational study.
          </p>
        </div>

        {/* Section 2 */}
        <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 space-y-3.5 shadow-sm">
          <div className="flex items-center gap-2.5 text-slate-900 dark:text-white font-bold text-lg font-display">
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <BookOpen className="w-4 h-4" />
            </div>
            <h2>2. Educational Fair Use of Standard References & PYQs</h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            All question solutions reference standard academic textbooks (e.g., M. Laxmikanth, Rajiv Ahir / Spectrum, Ramesh Singh, Shankar IAS Academy, and NCERT textbooks) strictly for citation, academic critique, and study guidance under the fair dealing provisions of the Indian Copyright Act, 1957.
          </p>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Previous Year Questions (PYQs) of the UPSC Civil Services Preliminary Examination (GS Paper 1 and CSAT Paper 2) are public domain exam papers curated to assist aspirants in mastering syllabus concepts.
          </p>
        </div>

        {/* Section 3 */}
        <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 space-y-3.5 shadow-sm">
          <div className="flex items-center gap-2.5 text-slate-900 dark:text-white font-bold text-lg font-display">
            <div className="p-2 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400">
              <AlertTriangle className="w-4 h-4" />
            </div>
            <h2>3. Disclaimer of Official Affiliation</h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            UPSCSphere is an independent educational technology portal and is <strong>NOT</strong> officially affiliated with, endorsed by, or in any way formally connected to the Union Public Service Commission (UPSC) or the Government of India. The official UPSC portal is located at <a href="https://upsc.gov.in" target="_blank" rel="noopener noreferrer" className="text-orange-600 dark:text-orange-400 underline font-semibold">upsc.gov.in</a>.
          </p>
        </div>

        {/* Section 4 */}
        <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 space-y-3.5 shadow-sm">
          <div className="flex items-center gap-2.5 text-slate-900 dark:text-white font-bold text-lg font-display">
            <div className="p-2 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
              <ShieldAlert className="w-4 h-4" />
            </div>
            <h2>4. Platform Integrity & Fair Play in Duels</h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            When participating in 1v1 Aspirant Speed Duels and All-India Leaderboard challenges, users agree not to use automated bot scripts, screen-scraping exploits, or unfair scoring manipulations. We reserve the right to reset artificially inflated leaderboard rankings to preserve fair competition for sincere aspirants.
          </p>
        </div>

        {/* Section 5 */}
        <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 space-y-3.5 shadow-sm">
          <div className="flex items-center gap-2.5 text-slate-900 dark:text-white font-bold text-lg font-display">
            <div className="p-2 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400">
              <Mail className="w-4 h-4" />
            </div>
            <h2>5. Questions, Feedback & Errata Reporting</h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            While every question and official answer key has been verified against standard publications and official UPSC master answer sheets, if you encounter any typographical error or disputed question interpretation, please notify us directly:
          </p>
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div>
              <span className="font-bold text-slate-900 dark:text-white block">Academic Errata & Support Desk</span>
              <span className="text-slate-500 dark:text-slate-400">Utkrasht Kumar • Developer & Platform Lead</span>
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
