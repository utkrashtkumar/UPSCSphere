import { QuizResult, UserProfile, SpacedItem, Question, UserAnswer } from '@/lib/types';

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
  email: 'aspirant@upsc.gov.in',
  targetYear: 2026,
  optionalSubject: 'PSIR',
  category: 'General',
  streakCount: 5,
  lastActiveDate: new Date().toISOString().split('T')[0],
  totalQuizzesTaken: 12,
  averageScore: 92.5,
  highestScore: 134.0,
};

export function getStoredProfile(): UserProfile {
  if (typeof window === 'undefined') return defaultProfile;
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.PROFILE);
    if (!raw) {
      localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(defaultProfile));
      return defaultProfile;
    }
    return JSON.parse(raw);
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
    // Keep last 50 quizzes in local storage to stay lightweight
    const trimmed = history.slice(0, 50);
    localStorage.setItem(STORAGE_KEYS.QUIZ_HISTORY, JSON.stringify(trimmed));

    // Update user profile stats
    const profile = getStoredProfile();
    const totalTaken = profile.totalQuizzesTaken + 1;
    const allScores = trimmed.map(q => q.score);
    const avgScore = parseFloat((allScores.reduce((a, b) => a + b, 0) / allScores.length).toFixed(1));
    const highestScore = Math.max(profile.highestScore, result.score);

    // Update streak if today
    const today = new Date().toISOString().split('T')[0];
    let newStreak = profile.streakCount;
    if (profile.lastActiveDate !== today) {
      newStreak += 1;
    }

    saveStoredProfile({
      totalQuizzesTaken: totalTaken,
      averageScore: avgScore,
      highestScore: highestScore,
      lastActiveDate: today,
      streakCount: newStreak,
    });
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
