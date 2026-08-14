import { Question, SubjectCategory, PaperType, DifficultyLevel } from '@/lib/types';
import { standardQuestions } from '@/data/questionsBank';
import { pyqVault } from '@/data/pyqVault';
import { dailyCAQuestions } from '@/data/dailyCAData';

export interface LoadQuestionsOptions {
  subjects?: SubjectCategory[];
  count?: number;
  paperType?: PaperType;
  difficulty?: 'all' | DifficultyLevel;
  isPYQOnly?: boolean;
  pyqYear?: number;
  pyqPaper?: PaperType;
}

export function loadQuestions(options: LoadQuestionsOptions = {}): Question[] {
  const {
    subjects,
    count = 10,
    paperType,
    difficulty = 'all',
    isPYQOnly = false,
    pyqYear,
    pyqPaper,
  } = options;

  let pool: Question[] = [...standardQuestions, ...pyqVault, ...dailyCAQuestions];

  // Filter by PYQ
  if (isPYQOnly) {
    pool = pool.filter(q => q.isPYQ === true);
  }

  // Filter by PYQ Year
  if (pyqYear) {
    pool = pool.filter(q => q.pyqYear === pyqYear);
  }

  // Filter by PYQ Paper (GS / CSAT)
  if (pyqPaper) {
    pool = pool.filter(q => q.pyqPaper === pyqPaper);
  } else if (paperType) {
    if (paperType === 'CSAT') {
      pool = pool.filter(q => q.subject.startsWith('csat_') || q.pyqPaper === 'CSAT');
    } else {
      pool = pool.filter(q => !q.subject.startsWith('csat_') && q.pyqPaper !== 'CSAT');
    }
  }

  // Filter by selected subjects
  if (subjects && subjects.length > 0 && !subjects.includes('mixed_mock')) {
    pool = pool.filter(q => subjects.includes(q.subject));
  }

  // Filter by difficulty
  if (difficulty && difficulty !== 'all') {
    pool = pool.filter(q => q.difficulty === difficulty);
  }

  // If pool is smaller than requested count, duplicate or return available
  if (pool.length === 0) {
    pool = [...standardQuestions]; // fallback
  }

  // Shuffle array using Fisher-Yates
  const shuffled = [...pool];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  // Return requested count (if count exceeds pool, cycle or slice)
  if (count <= shuffled.length) {
    return shuffled.slice(0, count);
  }

  // If more requested than unique questions, loop to fill
  const result: Question[] = [];
  while (result.length < count) {
    result.push(...shuffled.map((q, idx) => ({ ...q, id: `${q.id}-dup-${result.length + idx}` })));
  }
  return result.slice(0, count);
}

export function getQuestionById(id: string): Question | null {
  const all = [...standardQuestions, ...pyqVault, ...dailyCAQuestions];
  return all.find(q => q.id === id) || null;
}
