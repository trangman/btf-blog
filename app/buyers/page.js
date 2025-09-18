import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import CTAButtons from '../components/CTAButtons'
import Script from 'next/script'
import { getCanonicalUrl } from '../lib/utils'
export const metadata = {
  title: 'Property Buyers | Better-than-Freehold™',
  description:
    'Secure, legal, and financeable Thai property ownership for foreign buyers using the Better-than-Freehold™ structure.',
  alternates: { canonical: getCanonicalUrl('/buyers') },
  openGraph: {
    url: getCanonicalUrl('/buyers'),
    title: 'Property Buyers | Better-than-Freehold™',
    description: 'Secure, legal, and financeable Thai property ownership.',
    images: [
      { url: '/og/buyers.jpg', width: 1200, height: 630, alt: 'BtF for Property Buyers' },
    ],
  },
  twitter: { images: ['/og/buyers.jpg'] },
}

export default function Buyers() {
  return (
    <div className="min-h-screen flex flex-col bg-btf-dark">
      <Navigation />
      <main className="flex-1">
        <Script
          id="buyers-breadcrumbs"
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
                  name: 'Buyers',
                  item: getCanonicalUrl('/buyers'),
                },
              ],
            }),
          }}
        />
        <Script
          id="buyers-webpage"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: 'Better-than-Freehold™ for Property Buyers',
              url: getCanonicalUrl('/buyers'),
              description: 'Secure, legal, and financeable Thai property ownership for foreign buyers using the Better-than-Freehold™ structure.',
            }),
          }}
        />
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-btf-light mb-6">
              <span className="text-btf-accent">Better-than-Freehold™</span> for Property Buyers
            </h1>
            <p className="text-xl text-btf-light/80 mb-8 max-w-4xl mx-auto">
              Are you looking to purchase property in Thailand? Better-than-Freehold™ offers the most secure, legal, and advantageous way for foreign buyers to acquire property rights in Thailand. Experience true ownership with unmatched legal protection and financial benefits.
            </p>
          </div>
        </section>

        {/* Why Choose BtF Section - White Background */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-btf-dark mb-6">
                Why BtF is the Smart Choice for Property Buyers
              </h2>
              <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto">
                Traditional property acquisition methods in Thailand expose foreign buyers to significant legal and financial risks. BtF eliminates these risks while providing superior ownership rights and benefits.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 flex flex-col h-full">
                <h3 className="text-2xl font-semibold text-btf-dark mb-4">Legal Security</h3>
                <p className="text-gray-700 leading-relaxed flex-grow">
                  Unlike risky nominee structures or limited lease arrangements, BtF provides genuine, legally protected ownership rights that comply fully with Thai law and cannot be easily challenged or revoked.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 flex flex-col h-full">
                <h3 className="text-2xl font-semibold text-btf-dark mb-4">Financial Advantages</h3>
                <p className="text-gray-700 leading-relaxed flex-grow">
                  Offshore financing up to 50% LTV. Use funds for higher quality property, improvements, emergencies, lifestyle, or resale leverage.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 flex flex-col h-full">
                <h3 className="text-2xl font-semibold text-btf-dark mb-4">Lifetime Tenure</h3>
                <p className="text-gray-700 leading-relaxed flex-grow">
                  Enjoy secure property rights for life through registered long-term leases with automatic renewal options, giving you the confidence of permanent ownership without the uncertainties of traditional methods.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 flex flex-col h-full">
                <h3 className="text-2xl font-semibold text-btf-dark mb-4">Peace of Mind</h3>
                <p className="text-gray-700 leading-relaxed flex-grow">
                  Purchase with confidence. Registered lease, secured rolling option and mortgage enforced by CBSA under Thai law—no need for a Thai nominee or company.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Buyer Benefits Section - Dark Background */}
        <section className="py-20 bg-btf-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-btf-accent mb-4">
                Exclusive Benefits for BtF Buyers
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-btf-dark/30 p-6 rounded-xl border border-btf-accent/20">
                <div className="bg-btf-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <img src="/icons/shield.svg" alt="Shield" className="w-8 h-8" width="32" height="32" />
                </div>
                <h3 className="text-xl font-semibold text-btf-light mb-4 text-center">1. Full Legal Protection</h3>
                <p className="text-btf-light/80 text-center">
                  Complete legal security with registered contracts, trust structures, and third-party enforcement mechanisms protecting your investment.
                </p>
              </div>

              <div className="bg-btf-dark/30 p-6 rounded-xl border border-btf-accent/20">
                <div className="bg-btf-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <img src="/icons/money.svg" alt="Money" className="w-8 h-8" width="32" height="32" />
                </div>
                <h3 className="text-xl font-semibold text-btf-light mb-4 text-center">2. Income & Capital Rights</h3>
                <p className="text-btf-light/80 text-center">
                  Full rights to rental income, capital appreciation, and the ability to sell or transfer your property rights to others.
                </p>
              </div>

              <div className="bg-btf-dark/30 p-6 rounded-xl border border-btf-accent/20">
                <div className="bg-btf-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <img src="/icons/bank.svg" alt="Bank" className="w-8 h-8" width="32" height="32" />
                </div>
                <h3 className="text-xl font-semibold text-btf-light mb-4 text-center">3. Financing Options</h3>
                <p className="text-btf-light/80 text-center">
                Offshore financing up to 50% LTV via regulated credit fund (all offers subject to approval).
                </p>
              </div>

              <div className="bg-btf-dark/30 p-6 rounded-xl border border-btf-accent/20">
                <div className="bg-btf-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <img src="/icons/chart.svg" alt="Chart" className="w-8 h-8" width="32" height="32" />
                </div>
                <h3 className="text-xl font-semibold text-btf-light mb-4 text-center">4. Tax Benefits</h3>
                <p className="text-btf-light/80 text-center">
                  Ownership and gains sit offshore in a Labuan trust (SPH). No Thai tax if gains not remitted; no Thai land transfer or income tax on sale.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Succession and Exit Section - White Background */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-btf-dark mb-6">Succession and Exit</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">Plan for the future and exit with ease.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <h3 className="text-2xl font-semibold text-btf-dark mb-4">Seamless Succession</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Trust structure allows beneficiary designation</li>
                  <li>• Assign, sell, or gift via offshore agreements</li>
                  <li>• Your inheritance gifts are protected by confidentiality</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <h3 className="text-2xl font-semibold text-btf-dark mb-4">Resale and Exit</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Resale via reassignment of trust interest or SPH instruction</li>
                  <li>• No land office procedures needed</li>
                  <li>• 24-hour settlement via CBSA enforcement</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Buying Process Section - White Background */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-btf-dark mb-6">
                Your BtF Property Buying Journey
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                From initial consultation to property ownership, we guide you through every step of the process.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 text-center">
                <div className="bg-btf-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-btf-accent text-3xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold text-btf-dark mb-4">Consultation & Planning</h3>
                <div className="flex justify-center">
                  <ul className="text-gray-700 text-left space-y-2">
                    <li>• Initial needs assessment</li>
                    <li>• Budget and financing review</li>
                    <li>• BtF structure explanation</li>
                    <li>• Property search criteria</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 text-center">
                <div className="bg-btf-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-btf-accent text-3xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold text-btf-dark mb-4">Property Selection & Due Diligence</h3>
                <div className="flex justify-center">
                  <ul className="text-gray-700 text-left space-y-2">
                    <li>• Property identification</li>
                    <li>• Legal title verification</li>
                    <li>• Market valuation</li>
                    <li>• Risk assessment</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 text-center">
                <div className="bg-btf-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-btf-accent text-3xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold text-btf-dark mb-4">Acquisition & Setup</h3>
                <div className="flex justify-center">
                  <ul className="text-gray-700 text-left space-y-2">
                    <li>• BtF structure creation</li>
                    <li>• Legal documentation</li>
                    <li>• Property transfer</li>
                    <li>• Ongoing support setup</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Property Types Section - Dark Background */}
        <section className="py-20 bg-btf-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-btf-accent mb-4">
                Property Types Available Through BtF
              </h2>
              <p className="text-xl text-btf-light/80 max-w-3xl mx-auto">
                BtF structures can be applied to various property types across Thailand.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-btf-dark/30 p-8 rounded-xl border border-btf-accent/20">
                <h3 className="text-xl font-semibold text-btf-light mb-4">Residential Properties</h3>
                <ul className="space-y-2 text-btf-light/80">
                  <li>• Luxury villas and houses</li>
                  <li>• Condominiums and apartments</li>
                  <li>• Townhouses and duplexes</li>
                  <li>• Beachfront properties</li>
                </ul>
              </div>

              <div className="bg-btf-dark/30 p-8 rounded-xl border border-btf-accent/20">
                <h3 className="text-xl font-semibold text-btf-light mb-4">Commercial Properties</h3>
                <ul className="space-y-2 text-btf-light/80">
                  <li>• Office buildings</li>
                  <li>• Retail spaces</li>
                  <li>• Hotels and resorts</li>
                  <li>• Industrial facilities</li>
                </ul>
              </div>

              <div className="bg-btf-dark/30 p-8 rounded-xl border border-btf-accent/20">
                <h3 className="text-xl font-semibold text-btf-light mb-4">Investment Properties</h3>
                <ul className="space-y-2 text-btf-light/80">
                  <li>• Rental income properties</li>
                  <li>• Development land</li>
                  <li>• Mixed-use developments</li>
                  <li>• Portfolio acquisitions</li>
                </ul>
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
                Get answers to the most common questions about BtF for property buyers
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <h3 className="text-xl font-semibold text-btf-dark mb-4">1. How does BtF ensure legal security for property buyers in Thailand?</h3>
                <p className="text-gray-700 leading-relaxed">
                  BtF provides genuine, legally protected ownership rights that fully comply with Thai law. Unlike risky nominee structures or limited lease arrangements, BtF ensures secure property rights through registered long-term leases, rolling options, and mortgage enforcement by CBSA. These measures eliminate the risks of revocation or legal challenges.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <h3 className="text-xl font-semibold text-btf-dark mb-4">2. What financial advantages does BtF offer to property buyers?</h3>
                <p className="text-gray-700 leading-relaxed">
                  BtF offers significant financial benefits, including:
                </p>
                <ul className="text-gray-700 mt-4 space-y-2">
                  <li>• <strong>Offshore Financing:</strong> Up to 50% Loan-to-Value (LTV) through regulated credit funds</li>
                  <li>• <strong>Tax Efficiency:</strong> Ownership and gains are held offshore in a Labuan trust (SPH), avoiding Thai taxes if gains are not remitted</li>
                  <li>• <strong>Flexibility:</strong> Funds can be used for property upgrades, emergencies, or lifestyle needs</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <h3 className="text-xl font-semibold text-btf-dark mb-4">3. Can BtF buyers transfer or sell their property rights?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes, BtF buyers enjoy full rights to transfer, sell, or assign their property rights. Resale is seamless via reassignment of trust interest or SPH instruction, requiring no land office procedures. Settlement can be completed within 24 hours through CBSA enforcement, ensuring a smooth exit process.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <h3 className="text-xl font-semibold text-btf-dark mb-4">4. What property types are available through BtF?</h3>
                <p className="text-gray-700 leading-relaxed">
                  BtF structures can be applied to a wide range of property types, including:
                </p>
                <ul className="text-gray-700 mt-4 space-y-2">
                  <li>• <strong>Residential Properties:</strong> Luxury villas, condominiums, townhouses, and beachfront properties</li>
                  <li>• <strong>Commercial Properties:</strong> Office buildings, retail spaces, hotels, and industrial facilities</li>
                  <li>• <strong>Investment Properties:</strong> Rental income properties, development land, and mixed-use developments</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <Script
          id="buyers-faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'How does BtF ensure legal security for property buyers in Thailand?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'BtF provides genuine, legally protected ownership rights that fully comply with Thai law. Unlike risky nominee structures or limited lease arrangements, BtF ensures secure property rights through registered long-term leases, rolling options, and mortgage enforcement by CBSA. These measures eliminate the risks of revocation or legal challenges.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'What financial advantages does BtF offer to property buyers?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'BtF offers significant financial benefits, including: Offshore Financing with up to 50% Loan-to-Value (LTV) through regulated credit funds; Tax Efficiency where ownership and gains are held offshore in a Labuan trust (SPH), avoiding Thai taxes if gains are not remitted; Flexibility where funds can be used for property upgrades, emergencies, or lifestyle needs.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'Can BtF buyers transfer or sell their property rights?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, BtF buyers enjoy full rights to transfer, sell, or assign their property rights. Resale is seamless via reassignment of trust interest or SPH instruction, requiring no land office procedures. Settlement can be completed within 24 hours through CBSA enforcement, ensuring a smooth exit process.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'What property types are available through BtF?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'BtF structures can be applied to a wide range of property types, including: Residential Properties such as luxury villas, condominiums, townhouses, and beachfront properties; Commercial Properties such as office buildings, retail spaces, hotels, and industrial facilities; Investment Properties such as rental income properties, development land, and mixed-use developments.'
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
              Ready to Start Your Property Search?
            </h2>
            <p className="text-xl text-btf-dark/80 mb-8 max-w-3xl mx-auto">
              Let us help you find and secure your perfect property in Thailand with the safety and advantages of Better-than-Freehold™.
            </p>
            <CTAButtons variant="accent-bg" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 