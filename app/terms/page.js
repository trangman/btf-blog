import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Script from 'next/script'
import { getCanonicalUrl } from '../lib/utils'

export const metadata = {
  title: 'Terms of Service | Better-than-Freehold™',
  description: 'Terms governing the use of the Better-than-Freehold™ website and services.',
  alternates: { canonical: getCanonicalUrl('/terms') },
  robots: { index: true, follow: true },
  openGraph: {
    url: getCanonicalUrl('/terms'),
    title: 'Terms of Service | Better-than-Freehold™',
    description: 'Terms governing the use of the Better-than-Freehold™ website and services.',
    images: [{ url: getCanonicalUrl('/og/default.jpg'), width: 1200, height: 630, alt: 'Better-than-Freehold' }],
  },
  twitter: { images: [getCanonicalUrl('/og/default.jpg')] },
}

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col bg-btf-dark">
      <Navigation />
      <main className="flex-1">
        <Script
          id="terms-breadcrumbs"
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
                  name: 'Terms of Service',
                  item: getCanonicalUrl('/terms'),
                },
              ],
            }),
          }}
        />
        <Script
          id="terms-webpage"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: 'Terms of Service',
              url: getCanonicalUrl('/terms'),
              description: 'Terms governing the use of the Better-than-Freehold™ website and services.',
            }),
          }}
        />
        {/* Hero Section */}
        <section className="pt-20 pb-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-btf-light mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-btf-light/80 mb-8 max-w-3xl mx-auto">
              Last updated: August 2025. Please read these terms carefully before using our services.
            </p>
          </div>
        </section>

        {/* Terms Content */}
        <section className="pb-8 bg-btf-dark/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg prose-invert">
              <div className="space-y-12">
                <div>
                  <div className="bg-btf-dark/30 p-6 rounded-xl text-btf-light/80">
                    <p className="mb-4">
                      Welcome to Better than Freehold by Venture Management Ltd., (the creator and owner of the Better than Freehold (BtF) intellectual property ("IP")), ("we", "us", or "our"). These Terms of Use ("Terms") govern your use of our website, https://betterthanfreehold.com (the "Site"), and any related services, tools, or features offered through the Site, including property acquisition listings, financing tools, application portals, and educational content (collectively, the "Services").
                    </p>
                    <p>
                      By accessing or using the Site, you agree to be bound by these Terms. If you do not agree, please do not use the Site or Services.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-btf-accent mb-4">1. Eligibility</h2>
                  <div className="bg-btf-dark/30 p-6 rounded-xl text-btf-light/80">
                    <p>
                      You must be at least 18 years old and capable of entering into a legally binding agreement to use the Site or Services. By using the Site, you represent and warrant that you meet these eligibility requirements.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-btf-accent mb-4">2. Use of Services</h2>
                  <div className="bg-btf-dark/30 p-6 rounded-xl text-btf-light/80">
                    <p className="mb-4">You agree to use the Site and Services only for lawful purposes and in accordance with these Terms. You shall not:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Use the Site to distribute spam, malware, or other harmful content</li>
                      <li>Interfere with the functionality of the Site or its security features</li>
                      <li>Misrepresent your identity or affiliation</li>
                      <li>Access or attempt to access any area of the Site that you are not authorized to access</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-btf-accent mb-4">3. Property Listings and Financial Tools</h2>
                  <div className="bg-btf-dark/30 p-6 rounded-xl text-btf-light/80">
                    <p className="mb-4">
                      Our Site provides third-party provided information that may include property listings and access to financing tools (e.g., mortgage calculators, pre-qualification forms) as well as access to other third-party professional service providers. These are for informational purposes only and do not constitute financial advice or an offer to purchase, sell, or finance property.
                    </p>
                    <p>
                      We do not guarantee the accuracy, completeness, or availability of listings or financial estimates. Users are responsible for verifying any information before making financial or real estate decisions.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-btf-accent mb-4">4. No Financial or Legal Advice</h2>
                  <div className="bg-btf-dark/30 p-6 rounded-xl text-btf-light/80">
                    <p>
                      The information on this Site is for general informational purposes only and does not constitute legal, financial, or investment advice. You should consult with appropriate professionals before making any decisions involving property acquisition or financing.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-btf-accent mb-4">5. User Accounts</h2>
                  <div className="bg-btf-dark/30 p-6 rounded-xl text-btf-light/80">
                    <p>
                      To access certain Services, you may be required to create an account. You agree to provide accurate, complete, and current information. You are responsible for maintaining the confidentiality of your login credentials and for all activity under your account.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-btf-accent mb-4">6. Third-Party Services</h2>
                  <div className="bg-btf-dark/30 p-6 rounded-xl text-btf-light/80">
                    <p>
                      Our Site may contain links to third-party websites or services (e.g., lenders, credit agencies, title companies). We are not responsible for the content or services provided by these third parties. Your use of third-party services is at your own risk and subject to their own terms and privacy policies.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-btf-accent mb-4">7. Intellectual Property</h2>
                  <div className="bg-btf-dark/30 p-6 rounded-xl text-btf-light/80">
                    <p>
                      All content on the Site, including text, graphics, logos, tools, and software, is owned by or licensed to us and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works from any part of the Site without our express written permission.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-btf-accent mb-4">8. Disclaimers</h2>
                  <div className="bg-btf-dark/30 p-6 rounded-xl text-btf-light/80">
                    <p>
                      We provide the Site and Services "as is" and "as available." To the maximum extent permitted by law, we disclaim all warranties, express or implied, including merchantability, fitness for a particular purpose, and non-infringement. We do not guarantee that the Site will be uninterrupted or error-free.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-btf-accent mb-4">9. Limitation of Liability</h2>
                  <div className="bg-btf-dark/30 p-6 rounded-xl text-btf-light/80">
                    <p>
                      To the fullest extent permitted by law, we will not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Site or Services, even if we were advised of the possibility of such damages.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-btf-accent mb-4">10. Indemnification</h2>
                  <div className="bg-btf-dark/30 p-6 rounded-xl text-btf-light/80">
                    <p>
                      You agree to indemnify, defend, and hold harmless Venture Management Ltd., its affiliates, officers, agents, and employees from any claim or demand, including reasonable attorneys' fees, arising from your use of the Site or violation of these Terms.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-btf-accent mb-4">11. Modifications to the Terms</h2>
                  <div className="bg-btf-dark/30 p-6 rounded-xl text-btf-light/80">
                    <p>
                      We reserve the right to update or modify these Terms at any time. Changes will be effective immediately upon posting. Your continued use of the Site after any such changes constitutes your acceptance of the new Terms.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-btf-accent mb-4">12. Governing Law</h2>
                  <div className="bg-btf-dark/30 p-6 rounded-xl text-btf-light/80">
                    <p>
                      These Terms are governed by English Law without regard to its conflict of law principles. Any disputes shall be resolved exclusively in the courts located in Malaysia.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-btf-accent mb-4">13. Contact Us</h2>
                  <div className="bg-btf-dark/30 p-6 rounded-xl text-btf-light/80">
                    <p className="mb-4">
                      If you have any questions about these Terms, please contact us at:
                    </p>
                    <p className="mb-2">Email: info@betterthanfreehold.com</p>
                    <p>Address: Unit 3a-2, Level 3a, Labuan Times Square, Jalan Merdeka, 87000, Federal Territory of Malaysia, Labuan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-btf-accent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-btf-dark mb-4">
              Have Questions?
            </h2>
            <p className="text-xl text-btf-dark/80 mb-8 max-w-3xl mx-auto">
              Contact us if you have any questions about these Terms of Use or need clarification on any provisions.
            </p>
            <a href="/contact" className="bg-btf-dark text-btf-accent px-8 py-3 rounded-lg text-lg font-semibold hover:bg-btf-light hover:text-btf-dark transition-colors inline-flex items-center">
              Contact Us
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 