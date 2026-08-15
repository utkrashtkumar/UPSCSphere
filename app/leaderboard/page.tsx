import type { Metadata } from 'next';
import LeaderboardPage from './LeaderboardPage';

export const metadata: Metadata = {
  title: 'All-India UPSC Aspirant Leaderboard & AIR Rankings',
  description:
    'Compare your UPSC Prelims mock test score against thousands of aspirants on the live All-India Leaderboard. Track your AIR rank, percentile, and cutoff probability for free.',
  keywords: [
    'UPSC AIR ranking',
    'UPSC aspirant leaderboard',
    'UPSC all India rank',
    'UPSC rank predictor',
    'UPSC cutoff 2026',
    'UPSC percentile calculator',
  ],
  alternates: { canonical: 'https://www.upscsphere.in/leaderboard' },
  openGraph: {
    title: 'All-India UPSC Aspirant Leaderboard | UPSCSphere',
    description: 'See your live All-India Rank among UPSC aspirants based on mock test scores.',
    url: 'https://www.upscsphere.in/leaderboard',
    type: 'website',
    images: [{ url: 'https://www.upscsphere.in/og-image.png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <LeaderboardPage />;
}