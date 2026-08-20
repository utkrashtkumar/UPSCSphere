import { Question } from '@/lib/types';
import { getCuratedQuestionsForDate } from '@/data/dailyCAData';

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
}

/**
 * Generates UPSC-standard Current Affairs questions with full citations and generation timestamps for a given date.
 * If AI API keys (GEMINI_API_KEY, GOOGLE_AI_API_KEY, OPENAI_API_KEY) are configured, it can dynamically query the AI.
 * Otherwise, it uses the verified multi-source editorial engine.
 */
export async function generateDailyCAEdition(targetDate?: string): Promise<GeneratedEdition> {
  const dateStr = targetDate || getTodayISTDate();
  const timestampStr = formatISTTimestamp(dateStr);

  const geminiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_AI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const openaiKey = process.env.OPENAI_API_KEY;

  // Attempt AI generation if Gemini key is available
  if (geminiKey && !geminiKey.startsWith('AQ.')) {
    try {
      const aiQuestions = await generateWithGemini(geminiKey, dateStr, timestampStr);
      if (aiQuestions && aiQuestions.length >= 10) {
        return {
          edition_date: dateStr,
          headline: `Daily UPSC Current Affairs & Editorial Dossier (${dateStr})`,
          generated_at: timestampStr,
          questions: aiQuestions.map((q, idx) => ({
            ...q,
            id: q.id || `ca-${dateStr}-${String(idx + 1).padStart(2, '0')}`,
            generatedAt: q.generatedAt || timestampStr,
            editionDate: dateStr,
            sourcePublisher: q.sourcePublisher || q.bookReference?.bookName || 'The Hindu & PIB Delhi',
          })),
          sources: ['PIB Delhi', 'The Hindu', 'Indian Express', 'Down To Earth', 'PRS India', 'Ministry Releases'],
          total_count: aiQuestions.length,
        };
      }
    } catch (err) {
      console.warn('Gemini Daily CA generation error, falling back to curated engine:', err);
    }
  }

  // Attempt OpenAI generation if OpenAI key is available
  if (openaiKey) {
    try {
      const aiQuestions = await generateWithOpenAI(openaiKey, dateStr, timestampStr);
      if (aiQuestions && aiQuestions.length >= 10) {
        return {
          edition_date: dateStr,
          headline: `Daily UPSC Current Affairs & Editorial Dossier (${dateStr})`,
          generated_at: timestampStr,
          questions: aiQuestions.map((q, idx) => ({
            ...q,
            id: q.id || `ca-${dateStr}-${String(idx + 1).padStart(2, '0')}`,
            generatedAt: q.generatedAt || timestampStr,
            editionDate: dateStr,
            sourcePublisher: q.sourcePublisher || q.bookReference?.bookName || 'The Hindu & PIB Delhi',
          })),
          sources: ['PIB Delhi', 'The Hindu', 'Indian Express', 'Down To Earth', 'PRS India', 'Ministry Releases'],
          total_count: aiQuestions.length,
        };
      }
    } catch (err) {
      console.warn('OpenAI Daily CA generation error, falling back to curated engine:', err);
    }
  }

  // Default / Verified Multi-Edition Editorial Engine
  const baseQuestions = getCuratedQuestionsForDate(dateStr);
  const questions: Question[] = baseQuestions.map((q, idx) => ({
    ...q,
    id: `ca-${dateStr}-${String(idx + 1).padStart(2, '0')}`,
    generatedAt: q.generatedAt || timestampStr,
    editionDate: dateStr,
    sourcePublisher: q.sourcePublisher || q.bookReference?.bookName || 'PIB Delhi & The Hindu',
  }));

  return {
    edition_date: dateStr,
    headline: `Daily UPSC Current Affairs & Editorial Dossier (${dateStr})`,
    generated_at: timestampStr,
    questions: questions,
    sources: [
      'PIB Delhi',
      'The Hindu & Indian Express',
      'Department of Science & Technology (DST)',
      'Supreme Court of India (7-Judge Bench)',
      'Reserve Bank of India (RBI)',
      'Down To Earth & MoEFCC',
      'PRS Legislative Research & NITI Aayog',
    ],
    total_count: questions.length,
  };
}

/**
 * Helper to generate questions via Google Gemini API
 */
async function generateWithGemini(apiKey: string, dateStr: string, timestampStr: string): Promise<Question[] | null> {
  const prompt = `You are a Senior UPSC CSE Prelims Question Setter.
Today's date is: ${dateStr}. Generation timestamp: ${timestampStr}.
Generate exactly 10 high-yield UPSC Civil Services Prelims MCQs based on today's/recent authentic Indian news (The Hindu, Indian Express, PIB, Down To Earth, PRS India, Ministry Releases, Supreme Court Rulings, Budget/Schemes, Science & Tech, Environment).

Output ONLY a valid JSON array of objects without markdown backticks.
Each object must have these exact keys:
{
  "id": "ca-${dateStr}-01",
  "subject": "current_affairs",
  "topic": "Polity / Economy / Sci-Tech / Environment / IR",
  "subTopic": "Specific scheme or issue name",
  "question": "Question statement formatted with numbered statements (1., 2., 3.) or standard UPSC direct framing. Which of the statements given above is/are correct?",
  "options": ["Option A", "Option B", "Option C", "Option D"],
  "correctAnswer": 0,
  "explanation": "Detailed explanation of each statement with factual rationale.",
  "bookReference": {
    "bookName": "PIB / The Hindu / PRS India / Indian Express / Ministry Release",
    "edition": "${dateStr}",
    "chapter": "Relevant Section / Department",
    "pageNumber": "Reference ID / Page Number",
    "keyExcerpt": "Direct quote or core summary from source"
  },
  "eliminationTip": "UPSC elimination logic or trap guidance.",
  "difficulty": "UPSC Standard",
  "tags": ["Current Affairs", "Topic1", "Topic2"],
  "generatedAt": "${timestampStr}",
  "editionDate": "${dateStr}",
  "sourcePublisher": "The Hindu / PIB Delhi"
}`;

  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.2,
        responseMimeType: 'application/json',
      },
    }),
  });

  if (!response.ok) {
    throw new Error(`Gemini API returned status ${response.status}`);
  }

  const data = await response.json();
  const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!rawText) return null;

  const parsed = JSON.parse(rawText);
  return Array.isArray(parsed) ? (parsed as Question[]) : null;
}

/**
 * Helper to generate questions via OpenAI API
 */
async function generateWithOpenAI(apiKey: string, dateStr: string, timestampStr: string): Promise<Question[] | null> {
  const prompt = `You are a Senior UPSC CSE Prelims Question Setter. Today's date is: ${dateStr}. Timestamp: ${timestampStr}.
Generate 10 high-yield UPSC Civil Services Prelims MCQs based on authentic Indian current affairs (The Hindu, Indian Express, PIB, Down To Earth, PRS India).
Output a JSON array adhering to the UPSC Question schema with generatedAt: "${timestampStr}".`;

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      response_format: { type: 'json_object' },
      temperature: 0.2,
    }),
  });

  if (!response.ok) {
    throw new Error(`OpenAI API returned status ${response.status}`);
  }

  const data = await response.json();
  const rawText = data?.choices?.[0]?.message?.content;
  if (!rawText) return null;

  const parsed = JSON.parse(rawText);
  const list = Array.isArray(parsed) ? parsed : parsed.questions || parsed.data;
  return Array.isArray(list) ? (list as Question[]) : null;
}
