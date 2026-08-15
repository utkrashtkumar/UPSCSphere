import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/lib/themeContext';
import { AuthProvider } from '@/lib/authContext';
import { TypographyProvider } from '@/lib/typographyContext';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.upscsphere.in'),

  title: {
    default: 'UPSCSphere — Free UPSC Prelims Preparation Platform',
    template: '%s | UPSCSphere',
  },
  applicationName: 'UPSCSphere',
  description:
    'India\'s 100% free UPSC Civil Services Prelims hub — 20 Daily Current Affairs MCQs (AI-generated), 12-year Official PYQ Vault (2015–2026), Exact book citations (Laxmikanth, Spectrum, Ramesh Singh), Nationwide AIR Rankings, and Custom Speed Mocks.',
  keywords: [
    'UPSC Prelims 2026',
    'UPSC CSE preparation',
    'UPSC Prelims mock test free',
    'UPSC Daily Current Affairs MCQ',
    'UPSC PYQ 2015 to 2026',
    'Laxmikanth questions',
    'UPSC Polity mock test',
    'UPSC economy questions',
    'UPSC CSAT preparation',
    'UPSC syllabus tracker',
    'UPSC AIR ranking',
    'IAS preparation free',
    'civil services exam practice',
    'UPSCSphere',
    'UPSC current affairs 2026',
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
    title: 'UPSCSphere — Free UPSC Prelims Preparation Platform',
    description:
      'India\'s 100% free UPSC Civil Services Prelims hub — 20 Daily Current Affairs MCQs, 12-year PYQ Vault (2015–2026), Exact Laxmikanth citations, Nationwide AIR Rankings.',
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
    title: 'UPSCSphere — Free UPSC Prelims Preparation Platform',
    description:
      '20 Daily CA MCQs + 12-Year PYQ Vault + Nationwide AIR Rankings. 100% Free for UPSC aspirants.',
    images: ['https://www.upscsphere.in/og-image.png'],
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
        <link rel="apple-touch-icon" href="/emblem.png" />
        <link rel="icon" type="image/png" href="/emblem.png" />

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
                    url: 'https://www.upscsphere.in/emblem.png',
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
            </AuthProvider>
          </ThemeProvider>
        </TypographyProvider>
      </body>
    </html>
  );
}
