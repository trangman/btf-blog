import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import CTAButtons from '../components/CTAButtons'
import Script from 'next/script'
import { getCanonicalUrl } from '../lib/utils'

export const metadata = {
  title: 'Foreign Property Owners | Better-than-Freehold™',
  description:
    'Legal, secure, and financeable Thai property ownership for foreign property owners using Better-than-Freehold™.',
  alternates: { canonical: getCanonicalUrl('/owners') },
  robots: { index: true, follow: true },
  openGraph: {
    url: getCanonicalUrl('/owners'),
    title: 'Foreign Property Owners | Better-than-Freehold™',
    description: 'Legal, secure, and financeable Thai property ownership.',
    images: [{ url: getCanonicalUrl('/og/default.jpg'), width: 1200, height: 630, alt: 'Better-than-Freehold' }],
  },
  twitter: { images: [getCanonicalUrl('/og/default.jpg')] },
}

export default function Owners() {
  return (
    <div className="min-h-screen flex flex-col bg-btf-dark">
      <Navigation />
      <main className="flex-1">
        <Script
          id="owners-breadcrumbs"
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
                  name: 'Foreign Property Owners',
                  item: getCanonicalUrl('/owners'),
                },
              ],
            }),
          }}
        />
        <Script
          id="owners-webpage"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: 'Better-than-Freehold™ for Foreign Property Owners',
              url: getCanonicalUrl('/owners'),
              description: 'Legal, secure, and financeable Thai property ownership for foreign property owners using Better-than-Freehold™.',
            }),
          }}
        />
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-btf-light mb-6">
              <span className="text-btf-accent">Better-than-Freehold™ (BtF)</span> for Foreign Property Owners
            </h1>
            <p className="text-xl text-btf-light/80 mb-8 max-w-4xl mx-auto">
              For foreign investors seeking to own property in Thailand, Better-than-Freehold™ offers a revolutionary approach that is legal, secure, and financially advantageous. Unlike traditional methods that rely on risky nominee arrangements, BtF provides genuine ownership rights through innovative legal structures that comply fully with Thai law.
            </p>
          </div>
        </section>

        {/* Introduction Section - White Background */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-btf-dark mb-6">
                Why Foreign Property Owners Choose BtF
              </h2>
              <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto">
                Traditional methods of foreign property ownership in Thailand are fraught with legal risks and uncertainties. BtF eliminates these concerns by providing a transparent, compliant, and enforceable ownership structure.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 md:items-stretch">
              <div className="flex flex-col space-y-8">
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 flex-1">
                  <h3 className="text-2xl font-semibold text-btf-dark mb-4">Legal Certainty</h3>
                  <p className="text-gray-700 leading-relaxed">
                    BtF structures are fully compliant with Thai law, including the Land Code, Civil and Commercial Code (CCC), and Foreign Business Act (FBA). All agreements are registered and auditable, ensuring complete transparency and enforceability.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 flex-1">
                  <h3 className="text-2xl font-semibold text-btf-dark mb-4">Financial Benefits</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Offshore financing up to 50% LTV is available, enabling leverage opportunities that are unavailable with traditional methods.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col space-y-8">
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 flex-1">
                  <h3 className="text-2xl font-semibold text-btf-dark mb-4">Secure Ownership Rights</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Unlike nominee arrangements that can be challenged or revoked, BtF provides genuine ownership rights through registered leases, rolling options, and trust structures that cannot be easily undermined.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 flex-1">
                  <h3 className="text-2xl font-semibold text-btf-dark mb-4">Tax Efficiency</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Ownership and gains sit offshore in a Labuan trust (SPH). No Thai tax if gains are not remitted and no Thai land transfer or income tax on sale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transition from Nominee Companies */}
        <section className="py-20 bg-btf-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-btf-accent mb-4">Transition from Nominee Companies</h2>
              <p className="text-xl text-btf-light/80 max-w-3xl mx-auto">Make your structure legal and secure under AMLA 2025.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-btf-dark/30 p-8 rounded-xl border border-btf-accent/20">
                <h3 className="text-xl font-semibold text-btf-light mb-4">Transition to Legal Ownership</h3>
                <ul className="space-y-2 text-btf-light/80">
                  <li>• Dissolve nominee company (with legal counsel)</li>
                  <li>• Transfer title to TIN</li>
                  <li>• Establish BtF via SPH lease and option</li>
                  <li>• Register mortgage and pledge for enforcement</li>
                  <li>• Finance available for transition if needed</li>
                </ul>
              </div>
              <div className="bg-btf-dark/30 p-8 rounded-xl border border-btf-accent/20">
                <h3 className="text-xl font-semibold text-btf-light mb-4">Avoid Penalties</h3>
                <ul className="space-y-2 text-btf-light/80">
                  <li>• Immediate compliance</li>
                  <li>• Avoids jail risk</li>
                  <li>• Avoids potential fines </li>
                  <li>• Removes asset seizure risk</li>
                  <li>• BtF can fund legal/tax costs for transition</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section - Dark Background */}
        <section className="py-20 bg-btf-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-btf-accent mb-4">
                Key Features of BtF for Foreign Property Owners
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-btf-dark/30 p-6 rounded-xl border border-btf-accent/20">
                <div className="bg-btf-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <img src="/icons/shield.svg" alt="Shield" className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-btf-light mb-4 text-center">1. Lifetime Security</h3>
                <p className="text-btf-light/80 text-center">
                  Secure tenure for life through registered long-term leases and rolling options that provide perpetual renewal rights.
                </p>
              </div>

              <div className="bg-btf-dark/30 p-6 rounded-xl border border-btf-accent/20">
                <div className="bg-btf-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <img src="/icons/money.svg" alt="Money" className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-btf-light mb-4 text-center">2. Income Rights</h3>
                <p className="text-btf-light/80 text-center">
                  Full rights to rental income and capital gains, with the ability to transfer these rights to heirs or sell to third parties.
                </p>
              </div>

              <div className="bg-btf-dark/30 p-6 rounded-xl border border-btf-accent/20">
                <div className="bg-btf-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <img src="/icons/bank.svg" alt="Bank" className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-btf-light mb-4 text-center">3. Financing Options</h3>
                <p className="text-btf-light/80 text-center">
                  Access to international financing through structures recognised by major banks, enabling leverage for larger investments.
                </p>
              </div>

              <div className="bg-btf-dark/30 p-6 rounded-xl border border-btf-accent/20">
                <div className="bg-btf-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <img src="/icons/scales.svg" alt="Legal Scales" className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-btf-light mb-4 text-center">4. Legal Protection</h3>
                <p className="text-btf-light/80 text-center">
                  Third-party enforcement mechanisms and registered contracts that provide robust legal protection under Thai law.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section - White Background */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-btf-dark mb-6">
                BtF vs. Traditional Methods
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                See how Better-than-Freehold™ compares to traditional foreign property ownership methods in Thailand.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl py-4 pl-2 pr-3 md:p-8 border border-gray-200 relative -ml-2 md:ml-0">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm md:text-base whitespace-normal md:whitespace-nowrap table-fixed leading-snug">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-1.5 px-2 md:py-4 md:px-6 text-btf-dark font-semibold sticky top-0 bg-gray-50">Feature</th>
                      <th className="py-1.5 px-2 md:py-4 md:px-6 text-green-700 font-semibold sticky top-0 bg-gray-50"><span className="md:hidden">BtF</span><span className="hidden md:inline">Better-than-Freehold™</span></th>
                      <th className="py-1.5 px-2 md:py-4 md:px-6 text-red-700 font-semibold sticky top-0 bg-gray-50">Nominee Companies</th>
                      <th className="py-1.5 px-2 md:py-4 md:px-6 text-orange-700 font-semibold sticky top-0 bg-gray-50">30-Year Leases</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b border-gray-100">
                      <td className="py-1.5 px-2 md:py-4 md:px-6 font-medium">Legal Compliance</td>
                      <td className="py-1.5 px-2 md:py-4 md:px-6 text-green-700">✓ Fully Compliant</td>
                      <td className="py-1.5 px-2 md:py-4 md:px-6 text-red-700">✗ Illegal</td>
                      <td className="py-1.5 px-2 md:py-4 md:px-6 text-orange-700">⚠ Limited</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-1.5 px-2 md:py-4 md:px-6 font-medium">Security of Tenure</td>
                      <td className="py-1.5 px-2 md:py-4 md:px-6 text-green-700">✓ Lifetime Security</td>
                      <td className="py-1.5 px-2 md:py-4 md:px-6 text-red-700">✗ Can be Revoked</td>
                      <td className="py-1.5 px-2 md:py-4 md:px-6 text-orange-700">⚠ 30 Years Only</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-1.5 px-2 md:py-4 md:px-6 font-medium">Financing Available</td>
                      <td className="py-1.5 px-2 md:py-4 md:px-6 text-green-700">✓ Yes</td>
                      <td className="py-1.5 px-2 md:py-4 md:px-6 text-red-700">✗ No</td>
                      <td className="py-1.5 px-2 md:py-4 md:px-6 text-orange-700">⚠ Limited</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-1.5 px-2 md:py-4 md:px-6 font-medium">Transferable Rights</td>
                      <td className="py-1.5 px-2 md:py-4 md:px-6 text-green-700">✓ Yes</td>
                      <td className="py-1.5 px-2 md:py-4 md:px-6 text-red-700">✗ Risky</td>
                      <td className="py-1.5 px-2 md:py-4 md:px-6 text-orange-700">⚠ Limited</td>
                    </tr>
                    <tr>
                      <td className="py-1.5 px-2 md:py-4 md:px-6 font-medium">Tax Optimization</td>
                      <td className="py-1.5 px-2 md:py-4 md:px-6 text-green-700">✓ Built-in</td>
                      <td className="py-1.5 px-2 md:py-4 md:px-6 text-red-700">✗ None</td>
                      <td className="py-1.5 px-2 md:py-4 md:px-6 text-orange-700">✗ None</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Process Section - Dark Background */}
        <section className="py-20 bg-btf-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-btf-accent mb-4">
                Your BtF Investment Journey
              </h2>
              <p className="text-xl text-btf-light/80 max-w-3xl mx-auto">
                Getting started with Better-than-Freehold™ is straightforward and transparent.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-btf-dark/30 p-8 rounded-xl border border-btf-accent/20 text-center">
                <div className="bg-btf-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-btf-accent text-3xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold text-btf-light mb-4">Initial Consultation</h3>
                <p className="text-btf-light/80">
                  Contact one of our team to assess your investment goals and explain the BtF structure in detail.
                </p>
              </div>

              <div className="bg-btf-dark/30 p-8 rounded-xl border border-btf-accent/20 text-center">
                <div className="bg-btf-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-btf-accent text-3xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold text-btf-light mb-4">Structure Setup</h3>
                <p className="text-btf-light/80">
                  We establish your BtF structure, including all necessary legal documents and registrations with Thai authorities.
                </p>
              </div>

              <div className="bg-btf-dark/30 p-8 rounded-xl border border-btf-accent/20 text-center">
                <div className="bg-btf-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-btf-accent text-3xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold text-btf-light mb-4">Property Acquisition</h3>
                <p className="text-btf-light/80">
                  Complete your property acquisition with confidence, knowing your ownership rights are secure and legally protected.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - White Background */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-btf-dark mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Get answers to the most common questions about BtF for foreign property owners
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <h3 className="text-xl font-semibold text-btf-dark mb-4">1. How does BtF ensure legal compliance for foreign property ownership in Thailand?</h3>
                <p className="text-gray-700 leading-relaxed">
                  BtF structures are fully compliant with Thai laws, including the Land Code, Civil and Commercial Code (CCC), and Foreign Business Act (FBA). All agreements, such as leases, rolling options, and trust structures, are registered and auditable, ensuring transparency and enforceability. This eliminates the risks associated with nominee arrangements, which are now classified as illegal under AMLA 2025.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <h3 className="text-xl font-semibold text-btf-dark mb-4">2. What financial benefits does BtF offer to foreign property owners?</h3>
                <p className="text-gray-700 leading-relaxed">
                  BtF provides significant financial advantages, including:
                </p>
                <ul className="text-gray-700 mt-4 space-y-2">
                  <li>• <strong>Offshore Financing:</strong> Up to 50% Loan-to-Value (LTV) is available through international financing channels</li>
                  <li>• <strong>Tax Efficiency:</strong> Ownership and gains are held offshore in a Labuan trust (SPH), avoiding Thai taxes if gains are not remitted. Additionally, there are no Thai land transfer or income taxes on sale</li>
                  <li>• <strong>Cost Coverage:</strong> BtF can fund legal and tax costs for transitioning from nominee structures to compliant ownership</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <h3 className="text-xl font-semibold text-btf-dark mb-4">3. How does BtF provide secure ownership rights compared to traditional methods?</h3>
                <p className="text-gray-700 leading-relaxed">
                  BtF offers lifetime security through registered long-term leases and rolling options, ensuring perpetual renewal rights. Unlike nominee arrangements, which can be challenged or revoked, BtF structures are legally enforceable and include third-party enforcement mechanisms. This guarantees robust legal protection and peace of mind for foreign property owners.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <h3 className="text-xl font-semibold text-btf-dark mb-4">4. Can BtF help transition from risky nominee structures to legal ownership?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes, BtF provides a clear pathway to transition from nominee companies to legal ownership under AMLA 2025. The process includes:
                </p>
                <ul className="text-gray-700 mt-4 space-y-2">
                  <li>• Dissolving the nominee company with legal counsel</li>
                  <li>• Transferring the title to Thailand Investor Network (TIN)</li>
                  <li>• Establishing the BtF structure via SPH lease and option agreements</li>
                  <li>• Registering a mortgage and pledge for enforcement</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  This transition ensures compliance, avoids penalties, and eliminates risks such as asset seizure, fines, or imprisonment.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Script
          id="owners-faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'How does BtF ensure legal compliance for foreign property ownership in Thailand?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'BtF structures are fully compliant with Thai laws, including the Land Code, Civil and Commercial Code (CCC), and Foreign Business Act (FBA). All agreements, such as leases, rolling options, and trust structures, are registered and auditable, ensuring transparency and enforceability. This eliminates the risks associated with nominee arrangements, which are now classified as illegal under AMLA 2025.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'What financial benefits does BtF offer to foreign property owners?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'BtF provides significant financial advantages, including: Offshore Financing with up to 50% Loan-to-Value (LTV) available through international financing channels; Tax Efficiency where ownership and gains are held offshore in a Labuan trust (SPH), avoiding Thai taxes if gains are not remitted, and no Thai land transfer or income taxes on sale; Cost Coverage where BtF can fund legal and tax costs for transitioning from nominee structures to compliant ownership.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'How does BtF provide secure ownership rights compared to traditional methods?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'BtF offers lifetime security through registered long-term leases and rolling options, ensuring perpetual renewal rights. Unlike nominee arrangements, which can be challenged or revoked, BtF structures are legally enforceable and include third-party enforcement mechanisms. This guarantees robust legal protection and peace of mind for foreign property owners.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'Can BtF help transition from risky nominee structures to legal ownership?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, BtF provides a clear pathway to transition from nominee companies to legal ownership under AMLA 2025. The process includes: Dissolving the nominee company with legal counsel; Transferring the title to Thailand Investor Network (TIN); Establishing the BtF structure via SPH lease and option agreements; Registering a mortgage and pledge for enforcement. This transition ensures compliance, avoids penalties, and eliminates risks such as asset seizure, fines, or imprisonment.'
                  }
                }
              ]
            }),
          }}
        />

        

        {/* CTA Section */}
        <section className="py-20 bg-btf-accent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-btf-dark mb-4">
              Ready to Secure Your Thai Property Investment?
            </h2>
            <p className="text-xl text-btf-dark/80 mb-8 max-w-3xl mx-auto">
              Join the growing number of foreign property owners who have chosen the security and advantages of Better-than-Freehold™.
            </p>
            <CTAButtons variant="accent-bg" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}


