export default function sitemap() {
  const baseUrl = 'https://g-nm-i-website.vercel.app';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/memory`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/news`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/selection`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/agent`,
      lastModified: new Date(),
    },
  ];
}
