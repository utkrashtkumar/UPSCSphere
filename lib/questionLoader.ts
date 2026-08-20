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
  isDailyCA?: boolean;
  dailyCASet?: 'set1' | 'set2' | 'all';
  customQuestionIds?: string[];
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
    isDailyCA = false,
    dailyCASet = 'all',
    customQuestionIds,
  } = options;

  // Direct loading by specific IDs (e.g. synchronized 1v1 duels)
  if (customQuestionIds && customQuestionIds.length > 0) {
    const all = [...standardQuestions, ...pyqVault, ...dailyCAQuestions];
    const map = new Map(all.map(q => [q.id, q]));
    const matched = customQuestionIds.map(id => map.get(id)).filter((q): q is Question => q !== undefined);
    if (matched.length > 0) return matched;
  }

  // Direct Daily CA loading
  if (isDailyCA) {
    let sourceQuestions = dailyCAQuestions;
    if (typeof window !== 'undefined') {
      try {
        const stored = sessionStorage.getItem('daily_ca_active_questions');
        if (stored) {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed) && parsed.length > 0) {
            sourceQuestions = parsed;
          }
        }
      } catch {
        // fallback to standard
      }
    }

    const { dailyCASubject } = options as any;
    if (dailyCASubject && dailyCASubject !== 'all') {
      const subjectKeywords: Record<string, string[]> = {
        polity: ['polity', 'governance', 'constitution', 'judiciary', 'parliament'],
        economy: ['economy', 'banking', 'finance', 'taxation', 'industry', 'trade'],
        science_tech: ['science', 'tech', 'quantum', 'space', 'nuclear', 'telecom'],
        international: ['international', 'foreign', 'asean', 'un', 'treaty', 'global'],
        environment: ['environment', 'ecology', 'wildlife', 'climate', 'pollution', 'cheetah'],
        history: ['history', 'culture', 'heritage', 'art', 'amrit', 'akademi'],
      };
      const keywords = subjectKeywords[dailyCASubject] || [dailyCASubject];
      const filteredBySubject = sourceQuestions.filter(q => 
        keywords.some(k => 
          q.subject?.toLowerCase().includes(k) || 
          q.topic?.toLowerCase().includes(k) || 
          q.subTopic?.toLowerCase().includes(k)
        )
      );
      if (filteredBySubject.length > 0) {
        return filteredBySubject.slice(0, count);
      }
    }

    if (dailyCASet === 'set1') {
      return sourceQuestions.slice(0, Math.min(10, count));
    }
    if (dailyCASet === 'set2') {
      return sourceQuestions.slice(10, 20).slice(0, count);
    }
    return sourceQuestions.slice(0, count);
  }

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

export function getPYQAdjacentQuestions(year: number, paper: PaperType, currentId: string): { prev: Question | null; next: Question | null; allInSet: Question[] } {
  const inSet = pyqVault.filter(q => q.pyqYear === year && (q.pyqPaper === paper || (!q.pyqPaper && paper === 'GS')));
  const idx = inSet.findIndex(q => q.id === currentId);
  return {
    prev: idx > 0 ? inSet[idx - 1] : null,
    next: idx >= 0 && idx < inSet.length - 1 ? inSet[idx + 1] : null,
    allInSet: inSet,
  };
}

export function getRelatedQuestions(question: Question, count: number = 4): Question[] {
  const all = [...pyqVault, ...standardQuestions];
  return all
    .filter(q => q.id !== question.id && (q.subject === question.subject || q.topic === question.topic))
    .slice(0, count);
}
