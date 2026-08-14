import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/lib/themeContext';
import { AuthProvider } from '@/lib/authContext';
import { TypographyProvider } from '@/lib/typographyContext';

export const metadata: Metadata = {
  title: 'UPSCSphere — Real-Time UPSC Prelims Mocks, Citations & AIR Leaderboard',
  description: '100% Free UPSC Prelims & CSAT preparation platform with real-time on-the-spot evaluations, 12-year official PYQ vault (2015-2026), exact book and page citations (Laxmikanth, Spectrum, Ramesh Singh), and live All-India rankings.',
  keywords: ['UPSC Prelims', 'UPSC CSAT', 'PYQ 2026', 'Laxmikanth Reference', 'UPSC Mock Test', 'AIR Ranking', 'Daily Current Affairs'],
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Nunito:wght@400;500;600;700;800;900&family=Roboto:wght@300;400;500;700;900&family=Sora:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col selection:bg-orange-500/20 selection:text-orange-950 dark:selection:bg-orange-500/30 dark:selection:text-orange-100">
        <TypographyProvider>
          <ThemeProvider>
            <AuthProvider>
              {/* Running Ambient Tricolour Aurora Background */}
              <div className="tricolor-aurora-bg" aria-hidden="true">
                <div className="aurora-saffron-orb" />
                <div className="aurora-blue-orb" />
                <div className="aurora-green-orb" />
              </div>

              {/* Floating State Emblem of India Background Watermark */}
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

              {/* Main Content Area */}
              <main className="relative z-10 flex-1">
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
