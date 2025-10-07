import { getPostsByCategory, getAllCategories, getCategoryDisplayName, getAudienceDisplayName } from '../../lib/content'
import Link from 'next/link'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import CTAButtons from '../../components/CTAButtons'

export async function generateStaticParams() {
  const categories = await getAllCategories()
  
  return categories.map((category) => ({
    category: category.replace(/\//g, '-'), // Convert slashes to hyphens for URL
  }))
}

export async function generateMetadata({ params }) {
  const { category } = params
  const categorySlug = category.replace(/-/g, '/') // Convert hyphens back to slashes
  const displayName = getCategoryDisplayName(categorySlug)
  const posts = await getPostsByCategory(categorySlug)
  
  const siteUrl = 'https://btf-blog.vercel.app'
  const categoryUrl = `${siteUrl}/categories/${category}`
  
  return {
    title: `${displayName} - Thailand Property Law Articles`,
    description: `Comprehensive ${displayName.toLowerCase()} articles about Thailand property law, foreign ownership, and Better-than-Freehold solutions.`,
    keywords: [
      'Thailand property law',
      'foreign property ownership',
      'Better-than-Freehold',
      displayName.toLowerCase(),
      'Thai property investment',
      'legal compliance'
    ].join(', '),
    authors: [{ name: 'BTF Legal Team' }],
    creator: 'BTF Legal Team',
    publisher: 'Better-than-Freehold™',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: `${displayName} - Thailand Property Law Articles`,
      description: `Comprehensive ${displayName.toLowerCase()} articles about Thailand property law, foreign ownership, and Better-than-Freehold solutions.`,
      url: categoryUrl,
      siteName: 'Better-than-Freehold™',
      images: [
        {
          url: `${siteUrl}/btf-logo.svg`,
          width: 1200,
          height: 630,
          alt: `${displayName} Articles`,
        }
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${displayName} - Thailand Property Law Articles`,
      description: `Comprehensive ${displayName.toLowerCase()} articles about Thailand property law, foreign ownership, and Better-than-Freehold solutions.`,
    },
    alternates: {
      canonical: categoryUrl,
    },
  }
}

export default async function CategoryPage({ params }) {
  const { category } = params
  const categorySlug = category.replace(/-/g, '/') // Convert hyphens back to slashes
  const displayName = getCategoryDisplayName(categorySlug)
  const posts = await getPostsByCategory(categorySlug)
  
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <Navigation />
        
        {/* Category Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <h1 className="text-3xl lg:text-4xl font-bold text-btf-dark mb-4">
                {displayName}
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive articles about Thailand property law, foreign ownership, and Better-than-Freehold solutions.
              </p>
              <div className="mt-4 text-sm text-gray-500">
                {posts.length} article{posts.length !== 1 ? 's' : ''} in this category
              </div>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  {post.heroImage && (
                    <div className="aspect-w-16 aspect-h-9">
                      <img
                        src={post.heroImage}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                      <span>
                        {new Date(post.pubDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                      <span className="text-gray-300">•</span>
                      <Link 
                        href={`/audiences/${post.audience.toLowerCase().replace(/_/g, '-')}`}
                        className="text-btf-accent hover:text-btf-dark transition-colors font-medium"
                      >
                        {getAudienceDisplayName(post.audience)}
                      </Link>
                    </div>
                    <h2 className="text-xl font-semibold text-btf-dark mb-3 line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.description}
                    </p>
                    <Link
                      href={`/articles/${post.slug}`}
                      className="inline-flex items-center text-btf-accent hover:text-btf-dark font-medium transition-colors"
                    >
                      Read More
                      <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">No articles found</h2>
              <p className="text-gray-600 mb-8">There are currently no articles in this category.</p>
              <Link
                href="/articles"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-btf-accent hover:bg-btf-dark transition-colors"
              >
                View All Articles
              </Link>
            </div>
          )}
        </div>

        {/* Breadcrumb Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <Link href="/" className="text-gray-400 hover:text-gray-500">
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="flex-shrink-0 h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <Link href="/articles" className="ml-4 text-gray-400 hover:text-gray-500">
                    Articles
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="flex-shrink-0 h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-4 text-gray-500 font-medium">{displayName}</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        {/* CTA Section */}
        <div className="bg-btf-accent py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-btf-dark">
              Ready to revolutionise your property investment journey?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-btf-dark">
              Have questions? Contact us today to discover how Better-than-Freehold™ can work for you.
            </p>
            <CTAButtons />
          </div>
        </div>
        
        {/* Footer */}
        <Footer />
      </div>
    </>
  )
}
