import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import CTAButtons from '../components/CTAButtons'
import Script from 'next/script'
import { getCanonicalUrl } from '../lib/utils'

export const metadata = {
  title: 'Contact | Better-than-Freehold™',
  description: 'Get in touch with Better-than-Freehold™ for consultations and inquiries.',
  alternates: { canonical: getCanonicalUrl('/contact') },
  robots: { index: true, follow: true },
  openGraph: {
    url: getCanonicalUrl('/contact'),
    title: 'Contact | Better-than-Freehold™',
    description: 'Get in touch with Better-than-Freehold™ for consultations and inquiries.',
    images: [{ url: getCanonicalUrl('/og/default.jpg'), width: 1200, height: 630, alt: 'Better-than-Freehold' }],
  },
  twitter: { images: [getCanonicalUrl('/og/default.jpg')] },
}

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-btf-dark">
      <Navigation />
      <main className="flex-1">
        <Script
          id="contact-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ContactPage',
              name: 'Contact Better-than-Freehold™',
              url: getCanonicalUrl('/contact'),
              mainEntity: {
                '@type': 'Organization',
                name: 'Better-than-Freehold™',
                url: getCanonicalUrl('/'),
                logo: getCanonicalUrl('/btf-logo.svg'),
                contactPoint: [
                  {
                    '@type': 'ContactPoint',
                    contactType: 'customer support',
                    email: 'info@betterthanfreehold.com',
                    availableLanguage: ['en', 'th'],
                    areaServed: 'TH',
                  },
                ],
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: 'Unit 3a-2, Level 3a, Labuan Times Square, Jalan Merdeka',
                  addressLocality: 'Labuan',
                  addressRegion: 'Labuan',
                  postalCode: '87000',
                  addressCountry: 'MY',
                },
              },
            }),
          }}
        />
        <Script
          id="contact-breadcrumbs"
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
                  name: 'Contact',
                  item: getCanonicalUrl('/contact'),
                },
              ],
            }),
          }}
        />
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-btf-light mb-6">
              <span className="text-btf-accent">Contact Us</span>
            </h1>
            <p className="text-xl text-btf-light/80 mb-8 max-w-4xl mx-auto">
              At Better-than-Freehold™ (BtF), we are here to assist you with all your property investment needs in Thailand. Whether you are a lawyer, property developer, foreign property owner, or potential buyer, our team of experts is ready to provide tailored advice and solutions.
            </p>
          </div>
        </section>

        {/* Get in Touch Section - White Background */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-btf-dark mb-6">
                Get in Touch
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 md:items-stretch">
              <div className="flex flex-col">
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 flex-1 flex flex-col">
                  <h3 className="text-2xl font-semibold text-btf-dark mb-6">How to Reach Us</h3>
                  
                  <div className="space-y-6 flex-1">
                    <div className="flex items-start space-x-4">
                      <div className="bg-btf-accent/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-btf-accent text-xl">📧</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                        <p className="text-gray-700">For general inquiries or to schedule a consultation, email us at</p>
                        <a href="mailto:info@betterthanfreehold.com" className="text-btf-accent font-semibold hover:underline">
                          info@betterthanfreehold.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-btf-accent/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-btf-accent text-xl">📍</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Office Address</h4>
                        
                        <div className="text-gray-700 mt-1">
                          <p className="font-semibold">Better-than-Freehold™ (BtF)</p>
                          <p>Unit 3a-2, Level 3a, Labuan Times Square, Jalan Merdeka, 87000, Federal Territory of Malaysia, Labuan.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col">
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 flex-1 flex flex-col">
                  <h3 className="text-2xl font-semibold text-btf-dark mb-6">Schedule a Consultation</h3>
                  <p className="text-gray-700 mb-6">
                    Looking for personalised advice? Schedule a one-on-one consultation with our experts to discuss how the BtF methodology can work for you. Simply email us or fill out the contact form on our website, and we'll get back to you promptly.
                  </p>
                  
                  <div className="space-y-4 flex-1">
                    <div className="flex items-start space-x-3">
                      <div className="bg-btf-accent/10 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-btf-accent text-sm">•</span>
                      </div>
                      <span className="text-gray-700">Expert Guidance on Thai property law and compliance</span>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="bg-btf-accent/10 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-btf-accent text-sm">•</span>
                      </div>
                      <span className="text-gray-700">Tailored Solutions for investors, developers, and advisors</span>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="bg-btf-accent/10 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-btf-accent text-sm">•</span>
                      </div>
                      <span className="text-gray-700">Proven Expertise with successful BtF implementations</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        

        {/* Contact Form Section - White Background */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-btf-dark mb-6">
                Send Us a Message
              </h2>
              <p className="text-xl text-gray-700">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-btf-accent focus:border-btf-accent transition-colors"
                      placeholder="Your first name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-btf-accent focus:border-btf-accent transition-colors"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-btf-accent focus:border-btf-accent transition-colors"
                    placeholder="your.email@betterthanfreehold.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-btf-accent focus:border-btf-accent transition-colors"
                    placeholder="+66 XXX XXX XXX"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-btf-accent focus:border-btf-accent transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="investor">Property Investment</option>
                    <option value="legal">Legal Professional</option>
                    <option value="developer">Property Developer</option>
                    <option value="consultation">Schedule Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-btf-accent focus:border-btf-accent transition-colors resize-vertical"
                    placeholder="Please describe how we can help you..."
                  />
                </div>
                
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-btf-accent text-btf-dark px-8 py-3 rounded-lg text-lg font-semibold hover:bg-btf-dark hover:text-btf-accent transition-colors border-2 border-btf-accent"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-btf-accent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-btf-dark mb-4">
              Let's Start the Conversation
            </h2>
            <p className="text-xl text-btf-dark/80 mb-8 max-w-3xl mx-auto">
              Contact us today to learn how the BtF method can secure your investment and ensure compliance with Thai law. We look forward to assisting you!
            </p>
            <CTAButtons variant="accent-bg" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 