import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import LearnMoreForm from './LearnMoreForm'
import { getCanonicalUrl } from '../lib/utils'

export const metadata = {
  title: 'Learn More & Request a Presentation',
  description: 'Please provide your details, and a member of our team will be in touch to arrange an online presentation.',
  alternates: { canonical: getCanonicalUrl('/learn-more') },
}

export default function LearnMore() {
  return (
    <div className="min-h-screen flex flex-col bg-btf-dark">
      <Navigation />
      <main className="flex-1">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-btf-light mb-6">
              Learn More
            </h1>
            <p className="text-xl text-btf-light/80 mb-8 max-w-3xl mx-auto">
              Please provide your details, and a member of our team will be in touch to arrange an online presentation.
            </p>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <LearnMoreForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}


