import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import CTAButtons from '../components/CTAButtons'
import Script from 'next/script'
import { getCanonicalUrl } from '../lib/utils'

export const metadata = {
  title: 'Property Developers | Better-than-Freehold™',
  description:
    'Compliant, scalable platform for developers to attract foreign capital with legally enforceable, financeable structures.',
  alternates: { canonical: getCanonicalUrl('/property-developers') },
  robots: { index: true, follow: true },
  openGraph: {
    url: getCanonicalUrl('/property-developers'),
    title: 'Property Developers | Better-than-Freehold™',
    description: 'Compliant, scalable financing and ownership platform for developers.',
    images: [{ url: getCanonicalUrl('/og/default.jpg'), width: 1200, height: 630, alt: 'Better-than-Freehold' }],
  },
  twitter: { images: [getCanonicalUrl('/og/default.jpg')] },
}

export default function PropertyDevelopers() {
  return (
    <div className="min-h-screen flex flex-col bg-btf-dark">
      <Navigation />
      <main className="flex-1">
        <Script
          id="developers-breadcrumbs"
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
                  name: 'Property Developers',
                  item: getCanonicalUrl('/property-developers'),
                },
              ],
            }),
          }}
        />
        <Script
          id="developers-webpage"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: 'Better-than-Freehold™ for Property Developers',
              url: getCanonicalUrl('/property-developers'),
              description: 'Compliant, scalable financing and ownership platform for developers using Better-than-Freehold™.',
            }),
          }}
        />
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-btf-light mb-6">
              <span className="text-btf-accent">Better-than-Freehold™ (BtF) Structure</span> for Property Developers
            </h1>
            <p className="text-xl text-btf-light/80 mb-8 max-w-4xl mx-auto">
              The Better-than-Freehold™ structure is a groundbreaking platform designed to provide property developers with a legally compliant, scalable, and innovative solution for foreign investment in Thai real estate. By leveraging registered contracts and regulated trust structures, BtF ensures compliance with Thai law while offering developers a secure and transparent framework to attract foreign capital.
            </p>
          </div>
        </section>

        {/* Key Benefits Section - White Background */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-btf-dark mb-6">
                Key Benefits for Developers
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 flex flex-col h-full">
                <h3 className="text-2xl font-semibold text-btf-dark mb-4">Access to Foreign Capital</h3>
                <p className="text-gray-700 leading-relaxed flex-grow">
                  BtF enables developers to attract significant foreign investment without breaching Thai land ownership laws. This is achieved through a combination of registered leases, options, and trust structures, ensuring compliance with the Thai Land Code and Foreign Business Act (FBA).
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 flex flex-col h-full">
                <h3 className="text-2xl font-semibold text-btf-dark mb-4">Enhanced Marketability</h3>
                <p className="text-gray-700 leading-relaxed flex-grow">
                  By offering a secure and legally compliant ownership structure, developers can market their projects more effectively to foreign buyers, who are often deterred by the risks associated with nominee structures or unclear legal frameworks.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 flex flex-col h-full">
                <h3 className="text-2xl font-semibold text-btf-dark mb-4">Scalable and Auditable Platform</h3>
                <p className="text-gray-700 leading-relaxed flex-grow">
                  The BtF model is designed to support large-scale developments by providing a transparent, auditable investment platform. This ensures that all transactions are legally enforceable and compliant with Thai and international regulations.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 flex flex-col h-full">
                <h3 className="text-2xl font-semibold text-btf-dark mb-4">Future-Proof Compliance</h3>
                <p className="text-gray-700 leading-relaxed flex-grow">
                  BtF undergoes regular legal reviews and audits to ensure it remains compliant with evolving Thai and international regulations, including the Anti-Money Laundering Act (AMLA) 2025. This protects developers from potential legal and financial risks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How BtF Works for Developers Section - Dark Background */}
        <section className="py-20 bg-btf-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-btf-accent mb-4">
                How BtF Works for Developers
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-btf-dark/30 p-6 rounded-xl border border-btf-accent/20">
                <div className="bg-btf-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-btf-accent text-2xl">🏢</span>
                </div>
                <h3 className="text-xl font-semibold text-btf-light mb-4 text-center">1. Property Acquisition by Thailand Investor Network (TIN)</h3>
                <p className="text-btf-light/80 text-center">
                  Land held by a TIN SPV. The Thai-owned entity acquires and holds title, ensuring compliance with Thai ownership laws while providing a secure foundation for the BtF structure.
                </p>
              </div>
              
              <div className="bg-btf-dark/30 p-6 rounded-xl border border-btf-accent/20">
                <div className="bg-btf-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-btf-accent text-2xl">📋</span>
                </div>
                <h3 className="text-xl font-semibold text-btf-light mb-4 text-center">2. Registered Lease and Option Rights</h3>
                <p className="text-btf-light/80 text-center">
                  30-year lease (registered) is granted to SPH with a separately priced rolling option to sell or re-lease. This provides financeable rights without breaching Thai land ownership restrictions.
                </p>
              </div>
              
              <div className="bg-btf-dark/30 p-6 rounded-xl border border-btf-accent/20">
                <div className="bg-btf-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-btf-accent text-2xl">🔒</span>
                </div>
                <h3 className="text-xl font-semibold text-btf-light mb-4 text-center">3. Independent Enforcement</h3>
                <p className="text-btf-light/80 text-center">
                  Contracts are enforced by Clear Blue Security Agents ("CBSA") with step-in rights, ensuring transparency and streamlined remedies.
                </p>
              </div>
              
              <div className="bg-btf-dark/30 p-6 rounded-xl border border-btf-accent/20">
                <div className="bg-btf-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <img src="/icons/bank.svg" alt="Bank" className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-btf-light mb-4 text-center">4. Trust Platform and Institutional Funding</h3>
                <p className="text-btf-light/80 text-center">
                  The BtF structure incorporates a regulated trust platform, Siam Property Holdings (SPH) and offshore regulated credit fund financing buyers and developments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Developers Should Choose BtF Section - White Background */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-btf-dark mb-6">
                Why Developers Should Choose BtF
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              <div className="bg-green-50 p-8 rounded-xl border border-green-200 flex flex-col h-full">
                <h3 className="text-2xl font-semibold text-green-800 mb-4">✅ Legal Compliance</h3>
                <p className="text-gray-700 leading-relaxed flex-grow">
                  BtF aligns fully with Thai laws, including the Land Code, FBA, Revenue Code, and AMLA 2025. This eliminates the risks associated with nominee structures and ensures your projects are legally sound.
                </p>
              </div>
              
              <div className="bg-green-50 p-8 rounded-xl border border-green-200 flex flex-col h-full">
                <h3 className="text-2xl font-semibold text-green-800 mb-4 flex items-center gap-3">
                  <img src="/icons/shield.svg" alt="Shield" className="w-8 h-8" />
                  Risk Mitigation
                </h3>
                <p className="text-gray-700 leading-relaxed flex-grow">
                  By adopting BtF, developers can avoid the legal and financial risks associated with non-compliant structures, such as asset seizure, tax penalties, or project delays.
                </p>
              </div>
              
              <div className="bg-green-50 p-8 rounded-xl border border-green-200 flex flex-col h-full">
                <h3 className="text-2xl font-semibold text-green-800 mb-4">📈 Increased Buyer Confidence</h3>
                <p className="text-gray-700 leading-relaxed flex-grow">
                  Foreign buyers are more likely to invest in projects that offer secure, enforceable rights. BtF provides this assurance, making your developments more attractive to international investors.
                </p>
              </div>
              
              <div className="bg-green-50 p-8 rounded-xl border border-green-200 flex flex-col h-full">
                <h3 className="text-2xl font-semibold text-green-800 mb-4 flex items-center gap-3">
                  <img src="/icons/construction.svg" alt="Construction" className="w-8 h-8" />
                  Support for Large-Scale Projects
                </h3>
                <p className="text-gray-700 leading-relaxed flex-grow">
                  The BtF platform is designed to handle complex, large-scale developments, providing developers with the tools and support needed to succeed in a competitive market.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Metrics Section - Dark Background */}
        <section className="py-20 bg-btf-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-btf-accent mb-4">
                BtF Success Metrics for Developers
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-btf-dark/30 p-8 rounded-xl border border-btf-accent/20 text-center">
                <div className="bg-btf-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-btf-accent text-2xl">🌍</span>
                </div>
                <h3 className="text-xl font-semibold text-btf-light mb-3">Global Reach</h3>
                <p className="text-btf-light/80">Access to international investors previously deterred by legal uncertainties</p>
              </div>
              
              <div className="bg-btf-dark/30 p-8 rounded-xl border border-btf-accent/20 text-center">
                <div className="bg-btf-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/icons/money.svg" alt="Money" className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-btf-light mb-3">Increased Sales</h3>
                <p className="text-btf-light/80">Higher conversion rates due to secure and compliant ownership structures</p>
              </div>
              
              <div className="bg-btf-dark/30 p-8 rounded-xl border border-btf-accent/20 text-center">
                <div className="bg-btf-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-btf-accent text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-btf-light mb-3">Faster Transactions</h3>
                <p className="text-btf-light/80">Streamlined processes with pre-approved legal frameworks</p>
              </div>
              
              <div className="bg-btf-dark/30 p-8 rounded-xl border border-btf-accent/20 text-center">
                <div className="bg-btf-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-btf-accent text-2xl">🔄</span>
                </div>
                <h3 className="text-xl font-semibold text-btf-light mb-3">Scalability</h3>
                <p className="text-btf-light/80">Platform designed to support projects of any size and complexity</p>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Process Section - White Background */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-btf-dark mb-6">
                Implementation Process for Developers
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Getting started with BtF is straightforward and designed to integrate seamlessly with your existing development processes.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <div className="bg-btf-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-btf-accent text-3xl">1</span>
                </div>
                <h3 className="text-xl font-semibold text-btf-dark mb-4 text-center">Initial Consultation</h3>
                <p className="text-gray-700 text-center">
                  Meet with our team to share your specific project requirements and understand how BtF can be tailored to your development goals.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <div className="bg-btf-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-btf-accent text-3xl">2</span>
                </div>
                <h3 className="text-xl font-semibold text-btf-dark mb-4 text-center">Structure Setup</h3>
                <p className="text-gray-700 text-center">
                  We establish the BtF framework for your project, including all necessary legal documentation and compliance measures.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <div className="bg-btf-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-btf-accent text-3xl">3</span>
                </div>
                <h3 className="text-xl font-semibold text-btf-dark mb-4 text-center">Launch & Support</h3>
                <p className="text-gray-700 text-center">
                  Begin marketing to international investors with full BtF support and ongoing compliance monitoring.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - Dark Background */}
        <section className="py-20 bg-btf-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-btf-accent mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-btf-light/80 max-w-3xl mx-auto">
                Get answers to the most common questions about BtF for property developers
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-btf-dark/30 p-8 rounded-xl border border-btf-accent/20">
                <h3 className="text-xl font-semibold text-btf-light mb-4">1. How does the BtF structure help developers attract foreign investment?</h3>
                <p className="text-btf-light/80 leading-relaxed">
                  The BtF structure enables developers to attract significant foreign capital by offering a legally compliant framework that adheres to Thai land ownership laws. This is achieved through:
                </p>
                <ul className="text-btf-light/80 mt-4 space-y-2">
                  <li>• <strong>Registered Leases and Rolling Options:</strong> These provide secure, financeable rights without breaching Thai land ownership restrictions</li>
                  <li>• <strong>Trust Structures:</strong> Regulated trust platforms ensure transparency and compliance with the Thai Land Code and Foreign Business Act (FBA)</li>
                  <li>• <strong>Enhanced Marketability:</strong> Foreign buyers are more likely to invest in projects with secure and enforceable ownership rights</li>
                </ul>
              </div>

              <div className="bg-btf-dark/30 p-8 rounded-xl border border-btf-accent/20">
                <h3 className="text-xl font-semibold text-btf-light mb-4">2. What makes the BtF platform scalable and suitable for large-scale developments?</h3>
                <p className="text-btf-light/80 leading-relaxed">
                  The BtF platform is designed to support complex, large-scale projects by providing:
                </p>
                <ul className="text-btf-light/80 mt-4 space-y-2">
                  <li>• <strong>Transparent and Auditable Frameworks:</strong> All transactions are legally enforceable and compliant with Thai and international regulations</li>
                  <li>• <strong>Institutional Funding Support:</strong> The inclusion of offshore regulated credit funds facilitates financing for both buyers and developments</li>
                  <li>• <strong>Customisable Solutions:</strong> The BtF structure can be tailored to meet the specific needs of any development project, regardless of size or complexity</li>
                </ul>
              </div>

              <div className="bg-btf-dark/30 p-8 rounded-xl border border-btf-accent/20">
                <h3 className="text-xl font-semibold text-btf-light mb-4">3. How does BtF ensure compliance with Thai and international laws?</h3>
                <p className="text-btf-light/80 leading-relaxed">
                  BtF aligns fully with Thai laws, including the Land Code, FBA, Revenue Code, and AMLA 2025. Compliance is maintained through:
                </p>
                <ul className="text-btf-light/80 mt-4 space-y-2">
                  <li>• <strong>Regular Legal Reviews and Audits:</strong> Ensuring the structure remains up-to-date with evolving regulations</li>
                  <li>• <strong>Registered Contracts:</strong> Leases, options, and other agreements are publicly registered, providing enforceable rights</li>
                  <li>• <strong>Independent Enforcement:</strong> Clear Blue Security Agents (CBSA) oversee contract enforcement, ensuring transparency and legal integrity</li>
                </ul>
              </div>

              <div className="bg-btf-dark/30 p-8 rounded-xl border border-btf-accent/20">
                <h3 className="text-xl font-semibold text-btf-light mb-4">4. Why should developers choose BtF over traditional nominee structures?</h3>
                <p className="text-btf-light/80 leading-relaxed">
                  The BtF structure offers a secure, compliant alternative to risky nominee arrangements, providing developers with:
                </p>
                <ul className="text-btf-light/80 mt-4 space-y-2">
                  <li>• <strong>Legal Security:</strong> Full compliance with Thai laws eliminates risks such as asset seizure, tax penalties, or project delays</li>
                  <li>• <strong>Increased Buyer Confidence:</strong> Foreign investors are more likely to invest in projects with enforceable and transparent ownership rights</li>
                  <li>• <strong>Risk Mitigation:</strong> BtF protects developers from the legal and financial pitfalls associated with non-compliant structures</li>
                  <li>• <strong>Future-Proof Solutions:</strong> Regular audits and updates ensure ongoing compliance with Thai and international regulations, safeguarding long-term project success</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <Script
          id="property-developers-faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'How does the BtF structure help developers attract foreign investment?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'The BtF structure enables developers to attract significant foreign capital by offering a legally compliant framework that adheres to Thai land ownership laws. This is achieved through: Registered Leases and Rolling Options that provide secure, financeable rights without breaching Thai land ownership restrictions; Trust Structures where regulated trust platforms ensure transparency and compliance with the Thai Land Code and Foreign Business Act (FBA); Enhanced Marketability where foreign buyers are more likely to invest in projects with secure and enforceable ownership rights.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'What makes the BtF platform scalable and suitable for large-scale developments?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'The BtF platform is designed to support complex, large-scale projects by providing: Transparent and Auditable Frameworks where all transactions are legally enforceable and compliant with Thai and international regulations; Institutional Funding Support through the inclusion of offshore regulated credit funds that facilitate financing for both buyers and developments; Customisable Solutions where the BtF structure can be tailored to meet the specific needs of any development project, regardless of size or complexity.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'How does BtF ensure compliance with Thai and international laws?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'BtF aligns fully with Thai laws, including the Land Code, FBA, Revenue Code, and AMLA 2025. Compliance is maintained through: Regular Legal Reviews and Audits ensuring the structure remains up-to-date with evolving regulations; Registered Contracts where leases, options, and other agreements are publicly registered, providing enforceable rights; Independent Enforcement where Clear Blue Security Agents (CBSA) oversee contract enforcement, ensuring transparency and legal integrity.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'Why should developers choose BtF over traditional nominee structures?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'The BtF structure offers a secure, compliant alternative to risky nominee arrangements, providing developers with: Legal Security where full compliance with Thai laws eliminates risks such as asset seizure, tax penalties, or project delays; Increased Buyer Confidence where foreign investors are more likely to invest in projects with enforceable and transparent ownership rights; Risk Mitigation where BtF protects developers from the legal and financial pitfalls associated with non-compliant structures; Future-Proof Solutions where regular audits and updates ensure ongoing compliance with Thai and international regulations, safeguarding long-term project success.'
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
              Are you ready to revolutionise your property development projects with a legally compliant and scalable solution?
            </h2>
            <p className="text-xl text-btf-dark/80 mb-8 max-w-4xl mx-auto">
              The Better-than-Freehold™ (BtF) structure is the key to unlocking foreign investment and ensuring the success of your developments.
            </p>
            <CTAButtons variant="accent-bg" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 