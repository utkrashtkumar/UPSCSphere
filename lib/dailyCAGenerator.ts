import { Question } from '@/lib/types';
import { getCuratedQuestionsForDate } from '@/data/dailyCAData';
import { generateWithGemini } from '@/lib/geminiCAGenerator';

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

// Dates that have curated (handcrafted) question sets in the archive
const CURATED_DATES = new Set([
  '2026-08-20',
  '2026-08-21',
  '2026-08-22',
  '2026-08-23',
  '2026-08-24',
]);

export interface GeneratedEdition {
  edition_date: string;
  headline: string;
  generated_at: string;
  questions: Question[];
  sources: string[];
  total_count: number;
  subject_counts?: Record<string, number>;
  source_type?: 'curated' | 'gemini' | 'fallback';
}

/**
 * Generates UPSC-standard Current Affairs questions across all 6 core subjects (60 MCQs total).
 * 
 * Priority:
 * 1. Curated handcrafted question sets (for dates in CURATED_DATES)
 * 2. Gemini API generation (for dates NOT in archive — auto daily refresh)
 * 3. Deterministic rotation fallback (if Gemini fails)
 */
export async function generateDailyCAEdition(targetDate?: string, subjectFilter?: string): Promise<GeneratedEdition> {
  const dateStr = targetDate || getTodayISTDate();
  const timestampStr = formatISTTimestamp(dateStr);
  let sourceType: 'curated' | 'gemini' | 'fallback' = 'curated';

  let rawQuestions: Question[] = [];
  let subjectCounts: Record<string, number> = {};

  // ── Step 1: Try curated archive ──────────────────────────────────────
  if (CURATED_DATES.has(dateStr)) {
    rawQuestions = getCuratedQuestionsForDate(dateStr, subjectFilter);
    sourceType = 'curated';
  } else {
    // ── Step 2: Try Gemini API for fresh daily content ──────────────────
    const geminiResult = await generateWithGemini(dateStr);

    if (geminiResult.success && geminiResult.questions.length >= 30) {
      rawQuestions = geminiResult.questions;
      subjectCounts = geminiResult.subjectCounts;
      sourceType = 'gemini';
    } else {
      // ── Step 3: Fallback to deterministic rotation ──────────────────
      rawQuestions = getCuratedQuestionsForDate(dateStr, subjectFilter);
      sourceType = 'fallback';
      console.warn(`[DailyCA] Gemini generation failed for ${dateStr}, using fallback rotation.`);
    }
  }

  // Apply subject filter if specified (for subject-filtered requests)
  const questions: Question[] = rawQuestions.map((q, idx) => ({
    ...q,
    id: q.id || `ca-${dateStr}-${q.subject || 'gen'}-${String(idx + 1).padStart(2, '0')}`,
    generatedAt: q.generatedAt || timestampStr,
    editionDate: dateStr,
    sourcePublisher: q.sourcePublisher || q.bookReference?.bookName || 'PIB Delhi & The Hindu',
  }));

  // Apply subject filter after Gemini generation if needed
  let filteredQuestions = questions;
  if (subjectFilter && subjectFilter !== 'all') {
    const subjectMap: Record<string, string[]> = {
      polity: ['polity', 'governance', 'constitution', 'judiciary'],
      economy: ['economy', 'banking', 'finance', 'taxation', 'industry'],
      science_tech: ['science', 'tech', 'quantum', 'space', 'nuclear', 'scitech'],
      international: ['international', 'ir', 'foreign', 'un', 'treaty', 'global'],
      environment: ['environment', 'ecology', 'wildlife', 'climate', 'pollution'],
      history: ['history', 'culture', 'heritage', 'art', 'archaeology', 'freedom'],
    };
    const keywords = subjectMap[subjectFilter] || [subjectFilter];
    const filtered = questions.filter(q =>
      q.subject === subjectFilter ||
      keywords.some(k =>
        q.subject?.toLowerCase().includes(k) ||
        q.topic?.toLowerCase().includes(k)
      )
    );
    if (filtered.length > 0) filteredQuestions = filtered;
  }

  // Compute subject counts if not already done (curated/fallback path)
  if (Object.keys(subjectCounts).length === 0) {
    subjectCounts = {
      polity: filteredQuestions.filter(q => q.subject === 'polity' || q.topic?.toLowerCase().includes('polity')).length,
      economy: filteredQuestions.filter(q => q.subject === 'economy' || q.topic?.toLowerCase().includes('economy')).length,
      science_tech: filteredQuestions.filter(q => q.subject === 'science_tech' || q.topic?.toLowerCase().includes('science')).length,
      international: filteredQuestions.filter(q => q.subject === 'international' || q.topic?.toLowerCase().includes('international')).length,
      environment: filteredQuestions.filter(q => q.subject === 'environment' || q.topic?.toLowerCase().includes('environment')).length,
      history: filteredQuestions.filter(q => q.subject === 'history' || q.topic?.toLowerCase().includes('history')).length,
    };
  }

  return {
    edition_date: dateStr,
    headline: `Daily UPSC 6-Subject Current Affairs & Mega Editorial Dossier (${dateStr})`,
    generated_at: timestampStr,
    questions: filteredQuestions,
    sources: [
      'PIB Delhi',
      'The Hindu & Indian Express',
      'Department of Science & Technology (DST)',
      'Supreme Court of India',
      'Reserve Bank of India (RBI)',
      'Down To Earth & MoEFCC',
      'Ministry of Culture & ASI',
      'PRS Legislative Research & NITI Aayog',
    ],
    total_count: filteredQuestions.length,
    subject_counts: subjectCounts,
    source_type: sourceType,
  };
}
