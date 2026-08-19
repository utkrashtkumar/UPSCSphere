import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import DuelArenaClient from './DuelArenaClient';

export const metadata: Metadata = {
  title: '1v1 Live UPSC Aspirant Duel Arena & Custom Rooms | UPSCSphere',
  description:
    'Challenge fellow UPSC CSE aspirants in real-time 1v1 speed battles. Create custom private duel rooms with custom topics, timers, and question counts, or join via room code.',
  keywords: [
    'UPSC 1v1 duel',
    'UPSC quiz battle with friends',
    'live UPSC mock duel',
    'custom room UPSC quiz',
    'IAS aspirant battle',
  ],
  alternates: {
    canonical: 'https://www.upscsphere.in/duel',
  },
  openGraph: {
    title: '1v1 Live UPSC Aspirant Duel Arena | UPSCSphere',
    description:
      'Challenge friends in real-time 1v1 UPSC Prelims speed battles with custom room creation, topics, and timers.',
    url: 'https://www.upscsphere.in/duel',
    type: 'website',
    images: [{ url: 'https://www.upscsphere.in/og-image.png', width: 1200, height: 630 }],
  },
};

export default function DuelPage() {
  return (
    <Suspense fallback={
      <div className="w-full px-4 py-24 text-center space-y-4 max-w-xl mx-auto">
        <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="text-xs font-bold text-slate-600 dark:text-slate-400">Loading 1v1 Duel Arena...</p>
      </div>
    }>
      <DuelArenaClient />
    </Suspense>
  );
}
