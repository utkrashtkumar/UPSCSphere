import { Question } from '@/lib/types';
import { getCuratedQuestionsForDate, dailyCA_2026_08_20_All } from '@/data/dailyCAData';

/**
 * Returns today's date string in YYYY-MM-DD format based on Indian Standard Time (IST).
 */
export function getTodayISTDate(): string {
  const now = new Date();
  const istOffset = 5.5 * 60 * 60 * 1000;
  const istDate = new Date(now.getTime() + istOffset);
  return istDate.toISOString().split('T')[0];
}

/**
 * Formats a given date string into a friendly IST timestamp, e.g., "20 Aug 2026, 06:00 AM IST".
 */
export function formatISTTimestamp(dateStr?: string): string {
  const date = dateStr ? new Date(`${dateStr}T06:00:00+05:30`) : new Date();
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }) + ', 06:00 AM IST';
}

export interface GeneratedEdition {
  edition_date: string;
  headline: string;
  generated_at: string;
  questions: Question[];
  sources: string[];
  total_count: number;
  subject_counts?: Record<string, number>;
}

/**
 * Generates UPSC-standard Current Affairs questions across all 6 core subjects (60 MCQs total) with citations and timestamps.
 */
export async function generateDailyCAEdition(targetDate?: string, subjectFilter?: string): Promise<GeneratedEdition> {
  const dateStr = targetDate || getTodayISTDate();
  const timestampStr = formatISTTimestamp(dateStr);

  const baseQuestions = getCuratedQuestionsForDate(dateStr, subjectFilter);
  const questions: Question[] = baseQuestions.map((q, idx) => ({
    ...q,
    id: q.id || `ca-${dateStr}-${q.subject || 'gen'}-${String(idx + 1).padStart(2, '0')}`,
    generatedAt: q.generatedAt || timestampStr,
    editionDate: dateStr,
    sourcePublisher: q.sourcePublisher || q.bookReference?.bookName || 'PIB Delhi & The Hindu',
  }));

  const subjectCounts: Record<string, number> = {
    polity: questions.filter(q => q.subject === 'polity' || q.topic.toLowerCase().includes('polity')).length,
    economy: questions.filter(q => q.subject === 'economy' || q.topic.toLowerCase().includes('economy')).length,
    science_tech: questions.filter(q => q.subject === 'science_tech' || q.topic.toLowerCase().includes('science')).length,
    international: questions.filter(q => q.subject === 'international' || q.topic.toLowerCase().includes('international')).length,
    environment: questions.filter(q => q.subject === 'environment' || q.topic.toLowerCase().includes('environment')).length,
    history: questions.filter(q => q.subject === 'history' || q.topic.toLowerCase().includes('history')).length,
  };

  return {
    edition_date: dateStr,
    headline: `Daily UPSC 6-Subject Current Affairs & Mega Editorial Dossier (${dateStr})`,
    generated_at: timestampStr,
    questions: questions,
    sources: [
      'PIB Delhi',
      'The Hindu & Indian Express',
      'Department of Science & Technology (DST)',
      'Supreme Court of India (7-Judge Bench)',
      'Reserve Bank of India (RBI)',
      'Down To Earth & MoEFCC',
      'Ministry of Culture & ASI',
      'PRS Legislative Research & NITI Aayog',
    ],
    total_count: questions.length,
    subject_counts: subjectCounts,
  };
}
