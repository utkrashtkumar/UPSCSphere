import type { Metadata } from 'next';
import DailyCAPage from './DailyCAPage';

export const metadata: Metadata = {
  title: 'Daily Current Affairs (20 UPSC MCQs) from The Hindu, PIB & Indian Express',
  description:
    '20 fresh UPSC Prelims Current Affairs MCQs every morning at 7 AM IST from The Hindu, PIB, Indian Express and Down To Earth with exact Laxmikanth, Shankar IAS and Ramesh Singh book citations. Solve free online.',
  keywords: [
    'UPSC Current Affairs 2026',
    'UPSC Daily MCQ',
    'The Hindu UPSC questions',
    'PIB UPSC current affairs',
    'UPSC Prelims current affairs free',
    'daily current affairs UPSC 2026',
  ],
  alternates: {
    canonical: 'https://www.upscsphere.in/daily-ca',
  },
  openGraph: {
    title: 'Daily Current Affairs (20 UPSC MCQs) | UPSCSphere',
    description:
      '20 fresh UPSC Prelims Current Affairs MCQs every morning from The Hindu, PIB & Indian Express with exact book citations. 100% Free.',
    url: 'https://www.upscsphere.in/daily-ca',
    type: 'website',
    images: [{ url: 'https://www.upscsphere.in/og-image.png', width: 1200, height: 630, alt: 'UPSCSphere Daily Current Affairs' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daily 20 UPSC CA MCQs | UPSCSphere',
    description: 'AI-generated from The Hindu, PIB, Indian Express. Free. With exact book citations.',
    images: ['https://www.upscsphere.in/og-image.png'],
  },
};

export default function Page() {
  return <DailyCAPage />;
}