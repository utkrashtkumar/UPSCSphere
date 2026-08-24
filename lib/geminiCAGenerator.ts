/**
 * Gemini-powered Current Affairs Question Generator
 * Generates 60 fresh UPSC-standard MCQs across 6 subjects for any date
 * using Google Gemini API with structured prompt engineering.
 */

import { Question, SubjectCategory } from '@/lib/types';
import { formatISTTimestamp } from '@/lib/dailyCAGenerator';

const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';

// 6 Core Subjects with exactly 10 questions each
const SUBJECT_CONFIG: { id: SubjectCategory; label: string; sources: string }[] = [
  {
    id: 'polity',
    label: 'Polity, Constitution & Governance',
    sources: 'Supreme Court judgments, PRS India, Ministry of Law, M. Laxmikanth, PIB Delhi',
  },
  {
    id: 'economy',
    label: 'Indian Economy, Banking & Trade',
    sources: 'RBI circulars, Ministry of Finance, DPIIT, Indian Express Economy, Budget documents',
  },
  {
    id: 'science_tech',
    label: 'Science & Technology, Space & AI',
    sources: 'ISRO, DST, MeitY, DRDO, Nature India, PIB Science & Technology',
  },
  {
    id: 'international',
    label: 'International Relations & Global Affairs',
    sources: 'MEA India, UN News, World Bank, IMF, ORF, Council on Foreign Relations',
  },
  {
    id: 'environment',
    label: 'Geography, Environment & Wildlife',
    sources: 'MoEFCC, Down to Earth, CPCB, UNFCCC, CBD Secretariat, WWF India',
  },
  {
    id: 'history',
    label: 'History, Art, Culture & Heritage',
    sources: 'ASI, UNESCO, NCERT History, Bipin Chandra, Sangeet Natak Akademi, PIB Culture',
  },
];

function buildPromptForSubject(subject: typeof SUBJECT_CONFIG[0], dateStr: string, dateDisplay: string): string {
  return `You are an expert UPSC Civil Services Exam question writer. Generate exactly 10 high-quality Multiple Choice Questions (MCQs) on "${subject.label}" for the Daily Current Affairs edition dated ${dateDisplay}.

STRICT RULES:
1. Questions must be based on recent news, policy changes, government schemes, court judgments, or important topics from authoritative Indian sources: ${subject.sources}
2. Follow UPSC Prelims standard: statement-based "Which of the following is/are correct?", "Consider the following:", or direct factual MCQs.
3. Each question must have exactly 4 options (A, B, C, D).
4. Include a detailed 2-3 sentence explanation covering why the correct answer is right.
5. Include an "eliminationTip" — a short 1-sentence hint on how to eliminate wrong options.
6. Difficulty: Mix of "Moderate", "UPSC Standard", and "Hard" levels.
7. Use 2026 and recent years' data and events.
8. Do NOT repeat topics from the same edition.

Return ONLY a valid JSON array with exactly 10 objects in this format (no markdown, no extra text):
[
  {
    "subTopic": "Short topic name for this question",
    "question": "Full question text with \\n for line breaks in statements",
    "options": ["Option A", "Option B", "Option C", "Option D"],
    "correctAnswer": 0,
    "explanation": "Detailed explanation of why the correct answer is right.",
    "eliminationTip": "One-sentence tip for eliminating wrong options.",
    "difficulty": "UPSC Standard",
    "tags": ["tag1", "tag2", "tag3"],
    "sourcePublisher": "Source name"
  }
]

Generate 10 UPSC-standard MCQs for ${subject.label} (${dateDisplay}):`;
}

async function generateQuestionsForSubject(
  subject: typeof SUBJECT_CONFIG[0],
  dateStr: string,
  dateDisplay: string,
  apiKey: string,
  retries = 2
): Promise<Question[]> {
  const prompt = buildPromptForSubject(subject, dateStr, dateDisplay);

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const response = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.9,
            maxOutputTokens: 4096,
          },
          safetySettings: [
            { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_NONE' },
            { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_NONE' },
            { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_NONE' },
            { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_NONE' },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error(`Gemini API error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';

      // Extract JSON array from the response
      const jsonMatch = rawText.match(/\[[\s\S]*\]/);
      if (!jsonMatch) {
        throw new Error('No JSON array found in Gemini response');
      }

      const rawQuestions = JSON.parse(jsonMatch[0]) as any[];
      const generatedAt = formatISTTimestamp(dateStr);

      // Map to Question type
      const questions: Question[] = rawQuestions.slice(0, 10).map((q, idx) => ({
        id: `ca-${dateStr}-${subject.id}-${String(idx + 1).padStart(2, '0')}`,
        subject: subject.id as SubjectCategory,
        topic: subject.label,
        subTopic: q.subTopic || `${subject.label} – Topic ${idx + 1}`,
        question: q.question || '',
        options: Array.isArray(q.options) ? q.options.slice(0, 4) : ['A', 'B', 'C', 'D'],
        correctAnswer: typeof q.correctAnswer === 'number' ? Math.min(3, Math.max(0, q.correctAnswer)) : 0,
        explanation: q.explanation || 'See official sources for explanation.',
        bookReference: {
          bookName: q.sourcePublisher || subject.sources.split(',')[0].trim(),
          chapter: 'Current Affairs',
          pageNumber: 'Editorial & Official Sources',
          keyExcerpt: `Generated for ${dateDisplay} UPSC Daily CA Edition`,
        },
        eliminationTip: q.eliminationTip || undefined,
        difficulty: ['Easy', 'Moderate', 'UPSC Standard', 'Hard', 'Tricky'].includes(q.difficulty)
          ? q.difficulty
          : 'UPSC Standard',
        tags: Array.isArray(q.tags) ? q.tags : [subject.label],
        generatedAt: generatedAt,
        editionDate: dateStr,
        sourcePublisher: q.sourcePublisher || subject.sources.split(',')[0].trim(),
        frequency: 3,
      }));

      return questions;
    } catch (err) {
      console.warn(`[GeminiCA] Attempt ${attempt + 1} failed for ${subject.id}:`, err);
      if (attempt < retries) {
        await new Promise((res) => setTimeout(res, 1500 * (attempt + 1)));
      }
    }
  }

  return []; // Return empty on all failures
}

/**
 * Generate 60 fresh UPSC MCQs across 6 subjects using Gemini API.
 * Calls each subject sequentially to avoid rate limits.
 */
export async function generateWithGemini(
  dateStr: string,
  apiKey?: string
): Promise<{ questions: Question[]; success: boolean; subjectCounts: Record<string, number> }> {
  const key = apiKey || process.env.GEMINI_API_KEY || '';
  if (!key) {
    return { questions: [], success: false, subjectCounts: {} };
  }

  const dateDisplay = (() => {
    const parts = dateStr.split('-');
    if (parts.length === 3) {
      const d = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
      return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
    }
    return dateStr;
  })();

  const allQuestions: Question[] = [];
  const subjectCounts: Record<string, number> = {};

  // Process subjects sequentially to respect rate limits
  for (const subject of SUBJECT_CONFIG) {
    const subjectQuestions = await generateQuestionsForSubject(subject, dateStr, dateDisplay, key);
    allQuestions.push(...subjectQuestions);
    subjectCounts[subject.id] = subjectQuestions.length;
    
    // Small delay between API calls to avoid rate limiting
    if (subject !== SUBJECT_CONFIG[SUBJECT_CONFIG.length - 1]) {
      await new Promise((res) => setTimeout(res, 500));
    }
  }

  return {
    questions: allQuestions,
    success: allQuestions.length >= 30, // Consider successful if at least half generated
    subjectCounts,
  };
}
