import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import CTAButtons from '../components/CTAButtons'
import Script from 'next/script'
import { getCanonicalUrl } from '../lib/utils'

export const metadata = {
  title: 'BtF Structure Overview | Better-than-Freehold™ Platform',
  description: 'Learn about the Better-than-Freehold™ structure, a proprietary platform providing secure, legal, and enforceable Thai property investment for foreign investors.',
  alternates: { canonical: getCanonicalUrl('/structure') },
  openGraph: {
    url: getCanonicalUrl('/structure'),
    title: 'BtF Structure Overview',
    description: 'Proprietary platform for secure, legal Thai property investment.',
    images: [
      { url: getCanonicalUrl('/og/structure.jpg'), width: 1200, height: 630, alt: 'BtF Structure' },
    ],
  },
  twitter: { images: [getCanonicalUrl('/og/structure.jpg')] },
}

export default function Structure() {
  return (
    <div className="min-h-screen flex flex-col bg-btf-dark">
      <Navigation />
      <main className="flex-1">
        <Script
          id="structure-webpage"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: 'Better-than-Freehold™ Structure Overview',
              url: getCanonicalUrl('/structure'),
              description: 'Learn about the Better-than-Freehold™ structure, a proprietary platform providing secure, legal, and enforceable Thai property investment for foreign investors.',
            }),
          }}
        />
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-btf-light mb-6">
              <span className="text-btf-accent">Better-than-Freehold™ (BtF)</span> Structure Overview
            </h1>
            <p className="text-xl text-btf-light/80 mb-8 max-w-4xl mx-auto">
              The Better-than-Freehold™ (BtF) structure is a proprietary platform developed by Venture Management Ltd (VM) to provide foreign investors with a secure, legal, and enforceable method of investing in Thai property. It is designed to comply with Thai laws, avoid nominee company risks, and ensure transparency and enforceability.
            </p>
          </div>
        </section>

        {/* Key Features Section - White Background */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-btf-dark mb-6">
                Key Features of the BtF Structure
              </h2>
            </div>
            <div className="space-y-12">
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <h3 className="text-2xl font-semibold text-btf-dark mb-4">Legal Separation of Ownership, Control, and Benefit</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  The BtF structure separates the legal title, beneficial interest, and control of the property. This ensures compliance with Thai laws, particularly the Land Code and the Foreign Business Act (FBA), which restrict foreign ownership and control of Thai land.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <h3 className="text-2xl font-semibold text-btf-dark mb-4">Registered Contracts</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  All rights (e.g., lease, option, pledge, mortgage) are registered and enforceable under Thai law. This eliminates informal or "trust me" arrangements, ensuring transparency and legal certainty.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <h3 className="text-2xl font-semibold text-btf-dark mb-4">Multi-Entity Structure</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6 text-center">
                  The BtF structure uses a multi-entity framework (commercial network partnerships) to ensure compliance and enforceability:
                </p>
                <div className="flex flex-wrap justify-center items-stretch gap-4 max-w-6xl mx-auto">
                  <div className="bg-white p-4 rounded-lg border border-gray-300 w-full sm:w-[180px] text-center flex flex-col h-[140px]">
                    <h4 className="font-semibold text-btf-dark mb-3">TIN</h4>
                    <p className="text-sm text-gray-600 flex-1">(Thai Asset Owner): Holds the legal title to the property under Thai law and is fully Thai-owned.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-300 w-full sm:w-[180px] text-center flex flex-col h-[140px]">
                    <h4 className="font-semibold text-btf-dark mb-3">SPH</h4>
                    <p className="text-sm text-gray-600 flex-1">(Trust Company): Holds lease, option, mortgage, and pledge rights.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-300 w-full sm:w-[180px] text-center flex flex-col h-[140px]">
                    <h4 className="font-semibold text-btf-dark mb-3">SVC</h4>
                    <p className="text-sm text-gray-600 flex-1">(Mutual Fund Operator): Provides lending secured by trust assets.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-300 w-full sm:w-[180px] text-center flex flex-col h-[140px]">
                    <h4 className="font-semibold text-btf-dark mb-3">CBSA</h4>
                    <p className="text-sm text-gray-600 flex-1">(Security Agent): Registers and enforces contracts, ensuring compliance.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-300 w-full sm:w-[180px] text-center flex flex-col h-[140px]">
                    <h4 className="font-semibold text-btf-dark mb-3">UBO</h4>
                    <p className="text-sm text-gray-600 flex-1">(Investor): Holds the beneficial interest in the SPH trust.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <h3 className="text-2xl font-semibold text-btf-dark mb-4">Compliance with Thai and International Laws</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  The BtF structure is fully compliant with Thai laws, including the Anti-Money Laundering Act (AMLA) 2025, and avoids nominee company risks. Offshore entities involved in the structure are regulated by the Labuan Financial Services Authority (LFSA), adding credibility and oversight.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <h3 className="text-2xl font-semibold text-btf-dark mb-4">Third-Party Enforcement</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  The Clear Blue Security Agent (CBSA) acts as an independent agent to monitor, register, and enforce contracts. This ensures that assets are protected, disputes are resolved, and investors are not exposed to nominee risks or court vulnerabilities.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <h3 className="text-2xl font-semibold text-btf-dark mb-4">Tax Efficiency</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Offshore gains are only taxable if remitted to Thailand, and beneficial interest (BI) sales occur offshore, avoiding Thai transfer taxes, stamp duty, or withholding tax. This ensures tax efficiency while remaining compliant with the Revenue Code.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Advantages Section - Dark Background */}
        <section className="py-20 bg-btf-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-btf-accent mb-4">
                Advantages of the BtF Structure
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-8">
                <div className="bg-btf-dark/30 p-8 rounded-xl border border-btf-accent/20 flex flex-col h-[240px]">
                  <h3 className="text-xl font-semibold text-btf-light mb-4">Eliminates Nominee Risks</h3>
                  <p className="text-btf-light/80 leading-relaxed flex-1">
                    The BtF structure avoids the use of nominee companies, which are illegal under Thai law and subject to severe penalties under the AMLA 2025. Instead, it uses registered contracts and regulated trust structures to provide legal certainty.
                  </p>
                </div>
                
                <div className="bg-btf-dark/30 p-8 rounded-xl border border-btf-accent/20 flex flex-col h-[240px]">
                  <h3 className="text-xl font-semibold text-btf-light mb-4">Enforceability</h3>
                  <p className="text-btf-light/80 leading-relaxed flex-1">
                    The use of third-party enforcement (CBSA) ensures that contracts are executed and disputes are resolved without relying on Thai courts, providing additional security for investors.
                  </p>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="bg-btf-dark/30 p-8 rounded-xl border border-btf-accent/20 flex flex-col h-[240px]">
                  <h3 className="text-xl font-semibold text-btf-light mb-4">Transparency and Audits</h3>
                  <p className="text-btf-light/80 leading-relaxed flex-1">
                    All contracts are registered and auditable, ensuring transparency and compliance with regulatory requirements. Regular audits and legal reviews are conducted to maintain the structure's robustness and future-proofing.
                  </p>
                </div>
                
                <div className="bg-btf-dark/30 p-8 rounded-xl border border-btf-accent/20 flex flex-col h-[240px]">
                  <h3 className="text-xl font-semibold text-btf-light mb-4">Scalability</h3>
                  <p className="text-btf-light/80 leading-relaxed flex-1">
                    The BtF platform is designed to support developers, advisors, and funds with a scalable and auditable investment framework, making it suitable for institutional-grade investments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose BtF Section - White Background */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-btf-dark mb-6">
                Why Choose BtF Over Traditional Methods?
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-red-50 p-8 rounded-xl border border-red-200">
                <h3 className="text-2xl font-semibold text-red-800 mb-4">❌ Traditional Nominee Structures</h3>
                <ul className="space-y-3 text-red-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">•</span>
                    High-risk and non-compliant
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">•</span>
                    Expose investors to asset seizure
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">•</span>
                    Subject to legal penalties
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">•</span>
                    Illegal under Thai law
                  </li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-8 rounded-xl border border-green-200">
                <h3 className="text-2xl font-semibold text-green-800 mb-4">✅ BtF Structure</h3>
                <ul className="space-y-3 text-green-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">•</span>
                    Secure and compliant solution
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">•</span>
                    Financeable ownership rights
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">•</span>
                    Peace of mind and long-term security
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">•</span>
                    Fully compliant with Thai law
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-12">
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                The BtF structure offers a secure, compliant, and financeable solution for foreign investment in Thai property, ensuring peace of mind and long-term security.
              </p>
            </div>
          </div>
        </section>

        {/* Implementation: Step-by-Step */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-btf-dark mb-6">Implementation: Step-by-Step</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                A clear pathway from first contact to fully registered, enforceable rights under Thai law.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 flex flex-col h-[280px]">
                <div className="bg-btf-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-btf-accent text-3xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold text-btf-dark mb-4 text-center">Contact BtF Agent or Lawyer</h3>
                <p className="text-gray-700 text-center flex-1">Discuss goals, eligibility and timelines.</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 flex flex-col h-[280px]">
                <div className="bg-btf-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-btf-accent text-3xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold text-btf-dark mb-4 text-center">Identify Property & Finance Eligibility</h3>
                <p className="text-gray-700 text-center flex-1">Screen assets and 50% LTV options.</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 flex flex-col h-[280px]">
                <div className="bg-btf-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-btf-accent text-3xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold text-btf-dark mb-4 text-center">Due Diligence & Valuation</h3>
                <p className="text-gray-700 text-center flex-1">Title verification, legal checks and valuation.</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 flex flex-col h-[280px]">
                <div className="bg-btf-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-btf-accent text-3xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-semibold text-btf-dark mb-4 text-center">SPH Trust Formation & AML</h3>
                <p className="text-gray-700 text-center flex-1">KYC/AML and documentation with SPH.</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 flex flex-col h-[280px]">
                <div className="bg-btf-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-btf-accent text-3xl font-bold">5</span>
                </div>
                <h3 className="text-xl font-semibold text-btf-dark mb-4 text-center">Trust Setup: Death & Disability Planning</h3>
                <p className="text-gray-700 text-center flex-1">Beneficiaries, instructions and protections.</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 flex flex-col h-[280px]">
                <div className="bg-btf-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-btf-accent text-3xl font-bold">6</span>
                </div>
                <h3 className="text-xl font-semibold text-btf-dark mb-4 text-center">Lease & Option Drafted and Secured</h3>
                <p className="text-gray-700 text-center flex-1">Registered lease, secured rolling option, mortgage and pledges.</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 flex flex-col h-[280px]">
                <div className="bg-btf-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-btf-accent text-3xl font-bold">7</span>
                </div>
                <h3 className="text-xl font-semibold text-btf-dark mb-4 text-center">Registration</h3>
                <p className="text-gray-700 text-center flex-1">Filed with the Land Office and DBD.</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 flex flex-col h-[280px]">
                <div className="bg-btf-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-btf-accent text-3xl font-bold">8</span>
                </div>
                <h3 className="text-xl font-semibold text-btf-dark mb-4 text-center">CBSA Enforcement</h3>
                <p className="text-gray-700 text-center flex-1">Step-in rights and investor protection ongoing.</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 flex flex-col h-[280px]">
                <div className="bg-btf-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-btf-accent text-3xl font-bold">9</span>
                </div>
                <h3 className="text-xl font-semibold text-btf-dark mb-4 text-center">Enjoy your Rights</h3>
                <p className="text-gray-700 text-center flex-1">Occupy, rent out, pass on or sell your property.</p>
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
                Get answers to the most common questions about the BtF structure
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-btf-dark/30 p-8 rounded-xl border border-btf-accent/20">
                <h3 className="text-xl font-semibold text-btf-light mb-4">1. What is the Better-than-Freehold™ (BtF) structure?</h3>
                <p className="text-btf-light/80 leading-relaxed">
                  The Better-than-Freehold™ (BtF) structure is a proprietary platform developed by Venture Management Ltd (VM) to provide foreign investors with a secure, legal, and enforceable method of investing in Thai property. It ensures compliance with Thai laws, avoids nominee company risks, and guarantees transparency and enforceability.
                </p>
              </div>

              <div className="bg-btf-dark/30 p-8 rounded-xl border border-btf-accent/20">
                <h3 className="text-xl font-semibold text-btf-light mb-4">2. How does the BtF structure ensure compliance with Thai laws?</h3>
                <p className="text-btf-light/80 leading-relaxed">
                  The BtF structure separates ownership, control, and benefit through a multi-entity framework, ensuring compliance with Thai laws such as the Land Code and the Foreign Business Act (FBA). All rights, including lease, option, pledge, and mortgage, are registered and enforceable under Thai law, eliminating informal or illegal arrangements.
                </p>
              </div>

              <div className="bg-btf-dark/30 p-8 rounded-xl border border-btf-accent/20">
                <h3 className="text-xl font-semibold text-btf-light mb-4">3. What are the key advantages of the BtF structure over traditional nominee structures?</h3>
                <ul className="text-btf-light/80 mt-4 space-y-2">
                  <li>• <strong>Eliminates nominee risks:</strong> Fully compliant with Thai law, avoiding penalties under AMLA 2025</li>
                  <li>• <strong>Transparency:</strong> All contracts are registered and auditable, with regular legal reviews</li>
                  <li>• <strong>Enforceability:</strong> Third-party enforcement by Clear Blue Security Agent (CBSA) ensures asset protection and dispute resolution without relying on Thai courts</li>
                  <li>• <strong>Tax efficiency:</strong> Offshore gains are only taxable if remitted to Thailand, avoiding Thai transfer taxes and other liabilities</li>
                </ul>
              </div>

              <div className="bg-btf-dark/30 p-8 rounded-xl border border-btf-accent/20">
                <h3 className="text-xl font-semibold text-btf-light mb-4">4. Who are the key entities involved in the BtF structure, and what are their roles?</h3>
                <ul className="text-btf-light/80 mt-4 space-y-2">
                  <li>• <strong>TIN (Thai Asset Owner):</strong> Holds the legal title to the property under Thai law</li>
                  <li>• <strong>SPH (Trust Company):</strong> Holds lease, option, mortgage, and pledge rights</li>
                  <li>• <strong>SVC (Mutual Fund Operator):</strong> Provides lending secured by trust assets</li>
                  <li>• <strong>CBSA (Security Agent):</strong> Monitors, registers, and enforces contracts to ensure compliance</li>
                  <li>• <strong>UBO (Investor):</strong> Holds the beneficial interest in the SPH trust</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <Script
          id="structure-faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'What is the Better-than-Freehold™ (BtF) structure?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'The Better-than-Freehold™ (BtF) structure is a proprietary platform developed by Venture Management Ltd (VM) to provide foreign investors with a secure, legal, and enforceable method of investing in Thai property. It ensures compliance with Thai laws, avoids nominee company risks, and guarantees transparency and enforceability.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'How does the BtF structure ensure compliance with Thai laws?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'The BtF structure separates ownership, control, and benefit through a multi-entity framework, ensuring compliance with Thai laws such as the Land Code and the Foreign Business Act (FBA). All rights, including lease, option, pledge, and mortgage, are registered and enforceable under Thai law, eliminating informal or illegal arrangements.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'What are the key advantages of the BtF structure over traditional nominee structures?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'The key advantages include: Eliminates nominee risks by being fully compliant with Thai law and avoiding penalties under AMLA 2025; Provides transparency with all contracts registered and auditable, with regular legal reviews; Ensures enforceability through third-party enforcement by Clear Blue Security Agent (CBSA) for asset protection and dispute resolution without relying on Thai courts; Offers tax efficiency with offshore gains only taxable if remitted to Thailand, avoiding Thai transfer taxes and other liabilities.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'Who are the key entities involved in the BtF structure, and what are their roles?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'The key entities are: TIN (Thai Asset Owner) holds the legal title to the property under Thai law; SPH (Trust Company) holds lease, option, mortgage, and pledge rights; SVC (Mutual Fund Operator) provides lending secured by trust assets; CBSA (Security Agent) monitors, registers, and enforces contracts to ensure compliance; UBO (Investor) holds the beneficial interest in the SPH trust.'
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
              Ready to revolutionise your property investment journey?
            </h2>
            <p className="text-xl text-btf-dark/80 mb-8 max-w-3xl mx-auto">
              Have questions? Contact us today to discover how Better-than-Freehold™ can work for you.
            </p>
            <CTAButtons variant="accent-bg" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 