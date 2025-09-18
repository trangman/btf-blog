import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Script from 'next/script'
import { getCanonicalUrl } from '../lib/utils'

export const metadata = {
  title: 'Privacy Policy | Better-than-Freehold™',
  description: 'Privacy practices and data protection information for Better-than-Freehold™.',
  alternates: { canonical: getCanonicalUrl('/privacy') },
  robots: { index: true, follow: true },
  openGraph: {
    url: getCanonicalUrl('/privacy'),
    title: 'Privacy Policy | Better-than-Freehold™',
    description: 'Privacy practices and data protection information for Better-than-Freehold™.',
    images: [{ url: getCanonicalUrl('/og/default.jpg'), width: 1200, height: 630, alt: 'Better-than-Freehold' }],
  },
  twitter: { images: [getCanonicalUrl('/og/default.jpg')] },
}

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col bg-btf-dark">
      <Navigation />
      <main className="flex-1">
        <Script
          id="privacy-breadcrumbs"
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
                  name: 'Privacy Policy',
                  item: getCanonicalUrl('/privacy'),
                },
              ],
            }),
          }}
        />
        <Script
          id="privacy-webpage"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: 'Privacy Policy',
              url: getCanonicalUrl('/privacy'),
              description: 'Privacy practices and data protection information for Better-than-Freehold™.',
            }),
          }}
        />
        {/* Hero Section */}
        <section className="pt-20 pb-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-btf-light mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-btf-light/80 mb-8 max-w-3xl mx-auto">
              Last revised on 15th August 2025
            </p>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="pb-8 bg-btf-dark/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg prose-invert">
              <div className="space-y-12">
                <div>
                  <h2 className="text-2xl font-bold text-btf-accent mb-4">1. Introduction</h2>
                  <div className="bg-btf-dark/30 p-6 rounded-xl text-btf-light/80">
                    <p className="mb-4">
                      This Privacy Policy describes how Venture Management Ltd. ("VM"), the creator and owner of the Better than Freehold (BtF) intellectual property ("IP") including but not limited to, their legal persons, unincorporated organisations and teams that provide Better than Freehold Services (collectively, the "VM and/or Better than Freehold Operators", "we", "our", and "us"), collect, use, process, disclose, share, transfer, and protect the information you provide on the Better than Freehold website (https://betterthanfreehold.com).
                    </p>
                    <p className="mb-4">
                      This Privacy Policy constitutes a part of the Terms and Conditions of the Better than Freehold Platform. We respect and value your privacy as well as the integrity of the information you have provided and/or permitted us to collect.
                    </p>
                    <p>
                      This Privacy Policy has incorporated several provisions from the General Data Protection Regulation ("GDPR") and from GDPR as it forms part of the law of the United Kingdom ("UK GDPR"), in particular with regard to the rules governing the processing of Personal Information within the European Economic Area (EEA) and the United Kingdom respectively and in accordance with Malaysia's Personal Data Protection Act (PDPA) and Thailand's Personal Data Protection Act B.E. 2562 (2019) (PDPA).
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-btf-accent mb-4">2. Acceptance of the Privacy Policy</h2>
                  <div className="bg-btf-dark/30 p-6 rounded-xl text-btf-light/80">
                    <p className="mb-4">
                      By accessing, using or engaging in the Better than Freehold Services, you indicate and confirm that you have agreed to the terms of this Privacy Policy. Unless upon providing you with a prior notification and obtaining your consent, we will not use your Personal Information for any purposes other than those indicated in this Privacy Policy or the Terms unless we are entitled or required to do so by Applicable Laws.
                    </p>
                    <p>
                      If you do not agree, either partially or wholly, to this Privacy Policy, you must immediately discontinue accessing, using or engaging in the Better than Freehold Services and the Better than Freehold Platform.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-btf-accent mb-4">3. Personal Information</h2>
                  <div className="bg-btf-dark/30 p-6 rounded-xl text-btf-light/80">
                    <p className="mb-4">
                      For the purposes of this Privacy Policy, your Personal Information is information that can be used to identify, describe, relate, or associate with a particular individual and includes "personal data" as defined in GDPR and UK GDPR and the Malaysian and Thai PDPA.
                    </p>
                    <p className="mb-4">The following are the types of information we collect and store when you use the Better than Freehold Services:</p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                      <li><strong>Information provided by you when registering:</strong> Real name, date of birth, nationality, home address, email address, telephone number, signature and other information which can be used to verify your identity.</li>
                      <li><strong>Information collected for compliance purposes:</strong> To comply with AML, KYC and CTF regulations, we collect Personal Information from identification documents, such as passport, national identification card, driver's license, tax identification and visa.</li>
                      <li><strong>Information collected during usage:</strong> IP address, phone number, device type, operating system, browser type and network operator.</li>
                      <li><strong>Communication Information:</strong> Messages, requests, emails, telephone conversations, voicemails and live chats.</li>
                      <li><strong>Financial Information:</strong> Real estate and property holdings, transaction history, withdrawal requests, digital wallet/blockchain addresses, bank account information and payment card numbers.</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-btf-accent mb-4">4. How we collect Personal Information</h2>
                  <div className="bg-btf-dark/30 p-6 rounded-xl text-btf-light/80">
                    <p className="mb-4">We will automatically collect and process Personal Information provided by you under the following situations:</p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                      <li>When you register for a Better than Freehold Account, log in, or visit the Better than Freehold Platform</li>
                      <li>When you voluntarily complete any user survey or provide feedback to us via emails or any other electronic channels</li>
                      <li>When you use browser cookies or any other relevant software upon visiting the Better than Freehold website or Platform</li>
                      <li>From third-party sources including public databases, credit bureaus, ID verification partners, blockchain data, marketing partners and resellers</li>
                    </ul>
                    <p>
                      We also process other Personal Information to convert it into anonymised and aggregated information for strategic planning and operational processes.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-btf-accent mb-4">5. How we use Personal Information</h2>
                  <div className="bg-btf-dark/30 p-6 rounded-xl text-btf-light/80">
                    <p className="mb-4">We use and process your Personal Information for the following purposes:</p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                      <li><strong>To provide the Better than Freehold Services:</strong> Maintaining and providing efficient services in accordance with our contractual obligations</li>
                      <li><strong>To verify your identity:</strong> Using IP addresses and unique identifiers to authenticate your identity and activities</li>
                      <li><strong>To protect Users:</strong> Detecting suspicious activities and protecting against automated abuse, spam, phishing and DDoS attacks</li>
                      <li><strong>To comply with legal obligations:</strong> Compliance with legal obligations, global and local industry standards, and AML/KYC/CTF procedures</li>
                      <li><strong>For measurement, research and development:</strong> Understanding how you use and interact with our services to improve performance</li>
                      <li><strong>For communication purposes:</strong> Providing support and keeping you informed of account security and transaction details</li>
                      <li><strong>To enforce the Terms:</strong> Reviewing, investigating and preventing potentially prohibited or illegal activities</li>
                      <li><strong>For marketing and advertising:</strong> Targeting, modelling and identifying analytics for marketing purposes (with opt-out options)</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-btf-accent mb-4">6. How we store your Personal Information</h2>
                  <div className="bg-btf-dark/30 p-6 rounded-xl text-btf-light/80">
                    <p className="mb-4">
                      We employ procedures and policies that incorporate industry best practices to ensure the integrity of your Personal Information and to prevent instances of unauthorised use. The Better than Freehold Platform's security is fully integrated into reputable cloud service providers database facilities such as Moxo, AWS, Google Cloud & DigitalOcean Cloud Infrastructure.
                    </p>
                    <p className="mb-4">
                      Please note that it is impossible to fully guarantee the security of your Personal Information. While we take reasonable steps to safeguard your Personal Information, we disclaim any liability for the acts committed by those who gain unauthorised access or abuse your information and services unless caused by our gross negligence.
                    </p>
                    <p>
                      You are recommended to independently take the necessary safety precautions to protect your Personal Information, in particular your credential information, such as your username and password.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-btf-accent mb-4">7. How long we retain your Personal Information</h2>
                  <div className="bg-btf-dark/30 p-6 rounded-xl text-btf-light/80">
                    <p className="mb-4">
                      We may be required by Applicable Laws to retain certain information, including Personal Information of Users, Users' profiles, identification verification materials, information relevant to AML/KYC/CTF procedures, account information, account agreements, and other records.
                    </p>
                    <p>
                      Such records shall generally be retained as required by law for the minimum amount of time necessary to accomplish the purpose for which it is collected and thereafter no longer than is permitted under Better than Freehold Operators' Information Retention Policy.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-btf-accent mb-4">8. Cookies</h2>
                  <div className="bg-btf-dark/30 p-6 rounded-xl text-btf-light/80">
                    <p>
                      We shall use cookies and other technologies or methods of web and mobile analysis to gather, store and track certain information related with your access to and activities through the Better than Freehold Services, including when you visit the Better than Freehold Platform.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-btf-accent mb-4">9. Sharing your Personal Information</h2>
                  <div className="bg-btf-dark/30 p-6 rounded-xl text-btf-light/80">
                    <p className="mb-4">
                      We shall not rent, sell, or disclose your Personal Information to any third parties, except as set out in this Privacy Policy. We may share, transfer, disclose, or allow access to your Personal Information to the following third parties for specific purposes:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                      <li>To third parties in order to administer or process a transaction or provide authorised services</li>
                      <li>To validate your identity as required by Applicable Laws through third-party services</li>
                      <li>To financial institutions with which we partner to process payments</li>
                      <li>To law enforcement and government officials where required by applicable law</li>
                      <li>To third parties that provide services to us to enable us to provide the Better than Freehold Services</li>
                      <li>To purchasers or potential purchasers of our business, investors, lenders, and professional advisors</li>
                    </ul>
                    <p>
                      You are entitled to opt-out of having your Personal Information shared with third parties for purposes incompatible with those for which we originally collected or subsequently obtained your authorisation.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-btf-accent mb-4">10. Third-Party Collection of Personal Information</h2>
                  <div className="bg-btf-dark/30 p-6 rounded-xl text-btf-light/80">
                    <p className="mb-4">
                      This Privacy Policy only addresses the use and disclosure of the Personal Information we collect from you. To the extent that you disclose your information to other parties through the use of the Better than Freehold Services, such as by clicking on a link to any other websites, different rules regarding privacy policies may apply.
                    </p>
                    <p>
                      We recommend that you read the privacy policies of such third parties before disclosing any Personal Information to them. We shall not be responsible for the products, services, or descriptions of products or services that you receive from third-party websites.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-btf-accent mb-4">11. Your Legal Rights</h2>
                  <div className="bg-btf-dark/30 p-6 rounded-xl text-btf-light/80">
                    <p className="mb-4">Under certain circumstances, you have the following rights under data protection laws in relation to your Personal Information:</p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                      <li><strong>Right to be informed:</strong> About the collection, use, and processing of your Personal Information</li>
                      <li><strong>Right of access:</strong> To obtain access to the Personal Information we hold about you</li>
                      <li><strong>Right to rectify:</strong> To require us to rectify your Personal Information that is inaccurate</li>
                      <li><strong>Right to erasure:</strong> To have your Personal Information deleted from our records where certain conditions are met</li>
                      <li><strong>Right to data portability:</strong> To request a machine-readable copy of your Personal Information</li>
                      <li><strong>Right to restrict processing:</strong> To request us to restrict or suppress the processing of your Personal Information under certain circumstances</li>
                      <li><strong>Right to object:</strong> To our reliance on our legitimate interests as the basis of processing your Personal Information</li>
                      <li><strong>Right to withdraw consent:</strong> Where we are relying on consent to process your Personal Information</li>
                      <li><strong>Right to lodge a complaint:</strong> To make a complaint to your local privacy regulator</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-btf-accent mb-4">12. Rights of the residents of the EEA</h2>
                  <div className="bg-btf-dark/30 p-6 rounded-xl text-btf-light/80">
                    <p className="mb-4">
                      If you are a resident of the EEA, United Kingdom, or Switzerland at the time your Personal Information is collected, you reserve every legal right as stipulated above. We shall specifically apply legal requirements under the GDPR and UK GDPR (as applicable) for collecting, using, or processing your Personal Information.
                    </p>
                    <p>
                      In cases where some recipients are located outside the EEA, Switzerland or the UK, we shall transfer your Personal Information only to such countries as approved by the European Commission or the UK's Information Commissioner as providing an adequate level of data protection.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-btf-accent mb-4">13. Limitations for age and data breaches</h2>
                  <div className="bg-btf-dark/30 p-6 rounded-xl text-btf-light/80">
                    <p className="mb-4">
                      The Better than Freehold Services are not designed for individuals who are under the age of 18 or under the legal age to provide consent under the applicable laws of the country or jurisdiction where you are using the Better than Freehold Services.
                    </p>
                    <p className="mb-4">
                      We cannot guarantee that any losses, misuses, unauthorised accession, or alteration of your Personal Information shall not occur. You play a vital role in protecting your Personal Information, including your credentials.
                    </p>
                    <p>
                      When registering with the Better than Freehold Services, you are strongly recommended to choose a password with sufficient length and complexity and to not reveal this password to any third parties or unauthorised persons.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-btf-accent mb-4">14. Transferring your Personal Information outside the UK and the EEA</h2>
                  <div className="bg-btf-dark/30 p-6 rounded-xl text-btf-light/80">
                    <p>
                      Your Personal Information may be transferred to and stored in countries outside of the UK and the EEA. We will take all reasonable steps to ensure that your Personal Information is only used in accordance with this Privacy Policy and will put in place appropriate safeguards as required under GDPR and UK GDPR.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-btf-accent mb-4">15. Updates or amendments to the Privacy Policy</h2>
                  <div className="bg-btf-dark/30 p-6 rounded-xl text-btf-light/80">
                    <p className="mb-4">
                      We shall revise and update this Privacy Policy periodically, at our sole discretion, and the most current version shall be published on the Better than Freehold website and Platform (as reflected in the "Last Revised Date" heading).
                    </p>
                    <p className="mb-4">
                      In the event of any material changes which may affect your usage on the Better than Freehold Services and the Better than Freehold Platform, we shall notify you through your email address or other communication channels you provide to us.
                    </p>
                    <p>
                      Your continued access to and use of the Better than Freehold Services after any changes to this Privacy Policy constitutes your consent to any changes we have made.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-btf-accent mb-4">16. How to contact Better than Freehold Operators</h2>
                  <div className="bg-btf-dark/30 p-6 rounded-xl text-btf-light/80">
                    <p className="mb-4">
                      For any questions regarding this Privacy Policy, your Personal Information collected or processed by us, or in case you would like to exercise one of your legal privacy rights, please submit your requests to:
                    </p>
                    <p className="mb-2">Email: info@venturemanagement.my</p>
                    <p>Website: www.venturemanagement.my</p>
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
              Privacy Questions?
            </h2>
            <p className="text-xl text-btf-dark/80 mb-8 max-w-3xl mx-auto">
              Contact us for any questions regarding this Privacy Policy or to exercise your legal privacy rights.
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