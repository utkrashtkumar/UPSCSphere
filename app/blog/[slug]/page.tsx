import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogPosts, getBlogPostBySlug, getAllBlogSlugs } from '@/data/blogData';
import { getQuestionById } from '@/lib/questionLoader';
import BlogArticleClient from './BlogArticleClient';

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getBlogPostBySlug(params.slug);
  if (!post) {
    return {
      title: 'Article Not Found | UPSCSphere',
      description: 'The requested UPSC study article could not be found.',
    };
  }

  const canonicalUrl = `https://www.upscsphere.in/blog/${post.slug}`;

  return {
    title: `${post.title} | UPSCSphere Knowledge Hub`,
    description: post.description,
    keywords: [
      ...post.tags,
      'UPSC Prelims study material',
      'UPSC CSE high yield notes',
      'UPSC solved questions with citations',
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${post.title} | UPSCSphere`,
      description: post.description,
      url: canonicalUrl,
      type: 'article',
      publishedTime: post.publishedDate,
      modifiedTime: post.lastUpdated,
      authors: [post.author.name],
      tags: post.tags,
      images: [
        {
          url: 'https://www.upscsphere.in/og-image.png',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | UPSCSphere`,
      description: post.description,
      images: ['https://www.upscsphere.in/og-image.png'],
    },
  };
}

export default function ArticlePage({ params }: Props) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) {
    notFound();
  }

  // Load related practice questions for the interactive in-article quiz widget
  const linkedQuestions = post.relatedQuestionIds
    .map((id) => getQuestionById(id))
    .filter((q): q is NonNullable<typeof q> => q !== null);

  // JSON-LD Article Schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://www.upscsphere.in',
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Knowledge Hub',
            'item': 'https://www.upscsphere.in/blog',
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': post.title,
            'item': `https://www.upscsphere.in/blog/${post.slug}`,
          },
        ],
      },
      {
        '@type': 'Article',
        'headline': post.title,
        'description': post.description,
        'image': 'https://www.upscsphere.in/og-image.png',
        'datePublished': post.publishedDate,
        'dateModified': post.lastUpdated,
        'author': {
          '@type': 'Organization',
          'name': post.author.name,
          'url': 'https://www.upscsphere.in/about',
        },
        'publisher': {
          '@type': 'Organization',
          'name': 'UPSCSphere',
          'url': 'https://www.upscsphere.in',
          'logo': {
            '@type': 'ImageObject',
            'url': 'https://www.upscsphere.in/logo.png',
          },
        },
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id': `https://www.upscsphere.in/blog/${post.slug}`,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogArticleClient post={post} linkedQuestions={linkedQuestions} />
    </>
  );
}
