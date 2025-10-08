import { getAllCategories, getCategoryDisplayName } from '../lib/content'
import Link from 'next/link'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export async function generateMetadata() {
  return {
    title: 'Article Categories - Thailand Property Law',
    description: 'Browse Thailand property law articles by category. Find definitions, solutions, and educational guides about foreign property ownership and Better-than-Freehold.',
    keywords: 'Thailand property law, article categories, foreign property ownership, Better-than-Freehold, legal guides',
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: 'Article Categories - Thailand Property Law',
      description: 'Browse Thailand property law articles by category. Find definitions, solutions, and educational guides about foreign property ownership and Better-than-Freehold.',
      type: 'website',
    },
  }
}

export default async function CategoriesIndexPage() {
  const categories = await getAllCategories()
  
  return (
    <>
      <div className="min-h-screen bg-btf-dark">
        {/* Navigation */}
        <Navigation />
        
        {/* Header */}
        <div className="bg-btf-dark shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <h1 className="text-3xl lg:text-4xl font-bold text-btf-teal mb-4">
                Article Categories
              </h1>
              <p className="text-xl text-white max-w-3xl mx-auto">
                Browse our Thailand property law articles organized by category. 
                Find definitions, solutions, and educational guides tailored to your needs.
              </p>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => {
              const displayName = getCategoryDisplayName(category)
              const categorySlug = category.replace(/\//g, '-')
              
              return (
                <Link
                  key={category}
                  href={`/categories/${categorySlug}`}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow group"
                >
                  <h2 className="text-xl font-semibold text-btf-teal mb-3 group-hover:text-btf-accent transition-colors">
                    {displayName}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {category === 'glossary/definition' && 'Clear definitions and explanations of key terms and concepts in Thailand property law.'}
                    {category === 'educational/how-to' && 'Step-by-step guides and educational content for foreign property investment in Thailand.'}
                    {category === 'problem/solution' && 'Analysis of common problems and their compliant solutions using Better-than-Freehold structures.'}
                    {category === 'market-analysis' && 'Market research and investment analysis for Thailand property market.'}
                    {category === 'legal-education' && 'Legal compliance and regulatory content for property ownership.'}
                    {category === 'technical' && 'Advanced technical explanations of property structures and legal frameworks.'}
                    {category === 'industry-analysis' && 'Sector-specific analysis of Thailand property market trends.'}
                    {category === 'professional-guidance' && 'Guidance for professional service providers in property transactions.'}
                    {category === 'general' && 'General information and overviews about Thailand property law and foreign ownership.'}
                    {!['glossary/definition', 'educational/how-to', 'problem/solution', 'market-analysis', 'legal-education', 'technical', 'industry-analysis', 'professional-guidance', 'general'].includes(category) && 
                      `Articles and resources related to ${displayName.toLowerCase()}.`}
                  </p>
                  <div className="flex items-center text-btf-accent group-hover:text-btf-dark font-medium transition-colors">
                    View Resources
                    <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              )
            })}
          </div>
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
                  <Link href="/resources" className="ml-4 text-gray-400 hover:text-gray-500">
                    Resources
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="flex-shrink-0 h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-4 text-gray-500 font-medium">Categories</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
        
        {/* Footer */}
        <Footer />
      </div>
    </>
  )
}
