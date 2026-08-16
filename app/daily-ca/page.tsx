import type { Metadata } from 'next';
import DailyCAPage from './DailyCAPage';

export const metadata: Metadata = {
  title: 'Free Daily Current Affairs & News Information for UPSC (20 MCQs Daily) with Citations',
  description:
    'Practice 100% free daily current affairs and news information MCQs for UPSC Prelims. Daily 20 high-yield questions curated from The Hindu, Indian Express, PIB & Down To Earth with verified textbook page citations and strategic elimination notes.',
  keywords: [
    'free current affairs',
    'free daily current affairs',
    'free daily news information',
    'free daily news information for upsc',
    'free upsc current affairs mcq',
    'the hindu daily current affairs quiz',
    'pib daily upsc questions',
    'upsc prelims current affairs free 2026',
    'daily editorial mcqs upsc',
    'upsc news analysis quiz',
  ],
  alternates: {
    canonical: 'https://www.upscsphere.in/daily-ca',
  },
  openGraph: {
    title: 'Free Daily Current Affairs & News Information for UPSC | UPSCSphere',
    description:
      'Practice 20 free daily current affairs & editorial news MCQs from The Hindu, PIB & Indian Express with standard book citations. 100% Free.',
    url: 'https://www.upscsphere.in/daily-ca',
    type: 'website',
    images: [{ url: 'https://www.upscsphere.in/og-image.png', width: 1200, height: 630, alt: 'Free Daily UPSC Current Affairs' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Daily Current Affairs & News Information (20 MCQs) | UPSCSphere',
    description: '100% Free daily current affairs from The Hindu & PIB with verified textbook citations.',
    images: ['https://www.upscsphere.in/og-image.png'],
  },
};

export default function Page() {
  return <DailyCAPage />;
}