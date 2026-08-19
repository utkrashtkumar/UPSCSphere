import React from 'react';
import type { Metadata } from 'next';
import TrackerClientPage from './TrackerClientPage';

export const metadata: Metadata = {
  title: 'UPSC CSE 2026–2027 Exam Tracker & Eligibility Calculator | UPSCSphere',
  description:
    'Live UPSC Civil Services Examination calendar, countdown to CSE Prelims 2027, official notification dates, vacancy trends, historical cutoffs (2018–2026), and instant Age Limit & Attempt Eligibility Calculator.',
  keywords: [
    'UPSC exam date 2027',
    'UPSC prelims 2027 countdown',
    'UPSC age calculator',
    'UPSC attempts remaining checker',
    'UPSC eligibility criteria 2027',
    'UPSC vacancy trends',
    'UPSC cutoff marks previous years',
    'UPSC notification 2027 release date',
  ],
  alternates: {
    canonical: 'https://www.upscsphere.in/tracker',
  },
  openGraph: {
    title: 'UPSC CSE 2026–2027 Exam Tracker & Eligibility Calculator | UPSCSphere',
    description:
      'Track official UPSC calendar dates, live countdown to Prelims, historical cutoffs, and check your exact remaining attempts.',
    url: 'https://www.upscsphere.in/tracker',
    type: 'website',
    images: [{ url: 'https://www.upscsphere.in/og-image.png', width: 1200, height: 630 }],
  },
};

export default function TrackerPage() {
  return <TrackerClientPage />;
}
