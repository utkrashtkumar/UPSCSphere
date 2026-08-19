import React from 'react';
import type { Metadata } from 'next';
import PublicProfileClient from './PublicProfileClient';

interface Props {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return [
    { id: 'me' },
    { id: 'topper-1' },
    { id: 'topper-2' },
    { id: 'topper-3' },
  ];
}

export function generateMetadata({ params }: Props): Metadata {
  const aspirantId = params.id;
  const name = aspirantId === 'me' ? 'UPSC Aspirant' : aspirantId.replace('-', ' ').replace(/\b\w/g, (l) => l.toUpperCase());

  return {
    title: `${name} — Public Profile & All-India Mock Record | UPSCSphere`,
    description: `View ${name}'s verified UPSC Prelims mock performance, average score, percentile, study streak, and achievement badges on UPSCSphere.`,
    keywords: [
      `${name} UPSC`,
      'UPSC aspirant profile',
      'UPSC mock test rank',
      'UPSC topper scorecard',
    ],
    alternates: {
      canonical: `https://www.upscsphere.in/aspirant/${aspirantId}`,
    },
    openGraph: {
      title: `${name} — UPSC Aspirant Performance Profile | UPSCSphere`,
      description: `View ${name}'s verified UPSC Prelims mock performance, average score, percentile, and streak on UPSCSphere.`,
      url: `https://www.upscsphere.in/aspirant/${aspirantId}`,
      type: 'profile',
      images: [{ url: 'https://www.upscsphere.in/og-image.png', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${name} — UPSC Aspirant Profile | UPSCSphere`,
      description: `Track mock test scores and study streak on UPSCSphere.`,
      images: ['https://www.upscsphere.in/og-image.png'],
    },
  };
}

export default function Page({ params }: Props) {
  return <PublicProfileClient aspirantId={params.id} />;
}
