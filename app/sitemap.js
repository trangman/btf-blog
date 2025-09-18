export default function sitemap() {
  const routes = [
    '/',
    '/about/',
    '/learn-more/',
    '/structure/',
    '/compliance/',
    '/legal-professionals/',
    '/property-developers/',
    '/owners/',
    '/buyers/',
    '/faqs/',
    '/resources/',
    '/contact/',
    '/privacy/',
    '/terms/',
  ]
  const now = new Date().toISOString()
  return routes.map((path) => ({
    url: path,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: path === '/' ? 1.0 : 0.7,
  }))
}


