import { getAllPosts, getAudienceDisplayName, getFeaturedPosts } from '../lib/content'
import Link from 'next/link'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import CTAButtons from '../components/CTAButtons'

export default async function ResourcesPage() {
  const posts = await getAllPosts()
  const featuredPosts = await getFeaturedPosts()

  return (
    <div className="min-h-screen bg-btf-dark">
      {/* Navigation */}
      <Navigation />
      
      {/* Header */}
      <div className="bg-btf-dark shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-btf-teal mb-4">
              Resources & Insights
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Stay informed with the latest insights on property ownership solutions, 
              legal updates, and market trends in Thailand.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Articles */}
      {featuredPosts.length > 0 && (
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-btf-teal mb-4">
                Featured Resources
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our most important and comprehensive guides to Thailand property law and Better-than-Freehold solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.slug} className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border-2 border-btf-teal">
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
                      <span className="bg-btf-teal text-white px-2 py-1 rounded text-xs font-semibold">
                        FEATURED
                      </span>
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
                    <h3 className="text-xl font-semibold text-btf-teal mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.description}
                    </p>
                    <Link
                      href={`/resources/${post.slug}`}
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
          </div>
        </div>
      )}

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
                  <h2 className="text-xl font-semibold text-btf-teal mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.description}
                  </p>
                  <Link
                    href={`/resources/${post.slug}`}
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
            <div className="text-gray-400 mb-4">
              <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No resources yet</h3>
            <p className="text-gray-500">
              Check back soon for insightful resources about property ownership in Thailand.
            </p>
          </div>
        )}
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
  )
}


