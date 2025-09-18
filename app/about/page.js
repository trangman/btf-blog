import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import CTAButtons from '../components/CTAButtons'
import Script from 'next/script'
import { getCanonicalUrl } from '../lib/utils'

export const metadata = {
  title: 'About Better-than-Freehold™ | Our Mission & Vision',
  description: 'Learn about Better-than-Freehold™, our mission to revolutionize property investment in Thailand, and our commitment to legal compliance and security.',
  alternates: { canonical: getCanonicalUrl('/about') },
  openGraph: {
    url: getCanonicalUrl('/about'),
    title: 'About Better-than-Freehold™',
    description: 'Our mission to revolutionize property investment in Thailand with secure, compliant solutions.',
    images: [
      { url: getCanonicalUrl('/og/about.jpg'), width: 1200, height: 630, alt: 'About BtF' },
    ],
  },
  twitter: { images: [getCanonicalUrl('/og/about.jpg')] },
}

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-btf-dark">
      <Navigation />
      <main className="flex-1">
        <Script
          id="about-webpage"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: 'About Better-than-Freehold™',
              url: getCanonicalUrl('/about'),
              description: 'Learn about Better-than-Freehold™, our mission to revolutionize property investment in Thailand, and our commitment to legal compliance and security.',
            }),
          }}
        />
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-btf-light mb-6">
              About <span className="text-btf-accent">Better-than-Freehold™</span>
            </h1>
            <p className="text-xl text-btf-light/80 mb-8 max-w-4xl mx-auto">
              At Better-than-Freehold™ (BtF), we are revolutionising property investment in Thailand by offering a secure, compliant, and innovative solution for foreign investors. Our mission is to provide a legally sound and transparent platform that empowers investors to access Thai property markets without the risks associated with traditional nominee structures.
            </p>
          </div>
        </section>

        {/* Introduction Section - White Background */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-btf-dark mb-6">
                Introduction
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <h3 className="text-2xl font-semibold text-btf-dark mb-6">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  At Better-than-Freehold™ (BtF), we are revolutionising property investment in Thailand by offering a secure, compliant, and innovative solution for foreign investors. Our mission is to provide a legally sound and transparent platform that empowers investors to access Thai property markets without the risks associated with traditional nominee structures.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <h3 className="text-2xl font-semibold text-btf-dark mb-6">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Our vision is to set a new standard for property ownership rights in Thailand, ensuring compliance with Thai law while delivering peace of mind and financial security to our clients. The BtF method was meticulously developed to address the challenges foreign investors face; combining legal expertise, financial innovation and a commitment to transparency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* History and Development Section - Dark Background */}
        <section className="py-20 bg-btf-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-btf-accent mb-4">
                History and Development
              </h2>
            </div>
            
            <div className="bg-btf-dark/30 p-8 rounded-xl border border-btf-accent/20">
              <p className="text-lg text-btf-light/80 leading-relaxed mb-6">
                The BtF platform was conceptualised and developed by Venture Management Ltd (VM), leveraging decades of experience in Thai property law, capital markets and international compliance. Recognising the increasing regulatory scrutiny under legislative frameworks such  as the Anti-Money Laundering Act ("AMLA") 2025 and the Foreign Business Act ("FBA"), we have created a proprietary structure that eliminates nominee risks while ensuring enforceable usage rights for foreign investors.
              </p>
              
              <p className="text-lg text-btf-light/80 leading-relaxed">
                Our journey began with a simple goal: to provide a better alternative to freehold ownership that aligns with Thai legal frameworks. Today, the BtF method is a trusted solution for investors, developers, and advisors seeking a future-proofed approach to property investment in Thailand.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section - White Background */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-btf-dark mb-6">
                Team
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Our team comprises seasoned professionals and legal experts dedicated to ensuring the success and compliance of every BtF transaction.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {/* 1. Venture Management Ltd (Labuan) */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <div className="bg-btf-accent/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-btf-accent text-xl">🏢</span>
                </div>
                <h3 className="text-lg font-semibold text-btf-dark mb-2 text-center">Venture Management Ltd (Labuan)</h3>
                <p className="text-gray-700 text-sm text-center">
                  Platform architect and IP owner overseeing product design, governance, and oversight.
                </p>
              </div>

              {/* 2. Siam Property Holdings (Trustee) */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <div className="bg-btf-accent/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/icons/shield.svg" alt="Trustee" className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-btf-dark mb-2 text-center">Siam Property Holdings (Trustee)</h3>
                <p className="text-gray-700 text-sm text-center">
                  Licensed trustee safeguarding beneficiary rights and supervising trust compliance.
                </p>
              </div>

              {/* 3. TIN (Thai Asset Holder) */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <div className="bg-btf-accent/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/icons/bank.svg" alt="Thai Asset Holder" className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-btf-dark mb-2 text-center">TIN (Thai Asset Holder)</h3>
                <p className="text-gray-700 text-sm text-center">
                Our commercial network partner, TIN is a Thai-incorporated asset holding entity ring-fencing Thai assets in accordance with Thai law.

                </p>
              </div>

              {/* 4. CBSA (Security Agent) */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <div className="bg-btf-accent/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/icons/search.svg" alt="Security Agent" className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-btf-dark mb-2 text-center">CBSA (Security Agent)</h3>
                <p className="text-gray-700 text-sm text-center">
                  Independent enforcement and security agent managing collateral, monitoring covenants, and investor protections.
                </p>
              </div>

              {/* 5. Tier-One Thai Law Firms (Legal Review) */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <div className="bg-btf-accent/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/icons/scales.svg" alt="Legal Review" className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-btf-dark mb-2 text-center">Tier-One Thai Law Firms (Legal Review)</h3>
                <p className="text-gray-700 text-sm text-center">
                  Independent legal review and opinions validating structure, documentation, and enforceability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section - Dark Background */}
        <section className="py-20 bg-btf-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-btf-accent mb-4">
                Why Choose Us
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 md:items-start">
              <div className="flex flex-col space-y-8">
                <div className="bg-btf-dark/30 p-8 rounded-xl border border-btf-accent/20 flex-1">
                  <h3 className="text-xl font-semibold text-btf-light mb-4">Expertise in Thai Property Law and Compliance</h3>
                  <p className="text-btf-light/80 leading-relaxed">
                    The BtF platform is engineered to comply with Thai laws, including the Land Code, Revenue Code, and AMLA 2025. Our legal and compliance framework eliminates the risks associated with nominee structures, ensuring that your investment is secure and enforceable.
                  </p>
                </div>
                
                <div className="bg-btf-dark/30 p-8 rounded-xl border border-btf-accent/20 h-[220px] flex flex-col">
                  <h3 className="text-xl font-semibold text-btf-light mb-4">Innovative and Scalable Solutions</h3>
                  <p className="text-btf-light/80 leading-relaxed flex-1">
                    The BtF method is not just a legal structure; it is a comprehensive platform designed to support developers, advisors, and investors with scalable, auditable, and future-proofed solutions.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col space-y-8">
                <div className="bg-btf-dark/30 p-8 rounded-xl border border-btf-accent/20 flex-1">
                  <h3 className="text-xl font-semibold text-btf-light mb-4">Proven Track Record</h3>
                  <p className="text-btf-light/80 leading-relaxed">
                    With a history of successful BtF implementations, we have earned the trust of investors, developers, and advisors worldwide. Our platform has been rigorously tested and validated by leading legal and financial institutions, making it the preferred choice for compliant property investment in Thailand.
                  </p>
                </div>
                
                <div className="bg-btf-dark/30 p-8 rounded-xl border border-btf-accent/20 h-[220px] flex flex-col">
                  <h3 className="text-xl font-semibold text-btf-light mb-4">Commitment to Excellence</h3>
                  <p className="text-btf-light/80 leading-relaxed flex-1">
                    We are dedicated to maintaining the highest standards of legal compliance, transparency, and client service. Our ongoing commitment to innovation ensures that the BtF platform continues to evolve with changing regulations and market needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach Section - White Background */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-btf-dark mb-6">
                Our Approach
              </h2>
            </div>
            
            <div className="bg-green-50 p-8 rounded-xl border border-green-200">
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                Our innovative BtF methodology is designed to navigate the complexities of Thai property law while prioritising compliance and ethical practises. Our team of experts is dedicated to providing ongoing support and guidance throughout your investment journey.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center">
                <div className="bg-btf-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-btf-accent text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-semibold text-btf-dark mb-2">Client-Focused</h3>
                <p className="text-gray-700 text-sm">Every solution tailored to meet your specific investment goals</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center">
                <div className="bg-btf-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-btf-accent text-2xl">🔒</span>
                </div>
                <h3 className="text-lg font-semibold text-btf-dark mb-2">Compliance First</h3>
                <p className="text-gray-700 text-sm">Unwavering commitment to Thai legal requirements</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center">
                <div className="bg-btf-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-btf-accent text-2xl">🚀</span>
                </div>
                <h3 className="text-lg font-semibold text-btf-dark mb-2">Innovation</h3>
                <p className="text-gray-700 text-sm">Cutting-edge solutions that evolve with market needs</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center">
                <div className="bg-btf-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-btf-accent text-2xl">🤝</span>
                </div>
                <h3 className="text-lg font-semibold text-btf-dark mb-2">Partnership</h3>
                <p className="text-gray-700 text-sm">Long-term relationships built on trust and results</p>
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
                Get answers to the most common questions about Better-than-Freehold™
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-btf-dark/30 p-8 rounded-xl border border-btf-accent/20">
                <h3 className="text-xl font-semibold text-btf-light mb-4">1. What is Better-than-Freehold™ (BtF)?</h3>
                <p className="text-btf-light/80 leading-relaxed">
                  Better-than-Freehold™ (BtF) is a revolutionary property investment platform in Thailand that provides foreign investors with a secure, compliant, and innovative solution. It eliminates the risks associated with traditional nominee structures while adhering to Thai legal frameworks, including the Land Code and AMLA 2025.
                </p>
              </div>

              <div className="bg-btf-dark/30 p-8 rounded-xl border border-btf-accent/20">
                <h3 className="text-xl font-semibold text-btf-light mb-4">2. What is the mission and vision of BtF?</h3>
                <p className="text-btf-light/80 leading-relaxed">
                  <strong>Mission:</strong> To empower foreign investors by offering a legally sound and transparent platform for accessing Thai property markets without the risks of nominee structures.
                </p>
                <p className="text-btf-light/80 leading-relaxed mt-4">
                  <strong>Vision:</strong> To set a new standard for property ownership rights in Thailand, ensuring compliance with Thai law while delivering peace of mind and financial security to clients.
                </p>
              </div>

              <div className="bg-btf-dark/30 p-8 rounded-xl border border-btf-accent/20">
                <h3 className="text-xl font-semibold text-btf-light mb-4">3. Who are the key entities involved in the BtF platform?</h3>
                <p className="text-btf-light/80 leading-relaxed">
                  The BtF platform is supported by:
                </p>
                <ul className="text-btf-light/80 mt-4 space-y-2">
                  <li>• <strong>Venture Management Ltd (VM):</strong> Platform architect and IP owner</li>
                  <li>• <strong>Siam Property Holdings (SPH):</strong> Licensed trustee safeguarding beneficiary rights</li>
                  <li>• <strong>Thailand Investor Network (TIN):</strong> Thai-incorporated asset holder ensuring compliance with Thai law</li>
                  <li>• <strong>Clear Blue Security Agents (CBSA):</strong> Independent enforcement and security agent</li>
                  <li>• <strong>Tier-One Thai Law Firms:</strong> Providing independent legal reviews and opinions</li>
                </ul>
              </div>

              <div className="bg-btf-dark/30 p-8 rounded-xl border border-btf-accent/20">
                <h3 className="text-xl font-semibold text-btf-light mb-4">4. Why should investors choose BtF?</h3>
                <p className="text-btf-light/80 leading-relaxed">
                  Investors should choose BtF because it:
                </p>
                <ul className="text-btf-light/80 mt-4 space-y-2">
                  <li>• Ensures compliance with Thai laws, eliminating nominee risks</li>
                  <li>• Has a proven track record of successful implementations validated by leading legal and financial institutions</li>
                  <li>• Offers innovative, scalable, and future-proofed solutions</li>
                  <li>• Maintains a commitment to excellence, transparency, and client service</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <Script
          id="about-faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'What is Better-than-Freehold™ (BtF)?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Better-than-Freehold™ (BtF) is a revolutionary property investment platform in Thailand that provides foreign investors with a secure, compliant, and innovative solution. It eliminates the risks associated with traditional nominee structures while adhering to Thai legal frameworks, including the Land Code and AMLA 2025.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'What is the mission and vision of BtF?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Mission: To empower foreign investors by offering a legally sound and transparent platform for accessing Thai property markets without the risks of nominee structures. Vision: To set a new standard for property ownership rights in Thailand, ensuring compliance with Thai law while delivering peace of mind and financial security to clients.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'Who are the key entities involved in the BtF platform?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'The BtF platform is supported by: Venture Management Ltd (VM) as platform architect and IP owner, Siam Property Holdings (SPH) as licensed trustee safeguarding beneficiary rights, Thailand Investor Network (TIN) as Thai-incorporated asset holder ensuring compliance with Thai law, Clear Blue Security Agents (CBSA) as independent enforcement and security agent, and Tier-One Thai Law Firms providing independent legal reviews and opinions.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'Why should investors choose BtF?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Investors should choose BtF because it ensures compliance with Thai laws, eliminating nominee risks; has a proven track record of successful implementations validated by leading legal and financial institutions; offers innovative, scalable, and future-proofed solutions; and maintains a commitment to excellence, transparency, and client service.'
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
              Learn More About Our Expertise
            </h2>
            <p className="text-xl text-btf-dark/80 mb-8 max-w-3xl mx-auto">
              Discover how the BtF platform can transform your approach to property investment in Thailand. Contact us today to explore our innovative solutions and ensure your investment is secure, compliant, and future-ready.
            </p>
            <CTAButtons variant="accent-bg" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 