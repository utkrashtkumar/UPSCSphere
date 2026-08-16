import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { ThemeProvider } from '@/lib/themeContext';
import { AuthProvider } from '@/lib/authContext';
import { TypographyProvider } from '@/lib/typographyContext';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.upscsphere.in'),

  title: {
    default: 'UPSCSphere — 100% Free UPSC Mock Tests, Free Daily Current Affairs & Full 12-Yr PYQ with Book Citations',
    template: '%s | UPSCSphere',
  },
  applicationName: 'UPSCSphere',
  description:
    'India\'s #1 100% free UPSC Civil Services Prelims platform — Free full-length GS-1 & CSAT mock tests, free daily current affairs & news information MCQs from The Hindu, PIB & Indian Express, and free full 12-year PYQs (2015–2026) with proper textbook citations and references.',
  keywords: [
    'free mock tests',
    'free upsc mock tests',
    'free current affairs',
    'free daily current affairs',
    'free daily news information',
    'free daily news information for upsc',
    'free full pyq of upsc prelims gs and csat',
    'free full pyq of upsc prelims gs and csat with proper citations and reference',
    'upsc pyq with citations and references',
    'upsc prelims 2026 free mock test',
    'upsc prelims 2027 test series free',
    'upsc csat mock test free',
    'upsc gs paper 1 mock test free',
    'upsc laxmikanth page citations',
    'upsc spectrum history mcq',
    'upsc ramesh singh economy questions',
    'upsc shankar ias environment questions',
    'the hindu daily current affairs quiz',
    'pib daily upsc current affairs mcq',
    'upsc elimination technique',
    'upsc all india rank leaderboard',
    'civil services prelims free question bank',
    'upsc 12 year pyq vault 2015 to 2026',
    'ias prelims online preparation free',
    'UPSCSphere',
  ],
  authors: [{ name: 'Utkrasht Kumar', url: 'https://www.upscsphere.in/about' }],
  creator: 'Utkrasht Kumar',
  publisher: 'UPSCSphere',
  category: 'Education',
  classification: 'UPSC Civil Services Examination Preparation',

  // Canonical URL
  alternates: {
    canonical: 'https://www.upscsphere.in',
  },

  // Open Graph — controls how the page looks when shared on WhatsApp, Facebook, LinkedIn
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.upscsphere.in',
    siteName: 'UPSCSphere',
    title: 'UPSCSphere — 100% Free UPSC Mock Tests, Free Daily Current Affairs & Full 12-Yr PYQ',
    description:
      'Free full-length UPSC GS & CSAT mock tests, free daily current affairs & news information MCQs from The Hindu & PIB, and free 12-year PYQs (2015–2026) with proper standard book citations and references.',
    images: [
      {
        url: 'https://www.upscsphere.in/og-image.png',
        width: 1200,
        height: 630,
        alt: 'UPSCSphere — Free UPSC Prelims Preparation Platform',
        type: 'image/png',
      },
    ],
  },

  // Twitter / X Card — controls appearance when shared on X (Twitter)
  twitter: {
    card: 'summary_large_image',
    site: '@upscsphere',
    creator: '@utkrashtkumar',
    title: 'UPSCSphere — Free UPSC Mock Tests, Free Daily Current Affairs & Full PYQ with Citations',
    description:
      '100% Free UPSC GS-1 & CSAT mock tests, 20 Daily Current Affairs MCQs, and full 12-Year PYQ vault with exact textbook citations and references.',
    images: ['https://www.upscsphere.in/og-image.png'],
  },

  icons: {
    icon: [
      { url: '/logo.png' },
      { url: '/icon.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/logo.png',
    apple: '/logo.png',
  },

  // Verification for Google Search Console, Bing Webmaster
  verification: {
    google: 'REPLACE_WITH_GOOGLE_SITE_VERIFICATION_TOKEN',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light" data-theme="light" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var saved = localStorage.getItem('upsc_theme');
                if (saved === 'dark') {
                  document.documentElement.classList.remove('light');
                  document.documentElement.classList.add('dark');
                  document.documentElement.setAttribute('data-theme', 'dark');
                } else {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.classList.add('light');
                  document.documentElement.setAttribute('data-theme', 'light');
                }
              } catch (e) {
                document.documentElement.classList.remove('dark');
                document.documentElement.classList.add('light');
                document.documentElement.setAttribute('data-theme', 'light');
              }
            `,
          }}
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ff671f" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="UPSCSphere" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="icon" type="image/png" href="/logo.png" />

        {/* Service Worker Auto-Registration for PWA & Daily CA Push Alerts */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(function(reg) {
                    console.log('UPSCSphere ServiceWorker active');
                  }).catch(function(err) {
                    console.warn('SW registration warning:', err);
                  });
                });
              }
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Nunito:wght@400;500;600;700;800;900&family=Roboto:wght@300;400;500;700;900&family=Sora:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col selection:bg-orange-500/20 selection:text-orange-950 dark:selection:bg-orange-500/30 dark:selection:text-orange-100 overflow-x-hidden w-full max-w-[100vw]">
        {/* JSON-LD Structured Data — Helps Google understand the site and show rich sitelinks */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'WebSite',
                  '@id': 'https://www.upscsphere.in/#website',
                  url: 'https://www.upscsphere.in',
                  name: 'UPSCSphere',
                  description: "India's 100% free UPSC Civil Services Prelims preparation platform",
                  inLanguage: 'en-IN',
                  potentialAction: {
                    '@type': 'SearchAction',
                    target: {
                      '@type': 'EntryPoint',
                      urlTemplate: 'https://www.upscsphere.in/quiz/create?q={search_term_string}',
                    },
                    'query-input': 'required name=search_term_string',
                  },
                },
                {
                  '@type': 'Organization',
                  '@id': 'https://www.upscsphere.in/#organization',
                  name: 'UPSCSphere',
                  url: 'https://www.upscsphere.in',
                  logo: {
                    '@type': 'ImageObject',
                    url: 'https://www.upscsphere.in/logo.png',
                    width: 512,
                    height: 512,
                  },
                  sameAs: [
                    'https://x.com/utkrashtkumar',
                    'https://www.instagram.com/utkrashtkumarr/',
                    'https://www.linkedin.com/in/utkrashtkumar/',
                    'https://github.com/utkrashtkumar/UPSCSphere',
                  ],
                  contactPoint: {
                    '@type': 'ContactPoint',
                    email: 'utkrashtkumar@gmail.com',
                    contactType: 'customer support',
                    availableLanguage: ['English', 'Hindi'],
                  },
                },
                {
                  '@type': 'EducationalOrganization',
                  '@id': 'https://www.upscsphere.in/#edu',
                  name: 'UPSCSphere',
                  url: 'https://www.upscsphere.in',
                  description: "India's leading free UPSC Civil Services Prelims preparation platform with 20 daily current affairs questions, 12-year PYQ vault, and Nationwide AIR rankings.",
                  educationalCredentialAwarded: 'UPSC Civil Services Preliminary Examination Preparation',
                  hasOfferCatalog: {
                    '@type': 'OfferCatalog',
                    name: 'UPSC Prelims Study Resources',
                    itemListElement: [
                      { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'Daily Current Affairs (20 MCQs)', url: 'https://www.upscsphere.in/daily-ca' } },
                      { '@type': 'Offer', itemOffered: { '@type': 'Course', name: '12-Year PYQ Vault (2015–2026)', url: 'https://www.upscsphere.in/pyq' } },
                      { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'Custom Mock Generator', url: 'https://www.upscsphere.in/quiz/create' } },
                      { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'GS-1 & CSAT Syllabus Tracker', url: 'https://www.upscsphere.in/syllabus' } },
                    ],
                  },
                },
                {
                  '@type': 'FAQPage',
                  mainEntity: [
                    {
                      '@type': 'Question',
                      name: 'Is UPSCSphere completely free?',
                      acceptedAnswer: { '@type': 'Answer', text: 'Yes. UPSCSphere is 100% free with no ads, no subscriptions, and no paywalls. All 12-year PYQ vault, daily current affairs MCQs, custom mock generator, and AIR rankings are completely free.' },
                    },
                    {
                      '@type': 'Question',
                      name: 'How many UPSC current affairs questions are published daily?',
                      acceptedAnswer: { '@type': 'Answer', text: 'UPSCSphere auto-generates 20 high-yield UPSC Prelims current affairs MCQs every morning at 7:00 AM IST from The Hindu, Indian Express, PIB, and Down To Earth using AI.' },
                    },
                    {
                      '@type': 'Question',
                      name: 'Which years PYQ papers are available on UPSCSphere?',
                      acceptedAnswer: { '@type': 'Answer', text: 'UPSCSphere covers all official UPSC Civil Services Preliminary GS Paper 1 and CSAT Paper 2 questions from 2015 to 2026 — a complete 12-year vault.' },
                    },
                    {
                      '@type': 'Question',
                      name: 'Does UPSCSphere have standard book citations for every question?',
                      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Every question is mapped to exact standard book references — Laxmikanth (7th Ed), Spectrum, Ramesh Singh, Shankar IAS, and NCERT — with chapter, page, and excerpt citations.' },
                    },
                  ],
                },
              ],
            }),
          }}
        />
        <TypographyProvider>
          <ThemeProvider>
            <AuthProvider>
              {/* Running Ambient Tricolour Aurora Background */}
              <div className="tricolor-aurora-bg" aria-hidden="true">
                <div className="aurora-saffron-orb" />
                <div className="aurora-blue-orb" />
                <div className="aurora-green-orb" />
              </div>

              {/* Floating State Emblem of India Background Watermark (Locked to exact center) */}
              <div className="floating-emblem-container" aria-hidden="true">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/emblem.png"
                  alt="State Emblem of India"
                  className="floating-emblem-img"
                />
              </div>

              {/* Sticky Glass Navbar */}
              <Navbar />

              {/* Main Content Area (Offset with top padding for fixed navbar) */}
              <main className="relative z-10 flex-1 w-full max-w-[100vw] overflow-x-hidden pt-14 sm:pt-16">
                {children}
              </main>

              {/* Redesigned 4-Column Liquid Glass Footer */}
              <Footer />

              {/* Floating Go To Top Button with Circular Scroll Progress */}
              <ScrollToTop />
            </AuthProvider>
          </ThemeProvider>
        </TypographyProvider>
      </body>
    </html>
  );
}
