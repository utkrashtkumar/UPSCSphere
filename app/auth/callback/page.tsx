'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';
import { saveStoredProfile } from '@/lib/localDB';

export default function AuthCallbackPage() {
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    async function handleAuthCallback() {
      if (!supabase) {
        router.push('/');
        return;
      }

      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        if (error) {
          setErrorMsg(error.message);
          return;
        }

        if (session?.user) {
          const name = session.user.user_metadata?.full_name || session.user.email?.split('@')[0] || 'Aspirant';
          const email = session.user.email || '';
          const targetYear = session.user.user_metadata?.target_year || 2027;
          const avatarUrl = session.user.user_metadata?.avatar_url || session.user.user_metadata?.picture || '';

          localStorage.setItem(
            'upsc_auth_session',
            JSON.stringify({
              id: session.user.id,
              email,
              name,
              targetYear,
              avatarUrl,
            })
          );

          saveStoredProfile({ email, name, targetYear, avatarUrl });
          router.push('/');
        } else {
          router.push('/');
        }
      } catch (err: any) {
        setErrorMsg(err.message || 'Authentication failed');
      }
    }

    handleAuthCallback();
  }, [router]);

  if (errorMsg) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-4 text-center">
        <div className="p-6 rounded-3xl liquid-glass-card border-rose-500/30 max-w-md space-y-4">
          <span className="text-3xl">⚠️</span>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Authentication Failed</h2>
          <p className="text-xs text-rose-600 dark:text-rose-400">{errorMsg}</p>
          <button
            onClick={() => router.push('/auth')}
            className="px-5 py-2.5 rounded-xl bg-orange-600 text-white font-bold text-xs hover:bg-orange-700"
          >
            Return to Sign In
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-4 text-center">
      <div className="p-8 rounded-3xl liquid-glass-card border-orange-500/30 max-w-md space-y-4 shadow-xl">
        <div className="w-10 h-10 border-3 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto" />
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">Authenticating with UPSCSphere...</h2>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Securely synchronizing your profile, mock test history, and benchmarks.
        </p>
      </div>
    </div>
  );
}
