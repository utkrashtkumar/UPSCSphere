'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Mail, 
  Send, 
  Linkedin, 
  Instagram, 
  MessageSquare, 
  CheckCircle, 
  Sparkles, 
  ArrowLeft,
  Clock,
  HelpCircle,
  PhoneCall
} from 'lucide-react';

export default function ContactUsPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('Question Feedback / Errata');
  const [targetYear, setTargetYear] = useState('2026');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    // Simulate successful receipt & open email client with pre-filled content
    setIsSubmitted(true);

    const subjectLine = encodeURIComponent(`[UPSCSphere ${category}] From ${name} (Prelims ${targetYear})`);
    const bodyContent = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCategory: ${category}\nTarget Year: ${targetYear}\n\nMessage:\n${message}\n\n---\nSent from UPSCSphere Contact Portal`
    );

    // Provide user with direct email fallback
    window.location.href = `mailto:utkrashtkumar@gmail.com?subject=${subjectLine}&body=${bodyContent}`;
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 sm:py-14 space-y-10">
      
      {/* Back Link & Header */}
      <div>
        <Link 
          href="/" 
          className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 dark:text-orange-400 hover:underline mb-4"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 dark:bg-orange-500/15 border border-orange-500/30 text-orange-700 dark:text-orange-300 text-xs font-bold mb-3">
          <MessageSquare className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" />
          <span>Aspirant Support & Feedback Desk</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight font-display">
          Contact <span className="tricolor-gradient-text">Us</span>
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-2xl">
          Have a question about a mock solution, found an erratum, or want to suggest new standard book questions? Reach out directly to the developer team.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Form: 7 Columns */}
        <div className="lg:col-span-7 liquid-glass-card rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
          
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-orange-600 dark:text-orange-400" />
              <h2 className="font-bold text-base text-slate-900 dark:text-white">Send Us a Direct Message</h2>
            </div>
            <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>Response in &lt; 24h</span>
            </span>
          </div>

          {isSubmitted ? (
            <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3 animate-fade-in">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base">Message Drafted Successfully!</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                Your email client was triggered with your pre-filled inquiry. If it didn&apos;t open automatically, you can email us directly at <strong className="text-orange-600 dark:text-orange-400 font-bold">utkrashtkumar@gmail.com</strong>.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-2 text-xs font-bold text-orange-600 dark:text-orange-400 hover:underline inline-block"
              >
                ← Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="font-bold text-slate-700 dark:text-slate-300 block">
                  Your Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Utkrasht Kumar / Rahul Sharma"
                  className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-orange-500 shadow-sm"
                />
              </div>

              {/* Email Address */}
              <div className="space-y-1.5">
                <label className="font-bold text-slate-700 dark:text-slate-300 block">
                  Email Address <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. aspirant@example.com"
                  className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-orange-500 shadow-sm"
                />
              </div>

              {/* Category & Target Year in 2 cols */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-bold text-slate-700 dark:text-slate-300 block">
                    Inquiry Category
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-xl px-3 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-orange-500 shadow-sm cursor-pointer"
                  >
                    <option value="Question Feedback / Errata">Question Feedback / Errata</option>
                    <option value="PYQ Solution Query">PYQ Solution Query</option>
                    <option value="Feature Suggestion">Feature Suggestion</option>
                    <option value="Bug Report">Bug Report</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="font-bold text-slate-700 dark:text-slate-300 block">
                    Target Prelims Year
                  </label>
                  <select
                    value={targetYear}
                    onChange={(e) => setTargetYear(e.target.value)}
                    className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-xl px-3 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-orange-500 shadow-sm cursor-pointer"
                  >
                    <option value="2025">UPSC 2025</option>
                    <option value="2026">UPSC 2026</option>
                    <option value="2027">UPSC 2027</option>
                    <option value="Later">2028 or Later</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="font-bold text-slate-700 dark:text-slate-300 block">
                  Detailed Message / Question ID <span className="text-rose-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your inquiry, question ID, standard book citation query, or suggestion here..."
                  className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-orange-500 shadow-sm resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="liquid-glass-btn w-full py-3.5 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-600 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-md hover:scale-[1.01] transition-all cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit & Dispatch Message</span>
              </button>
            </form>
          )}
        </div>

        {/* Right Info: 5 Columns */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Direct Email Card */}
          <div className="liquid-glass-card rounded-3xl p-6 border-orange-500/30 space-y-3.5 shadow-sm">
            <div className="flex items-center gap-2.5">
              <div className="p-2.5 rounded-xl bg-orange-500/15 text-orange-600 dark:text-orange-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 block">Direct Email</span>
                <span className="font-bold text-sm text-slate-900 dark:text-white">Official Support Desk</span>
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              For urgent technical bugs, data questions, or academic partnership requests:
            </p>

            <a
              href="mailto:utkrashtkumar@gmail.com"
              className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 flex items-center justify-between text-xs font-bold text-orange-600 dark:text-orange-400 hover:border-orange-500 transition-colors group shadow-sm"
            >
              <span className="truncate">utkrashtkumar@gmail.com</span>
              <Send className="w-3.5 h-3.5 shrink-0 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Social Connect Card */}
          <div className="liquid-glass-card rounded-3xl p-6 space-y-3.5 shadow-sm">
            <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-blue-500" />
              <span>Connect on Social Media</span>
            </h3>

            <div className="space-y-2">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/utkrashtkumar/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 hover:border-blue-500 flex items-center justify-between text-xs text-slate-800 dark:text-slate-200 transition-all group shadow-sm"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-600">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold block text-xs">LinkedIn</span>
                    <span className="text-[10px] text-slate-500">/in/utkrashtkumar</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 group-hover:underline">Follow →</span>
              </a>

              {/* X / Twitter */}
              <a
                href="https://x.com/utkrashtkumar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 hover:border-slate-500 flex items-center justify-between text-xs text-slate-800 dark:text-slate-200 transition-all group shadow-sm"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-slate-100 dark:bg-white/10 text-slate-900 dark:text-white">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-bold block text-xs">X (Twitter)</span>
                    <span className="text-[10px] text-slate-500">@utkrashtkumar</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-slate-700 dark:text-slate-300 group-hover:underline">Follow →</span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/utkrashtkumarr/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 hover:border-pink-500 flex items-center justify-between text-xs text-slate-800 dark:text-slate-200 transition-all group shadow-sm"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-pink-500/10 text-pink-600">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold block text-xs">Instagram</span>
                    <span className="text-[10px] text-slate-500">@utkrashtkumarr</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-pink-600 dark:text-pink-400 group-hover:underline">Follow →</span>
              </a>
            </div>
          </div>

          {/* Quick FAQ Card */}
          <div className="liquid-glass-card rounded-3xl p-6 space-y-2.5 shadow-sm">
            <h3 className="font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-slate-200 flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5 text-orange-500" />
              <span>Quick FAQ</span>
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              <strong>Is everything 100% free?</strong> Yes, UPSCSphere has zero subscription charges and no hidden fees for all GS-1 and CSAT mocks.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
