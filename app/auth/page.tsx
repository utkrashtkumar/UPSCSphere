'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Sparkles, 
  ShieldCheck, 
  Lock, 
  Mail, 
  User, 
  Calendar, 
  ArrowRight, 
  Eye, 
  EyeOff, 
  CheckCircle2, 
  AlertCircle,
  Zap
} from 'lucide-react';
import { useAuth } from '@/lib/authContext';

export default function AuthPage() {
  const router = useRouter();
  const { user, signInWithEmail, signUpWithEmail, signInWithGoogle } = useAuth();

  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [targetYear, setTargetYear] = useState<number>(2026);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // If already logged in, show welcome card
  if (user) {
    return (
      <div className="max-w-md mx-auto px-4 py-16 text-center space-y-6">
        <div className="liquid-glass-card rounded-3xl p-8 border-emerald-500/40 shadow-xl">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-black font-display text-slate-900 dark:text-white">
            Welcome back, {user.name}!
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
            You are logged in as <strong className="text-emerald-700 dark:text-emerald-400 font-bold">{user.email}</strong>
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <button
              onClick={() => router.push('/quiz/create')}
              className="liquid-glass-btn w-full py-3.5 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-600 text-white font-extrabold text-sm shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2"
            >
              <Zap className="w-4 h-4 fill-white" />
              <span>Launch Mock Test</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => router.push('/')}
              className="liquid-glass-btn w-full py-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 font-semibold text-sm border border-slate-200 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-slate-700/80"
            >
              Go to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    try {
      if (mode === 'login') {
        const res = await signInWithEmail(email, password);
        if (res.error) {
          setError(res.error);
        } else {
          setSuccess('Signed in successfully! Redirecting...');
          setTimeout(() => router.push('/'), 800);
        }
      } else {
        const res = await signUpWithEmail(email, password, name, targetYear);
        if (res.error) {
          setError(res.error);
        } else {
          setSuccess('Account created! Welcome to UPSCSphere. Redirecting...');
          setTimeout(() => router.push('/'), 800);
        }
      }
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleAuth = async () => {
    setError(null);
    setLoading(true);
    try {
      const res = await signInWithGoogle();
      if (res.error) {
        setError(res.error);
      } else {
        setSuccess('Authenticated with Google! Redirecting...');
        setTimeout(() => router.push('/'), 800);
      }
    } catch (err: any) {
      setError(err.message || 'Google authentication failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-12 space-y-8">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 dark:bg-orange-500/15 border border-orange-500/30 text-orange-700 dark:text-orange-300 text-xs font-black tracking-wide">
          <Sparkles className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" />
          <span>100% FREE UPSC ASPIRANT PORTAL</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-slate-900 dark:text-white">
          {mode === 'login' ? 'Welcome Back, Aspirant' : 'Begin Your IAS Journey'}
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
          {mode === 'login'
            ? 'Sign in to sync your mock scores, track All-India rank, and resume your streak.'
            : 'Create your free account to unlock personalized diagnostic reports and bookmarks.'}
        </p>
      </div>

      {/* Main Glass Card */}
      <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 shadow-2xl">
        {/* Tab Switcher */}
        <div className="flex p-1 rounded-2xl bg-slate-100 dark:bg-slate-950/60 border border-slate-200 dark:border-white/10 mb-6">
          <button
            type="button"
            onClick={() => { setMode('login'); setError(null); setSuccess(null); }}
            className={`flex-1 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
              mode === 'login'
                ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/20'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => { setMode('signup'); setError(null); setSuccess(null); }}
            className={`flex-1 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
              mode === 'signup'
                ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/20'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Create Free Account
          </button>
        </div>

        {/* Error / Success Notifications */}
        {error && (
          <div className="mb-5 p-3.5 rounded-xl bg-rose-50 dark:bg-rose-500/15 border border-rose-500/40 text-rose-700 dark:text-rose-300 text-xs flex items-center gap-2.5 animate-fade-in font-medium">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-600 dark:text-rose-400" />
            <span>{error}</span>
          </div>
        )}

        {success && (
          <div className="mb-5 p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-500/15 border border-emerald-500/40 text-emerald-700 dark:text-emerald-300 text-xs flex items-center gap-2.5 animate-fade-in font-medium">
            <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
            <span>{success}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'signup' && (
            <div className="space-y-1.5 animate-fade-in">
              <label className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider block">
                Full Name / Aspirant Pseudonym
              </label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Vikramaditya Verma"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white dark:bg-slate-950/70 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm focus:outline-none focus:border-orange-500 transition-colors shadow-sm"
                />
              </div>
            </div>
          )}

          {/* Email */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider block">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="aspirant@upsc.org"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white dark:bg-slate-950/70 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm focus:outline-none focus:border-orange-500 transition-colors shadow-sm"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider block">
              Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-11 py-3 rounded-xl bg-white dark:bg-slate-950/70 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm focus:outline-none focus:border-orange-500 transition-colors shadow-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 dark:hover:text-white"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {mode === 'signup' && (
            <div className="space-y-1.5 animate-fade-in">
              <label className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider block">
                Target UPSC Civil Services Attempt
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <select
                  value={targetYear}
                  onChange={(e) => setTargetYear(Number(e.target.value))}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white dark:bg-slate-950/70 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-orange-500 transition-colors appearance-none cursor-pointer shadow-sm"
                >
                  <option value={2025}>UPSC Prelims 2025 (May 2025)</option>
                  <option value={2026}>UPSC Prelims 2026 (May 2026)</option>
                  <option value={2027}>UPSC Prelims 2027 (May 2027)</option>
                  <option value={2028}>UPSC Prelims 2028</option>
                </select>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="liquid-glass-btn w-full mt-2 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-600 text-white font-extrabold text-sm shadow-xl shadow-orange-500/25 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
          >
            {loading ? (
              <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <Zap className="w-4 h-4 fill-white" />
                <span>{mode === 'login' ? 'Sign In to Portal' : 'Create Free Account & Sync'}</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-6 text-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200 dark:border-white/10" />
          </div>
          <span className="relative px-4 text-xs font-bold uppercase tracking-wider text-slate-500 bg-white dark:bg-slate-900">
            or continue with
          </span>
        </div>

        {/* Google OAuth Button */}
        <button
          type="button"
          onClick={handleGoogleAuth}
          disabled={loading}
          className="liquid-glass-btn w-full py-3 rounded-xl bg-white dark:bg-slate-950/80 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-900 dark:text-white font-bold text-sm border border-slate-200 dark:border-white/15 hover:border-slate-300 dark:hover:border-white/30 flex items-center justify-center gap-3 transition-all shadow-sm"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path
              fill="#EA4335"
              d="M12 5c1.6 0 3 .6 4.1 1.7l3.1-3.1C17.3 1.8 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.4 9 5 12 5z"
            />
            <path
              fill="#4285F4"
              d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5.1 3.7-8.8z"
            />
            <path
              fill="#FBBC05"
              d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.3 0-.8.2-1.6.4-2.3L1.9 7.3C.7 9.7 0 12.3 0 15.2s.7 5.5 1.9 7.9l3.7-2.9c-.1-.7 0-1.4 0-5.4z"
            />
            <path
              fill="#34A853"
              d="M12 23.5c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2-6.4-4.8L1.9 16.9C3.7 20.6 7.5 23.5 12 23.5z"
            />
          </svg>
          <span>Continue with Google</span>
        </button>

        {/* Security & Free Guarantee Footer */}
        <div className="mt-6 pt-5 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>256-Bit Encrypted</span>
          </div>
          <span className="font-semibold">100% Free Forever • Zero Charges</span>
        </div>
      </div>
    </div>
  );
}
