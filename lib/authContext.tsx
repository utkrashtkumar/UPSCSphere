'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase, isSupabaseConfigured } from '@/lib/supabaseClient';
import { getStoredProfile, saveStoredProfile, clearStoredProfile, defaultProfile } from '@/lib/localDB';
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
  signUpWithEmail: (email: string, password: string, name: string, targetYear: number) => Promise<{ error: string | null; requiresConfirmation?: boolean }>;
  resendConfirmationEmail: (email: string) => Promise<{ error: string | null; message?: string }>;
  signInWithMagicLink: (email: string) => Promise<{ error: string | null; message?: string }>;
  signInWithGoogle: () => Promise<{ error: string | null }>;
  resetPasswordForEmail: (email: string) => Promise<{ error: string | null; message?: string }>;
  updateUserPassword: (newPassword: string) => Promise<{ error: string | null }>;
  signOut: () => Promise<void>;
  updateUserProfile: (updates: Partial<UserProfile>) => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  profile: defaultProfile,
  isLoading: true,
  isSupabaseConnected: false,
  signInWithEmail: async () => ({ error: null }),
  signUpWithEmail: async () => ({ error: null }),
  resendConfirmationEmail: async () => ({ error: null }),
  signInWithMagicLink: async () => ({ error: null }),
  signInWithGoogle: async () => ({ error: null }),
  resetPasswordForEmail: async () => ({ error: null }),
  updateUserPassword: async () => ({ error: null }),
  signOut: async () => {},
  updateUserProfile: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [profile, setProfile] = useState<UserProfile>(defaultProfile);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Helper to fetch full DB profile for authenticated user
    const fetchSupabaseProfile = async (userId: string, emailFallback?: string) => {
      if (!isSupabaseConfigured || !supabase) return;
      try {
        const { data: dbProfile } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', userId)
          .maybeSingle();

        if (dbProfile) {
          const merged: UserProfile = {
            ...defaultProfile,
            name: dbProfile.name || emailFallback?.split('@')[0] || 'Aspirant',
            email: dbProfile.email || emailFallback || '',
            targetYear: dbProfile.target_year || 2027,
            optionalSubject: dbProfile.optional_subject || 'General Studies',
            streakCount: dbProfile.streak_count ?? 0,
            totalQuizzesTaken: dbProfile.total_quizzes ?? 0,
            averageScore: dbProfile.average_score ?? 0,
            highestScore: dbProfile.highest_score ?? 0,
            avatarUrl: dbProfile.avatar_url || '',
            dob: dbProfile.dob || '',
            homeTown: dbProfile.home_town || '',
            homeState: dbProfile.home_state || '',
            graduationDegree: dbProfile.graduation_degree || '',
            graduationCollege: dbProfile.graduation_college || '',
            graduationCity: dbProfile.graduation_city || '',
            graduationYear: dbProfile.graduation_year || undefined,
            postGraduationDegree: dbProfile.post_graduation_degree || '',
            postGraduationCollege: dbProfile.post_graduation_college || '',
            postGraduationYear: dbProfile.post_graduation_year || undefined,
            attemptNumber: dbProfile.attempt_number || 1,
            medium: dbProfile.medium || 'English',
          };
          saveStoredProfile(merged);
          setProfile(merged);
        }
      } catch (e) {
        console.warn('Could not fetch remote profile:', e);
      }
    };

    // Check active session
    if (isSupabaseConfigured && supabase) {
      supabase.auth.getSession().then(({ data: { session } }) => {
        if (session?.user) {
          const authUser: AuthUser = {
            id: session.user.id,
            email: session.user.email || '',
            name: session.user.user_metadata?.full_name || session.user.email?.split('@')[0] || 'Aspirant',
            targetYear: session.user.user_metadata?.target_year || 2027,
            avatarUrl: session.user.user_metadata?.avatar_url,
          };
          setUser(authUser);
          localStorage.setItem('upsc_auth_session', JSON.stringify(authUser));
          fetchSupabaseProfile(session.user.id, session.user.email);
        } else {
          // No active Supabase session — user is definitely logged out
          setUser(null);
          setProfile(defaultProfile);
          clearStoredProfile();
        }
        setIsLoading(false);
      }).catch(() => {
        setUser(null);
        setProfile(defaultProfile);
        clearStoredProfile();
        setIsLoading(false);
      });

      const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
        if (session?.user) {
          const authUser: AuthUser = {
            id: session.user.id,
            email: session.user.email || '',
            name: session.user.user_metadata?.full_name || session.user.email?.split('@')[0] || 'Aspirant',
            targetYear: session.user.user_metadata?.target_year || 2027,
            avatarUrl: session.user.user_metadata?.avatar_url,
          };
          setUser(authUser);
          localStorage.setItem('upsc_auth_session', JSON.stringify(authUser));
          fetchSupabaseProfile(session.user.id, session.user.email);
        } else {
          // Session expired or logged out
          setUser(null);
          setProfile(defaultProfile);
          clearStoredProfile();
        }
      });

      return () => {
        subscription.unsubscribe();
      };
    } else {
      // Offline / Local-first mode (when Supabase is not configured in environment)
      const localAuth = localStorage.getItem('upsc_auth_session');
      if (localAuth) {
        try {
          setUser(JSON.parse(localAuth));
          setProfile(getStoredProfile());
        } catch {
          setUser(null);
          setProfile(defaultProfile);
        }
      } else {
        setUser(null);
        setProfile(defaultProfile);
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
            targetYear: data.user.user_metadata?.target_year || 2027,
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
        targetYear: profile.targetYear || 2027,
        isDemo: true,
      };
      setUser(authUser);
      localStorage.setItem('upsc_auth_session', JSON.stringify(authUser));
      saveStoredProfile({ email, name: authUser.name });
      setProfile(getStoredProfile());
      return { error: null };
    }
  };

  const signUpWithEmail = async (email: string, password: string, name: string, targetYear: number): Promise<{ error: string | null; requiresConfirmation?: boolean }> => {
    if (!email || !password || !name) {
      return { error: 'Please fill in all required fields.' };
    }

    if (password.length < 6) {
      return { error: 'Password must be at least 6 characters.' };
    }

    if (isSupabaseConfigured && supabase) {
      try {
        const emailRedirectTo = typeof window !== 'undefined' ? `${window.location.origin}/auth/callback` : undefined;
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: name,
              target_year: targetYear,
            },
            emailRedirectTo,
          },
        });

        if (error) return { error: error.message };

        // If email confirmation is enabled on Supabase, data.session will be null and user needs confirmation
        if (data.user && !data.session) {
          saveStoredProfile({ email, name, targetYear });
          return { error: null, requiresConfirmation: true };
        }

        if (data.user && data.session) {
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
        return { error: null, requiresConfirmation: false };
      } catch (err: any) {
        return { error: err.message || 'Sign up failed' };
      }
    } else {
      // Local/offline Sign Up
      return { error: null, requiresConfirmation: true };
    }
  };

  const resendConfirmationEmail = async (email: string): Promise<{ error: string | null; message?: string }> => {
    if (!email) {
      return { error: 'Email address is required to resend confirmation.' };
    }
    if (isSupabaseConfigured && supabase) {
      try {
        const emailRedirectTo = typeof window !== 'undefined' ? `${window.location.origin}/auth/callback` : undefined;
        const { error } = await supabase.auth.resend({
          type: 'signup',
          email,
          options: {
            emailRedirectTo,
          },
        });
        if (error) return { error: error.message };
        return { error: null, message: `Verification email resent to ${email}!` };
      } catch (err: any) {
        return { error: err.message || 'Failed to resend confirmation email.' };
      }
    } else {
      return { error: null, message: `Verification email simulated for ${email}!` };
    }
  };

  const signInWithMagicLink = async (email: string): Promise<{ error: string | null; message?: string }> => {
    if (!email) {
      return { error: 'Please enter your email address to receive a magic login link.' };
    }

    if (isSupabaseConfigured && supabase) {
      try {
        const emailRedirectTo = typeof window !== 'undefined' ? `${window.location.origin}/auth/callback` : undefined;
        const { error } = await supabase.auth.signInWithOtp({
          email,
          options: {
            emailRedirectTo,
          },
        });
        if (error) return { error: error.message };
        return { error: null, message: `Magic login link dispatched to ${email}! Click the link in your inbox to sign in instantly.` };
      } catch (err: any) {
        return { error: err.message || 'Failed to send magic link.' };
      }
    } else {
      // Local / Demo Simulation
      const authUser: AuthUser = {
        id: 'magic_' + Math.random().toString(36).substring(2, 9),
        email,
        name: email.split('@')[0] || 'Aspirant',
        targetYear: 2027,
        isDemo: true,
      };
      setUser(authUser);
      localStorage.setItem('upsc_auth_session', JSON.stringify(authUser));
      saveStoredProfile({ email, name: authUser.name });
      setProfile(getStoredProfile());
      return { error: null, message: `Magic login link simulated for ${email}! Signed in successfully.` };
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
        targetYear: 2027,
        isDemo: true,
      };
      setUser(authUser);
      localStorage.setItem('upsc_auth_session', JSON.stringify(authUser));
      saveStoredProfile({ email: authUser.email, name: authUser.name });
      setProfile(getStoredProfile());
      return { error: null };
    }
  };

  const resetPasswordForEmail = async (email: string): Promise<{ error: string | null; message?: string }> => {
    if (!email) {
      return { error: 'Please enter your registered email address.' };
    }

    if (isSupabaseConfigured && supabase) {
      try {
        const redirectTo = typeof window !== 'undefined' ? `${window.location.origin}/auth/reset-password` : undefined;
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
          redirectTo,
        });
        if (error) return { error: error.message };
        return { error: null, message: `A secure password reset link has been sent to ${email}. Please check your inbox and spam folder.` };
      } catch (err: any) {
        return { error: err.message || 'Failed to send reset link.' };
      }
    } else {
      // Offline/Local Simulation
      return {
        error: null,
        message: `A password reset link has been simulated for ${email}. (In production with Supabase, a verification link is dispatched to your mailbox).`,
      };
    }
  };

  const updateUserPassword = async (newPassword: string): Promise<{ error: string | null }> => {
    if (!newPassword || newPassword.length < 6) {
      return { error: 'Password must be at least 6 characters long.' };
    }

    if (isSupabaseConfigured && supabase) {
      try {
        const { error } = await supabase.auth.updateUser({
          password: newPassword,
        });
        if (error) return { error: error.message };
        return { error: null };
      } catch (err: any) {
        return { error: err.message || 'Failed to update password.' };
      }
    } else {
      return { error: null };
    }
  };

  const signOut = async () => {
    if (isSupabaseConfigured && supabase) {
      try {
        await supabase.auth.signOut();
      } catch (e) {
        console.warn('Supabase signOut notice:', e);
      }
    }
    setUser(null);
    setProfile(defaultProfile);
    clearStoredProfile();
  };

  const updateUserProfile = async (updates: Partial<UserProfile>) => {
    const updated = saveStoredProfile(updates);
    setProfile(updated);
    if (user && updates.name) {
      setUser({ ...user, name: updates.name });
    }

    // Sync to Supabase cloud database if user is logged in
    if (isSupabaseConfigured && supabase && user?.id) {
      try {
        const payload: Record<string, any> = {
          updated_at: new Date().toISOString(),
        };
        if (updates.name !== undefined) payload.name = updates.name;
        if (updates.targetYear !== undefined) payload.target_year = updates.targetYear;
        if (updates.optionalSubject !== undefined) payload.optional_subject = updates.optionalSubject;
        if (updates.avatarUrl !== undefined) payload.avatar_url = updates.avatarUrl;
        if (updates.dob !== undefined) payload.dob = updates.dob || null;
        if (updates.homeTown !== undefined) payload.home_town = updates.homeTown;
        if (updates.homeState !== undefined) payload.home_state = updates.homeState;
        if (updates.graduationDegree !== undefined) payload.graduation_degree = updates.graduationDegree;
        if (updates.graduationCollege !== undefined) payload.graduation_college = updates.graduationCollege;
        if (updates.graduationCity !== undefined) payload.graduation_city = updates.graduationCity;
        if (updates.graduationYear !== undefined) payload.graduation_year = updates.graduationYear || null;
        if (updates.postGraduationDegree !== undefined) payload.post_graduation_degree = updates.postGraduationDegree;
        if (updates.postGraduationCollege !== undefined) payload.post_graduation_college = updates.postGraduationCollege;
        if (updates.postGraduationYear !== undefined) payload.post_graduation_year = updates.postGraduationYear || null;
        if (updates.attemptNumber !== undefined) payload.attempt_number = updates.attemptNumber;
        if (updates.medium !== undefined) payload.medium = updates.medium;

        await supabase.from('profiles').update(payload).eq('id', user.id);
      } catch (err) {
        console.warn('Could not sync profile update to Supabase:', err);
      }
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
        resendConfirmationEmail,
        signInWithMagicLink,
        signInWithGoogle,
        resetPasswordForEmail,
        updateUserPassword,
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
