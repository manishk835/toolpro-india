export default function sitemap() {
    const baseUrl = "https://toolpro-india.vercel.app";
  
    return [
      {
        url: `${baseUrl}/`,
        lastModified: new Date(),
      },
      {
        url: `${baseUrl}/about`,
        lastModified: new Date(),
      },
      {
        url: `${baseUrl}/contact`,
        lastModified: new Date(),
      },
      {
        url: `${baseUrl}/ai-tools`,
        lastModified: new Date(),
      },
      {
        url: `${baseUrl}/tools/emi`,
        lastModified: new Date(),
      },
      {
        url: `${baseUrl}/tools/bmi`,
        lastModified: new Date(),
      },
      {
        url: `${baseUrl}/tools/age`,
        lastModified: new Date(),
      },
    ];
  }
  