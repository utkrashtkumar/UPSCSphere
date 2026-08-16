'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  KeyRound, 
  Mail, 
  ArrowLeft, 
  CheckCircle2, 
  AlertCircle, 
  Send,
  ShieldCheck,
  RotateCcw
} from 'lucide-react';
import { useAuth } from '@/lib/authContext';

export default function ForgotPasswordPage() {
  const { resetPasswordForEmail } = useAuth();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);
    setLoading(true);

    const res = await resetPasswordForEmail(email.trim());
    setLoading(false);

    if (res.error) {
      setErrorMessage(res.error);
    } else {
      setSuccessMessage(res.message || 'A secure password recovery email has been sent. Please check your inbox.');
    }
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-16 py-12 sm:py-16">
      <div className="max-w-xl mx-auto space-y-8 animate-fade-in">
        
        {/* Back link */}
        <div>
          <Link
            href="/auth"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-orange-600 dark:text-orange-400 hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Sign In</span>
          </Link>
        </div>

        {/* Main Card */}
        <div className="liquid-glass-card rounded-3xl p-7 sm:p-10 border border-slate-200 dark:border-white/10 shadow-2xl space-y-7 relative overflow-hidden">
          
          {/* Top Decorative Tricolour Stream */}
          <div className="h-[3px] absolute top-0 left-0 right-0 running-tricolor-line opacity-90" />

          {/* Header */}
          <div className="text-center space-y-3">
            <Link href="/" className="inline-block group">
              <div className="relative w-16 h-16 rounded-full overflow-hidden p-[1.5px] bg-gradient-to-tr from-orange-500 via-amber-400 to-emerald-500 shadow-lg shadow-orange-500/20 mx-auto group-hover:scale-105 transition-transform">
                <Image
                  src="/logo.png"
                  alt="UPSCSphere Official Logo"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover rounded-full bg-white dark:bg-slate-900"
                />
              </div>
            </Link>

            <h1 className="text-2xl sm:text-3xl font-black font-display text-slate-900 dark:text-white tracking-tight">
              Reset Your <span className="tricolor-gradient-text">Password</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
              Enter your registered email address and we will immediately send you a secure verification link to reset your account password.
            </p>
          </div>

          {/* Error Banner */}
          {errorMessage && (
            <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-700 dark:text-rose-400 text-xs sm:text-sm flex items-start gap-3">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <div className="font-medium leading-relaxed">{errorMessage}</div>
            </div>
          )}

          {/* Success Banner */}
          {successMessage ? (
            <div className="space-y-6 animate-fade-in">
              <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 space-y-3">
                <div className="flex items-center gap-2.5 font-bold text-sm sm:text-base">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Recovery Link Dispatched!</span>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed opacity-90">
                  {successMessage}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                <div className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-orange-500" />
                  <span>Security & Delivery Tips:</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs opacity-90">
                  <li>Allow 1–2 minutes for the email delivery from Supabase Auth.</li>
                  <li>Check your <strong>Spam / Promotions</strong> folder if not in primary inbox.</li>
                  <li>The reset token expires automatically in 15 minutes for your account security.</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setSuccessMessage(null);
                    setEmail('');
                  }}
                  className="flex-1 py-3 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Send to Another Email</span>
                </button>

                <Link
                  href="/auth"
                  className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 text-white text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 hover:scale-[1.02] transition-all"
                >
                  <span>Return to Sign In</span>
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-extrabold text-slate-800 dark:text-slate-200 uppercase tracking-wider block">
                  Registered Email Address <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="aspirant@upsc.gov.in"
                    className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white dark:bg-slate-950/70 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm sm:text-base focus:outline-none focus:border-orange-500 transition-colors shadow-sm"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading || !email.trim()}
                className="liquid-glass-btn w-full py-4 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-600 text-white font-black text-sm sm:text-base shadow-xl shadow-orange-500/25 flex items-center justify-center gap-2.5 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Dispatching Link...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 fill-white" />
                    <span>Send Password Reset Link</span>
                  </>
                )}
              </button>
            </form>
          )}

          {/* Bottom Card Footer */}
          <div className="pt-4 border-t border-slate-200 dark:border-white/10 text-center">
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Remember your password?{' '}
              <Link
                href="/auth"
                className="font-extrabold text-orange-600 dark:text-orange-400 hover:underline"
              >
                Sign in to your account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
