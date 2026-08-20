import { RankTier, AchievementBadge, UserProfile, XPHistoryItem } from '@/lib/types';
import { getStoredProfile, saveStoredProfile, getQuizHistory } from '@/lib/localDB';
import { supabase, isSupabaseConfigured } from '@/lib/supabaseClient';

// ----------------------------------------------------
// 1. Official Rank Tiers Configuration
// ----------------------------------------------------
export const RANK_TIERS: RankTier[] = [
  {
    level: 1,
    title: 'Rookie Aspirant',
    minXP: 0,
    maxXP: 249,
    perk: 'Basic diagnostic mock test analytics & solutions',
    badgeIcon: '🌱',
  },
  {
    level: 2,
    title: 'Dedicated Aspirant',
    minXP: 250,
    maxXP: 699,
    perk: '50:50 UPSC elimination hints unlocked',
    badgeIcon: '⚡',
  },
  {
    level: 3,
    title: 'Prelims Scholar',
    minXP: 700,
    maxXP: 1499,
    perk: 'Detailed textbook chapter & page citation explorer',
    badgeIcon: '🏛️',
  },
  {
    level: 4,
    title: 'Mains Contender',
    minXP: 1500,
    maxXP: 2999,
    perk: '1v1 Duel Leaderboard highlight badge & challenge priority',
    badgeIcon: '⚔️',
  },
  {
    level: 5,
    title: 'Interview Qualifier',
    minXP: 3000,
    maxXP: 5999,
    perk: 'Top 5% All-India Leaderboard crown & verified topper card',
    badgeIcon: '🎖️',
  },
  {
    level: 6,
    title: 'AIR Topper Champion',
    minXP: 6000,
    maxXP: 99999,
    perk: 'Permanent Hall of Fame profile badge & Certificate of Excellence',
    badgeIcon: '🏆',
  },
];

// ----------------------------------------------------
// 2. Official 10 Core Achievement Badges
// ----------------------------------------------------
export const ALL_BADGES: AchievementBadge[] = [
  {
    id: 'first_flight',
    title: 'First Flight',
    description: 'Complete your first official UPSC Prelims mock test',
    icon: '🎯',
    category: 'quiz',
  },
  {
    id: 'polity_scholar',
    title: 'Polity Scholar',
    description: 'Complete 3+ Indian Polity & Constitution drills',
    icon: '🏛️',
    category: 'quiz',
  },
  {
    id: 'economy_maestro',
    title: 'Economy Maestro',
    description: 'Complete 3+ Indian Economy & Budget drills',
    icon: '📈',
    category: 'quiz',
  },
  {
    id: 'pyq_veteran',
    title: '12-Yr PYQ Veteran',
    description: 'Complete 2+ official UPSC previous year papers',
    icon: '📜',
    category: 'quiz',
  },
  {
    id: 'duel_gladiator',
    title: 'Duel Gladiator',
    description: 'Compete in a 1v1 live aspirant duel match',
    icon: '⚔️',
    category: 'duel',
  },
  {
    id: 'streak_warrior',
    title: 'Streak Warrior',
    description: 'Maintain a 5-day continuous study streak',
    icon: '🔥',
    category: 'streak',
  },
  {
    id: 'accuracy_sniper',
    title: 'Accuracy Sniper',
    description: 'Score ≥80% accuracy on a test with 10+ questions',
    icon: '⚡',
    category: 'accuracy',
  },
  {
    id: 'prelims_centurion',
    title: 'Prelims Centurion',
    description: 'Score 100+ marks in any UPSC Prelims mock test',
    icon: '👑',
    category: 'special',
  },
  {
    id: 'daily_ca_master',
    title: 'Current Affairs Daily',
    description: 'Complete 2+ Daily Editorial CA quizzes',
    icon: '📰',
    category: 'quiz',
  },
  {
    id: 'syllabus_conqueror',
    title: 'Syllabus Master',
    description: 'Complete 10+ syllabus micro-topic revisions',
    icon: '🌟',
    category: 'special',
  },
];

// ----------------------------------------------------
// 3. Helper: Calculate Rank Tier from XP
// ----------------------------------------------------
export function getUserRankTier(xp: number = 0): {
  currentTier: RankTier;
  nextTier: RankTier | null;
  progressPercent: number;
  xpToNext: number;
} {
  const safeXP = Math.max(0, xp);
  const currentTier = RANK_TIERS.find((t) => safeXP >= t.minXP && safeXP <= t.maxXP) || RANK_TIERS[RANK_TIERS.length - 1];
  const currentIndex = RANK_TIERS.findIndex((t) => t.level === currentTier.level);
  const nextTier = currentIndex < RANK_TIERS.length - 1 ? RANK_TIERS[currentIndex + 1] : null;

  if (!nextTier) {
    return {
      currentTier,
      nextTier: null,
      progressPercent: 100,
      xpToNext: 0,
    };
  }

  const tierSpan = currentTier.maxXP - currentTier.minXP + 1;
  const xpIntoTier = safeXP - currentTier.minXP;
  const progressPercent = Math.min(100, Math.max(0, Math.round((xpIntoTier / tierSpan) * 100)));
  const xpToNext = Math.max(0, nextTier.minXP - safeXP);

  return {
    currentTier,
    nextTier,
    progressPercent,
    xpToNext,
  };
}

// ----------------------------------------------------
// 4. Core Engine: Award XP to Logged-in Users Only
// ----------------------------------------------------
export interface AwardXPResult {
  success: boolean;
  awardedXP: number;
  newTotalXP: number;
  newTier: RankTier;
  newlyUnlockedBadges: AchievementBadge[];
  reason?: string;
  message?: string;
  breakdown: { label: string; xp: number }[];
}

export function awardXP(params: {
  userId?: string | null;
  action: 'complete_quiz' | 'daily_ca' | 'duel_win' | 'duel_played' | 'pyq_completed' | 'syllabus_completed';
  accuracy?: number;
  score?: number;
  totalQuestions?: number;
  subjects?: string[];
  streakDays?: number;
}): AwardXPResult {
  const { userId, action, accuracy = 0, score = 0, totalQuestions = 10, subjects = [], streakDays = 0 } = params;

  // 🔒 STRICT RULE: Only authenticated (logged-in) users earn XP & badges
  if (!userId) {
    return {
      success: false,
      awardedXP: 0,
      newTotalXP: 0,
      newTier: RANK_TIERS[0],
      newlyUnlockedBadges: [],
      reason: 'unauthenticated',
      message: 'Sign in to earn XP points, level up your rank tier, and unlock profile achievement badges!',
      breakdown: [],
    };
  }

  const profile = getStoredProfile();
  let baseXP = 0;
  const breakdown: { label: string; xp: number }[] = [];

  switch (action) {
    case 'complete_quiz':
      baseXP += 50;
      breakdown.push({ label: 'Mock Test Completed', xp: 50 });
      if (accuracy >= 80 && totalQuestions >= 5) {
        baseXP += 25;
        breakdown.push({ label: 'High Accuracy Bonus (≥80%)', xp: 25 });
      }
      if (score >= 100) {
        baseXP += 35;
        breakdown.push({ label: 'Centurion Score Bonus (≥100 pts)', xp: 35 });
      }
      break;

    case 'daily_ca':
      baseXP += 30;
      breakdown.push({ label: 'Daily CA 10-MCQ Completed', xp: 30 });
      if (accuracy >= 80) {
        baseXP += 15;
        breakdown.push({ label: 'CA Accuracy Bonus', xp: 15 });
      }
      break;

    case 'duel_win':
      baseXP += 75;
      breakdown.push({ label: '1v1 Duel Victory 🏆', xp: 75 });
      break;

    case 'duel_played':
      baseXP += 30;
      breakdown.push({ label: '1v1 Duel Match Played ⚔️', xp: 30 });
      break;

    case 'pyq_completed':
      baseXP += 45;
      breakdown.push({ label: 'Official PYQ Paper Solved', xp: 45 });
      break;

    case 'syllabus_completed':
      baseXP += 15;
      breakdown.push({ label: 'Micro-Topic Mastered', xp: 15 });
      break;

    default:
      baseXP += 20;
      breakdown.push({ label: 'Aspirant Activity', xp: 20 });
  }

  // Streak bonus check
  if (streakDays >= 7) {
    baseXP += 20;
    breakdown.push({ label: '7-Day Study Streak Multiplier 🔥', xp: 20 });
  }

  const currentTotalXP = profile.xp || 0;
  const newTotalXP = currentTotalXP + baseXP;
  const { currentTier: newTier } = getUserRankTier(newTotalXP);

  // Check and unlock badges
  const existingBadgeIds = new Set(profile.unlockedBadgeIds || []);
  const newlyUnlockedBadges: AchievementBadge[] = [];

  // Badge 1: First Flight
  if (!existingBadgeIds.has('first_flight') && (profile.totalQuizzesTaken > 0 || action === 'complete_quiz')) {
    existingBadgeIds.add('first_flight');
    const badge = ALL_BADGES.find((b) => b.id === 'first_flight');
    if (badge) newlyUnlockedBadges.push(badge);
  }

  // Badge 2: Accuracy Sniper
  if (!existingBadgeIds.has('accuracy_sniper') && accuracy >= 80 && totalQuestions >= 10) {
    existingBadgeIds.add('accuracy_sniper');
    const badge = ALL_BADGES.find((b) => b.id === 'accuracy_sniper');
    if (badge) newlyUnlockedBadges.push(badge);
  }

  // Badge 3: Prelims Centurion
  if (!existingBadgeIds.has('prelims_centurion') && score >= 100) {
    existingBadgeIds.add('prelims_centurion');
    const badge = ALL_BADGES.find((b) => b.id === 'prelims_centurion');
    if (badge) newlyUnlockedBadges.push(badge);
  }

  // Badge 4: Duel Gladiator
  if (!existingBadgeIds.has('duel_gladiator') && (action === 'duel_win' || action === 'duel_played')) {
    existingBadgeIds.add('duel_gladiator');
    const badge = ALL_BADGES.find((b) => b.id === 'duel_gladiator');
    if (badge) newlyUnlockedBadges.push(badge);
  }

  // Badge 5: Streak Warrior
  if (!existingBadgeIds.has('streak_warrior') && (profile.streakCount >= 5 || streakDays >= 5)) {
    existingBadgeIds.add('streak_warrior');
    const badge = ALL_BADGES.find((b) => b.id === 'streak_warrior');
    if (badge) newlyUnlockedBadges.push(badge);
  }

  // Badge 6: Polity Scholar
  if (!existingBadgeIds.has('polity_scholar') && subjects.some((s) => s.includes('polity'))) {
    existingBadgeIds.add('polity_scholar');
    const badge = ALL_BADGES.find((b) => b.id === 'polity_scholar');
    if (badge) newlyUnlockedBadges.push(badge);
  }

  // Badge 7: Economy Maestro
  if (!existingBadgeIds.has('economy_maestro') && subjects.some((s) => s.includes('economy'))) {
    existingBadgeIds.add('economy_maestro');
    const badge = ALL_BADGES.find((b) => b.id === 'economy_maestro');
    if (badge) newlyUnlockedBadges.push(badge);
  }

  // Badge 8: Daily CA Master
  if (!existingBadgeIds.has('daily_ca_master') && action === 'daily_ca') {
    existingBadgeIds.add('daily_ca_master');
    const badge = ALL_BADGES.find((b) => b.id === 'daily_ca_master');
    if (badge) newlyUnlockedBadges.push(badge);
  }

  // Update profile
  const historyItem: XPHistoryItem = {
    id: `xp-${Date.now()}`,
    action: action,
    xpGained: baseXP,
    timestamp: new Date().toISOString(),
    description: breakdown.map((b) => `${b.label} (+${b.xp} XP)`).join(' • '),
  };

  const updatedProfile: UserProfile = {
    ...profile,
    xp: newTotalXP,
    rankTier: newTier.title,
    unlockedBadgeIds: Array.from(existingBadgeIds),
    xpHistory: [historyItem, ...(profile.xpHistory || [])].slice(0, 50),
  };

  saveStoredProfile(updatedProfile);

  // Sync to Supabase if connected
  if (isSupabaseConfigured && supabase) {
    try {
      supabase
        .from('profiles')
        .update({
          xp: newTotalXP,
          rank_tier: newTier.title,
          unlocked_badges: Array.from(existingBadgeIds),
          xp_history: updatedProfile.xpHistory,
          average_score: updatedProfile.averageScore,
          streak_count: updatedProfile.streakCount,
          updated_at: new Date().toISOString(),
        })
        .eq('id', userId)
        .then(() => {});
    } catch {
      // silent
    }
  }

  return {
    success: true,
    awardedXP: baseXP,
    newTotalXP,
    newTier,
    newlyUnlockedBadges,
    breakdown,
  };
}
