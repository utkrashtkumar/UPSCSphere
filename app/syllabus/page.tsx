import type { Metadata } from 'next';
import SyllabusPage from './SyllabusPage';

export const metadata: Metadata = {
  title: 'UPSC Prelims Syllabus Tracker | GS-1 & CSAT Micro-Topic Checklist 2026',
  description:
    'Interactive UPSC Civil Services Prelims GS Paper 1 and CSAT Paper 2 micro-topic syllabus tracker with 37 topics and 180+ concepts. Track 1st reading, revision, and active recall rounds. Free.',
  keywords: [
    'UPSC syllabus 2026',
    'UPSC GS Paper 1 syllabus',
    'UPSC CSAT syllabus',
    'UPSC Prelims syllabus tracker',
    'UPSC preparation checklist',
    'IAS syllabus topics',
  ],
  alternates: { canonical: 'https://www.upscsphere.in/syllabus' },
  openGraph: {
    title: 'UPSC Prelims GS-1 & CSAT Syllabus Tracker | UPSCSphere',
    description: 'Track your GS1 & CSAT syllabus completion with 37 topics and 180+ micro-concepts.',
    url: 'https://www.upscsphere.in/syllabus',
    type: 'website',
    images: [{ url: 'https://www.upscsphere.in/og-image.png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <SyllabusPage />;
}