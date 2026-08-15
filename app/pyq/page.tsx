import type { Metadata } from 'next';
import PYQPage from './PYQPage';

export const metadata: Metadata = {
  title: '12-Year UPSC Prelims PYQ Vault (2015-2026) | GS Paper 1 & CSAT Paper 2',
  description:
    'Complete 12-year official UPSC Civil Services Preliminary Examination PYQ vault (2015-2026) with GS Paper 1 and CSAT Paper 2 questions, verified answer keys, book citations, and one-click 2-hour timed exam simulation. 100% Free.',
  keywords: [
    'UPSC PYQ 2015 to 2026',
    'UPSC previous year questions',
    'UPSC Prelims 2026 questions',
    'UPSC GS Paper 1 questions',
    'UPSC CSAT Paper 2 questions',
    'UPSC official question papers',
    'IAS previous year papers free',
    'UPSC prelims past papers',
  ],
  alternates: {
    canonical: 'https://www.upscsphere.in/pyq',
  },
  openGraph: {
    title: '12-Year UPSC PYQ Vault (2015-2026) | UPSCSphere',
    description:
      'All official UPSC Prelims GS Paper 1 & CSAT Paper 2 questions from 2015-2026 with verified answer keys and book citations. Free.',
    url: 'https://www.upscsphere.in/pyq',
    type: 'website',
    images: [{ url: 'https://www.upscsphere.in/og-image.png', width: 1200, height: 630, alt: 'UPSC PYQ Vault 2015-2026' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UPSC PYQ Vault 2015-2026 | UPSCSphere',
    description: 'All 12 years of UPSC Prelims GS1 & CSAT questions with verified keys. Free.',
    images: ['https://www.upscsphere.in/og-image.png'],
  },
};

export default function Page() {
  return <PYQPage />;
}