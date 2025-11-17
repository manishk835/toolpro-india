export async function GET() {
  const baseUrl = 'https://yourdomain.com'
  const staticPages = ['', 'about', 'contact', 'privacy', 'terms', 'ai-tools']
  const urls = staticPages.map(p => `${baseUrl}/${p}`)
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(u => `<url><loc>${u}</loc></url>`).join('\n')}\n</urlset>`
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } })
}
