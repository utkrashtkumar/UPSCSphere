'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface CookiePreferences {
  strictlyNecessary: boolean; // Always true for authentication, CSRF, security
  functional: boolean;        // Theme (dark/light), typography, exam sound effects
  analytics: boolean;         // Anonymous mock timing, speed accuracy metrics
  notifications: boolean;     // 07:30 AM Daily Current Affairs alert tokens
  consentGiven: boolean;      // Whether user has interacted with the banner
  consentTimestamp: string;
}

export const defaultCookiePreferences: CookiePreferences = {
  strictlyNecessary: true,
  functional: true,
  analytics: true,
  notifications: true,
  consentGiven: false,
  consentTimestamp: '',
};

interface CookieContextType {
  preferences: CookiePreferences;
  showBanner: boolean;
  isModalOpen: boolean;
  openPreferencesModal: () => void;
  closePreferencesModal: () => void;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  savePreferences: (updates: Partial<CookiePreferences>) => void;
}

const CookieContext = createContext<CookieContextType | undefined>(undefined);

const COOKIE_STORAGE_KEY = 'upsc_cookie_preferences';

export function CookieProvider({ children }: { children: React.ReactNode }) {
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultCookiePreferences);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(COOKIE_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setPreferences({
          ...defaultCookiePreferences,
          ...parsed,
          strictlyNecessary: true, // Strictly necessary must always be active
        });
      }
    } catch (e) {
      console.warn('Could not read cookie preferences from localStorage', e);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  const persistPreferences = (prefs: CookiePreferences) => {
    setPreferences(prefs);
    try {
      localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(prefs));
    } catch (e) {
      console.error('Failed to save cookie preferences', e);
    }
  };

  const acceptAll = () => {
    const allAccepted: CookiePreferences = {
      strictlyNecessary: true,
      functional: true,
      analytics: true,
      notifications: true,
      consentGiven: true,
      consentTimestamp: new Date().toISOString(),
    };
    persistPreferences(allAccepted);
    setIsModalOpen(false);
  };

  const rejectNonEssential = () => {
    const essentialOnly: CookiePreferences = {
      strictlyNecessary: true,
      functional: false,
      analytics: false,
      notifications: false,
      consentGiven: true,
      consentTimestamp: new Date().toISOString(),
    };
    persistPreferences(essentialOnly);
    setIsModalOpen(false);
  };

  const savePreferences = (updates: Partial<CookiePreferences>) => {
    const newPrefs: CookiePreferences = {
      ...preferences,
      ...updates,
      strictlyNecessary: true,
      consentGiven: true,
      consentTimestamp: new Date().toISOString(),
    };
    persistPreferences(newPrefs);
    setIsModalOpen(false);
  };

  const openPreferencesModal = () => setIsModalOpen(true);
  const closePreferencesModal = () => setIsModalOpen(false);

  const showBanner = isLoaded && !preferences.consentGiven;

  return (
    <CookieContext.Provider
      value={{
        preferences,
        showBanner,
        isModalOpen,
        openPreferencesModal,
        closePreferencesModal,
        acceptAll,
        rejectNonEssential,
        savePreferences,
      }}
    >
      {children}
    </CookieContext.Provider>
  );
}

export function useCookies() {
  const context = useContext(CookieContext);
  if (!context) {
    throw new Error('useCookies must be used within a CookieProvider');
  }
  return context;
}
