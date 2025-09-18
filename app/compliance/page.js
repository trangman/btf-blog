import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import CTAButtons from '../components/CTAButtons'
import Script from 'next/script'
import { getCanonicalUrl } from '../lib/utils'

export const metadata = {
  title: 'Compliance | Better-than-Freehold™',
  description: 'How Better-than-Freehold™ ensures compliance with Thai law and AMLA 2025.',
  alternates: { canonical: getCanonicalUrl('/compliance') },
  robots: { index: true, follow: true },
  openGraph: {
    url: getCanonicalUrl('/compliance'),
    title: 'Compliance | Better-than-Freehold™',
    description: 'How Better-than-Freehold™ ensures compliance with Thai law and AMLA 2025.',
    images: [{ url: getCanonicalUrl('/og/default.jpg'), width: 1200, height: 630, alt: 'Better-than-Freehold' }],
  },
  twitter: { images: [getCanonicalUrl('/og/default.jpg')] },
}

export default function Compliance() {
  return (
    <div className="min-h-screen flex flex-col bg-btf-dark">
      <Navigation />
      <main className="flex-1">
        <Script
          id="compliance-breadcrumbs"
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
                  name: 'Compliance',
                  item: getCanonicalUrl('/compliance'),
                },
              ],
            }),
          }}
        />
        <Script
          id="compliance-webpage"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: 'Compliance with Thai Law',
              url: getCanonicalUrl('/compliance'),
              description: 'How Better-than-Freehold™ ensures compliance with Thai law and AMLA 2025.',
            }),
          }}
        />
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-btf-light mb-6">
              Compliance with Thai Law:<span className="text-btf-accent"> The BtF Method and Legal Ramifications of Non-Compliance</span>
            </h1>
            <p className="text-xl text-btf-light/80 mb-8 max-w-4xl mx-auto">
              Understanding the critical importance of legal compliance in Thai property investment and the severe consequences of non-compliance.
            </p>
          </div>
        </section>

        {/* BtF Method Section - White Background */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-btf-dark mb-6">
                The BtF Method: A Fully Compliant Solution
              </h2>
            </div>
            <div className="bg-green-50 p-8 rounded-xl border border-green-200">
              <p className="text-lg text-gray-700 leading-relaxed">
                The Better-than-Freehold™ (BtF) method is a revolutionary, legally compliant structure for foreign property ownership in Thailand. It ensures that all rights, —such as leases, options, pledges, and mortgages, —are registered and enforceable under Thai law. The BtF model avoids the risks associated with nominee structures by separating economic benefits from legal title through an offshore trust. This structure is fully compliant with the Anti-Money Laundering Act (AMLA) 2025 and other Thai regulations, ensuring transparency and legal security for foreign investors.
              </p>
            </div>
          </div>
        </section>

        {/* Legal Framework & Instruments */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-btf-dark mb-4">BtF Legal Framework & Compliance</h2>
              <p className="text-gray-700 text-lg">Aligned with Thai law and built on registered, enforceable instruments.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <h3 className="text-2xl font-semibold text-btf-dark mb-4">Frameworks</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Thai Civil and Commercial Code (CCC)</li>
                  <li>• Land Code</li>
                  <li>• Foreign Business Act (FBA)</li>
                  <li>• Anti-Money Laundering Act (AMLA 2025)</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <h3 className="text-2xl font-semibold text-btf-dark mb-4">Key Legal Instruments</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 30-year lease (registered)</li>
                  <li>• Option to sell/re-lease (separate, secured)</li>
                  <li>• Registered mortgage and share pledges</li>
                  <li>• CBSA step-in rights for streamlined enforcement</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Ramifications Section - Dark Background */}
        <section className="py-20 bg-btf-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-btf-accent mb-4">
                Legal Ramifications of Non-Compliance
              </h2>
              <p className="text-xl text-btf-light/80 max-w-4xl mx-auto">
                Non-compliance with Thai property laws, particularly through the use of nominee structures, carries severe legal and financial consequences. The Thai government has implemented aggressive enforcement mechanisms under the AMLA 2025 to eliminate nominee arrangements and ensure compliance with global transparency standards.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-red-900/20 p-8 rounded-xl border border-red-500/30">
                <div className="bg-red-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-red-400 text-3xl">⚖️</span>
                </div>
                <h3 className="text-xl font-semibold text-red-400 mb-4 text-center">1. Criminal Penalties</h3>
                <div className="space-y-3 text-btf-light/80">
                  <p className="flex items-start">
                    <span className="text-red-400 mr-3 font-bold">•</span>
                    <span><strong>Imprisonment:</strong> Offenders face up to 10 years of imprisonment for engaging in nominee arrangements or other illegal ownership structures.</span>
                  </p>
                  <p className="flex items-start">
                    <span className="text-red-400 mr-3 font-bold">•</span>
                    <span><strong>Fines:</strong> Violators can be fined up to 10 million baht, a significant financial penalty that underscores the seriousness of these offenses.</span>
                  </p>
                </div>
              </div>

              <div className="bg-red-900/20 p-8 rounded-xl border border-red-500/30">
                <div className="bg-red-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-red-400 text-3xl">🏠</span>
                </div>
                <h3 className="text-xl font-semibold text-red-400 mb-4 text-center">2. Asset Seizure</h3>
                <div className="space-y-3 text-btf-light/80">
                  <p className="flex items-start">
                    <span className="text-red-400 mr-3 font-bold">•</span>
                    <span><strong>Immediate Freezing of Assets:</strong> Assets held through nominee structures can be frozen or confiscated without a court order. This administrative-level action ensures swift enforcement.</span>
                  </p>
                  <p className="flex items-start">
                    <span className="text-red-400 mr-3 font-bold">•</span>
                    <span><strong>Forfeiture of Property:</strong> Foreign investors risk losing their investments entirely if found in violation of Thai property laws.</span>
                  </p>
                </div>
              </div>

              <div className="bg-red-900/20 p-8 rounded-xl border border-red-500/30">
                <div className="bg-red-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-red-400 text-3xl">🏢</span>
                </div>
                <h3 className="text-xl font-semibold text-red-400 mb-4 text-center">3. Company Dissolution</h3>
                <div className="space-y-3 text-btf-light/80">
                  <p>
                    Companies found to be using nominee shareholders or engaging in illegal practises can be dissolved, resulting in the loss of business operations and assets.
                  </p>
                </div>
              </div>

              <div className="bg-red-900/20 p-8 rounded-xl border border-red-500/30">
                <div className="bg-red-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-red-400 text-3xl">🚫</span>
                </div>
                <h3 className="text-xl font-semibold text-red-400 mb-4 text-center">4. Blacklisting and Visa Restrictions</h3>
                <div className="space-y-3 text-btf-light/80">
                  <p>
                    Foreign investors involved in illegal arrangements may face blacklisting, which can restrict their ability to conduct business or reside in Thailand in the future.
                  </p>
                </div>
              </div>

              <div className="bg-red-900/20 p-8 rounded-xl border border-red-500/30">
                <div className="bg-red-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-red-400 text-3xl">👨‍💼</span>
                </div>
                <h3 className="text-xl font-semibold text-red-400 mb-4 text-center">5. Gatekeeper Liability</h3>
                <div className="space-y-3 text-btf-light/80">
                  <p>
                    <strong>Lawyers, Accountants, and Agents:</strong> Professionals who assist or fail to report nominee arrangements face personal liability, including criminal prosecution, licence revocation, and fines. This creates a strong deterrent for facilitating illegal structures.
                  </p>
                </div>
              </div>

              <div className="bg-red-900/20 p-8 rounded-xl border border-red-500/30">
                <div className="bg-red-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <img src="/icons/scales.svg" alt="Legal Scales" className="w-8 h-8" style={{filter: 'sepia(1) saturate(2) hue-rotate(320deg) brightness(0.8)'}} />
                </div>
                <h3 className="text-xl font-semibold text-red-400 mb-4 text-center">6. Reversal of Burden of Proof</h3>
                <div className="space-y-3 text-btf-light/80">
                  <p>
                    Foreign investors must prove that their ownership structures are not nominee arrangements. This reversal of the burden of proof places significant pressure on investors to ensure full compliance with Thai law.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-yellow-900/20 p-8 rounded-xl border border-yellow-500/30">
              <div className="text-center">
                <div className="bg-yellow-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-yellow-400 text-3xl">🕵️</span>
                </div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-4">7. Whistleblower Incentives</h3>
                <p className="text-btf-light/80 text-lg">
                  Informants who report nominee arrangements are entitled to <strong className="text-yellow-400">10% of the seized assets</strong>, further increasing the risk of detection and prosecution for non-compliant investors.
                </p>
              </div>
            </div>
            {/* AMLA 2025 Additional Enforcement & Triggers */}
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div className="bg-yellow-900/20 p-8 rounded-xl border border-yellow-500/30">
                <div className="bg-yellow-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-yellow-400 text-3xl">📑</span>
                </div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-4 text-center">Additional Enforcement</h3>
                <ul className="space-y-2 text-btf-light/80">
                  <li>• Reversal of burden of proof</li>
                  <li>• Whistleblower incentives (10% of seized assets)</li>
                  <li>• AI-led inter-agency surveillance</li>
                  <li>• Professional gatekeeper liability (lawyers, agents, CPAs)</li>
                </ul>
              </div>
              <div className="bg-yellow-900/20 p-8 rounded-xl border border-yellow-500/30">
                <div className="bg-yellow-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-yellow-400 text-3xl">🔍</span>
                </div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-4 text-center">Triggers for Nominee Classification</h3>
                <ul className="space-y-2 text-btf-light/80">
                  <li>• Foreign-controlled voting rights</li>
                  <li>• Unequal Thai shareholder benefit</li>
                  <li>• Thai capital funded by foreigners</li>
                  <li>• Supermajority or minority foreign control</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Compliance Matters Section - White Background */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-btf-dark mb-6">
                Why Compliance Matters
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-red-50 p-8 rounded-xl border border-red-200 mb-8 flex flex-col h-full">
                <h3 className="text-2xl font-semibold text-red-800 mb-4">⚠️ Government Zero Tolerance Policy</h3>
                <p className="text-red-700 leading-relaxed flex-grow">
                  The Thai government's zero tolerance policy towards nominee structures reflects its commitment to transparency and adherence to international standards. Non-compliance not only jeopardises your investment but also exposes you to severe legal and financial risks.
                </p>
              </div>
              
              <div className="bg-green-50 p-8 rounded-xl border border-green-200 mb-8 flex flex-col h-full">
                <h3 className="text-2xl font-semibold text-green-800 mb-4">✅ BtF Solution</h3>
                <p className="text-green-700 leading-relaxed flex-grow">
                  By adopting the BtF method, you can ensure full compliance with Thai law while enjoying the benefits of secure and lawful property ownership. For foreign investors, property developers, and legal professionals, the BtF model offers a robust, innovative, and legally sound alternative to outdated and risky nominee arrangements.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="bg-btf-dark/5 p-8 rounded-xl border border-btf-dark/20">
                <h3 className="text-2xl font-semibold text-btf-dark mb-4">The Only Path Forward</h3>
                <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
                  BtF is the only pathway forward in a regulatory environment that prioritises transparency, accountability, and enforcement. The BtF structure offers a secure, compliant, and future-proofed solution for foreign investors.
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
                Get answers to the most common questions about compliance with Thai law
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-btf-dark/30 p-8 rounded-xl border border-btf-accent/20">
                <h3 className="text-xl font-semibold text-btf-light mb-4">1. What makes the BtF method fully compliant with Thai law?</h3>
                <p className="text-btf-light/80 leading-relaxed">
                  The BtF method is designed to align with key Thai legal frameworks, including the Civil and Commercial Code (CCC), Land Code, Foreign Business Act (FBA), and the Anti-Money Laundering Act (AMLA 2025). It ensures that all rights—such as leases, options, pledges, and mortgages—are registered and enforceable under Thai law. By separating economic benefits from legal title through an offshore trust, the BtF model avoids the risks associated with nominee structures and ensures full transparency and legal security.
                </p>
              </div>

              <div className="bg-btf-dark/30 p-8 rounded-xl border border-btf-accent/20">
                <h3 className="text-xl font-semibold text-btf-light mb-4">2. What are the legal consequences of non-compliance with Thai property laws?</h3>
                <p className="text-btf-light/80 leading-relaxed">
                  Non-compliance, particularly through nominee structures, carries severe penalties under Thai law, including:
                </p>
                <ul className="text-btf-light/80 mt-4 space-y-2">
                  <li>• <strong>Criminal Penalties:</strong> Up to 10 years of imprisonment and fines of up to 10 million baht</li>
                  <li>• <strong>Asset Seizure:</strong> Immediate freezing or confiscation of assets without a court order</li>
                  <li>• <strong>Company Dissolution:</strong> Companies using nominee arrangements may be dissolved, resulting in loss of assets and operations</li>
                  <li>• <strong>Blacklisting and Visa Restrictions:</strong> Foreign investors may face restrictions on business and residency in Thailand</li>
                  <li>• <strong>Gatekeeper Liability:</strong> Lawyers, accountants, and agents involved in illegal arrangements face personal liability, including criminal prosecution and license revocation</li>
                </ul>
              </div>

              <div className="bg-btf-dark/30 p-8 rounded-xl border border-btf-accent/20">
                <h3 className="text-xl font-semibold text-btf-light mb-4">3. How does the BtF method protect foreign investors from nominee risks?</h3>
                <p className="text-btf-light/80 leading-relaxed">
                  The BtF method eliminates nominee risks by:
                </p>
                <ul className="text-btf-light/80 mt-4 space-y-2">
                  <li>• Using a fully compliant structure that separates legal title from economic benefits</li>
                  <li>• Registering all rights (lease, option, mortgage, and pledge) with Thai authorities</li>
                  <li>• Employing third-party enforcement mechanisms, such as CBSA step-in rights, to ensure compliance and asset protection</li>
                  <li>• Avoiding informal or illegal arrangements that could trigger penalties under AMLA 2025</li>
                </ul>
              </div>

              <div className="bg-btf-dark/30 p-8 rounded-xl border border-btf-accent/20">
                <h3 className="text-xl font-semibold text-btf-light mb-4">4. Why is compliance with Thai property laws critical for foreign investors?</h3>
                <p className="text-btf-light/80 leading-relaxed">
                  Compliance is essential because the Thai government enforces a zero-tolerance policy towards nominee structures, reflecting its commitment to transparency and international standards. Non-compliance exposes investors to:
                </p>
                <ul className="text-btf-light/80 mt-4 space-y-2">
                  <li>• Severe legal and financial risks, including imprisonment, fines, and asset forfeiture</li>
                  <li>• Increased scrutiny due to AI-led surveillance, whistleblower incentives (10% of seized assets), and the reversal of the burden of proof</li>
                </ul>
                <p className="text-btf-light/80 leading-relaxed mt-4">
                  By adopting the BtF method, investors can ensure full compliance while enjoying secure and lawful property ownership.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Script
          id="compliance-faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'What makes the BtF method fully compliant with Thai law?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'The BtF method is designed to align with key Thai legal frameworks, including the Civil and Commercial Code (CCC), Land Code, Foreign Business Act (FBA), and the Anti-Money Laundering Act (AMLA 2025). It ensures that all rights—such as leases, options, pledges, and mortgages—are registered and enforceable under Thai law. By separating economic benefits from legal title through an offshore trust, the BtF model avoids the risks associated with nominee structures and ensures full transparency and legal security.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'What are the legal consequences of non-compliance with Thai property laws?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Non-compliance, particularly through nominee structures, carries severe penalties under Thai law, including: Criminal Penalties of up to 10 years of imprisonment and fines of up to 10 million baht; Asset Seizure with immediate freezing or confiscation of assets without a court order; Company Dissolution where companies using nominee arrangements may be dissolved, resulting in loss of assets and operations; Blacklisting and Visa Restrictions where foreign investors may face restrictions on business and residency in Thailand; Gatekeeper Liability where lawyers, accountants, and agents involved in illegal arrangements face personal liability, including criminal prosecution and license revocation.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'How does the BtF method protect foreign investors from nominee risks?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'The BtF method eliminates nominee risks by: Using a fully compliant structure that separates legal title from economic benefits; Registering all rights (lease, option, mortgage, and pledge) with Thai authorities; Employing third-party enforcement mechanisms, such as CBSA step-in rights, to ensure compliance and asset protection; Avoiding informal or illegal arrangements that could trigger penalties under AMLA 2025.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'Why is compliance with Thai property laws critical for foreign investors?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Compliance is essential because the Thai government enforces a zero-tolerance policy towards nominee structures, reflecting its commitment to transparency and international standards. Non-compliance exposes investors to severe legal and financial risks, including imprisonment, fines, and asset forfeiture; and increased scrutiny due to AI-led surveillance, whistleblower incentives (10% of seized assets), and the reversal of the burden of proof. By adopting the BtF method, investors can ensure full compliance while enjoying secure and lawful property ownership.'
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
              Ready to invest in Thai property with confidence?
            </h2>
            <p className="text-xl text-btf-dark/80 mb-8 max-w-4xl mx-auto">
              The Better-than-Freehold™ (BtF) structure offers a secure, compliant, and future-proofed solution for foreign investors.
            </p>
            <CTAButtons variant="accent-bg" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 