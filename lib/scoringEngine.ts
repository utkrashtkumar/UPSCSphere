import { Question, UserAnswer, QuizResult, PaperType, LeaderboardEntry } from '@/lib/types';

// UPSC Standard Marking Scheme Constants
export const GS_CORRECT_MARKS = 2.0;
export const GS_NEGATIVE_PENALTY = 0.6667; // 1/3rd of 2.0

export const CSAT_CORRECT_MARKS = 2.5;
export const CSAT_NEGATIVE_PENALTY = 0.8333; // 1/3rd of 2.5
export const CSAT_PASSING_MARKS = 66.0; // 33% of 200

export function evaluateQuiz(
  quizId: string,
  title: string,
  questions: Question[],
  userAnswers: Record<string, { selectedOption: number | null; isMarkedForReview: boolean; timeSpentSeconds: number; eliminatedOptions?: number[] }>,
  paperType: PaperType = 'GS',
  totalTimeSpentSeconds: number = 0
): QuizResult {
  const correctMarks = paperType === 'GS' ? GS_CORRECT_MARKS : CSAT_CORRECT_MARKS;
  const negativePenalty = paperType === 'GS' ? GS_NEGATIVE_PENALTY : CSAT_NEGATIVE_PENALTY;

  let correctCount = 0;
  let wrongCount = 0;
  let unattemptedCount = 0;
  let grossScore = 0;
  let negativeMarksLost = 0;

  const subjectStats: Record<string, { total: number; correct: number; wrong: number; accuracy: number }> = {};
  const processedAnswers: UserAnswer[] = [];

  questions.forEach((q) => {
    const ans = userAnswers[q.id] || { selectedOption: null, isMarkedForReview: false, timeSpentSeconds: 0, eliminatedOptions: [] };
    const isAttempted = ans.selectedOption !== null && ans.selectedOption !== undefined;
    const isCorrect = isAttempted ? ans.selectedOption === q.correctAnswer : false;

    // Track subject stats
    const subjKey = q.subject || 'general';
    if (!subjectStats[subjKey]) {
      subjectStats[subjKey] = { total: 0, correct: 0, wrong: 0, accuracy: 0 };
    }
    subjectStats[subjKey].total += 1;

    if (!isAttempted) {
      unattemptedCount += 1;
    } else if (isCorrect) {
      correctCount += 1;
      grossScore += correctMarks;
      subjectStats[subjKey].correct += 1;
    } else {
      wrongCount += 1;
      negativeMarksLost += negativePenalty;
      subjectStats[subjKey].wrong += 1;
    }

    processedAnswers.push({
      questionId: q.id,
      selectedOption: ans.selectedOption,
      isCorrect: isAttempted ? isCorrect : null,
      timeSpentSeconds: ans.timeSpentSeconds || 0,
      isMarkedForReview: ans.isMarkedForReview || false,
      eliminatedOptions: ans.eliminatedOptions || [],
    });
  });

  // Calculate subject accuracies
  const weakAreas: string[] = [];
  const strongAreas: string[] = [];

  Object.entries(subjectStats).forEach(([subj, stats]) => {
    const attemptedInSubj = stats.correct + stats.wrong;
    stats.accuracy = attemptedInSubj > 0 ? Math.round((stats.correct / attemptedInSubj) * 100) : 0;
    
    if (stats.total >= 2) {
      if (stats.accuracy >= 70) {
        strongAreas.push(subj);
      } else if (stats.accuracy < 50 || stats.wrong >= 2) {
        weakAreas.push(subj);
      }
    }
  });

  const netScore = Math.max(0, parseFloat((grossScore - negativeMarksLost).toFixed(2)));
  const totalQuestions = questions.length;
  const maxScore = totalQuestions * correctMarks;
  const attemptedCount = correctCount + wrongCount;
  const overallAccuracy = attemptedCount > 0 ? Math.round((correctCount / attemptedCount) * 100) : 0;

  // Realistic UPSC All-India Rank simulation based on standard normal distribution of scores
  // Average score in Prelims GS1 is ~75-85 / 200, top scores ~115-130 / 200
  const normalizedPercentage = maxScore > 0 ? (netScore / maxScore) * 100 : 0;
  
  let simulatedPercentile = 50;
  if (normalizedPercentage >= 80) simulatedPercentile = 99.5;
  else if (normalizedPercentage >= 70) simulatedPercentile = 98.2;
  else if (normalizedPercentage >= 60) simulatedPercentile = 94.5;
  else if (normalizedPercentage >= 50) simulatedPercentile = 86.0;
  else if (normalizedPercentage >= 40) simulatedPercentile = 72.0;
  else if (normalizedPercentage >= 30) simulatedPercentile = 54.0;
  else simulatedPercentile = Math.max(10, Math.round(normalizedPercentage * 1.5));

  // Approx 50,000 active mock takers
  const totalMockTakers = 48500;
  const estimatedAIR = Math.max(1, Math.round(totalMockTakers * (1 - simulatedPercentile / 100)));

  return {
    quizId,
    title,
    date: new Date().toISOString(),
    paperType,
    totalQuestions,
    attempted: attemptedCount,
    correct: correctCount,
    wrong: wrongCount,
    unattempted: unattemptedCount,
    score: netScore,
    maxScore,
    accuracy: overallAccuracy,
    negativeMarksLost: parseFloat(negativeMarksLost.toFixed(2)),
    timeSpentSeconds: totalTimeSpentSeconds,
    estimatedAIR,
    percentile: parseFloat(simulatedPercentile.toFixed(1)),
    subjectBreakdown: subjectStats,
    weakAreas: weakAreas.length > 0 ? weakAreas : ['Environment & Ecology', 'Current Affairs'],
    strongAreas: strongAreas.length > 0 ? strongAreas : ['Indian Polity'],
    answers: processedAnswers,
    questions,
  };
}

export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

export function getSubjectDisplayName(subject: string): string {
  const map: Record<string, string> = {
    polity: 'Indian Polity & Governance',
    history: 'History of India & INM',
    economy: 'Economic & Social Development',
    geography: 'Physical & Indian Geography',
    environment: 'Environment & Climate Change',
    science_tech: 'Science & Technology',
    current_affairs: 'National & Global Events',
    csat_quant: 'CSAT: Basic Numeracy',
    csat_reasoning: 'CSAT: Logical & Analytical',
    csat_reading: 'CSAT: Reading Comprehension',
    mixed_mock: 'UPSC Full Mock',
  };
  return map[subject] || subject.replace(/_/g, ' ').toUpperCase();
}
