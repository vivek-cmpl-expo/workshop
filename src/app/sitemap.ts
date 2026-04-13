import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date('2026-03-18'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/banawat-workshop`,
      lastModified: new Date('2026-03-18'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/launchpad-workshop`,
      lastModified: new Date('2026-03-18'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/savore-workshop`,
      lastModified: new Date('2026-03-18'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/unpack-workshop`,
      lastModified: new Date('2026-03-18'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];
}