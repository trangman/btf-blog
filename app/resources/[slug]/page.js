import { getPostBySlug, getAllPosts, getAudienceDisplayName } from '../../lib/content'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import remarkGfm from 'remark-gfm'
import FAQAccordion from '../../components/FAQAccordion'
import TOCLink from '../../components/TOCLink'
import ArticleSchema from '../../components/ArticleSchema'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import CTAButtons from '../../components/CTAButtons'

// Generate slug from heading text
const generateSlug = (text) => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .trim()
}

// Generate table of contents from headings
const generateTOC = (content) => {
  const headingRegex = /^(#{1,6})\s+(.+)$/gm
  const headings = []
  let match

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length
    const text = match[2].trim()
    const slug = generateSlug(text)
    
    headings.push({
      level,
      text,
      slug
    })
  }

  return headings
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
      <h1 id={id} className="text-xl lg:text-2xl xl:text-3xl font-bold text-btf-teal mb-6 mt-8 first:mt-0" {...props}>
        {children}
      </h1>
    )
  },
  h2: ({ children, ...props }) => {
    const text = children?.toString() || ''
    const id = generateSlug(text)
    return (
      <h2 id={id} className="text-lg lg:text-xl xl:text-2xl font-semibold text-btf-teal mb-4 mt-6" {...props}>
        {children}
      </h2>
    )
  },
  h3: ({ children, ...props }) => {
    const text = children?.toString() || ''
    const id = generateSlug(text)
    return (
      <h3 id={id} className="text-base lg:text-lg xl:text-xl font-semibold text-btf-teal mb-3 mt-5" {...props}>
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
      <p className="text-gray-800 mb-4 leading-relaxed text-base" {...props}>
        {children}
      </p>
    )
  },
  ul: ({ children, ...props }) => (
    <ul className="mb-4 text-gray-800 text-base" style={{listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem'}} {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol className="mb-4 text-gray-800 text-base" style={{listStyleType: 'decimal', paddingLeft: '1.5rem', marginBottom: '1rem'}} {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li className="text-gray-800 text-base" style={{marginBottom: '0.25rem', display: 'list-item'}} {...props}>
      {children}
    </li>
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote className="border-l-4 border-btf-teal pl-4 py-2 mb-4 bg-gray-100 italic text-gray-700 text-base" style={{borderLeft: '4px solid #20b2aa', paddingLeft: '1rem', paddingTop: '0.5rem', paddingBottom: '0.5rem', marginBottom: '1rem', backgroundColor: '#f3f4f6', fontStyle: 'italic'}} {...props}>
      {children}
    </blockquote>
  ),
  table: ({ children, ...props }) => (
    <div className="overflow-x-auto mb-6" style={{overflowX: 'auto', marginBottom: '1.5rem'}}>
      <table className="min-w-full border-collapse border border-btf-teal/30 text-sm" style={{borderCollapse: 'collapse', border: '1px solid rgba(32, 178, 170, 0.3)', minWidth: '100%', fontSize: '0.875rem'}} {...props}>
        {children}
      </table>
    </div>
  ),
  thead: ({ children, ...props }) => (
    <thead className="bg-gray-100" style={{backgroundColor: '#f3f4f6'}} {...props}>
      {children}
    </thead>
  ),
  tbody: ({ children, ...props }) => (
    <tbody {...props}>
      {children}
    </tbody>
  ),
  tr: ({ children, ...props }) => (
    <tr className="border-b border-btf-teal/20" style={{borderBottom: '1px solid rgba(32, 178, 170, 0.2)'}} {...props}>
      {children}
    </tr>
  ),
  th: ({ children, ...props }) => (
    <th className="border border-btf-teal/30 bg-gray-200 px-4 py-2 text-left font-semibold text-btf-teal" style={{border: '1px solid rgba(32, 178, 170, 0.3)', padding: '8px 16px', backgroundColor: '#e5e7eb', fontWeight: '600', textAlign: 'left'}} {...props}>
      {children}
    </th>
  ),
  td: ({ children, ...props }) => (
    <td className="border border-btf-teal/30 px-4 py-2 text-gray-800 text-base" style={{border: '1px solid rgba(32, 178, 170, 0.3)', padding: '8px 16px'}} {...props}>
      {children}
    </td>
  ),
  strong: ({ children, ...props }) => (
    <strong className="font-semibold text-btf-teal" style={{fontWeight: '600'}} {...props}>
      {children}
    </strong>
  ),
  em: ({ children, ...props }) => (
    <em className="italic text-gray-600" style={{fontStyle: 'italic'}} {...props}>
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

// Generate static params for all posts
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
  const articleUrl = `${siteUrl}/resources/${slug}`
  
  return {
    title: `${post.title} | Better-than-Freehold™`,
    description: post.description,
    keywords: [
      'Thailand property law',
      'foreign property ownership',
      'Better-than-Freehold',
      ...post.categories,
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
      url: articleUrl,
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.pubDate,
      authors: ['BTF Legal Team'],
      images: post.heroImage ? [
        {
          url: post.heroImage.startsWith('http') ? post.heroImage : `${siteUrl}${post.heroImage}`,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ] : [
        {
          url: `${siteUrl}/og/default.jpg`,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: post.heroImage ? [
        post.heroImage.startsWith('http') ? post.heroImage : `${siteUrl}${post.heroImage}`
      ] : [`${siteUrl}/og/default.jpg`],
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
        
        <div className="min-h-screen bg-btf-dark">
        {/* Navigation */}
        <Navigation />
        
        {/* Article Header */}
        <div className="bg-btf-dark shadow-sm">
          <div className="max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <div className="flex items-center justify-center gap-4 text-sm text-gray-300 mb-4">
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
              <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-btf-teal mb-6">
                {post.title}
              </h1>
              <p className="text-xl lg:text-2xl text-white max-w-4xl mx-auto">
                {post.description}
              </p>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        {post.heroImage && (
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="relative aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <img
                src={post.heroImage}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
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

        {/* Back to Articles */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <Link
              href="/resources"
              className="inline-flex items-center text-btf-accent hover:text-btf-dark font-medium transition-colors"
            >
              <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Resources
            </Link>
          </div>
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
