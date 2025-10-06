import { getAllCategories, getAllAudiences, getAllPosts } from './lib/content'

export default async function sitemap() {
  const baseUrl = 'https://btf-blog.vercel.app'
  const now = new Date().toISOString()
  
  // Static routes
  const staticRoutes = [
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
    '/articles/',
  ]
  
  // Dynamic routes - Articles
  const posts = await getAllPosts()
  const articleRoutes = posts.map((post) => ({
    url: `${baseUrl}/articles/${post.slug}/`,
    lastModified: post.pubDate,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))
  
  // Dynamic routes - Categories
  const categories = await getAllCategories()
  const categoryRoutes = categories.map((category) => ({
    url: `${baseUrl}/categories/${category.replace(/\//g, '-')}/`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.7,
  }))
  
  // Dynamic routes - Audiences
  const audiences = await getAllAudiences()
  const audienceRoutes = audiences.map((audience) => ({
    url: `${baseUrl}/audiences/${audience.toLowerCase().replace(/_/g, '-')}/`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.7,
  }))
  
  // Combine all routes
  const allRoutes = [
    ...staticRoutes.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: path === '/' ? 1.0 : 0.7,
    })),
    ...articleRoutes,
    ...categoryRoutes,
    ...audienceRoutes,
  ]
  
  return allRoutes
}


