'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { 
  Check, 
  X, 
  Flag, 
  RotateCcw, 
  ChevronLeft, 
  ChevronRight, 
  Send, 
  Bookmark, 
  BookOpen, 
  Sparkles
} from 'lucide-react';
import { Question, QuizConfig, QuizResult } from '@/lib/types';
import { loadQuestions } from '@/lib/questionLoader';
import { evaluateQuiz } from '@/lib/scoringEngine';
import { saveQuizResult, toggleBookmark, getBookmarks } from '@/lib/localDB';
import OptionButton from '@/components/Quiz/OptionButton';
import InstantFeedbackBanner from '@/components/Quiz/InstantFeedbackBanner';
import QuestionPalette from '@/components/Quiz/QuestionPalette';
import CountdownTimer from '@/components/Quiz/CountdownTimer';

export default function LiveQuizSessionPage() {
  const router = useRouter();
  const params = useParams();
  const quizId = (params?.id as string) || 'custom-quiz';

  const [config, setConfig] = useState<QuizConfig>({
    id: 'default-quiz',
    title: 'UPSC Prelims Mock',
    subjects: ['polity', 'economy', 'history', 'geography', 'environment', 'csat_quant'],
    questionCount: 10,
    timeLimitMinutes: 15,
    mode: 'instant',
    paperType: 'GS',
    difficulty: 'all',
  });

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, { selectedOption: number | null; isMarkedForReview: boolean; timeSpentSeconds: number; eliminatedOptions?: number[] }>>({});
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const [totalTimeElapsed, setTotalTimeElapsed] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Initialize quiz questions from session storage config
  useEffect(() => {
    try {
      const storedConfig = sessionStorage.getItem('active_quiz_config');
      let activeConfig = config;
      if (storedConfig) {
        activeConfig = JSON.parse(storedConfig);
        setConfig(activeConfig);
      }

      // Load questions using questionLoader
      const allSubjects = activeConfig.subjects as string[];
      const filteredSubjects = allSubjects?.filter(s => s !== 'gs_full') as typeof activeConfig.subjects | undefined;
      const selected = loadQuestions({
        subjects: filteredSubjects?.length ? filteredSubjects : undefined,
        count: activeConfig.questionCount || 10,
        paperType: activeConfig.paperType || 'GS',
        difficulty: activeConfig.difficulty || 'all',
        isPYQOnly: activeConfig.isPYQOnly,
        pyqYear: activeConfig.pyqYear,
        isDailyCA: activeConfig.isDailyCA,
        dailyCASet: activeConfig.dailyCASet,
      });

      setQuestions(selected);

      // Initialize empty answer map
      const initialAnswers: Record<string, { selectedOption: number | null; isMarkedForReview: boolean; timeSpentSeconds: number; eliminatedOptions?: number[] }> = {};
      selected.forEach((q) => {
        initialAnswers[q.id] = {
          selectedOption: null,
          isMarkedForReview: false,
          timeSpentSeconds: 0,
          eliminatedOptions: [],
        };
      });
      setAnswers(initialAnswers);
      setBookmarkedIds(getBookmarks());
    } catch (err) {
      console.error('Failed to initialize quiz session:', err);
      const fallback = loadQuestions({ count: 10 });
      setQuestions(fallback);
    }
  }, []);

  if (questions.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center space-y-4">
        <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-500 mx-auto animate-spin">
          <Sparkles className="w-6 h-6" />
        </div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Initializing Custom UPSC Mock...</h2>
        <p className="text-xs text-slate-600 dark:text-slate-400">Loading authentic UPSC standard questions and exact page citations.</p>
      </div>
    );
  }

  const currentQ = questions[currentIndex];
  const currentAnswer = answers[currentQ.id] || {
    selectedOption: null,
    isMarkedForReview: false,
    timeSpentSeconds: 0,
    eliminatedOptions: [],
  };

  const isInstantMode = config.mode === 'instant';
  const hasAnsweredCurrent = currentAnswer.selectedOption !== null && currentAnswer.selectedOption !== undefined;
  const isBookmarked = bookmarkedIds.includes(currentQ.id);

  const handleSelectOption = (optionIndex: number) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQ.id]: {
        ...prev[currentQ.id],
        selectedOption: optionIndex,
      },
    }));
  };

  const handleToggleEliminate = (optionIndex: number) => {
    setAnswers((prev) => {
      const currentElim = prev[currentQ.id]?.eliminatedOptions || [];
      const updatedElim = currentElim.includes(optionIndex)
        ? currentElim.filter((idx) => idx !== optionIndex)
        : [...currentElim, optionIndex];
      return {
        ...prev,
        [currentQ.id]: {
          ...prev[currentQ.id],
          eliminatedOptions: updatedElim,
        },
      };
    });
  };

  const handleToggleReview = () => {
    setAnswers((prev) => ({
      ...prev,
      [currentQ.id]: {
        ...prev[currentQ.id],
        isMarkedForReview: !prev[currentQ.id]?.isMarkedForReview,
      },
    }));
  };

  const handleClearResponse = () => {
    setAnswers((prev) => ({
      ...prev,
      [currentQ.id]: {
        ...prev[currentQ.id],
        selectedOption: null,
      },
    }));
  };

  const handleToggleBookmark = () => {
    const newState = toggleBookmark(currentQ.id);
    setBookmarkedIds((prev) =>
      newState ? [...prev, currentQ.id] : prev.filter((id) => id !== currentQ.id)
    );
  };

  const handleSubmitQuiz = () => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    const result = evaluateQuiz(
      quizId,
      config.title || 'UPSC Prelims Mock',
      questions,
      answers,
      config.paperType || 'GS',
      totalTimeElapsed
    );

    saveQuizResult(result);
    sessionStorage.setItem(`quiz_result_${result.quizId}`, JSON.stringify(result));
    router.push(`/quiz/results/${result.quizId}`);
  };

  // Letters array for options A, B, C, D
  const letters = ['A', 'B', 'C', 'D'];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-16 py-6">
      {/* Top Test Header Bar */}
      <div className="liquid-card rounded-2xl p-5 sm:p-6 border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-slate-950/70 mb-6 flex items-center justify-between flex-wrap gap-4 shadow-sm">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 dark:bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-700 dark:text-amber-400 font-black text-lg">
            Q{currentIndex + 1}
          </div>
          <div>
            <div className="flex items-center gap-2.5">
              <h2 className="font-extrabold text-slate-900 dark:text-white text-base sm:text-lg">{currentQ.topic}</h2>
              {currentQ.isPYQ && (
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-purple-500/10 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 border border-purple-500/30">
                  UPSC PYQ {currentQ.pyqYear}
                </span>
              )}
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">{currentQ.subTopic}</p>
          </div>
        </div>

        {/* Timer & Submit Controls */}
        <div className="flex items-center gap-3">
          <CountdownTimer
            initialMinutes={config.timeLimitMinutes}
            onTimeExpire={handleSubmitQuiz}
            onTick={(secs) => setTotalTimeElapsed(secs)}
          />

          <button
            onClick={handleSubmitQuiz}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-slate-950 font-extrabold text-xs sm:text-sm shadow-lg shadow-emerald-500/20 transition-all hover:scale-105"
          >
            <Send className="w-4 h-4" />
            <span>Submit Test</span>
          </button>
        </div>
      </div>

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Question & Options (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          <div className="liquid-card rounded-3xl p-6 sm:p-9 border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-slate-950/70 relative shadow-sm">
            {/* Action icons (Bookmark, Mark for Review, Difficulty tag) */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/10 mb-6 flex-wrap gap-2.5">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-bold px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                  {currentQ.difficulty}
                </span>
                <span className="text-xs font-bold px-3 py-1 rounded-xl bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20">
                  {config.paperType === 'GS' ? '+2.0 / -0.66 Marks' : '+2.5 / -0.83 Marks'}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <button
                  onClick={handleToggleReview}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                    currentAnswer.isMarkedForReview
                      ? 'bg-amber-500/20 text-amber-800 dark:text-amber-300 border-amber-500/40'
                      : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <Flag className={`w-4 h-4 ${currentAnswer.isMarkedForReview ? 'fill-amber-500 text-amber-500' : ''}`} />
                  <span>{currentAnswer.isMarkedForReview ? 'Marked' : 'Mark for Review'}</span>
                </button>

                <button
                  onClick={handleToggleBookmark}
                  className={`p-2.5 rounded-xl border transition-all ${
                    isBookmarked
                      ? 'bg-amber-500/20 text-amber-600 dark:text-amber-400 border-amber-500/40'
                      : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:text-slate-900 dark:hover:text-white'
                  }`}
                  title="Bookmark Question"
                >
                  <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500 text-amber-500' : ''}`} />
                </button>
              </div>
            </div>

            {/* Question Text */}
            <div className="text-base sm:text-lg font-medium text-slate-900 dark:text-slate-100 leading-relaxed whitespace-pre-line mb-8">
              {currentQ.question}
            </div>

            {/* Options List */}
            <div className="space-y-4">
              {currentQ.options.map((optionText, idx) => (
                <OptionButton
                  key={idx}
                  index={idx}
                  letter={letters[idx]}
                  text={optionText}
                  isSelected={currentAnswer.selectedOption === idx}
                  isEliminated={(currentAnswer.eliminatedOptions || []).includes(idx)}
                  correctAnswer={currentQ.correctAnswer}
                  showInstantFeedback={isInstantMode && hasAnsweredCurrent}
                  onSelect={handleSelectOption}
                  onToggleEliminate={handleToggleEliminate}
                />
              ))}
            </div>

            {/* Bottom Controls (Clear, Prev, Next) */}
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10 flex items-center justify-between flex-wrap gap-3">
              <button
                onClick={handleClearResponse}
                disabled={!hasAnsweredCurrent}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                  hasAnsweredCurrent
                    ? 'text-slate-600 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-500/10'
                    : 'text-slate-400 dark:text-slate-600 cursor-not-allowed'
                }`}
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Clear Response</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
                  disabled={currentIndex === 0}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
                    currentIndex > 0
                      ? 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700'
                      : 'bg-slate-50 dark:bg-slate-900 text-slate-400 dark:text-slate-600 border-slate-200 dark:border-slate-800 cursor-not-allowed'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                {currentIndex < questions.length - 1 ? (
                  <button
                    onClick={() => setCurrentIndex((prev) => Math.min(questions.length - 1, prev + 1))}
                    className="flex items-center gap-1.5 px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 transition-all"
                  >
                    <span>Next</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmitQuiz}
                    className="flex items-center gap-1.5 px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs shadow-lg shadow-emerald-500/20 transition-all"
                  >
                    <span>Finish & See Scorecard</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* On-The-Spot Instant Feedback Banner (Displayed when answered in Instant Mode) */}
          {isInstantMode && hasAnsweredCurrent && (
            <InstantFeedbackBanner
              question={currentQ}
              selectedOption={currentAnswer.selectedOption}
              onNext={
                currentIndex < questions.length - 1
                  ? () => setCurrentIndex((prev) => prev + 1)
                  : handleSubmitQuiz
              }
              isLastQuestion={currentIndex === questions.length - 1}
            />
          )}
        </div>

        {/* Right Column: Question Palette & Book Citation Quickcard (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <QuestionPalette
            totalQuestions={questions.length}
            currentIndex={currentIndex}
            answers={answers}
            questionIds={questions.map((q) => q.id)}
            onSelectIndex={(idx) => setCurrentIndex(idx)}
          />

          {/* Reference Book Card Preview */}
          <div className="liquid-card rounded-2xl p-5 border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-slate-950/70 shadow-sm">
            <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-bold text-xs mb-3">
              <BookOpen className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span>Reference Source for this Topic</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-white/5 space-y-1.5 text-xs">
              <div className="text-slate-500 dark:text-slate-400 text-[11px]">Mapped Standard Book:</div>
              <div className="font-bold text-slate-900 dark:text-white">{currentQ.bookReference.bookName}</div>
              <div className="text-slate-600 dark:text-slate-300 text-[11px]">{currentQ.bookReference.chapter}</div>
              <div className="pt-1 flex items-center justify-between text-[11px] border-t border-slate-200 dark:border-white/10 mt-2">
                <span className="text-slate-500 dark:text-slate-400">Page Citation:</span>
                <span className="font-bold text-amber-700 dark:text-amber-400">{currentQ.bookReference.pageNumber}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
