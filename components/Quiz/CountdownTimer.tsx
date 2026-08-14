'use client';

import React, { useEffect, useState } from 'react';
import { Timer, AlertTriangle, Pause, Play } from 'lucide-react';
import { formatTime } from '@/lib/scoringEngine';

interface CountdownTimerProps {
  initialMinutes: number | null; // null = untimed
  onTimeExpire?: () => void;
  onTick?: (secondsRemaining: number) => void;
}

export default function CountdownTimer({
  initialMinutes,
  onTimeExpire,
  onTick,
}: CountdownTimerProps) {
  const isUntimed = initialMinutes === null || initialMinutes <= 0;
  const [secondsRemaining, setSecondsRemaining] = useState(
    isUntimed ? 0 : initialMinutes * 60
  );
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isUntimed) {
      // Stopwatch mode: count upwards
      const interval = setInterval(() => {
        if (!isPaused) {
          setSecondsRemaining((prev) => {
            const next = prev + 1;
            if (onTick) onTick(next);
            return next;
          });
        }
      }, 1000);
      return () => clearInterval(interval);
    } else {
      // Countdown mode: count downwards
      const interval = setInterval(() => {
        if (!isPaused) {
          setSecondsRemaining((prev) => {
            if (prev <= 1) {
              clearInterval(interval);
              if (onTimeExpire) onTimeExpire();
              return 0;
            }
            const next = prev - 1;
            if (onTick) onTick(next);
            return next;
          });
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isUntimed, isPaused, onTimeExpire, onTick]);

  const isLowTime = !isUntimed && secondsRemaining <= 300; // <5 min
  const isCriticalTime = !isUntimed && secondsRemaining <= 60; // <1 min

  return (
    <div
      className={`flex items-center gap-2.5 px-4 py-2 rounded-xl border transition-all ${
        isCriticalTime
          ? 'bg-rose-500/20 border-rose-500/50 text-rose-300 animate-pulse'
          : isLowTime
          ? 'bg-amber-500/20 border-amber-500/50 text-amber-300'
          : 'bg-slate-800/90 border-slate-700 text-slate-200'
      }`}
    >
      <Timer className={`w-4 h-4 ${isCriticalTime ? 'text-rose-400' : isLowTime ? 'text-amber-400' : 'text-slate-400'}`} />
      
      <div className="flex flex-col">
        <span className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase">
          {isUntimed ? 'Elapsed Time' : 'Time Remaining'}
        </span>
        <span className="font-mono font-bold text-sm tracking-tight">
          {formatTime(secondsRemaining)}
        </span>
      </div>

      {/* Quick Pause/Resume button for practice */}
      <button
        onClick={() => setIsPaused(!isPaused)}
        className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
        title={isPaused ? 'Resume' : 'Pause'}
      >
        {isPaused ? <Play className="w-3.5 h-3.5 text-emerald-400" /> : <Pause className="w-3.5 h-3.5" />}
      </button>

      {isCriticalTime && (
        <AlertTriangle className="w-4 h-4 text-rose-400 animate-bounce" />
      )}
    </div>
  );
}
