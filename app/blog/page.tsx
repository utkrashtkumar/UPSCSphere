import React from 'react';
import type { Metadata } from 'next';
import { blogPosts } from '@/data/blogData';
import BlogDirectoryClient from './BlogDirectoryClient';

export const metadata: Metadata = {
  title: 'UPSC CSE Prelims Knowledge Hub & High-Yield Topic Guides | UPSCSphere',
  description:
    'Explore in-depth syllabus guides, key articles summary, economic indicators, environment maps, and UPSC Prelims elimination masterclasses with verified textbook references and integrated practice MCQs.',
  keywords: [
    'UPSC prelims blog',
    'UPSC topic wise notes',
    'Fundamental rights summary UPSC',
    'Ramsar sites list UPSC 2026',
    'Monetary policy tools UPSC',
    'UPSC elimination techniques',
    'IAS prelims study material free',
  ],
  alternates: {
    canonical: 'https://www.upscsphere.in/blog',
  },
  openGraph: {
    title: 'UPSC CSE Prelims Knowledge Hub & High-Yield Guides | UPSCSphere',
    description:
      'High-yield UPSC revision guides with textbook citations, summary tables, and embedded practice MCQs.',
    url: 'https://www.upscsphere.in/blog',
    type: 'website',
    images: [{ url: 'https://www.upscsphere.in/og-image.png', width: 1200, height: 630 }],
  },
};

export default function BlogPage() {
  return <BlogDirectoryClient posts={blogPosts} />;
}
