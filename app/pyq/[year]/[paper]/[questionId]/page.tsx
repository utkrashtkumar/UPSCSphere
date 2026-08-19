import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { pyqVault } from '@/data/pyqVault';
import { getQuestionById, getPYQAdjacentQuestions, getRelatedQuestions } from '@/lib/questionLoader';
import { PaperType } from '@/lib/types';
import QuestionDetailPage from './QuestionDetailPage';

interface Props {
  params: {
    year: string;
    paper: string;
    questionId: string;
  };
}

// Generate static params for all PYQ questions
export function generateStaticParams() {
  return pyqVault.map((q) => ({
    year: String(q.pyqYear || 2026),
    paper: (q.pyqPaper || 'GS').toLowerCase(),
    questionId: q.id,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const { year, paper, questionId } = params;
  const question = getQuestionById(questionId);

  if (!question) {
    return {
      title: 'Question Not Found | UPSCSphere',
      description: 'The requested UPSC Prelims PYQ question could not be found.',
    };
  }

  const paperUpper = paper.toUpperCase();
  const title = `UPSC ${year} ${paperUpper} Prelims: "${question.topic}" — Solved with Book Citations`;
  const cleanSnippet = question.question.replace(/\n+/g, ' ').slice(0, 160) + '...';
  const canonicalUrl = `https://www.upscsphere.in/pyq/${year}/${paper.toLowerCase()}/${questionId}`;

  return {
    title: `${title} | UPSCSphere`,
    description: `Official UPSC CSE Prelims ${year} ${paperUpper} question on ${question.topic}. ${cleanSnippet} Includes official answer key, elimination notes, and textbook citations.`,
    keywords: [
      `UPSC ${year} PYQ`,
      `UPSC Prelims ${year} ${paperUpper}`,
      `${question.topic} UPSC`,
      `${question.subTopic} UPSC Prelims`,
      'upsc question solved with citation',
      'upsc previous year question paper',
      ...(question.tags || []),
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${title} | UPSCSphere`,
      description: cleanSnippet,
      url: canonicalUrl,
      type: 'article',
      images: [
        {
          url: 'https://www.upscsphere.in/og-image.png',
          width: 1200,
          height: 630,
          alt: `UPSC Prelims ${year} Question: ${question.topic}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | UPSCSphere`,
      description: cleanSnippet,
      images: ['https://www.upscsphere.in/og-image.png'],
    },
  };
}

export default function Page({ params }: Props) {
  const { year, paper, questionId } = params;
  const yearNum = parseInt(year, 10);
  const paperType = paper.toUpperCase() as PaperType;

  const question = getQuestionById(questionId);
  if (!question) {
    notFound();
  }

  const { prev, next, allInSet } = getPYQAdjacentQuestions(yearNum, paperType, questionId);
  const relatedQuestions = getRelatedQuestions(question, 4);

  // Build Quiz / Question Schema JSON-LD for Google Rich Snippets
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
            'name': '12-Yr PYQ Vault',
            'item': 'https://www.upscsphere.in/pyq',
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': `UPSC ${year} ${paper.toUpperCase()}`,
            'item': `https://www.upscsphere.in/pyq?year=${year}&paper=${paper.toUpperCase()}`,
          },
          {
            '@type': 'ListItem',
            'position': 4,
            'name': question.topic,
            'item': `https://www.upscsphere.in/pyq/${year}/${paper.toLowerCase()}/${questionId}`,
          },
        ],
      },
      {
        '@type': 'Quiz',
        'name': `UPSC Civil Services Prelims ${year} (${paper.toUpperCase()}) — ${question.topic}`,
        'description': `Official solved question from UPSC CSE Prelims ${year} on ${question.topic} with textbook page citations.`,
        'educationalLevel': 'Competitive Examination (UPSC CSE)',
        'about': {
          '@type': 'Thing',
          'name': question.topic,
        },
        'hasPart': [
          {
            '@type': 'Question',
            'eduQuestionType': 'Multiple choice',
            'text': question.question,
            'suggestedAnswer': question.options.map((opt, idx) => ({
              '@type': 'Answer',
              'position': idx + 1,
              'text': opt,
            })),
            'acceptedAnswer': {
              '@type': 'Answer',
              'position': question.correctAnswer + 1,
              'text': question.options[question.correctAnswer],
              'comment': {
                '@type': 'Comment',
                'text': `${question.explanation} Reference: ${question.bookReference.bookName} (${question.bookReference.chapter}, ${question.bookReference.pageNumber})`,
              },
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <QuestionDetailPage
        question={question}
        year={yearNum}
        paper={paperType}
        prevQuestion={prev}
        nextQuestion={next}
        relatedQuestions={relatedQuestions}
        totalInSet={allInSet.length}
        currentIndex={allInSet.findIndex((q) => q.id === question.id) + 1}
      />
    </>
  );
}
