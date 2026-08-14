'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase, isSupabaseConfigured } from '@/lib/supabaseClient';
import { getStoredProfile, saveStoredProfile } from '@/lib/localDB';
import { UserProfile } from '@/lib/types';

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  targetYear?: number;
  avatarUrl?: string;
  isDemo?: boolean;
}

interface AuthContextType {
  user: AuthUser | null;
  profile: UserProfile;
  isLoading: boolean;
  isSupabaseConnected: boolean;
  signInWithEmail: (email: string, password: string) => Promise<{ error: string | null }>;
  signUpWithEmail: (email: string, password: string, name: string, targetYear: number) => Promise<{ error: string | null }>;
  signInWithGoogle: () => Promise<{ error: string | null }>;
  signOut: () => Promise<void>;
  updateUserProfile: (updates: Partial<UserProfile>) => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  profile: getStoredProfile(),
  isLoading: true,
  isSupabaseConnected: false,
  signInWithEmail: async () => ({ error: null }),
  signUpWithEmail: async () => ({ error: null }),
  signInWithGoogle: async () => ({ error: null }),
  signOut: async () => {},
  updateUserProfile: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [profile, setProfile] = useState<UserProfile>(getStoredProfile());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initial profile sync
    const stored = getStoredProfile();
    setProfile(stored);

    // Check if demo user or active session exists
    if (isSupabaseConfigured && supabase) {
      supabase.auth.getSession().then(({ data: { session } }) => {
        if (session?.user) {
          setUser({
            id: session.user.id,
            email: session.user.email || '',
            name: session.user.user_metadata?.full_name || session.user.email?.split('@')[0] || 'Aspirant',
            targetYear: session.user.user_metadata?.target_year || stored.targetYear,
            avatarUrl: session.user.user_metadata?.avatar_url,
          });
        } else {
          // Check local auth cache
          const localAuth = localStorage.getItem('upsc_auth_session');
          if (localAuth) {
            try {
              setUser(JSON.parse(localAuth));
            } catch {}
          }
        }
        setIsLoading(false);
      });

      const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
        if (session?.user) {
          const authUser: AuthUser = {
            id: session.user.id,
            email: session.user.email || '',
            name: session.user.user_metadata?.full_name || session.user.email?.split('@')[0] || 'Aspirant',
            targetYear: session.user.user_metadata?.target_year || stored.targetYear,
            avatarUrl: session.user.user_metadata?.avatar_url,
          };
          setUser(authUser);
          localStorage.setItem('upsc_auth_session', JSON.stringify(authUser));
        } else {
          setUser(null);
          localStorage.removeItem('upsc_auth_session');
        }
      });

      return () => {
        subscription.unsubscribe();
      };
    } else {
      // Offline / Local-first mode
      const localAuth = localStorage.getItem('upsc_auth_session');
      if (localAuth) {
        try {
          setUser(JSON.parse(localAuth));
        } catch {}
      }
      setIsLoading(false);
    }
  }, []);

  const signInWithEmail = async (email: string, password: string): Promise<{ error: string | null }> => {
    if (!email || !password) {
      return { error: 'Please provide both email and password.' };
    }

    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) return { error: error.message };
        if (data.user) {
          const authUser: AuthUser = {
            id: data.user.id,
            email: data.user.email || email,
            name: data.user.user_metadata?.full_name || email.split('@')[0],
            targetYear: data.user.user_metadata?.target_year || 2026,
          };
          setUser(authUser);
          localStorage.setItem('upsc_auth_session', JSON.stringify(authUser));
          saveStoredProfile({ email, name: authUser.name });
          setProfile(getStoredProfile());
        }
        return { error: null };
      } catch (err: any) {
        return { error: err.message || 'Authentication failed' };
      }
    } else {
      // Instant Offline / Local-First Demo Sign-In
      const authUser: AuthUser = {
        id: 'local_' + Math.random().toString(36).substring(2, 9),
        email,
        name: email.split('@')[0].replace(/[^a-zA-Z0-9]/g, ' ') || 'Aspirant',
        targetYear: profile.targetYear || 2026,
        isDemo: true,
      };
      setUser(authUser);
      localStorage.setItem('upsc_auth_session', JSON.stringify(authUser));
      saveStoredProfile({ email, name: authUser.name });
      setProfile(getStoredProfile());
      return { error: null };
    }
  };

  const signUpWithEmail = async (email: string, password: string, name: string, targetYear: number): Promise<{ error: string | null }> => {
    if (!email || !password || !name) {
      return { error: 'Please fill in all required fields.' };
    }

    if (password.length < 6) {
      return { error: 'Password must be at least 6 characters.' };
    }

    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: name,
              target_year: targetYear,
            },
          },
        });
        if (error) return { error: error.message };
        if (data.user) {
          const authUser: AuthUser = {
            id: data.user.id,
            email: data.user.email || email,
            name,
            targetYear,
          };
          setUser(authUser);
          localStorage.setItem('upsc_auth_session', JSON.stringify(authUser));
          saveStoredProfile({ email, name, targetYear });
          setProfile(getStoredProfile());
        }
        return { error: null };
      } catch (err: any) {
        return { error: err.message || 'Sign up failed' };
      }
    } else {
      // Local-first Sign Up
      const authUser: AuthUser = {
        id: 'local_' + Math.random().toString(36).substring(2, 9),
        email,
        name,
        targetYear,
        isDemo: true,
      };
      setUser(authUser);
      localStorage.setItem('upsc_auth_session', JSON.stringify(authUser));
      saveStoredProfile({ email, name, targetYear });
      setProfile(getStoredProfile());
      return { error: null };
    }
  };

  const signInWithGoogle = async (): Promise<{ error: string | null }> => {
    if (isSupabaseConfigured && supabase) {
      try {
        const { error } = await supabase.auth.signInWithOAuth({
          provider: 'google',
          options: {
            redirectTo: typeof window !== 'undefined' ? `${window.location.origin}/auth/callback` : undefined,
          },
        });
        if (error) return { error: error.message };
        return { error: null };
      } catch (err: any) {
        return { error: err.message || 'Google Auth failed' };
      }
    } else {
      // Demo Google Simulation
      const authUser: AuthUser = {
        id: 'google_demo_user',
        email: 'ias.aspirant@gmail.com',
        name: 'Aspirant (Google)',
        targetYear: 2026,
        isDemo: true,
      };
      setUser(authUser);
      localStorage.setItem('upsc_auth_session', JSON.stringify(authUser));
      saveStoredProfile({ email: authUser.email, name: authUser.name });
      setProfile(getStoredProfile());
      return { error: null };
    }
  };

  const signOut = async () => {
    if (isSupabaseConfigured && supabase) {
      try {
        await supabase.auth.signOut();
      } catch {}
    }
    setUser(null);
    localStorage.removeItem('upsc_auth_session');
  };

  const updateUserProfile = (updates: Partial<UserProfile>) => {
    const updated = saveStoredProfile(updates);
    setProfile(updated);
    if (user && updates.name) {
      setUser({ ...user, name: updates.name });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        isLoading,
        isSupabaseConnected: isSupabaseConfigured,
        signInWithEmail,
        signUpWithEmail,
        signInWithGoogle,
        signOut,
        updateUserProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
