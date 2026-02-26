import { MetadataRoute } from 'next';
import { serviceData } from "@/app/services/data"; // Your data file

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://techvisionnext.com';

  // Generate URLS for all services in your data.js
  const serviceUrls = Object.keys(serviceData).map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    ...serviceUrls,
  ];
}