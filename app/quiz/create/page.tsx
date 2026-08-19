import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import QuizCreatePage from './QuizCreatePage';

export const metadata: Metadata = {
  title: 'Free UPSC Mock Tests & Prelims Test Series (GS & CSAT) with Book Citations',
  description:
    'Generate 100% free UPSC Prelims mock tests & speed drills across Indian Polity, Economy, Modern History, Geography, Environment, and CSAT with exact standard textbook citations, 50:50 elimination, and instant scoring.',
  keywords: [
    'free mock tests',
    'free upsc mock tests',
    'free upsc prelims mock test',
    'free upsc prelims test series',
    'free upsc csat mock test',
    'upsc polity mock test free',
    'upsc economy mock test free',
    'upsc history questions with citations',
    'upsc custom test generator',
    'free ias test series online',
  ],
  alternates: {
    canonical: 'https://www.upscsphere.in/quiz/create',
  },
  openGraph: {
    title: 'Free UPSC Mock Tests & Prelims Test Series | UPSCSphere',
    description:
      'Create customized UPSC Prelims mock tests for GS Paper 1 and CSAT with verified book page citations and negative marking. 100% Free.',
    url: 'https://www.upscsphere.in/quiz/create',
    type: 'website',
    images: [{ url: 'https://www.upscsphere.in/og-image.png', width: 1200, height: 630, alt: 'Free UPSC Mock Tests' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free UPSC Mock Tests & Speed Drills | UPSCSphere',
    description: '100% Free custom UPSC Prelims GS & CSAT mock tests with textbook citations.',
    images: ['https://www.upscsphere.in/og-image.png'],
  },
};

export default function Page() {
  return (
    <Suspense fallback={
      <div className="w-full px-4 py-24 text-center space-y-4 max-w-xl mx-auto">
        <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="text-xs font-bold text-slate-600 dark:text-slate-400">Loading Quiz Builder...</p>
      </div>
    }>
      <QuizCreatePage />
    </Suspense>
  );
}
