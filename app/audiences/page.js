import { getAllAudiences, getAudienceDisplayName } from '../lib/content'
import Link from 'next/link'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export async function generateMetadata() {
  return {
    title: 'Resources by Audience - Thailand Property Law',
    description: 'Find Thailand property law resources tailored for your specific audience. Specialized guides for buyers, professionals, and property owners.',
    keywords: 'Thailand property law, audience-specific resources, foreign property buyers, legal professionals, property developers',
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: 'Resources by Audience - Thailand Property Law',
      description: 'Find Thailand property law resources tailored for your specific audience. Specialized guides for buyers, professionals, and property owners.',
      type: 'website',
    },
  }
}

export default async function AudiencesIndexPage() {
  const audiences = await getAllAudiences()
  
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <Navigation />
        
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <h1 className="text-3xl lg:text-4xl font-bold text-btf-dark mb-4">
                Resources by Audience
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find Thailand property law resources tailored for your specific audience. 
                Specialized guides and information designed for different types of users.
              </p>
            </div>
          </div>
        </div>

        {/* Audiences Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {audiences.map((audience) => {
              const displayName = getAudienceDisplayName(audience)
              const audienceSlug = audience.toLowerCase().replace(/_/g, '-')
              
              return (
                <Link
                  key={audience}
                  href={`/audiences/${audienceSlug}`}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow group"
                >
                  <h2 className="text-xl font-semibold text-btf-dark mb-3 group-hover:text-btf-accent transition-colors">
                    {displayName}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {audience === 'GENERAL' && 'General information and resources about Thailand property law for all audiences.'}
                    {audience === 'FOREIGN_PROPERTY_BUYERS' && 'Specialized guides and resources for foreigners looking to invest in Thai property.'}
                    {audience === 'BUYER' && 'Resources and guides specifically designed for property buyers in Thailand.'}
                    {audience === 'ACCOUNTANT' && 'Technical resources and compliance information for accounting professionals.'}
                    {audience === 'DEVELOPER' && 'Development-focused resources and legal considerations for property developers.'}
                    {audience === 'LAWYER' && 'Professional resources and legal analysis for legal practitioners.'}
                    {audience === 'EXISTING_PROPERTY_OWNER' && 'Information and resources for current property owners in Thailand.'}
                    {!['GENERAL', 'FOREIGN_PROPERTY_BUYERS', 'BUYER', 'ACCOUNTANT', 'DEVELOPER', 'LAWYER', 'EXISTING_PROPERTY_OWNER'].includes(audience) && 
                      `Specialized resources and information for ${displayName.toLowerCase()}.`}
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
                  <span className="ml-4 text-gray-500 font-medium">Audiences</span>
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
