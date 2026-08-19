'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { 
  Calendar, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  TrendingUp, 
  Calculator, 
  ShieldCheck, 
  ExternalLink, 
  Sparkles, 
  Layers, 
  ArrowRight, 
  Flame, 
  BookOpen, 
  RotateCcw,
  Check
} from 'lucide-react';
import { 
  cseCalendars, 
  categoryEligibilityRules, 
  historicalTrends, 
  officialResources 
} from '@/data/trackerData';

export default function TrackerClientPage() {
  const [selectedYear, setSelectedYear] = useState<number>(2027);

  // Countdown state to UPSC CSE Prelims 2027 (23 May 2027, 09:30 AM IST)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2027-05-23T09:30:00+05:30').getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // ----------------------------------------------------
  // Interactive Age & Attempt Eligibility Calculator State
  // ----------------------------------------------------
  const [dob, setDob] = useState<string>('2002-05-15');
  const [category, setCategory] = useState<string>('General (UR)');
  const [pastAttempts, setPastAttempts] = useState<number>(0);
  const [targetYear, setTargetYear] = useState<number>(2027);

  const eligibilityResult = useMemo(() => {
    if (!dob) return null;

    const birthDate = new Date(dob);
    if (isNaN(birthDate.getTime())) return null;

    // UPSC Rule: Age is strictly calculated on 1st August of the examination year
    const august1st = new Date(`${targetYear}-08-01T00:00:00`);

    let years = august1st.getFullYear() - birthDate.getFullYear();
    let months = august1st.getMonth() - birthDate.getMonth();
    let days = august1st.getDate() - birthDate.getDate();

    if (days < 0) {
      months -= 1;
      const prevMonth = new Date(august1st.getFullYear(), august1st.getMonth(), 0);
      days += prevMonth.getDate();
    }
    if (months < 0) {
      years -= 1;
      months += 12;
    }

    const exactAge = years + months / 12 + days / 365.25;

    // Get limits for category
    const catRule = categoryEligibilityRules.find((c) => c.category === category) || categoryEligibilityRules[0];
    const minAge = catRule.minAge;
    const maxAge = catRule.maxAge;
    const maxAttempts = catRule.maxAttempts;

    const isAgeEligible = exactAge >= minAge && exactAge <= maxAge;
    const remainingAttempts =
      maxAttempts === 'Unlimited' ? 'Unlimited' : Math.max(0, maxAttempts - pastAttempts);

    const isAttemptsEligible = maxAttempts === 'Unlimited' ? true : pastAttempts < maxAttempts;
    const isOverallEligible = isAgeEligible && isAttemptsEligible;

    // Calculate last eligible exam year
    // Max age year: Year where birthDate + maxAge falls on or before Aug 1st
    const lastExamYear = birthDate.getFullYear() + maxAge + (birthDate.getMonth() >= 7 ? 0 : 0);

    return {
      years,
      months,
      days,
      exactAge: exactAge.toFixed(1),
      isAgeEligible,
      isAttemptsEligible,
      isOverallEligible,
      remainingAttempts,
      maxAge,
      minAge,
      maxAttempts,
      lastExamYear: Math.max(targetYear, lastExamYear),
    };
  }, [dob, category, pastAttempts, targetYear]);

  const activeCalendar = cseCalendars.find((c) => c.year === selectedYear) || cseCalendars[0];

  const addToGoogleCalendar = () => {
    const title = encodeURIComponent('UPSC Civil Services (Preliminary) Examination 2027');
    const details = encodeURIComponent('Paper 1: GS (09:30 AM) & Paper 2: CSAT (02:30 PM). Powered by UPSCSphere.in');
    const location = encodeURIComponent('All-India Designated UPSC Exam Centers');
    const dates = '20270523T040000Z/20270523T110000Z'; // 09:30 AM to 04:30 PM IST in UTC
    window.open(
      `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${dates}`,
      '_blank'
    );
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-16 py-8 sm:py-12 space-y-12 max-w-6xl mx-auto">
      
      {/* 1. Hero Countdown Section */}
      <div className="liquid-glass-card rounded-3xl p-6 sm:p-10 border-orange-500/30 shadow-2xl space-y-6 relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 text-orange-700 dark:text-orange-400 text-xs font-black border border-orange-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Official UPSC Calendar Live Tracker</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              UPSC CSE 2027 Exam Countdown
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Civil Services (Preliminary) Exam 2027 scheduled on <strong>Sunday, 23 May 2027</strong>.
            </p>
          </div>

          <button
            type="button"
            onClick={addToGoogleCalendar}
            className="px-4 py-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-xs font-bold text-slate-800 dark:text-slate-200 hover:border-orange-500 hover:text-orange-600 transition-all flex items-center gap-2 cursor-pointer shrink-0 shadow-sm"
          >
            <Calendar className="w-4 h-4 text-orange-500" />
            <span>Add to Google Calendar</span>
          </button>
        </div>

        {/* 4-Digit Digital Clock Box */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2">
          <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100/60 dark:from-slate-900/90 dark:to-slate-950 border border-slate-200 dark:border-white/10 text-center space-y-1 shadow-sm">
            <span className="text-3xl sm:text-5xl font-black text-orange-600 dark:text-orange-400 font-mono tracking-tight">
              {timeLeft.days}
            </span>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 block">
              Days Left
            </span>
          </div>

          <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100/60 dark:from-slate-900/90 dark:to-slate-950 border border-slate-200 dark:border-white/10 text-center space-y-1 shadow-sm">
            <span className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white font-mono tracking-tight">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 block">
              Hours
            </span>
          </div>

          <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100/60 dark:from-slate-900/90 dark:to-slate-950 border border-slate-200 dark:border-white/10 text-center space-y-1 shadow-sm">
            <span className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white font-mono tracking-tight">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 block">
              Minutes
            </span>
          </div>

          <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100/60 dark:from-slate-900/90 dark:to-slate-950 border border-slate-200 dark:border-white/10 text-center space-y-1 shadow-sm">
            <span className="text-3xl sm:text-5xl font-black text-emerald-600 dark:text-emerald-400 font-mono tracking-tight animate-pulse">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 block">
              Seconds
            </span>
          </div>
        </div>
      </div>

      {/* 2. Interactive Age Limit & Attempt Eligibility Calculator */}
      <section className="liquid-glass-card rounded-3xl p-6 sm:p-10 border border-orange-500/20 shadow-xl space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              Official UPSC Age &amp; Attempt Eligibility Calculator
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              UPSC calculates age strictly on <strong>1st August</strong> of the examination year. Enter your details below for instant verification.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* DOB Input */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
              Date of Birth <span className="text-rose-500">*</span>
            </label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-orange-500 font-mono shadow-sm"
            />
          </div>

          {/* Category Selector */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
              Reservation Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-orange-500 shadow-sm"
            >
              {categoryEligibilityRules.map((c) => (
                <option key={c.category} value={c.category}>
                  {c.category}
                </option>
              ))}
            </select>
          </div>

          {/* Past Attempts Input */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
              Attempts Already Given
            </label>
            <input
              type="number"
              min="0"
              max="10"
              value={pastAttempts}
              onChange={(e) => setPastAttempts(Math.max(0, parseInt(e.target.value) || 0))}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-orange-500 font-mono shadow-sm"
            />
          </div>

          {/* Target Exam Year */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
              Target UPSC Year
            </label>
            <select
              value={targetYear}
              onChange={(e) => setTargetYear(parseInt(e.target.value))}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-orange-500 shadow-sm"
            >
              <option value={2026}>UPSC CSE 2026</option>
              <option value={2027}>UPSC CSE 2027</option>
              <option value={2028}>UPSC CSE 2028</option>
              <option value={2029}>UPSC CSE 2029</option>
            </select>
          </div>

        </div>

        {/* Calculation Result Dashboard */}
        {eligibilityResult && (
          <div
            className={`p-6 rounded-2xl border transition-all ${
              eligibilityResult.isOverallEligible
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-950 dark:text-emerald-200'
                : 'bg-rose-500/10 border-rose-500/30 text-rose-950 dark:text-rose-200'
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-current/10">
              <div className="flex items-center gap-3">
                {eligibilityResult.isOverallEligible ? (
                  <div className="w-10 h-10 rounded-2xl bg-emerald-500 text-white flex items-center justify-center font-bold shadow-md">
                    <Check className="w-6 h-6" />
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-2xl bg-rose-500 text-white flex items-center justify-center font-bold shadow-md">
                    <AlertCircle className="w-6 h-6" />
                  </div>
                )}
                <div>
                  <h3 className="text-base sm:text-lg font-black">
                    {eligibilityResult.isOverallEligible
                      ? `Eligible for UPSC CSE ${targetYear} ✅`
                      : `Ineligible for UPSC CSE ${targetYear} ❌`}
                  </h3>
                  <p className="text-xs opacity-80">
                    Age on 1st August {targetYear}:{' '}
                    <strong>
                      {eligibilityResult.years} years, {eligibilityResult.months} months, {eligibilityResult.days} days
                    </strong>{' '}
                    ({eligibilityResult.exactAge} yrs)
                  </p>
                </div>
              </div>

              <div className="text-xs font-bold px-3 py-1.5 rounded-xl bg-white/60 dark:bg-slate-900/60 border border-current/20 shrink-0">
                Category Allowed Range: {eligibilityResult.minAge} – {eligibilityResult.maxAge} years
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-xs">
              <div className="p-3.5 rounded-xl bg-white/60 dark:bg-slate-900/60 border border-current/10 space-y-1">
                <span className="opacity-70 block text-[10px] uppercase font-bold">Age Eligibility</span>
                <span className="font-black text-sm">
                  {eligibilityResult.isAgeEligible ? 'Eligible (Within Bracket)' : 'Ineligible (Age Limit Exceeded/Underage)'}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-white/60 dark:bg-slate-900/60 border border-current/10 space-y-1">
                <span className="opacity-70 block text-[10px] uppercase font-bold">Attempts Remaining</span>
                <span className="font-black text-sm">
                  {eligibilityResult.remainingAttempts} of {eligibilityResult.maxAttempts} Allowed
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-white/60 dark:bg-slate-900/60 border border-current/10 space-y-1">
                <span className="opacity-70 block text-[10px] uppercase font-bold">Last Eligible Attempt Year</span>
                <span className="font-black text-sm">
                  Up to UPSC CSE {eligibilityResult.lastExamYear}
                </span>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* 3. Examination Milestones Timeline */}
      <section className="space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              Official Examination Stages &amp; Timeline
            </h2>
            <p className="text-xs text-slate-500">
              Key milestone schedule for the Civil Services Examination cycle.
            </p>
          </div>

          {/* Year toggle buttons */}
          <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
            <button
              onClick={() => setSelectedYear(2027)}
              className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedYear === 2027
                  ? 'bg-orange-500 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              UPSC CSE 2027
            </button>
            <button
              onClick={() => setSelectedYear(2026)}
              className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedYear === 2026
                  ? 'bg-orange-500 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              UPSC CSE 2026
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {activeCalendar.milestones.map((milestone, idx) => {
            let statusBadge = (
              <span className="px-2.5 py-0.5 rounded-md bg-blue-500/10 text-blue-700 dark:text-blue-400 text-[10px] font-black uppercase">
                Upcoming
              </span>
            );

            if (milestone.status === 'completed') {
              statusBadge = (
                <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-[10px] font-black uppercase">
                  Concluded
                </span>
              );
            } else if (milestone.status === 'active') {
              statusBadge = (
                <span className="px-2.5 py-0.5 rounded-md bg-orange-500 text-white text-[10px] font-black uppercase animate-pulse">
                  Active Now
                </span>
              );
            }

            return (
              <div
                key={milestone.id}
                className="liquid-glass-card rounded-2xl p-5 sm:p-6 border border-slate-200 dark:border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm"
              >
                <div className="space-y-1 max-w-2xl">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-mono font-bold text-orange-600 dark:text-orange-400">
                      Step 0{idx + 1}
                    </span>
                    <span className="text-slate-400">•</span>
                    {statusBadge}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {milestone.stage}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    {milestone.description}
                  </p>
                </div>

                <div className="text-left sm:text-right shrink-0">
                  <span className="text-xs font-bold text-slate-900 dark:text-white block">
                    {milestone.displayDate}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Historical Vacancy & Cutoff Trend Analytics (2018–2026) */}
      <section className="liquid-glass-card rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-orange-500" />
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                Historical UPSC Vacancies &amp; Prelims Cutoff Trends (2018–2026)
              </h2>
            </div>
            <p className="text-xs text-slate-500">
              Raw marks out of 200 required in General Studies Paper 1 to qualify for CSE Mains.
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white font-bold border-b border-slate-200 dark:border-white/10">
                <th className="py-3 px-3.5">Year</th>
                <th className="py-3 px-3.5">Total Vacancies</th>
                <th className="py-3 px-3.5">General (UR) Cutoff</th>
                <th className="py-3 px-3.5">OBC Cutoff</th>
                <th className="py-3 px-3.5">SC Cutoff</th>
                <th className="py-3 px-3.5">ST Cutoff</th>
                <th className="py-3 px-3.5">Estimated Applicants</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-white/5 text-slate-700 dark:text-slate-300">
              {historicalTrends.map((row, idx) => (
                <tr key={row.year} className={idx % 2 === 1 ? 'bg-slate-50/50 dark:bg-slate-900/30' : ''}>
                  <td className="py-3 px-3.5 font-bold text-slate-900 dark:text-white font-mono">
                    {row.year}
                  </td>
                  <td className="py-3 px-3.5 font-semibold text-orange-600 dark:text-orange-400">
                    {row.vacancies}
                  </td>
                  <td className="py-3 px-3.5 font-bold text-slate-900 dark:text-white">
                    {row.gsCutoff}
                  </td>
                  <td className="py-3 px-3.5">{row.obcCutoff}</td>
                  <td className="py-3 px-3.5">{row.scCutoff}</td>
                  <td className="py-3 px-3.5">{row.stCutoff}</td>
                  <td className="py-3 px-3.5 text-slate-500">{row.applicantsEstimated}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. Official UPSC Portals & Resources */}
      <section className="space-y-4">
        <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-500" />
          <span>Official UPSC Portals &amp; Verification Links</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {officialResources.map((res, idx) => (
            <a
              key={idx}
              href={res.url}
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-glass-card rounded-2xl p-5 border border-slate-200/80 dark:border-white/5 hover:border-orange-500 transition-all hover:scale-[1.01] space-y-2 group shadow-sm block"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-slate-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                  {res.title}
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-orange-500 transition-colors" />
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                {res.description}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* 6. Quick CTA to Practice */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-emerald-500/10 border border-orange-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="space-y-1">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
            Ready to Begin Today&apos;s UPSC Prelims Practice?
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Attempt 20 fresh daily current affairs questions or solve full 12-year PYQs with page citations.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0 flex-wrap justify-center">
          <Link
            href="/daily-ca"
            className="px-4 py-2.5 rounded-2xl bg-orange-500 text-white font-bold text-xs hover:bg-orange-600 transition-all shadow-md shadow-orange-500/20"
          >
            Daily Current Affairs (20 MCQs)
          </Link>
          <Link
            href="/pyq"
            className="px-4 py-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-bold text-xs hover:border-orange-500 transition-all"
          >
            12-Yr PYQ Vault
          </Link>
        </div>
      </div>

    </div>
  );
}
