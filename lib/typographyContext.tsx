'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

export type FontFamily = 
  | 'inter'
  | 'sora'
  | 'roboto'
  | 'nunito'
  | 'lora'
  | 'jetbrains';

export const fontFamilyOptions: { id: FontFamily; label: string; stack: string; preview: string }[] = [
  { id: 'inter',      label: 'Inter (Clean Sans)',        stack: "'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif",           preview: 'Aa' },
  { id: 'sora',       label: 'Sora (Geometric)',         stack: "'Sora', system-ui, -apple-system, BlinkMacSystemFont, sans-serif",            preview: 'Aa' },
  { id: 'roboto',     label: 'Roboto (Modern)',           stack: "'Roboto', system-ui, -apple-system, BlinkMacSystemFont, sans-serif",          preview: 'Aa' },
  { id: 'nunito',     label: 'Nunito (Rounded)',          stack: "'Nunito', system-ui, -apple-system, BlinkMacSystemFont, sans-serif",          preview: 'Aa' },
  { id: 'lora',       label: 'Lora (Serif / Book)',       stack: "'Lora', Georgia, 'Times New Roman', serif",                                    preview: 'Aa' },
  { id: 'jetbrains',  label: 'JetBrains (Monospace)',     stack: "'JetBrains Mono', Consolas, Monaco, monospace",                                 preview: 'Aa' },
];

export const fontSizeSteps = [12, 13, 14, 15, 16, 17, 18, 20, 22, 24];
export const fontSizeLabels: Record<number, string> = {
  12: 'XS', 13: 'S', 14: 'S+', 15: 'M', 16: 'M+', 17: 'L', 18: 'L+', 20: 'XL', 22: 'XXL', 24: 'Max',
};

interface TypographyContextType {
  fontFamily: FontFamily;
  fontSize: number;
  setFontFamily: (family: FontFamily) => void;
  setFontSize: (size: number) => void;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
}

const TypographyContext = createContext<TypographyContextType>({
  fontFamily: 'inter',
  fontSize: 15,
  setFontFamily: () => {},
  setFontSize: () => {},
  increaseFontSize: () => {},
  decreaseFontSize: () => {},
});

export function TypographyProvider({ children }: { children: React.ReactNode }) {
  const [fontFamily, setFontFamilyState] = useState<FontFamily>('inter');
  const [fontSize, setFontSizeState] = useState<number>(15);

  const applyTypography = (family: FontFamily, size: number) => {
    if (typeof document === 'undefined') return;

    const option = fontFamilyOptions.find(f => f.id === family) || fontFamilyOptions[0];
    const root = document.documentElement;

    // Set CSS custom properties
    root.style.setProperty('--font-body', option.stack);
    root.style.setProperty('--font-display', option.stack);
    root.style.fontSize = `${size}px`;

    // Direct body styles for immediate override
    if (document.body) {
      document.body.style.fontFamily = option.stack;
    }
  };

  useEffect(() => {
    try {
      const savedFamily = localStorage.getItem('upsc_font_family') as FontFamily | null;
      const savedSize = localStorage.getItem('upsc_font_size');
      
      const family = savedFamily && fontFamilyOptions.some(f => f.id === savedFamily) 
        ? savedFamily 
        : 'inter';
      const size = savedSize && !isNaN(Number(savedSize)) ? Number(savedSize) : 15;
      
      setFontFamilyState(family);
      setFontSizeState(size);
      applyTypography(family, size);
    } catch {
      applyTypography('inter', 15);
    }
  }, []);

  const setFontFamily = (family: FontFamily) => {
    setFontFamilyState(family);
    applyTypography(family, fontSize);
    try { localStorage.setItem('upsc_font_family', family); } catch {}
  };

  const setFontSize = (size: number) => {
    setFontSizeState(size);
    applyTypography(fontFamily, size);
    try { localStorage.setItem('upsc_font_size', String(size)); } catch {}
  };

  const increaseFontSize = () => {
    const idx = fontSizeSteps.indexOf(fontSize);
    if (idx < fontSizeSteps.length - 1) setFontSize(fontSizeSteps[idx + 1]);
  };

  const decreaseFontSize = () => {
    const idx = fontSizeSteps.indexOf(fontSize);
    if (idx > 0) setFontSize(fontSizeSteps[idx - 1]);
  };

  return (
    <TypographyContext.Provider
      value={{ fontFamily, fontSize, setFontFamily, setFontSize, increaseFontSize, decreaseFontSize }}
    >
      {children}
    </TypographyContext.Provider>
  );
}

export function useTypography() {
  return useContext(TypographyContext);
}
