export interface ExamMilestone {
  id: string;
  stage: string;
  date: string;
  displayDate: string;
  status: 'completed' | 'active' | 'upcoming';
  description: string;
}

export interface YearCalendar {
  year: number;
  prelimsExamDate: string;
  mainsExamDate: string;
  milestones: ExamMilestone[];
}

export interface CategoryEligibility {
  category: string;
  minAge: number;
  maxAge: number;
  maxAttempts: number | 'Unlimited';
  fee: string;
  notes: string;
}

export interface HistoricalTrend {
  year: number;
  vacancies: number;
  gsCutoff: number; // Raw marks out of 200 for General
  obcCutoff: number;
  scCutoff: number;
  stCutoff: number;
  applicantsEstimated: string;
}

export const cseCalendars: YearCalendar[] = [
  {
    year: 2027,
    prelimsExamDate: '2027-05-23T09:30:00+05:30',
    mainsExamDate: '2027-09-17T09:00:00+05:30',
    milestones: [
      {
        id: 'notif-2027',
        stage: 'Official Notification & Registration Opens',
        date: '2027-02-10',
        displayDate: '10 February 2027',
        status: 'upcoming',
        description: 'UPSC CSE 2027 official notification PDF and online application portal opens on upsconline.nic.in.',
      },
      {
        id: 'close-2027',
        stage: 'Application Deadline & Correction Window',
        date: '2027-03-02',
        displayDate: '02 March 2027',
        status: 'upcoming',
        description: 'Last date for submission of online applications followed by a 7-day correction window.',
      },
      {
        id: 'admit-2027',
        stage: 'e-Admit Card Release',
        date: '2027-05-08',
        displayDate: 'Early May 2027 (Tentative)',
        status: 'upcoming',
        description: 'Download e-Admit Card with examination venue details on UPSC portal.',
      },
      {
        id: 'prelims-2027',
        stage: 'Civil Services (Preliminary) Examination 2027',
        date: '2027-05-23',
        displayDate: '23 May 2027 (Sunday)',
        status: 'upcoming',
        description: 'Paper 1 (General Studies: 09:30 AM – 11:30 AM) & Paper 2 (CSAT: 02:30 PM – 04:30 PM).',
      },
      {
        id: 'mains-2027',
        stage: 'Civil Services (Mains) Examination 2027',
        date: '2027-09-17',
        displayDate: '17 September 2027 (5 Days)',
        status: 'upcoming',
        description: 'Descriptive written examination consisting of 9 papers across two weekends.',
      },
    ],
  },
  {
    year: 2026,
    prelimsExamDate: '2026-05-24T09:30:00+05:30',
    mainsExamDate: '2026-09-18T09:00:00+05:30',
    milestones: [
      {
        id: 'notif-2026',
        stage: 'Official Notification & Registration',
        date: '2026-02-11',
        displayDate: '11 February 2026',
        status: 'completed',
        description: 'Official notification released with over 1,000+ vacancies reported.',
      },
      {
        id: 'prelims-2026',
        stage: 'Civil Services (Preliminary) Exam 2026',
        date: '2026-05-24',
        displayDate: '24 May 2026',
        status: 'completed',
        description: 'Prelims concluded across 79 nationwide centers with moderate-to-high analytical depth.',
      },
      {
        id: 'prelims-res-2026',
        stage: 'Prelims Results & DAF-1 Release',
        date: '2026-06-16',
        displayDate: 'June 2026',
        status: 'completed',
        description: 'Roll numbers of 14,000+ qualified aspirants declared for CSE Mains.',
      },
      {
        id: 'mains-2026',
        stage: 'Civil Services (Mains) Examination 2026',
        date: '2026-09-18',
        displayDate: '18 September 2026',
        status: 'active',
        description: '9 descriptive papers across Essay, GS 1-4, Compulsory Languages, and Optional Papers 1 & 2.',
      },
      {
        id: 'interview-2026',
        stage: 'Personality Test (Interviews) & Final Merit List',
        date: '2027-01-15',
        displayDate: 'Jan – April 2027',
        status: 'upcoming',
        description: '275-mark Personality Test at Dholpur House, New Delhi followed by final AIR allocation.',
      },
    ],
  },
];

export const categoryEligibilityRules: CategoryEligibility[] = [
  {
    category: 'General (UR)',
    minAge: 21,
    maxAge: 32,
    maxAttempts: 6,
    fee: '₹100 (Female candidates exempted)',
    notes: 'Age calculated as on 1st August of the examination year.',
  },
  {
    category: 'EWS (Economically Weaker Section)',
    minAge: 21,
    maxAge: 32,
    maxAttempts: 6,
    fee: '₹100 (Female candidates exempted)',
    notes: 'Income & Asset certificate for the relevant financial year required.',
  },
  {
    category: 'OBC (Non-Creamy Layer)',
    minAge: 21,
    maxAge: 35,
    maxAttempts: 9,
    fee: '₹100 (Female candidates exempted)',
    notes: '3 years age relaxation; Non-Creamy Layer OBC certificate required.',
  },
  {
    category: 'SC / ST',
    minAge: 21,
    maxAge: 37,
    maxAttempts: 'Unlimited',
    fee: '₹0 (100% Fee Exempted)',
    notes: '5 years age relaxation; Unlimited attempts up to age 37.',
  },
  {
    category: 'PwBD (General / EWS / OBC)',
    minAge: 21,
    maxAge: 42,
    maxAttempts: 9,
    fee: '₹0 (100% Fee Exempted)',
    notes: '10 years age relaxation; 9 attempts for Gen/OBC.',
  },
  {
    category: 'PwBD (SC / ST)',
    minAge: 21,
    maxAge: 42,
    maxAttempts: 'Unlimited',
    fee: '₹0 (100% Fee Exempted)',
    notes: '10 years age relaxation; Unlimited attempts up to age 42.',
  },
];

export const historicalTrends: HistoricalTrend[] = [
  { year: 2026, vacancies: 1056, gsCutoff: 88.5, obcCutoff: 86.0, scCutoff: 74.5, stCutoff: 70.0, applicantsEstimated: '11.5 Lakh' },
  { year: 2025, vacancies: 1105, gsCutoff: 87.2, obcCutoff: 85.1, scCutoff: 73.8, stCutoff: 69.4, applicantsEstimated: '11.2 Lakh' },
  { year: 2024, vacancies: 1056, gsCutoff: 89.4, obcCutoff: 87.3, scCutoff: 75.1, stCutoff: 70.5, applicantsEstimated: '10.8 Lakh' },
  { year: 2023, vacancies: 1105, gsCutoff: 75.41, obcCutoff: 74.75, scCutoff: 59.25, stCutoff: 47.82, applicantsEstimated: '10.2 Lakh' },
  { year: 2022, vacancies: 1022, gsCutoff: 88.22, obcCutoff: 87.54, scCutoff: 74.08, stCutoff: 69.35, applicantsEstimated: '11.3 Lakh' },
  { year: 2021, vacancies: 712, gsCutoff: 87.54, obcCutoff: 84.85, scCutoff: 75.41, stCutoff: 70.71, applicantsEstimated: '10.9 Lakh' },
  { year: 2020, vacancies: 796, gsCutoff: 92.51, obcCutoff: 89.12, scCutoff: 74.84, stCutoff: 68.71, applicantsEstimated: '10.5 Lakh' },
  { year: 2019, vacancies: 896, gsCutoff: 98.00, obcCutoff: 95.34, scCutoff: 82.00, stCutoff: 77.34, applicantsEstimated: '11.4 Lakh' },
  { year: 2018, vacancies: 782, gsCutoff: 98.00, obcCutoff: 96.66, scCutoff: 84.00, stCutoff: 83.34, applicantsEstimated: '10.6 Lakh' },
];

export const officialResources = [
  {
    title: 'UPSC Examination Calendar',
    url: 'https://upsc.gov.in/examinations/examination-calendar',
    description: 'Official annual program of examinations and recruitment tests published by UPSC.',
  },
  {
    title: 'Online Application Portal (OTR)',
    url: 'https://upsconline.nic.in/',
    description: 'One Time Registration (OTR) and online application form portal.',
  },
  {
    title: 'Previous Year Master Answer Keys',
    url: 'https://upsc.gov.in/examinations/answer-keys',
    description: 'Official master question papers and final verified answer keys released post-examination.',
  },
];
