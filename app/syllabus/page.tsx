'use client';

import React, { useState, useEffect } from 'react';
import { 
  Layers, 
  Check, 
  ChevronDown, 
  ChevronUp
} from 'lucide-react';
import { upscSyllabus } from '@/data/syllabusData';
import { SyllabusPaperType } from '@/lib/types';
import { getSyllabusProgress, updateSyllabusTopic } from '@/lib/localDB';

export default function SyllabusPage() {
  const [selectedPaper, setSelectedPaper] = useState<SyllabusPaperType>('Prelims_GS1');
  const [progressMap, setProgressMap] = useState<Record<string, { isCompleted: boolean; revisionCount: number }>>({});
  const [expandedTopicId, setExpandedTopicId] = useState<string | null>(null);

  useEffect(() => {
    setProgressMap(getSyllabusProgress());
  }, []);

  const handleToggleCompleted = (topicId: string) => {
    const current = progressMap[topicId] || { isCompleted: false, revisionCount: 0 };
    const nextCompleted = !current.isCompleted;
    updateSyllabusTopic(topicId, nextCompleted, 0);
    setProgressMap(getSyllabusProgress());
  };

  const handleIncrementRevision = (topicId: string, delta: number) => {
    const current = progressMap[topicId] || { isCompleted: false, revisionCount: 0 };
    updateSyllabusTopic(topicId, current.isCompleted, delta);
    setProgressMap(getSyllabusProgress());
  };

  const filteredSyllabus = upscSyllabus.filter((item) => item.paper === selectedPaper);
  const totalTopics = filteredSyllabus.length;
  const completedTopics = filteredSyllabus.filter((t) => progressMap[t.id]?.isCompleted).length;
  const overallPercentage = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;

  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-16 py-8 space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs font-bold mb-3">
          <Layers className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span>Micro-Topic Syllabus Checklist</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          UPSC Prelims <span className="tricolor-gradient-text">Syllabus Micro-Tracker</span>
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-2xl mx-auto">
          Track every GS-1 and CSAT sub-topic down to the root concept. Monitor your 1st, 2nd, and 3rd revision rounds with zero data loss.
        </p>
      </div>

      {/* Progress Overview Card */}
      <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 border-emerald-500/30 shadow-sm">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-3">
          <div>
            <h2 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg">Overall Syllabus Readiness</h2>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              {completedTopics} of {totalTopics} Core Modules Completed
            </p>
          </div>
          <div className="text-2xl font-black text-emerald-700 dark:text-emerald-400">
            {overallPercentage}% Complete
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-3.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden border border-slate-200 dark:border-slate-700">
          <div
            className="h-full bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-600 rounded-full transition-all duration-500"
            style={{ width: `${overallPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Paper Switcher Tabs */}
      <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 overflow-x-auto">
        <button
          onClick={() => setSelectedPaper('Prelims_GS1')}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
            selectedPaper === 'Prelims_GS1' ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          Prelims GS Paper 1
        </button>
        <button
          onClick={() => setSelectedPaper('Prelims_CSAT')}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
            selectedPaper === 'Prelims_CSAT' ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          Prelims CSAT Paper 2
        </button>
      </div>

      {/* Syllabus Topics Accordion List */}
      <div className="space-y-4">
        {filteredSyllabus.map((item) => {
          const prog = progressMap[item.id] || { isCompleted: false, revisionCount: 0 };
          const isExpanded = expandedTopicId === item.id;

          return (
            <div
              key={item.id}
              className={`liquid-glass-card rounded-3xl transition-all shadow-sm ${
                prog.isCompleted ? 'border-emerald-500/50 bg-emerald-50/50 dark:bg-emerald-950/15' : ''
              }`}
            >
              {/* Card Header Bar */}
              <div className="p-5 flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-3.5">
                  <button
                    onClick={() => handleToggleCompleted(item.id)}
                    className={`w-6 h-6 rounded-lg border flex items-center justify-center transition-all ${
                      prog.isCompleted
                        ? 'bg-emerald-600 border-emerald-500 text-white font-bold'
                        : 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 hover:border-orange-500'
                    }`}
                  >
                    {prog.isCompleted && <Check className="w-4 h-4 stroke-[3]" />}
                  </button>

                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 block">
                      {item.subject}
                    </span>
                    <h3 className={`font-bold text-sm ${prog.isCompleted ? 'text-emerald-700 dark:text-emerald-300 line-through' : 'text-slate-900 dark:text-white'}`}>
                      {item.topic}
                    </h3>
                  </div>
                </div>

                {/* Revision Pill Controls */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10">
                    <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-400 px-2">
                      Revisions: <strong className="text-orange-600 dark:text-orange-400 font-bold">{prog.revisionCount}x</strong>
                    </span>
                    <button
                      onClick={() => handleIncrementRevision(item.id, -1)}
                      disabled={prog.revisionCount <= 0}
                      className="w-6 h-6 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white flex items-center justify-center font-bold text-xs disabled:opacity-30"
                    >
                      -
                    </button>
                    <button
                      onClick={() => handleIncrementRevision(item.id, 1)}
                      className="w-6 h-6 rounded bg-orange-500 text-white hover:bg-orange-600 flex items-center justify-center font-bold text-xs shadow-sm"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => setExpandedTopicId(isExpanded ? null : item.id)}
                    className="p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Subtopics Checklist Drawer */}
              {isExpanded && (
                <div className="px-5 pb-5 pt-2 border-t border-slate-200 dark:border-white/5 space-y-2 text-xs text-slate-700 dark:text-slate-300 animate-fade-in">
                  <span className="text-[11px] font-bold text-slate-600 dark:text-slate-400 block mb-2">Micro-Topics Checklist:</span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {item.subTopics.map((sub, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-white/5 flex items-center gap-2 shadow-sm"
                      >
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        <span className="font-medium">{sub}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
