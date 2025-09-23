import { promises as fs } from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'content/posts')
  
  try {
    const filenames = await fs.readdir(postsDirectory)
    return filenames.map((filename) => ({
      slug: filename.replace(/\.mdx$/, ''),
    }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}

export async function generateMetadata({ params }) {
  const { slug } = params
  const postsDirectory = path.join(process.cwd(), 'content/posts')
  
  try {
    const filePath = path.join(postsDirectory, `${slug}.mdx`)
    const fileContents = await fs.readFile(filePath, 'utf8')
    const { data } = matter(fileContents)
    
    return {
      title: data.title,
      description: data.description,
      openGraph: {
        title: data.title,
        description: data.description,
        images: data.heroImage ? [data.heroImage] : [],
      },
    }
  } catch (error) {
    return {
      title: 'Article Not Found',
      description: 'The requested article could not be found.',
    }
  }
}

export default async function ArticlePage({ params }) {
  const { slug } = params
  const postsDirectory = path.join(process.cwd(), 'content/posts')
  
  try {
    const filePath = path.join(postsDirectory, `${slug}.mdx`)
    const fileContents = await fs.readFile(filePath, 'utf8')
    const { data, content } = matter(fileContents)
    
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Article Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <div className="text-sm text-gray-500 mb-4">
                {new Date(data.pubDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <h1 className="text-4xl font-bold text-btf-dark mb-6">
                {data.title}
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {data.description}
              </p>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        {data.heroImage && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <img
              src={data.heroImage}
              alt={data.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-md"
            />
          </div>
        )}

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-lg shadow-md p-8 prose prose-lg max-w-none">
            <MDXRemote source={content} />
          </div>
        </div>

        {/* Navigation */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center">
            <Link
              href="/articles"
              className="inline-flex items-center text-btf-accent hover:text-btf-dark font-medium transition-colors"
            >
              <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Articles
            </Link>
            <Link
              href="/contact"
              className="bg-btf-accent text-white hover:bg-btf-dark px-6 py-2 rounded-md font-medium transition-colors"
            >
              Get in Touch
            </Link>
          </div>
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
  } catch (error) {
    console.error('Error loading article:', error)
    notFound()
  }
}
