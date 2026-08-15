'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  Lock, 
  Eye, 
  EyeOff, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { useAuth } from '@/lib/authContext';

export default function ResetPasswordPage() {
  const router = useRouter();
  const { updateUserPassword } = useAuth();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match. Please re-enter.');
      return;
    }

    setLoading(true);
    const res = await updateUserPassword(password);
    setLoading(false);

    if (res.error) {
      setError(res.error);
    } else {
      setIsSuccess(true);
      setTimeout(() => {
        router.push('/auth');
      }, 3000);
    }
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-16 py-12 sm:py-16">
      <div className="max-w-xl mx-auto space-y-8 animate-fade-in">
        
        {/* Card */}
        <div className="liquid-glass-card rounded-3xl p-7 sm:p-10 border border-slate-200 dark:border-white/10 shadow-2xl space-y-7 relative overflow-hidden">
          
          {/* Top Decorative Line */}
          <div className="h-[3px] absolute top-0 left-0 right-0 running-tricolor-line opacity-90" />

          {/* Header */}
          <div className="text-center space-y-2.5">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30 shadow-md">
              <Lock className="w-7 h-7" />
            </div>

            <h1 className="text-2xl sm:text-3xl font-black font-display text-slate-900 dark:text-white tracking-tight">
              Create New <span className="tricolor-gradient-text">Password</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
              Choose a strong, memorable password for your UPSCSphere account.
            </p>
          </div>

          {/* Error Banner */}
          {error && (
            <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-700 dark:text-rose-400 text-xs sm:text-sm flex items-start gap-3">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <div className="font-medium leading-relaxed">{error}</div>
            </div>
          )}

          {/* Success Banner */}
          {isSuccess ? (
            <div className="p-6 rounded-3xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4 animate-fade-in">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                Password Successfully Updated!
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-sm mx-auto">
                Your new credentials are saved. Redirecting you to the sign-in page in a few seconds...
              </p>
              <Link
                href="/auth"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white text-xs sm:text-sm font-extrabold shadow-lg shadow-emerald-500/20 hover:scale-105 transition-all"
              >
                <span>Go to Sign In Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* New Password */}
              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-extrabold text-slate-800 dark:text-slate-200 uppercase tracking-wider block">
                  New Password <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Lock className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Minimum 6 characters"
                    className="w-full pl-12 pr-12 py-3.5 rounded-2xl bg-white dark:bg-slate-950/70 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm sm:text-base focus:outline-none focus:border-emerald-500 transition-colors shadow-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 dark:hover:text-white"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-extrabold text-slate-800 dark:text-slate-200 uppercase tracking-wider block">
                  Confirm New Password <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Lock className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Re-type your password"
                    className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white dark:bg-slate-950/70 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm sm:text-base focus:outline-none focus:border-emerald-500 transition-colors shadow-sm"
                  />
                </div>
              </div>

              {/* Password Requirement Hint */}
              <div className="p-3.5 rounded-xl bg-slate-50/80 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 text-xs text-slate-600 dark:text-slate-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Must be at least 6 characters with mixed letters and numbers.</span>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="liquid-glass-btn w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 text-white font-black text-sm sm:text-base shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-2.5 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Updating Password...</span>
                  </>
                ) : (
                  <span>Update Password & Sign In</span>
                )}
              </button>
            </form>
          )}

          {/* Footer Back Link */}
          <div className="pt-4 border-t border-slate-200 dark:border-white/10 text-center">
            <Link
              href="/auth"
              className="text-xs sm:text-sm font-extrabold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:underline"
            >
              Cancel & Return to Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
