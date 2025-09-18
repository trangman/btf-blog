import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import CTAButtons from '../components/CTAButtons'
import Script from 'next/script'
import { getCanonicalUrl } from '../lib/utils'

export const metadata = {
  title: 'Legal Professionals | Better-than-Freehold™ Compliance',
  description: 'Learn how Better-than-Freehold™ provides legally compliant solutions for Thai property investment, protecting both lawyers and clients from nominee structure risks.',
  alternates: { canonical: getCanonicalUrl('/legal-professionals') },
  openGraph: {
    url: getCanonicalUrl('/legal-professionals'),
    title: 'Legal Professionals | BtF Compliance',
    description: 'Legally compliant solutions for Thai property investment.',
    images: [
      { url: getCanonicalUrl('/og/legal-professionals.jpg'), width: 1200, height: 630, alt: 'BtF for Legal Professionals' },
    ],
  },
  twitter: { images: [getCanonicalUrl('/og/legal-professionals.jpg')] },
}

export default function LegalProfessionals() {
  return (
    <div className="min-h-screen flex flex-col bg-btf-dark">
      <Navigation />
      <main className="flex-1">
        <Script
          id="legal-professionals-webpage"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: 'Better-than-Freehold™ for Legal Professionals',
              url: getCanonicalUrl('/legal-professionals'),
              description: 'Learn how Better-than-Freehold™ provides legally compliant solutions for Thai property investment, protecting both lawyers and clients from nominee structure risks.',
            }),
          }}
        />
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-btf-light mb-6">
              Compliance with Thai Law: <span className="text-btf-accent">Risks for Lawyers and Clients</span>
            </h1>
            <p className="text-xl text-btf-light/80 mb-8 max-w-4xl mx-auto">
              As a lawyer, your role in guiding clients through the complexities of Thai property law is critical. The Better-than-Freehold™ (BtF) method offers a fully compliant, innovative solution for foreign property ownership in Thailand.
            </p>
          </div>
        </section>

        {/* BtF Method for Lawyers Section - White Background */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-btf-dark mb-6">
                The BtF Method: A Legally Sound Alternative
              </h2>
            </div>
            <div className="bg-green-50 p-8 rounded-xl border border-green-200">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                By adopting the BtF model, you can protect both your clients and yourself from the severe legal risks associated with nominee structures. This method ensures compliance with AMLA 2025 and other Thai regulations, safeguarding your professional reputation and your clients' investments.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg border border-green-300">
                  <h3 className="font-semibold text-green-800 mb-3">✅ Protect Your Clients</h3>
                  <p className="text-gray-700">Provide a legally compliant solution that ensures their investments are secure and enforceable under Thai law.</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-green-300">
                  <h3 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                <img src="/icons/shield.svg" alt="Shield" className="w-5 h-5" />
                Protect Yourself
              </h3>
                  <p className="text-gray-700">Avoid personal liability and professional risks by steering clear of illegal nominee arrangements.</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-green-300">
                  <h3 className="font-semibold text-green-800 mb-3">🏆 Enhance Reputation</h3>
                  <p className="text-gray-700">Position yourself as a trusted advisor who prioritises compliance and innovative solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Ramifications for Lawyers Section - Dark Background */}
        <section className="py-20 bg-btf-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-btf-accent mb-4">
                Legal Ramifications for Lawyers
              </h2>
              <p className="text-xl text-btf-light/80 max-w-4xl mx-auto">
                Under AMLA 2025 and related laws, lawyers who assist, facilitate, or fail to report illegal nominee arrangements face personal liability. The Thai government has implemented strict enforcement mechanisms to hold legal professionals accountable for their role in non-compliant practises.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-red-900/20 p-8 rounded-xl border border-red-500/30">
                <div className="bg-red-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <img src="/icons/scales.svg" alt="Legal Scales" className="w-8 h-8" style={{filter: 'sepia(1) saturate(2) hue-rotate(320deg) brightness(0.8)'}} />
                </div>
                <h3 className="text-xl font-semibold text-red-400 mb-4 text-center">1. Criminal Prosecution</h3>
                <div className="space-y-3 text-btf-light/80">
                  <p>
                    Lawyers who establish or assist in nominee structures can be prosecuted under Thai law. This includes drafting agreements, setting up companies, or providing advice that enables illegal arrangements.
                  </p>
                  <p className="text-red-400 font-semibold">
                    Penalties include imprisonment of up to 10 years and fines of up to 10 million baht, the same as those faced by clients.
                  </p>
                </div>
              </div>

              <div className="bg-red-900/20 p-8 rounded-xl border border-red-500/30">
                <div className="bg-red-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-red-400 text-3xl">📜</span>
                </div>
                <h3 className="text-xl font-semibold text-red-400 mb-4 text-center">2. Licence Revocation</h3>
                <div className="space-y-3 text-btf-light/80">
                  <p>
                    Legal professionals found complicit in nominee arrangements risk losing their licence to practise law. This can permanently damage their career and professional standing.
                  </p>
                </div>
              </div>

              <div className="bg-red-900/20 p-8 rounded-xl border border-red-500/30">
                <div className="bg-red-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <img src="/icons/money.svg" alt="Money" className="w-8 h-8" style={{filter: 'sepia(1) saturate(2) hue-rotate(320deg) brightness(0.8)'}} />
                </div>
                <h3 className="text-xl font-semibold text-red-400 mb-4 text-center">3. Personal Liability for Fines</h3>
                <div className="space-y-3 text-btf-light/80">
                  <p>
                    Lawyers may be held personally liable for fines imposed on their clients if they are found to have facilitated or failed to report illegal structures. This creates a significant financial risk for legal professionals.
                  </p>
                </div>
              </div>

              <div className="bg-red-900/20 p-8 rounded-xl border border-red-500/30">
                <div className="bg-red-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-red-400 text-3xl">💔</span>
                </div>
                <h3 className="text-xl font-semibold text-red-400 mb-4 text-center">4. Reputational Damage</h3>
                <div className="space-y-3 text-btf-light/80">
                  <p>
                    Being implicated in nominee-related offenses can severely harm a lawyer's reputation, both domestically and internationally. This can lead to loss of clients, partnerships, and future opportunities.
                  </p>
                </div>
              </div>

              <div className="bg-yellow-900/20 p-8 rounded-xl border border-yellow-500/30 lg:col-span-2">
                <div className="bg-yellow-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-yellow-400 text-3xl">🕵️</span>
                </div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-4 text-center">5. Whistleblower Risks</h3>
                <div className="space-y-3 text-btf-light/80">
                  <p className="text-center">
                    The AMLA 2025 incentivizes whistleblowers by offering <strong className="text-yellow-400">10% of seized assets</strong> to informants. This increases the likelihood of detection and prosecution, even for lawyers who believe their involvement is discreet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Risks Section - White Background */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-btf-dark mb-6">
                Legal Ramifications for Clients
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Your clients also face severe consequences for engaging in nominee arrangements:
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-red-50 p-6 rounded-xl border border-red-200 text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/icons/scales.svg" alt="Legal Scales" className="w-6 h-6" style={{filter: 'sepia(1) saturate(2) hue-rotate(320deg) brightness(0.8)'}} />
                </div>
                <h3 className="text-lg font-semibold text-red-800 mb-2">Imprisonment</h3>
                <p className="text-red-700 text-sm">Up to 10 years for violating Thai property laws</p>
              </div>
              
              <div className="bg-red-50 p-6 rounded-xl border border-red-200 text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/icons/money.svg" alt="Money" className="w-6 h-6" style={{filter: 'sepia(1) saturate(2) hue-rotate(320deg) brightness(0.8)'}} />
                </div>
                <h3 className="text-lg font-semibold text-red-800 mb-2">Fines</h3>
                <p className="text-red-700 text-sm">Up to 10 million baht for non-compliance</p>
              </div>
              
              <div className="bg-red-50 p-6 rounded-xl border border-red-200 text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-red-600 text-2xl">🏠</span>
                </div>
                <h3 className="text-lg font-semibold text-red-800 mb-2">Asset Seizure</h3>
                <p className="text-red-700 text-sm">Immediate freezing or confiscation of assets without a court order</p>
              </div>
              
              <div className="bg-red-50 p-6 rounded-xl border border-red-200 text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-red-600 text-2xl">🚫</span>
                </div>
                <h3 className="text-lg font-semibold text-red-800 mb-2">Blacklisting</h3>
                <p className="text-red-700 text-sm">Restrictions on future business and residency in Thailand</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Lawyers Must Prioritize Compliance Section - Dark Background */}
        <section className="py-20 bg-btf-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-btf-accent mb-4">
                Why Lawyers Must Prioritize Compliance
              </h2>
            </div>
            
            <div className="bg-btf-dark/30 p-8 rounded-xl border border-btf-accent/20">
              <p className="text-lg text-btf-light/80 leading-relaxed mb-8">
                The Thai government's zero-tolerance policy towards nominee structures places lawyers under intense scrutiny. Gatekeeper liability under AMLA 2025 creates personal exposure for failure to identify, investigate, and inform. Failing to act exposes you to the same penalties as your clients, including imprisonment, fines, and professional sanctions.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-green-500/10 p-6 rounded-xl border border-green-500/30">
                  <h3 className="text-xl font-semibold text-green-400 mb-4 text-center">Protect Yourself</h3>
                  <p className="text-btf-light/80 text-center">
                    Avoid personal liability and professional risks by steering clear of illegal nominee arrangements.
                  </p>
                </div>
                
                <div className="bg-green-500/10 p-6 rounded-xl border border-green-500/30">
                  <h3 className="text-xl font-semibold text-green-400 mb-4 text-center">Safeguard Your Clients</h3>
                  <p className="text-btf-light/80 text-center">
                    Provide a legally compliant solution that ensures their investments are secure and enforceable under Thai law.
                  </p>
                </div>
                
                <div className="bg-green-500/10 p-6 rounded-xl border border-green-500/30">
                  <h3 className="text-xl font-semibold text-green-400 mb-4 text-center">Enhance Your Reputation</h3>
                  <p className="text-btf-light/80 text-center">
                    Position yourself as a trusted advisor who prioritises compliance and innovative solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BtF Method Solution Section - White Background */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-btf-dark mb-6">
                The BtF Method: A Risk-Free Solution
              </h2>
            </div>
            
            <div className="bg-green-50 p-8 rounded-xl border border-green-200">
              <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
                The BtF model eliminates the need for nominee structures by offering a transparent, legally compliant ownership framework. It aligns with Thai regulations, including the AMLA 2025, and provides a secure alternative for foreign investors. By adopting the BtF method, you can confidently guide your clients while protecting your own professional integrity.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl border border-green-300">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">✅ For You as a Lawyer</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3">•</span>
                      No personal liability risks
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3">•</span>
                      Protected professional reputation
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3">•</span>
                      Compliance with all Thai laws
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3">•</span>
                      Enhanced client trust
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl border border-green-300">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">✅ For Your Clients</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3">•</span>
                      Legally secure property ownership
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3">•</span>
                      No risk of asset seizure
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3">•</span>
                      Enforceable investment rights
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3">•</span>
                      Long-term investment security
                    </li>
                  </ul>
                </div>
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
                Get answers to the most common questions about compliance with Thai law for lawyers
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-btf-dark/30 p-8 rounded-xl border border-btf-accent/20">
                <h3 className="text-xl font-semibold text-btf-light mb-4">1. What are the risks for lawyers involved in nominee arrangements?</h3>
                <p className="text-btf-light/80 leading-relaxed">
                  Lawyers who assist or fail to report illegal nominee arrangements face severe consequences under AMLA 2025, including:
                </p>
                <ul className="text-btf-light/80 mt-4 space-y-2">
                  <li>• <strong>Criminal Prosecution:</strong> Up to 10 years of imprisonment and fines of up to 10 million baht</li>
                  <li>• <strong>License Revocation:</strong> Permanent loss of the right to practice law</li>
                  <li>• <strong>Personal Liability for Fines:</strong> Lawyers may be held financially responsible for fines imposed on their clients</li>
                  <li>• <strong>Reputational Damage:</strong> Involvement in nominee-related offenses can harm a lawyer's professional standing, leading to loss of clients and partnerships</li>
                  <li>• <strong>Whistleblower Risks:</strong> AMLA 2025 incentivises whistleblowers with 10% of seized assets, increasing the likelihood of detection and prosecution</li>
                </ul>
              </div>

              <div className="bg-btf-dark/30 p-8 rounded-xl border border-btf-accent/20">
                <h3 className="text-xl font-semibold text-btf-light mb-4">2. How does the BtF method protect lawyers from legal and professional risks?</h3>
                <p className="text-btf-light/80 leading-relaxed">
                  The BtF method offers a fully compliant, transparent alternative to nominee structures, ensuring lawyers:
                </p>
                <ul className="text-btf-light/80 mt-4 space-y-2">
                  <li>• Avoid personal liability and criminal prosecution</li>
                  <li>• Maintain their professional reputation by adhering to Thai laws</li>
                  <li>• Provide clients with a secure, enforceable, and legally sound property ownership solution</li>
                  <li>• Position themselves as trusted advisors who prioritise compliance and innovative solutions</li>
                </ul>
              </div>

              <div className="bg-btf-dark/30 p-8 rounded-xl border border-btf-accent/20">
                <h3 className="text-xl font-semibold text-btf-light mb-4">3. What are the legal ramifications for clients engaging in nominee arrangements?</h3>
                <p className="text-btf-light/80 leading-relaxed">
                  Clients involved in nominee structures face significant penalties, including:
                </p>
                <ul className="text-btf-light/80 mt-4 space-y-2">
                  <li>• <strong>Imprisonment:</strong> Up to 10 years for violating Thai property laws</li>
                  <li>• <strong>Fines:</strong> Up to 10 million baht for non-compliance</li>
                  <li>• <strong>Asset Seizure:</strong> Immediate freezing or confiscation of assets without a court order</li>
                  <li>• <strong>Blacklisting:</strong> Restrictions on future business and residency in Thailand</li>
                </ul>
              </div>

              <div className="bg-btf-dark/30 p-8 rounded-xl border border-btf-accent/20">
                <h3 className="text-xl font-semibold text-btf-light mb-4">4. Why is the BtF method the ideal solution for lawyers and their clients?</h3>
                <p className="text-btf-light/80 leading-relaxed">
                  The BtF method eliminates the risks associated with nominee structures by providing a legally compliant framework that aligns with Thai regulations, including AMLA 2025. Benefits include:
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-4">
                  <div>
                    <h4 className="text-btf-accent font-semibold mb-2">For Lawyers:</h4>
                    <ul className="text-btf-light/80 space-y-1">
                      <li>• No personal liability risks</li>
                      <li>• Protection of professional reputation</li>
                      <li>• Compliance with all Thai laws</li>
                      <li>• Enhanced client trust</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-btf-accent font-semibold mb-2">For Clients:</h4>
                    <ul className="text-btf-light/80 space-y-1">
                      <li>• Legally secure property ownership</li>
                      <li>• No risk of asset seizure</li>
                      <li>• Enforceable investment rights</li>
                      <li>• Long-term investment security</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Script
          id="legal-professionals-faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'What are the risks for lawyers involved in nominee arrangements?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Lawyers who assist or fail to report illegal nominee arrangements face severe consequences under AMLA 2025, including: Criminal Prosecution of up to 10 years of imprisonment and fines of up to 10 million baht; License Revocation with permanent loss of the right to practice law; Personal Liability for Fines where lawyers may be held financially responsible for fines imposed on their clients; Reputational Damage where involvement in nominee-related offenses can harm a lawyer\'s professional standing, leading to loss of clients and partnerships; Whistleblower Risks where AMLA 2025 incentivises whistleblowers with 10% of seized assets, increasing the likelihood of detection and prosecution.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'How does the BtF method protect lawyers from legal and professional risks?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'The BtF method offers a fully compliant, transparent alternative to nominee structures, ensuring lawyers: Avoid personal liability and criminal prosecution; Maintain their professional reputation by adhering to Thai laws; Provide clients with a secure, enforceable, and legally sound property ownership solution; Position themselves as trusted advisors who prioritise compliance and innovative solutions.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'What are the legal ramifications for clients engaging in nominee arrangements?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Clients involved in nominee structures face significant penalties, including: Imprisonment of up to 10 years for violating Thai property laws; Fines of up to 10 million baht for non-compliance; Asset Seizure with immediate freezing or confiscation of assets without a court order; Blacklisting with restrictions on future business and residency in Thailand.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'Why is the BtF method the ideal solution for lawyers and their clients?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'The BtF method eliminates the risks associated with nominee structures by providing a legally compliant framework that aligns with Thai regulations, including AMLA 2025. For Lawyers: No personal liability risks, protection of professional reputation, compliance with all Thai laws, and enhanced client trust. For Clients: Legally secure property ownership, no risk of asset seizure, enforceable investment rights, and long-term investment security.'
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
              Are you ready to provide your clients with a legally compliant and future-proofed solution for Thai property investment?
            </h2>
            <p className="text-xl text-btf-dark/80 mb-8 max-w-4xl mx-auto">
              The Better-than-Freehold™ (BtF) structure is the answer.
            </p>
            <CTAButtons variant="accent-bg" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 