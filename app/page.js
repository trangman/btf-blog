import Navigation from './components/Navigation'
import Footer from './components/Footer'
import AcronymTooltip from './components/AcronymTooltip'
import CTAButtons from './components/CTAButtons'
import LazyVideo from './components/LazyVideo'
import Script from 'next/script'
import { getCanonicalUrl } from './lib/utils'

export const metadata = {
  title: 'Legal, Secure, Financeable Thai Property Ownership',
  description:
    'Better-than-Freehold™ provides legal, secure, and financeable property ownership solutions in Thailand for foreign investors and developers.',
  alternates: { canonical: getCanonicalUrl('/') },
  openGraph: {
    url: getCanonicalUrl('/'),
    title: 'Better-than-Freehold™',
    description: 'Legal, secure, and financeable property ownership in Thailand.',
    images: [{ url: getCanonicalUrl('/og/default.jpg'), width: 1200, height: 630, alt: 'Better-than-Freehold' }],
  },
  twitter: { images: [getCanonicalUrl('/og/default.jpg')] },
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-btf-dark">
      <Navigation />
      <main className="flex-1">
        <Script
          id="home-video-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'VideoObject',
              name: 'Introducing Better-than-Freehold™',
              description:
                'How Better-than-Freehold™ is revolutionising property ownership in Thailand.',
              uploadDate: '2025-01-01',
              thumbnailUrl: [
                getCanonicalUrl('/og/default.jpg'),
              ],
              contentUrl:
                'https://samuirealtyth.lon1.cdn.digitaloceanspaces.com/btf/Better_than_Freehold_Transforming_Property_Investment_in_Thailand.mp4',
              embedUrl: getCanonicalUrl('/'),
              publisher: {
                '@type': 'Organization',
                name: 'Better-than-Freehold™',
                url: getCanonicalUrl('/'),
                logo: getCanonicalUrl('/btf-logo.svg'),
              },
            }),
          }}
        />
        <Script
          id="howto-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'HowTo',
              name: 'How Better-than-Freehold™ works',
              description: 'Three high-level steps to invest securely and legally in Thai property using BtF.',
              step: [
                {
                  '@type': 'HowToStep',
                  name: 'Onboarding and Due Diligence',
                  text: 'Complete KYC/AML checks and validate property titles and compliance with Thai law.',
                  position: 1,
                },
                {
                  '@type': 'HowToStep',
                  name: 'Property Acquisition',
                  text: 'Secure ownership through registered contracts and SPH trust structures.',
                  position: 2,
                },
                {
                  '@type': 'HowToStep',
                  name: 'Ongoing Management',
                  text: 'Enjoy secure tenure, rental income, and capital gains with legal protection.',
                  position: 3,
                },
              ],
            }),
          }}
        />
        <Script
          id="service-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: 'Better-than-Freehold™ Property Ownership Platform',
              serviceType: 'Legal, secure, and financeable Thai property ownership structure',
              areaServed: 'TH',
              provider: {
                '@type': 'Organization',
                name: 'Better-than-Freehold™',
                url: getCanonicalUrl('/'),
                logo: getCanonicalUrl('/btf-logo.svg'),
              },
              url: getCanonicalUrl('/'),
              description: 'Platform enabling compliant foreign investment in Thai real estate with enforceable contracts and financing options.',
            }),
          }}
        />
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-btf-light mb-6">
              Welcome to{' '}
              <span className="text-btf-accent">Better-than-Freehold™ (<AcronymTooltip acronym="BtF">BtF</AcronymTooltip>)</span>
            </h1>
            <div className="text-2xl md:text-3xl font-semibold text-btf-accent mb-8">
              Legal. Secure. Financeable. Revolutionary.
            </div>
            <p className="text-xl text-btf-light/80 mb-8 max-w-4xl mx-auto">
              Better-than-Freehold™ is a legally compliant, financeable, and risk-mitigated platform solution for foreign investment in Thai real estate. It eliminates the legal issues associated with freehold ownership, 30-year lease limitations, and illegal nominee companies while enabling offshore finance coupled with capital protection.
            </p>
            <div className="flex justify-center">
              <a href="/learn-more" className="bg-btf-accent text-btf-dark px-8 py-3 rounded-lg text-lg font-semibold hover:bg-btf-light transition-colors">
                Learn More About BtF Platform
              </a>
            </div>
          </div>
        </section>

        {/* Key Benefits - from document */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-btf-dark mb-6">Key Benefits</h2>
              
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <ul className="space-y-3 text-gray-800">
                  <li>• Legally invest in Thai property without freehold ownership</li>
                  <li>• Guaranteed rolling 30-year leases</li>
                  <li>• Fully enforceable contracts with streamlined remedies</li>
                  <li>• Registered mortgage and pledge-backed security</li>
                  <li>• Financeable at 50% Loan-to-Value{' '}(<AcronymTooltip acronym="LTV">LTV</AcronymTooltip>)</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <ul className="space-y-3 text-gray-800">
                  <li>• No Thai income or land transfer tax on resale</li>
                  <li>• Confidential offshore ownership</li>
                  <li>• Seamless succession planning</li>
                  <li>• Backed by tier-one Thai legal and tax opinions</li>
                  <li>• Legalisation of nominee companies with conversion financing</li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-10 text-gray-700">
              Developed by Venture Management Ltd (Labuan). Operated with Siam Property Holdings{' '}(<AcronymTooltip acronym="SPH">SPH</AcronymTooltip>){' '}and Thai Investor Network{' '}(<AcronymTooltip acronym="TIN">TIN</AcronymTooltip>). Enforced by Clear Blue Security Agents{' '}(<AcronymTooltip acronym="CBSA">CBSA</AcronymTooltip>).
            </div>
          </div>
        </section>

        {/* Why Choose BtF Section - Dark Background */}
        <section className="py-20 bg-btf-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-btf-accent mb-4">
                Why Choose Better-than-Freehold™?
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              <div className="bg-btf-dark/30 p-8 rounded-xl border border-btf-accent/20 flex flex-col h-full">
                <h3 className="text-2xl font-semibold text-btf-light mb-4">1. Legal and Compliant</h3>
                <p className="text-btf-light/80 text-lg leading-relaxed flex-grow">
                  <AcronymTooltip acronym="BtF">BtF</AcronymTooltip>{' '}is fully compliant with Thai laws, including the Civil and Commercial Code{' '}(<AcronymTooltip acronym="CCC">CCC</AcronymTooltip>), Foreign Business Act{' '}(<AcronymTooltip acronym="FBA">FBA</AcronymTooltip>), and Land Code. All contracts and structures are registered and auditable, ensuring complete transparency and enforceability.
                </p>
              </div>
              <div className="bg-btf-dark/30 p-8 rounded-xl border border-btf-accent/20 flex flex-col h-full">
                <h3 className="text-2xl font-semibold text-btf-light mb-4">2. Financeable and Scalable</h3>
                <p className="text-btf-light/80 text-lg leading-relaxed flex-grow">
                  <AcronymTooltip acronym="BtF">BtF</AcronymTooltip>{' '}opens the door to offshore financing and developer funding, creating liquidity and confidence in the Thai property market. Whether you're an individual investor or a corporate developer,{' '}<AcronymTooltip acronym="BtF">BtF</AcronymTooltip>{' '}is designed to scale with your needs.
                </p>
              </div>
              <div className="bg-btf-dark/30 p-8 rounded-xl border border-btf-accent/20 flex flex-col h-full">
                <h3 className="text-2xl font-semibold text-btf-light mb-4">3. Secure and Risk-Free</h3>
                <p className="text-btf-light/80 text-lg leading-relaxed flex-grow">
                  Say goodbye to the risks of nominee companies and multi-term leases.{' '}<AcronymTooltip acronym="BtF">BtF</AcronymTooltip>{' '}protects your investment with registered contracts, trust structures, and asset fallback mechanisms.
                </p>
              </div>
              <div className="bg-btf-dark/30 p-8 rounded-xl border border-btf-accent/20 flex flex-col h-full">
                <h3 className="text-2xl font-semibold text-btf-light mb-4">4. Tax-Efficient and Transparent</h3>
                <p className="text-btf-light/80 text-lg leading-relaxed flex-grow">
                  With built-in tax optimisation and compliance with{' '}<AcronymTooltip acronym="AMLA">AMLA</AcronymTooltip>{' '}2025,{' '}<AcronymTooltip acronym="BtF">BtF</AcronymTooltip>{' '}ensures your investment is both profitable and legally sound.
                </p>
              </div>
            </div>
            <div className="text-center mt-12">
              <a href="/learn-more" className="bg-btf-accent text-btf-dark px-8 py-3 rounded-lg text-lg font-semibold hover:bg-btf-light hover:text-btf-dark transition-colors">
                Learn More About BtF Benefits
              </a>
            </div>
          </div>
        </section>

        {/* Lease v Better-than-Freehold Comparison */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-btf-dark mb-4">Lease v Better-than-Freehold™</h2>
              <p className="text-xl text-gray-700">Summary comparison</p>
            </div>
            <div className="bg-gray-50 rounded-xl py-4 pl-2 pr-3 md:p-8 border border-gray-200 overflow-x-auto relative -ml-2 md:ml-0">
              <table className="w-full text-left text-xs sm:text-sm md:text-base whitespace-normal md:whitespace-nowrap table-fixed leading-snug">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-1.5 px-2 md:py-4 md:px-6 text-btf-dark font-semibold sticky top-0 bg-gray-50">Metric</th>
                    <th className="py-1.5 px-2 md:py-4 md:px-6 text-red-700 font-semibold sticky top-0 bg-gray-50"><span className="md:hidden">30Y Lease</span><span className="hidden md:inline">30-Year Lease</span></th>
                    <th className="py-1.5 px-2 md:py-4 md:px-6 text-green-700 font-semibold sticky top-0 bg-gray-50"><span className="md:hidden">BtF</span><span className="hidden md:inline">Better-than-Freehold™</span></th>
                  </tr>
                </thead>
                <tbody className="text-gray-800">
                  <tr className="border-b border-gray-100 hover:bg-gray-100/60 transition-colors">
                    <td className="py-1.5 px-2 md:py-3 md:px-6 font-medium">End Value</td>
                    <td className="py-1.5 px-2 md:py-3 md:px-6">❌ Zero</td>
                    <td className="py-1.5 px-2 md:py-3 md:px-6">✅ Resalable, appreciating</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-100/60 transition-colors">
                    <td className="py-1.5 px-2 md:py-3 md:px-6 font-medium">Finance</td>
                    <td className="py-1.5 px-2 md:py-3 md:px-6">❌ None</td>
                    <td className="py-1.5 px-2 md:py-3 md:px-6">✅ 50%{' '}<AcronymTooltip acronym="LTV">LTV</AcronymTooltip>{' '}available</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-100/60 transition-colors">
                    <td className="py-1.5 px-2 md:py-3 md:px-6 font-medium">Tax Efficiency</td>
                    <td className="py-1.5 px-2 md:py-3 md:px-6">❌ Low</td>
                    <td className="py-1.5 px-2 md:py-3 md:px-6">✅ High (Labuan Trust)</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-100/60 transition-colors">
                    <td className="py-1.5 px-2 md:py-3 md:px-6 font-medium">Legal Risk</td>
                    <td className="py-1.5 px-2 md:py-3 md:px-6">❌ High (illegal)</td>
                    <td className="py-1.5 px-2 md:py-3 md:px-6">✅ Fully compliant</td>
                  </tr>
                  <tr className="hover:bg-gray-100/60 transition-colors">
                    <td className="py-1.5 px-2 md:py-3 md:px-6 font-medium">Enforceability</td>
                    <td className="py-1.5 px-2 md:py-3 md:px-6">❌ Weak (courts)</td>
                    <td className="py-1.5 px-2 md:py-3 md:px-6">✅ Instant via{' '}<AcronymTooltip acronym="CBSA">CBSA</AcronymTooltip></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* How It Works Section - White Background */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-btf-dark mb-4">
                How It Works
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Better-than-Freehold™ is a plug-and-play property platform that simplifies the investment process while ensuring compliance and security.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <div className="bg-btf-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-btf-accent text-3xl">1</span>
                </div>
                <h3 className="text-xl font-semibold text-btf-dark mb-4 text-center">Onboarding and Due Diligence</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-btf-accent mr-2">•</span>
                    <span style={{ whiteSpace: 'pre-wrap' }}>Complete <AcronymTooltip acronym="KYC">KYC</AcronymTooltip> and <AcronymTooltip acronym="AML">AML</AcronymTooltip> checks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-btf-accent mr-2">•</span>
                    Validation of property titles and compliance with Thai law
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <div className="bg-btf-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-btf-accent text-3xl">2</span>
                </div>
                <h3 className="text-xl font-semibold text-btf-dark mb-4 text-center">Property Acquisition</h3>
                <p className="text-gray-700 text-center">
                  Secure ownership through registered contracts and{' '}<AcronymTooltip acronym="SPH">SPH</AcronymTooltip>{' '}trust structures.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <div className="bg-btf-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-btf-accent text-3xl">3</span>
                </div>
                <h3 className="text-xl font-semibold text-btf-dark mb-4 text-center">Ongoing Management</h3>
                <p className="text-gray-700 text-center">
                  Enjoy secure tenure, rental income, and capital gains with full legal protection.
                </p>
              </div>
            </div>
            <div className="text-center mt-12">
              <a href="/learn-more" className="bg-btf-accent text-btf-dark px-8 py-3 rounded-lg text-lg font-semibold hover:bg-btf-dark hover:text-btf-accent transition-colors">
                Learn More About How BtF Works
              </a>
            </div>
          </div>
        </section>

        {/* Who is BtF For Section - Dark Background */}
        <section className="py-20 bg-btf-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-btf-accent mb-4">
                Who is BtF For?
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-btf-dark/30 p-6 rounded-xl border border-btf-accent/20 flex flex-col h-full">
                <div className="bg-btf-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/icons/scales.svg" alt="Legal Scales" className="w-10 h-10" width="40" height="40" />
                </div>
                <h3 className="text-xl font-semibold text-btf-light mb-3 text-center">For Lawyers</h3>
                <p className="text-btf-light/80 text-center text-sm flex-grow">
                  Offer your clients a legal, secure, and compliant alternative to high risk illegal nominee structures.{' '}<AcronymTooltip acronym="BtF">BtF</AcronymTooltip>{' '}is backed by tier-one legal and tax opinions and peer-reviewed by{' '}<AcronymTooltip acronym="CBSA">CBSA</AcronymTooltip>{' '}member firms.
                </p>
              </div>
              <div className="bg-btf-dark/30 p-6 rounded-xl border border-btf-accent/20 flex flex-col h-full">
                <div className="bg-btf-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/icons/construction.svg" alt="Construction" className="w-10 h-10" width="40" height="40" />
                </div>
                <h3 className="text-xl font-semibold text-btf-light mb-3 text-center">For Property Developers</h3>
                <p className="text-btf-light/80 text-center text-sm flex-grow">
                  Unlock new opportunities with a scalable and financeable platform that drives sales and builds confidence among foreign buyers.
                </p>
              </div>
              <div className="bg-btf-dark/30 p-6 rounded-xl border border-btf-accent/20 flex flex-col h-full">
                <div className="bg-btf-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/icons/globe.svg" alt="Globe" className="w-10 h-10" width="40" height="40" />
                </div>
                <h3 className="text-xl font-semibold text-btf-light mb-3 text-center">For Foreign Property Owners</h3>
                <p className="text-btf-light/80 text-center text-sm flex-grow">
                  Invest in Thailand with peace of mind, knowing your property rights are secure, enforceable, and financeable.
                </p>
              </div>
              <div className="bg-btf-dark/30 p-6 rounded-xl border border-btf-accent/20 flex flex-col h-full">
                <div className="bg-btf-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/icons/search.svg" alt="Search" className="w-10 h-10" width="40" height="40" />
                </div>
                <h3 className="text-xl font-semibold text-btf-light mb-3 text-center">For Potential Buyers</h3>
                <p className="text-btf-light/80 text-center text-sm flex-grow">
                  Access the Thai property market legally and securely, with the added benefits of tax optimisation and succession planning.
                </p>
              </div>
            </div>
            <div className="text-center mt-12">
              <a href="/structure" className="bg-btf-accent text-btf-dark px-8 py-3 rounded-lg text-lg font-semibold hover:bg-btf-light hover:text-btf-dark transition-colors">
                Learn More About BtF Structure
              </a>
            </div>
          </div>
        </section>

        {/* Video Introduction Section - White Background */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-btf-dark mb-6">
                Introducing Better-than-Freehold™
              </h2>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                Watch this video to learn how Better-than-Freehold™ is revolutionising property ownership in Thailand.
              </p>
              <div className="max-w-5xl mx-auto">
                <div className="relative bg-black rounded-xl overflow-hidden shadow-2xl" data-video-container>
                  <LazyVideo 
                    src="https://samuirealtyth.lon1.cdn.digitaloceanspaces.com/btf/Better_than_Freehold_Transforming_Property_Investment_in_Thailand.mp4"
                    poster="/video-poster.svg"
                    tracks={[
                      { src: "/subtitles/Better-than-Freehold.vtt", srcLang: "en", label: "English" },
                      { src: "/subtitles/Better-than-Freehold-DE.vtt", srcLang: "de", label: "Deutsch" },
                      { src: "/subtitles/Better-than-Freehold-TH.vtt", srcLang: "th", label: "ไทย" },
                      { src: "/subtitles/Better-than-Freehold-FR.vtt", srcLang: "fr", label: "Français" }
                    ]}
                  />
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
                Get answers to the most common questions about Better-than-Freehold™
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-btf-dark/30 p-8 rounded-xl border border-btf-accent/20">
                <h3 className="text-xl font-semibold text-btf-light mb-4">1. What is Better-than-Freehold™ (BtF)?</h3>
                <p className="text-btf-light/80 leading-relaxed">
                  Better-than-Freehold™ (BtF) is a legally compliant, financeable, and risk-mitigated platform designed for foreign investment in Thai real estate. It eliminates the legal risks associated with freehold ownership, 30-year lease limitations, and illegal nominee companies. BtF also enables offshore financing, provides capital protection, and ensures secure, enforceable ownership rights.
                </p>
              </div>

              <div className="bg-btf-dark/30 p-8 rounded-xl border border-btf-accent/20">
                <h3 className="text-xl font-semibold text-btf-light mb-4">2. How does BtF ensure legal compliance and security?</h3>
                <p className="text-btf-light/80 leading-relaxed">
                  BtF is fully compliant with Thai laws, including the Civil and Commercial Code (CCC), Foreign Business Act (FBA), and Land Code. All contracts and structures are registered, auditable, and backed by tier-one Thai legal and tax opinions. Additionally, BtF protects investments through registered contracts, trust structures, and asset fallback mechanisms, ensuring complete transparency and enforceability.
                </p>
              </div>

              <div className="bg-btf-dark/30 p-8 rounded-xl border border-btf-accent/20">
                <h3 className="text-xl font-semibold text-btf-light mb-4">3. What are the financial benefits of using BtF?</h3>
                <p className="text-btf-light/80 leading-relaxed">
                  BtF offers several financial advantages, including:
                </p>
                <ul className="text-btf-light/80 mt-4 space-y-2">
                  <li>• Offshore financing with up to 50% Loan-to-Value (LTV)</li>
                  <li>• No Thai income or land transfer tax on resale</li>
                  <li>• Tax optimisation through compliance with AMLA 2025</li>
                  <li>• Guaranteed rolling 30-year leases, ensuring long-term financial security</li>
                </ul>
              </div>

              <div className="bg-btf-dark/30 p-8 rounded-xl border border-btf-accent/20">
                <h3 className="text-xl font-semibold text-btf-light mb-4">4. Who can benefit from Better-than-Freehold™?</h3>
                <p className="text-btf-light/80 leading-relaxed">
                  BtF is designed for a wide range of stakeholders:
                </p>
                <ul className="text-btf-light/80 mt-4 space-y-2">
                  <li>• <strong>Lawyers:</strong> Provide clients with a secure, legal alternative to risky nominee structures</li>
                  <li>• <strong>Property Developers:</strong> Access a scalable, financeable platform to drive sales and build buyer confidence</li>
                  <li>• <strong>Foreign Property Owners:</strong> Invest securely with enforceable rights, tax optimisation, and succession planning</li>
                  <li>• <strong>Potential Buyers:</strong> Enter the Thai property market legally and confidently, with the added benefits of capital protection and offshore ownership</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <Script
          id="homepage-faq-schema"
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
                    text: 'Better-than-Freehold™ (BtF) is a legally compliant, financeable, and risk-mitigated platform designed for foreign investment in Thai real estate. It eliminates the legal risks associated with freehold ownership, 30-year lease limitations, and illegal nominee companies. BtF also enables offshore financing, provides capital protection, and ensures secure, enforceable ownership rights.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'How does BtF ensure legal compliance and security?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'BtF is fully compliant with Thai laws, including the Civil and Commercial Code (CCC), Foreign Business Act (FBA), and Land Code. All contracts and structures are registered, auditable, and backed by tier-one Thai legal and tax opinions. Additionally, BtF protects investments through registered contracts, trust structures, and asset fallback mechanisms, ensuring complete transparency and enforceability.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'What are the financial benefits of using BtF?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'BtF offers several financial advantages, including: Offshore financing with up to 50% Loan-to-Value (LTV), no Thai income or land transfer tax on resale, tax optimisation through compliance with AMLA 2025, and guaranteed rolling 30-year leases, ensuring long-term financial security.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'Who can benefit from Better-than-Freehold™?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'BtF is designed for a wide range of stakeholders: Lawyers can provide clients with a secure, legal alternative to risky nominee structures; Property Developers can access a scalable, financeable platform to drive sales and build buyer confidence; Foreign Property Owners can invest securely with enforceable rights, tax optimisation, and succession planning; Potential Buyers can enter the Thai property market legally and confidently, with the added benefits of capital protection and offshore ownership.'
                  }
                }
              ]
            }),
          }}
        />

        

        {/* Final Call to Action */}
        <section className="py-20 bg-btf-accent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-btf-dark mb-4">Foreign property ownership is under attack.</h2>
                          <div className="mb-8">
                <div className="max-w-3xl mx-auto px-4">
                  <div style={{fontSize: '1.25rem'}} className="text-btf-dark/80 leading-relaxed text-center mb-4 block">
                    Thai regulators are enforcing AMLA 2025. Nominee companies will not survive.
                  </div>
                  <div style={{fontSize: '1.25rem'}} className="text-btf-dark/80 leading-relaxed text-center block">
                    Better-than-Freehold™ is the only secure, compliant, financeable solution. Act now: secure your investment, avoid prosecution, and access finance today.
                  </div>
                </div>
              </div>
            <CTAButtons variant="accent-bg" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}