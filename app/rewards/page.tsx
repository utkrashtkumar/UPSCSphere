import React from 'react';
import type { Metadata } from 'next';
import RewardsClientPage from './RewardsClientPage';

export const metadata: Metadata = {
  title: 'Aspirant Rewards, Rank Tiers & Badges Vault | UPSCSphere',
  description:
    'Earn XP points, unlock prestigious UPSC rank tiers from Rookie to AIR Topper Champion, and collect verified achievement badges for mock test completions and study streaks.',
  keywords: [
    'UPSC rewards',
    'UPSC aspirant XP',
    'UPSC rank tiers',
    'UPSC mock test badges',
    'UPSC achievement certificates',
  ],
  alternates: {
    canonical: 'https://www.upscsphere.in/rewards',
  },
  openGraph: {
    title: 'Aspirant Rewards & Badges Vault | UPSCSphere',
    description: 'Level up through 6 UPSC rank tiers and unlock achievement badges as you prepare for Prelims.',
    url: 'https://www.upscsphere.in/rewards',
    type: 'website',
    images: [{ url: 'https://www.upscsphere.in/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aspirant Rewards & Badges Vault | UPSCSphere',
    description: 'Level up through 6 UPSC rank tiers and unlock achievement badges on UPSCSphere.',
    images: ['https://www.upscsphere.in/og-image.png'],
  },
};

export default function Page() {
  return <RewardsClientPage />;
}
