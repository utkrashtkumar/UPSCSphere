import type { Metadata } from 'next';
import CookiesClientPage from './CookiesClientPage';

export const metadata: Metadata = {
  title: 'Cookie Policy & Cookie Preferences | UPSCSphere',
  description:
    'Read UPSCSphere’s Cookie Policy and customize your cookie & browser storage preferences. We use strictly essential cookies and zero third-party advertisement trackers.',
  keywords: [
    'UPSC cookie policy',
    'UPSCSphere cookie options',
    'UPSC privacy preferences',
    'student data protection UPSC',
    'UPSCSphere cookies',
  ],
  alternates: { canonical: 'https://www.upscsphere.in/cookies' },
  openGraph: {
    title: 'Cookie Policy & Preferences | UPSCSphere',
    description: 'Manage your cookie settings and browser storage on UPSCSphere.',
    url: 'https://www.upscsphere.in/cookies',
    type: 'website',
    images: [{ url: 'https://www.upscsphere.in/og-image.png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <CookiesClientPage />;
}
