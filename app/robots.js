export default function robots() {
    return {
      rules: [
        {
          userAgent: "*",
          allow: "/",
        },
      ],
      sitemap: "https://toolpro-india.vercel.app/sitemap.xml",
    };
  }
  