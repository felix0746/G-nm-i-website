export default function sitemap() {
  const baseUrl = 'https://g-nm-i-website.vercel.app';
  const currentDate = new Date().toISOString();

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
    },
    {
      url: `${baseUrl}/memory`,
      lastModified: currentDate,
    },
    {
      url: `${baseUrl}/news`,
      lastModified: currentDate,
    },
    {
      url: `${baseUrl}/selection`,
      lastModified: currentDate,
    },
    {
      url: `${baseUrl}/agent`,
      lastModified: currentDate,
    },
  ];
}
