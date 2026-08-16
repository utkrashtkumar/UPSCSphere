'use client';

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
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
  Zap,
  MailCheck,
  X,
  RefreshCw
} from 'lucide-react';
import { useAuth } from '@/lib/authContext';

function AuthContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const rawRedirect = searchParams.get('redirect');
  // Safe redirect path (only internal paths starting with /)
  const redirectPath = rawRedirect && rawRedirect.startsWith('/') && !rawRedirect.startsWith('//') ? rawRedirect : '/';

  const { user, signInWithEmail, signUpWithEmail, resendConfirmationEmail, signInWithMagicLink, signInWithGoogle } = useAuth();

  const [mode, setMode] = useState<'login' | 'signup' | 'magic_link'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [targetYear, setTargetYear] = useState<number>(2027);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Email confirmation popup modal state
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [registeredEmail, setRegisteredEmail] = useState('');
  const [resendLoading, setResendLoading] = useState(false);
  const [resendMsg, setResendMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

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
          setTimeout(() => router.push(redirectPath), 800);
        }
      } else if (mode === 'magic_link') {
        const res = await signInWithMagicLink(email);
        if (res.error) {
          setError(res.error);
        } else {
          setSuccess(res.message || `Magic login link sent to ${email}! Check your inbox to sign in.`);
        }
      } else {
        const res = await signUpWithEmail(email, password, name, targetYear);
        if (res.error) {
          setError(res.error);
        } else {
          // Trigger confirmation popup modal
          setRegisteredEmail(email);
          setShowConfirmationModal(true);
        }
      }
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  const handleResendConfirmation = async () => {
    if (!registeredEmail) return;
    setResendLoading(true);
    setResendMsg(null);
    try {
      const res = await resendConfirmationEmail(registeredEmail);
      if (res.error) {
        setResendMsg({ type: 'error', text: res.error });
      } else {
        setResendMsg({ type: 'success', text: res.message || `Verification email resent to ${registeredEmail}!` });
      }
    } catch (err: any) {
      setResendMsg({ type: 'error', text: err.message || 'Failed to resend confirmation email.' });
    } finally {
      setResendLoading(false);
    }
  };

  const handleSwitchToLoginFromModal = () => {
    setShowConfirmationModal(false);
    setMode('login');
    setPassword('');
    setError(null);
    setSuccess(`Account registered for ${registeredEmail}! Please confirm your email and sign in below.`);
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
        setTimeout(() => router.push(redirectPath), 800);
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
      <div className="text-center space-y-3">
        <Link href="/" className="inline-block group">
          <div className="relative w-20 h-20 rounded-full overflow-hidden p-[2px] bg-gradient-to-tr from-orange-500 via-amber-400 to-emerald-500 shadow-xl shadow-orange-500/20 mx-auto group-hover:scale-105 transition-transform">
            <Image
              src="/logo.png"
              alt="UPSCSphere Official Logo"
              width={80}
              height={80}
              className="w-full h-full object-cover rounded-full bg-white dark:bg-slate-900"
              priority
            />
          </div>
        </Link>

        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 dark:bg-orange-500/15 border border-orange-500/30 text-orange-700 dark:text-orange-300 text-xs font-black tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" />
            <span>100% FREE UPSC ASPIRANT PORTAL</span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-slate-900 dark:text-white">
          {mode === 'login' && 'Welcome Back, Aspirant'}
          {mode === 'magic_link' && 'Passwordless Magic Sign-In ✨'}
          {mode === 'signup' && 'Begin Your IAS Journey'}
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
          {mode === 'login' && 'Sign in to sync your mock scores, track All-India rank, and resume your streak.'}
          {mode === 'magic_link' && 'Enter your email address and we will send you an instant one-click login link.'}
          {mode === 'signup' && 'Create your free account to unlock personalized diagnostic reports and bookmarks.'}
        </p>
      </div>

      {/* Main Glass Card */}
      <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 shadow-2xl">
        {/* 3-Way Tab Switcher */}
        <div className="flex p-1 rounded-2xl bg-slate-100 dark:bg-slate-950/60 border border-slate-200 dark:border-white/10 mb-6 gap-1">
          <button
            type="button"
            onClick={() => { setMode('login'); setError(null); setSuccess(null); }}
            className={`flex-1 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all ${
              mode === 'login'
                ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/20'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Password
          </button>
          <button
            type="button"
            onClick={() => { setMode('magic_link'); setError(null); setSuccess(null); }}
            className={`flex-1 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-1 ${
              mode === 'magic_link'
                ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-md shadow-blue-500/20'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <span>Magic Link</span>
            <span className="text-[10px] px-1 py-0.2 rounded bg-white/20">OTP</span>
          </button>
          <button
            type="button"
            onClick={() => { setMode('signup'); setError(null); setSuccess(null); }}
            className={`flex-1 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all ${
              mode === 'signup'
                ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/20'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Sign Up
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

          {/* Password (only for login and signup) */}
          {mode !== 'magic_link' && (
            <div className="space-y-1.5 animate-fade-in">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider block">
                  Password
                </label>
                {mode === 'login' && (
                  <Link
                    href="/auth/forgot-password"
                    className="text-xs font-extrabold text-orange-600 dark:text-orange-400 hover:underline"
                  >
                    Forgot Password?
                  </Link>
                )}
              </div>
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
          )}

          {/* Target Year (only for signup) */}
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
                  <option value={2027}>UPSC Prelims 2027 (Next Upcoming - May 2027)</option>
                  <option value={2028}>UPSC Prelims 2028 (May 2028)</option>
                  <option value={2029}>UPSC Prelims 2029 (May 2029)</option>
                  <option value={2030}>UPSC Prelims 2030 or Later</option>
                </select>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`liquid-glass-btn w-full mt-2 py-3.5 rounded-xl text-white font-extrabold text-sm shadow-xl flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 ${
              mode === 'magic_link'
                ? 'bg-gradient-to-r from-blue-600 to-teal-600 shadow-blue-500/25'
                : 'bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-600 shadow-orange-500/25'
            }`}
          >
            {loading ? (
              <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <Zap className="w-4 h-4 fill-white" />
                <span>
                  {mode === 'login' && 'Sign In to Portal'}
                  {mode === 'magic_link' && 'Send One-Click Magic Link ✨'}
                  {mode === 'signup' && 'Create Free Account & Sync'}
                </span>
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
          <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
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

      {/* 🚀 SIGNUP SUCCESSFUL - EMAIL CONFIRMATION POPUP MODAL */}
      {showConfirmationModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-lg liquid-glass-card rounded-3xl p-6 sm:p-8 border-orange-500/40 bg-white/95 dark:bg-slate-950/95 shadow-2xl space-y-6 text-center animate-scale-up">
            
            {/* Close Button */}
            <button
              onClick={() => setShowConfirmationModal(false)}
              className="absolute right-4 top-4 p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Glowing Icon Header */}
            <div className="space-y-3 pt-2">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500/20 via-amber-500/20 to-emerald-500/20 text-orange-600 dark:text-orange-400 flex items-center justify-center mx-auto border-2 border-orange-500/30 shadow-lg shadow-orange-500/20">
                <MailCheck className="w-8 h-8 text-orange-600 dark:text-orange-400 animate-pulse" />
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-xs font-black uppercase tracking-wider border border-emerald-500/30">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Signup Successful</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black font-display text-slate-900 dark:text-white">
                Please Confirm Your Email
              </h2>
            </div>

            {/* Instruction Details Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 text-left space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-xl">✉️</span>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                  We have dispatched a secure confirmation link to: <br />
                  <strong className="text-orange-600 dark:text-orange-400 font-bold break-all">{registeredEmail}</strong>
                </p>
              </div>

              <div className="pt-2 border-t border-slate-200 dark:border-white/10 flex items-start gap-3">
                <span className="text-xl">👉</span>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Please check your <strong>Inbox</strong> (or <em>Spam / Promotions</em> folder), click the verification link, and then <strong>log in right here</strong> with your password.
                </p>
              </div>
            </div>

            {/* Resend Status Banner */}
            {resendMsg && (
              <div className={`p-3 rounded-xl text-xs font-semibold animate-fade-in ${
                resendMsg.type === 'success'
                  ? 'bg-emerald-50 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30'
                  : 'bg-rose-50 dark:bg-rose-500/15 text-rose-700 dark:text-rose-300 border border-rose-500/30'
              }`}>
                {resendMsg.text}
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-3 pt-2">
              <button
                type="button"
                onClick={handleSwitchToLoginFromModal}
                className="liquid-glass-btn w-full py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-600 text-white font-extrabold text-sm shadow-xl shadow-orange-500/25 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Login Here After Confirmation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={handleResendConfirmation}
                disabled={resendLoading}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors disabled:opacity-50"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${resendLoading ? 'animate-spin' : ''}`} />
                <span>{resendLoading ? 'Resending Link...' : 'Didn’t receive email? Resend verification link'}</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default function AuthPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-md mx-auto px-4 py-20 text-center">
          <div className="w-12 h-12 border-3 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto" />
        </div>
      }
    >
      <AuthContent />
    </Suspense>
  );
}
