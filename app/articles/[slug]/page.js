import { getPostBySlug, getAllPosts } from '../../lib/content'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import remarkGfm from 'remark-gfm'
import FAQAccordion from '../../components/FAQAccordion'
import TOCLink from '../../components/TOCLink'
import ArticleSchema from '../../components/ArticleSchema'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

// Generate slug from heading text
const generateSlug = (text) => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .trim()
}


// MDX Options for proper rendering
const mdxOptions = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
}

// MDX Components for proper rendering
const mdxComponents = {
  h1: ({ children, ...props }) => {
    const text = children?.toString() || ''
    const id = generateSlug(text)
    return (
      <h1 id={id} className="text-xl lg:text-2xl xl:text-3xl font-bold text-btf-dark mb-6 mt-8 first:mt-0" {...props}>
        {children}
      </h1>
    )
  },
  h2: ({ children, ...props }) => {
    const text = children?.toString() || ''
    const id = generateSlug(text)
    return (
      <h2 id={id} className="text-lg lg:text-xl xl:text-2xl font-semibold text-btf-dark mb-4 mt-6" {...props}>
        {children}
      </h2>
    )
  },
  h3: ({ children, ...props }) => {
    const text = children?.toString() || ''
    const id = generateSlug(text)
    return (
      <h3 id={id} className="text-base lg:text-lg xl:text-xl font-semibold text-btf-dark mb-3 mt-5" {...props}>
        {children}
      </h3>
    )
  },
  p: ({ children, ...props }) => {
    const text = children?.toString() || ''
    if (text.startsWith('**Q:')) {
      return (
        <p className="faq-question" {...props}>
          {children}
        </p>
      )
    } else if (text.startsWith('A:')) {
      return (
        <p className="faq-answer" {...props}>
          {children}
        </p>
      )
    }
    return (
      <p className="text-gray-700 mb-4 leading-relaxed text-base lg:text-lg xl:text-xl" {...props}>
        {children}
      </p>
    )
  },
  ul: ({ children, ...props }) => (
    <ul className="mb-4 text-gray-700" style={{listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem', color: '#374151'}} {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol className="mb-4 text-gray-700" style={{listStyleType: 'decimal', paddingLeft: '1.5rem', marginBottom: '1rem', color: '#374151'}} {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li className="text-gray-700" style={{marginBottom: '0.25rem', color: '#374151', display: 'list-item'}} {...props}>
      {children}
    </li>
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote className="border-l-4 border-btf-accent pl-4 py-2 mb-4 bg-gray-50 italic text-gray-600" style={{borderLeft: '4px solid #3b82f6', paddingLeft: '1rem', paddingTop: '0.5rem', paddingBottom: '0.5rem', marginBottom: '1rem', backgroundColor: '#f9fafb', fontStyle: 'italic', color: '#4b5563'}} {...props}>
      {children}
    </blockquote>
  ),
  table: ({ children, ...props }) => (
    <div className="overflow-x-auto mb-6" style={{overflowX: 'auto', marginBottom: '1.5rem'}}>
      <table className="min-w-full border-collapse border border-gray-300 text-sm" style={{borderCollapse: 'collapse', border: '1px solid #d1d5db', minWidth: '100%', fontSize: '0.875rem'}} {...props}>
        {children}
      </table>
    </div>
  ),
  thead: ({ children, ...props }) => (
    <thead className="bg-gray-50" style={{backgroundColor: '#f9fafb'}} {...props}>
      {children}
    </thead>
  ),
  tbody: ({ children, ...props }) => (
    <tbody {...props}>
      {children}
    </tbody>
  ),
  tr: ({ children, ...props }) => (
    <tr className="border-b border-gray-200" style={{borderBottom: '1px solid #e5e7eb'}} {...props}>
      {children}
    </tr>
  ),
  th: ({ children, ...props }) => (
    <th className="border border-gray-300 bg-gray-100 px-4 py-2 text-left font-semibold text-btf-dark" style={{border: '1px solid #d1d5db', padding: '8px 16px', backgroundColor: '#f3f4f6', fontWeight: '600', textAlign: 'left', color: '#1f2937'}} {...props}>
      {children}
    </th>
  ),
  td: ({ children, ...props }) => (
    <td className="border border-gray-300 px-4 py-2 text-gray-700" style={{border: '1px solid #d1d5db', padding: '8px 16px', color: '#374151'}} {...props}>
      {children}
    </td>
  ),
  strong: ({ children, ...props }) => (
    <strong className="font-semibold text-btf-dark" style={{fontWeight: '600', color: '#1f2937'}} {...props}>
      {children}
    </strong>
  ),
  em: ({ children, ...props }) => (
    <em className="italic text-gray-600" style={{fontStyle: 'italic', color: '#4b5563'}} {...props}>
      {children}
    </em>
  ),
  // Custom FAQ styling component
  FAQSection: ({ children, ...props }) => (
    <div className="faq-section" {...props}>
      {children}
    </div>
  ),
  // FAQ Accordion component
  FAQAccordion: ({ faqs, ...props }) => (
    <FAQAccordion faqs={faqs} {...props} />
  ),
  // Custom TOC link component
  a: ({ href, children, className, ...props }) => (
    <TOCLink href={href} className={className} {...props}>
      {children}
    </TOCLink>
  ),
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }) {
  const { slug } = params
  const post = await getPostBySlug(slug)
  
  if (!post) {
    return {
      title: 'Article Not Found',
      description: 'The requested article could not be found.',
    }
  }
  
  const siteUrl = 'https://btf-blog.vercel.app'
  const articleUrl = `${siteUrl}/articles/${slug}`
  const imageUrl = post.heroImage ? (post.heroImage.startsWith('http') ? post.heroImage : `${siteUrl}${post.heroImage}`) : `${siteUrl}/btf-logo.svg`
  
  return {
    title: post.title,
    description: post.description,
    keywords: [
      'Thailand property law',
      'foreign property ownership',
      'Better-than-Freehold',
      'nominee company risks',
      'AMLA compliance',
      'Thai property investment',
      post.categories
    ].filter(Boolean).join(', '),
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
      title: post.title,
      description: post.description,
      url: articleUrl,
      siteName: 'Better-than-Freehold™',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ],
      locale: 'en_US',
      type: 'article',
      publishedTime: post.pubDate,
      modifiedTime: post.pubDate,
      authors: ['BTF Legal Team'],
      section: post.categories,
      tags: [
        'Thailand property law',
        'foreign property ownership',
        'Better-than-Freehold',
        'nominee company risks',
        'AMLA compliance'
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [imageUrl],
      creator: '@btf_legal',
      site: '@btf_legal',
    },
    alternates: {
      canonical: articleUrl,
    },
  }
}

export default async function ArticlePage({ params }) {
  const { slug } = params
  const post = await getPostBySlug(slug)
  
  if (!post) {
    notFound()
  }


  return (
      <>
        {/* Schema Markup */}
        <ArticleSchema
          title={post.title}
          description={post.description}
          pubDate={post.pubDate}
          heroImage={post.heroImage}
          categories={post.categories}
          slug={slug}
        />
        
        <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <Navigation />
        
        {/* Article Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <div className="text-sm text-gray-500 mb-4">
                {new Date(post.pubDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-btf-dark mb-6">
                {post.title}
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto">
                {post.description}
              </p>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        {post.heroImage && (
          <div className="max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <img
              src={post.heroImage}
              alt={post.title}
              className="w-full h-64 md:h-96 lg:h-[28rem] xl:h-[32rem] object-cover rounded-lg shadow-md"
            />
          </div>
        )}

        {/* Article Content */}
        <div className="max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-lg shadow-md p-6 lg:p-8 xl:p-12">
            <div className="prose prose-lg lg:prose-xl xl:prose-2xl max-w-none">
              <MDXRemote source={post.content} components={mdxComponents} options={mdxOptions} />
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
        
        {/* Footer */}
        <Footer />
      </div>
      </>
    )
}
