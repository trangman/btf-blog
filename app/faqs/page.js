import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import CTAButtons from '../components/CTAButtons'
import Script from 'next/script'
import { getCanonicalUrl } from '../lib/utils'

export const metadata = {
  title: 'Frequently Asked Questions | Better-than-Freehold™',
  description: 'Get answers to the most common questions about Better-than-Freehold™ property ownership in Thailand.',
  alternates: { canonical: getCanonicalUrl('/faqs') },
  openGraph: {
    url: getCanonicalUrl('/faqs'),
    title: 'FAQs | Better-than-Freehold™',
    description: 'Common questions about BtF property ownership in Thailand.',
    images: [
      { url: getCanonicalUrl('/og/faqs.jpg'), width: 1200, height: 630, alt: 'BtF FAQs' },
    ],
  },
  twitter: { images: [getCanonicalUrl('/og/faqs.jpg')] },
}

export default function FAQs() {
  return (
    <div className="min-h-screen flex flex-col bg-btf-dark">
      <Navigation />
      <main className="flex-1">
        <Script
          id="faqs-webpage"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: 'Better-than-Freehold™ FAQs',
              url: getCanonicalUrl('/faqs'),
              description: 'Frequently asked questions about Better-than-Freehold™ property ownership in Thailand.',
            }),
          }}
        />
        
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-btf-light mb-6">
              Frequently Asked <span className="text-btf-accent">Questions</span>
            </h1>
            <p className="text-xl text-btf-light/80 mb-8 max-w-4xl mx-auto">
              Get answers to the most common questions about Better-than-Freehold™ property ownership in Thailand.
            </p>
          </div>
        </section>

        {/* FAQ Section - White Background */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <h3 className="text-xl font-semibold text-btf-dark mb-4">1. What is Better-than-Freehold™ (BtF)?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Better-than-Freehold™ (BtF) is a legally compliant, financeable, and risk-mitigated platform designed for foreign investment in Thai real estate. It eliminates the legal risks associated with freehold ownership, 30-year lease limitations, and illegal nominee companies. BtF also enables offshore financing, provides capital protection, and ensures secure, enforceable ownership rights.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <h3 className="text-xl font-semibold text-btf-dark mb-4">2. How does BtF ensure legal compliance and security?</h3>
                <p className="text-gray-700 leading-relaxed">
                  BtF is fully compliant with Thai laws, including the Civil and Commercial Code (CCC), Foreign Business Act (FBA), and Land Code. All contracts and structures are registered, auditable, and backed by tier-one Thai legal and tax opinions. Additionally, BtF protects investments through registered contracts, trust structures, and asset fallback mechanisms, ensuring complete transparency and enforceability.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <h3 className="text-xl font-semibold text-btf-dark mb-4">3. What are the financial benefits of using BtF?</h3>
                <p className="text-gray-700 leading-relaxed">
                  BtF offers several financial advantages, including:
                </p>
                <ul className="text-gray-700 mt-4 space-y-2">
                  <li>• Offshore financing with up to 50% Loan-to-Value (LTV)</li>
                  <li>• No Thai income or land transfer tax on resale</li>
                  <li>• Tax optimisation through compliance with AMLA 2025</li>
                  <li>• Guaranteed rolling 30-year leases, ensuring long-term financial security</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <h3 className="text-xl font-semibold text-btf-dark mb-4">4. Who can benefit from Better-than-Freehold™?</h3>
                <p className="text-gray-700 leading-relaxed">
                  BtF is designed for various stakeholders in the Thai property market:
                </p>
                <ul className="text-gray-700 mt-4 space-y-2">
                  <li>• <strong>Foreign Investors:</strong> Seeking secure, compliant property ownership</li>
                  <li>• <strong>Property Developers:</strong> Looking to attract foreign buyers</li>
                  <li>• <strong>Legal Professionals:</strong> Offering compliant solutions to clients</li>
                  <li>• <strong>Financial Institutions:</strong> Providing financing for BtF structures</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <h3 className="text-xl font-semibold text-btf-dark mb-4">5. How does the BtF structure work?</h3>
                <p className="text-gray-700 leading-relaxed">
                  The BtF structure operates through a three-tier system:
                </p>
                <ul className="text-gray-700 mt-4 space-y-2">
                  <li>• <strong>Venture Management Ltd:</strong> Platform architect and IP owner</li>
                  <li>• <strong>Siam Property Holdings:</strong> Trustee holding property titles</li>
                  <li>• <strong>Clear Blue Security Agents:</strong> Enforcement and compliance monitoring</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  This structure ensures legal compliance, secure ownership, and enforceable rights while maintaining transparency and auditability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-btf-accent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-btf-dark mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-btf-dark/80 mb-8 max-w-3xl mx-auto">
              Our team of experts is here to help you understand how Better-than-Freehold™ can work for your specific needs.
            </p>
            <CTAButtons variant="accent-bg" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 