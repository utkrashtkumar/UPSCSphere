import type { Metadata } from 'next';
import PYQPage from './PYQPage';

export const metadata: Metadata = {
  title: 'Free Full PYQ of UPSC Prelims GS and CSAT (2015–2026) with Proper Citations and Reference',
  description:
    'Practice free full PYQ of UPSC Prelims GS Paper 1 and CSAT Paper 2 from 2015 to 2026 (12 Years Vault) with verified official answer keys, 2-hour timed exam simulations, negative marking, and exact textbook page citations & references.',
  keywords: [
    'free full pyq of upsc prelims gs and csat',
    'free full pyq of upsc prelims gs and csat with proper citations and reference',
    'free upsc pyq with citations and references',
    'upsc pyq 2015 to 2026 free',
    'upsc prelims previous year questions',
    'upsc gs paper 1 pyq free test',
    'upsc csat paper 2 pyq free',
    'upsc official question papers with solutions',
    'upsc prelims solved papers free',
  ],
  alternates: {
    canonical: 'https://www.upscsphere.in/pyq',
  },
  openGraph: {
    title: 'Free Full PYQ of UPSC Prelims GS and CSAT (2015–2026) | UPSCSphere',
    description:
      'All 12 years of official UPSC Prelims GS Paper 1 & CSAT Paper 2 questions with verified answer keys, elimination notes, and proper book page citations. 100% Free.',
    url: 'https://www.upscsphere.in/pyq',
    type: 'website',
    images: [{ url: 'https://www.upscsphere.in/og-image.png', width: 1200, height: 630, alt: 'Free Full PYQ of UPSC Prelims GS and CSAT' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Full PYQ of UPSC Prelims GS & CSAT | UPSCSphere',
    description: '12-Year UPSC Prelims PYQ Vault (2015-2026) with proper citations & references. 100% Free.',
    images: ['https://www.upscsphere.in/og-image.png'],
  },
};

export default function Page() {
  return <PYQPage />;
}