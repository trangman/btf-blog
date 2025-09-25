import { promises as fs } from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'

async function getAllPosts() {
  try {
    const postsDirectory = path.join(process.cwd(), 'content/posts')
    
    // Check if directory exists
    try {
      await fs.access(postsDirectory)
    } catch (error) {
      console.warn('Content directory not found:', postsDirectory)
      return []
    }
    
    const filenames = await fs.readdir(postsDirectory)
    const posts = await Promise.all(
      filenames
        .filter(filename => filename.endsWith('.mdx'))
        .map(async (filename) => {
          try {
            const filePath = path.join(postsDirectory, filename)
            const fileContents = await fs.readFile(filePath, 'utf8')
            const { data } = matter(fileContents)
            
            return {
              slug: filename.replace(/\.mdx$/, ''),
              title: data.title,
              description: data.description,
              pubDate: data.pubDate,
              heroImage: data.heroImage,
            }
          } catch (error) {
            console.error(`Error reading file ${filename}:`, error)
            return null
          }
        })
    )
    
    // Filter out null results and sort by date
    return posts
      .filter(post => post !== null)
      .sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate))
  } catch (error) {
    console.error('Error loading posts:', error)
    return []
  }
}

export default async function ArticlesPage() {
  const posts = await getAllPosts()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-btf-dark mb-4">
              Articles & Insights
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with the latest insights on property ownership solutions, 
              legal updates, and market trends in Thailand.
            </p>
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
                  <div className="text-sm text-gray-500 mb-2">
                    {new Date(post.pubDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
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
            <div className="text-gray-400 mb-4">
              <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No articles yet</h3>
            <p className="text-gray-500">
              Check back soon for insightful articles about property ownership in Thailand.
            </p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-btf-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Learn More?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover how Better-than-Freehold™ can help you achieve your property ownership goals in Thailand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-btf-accent text-white hover:bg-btf-accent/90 px-8 py-3 rounded-md font-medium transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="/about"
              className="border border-white text-white hover:bg-white hover:text-btf-dark px-8 py-3 rounded-md font-medium transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
