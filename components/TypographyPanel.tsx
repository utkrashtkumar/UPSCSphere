'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Type, Minus, Plus, Check, X } from 'lucide-react';
import { useTypography, fontFamilyOptions, fontSizeSteps, fontSizeLabels } from '@/lib/typographyContext';

export default function TypographyPanel() {
  const { fontFamily, fontSize, setFontFamily, setFontSize, increaseFontSize, decreaseFontSize } = useTypography();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const currentIdx = fontSizeSteps.indexOf(fontSize);
  const canDecrease = currentIdx > 0;
  const canIncrease = currentIdx < fontSizeSteps.length - 1;

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  return (
    <div className="relative" ref={panelRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Typography settings"
        title="Adjust text size and font"
        className={`p-2 rounded-lg text-xs font-medium transition-all flex items-center gap-1 ${
          open
            ? 'bg-slate-100 dark:bg-white/15 text-slate-900 dark:text-white'
            : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10'
        }`}
      >
        <Type className="w-4 h-4" />
        <span className="text-[11px] font-mono opacity-80 hidden md:inline">{fontSize}px</span>
      </button>

      {/* Minimal Dropdown Panel */}
      {open && (
        <div className="absolute right-0 mt-2 w-64 rounded-xl shadow-xl z-50 animate-slide-up overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 p-3.5 space-y-4">
          {/* Header */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-white/10">
            <span className="text-xs font-semibold text-slate-900 dark:text-white flex items-center gap-1.5">
              <Type className="w-3.5 h-3.5 text-amber-500" />
              Font & Size
            </span>
            <button
              onClick={() => setOpen(false)}
              className="p-1 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Font Size Stepper */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-medium">
              <span>Size</span>
              <span className="font-mono text-slate-900 dark:text-white font-semibold">
                {fontSize}px ({fontSizeLabels[fontSize]})
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={decreaseFontSize}
                disabled={!canDecrease}
                className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                title="Decrease font size"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>

              {/* Progress dots */}
              <div className="flex-1 flex items-center gap-1 px-1">
                {fontSizeSteps.map((step) => (
                  <button
                    key={step}
                    onClick={() => setFontSize(step)}
                    className={`flex-1 h-1.5 rounded-full transition-all ${
                      step <= fontSize
                        ? 'bg-amber-500'
                        : 'bg-slate-200 dark:bg-white/20'
                    }`}
                    title={`${step}px`}
                  />
                ))}
              </div>

              <button
                onClick={increaseFontSize}
                disabled={!canIncrease}
                className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                title="Increase font size"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Font Family Selector */}
          <div className="space-y-1.5">
            <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium block">
              Style
            </span>

            <div className="grid grid-cols-2 gap-1.5">
              {fontFamilyOptions.map((opt) => {
                const isSelected = fontFamily === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => setFontFamily(opt.id)}
                    className={`flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs transition-all ${
                      isSelected
                        ? 'bg-amber-500/10 dark:bg-amber-400/20 text-amber-600 dark:text-amber-300 font-semibold border border-amber-500/30'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <span style={{ fontFamily: opt.stack }} className="truncate">
                      {opt.label.split(' ')[0]}
                    </span>
                    {isSelected && <Check className="w-3 h-3 text-amber-500 shrink-0 ml-1" />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
