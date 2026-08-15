import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.upscsphere.in';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/auth/callback',
          '/auth/reset-password',
          '/quiz/session',
          '/quiz/results/',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}