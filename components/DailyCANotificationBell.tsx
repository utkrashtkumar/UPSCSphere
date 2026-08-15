'use client';

import React, { useState, useEffect } from 'react';
import { 
  Bell, 
  BellRing, 
  CheckCircle2, 
  Sparkles, 
  Send, 
  Clock, 
  ShieldCheck,
  Smartphone,
  X
} from 'lucide-react';
import { 
  isNotificationSupported, 
  getNotificationPermission, 
  enableDailyCANotifications, 
  disableDailyCANotifications, 
  triggerTestNotification,
  isDailyCAAlertEnabled
} from '@/lib/notificationManager';

export default function DailyCANotificationBell() {
  const [mounted, setMounted] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [isSupported, setIsSupported] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    setMounted(true);
    setIsSupported(isNotificationSupported());
    setIsEnabled(isDailyCAAlertEnabled());
  }, []);

  const handleEnable = async () => {
    setIsLoading(true);
    setStatusMessage(null);

    const result = await enableDailyCANotifications();
    setIsLoading(false);

    if (result.success) {
      setIsEnabled(true);
      setStatusMessage({ type: 'success', text: result.message });
      setTimeout(() => setStatusMessage(null), 5000);
    } else {
      setStatusMessage({ type: 'error', text: result.message });
      setTimeout(() => setStatusMessage(null), 6000);
    }
  };

  const handleDisable = () => {
    disableDailyCANotifications();
    setIsEnabled(false);
    setStatusMessage({ type: 'success', text: 'Daily Current Affairs alerts paused.' });
    setTimeout(() => setStatusMessage(null), 4000);
  };

  const handleSendTest = async () => {
    setIsLoading(true);
    const result = await triggerTestNotification();
    setIsLoading(false);

    if (result.success) {
      setIsEnabled(true);
      setStatusMessage({ type: 'success', text: result.message });
      setTimeout(() => setStatusMessage(null), 4000);
    } else {
      setStatusMessage({ type: 'error', text: result.message });
      setTimeout(() => setStatusMessage(null), 5000);
    }
  };

  if (!mounted || !isSupported) return null;

  return (
    <div className="liquid-glass-card rounded-3xl p-5 sm:p-6 border-orange-500/30 shadow-lg relative overflow-hidden">
      {/* Running Shimmer Stream */}
      <div className="running-shimmer-stream opacity-40" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-5">
        
        {/* Left Side: Info */}
        <div className="flex items-center gap-4 text-center md:text-left flex-col md:flex-row">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500/20 via-amber-500/20 to-emerald-500/20 text-orange-600 dark:text-orange-400 flex items-center justify-center border border-orange-500/30 shadow-inner flex-shrink-0 animate-pulse">
            {isEnabled ? <BellRing className="w-6 h-6 text-orange-500" /> : <Bell className="w-6 h-6 text-orange-500" />}
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 justify-center md:justify-start flex-wrap">
              <span className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white">
                Daily Morning Current Affairs Alert
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-[11px] font-bold border border-orange-500/20">
                <Clock className="w-3 h-3" /> 07:30 AM IST
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 max-w-xl">
              Get notified every morning the moment today&apos;s 20 UPSC Prelims MCQs from The Hindu, PIB & Indian Express are published.
            </p>
          </div>
        </div>

        {/* Right Side: Action Buttons */}
        <div className="flex items-center gap-2.5 flex-wrap justify-center w-full md:w-auto">
          {isEnabled ? (
            <>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 text-xs font-bold border border-emerald-500/30">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Daily Alerts Active</span>
              </div>

              <button
                type="button"
                onClick={handleSendTest}
                disabled={isLoading}
                className="liquid-glass-btn px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold border border-slate-300 dark:border-white/10 flex items-center gap-1.5 transition-all"
              >
                <Send className="w-3.5 h-3.5 text-blue-500" />
                <span>Send Test Alert</span>
              </button>

              <button
                type="button"
                onClick={handleDisable}
                className="p-2 rounded-xl text-slate-400 hover:text-rose-500 hover:bg-rose-500/10 transition-colors"
                title="Pause notifications"
              >
                <X className="w-4 h-4" />
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={handleEnable}
                disabled={isLoading}
                className="liquid-glass-btn flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-600 text-white font-extrabold text-xs shadow-lg shadow-orange-500/20 hover:scale-105 transition-all disabled:opacity-50"
              >
                <BellRing className="w-3.5 h-3.5 fill-white" />
                <span>{isLoading ? 'Enabling...' : 'Enable Daily Alerts'}</span>
              </button>

              <button
                type="button"
                onClick={handleSendTest}
                disabled={isLoading}
                className="px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold border border-slate-200 dark:border-white/5 flex items-center gap-1.5 transition-all"
              >
                <Smartphone className="w-3.5 h-3.5 text-orange-500" />
                <span>Test Alert</span>
              </button>
            </>
          )}
        </div>

      </div>

      {/* Status / Feedback Banner */}
      {statusMessage && (
        <div className={`mt-3 p-3 rounded-xl text-xs font-bold flex items-center gap-2 animate-fade-in ${
          statusMessage.type === 'success'
            ? 'bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30'
            : 'bg-rose-500/15 text-rose-800 dark:text-rose-300 border border-rose-500/30'
        }`}>
          {statusMessage.type === 'success' ? (
            <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
          ) : (
            <Sparkles className="w-4 h-4 text-rose-500 flex-shrink-0" />
          )}
          <span>{statusMessage.text}</span>
        </div>
      )}
    </div>
  );
}
