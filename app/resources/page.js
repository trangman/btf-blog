import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import CTAButtons from '../components/CTAButtons'
import Script from 'next/script'
import { getCanonicalUrl } from '../lib/utils'

export const metadata = {
  title: 'Resources & Insights | Better-than-Freehold™',
  description:
    'Articles, guides, and market insights on secure, legal Thai property ownership and the Better-than-Freehold™ structure.',
  alternates: { canonical: getCanonicalUrl('/resources') },
  robots: { index: true, follow: true },
  openGraph: {
    url: getCanonicalUrl('/resources'),
    title: 'Resources & Insights | Better-than-Freehold™',
    description: 'Guides and insights on Thai property investing and BtF.',
    images: [{ url: getCanonicalUrl('/og/default.jpg'), width: 1200, height: 630, alt: 'Better-than-Freehold' }],
  },
  twitter: { images: [getCanonicalUrl('/og/default.jpg')] },
}

export default function Resources() {
  return (
    <div className="min-h-screen flex flex-col bg-btf-dark">
      <Navigation />
      <main className="flex-1">
        <Script
          id="resources-breadcrumbs"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: getCanonicalUrl('/'),
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Resources',
                  item: getCanonicalUrl('/resources'),
                },
              ],
            }),
          }}
        />
        <Script
          id="resources-webpage"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: 'Resources & Insights',
              url: getCanonicalUrl('/resources'),
              description: 'Articles, guides, and insights about Thai property investment and the Better-than-Freehold™ structure.',
            }),
          }}
        />
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-btf-light mb-6">
              Resources & Insights
            </h1>
            <p className="text-xl text-btf-light/80 mb-8 max-w-3xl mx-auto">
              Stay informed about property investment in Thailand with our latest articles, guides, and market insights.
            </p>
          </div>
        </section>

        {/* Featured Articles Section */}
        <section className="py-20 bg-btf-dark/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-btf-accent mb-12">Featured Articles</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Article 1 */}
              <div className="bg-btf-dark/30 rounded-xl overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 bg-btf-accent/10"></div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-btf-light/60 mb-4">
                    <span>Market Analysis</span>
                    <span className="mx-2">•</span>
                    <span>5 min read</span>
                  </div>
                  <h3 className="text-xl font-semibold text-btf-light mb-3">
                    Thailand Property Market Outlook 2025
                  </h3>
                  <p className="text-btf-light/80 mb-4">
                    An in-depth analysis of Thailand's property market trends and opportunities for foreign investors.
                  </p>
                  <a href="#" className="text-btf-accent hover:text-btf-light">Read More →</a>
                </div>
              </div>

              {/* Article 2 */}
              <div className="bg-btf-dark/30 rounded-xl overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 bg-btf-accent/10"></div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-btf-light/60 mb-4">
                    <span>Legal Guide</span>
                    <span className="mx-2">•</span>
                    <span>8 min read</span>
                  </div>
                  <h3 className="text-xl font-semibold text-btf-light mb-3">
                    Understanding Thai Property Law
                  </h3>
                  <p className="text-btf-light/80 mb-4">
                    A comprehensive guide to property ownership laws and regulations in Thailand.
                  </p>
                  <a href="#" className="text-btf-accent hover:text-btf-light">Read More →</a>
                </div>
              </div>

              {/* Article 3 */}
              <div className="bg-btf-dark/30 rounded-xl overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 bg-btf-accent/10"></div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-btf-light/60 mb-4">
                    <span>Investment Strategy</span>
                    <span className="mx-2">•</span>
                    <span>6 min read</span>
                  </div>
                  <h3 className="text-xl font-semibold text-btf-light mb-3">
                    Maximising ROI with Better-than-Freehold™
                  </h3>
                  <p className="text-btf-light/80 mb-4">
                    Learn how our structure helps investors maximise returns while minimising risks.
                  </p>
                  <a href="#" className="text-btf-accent hover:text-btf-light">Read More →</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-btf-accent mb-12">Investment Resources</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Guides */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-btf-light mb-6">Investment Guides</h3>
                
                <div className="bg-btf-dark/30 p-6 rounded-xl">
                  <h4 className="text-xl font-semibold text-btf-light mb-3">
                    Beginner's Guide to Thai Property
                  </h4>
                  <p className="text-btf-light/80 mb-4">
                    Everything you need to know about starting your property investment journey in Thailand.
                  </p>
                  <a href="#" className="text-btf-accent hover:text-btf-light">Download PDF →</a>
                </div>

                <div className="bg-btf-dark/30 p-6 rounded-xl">
                  <h4 className="text-xl font-semibold text-btf-light mb-3">
                    Due Diligence Checklist
                  </h4>
                  <p className="text-btf-light/80 mb-4">
                    A comprehensive checklist for evaluating property investments in Thailand.
                  </p>
                  <a href="#" className="text-btf-accent hover:text-btf-light">Download PDF →</a>
                </div>
              </div>

              {/* Market Reports */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-btf-light mb-6">Market Reports</h3>
                
                <div className="bg-btf-dark/30 p-6 rounded-xl">
                  <h4 className="text-xl font-semibold text-btf-light mb-3">
                    Q1 2025 Market Analysis
                  </h4>
                  <p className="text-btf-light/80 mb-4">
                    Detailed analysis of property market trends and forecasts for 2025.
                  </p>
                  <a href="#" className="text-btf-accent hover:text-btf-light">Download Report →</a>
                </div>

                <div className="bg-btf-dark/30 p-6 rounded-xl">
                  <h4 className="text-xl font-semibold text-btf-light mb-3">
                    Regional Investment Opportunities
                  </h4>
                  <p className="text-btf-light/80 mb-4">
                    Analysis of investment opportunities across different regions in Thailand.
                  </p>
                  <a href="#" className="text-btf-accent hover:text-btf-light">Download Report →</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20 bg-btf-accent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-btf-dark mb-4">Have Questions?</h2>
            <p className="text-xl text-btf-dark/80 mb-8 max-w-3xl mx-auto">
              Get in touch to discuss your goals or ask about our latest resources and insights.
            </p>
            <CTAButtons variant="accent-bg" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}


