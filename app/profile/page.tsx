'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { 
  User, 
  Mail, 
  Calendar, 
  MapPin, 
  GraduationCap, 
  BookOpen, 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  Save, 
  RotateCcw, 
  Flame, 
  Target, 
  Compass, 
  ArrowLeft, 
  ChevronRight,
  School,
  Building,
  Languages
} from 'lucide-react';
import { useAuth } from '@/lib/authContext';
import { UserProfile } from '@/lib/types';
import DailyCANotificationBell from '@/components/DailyCANotificationBell';

const INDIAN_STATES = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
  'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
  'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
  'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
  'Andaman and Nicobar', 'Chandigarh', 'Delhi (NCT)', 'Jammu and Kashmir',
  'Ladakh', 'Puducherry'
];

const POPULAR_OPTIONALS = [
  'General Studies (Prelims Focus)',
  'Political Science & International Relations (PSIR)',
  'Sociology',
  'Geography',
  'History',
  'Public Administration',
  'Anthropology',
  'Law',
  'Economics',
  'Philosophy',
  'Psychology',
  'Commerce & Accountancy',
  'Management',
  'Mathematics',
  'Physics',
  'Chemistry',
  'Agriculture',
  'Animal Husbandry & Vet Science',
  'Civil Engineering',
  'Electrical Engineering',
  'Mechanical Engineering',
  'Medical Science',
  'Hindi Literature',
  'Sanskrit Literature',
  'English Literature',
  'Other / Interdisciplinary'
];

const AVATAR_OPTIONS = ['👨‍🎓', '👩‍🎓', '🏛️', '🇮🇳', '🎯', '📚', '⚡', '👑'];

export default function ProfilePage() {
  const router = useRouter();
  const { user, profile, updateUserProfile, isSupabaseConnected, isLoading, signOut } = useAuth();

  const [formData, setFormData] = useState<UserProfile>(profile);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState<'personal' | 'upsc' | 'academic'>('personal');

  // Automatic redirect if user is not authenticated
  useEffect(() => {
    if (!isLoading && !user) {
      router.replace('/auth?redirect=/profile');
    }
  }, [isLoading, user, router]);

  useEffect(() => {
    if (profile && user) {
      setFormData(profile);
    }
  }, [profile, user]);

  const handleChange = (field: keyof UserProfile, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      router.replace('/auth?redirect=/profile');
      return;
    }
    setIsSaving(true);
    setSaveSuccess(false);

    try {
      await updateUserProfile(formData);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 4000);
    } catch (err) {
      console.error('Failed to save profile:', err);
    } finally {
      setIsSaving(false);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    router.replace('/auth');
  };

  // 1. Loading Skeleton State
  if (isLoading) {
    return (
      <div className="w-full px-4 py-20 max-w-4xl mx-auto text-center space-y-6 animate-pulse">
        <div className="w-16 h-16 rounded-2xl bg-orange-500/20 mx-auto flex items-center justify-center border border-orange-500/30">
          <div className="w-8 h-8 border-3 border-orange-500 border-t-transparent rounded-full animate-spin" />
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-black text-slate-900 dark:text-white">Verifying Secure Aspirant Session...</h2>
          <p className="text-xs text-slate-500">Checking authenticated cloud credentials</p>
        </div>
      </div>
    );
  }

  // 2. Unauthenticated Security Barrier (Locked State)
  if (!user) {
    return (
      <div className="w-full px-4 py-16 max-w-md mx-auto text-center space-y-6 animate-fade-in">
        <div className="liquid-glass-card rounded-3xl p-8 border-orange-500/30 shadow-2xl space-y-5">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 text-orange-600 dark:text-orange-400 flex items-center justify-center mx-auto border-2 border-orange-500/30 shadow-lg">
            <ShieldCheck className="w-8 h-8 text-orange-500" />
          </div>
          
          <div className="space-y-2">
            <h2 className="text-2xl font-black font-display text-slate-900 dark:text-white">
              Authentication Required
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Your profile contains private demographic, academic, and exam milestone details. Please sign in to access or update your aspirant profile.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <Link
              href="/auth?redirect=/profile"
              className="liquid-glass-btn w-full py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-600 text-white font-extrabold text-sm shadow-xl shadow-orange-500/25 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Sign In to Access Profile</span>
              <ChevronRight className="w-4 h-4" />
            </Link>

            <Link
              href="/"
              className="inline-flex items-center justify-center w-full py-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Calculate Profile Completeness Percentage
  const calculateCompleteness = () => {
    const fieldsToCheck: (keyof UserProfile)[] = [
      'name', 'email', 'dob', 'homeTown', 'homeState', 
      'targetYear', 'optionalSubject', 'category', 'medium',
      'graduationDegree', 'graduationCollege', 'graduationCity', 'graduationYear'
    ];
    let filled = 0;
    fieldsToCheck.forEach(f => {
      if (formData[f]) filled++;
    });
    return Math.round((filled / fieldsToCheck.length) * 100);
  };

  const completeness = calculateCompleteness();

  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-16 py-8 space-y-8 max-w-6xl mx-auto">
      
      {/* Top Breadcrumb & Navigation */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="flex items-center gap-3">
          {isSupabaseConnected && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-bold border border-emerald-500/20">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>Cloud Sync Active</span>
            </div>
          )}

          <button
            type="button"
            onClick={handleSignOut}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-600 dark:text-rose-400 text-xs font-bold transition-colors border border-rose-500/20"
          >
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      {/* Profile Banner Card */}
      <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 border-orange-500/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
        
        <div className="flex items-center gap-5 flex-col sm:flex-row text-center sm:text-left">
          {/* Avatar Selector */}
          <div className="relative group">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 text-white font-black text-3xl flex items-center justify-center shadow-lg shadow-orange-500/30 border-2 border-amber-200">
              {formData.avatarUrl || '👨‍🎓'}
            </div>
            <div className="absolute -bottom-2 -right-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[10px] font-extrabold px-2 py-0.5 rounded-full border border-slate-700 shadow-sm">
              Avatar
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2.5 flex-wrap justify-center sm:justify-start">
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                {formData.name || 'Aspirant'}
              </h1>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-black border border-emerald-500/20">
                <div className="relative w-3.5 h-3.5 rounded-full overflow-hidden shrink-0">
                  <Image
                    src="/logo.png"
                    alt="UPSCSphere"
                    width={14}
                    height={14}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span>Verified Aspirant</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-black border border-orange-500/20">
                UPSC {formData.targetYear || 2027}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              {user?.email || formData.email || 'Free Aspirant Account'} • {formData.optionalSubject || 'General Studies'}
            </p>
          </div>
        </div>

        {/* Profile Completeness Gauge */}
        <div className="flex flex-col items-center sm:items-end w-full md:w-auto bg-slate-50 dark:bg-slate-900/60 p-4 rounded-2xl border border-slate-200 dark:border-white/5 space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Profile Completeness:</span>
            <span className="text-orange-600 dark:text-orange-400 font-extrabold">{completeness}%</span>
          </div>
          <div className="w-48 sm:w-56 h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-500 rounded-full transition-all duration-500"
              style={{ width: `${completeness}%` }}
            />
          </div>
        </div>
      </div>

      {/* Save Success Alert */}
      {saveSuccess && (
        <div className="p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-sm font-bold flex items-center gap-3 animate-in fade-in slide-in-from-top-3 duration-300 shadow-lg">
          <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
          <span>🎉 Aspirant Profile updated successfully and synced with cloud database!</span>
        </div>
      )}

      {/* Daily Morning CA Notification Banner */}
      <DailyCANotificationBell />

      {/* Main Form Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2 overflow-x-auto">
        <button
          type="button"
          onClick={() => setActiveTab('personal')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
            activeTab === 'personal'
              ? 'bg-orange-500 text-white shadow-md shadow-orange-500/25'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <User className="w-4 h-4" />
          <span>Personal & Demographic</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('upsc')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
            activeTab === 'upsc'
              ? 'bg-orange-500 text-white shadow-md shadow-orange-500/25'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <Target className="w-4 h-4" />
          <span>UPSC CSE Journey</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('academic')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
            activeTab === 'academic'
              ? 'bg-orange-500 text-white shadow-md shadow-orange-500/25'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <GraduationCap className="w-4 h-4" />
          <span>Academics (UG & PG)</span>
        </button>
      </div>

      {/* Profile Form */}
      <form onSubmit={handleSave} className="space-y-6">

        {/* Tab 1: Personal & Demographic Details */}
        {activeTab === 'personal' && (
          <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm animate-fade-in">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <User className="w-5 h-5 text-orange-500" />
                <span>Personal & Demographic Profile</span>
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                Basic biographical and contact details.
              </p>
            </div>

            {/* Avatar Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
                Choose Your Aspirant Avatar Icon
              </label>
              <div className="flex items-center gap-2.5 flex-wrap">
                {AVATAR_OPTIONS.map(emoji => (
                  <button
                    key={emoji}
                    type="button"
                    onClick={() => handleChange('avatarUrl', emoji)}
                    className={`w-12 h-12 rounded-2xl text-2xl flex items-center justify-center transition-all ${
                      (formData.avatarUrl || '👨‍🎓') === emoji
                        ? 'bg-orange-500/20 border-2 border-orange-500 scale-110 shadow-md'
                        : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-white/5'
                    }`}
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name || ''}
                  onChange={(e) => handleChange('name', e.target.value)}
                  placeholder="e.g. Utkrasht Kumar"
                  className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                />
              </div>

              {/* Email Address */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  Email Address (Account ID)
                </label>
                <input
                  type="email"
                  disabled
                  value={user?.email || formData.email || ''}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 text-sm opacity-80 cursor-not-allowed text-slate-500"
                />
              </div>

              {/* Date of Birth */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  Date of Birth (DOB)
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={formData.dob || ''}
                    onChange={(e) => handleChange('dob', e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                  />
                </div>
              </div>

              {/* Home Town / City */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  Home Town / City
                </label>
                <input
                  type="text"
                  value={formData.homeTown || ''}
                  onChange={(e) => handleChange('homeTown', e.target.value)}
                  placeholder="e.g. Prayagraj, Patna, Jaipur, Varanasi"
                  className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                />
              </div>

              {/* Home State */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  Home State / UT
                </label>
                <select
                  value={formData.homeState || ''}
                  onChange={(e) => handleChange('homeState', e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                >
                  <option value="">Select State / UT</option>
                  {INDIAN_STATES.map(st => (
                    <option key={st} value={st}>{st}</option>
                  ))}
                </select>
              </div>

              {/* Examination Medium */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  Medium of Examination
                </label>
                <select
                  value={formData.medium || 'English'}
                  onChange={(e) => handleChange('medium', e.target.value as any)}
                  className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                >
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                  <option value="Other">Regional / Other Language</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: UPSC CSE Target & Strategy */}
        {activeTab === 'upsc' && (
          <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm animate-fade-in">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Target className="w-5 h-5 text-orange-500" />
                <span>UPSC CSE Target & Examination Strategy</span>
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                Target attempt year, optional subject, and category details.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Next Attempt Year */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  Next Target UPSC Attempt Year <span className="text-rose-500">*</span>
                </label>
                <select
                  value={formData.targetYear || 2027}
                  onChange={(e) => handleChange('targetYear', parseInt(e.target.value))}
                  className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50 font-bold"
                >
                  <option value={2025}>UPSC CSE 2025</option>
                  <option value={2026}>UPSC CSE 2026</option>
                  <option value={2027}>UPSC CSE 2027 (Recommended)</option>
                  <option value={2028}>UPSC CSE 2028</option>
                  <option value={2029}>UPSC CSE 2029</option>
                  <option value={2030}>UPSC CSE 2030</option>
                </select>
              </div>

              {/* Attempt Number */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  Attempt Number
                </label>
                <select
                  value={formData.attemptNumber || 1}
                  onChange={(e) => handleChange('attemptNumber', parseInt(e.target.value))}
                  className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                >
                  <option value={1}>1st Attempt (Fresh Aspirant)</option>
                  <option value={2}>2nd Attempt</option>
                  <option value={3}>3rd Attempt</option>
                  <option value={4}>4th Attempt</option>
                  <option value={5}>5th Attempt</option>
                  <option value={6}>6th Attempt or above</option>
                </select>
              </div>

              {/* Optional Subject */}
              <div className="space-y-1.5 md:col-span-2">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  UPSC Mains Optional Subject <span className="text-rose-500">*</span>
                </label>
                <select
                  value={formData.optionalSubject || 'General Studies (Prelims Focus)'}
                  onChange={(e) => handleChange('optionalSubject', e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50 font-medium"
                >
                  {POPULAR_OPTIONALS.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              {/* Reservation Category */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  Reservation Category (For Cutoff Modeling)
                </label>
                <select
                  value={formData.category || 'General'}
                  onChange={(e) => handleChange('category', e.target.value as any)}
                  className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                >
                  <option value="General">General (Unreserved)</option>
                  <option value="EWS">Economically Weaker Section (EWS)</option>
                  <option value="OBC">Other Backward Classes (OBC-NCL)</option>
                  <option value="SC">Scheduled Caste (SC)</option>
                  <option value="ST">Scheduled Tribe (ST)</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Academic Background (Graduation & Post Graduation) */}
        {activeTab === 'academic' && (
          <div className="space-y-6 animate-fade-in">
            
            {/* Graduation Card */}
            <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
                <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-blue-500" />
                  <span>Graduation (Undergraduate Degree)</span>
                </h2>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                  Your primary qualifying degree for UPSC Civil Services Examination.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Degree */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Graduation Degree / Discipline
                  </label>
                  <input
                    type="text"
                    value={formData.graduationDegree || ''}
                    onChange={(e) => handleChange('graduationDegree', e.target.value)}
                    placeholder="e.g. B.Tech (CSE), B.A. (History), B.Sc., MBBS, B.Com"
                    className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                  />
                </div>

                {/* College Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    College / Institute / University Name
                  </label>
                  <input
                    type="text"
                    value={formData.graduationCollege || ''}
                    onChange={(e) => handleChange('graduationCollege', e.target.value)}
                    placeholder="e.g. IIT Delhi, Delhi University (DU), BHU, St. Stephen's"
                    className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                  />
                </div>

                {/* College City */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    College City / Campus Location
                  </label>
                  <input
                    type="text"
                    value={formData.graduationCity || ''}
                    onChange={(e) => handleChange('graduationCity', e.target.value)}
                    placeholder="e.g. New Delhi, Bengaluru, Mumbai, Pune, Kanpur"
                    className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                  />
                </div>

                {/* Passing Year */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Passing / Graduation Year
                  </label>
                  <input
                    type="number"
                    min={1990}
                    max={2030}
                    value={formData.graduationYear || ''}
                    onChange={(e) => handleChange('graduationYear', e.target.value ? parseInt(e.target.value) : undefined)}
                    placeholder="e.g. 2024"
                    className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                  />
                </div>
              </div>
            </div>

            {/* Post Graduation Card (Optional) */}
            <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
                <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <School className="w-5 h-5 text-emerald-500" />
                  <span>Post Graduation / Masters (Optional)</span>
                </h2>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                  Fill this if you have completed or are currently pursuing a Master&apos;s or Doctoral degree.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* PG Degree */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Post Graduation Degree
                  </label>
                  <input
                    type="text"
                    value={formData.postGraduationDegree || ''}
                    onChange={(e) => handleChange('postGraduationDegree', e.target.value)}
                    placeholder="e.g. M.Tech, M.A. (Pol Sci), MBA, LLM, M.Sc."
                    className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                  />
                </div>

                {/* PG College */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Post Graduation Institute / College
                  </label>
                  <input
                    type="text"
                    value={formData.postGraduationCollege || ''}
                    onChange={(e) => handleChange('postGraduationCollege', e.target.value)}
                    placeholder="e.g. JNU, IIM Ahmedabad, IISc, BHU"
                    className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                  />
                </div>

                {/* PG Year */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Post Graduation Passing Year
                  </label>
                  <input
                    type="number"
                    min={1990}
                    max={2030}
                    value={formData.postGraduationYear || ''}
                    onChange={(e) => handleChange('postGraduationYear', e.target.value ? parseInt(e.target.value) : undefined)}
                    placeholder="e.g. 2026"
                    className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Submit Actions Bar */}
        <div className="liquid-glass-card rounded-3xl p-5 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
          <div className="text-xs text-slate-600 dark:text-slate-400 text-center sm:text-left">
            Your details are kept completely private and used only for personalized mock analytics and AIR benchmarking.
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="submit"
              disabled={isSaving}
              className="w-full sm:w-auto liquid-glass-btn flex items-center justify-center gap-2 px-7 py-3 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-600 text-white font-extrabold text-xs sm:text-sm shadow-xl shadow-orange-500/25 hover:scale-105 transition-all disabled:opacity-50"
            >
              {isSaving ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Saving Profile...</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>Save Aspirant Profile</span>
                </>
              )}
            </button>
          </div>
        </div>

      </form>
    </div>
  );
}
