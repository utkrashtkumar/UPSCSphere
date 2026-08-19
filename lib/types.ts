export type SubjectCategory = 
  | 'polity'
  | 'history'
  | 'economy'
  | 'geography'
  | 'environment'
  | 'science_tech'
  | 'current_affairs'
  | 'csat_quant'
  | 'csat_reasoning'
  | 'csat_reading'
  | 'mixed_mock';

export type PaperType = 'GS' | 'CSAT';

export type DifficultyLevel = 'Easy' | 'Moderate' | 'UPSC Standard' | 'Tricky';

export type QuizMode = 'instant' | 'exam';

export interface BookReference {
  bookName: string;
  edition?: string;
  chapter: string;
  pageNumber: string;
  keyExcerpt?: string;
}

export interface Question {
  id: string;
  subject: SubjectCategory;
  topic: string;
  subTopic: string;
  question: string;
  statements?: string[];
  options: string[];
  correctAnswer: number; // 0, 1, 2, 3
  explanation: string;
  bookReference: BookReference;
  eliminationTip?: string;
  difficulty: DifficultyLevel;
  isPYQ?: boolean;
  pyqYear?: number;
  pyqPaper?: PaperType;
  frequency?: number; // How many times UPSC repeated this topic
  tags?: string[];
}

export interface UserAnswer {
  questionId: string;
  selectedOption: number | null;
  isCorrect: boolean | null;
  timeSpentSeconds: number;
  isMarkedForReview: boolean;
  eliminatedOptions: number[]; // indices of struck out options
}

export interface DuelOpponent {
  name: string;
  avatarUrl?: string;
  targetYear: number;
  optional?: string;
  streak?: number;
  rating?: number;
  isAI?: boolean;
}

export interface QuizConfig {
  id: string;
  title: string;
  subjects: SubjectCategory[];
  questionCount: number;
  timeLimitMinutes: number | null; // null = untimed
  mode: QuizMode;
  paperType: PaperType;
  difficulty: 'all' | DifficultyLevel;
  isPYQOnly?: boolean;
  pyqYear?: number;
  isDailyCA?: boolean;
  dailyCASet?: 'set1' | 'set2' | 'all';
  isDuel?: boolean;
  roomId?: string;
  duelOpponent?: DuelOpponent;
  customQuestionIds?: string[];
}

export interface QuizResult {
  quizId: string;
  title: string;
  date: string;
  paperType: PaperType;
  totalQuestions: number;
  attempted: number;
  correct: number;
  wrong: number;
  unattempted: number;
  score: number;
  maxScore: number;
  accuracy: number;
  negativeMarksLost: number;
  timeSpentSeconds: number;
  estimatedAIR: number;
  percentile: number;
  subjectBreakdown: Record<string, { total: number; correct: number; wrong: number; accuracy: number }>;
  weakAreas: string[];
  strongAreas: string[];
  answers: UserAnswer[];
  questions: Question[];
  isDuel?: boolean;
  roomId?: string;
  duelOpponent?: DuelOpponent;
}

export interface LeaderboardEntry {
  id: string;
  name: string;
  targetYear: number;
  avatarUrl?: string;
  score: number;
  accuracy: number;
  testsTaken: number;
  airRank: number;
  percentile: number;
  optionalSubject?: string;
  streakCount: number;
  badge?: string;
}

export interface SpacedItem {
  questionId: string;
  subject: SubjectCategory;
  topic: string;
  lastAttempted: string;
  nextReviewDate: string;
  repetitionLevel: number; // 1 (1 day), 2 (3 days), 3 (7 days), 4 (14 days), 5 (Mastered)
  wrongCount: number;
}

export type SyllabusPaperType = 'GS1' | 'GS2' | 'GS3' | 'GS4' | 'Prelims_GS1' | 'Prelims_CSAT';

export interface SyllabusItem {
  id: string;
  paper: SyllabusPaperType;
  subject: string;
  topic: string;
  subTopics: string[];
  isCompleted: boolean;
  revisionCount: number;
  notes?: string;
}

export interface XPHistoryItem {
  id: string;
  action: string;
  xpGained: number;
  timestamp: string;
  description: string;
}

export interface AchievementBadge {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'quiz' | 'streak' | 'accuracy' | 'special' | 'duel';
  unlockedAt?: string;
}

export interface RankTier {
  level: number;
  title: string;
  minXP: number;
  maxXP: number;
  perk: string;
  badgeIcon: string;
}

export interface UserProfile {
  name: string;
  email: string;
  targetYear: number;
  optionalSubject: string;
  category: 'General' | 'EWS' | 'OBC' | 'SC' | 'ST';
  streakCount: number;
  lastActiveDate: string;
  totalQuizzesTaken: number;
  averageScore: number;
  highestScore: number;
  avatarUrl?: string;
  dob?: string;
  homeTown?: string;
  homeState?: string;
  graduationDegree?: string;
  graduationCollege?: string;
  graduationCity?: string;
  graduationYear?: number;
  postGraduationDegree?: string;
  postGraduationCollege?: string;
  postGraduationYear?: number;
  attemptNumber?: number;
  medium?: 'English' | 'Hindi' | 'Other';
  xp?: number;
  rankTier?: string;
  unlockedBadgeIds?: string[];
  xpHistory?: XPHistoryItem[];
}

export function isImageUrl(url?: string | null): boolean {
  if (!url || typeof url !== 'string') return false;
  const trimmed = url.trim();
  return /^(https?:\/\/|\/|data:image\/)/i.test(trimmed);
}
