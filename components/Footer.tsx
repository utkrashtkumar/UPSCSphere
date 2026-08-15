'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  BookOpen, 
  Zap, 
  Trophy, 
  Layers, 
  Swords, 
  RotateCcw, 
  Heart, 
  Flame,
  CheckCircle,
  Mail,
  Linkedin,
  Instagram,
  ExternalLink
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-10 mt-20 border-t border-slate-200/80 dark:border-white/10 liquid-glass-panel bg-white/90 dark:bg-[#050b14]/90 backdrop-blur-2xl">
      {/* Running Tricolour Accent Stream Line */}
      <div className="h-[2px] w-full running-tricolor-line opacity-90" />

      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-16 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          
          {/* Col 1 & 2: Brand, Mission & Badges */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group inline-flex">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-orange-500 via-amber-500 to-emerald-600 p-[1.5px] shadow-sm group-hover:scale-105 transition-transform">
                <div className="w-full h-full rounded-[14px] bg-white dark:bg-[#050b14] flex items-center justify-center text-lg font-black">
                  🏛️
                </div>
              </div>
              <div>
                <span className="font-extrabold text-xl text-slate-900 dark:text-white tracking-tight">
                  UPSC<span className="text-orange-500 dark:text-orange-400">Sphere</span>
                </span>
                <span className="ml-2 text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                  FREE PRELIMS PORTAL
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              <strong>UPSCSphere</strong> is India&apos;s 100% free UPSC Civil Services Prelims platform. Built with high-speed performance, real-time evaluation, and page-exact standard book citations.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold">
                <CheckCircle className="w-3.5 h-3.5" />
                100% Free Forever
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-700 dark:text-blue-400 text-xs font-bold">
                <ShieldCheck className="w-3.5 h-3.5" />
                Instant Fast Speed
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-orange-500/10 border border-orange-500/30 text-orange-700 dark:text-orange-400 text-xs font-bold">
                <Flame className="w-3.5 h-3.5" />
                Official PYQs (2015–2026)
              </span>
            </div>
          </div>

          {/* Col 3: Prelims Core Engine */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-slate-200">
              Prelims Test Suite
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <li>
                <Link href="/quiz/create" className="hover:text-orange-600 dark:hover:text-orange-400 flex items-center gap-1.5 transition-colors">
                  <Zap className="w-3.5 h-3.5 text-orange-500" />
                  <span>Custom Quiz Configurator</span>
                </Link>
              </li>
              <li>
                <Link href="/pyq" className="hover:text-orange-600 dark:hover:text-orange-400 flex items-center gap-1.5 transition-colors">
                  <BookOpen className="w-3.5 h-3.5 text-blue-500" />
                  <span>12-Yr PYQ Vault (2015–2026)</span>
                </Link>
              </li>
              <li>
                <Link href="/leaderboard" className="hover:text-orange-600 dark:hover:text-orange-400 flex items-center gap-1.5 transition-colors">
                  <Trophy className="w-3.5 h-3.5 text-amber-500" />
                  <span>All-India Live Rankings</span>
                </Link>
              </li>
              <li>
                <Link href="/syllabus" className="hover:text-orange-600 dark:hover:text-orange-400 flex items-center gap-1.5 transition-colors">
                  <Layers className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Prelims Micro-Topic Tracker</span>
                </Link>
              </li>
              <li>
                <Link href="/duel" className="hover:text-orange-600 dark:hover:text-orange-400 flex items-center gap-1.5 transition-colors">
                  <Swords className="w-3.5 h-3.5 text-rose-500" />
                  <span>1v1 Aspirant Speed Duel</span>
                </Link>
              </li>
              <li>
                <Link href="/revision" className="hover:text-orange-600 dark:hover:text-orange-400 flex items-center gap-1.5 transition-colors">
                  <RotateCcw className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Spaced Repetition Vault</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Book Citations */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-slate-200">
              Verified Book Citing
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                <span>M. Laxmikanth (Polity 7th Ed)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span>Spectrum (Modern India)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Ramesh Singh (Indian Economy)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                <span>Shankar IAS (Environment)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                <span>NCERT Class XI & XII Physical Geo</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-600" />
                <span>The Hindu & PIB Editorials</span>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact Us & Social Connect */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-slate-200">
              Contact & Connect
            </h4>
            
            <div className="liquid-glass-card rounded-2xl p-4 border border-slate-200 dark:border-white/10 space-y-3 shadow-sm">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 block mb-1">Email Support</span>
                <a
                  href="mailto:utkrashtkumar@gmail.com"
                  className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white hover:text-orange-600 dark:hover:text-orange-400 transition-colors group"
                >
                  <div className="p-1.5 rounded-lg bg-orange-500/10 text-orange-600 dark:text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <span className="truncate">utkrashtkumar@gmail.com</span>
                </a>
              </div>

              <div className="pt-2 border-t border-slate-200/80 dark:border-white/5">
                <span className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 block mb-2">Social Profiles</span>
                
                <div className="flex items-center gap-2">
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/utkrashtkumar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn: Utkrasht Kumar"
                    aria-label="LinkedIn Profile"
                    className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-blue-600 hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-500/10 transition-all shadow-sm"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>

                  {/* X / Twitter */}
                  <a
                    href="https://x.com/utkrashtkumar"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="X (Twitter): @utkrashtkumar"
                    aria-label="X Profile"
                    className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-600 hover:bg-slate-200/50 dark:hover:bg-white/10 transition-all shadow-sm"
                  >
                    {/* Official X Logo SVG */}
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/utkrashtkumarr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Instagram: @utkrashtkumarr"
                    aria-label="Instagram Profile"
                    className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-pink-600 hover:border-pink-500 hover:bg-pink-50/50 dark:hover:bg-pink-500/10 transition-all shadow-sm"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>

                  {/* Direct Contact Button */}
                  <a
                    href="mailto:utkrashtkumar@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto inline-flex items-center gap-1 text-[11px] font-bold text-orange-600 dark:text-orange-400 hover:underline"
                  >
                    <span>Reach Out</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation & Legal Links Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200/80 dark:border-white/10 space-y-4">
          {/* Tier 1: Dedicated Legal & Navigation Links */}
          <div className="flex items-center justify-center flex-wrap gap-x-6 gap-y-2 text-xs font-semibold text-slate-600 dark:text-slate-400">
            <Link 
              href="/about" 
              className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors whitespace-nowrap py-0.5"
            >
              About Us
            </Link>
            <span className="text-slate-300 dark:text-white/10 hidden sm:inline">•</span>
            <Link 
              href="/how-to-use" 
              className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors whitespace-nowrap py-0.5"
            >
              How to Use Guide
            </Link>
            <span className="text-slate-300 dark:text-white/10 hidden sm:inline">•</span>
            <Link 
              href="/contact" 
              className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors whitespace-nowrap py-0.5"
            >
              Contact Us
            </Link>
            <span className="text-slate-300 dark:text-white/10 hidden sm:inline">•</span>
            <Link 
              href="/privacy-policy" 
              className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors whitespace-nowrap py-0.5"
            >
              Privacy Policy
            </Link>
            <span className="text-slate-300 dark:text-white/10 hidden sm:inline">•</span>
            <Link 
              href="/terms" 
              className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors whitespace-nowrap py-0.5"
            >
              Terms & Conditions
            </Link>
          </div>

          {/* Tier 2: Clean 2-Side Copyright & Dedication Bar */}
          <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-2 text-center sm:text-left flex-wrap justify-center sm:justify-start">
              <span>© 2026 UPSCSphere. Open Aspirants Initiative.</span>
              <span className="text-slate-300 dark:text-white/10 hidden sm:inline">•</span>
              <span className="whitespace-nowrap">Created by <strong className="text-slate-800 dark:text-slate-200 font-semibold">Utkrasht Kumar</strong></span>
            </div>

            <div className="flex items-center justify-center gap-1.5 shrink-0 whitespace-nowrap text-slate-600 dark:text-slate-400">
              <span>Dedicated with</span>
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 shrink-0" />
              <span>for Civil Services Aspirants across Bharat 🇮🇳</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
