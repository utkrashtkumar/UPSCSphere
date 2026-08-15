import { QuizResult, UserProfile, SpacedItem, Question, UserAnswer } from '@/lib/types';
import { supabase, isSupabaseConfigured } from '@/lib/supabaseClient';

const STORAGE_KEYS = {
  PROFILE: 'upsc_user_profile',
  QUIZ_HISTORY: 'upsc_quiz_history',
  SPACED_QUEUE: 'upsc_spaced_queue',
  BOOKMARKS: 'upsc_bookmarks',
  SYLLABUS_PROGRESS: 'upsc_syllabus_progress',
  DAILY_STREAK: 'upsc_daily_streak',
  LAST_ACTIVE: 'upsc_last_active',
  MAINS_SUBMISSIONS: 'upsc_mains_submissions',
  DUEL_HISTORY: 'upsc_duel_history',
};

export const defaultProfile: UserProfile = {
  name: 'Aspirant',
  email: '',
  targetYear: 2027,
  optionalSubject: 'General Studies',
  category: 'General',
  streakCount: 0,
  lastActiveDate: '',
  totalQuizzesTaken: 0,
  averageScore: 0,
  highestScore: 0,
  avatarUrl: '',
  dob: '',
  homeTown: '',
  homeState: '',
  graduationDegree: '',
  graduationCollege: '',
  graduationCity: '',
  graduationYear: undefined,
  postGraduationDegree: '',
  postGraduationCollege: '',
  postGraduationYear: undefined,
  attemptNumber: 1,
  medium: 'English',
};

export function getStoredProfile(): UserProfile {
  if (typeof window === 'undefined') return defaultProfile;
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.PROFILE);
    const history = getQuizHistory();

    if (!raw) {
      localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(defaultProfile));
      return defaultProfile;
    }
    const profile: UserProfile = JSON.parse(raw);

    // Auto-purge stale prototype mock cache (e.g. legacy total 12 mocks or 92.5 avg marks)
    if (history.length === 0) {
      profile.totalQuizzesTaken = 0;
      profile.averageScore = 0;
      profile.highestScore = 0;
      if (!profile.lastActiveDate) {
        profile.streakCount = 0;
      }
    } else {
      profile.totalQuizzesTaken = history.length;
      const allScores = history.map(q => q.score);
      profile.averageScore = parseFloat((allScores.reduce((a, b) => a + b, 0) / allScores.length).toFixed(1));
      profile.highestScore = Math.max(...allScores);
    }

    // Dynamic Streak Validation against current date
    if (profile.lastActiveDate) {
      const today = new Date().toISOString().split('T')[0];
      const lastDate = new Date(profile.lastActiveDate);
      const currentDate = new Date(today);
      const diffTime = currentDate.getTime() - lastDate.getTime();
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

      // If user missed more than 1 day, streak resets to 0
      if (diffDays > 1 && (profile.streakCount || 0) > 0) {
        profile.streakCount = 0;
      }
    }

    // Save cleaned real profile to localStorage
    localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(profile));

    return profile;
  } catch {
    return defaultProfile;
  }
}

export function saveStoredProfile(profile: Partial<UserProfile>): UserProfile {
  if (typeof window === 'undefined') return defaultProfile;
  try {
    const current = getStoredProfile();
    const updated = { ...current, ...profile };
    localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(updated));
    return updated;
  } catch {
    return defaultProfile;
  }
}

export function getQuizHistory(): QuizResult[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.QUIZ_HISTORY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveQuizResult(result: QuizResult): void {
  if (typeof window === 'undefined') return;
  try {
    const history = getQuizHistory();
    history.unshift(result);
    // Keep last 50 quizzes in local storage
    const trimmed = history.slice(0, 50);
    localStorage.setItem(STORAGE_KEYS.QUIZ_HISTORY, JSON.stringify(trimmed));

    // Update real user profile stats
    const profile = getStoredProfile();
    const totalTaken = history.length;
    const allScores = history.map(q => q.score);
    const avgScore = parseFloat((allScores.reduce((a, b) => a + b, 0) / allScores.length).toFixed(1));
    const highestScore = Math.max(profile.highestScore || 0, result.score);

    // Calculate real dynamic streak
    const today = new Date().toISOString().split('T')[0];
    let newStreak = profile.streakCount || 0;

    if (!profile.lastActiveDate) {
      newStreak = 1;
    } else {
      const lastDate = new Date(profile.lastActiveDate);
      const currentDate = new Date(today);
      const diffTime = currentDate.getTime() - lastDate.getTime();
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays === 1) {
        newStreak += 1;
      } else if (diffDays > 1) {
        newStreak = 1;
      } else if (diffDays === 0 && newStreak === 0) {
        newStreak = 1;
      }
    }

    saveStoredProfile({
      totalQuizzesTaken: totalTaken,
      averageScore: avgScore,
      highestScore: highestScore,
      lastActiveDate: today,
      streakCount: newStreak,
    });

    // Cloud Sync to Supabase for Real-Time Global Leaderboard
    if (isSupabaseConfigured && supabase) {
      const sessionRaw = localStorage.getItem('upsc_auth_session');
      if (sessionRaw) {
        try {
          const authUser = JSON.parse(sessionRaw);
          if (authUser?.id && !authUser?.isDemo) {
            // Update profile stats
            supabase
              .from('profiles')
              .upsert({
                id: authUser.id,
                name: authUser.name || profile.name,
                target_year: authUser.targetYear || profile.targetYear,
                optional_subject: profile.optionalSubject || 'General Studies',
                streak_count: newStreak,
                total_quizzes_taken: totalTaken,
                average_score: avgScore,
                updated_at: new Date().toISOString(),
              })
              .then();

            // Insert quiz submission log
            supabase
              .from('quiz_results')
              .insert({
                user_id: authUser.id,
                quiz_id: result.quizId,
                score: result.score,
                accuracy: result.accuracy,
                total_questions: result.totalQuestions,
                correct_count: result.correct,
                incorrect_count: result.wrong,
                unattempted_count: result.unattempted,
                completed_at: result.date || new Date().toISOString(),
              })
              .then();
          }
        } catch (syncErr) {
          console.error('Supabase async cloud sync skipped:', syncErr);
        }
      }
    }
  } catch (err) {
    console.error('Failed to save quiz result to local storage', err);
  }
}

export function getQuizResultById(id: string): QuizResult | null {
  const history = getQuizHistory();
  return history.find(q => q.quizId === id) || null;
}

export function getBookmarks(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function toggleBookmark(questionId: string): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const bookmarks = getBookmarks();
    const index = bookmarks.indexOf(questionId);
    let isNowBookmarked = false;
    if (index > -1) {
      bookmarks.splice(index, 1);
      isNowBookmarked = false;
    } else {
      bookmarks.push(questionId);
      isNowBookmarked = true;
    }
    localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(bookmarks));
    return isNowBookmarked;
  } catch {
    return false;
  }
}

export function getSyllabusProgress(): Record<string, { isCompleted: boolean; revisionCount: number }> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.SYLLABUS_PROGRESS);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function updateSyllabusTopic(topicId: string, isCompleted: boolean, deltaRevision: number = 0): void {
  if (typeof window === 'undefined') return;
  try {
    const progress = getSyllabusProgress();
    const current = progress[topicId] || { isCompleted: false, revisionCount: 0 };
    progress[topicId] = {
      isCompleted,
      revisionCount: Math.max(0, current.revisionCount + deltaRevision),
    };
    localStorage.setItem(STORAGE_KEYS.SYLLABUS_PROGRESS, JSON.stringify(progress));
  } catch (err) {
    console.error('Failed to update syllabus progress', err);
  }
}

export function getSpacedQueue(): SpacedItem[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.SPACED_QUEUE);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function addQuestionsToSpacedQueue(questions: Question[], wrongAnswers: UserAnswer[]): void {
  if (typeof window === 'undefined') return;
  try {
    const queue = getSpacedQueue();
    const now = new Date();
    const nextDay = new Date(now);
    nextDay.setDate(nextDay.getDate() + 1); // 1 day interval for 1st repetition

    wrongAnswers.forEach(ans => {
      if (ans.isCorrect === false) {
        const q = questions.find(item => item.id === ans.questionId);
        if (!q) return;

        const existingIdx = queue.findIndex(item => item.questionId === ans.questionId);
        if (existingIdx > -1) {
          queue[existingIdx].wrongCount += 1;
          queue[existingIdx].repetitionLevel = 1;
          queue[existingIdx].nextReviewDate = nextDay.toISOString().split('T')[0];
        } else {
          queue.push({
            questionId: q.id,
            subject: q.subject,
            topic: q.topic,
            lastAttempted: now.toISOString().split('T')[0],
            nextReviewDate: nextDay.toISOString().split('T')[0],
            repetitionLevel: 1,
            wrongCount: 1,
          });
        }
      }
    });

    localStorage.setItem(STORAGE_KEYS.SPACED_QUEUE, JSON.stringify(queue));
  } catch (err) {
    console.error('Failed to add to spaced queue', err);
  }
}
