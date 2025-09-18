export default function Footer() {
  return (
    <footer className="bg-btf-dark py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-btf-light font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-btf-light/80 hover:text-btf-accent">About Us</a></li>
              <li><a href="/contact" className="text-btf-light/80 hover:text-btf-accent">Contact</a></li>
              <li><a href="/resources" className="text-btf-light/80 hover:text-btf-accent">Resources</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-btf-light font-semibold mb-4">Overview</h3>
            <ul className="space-y-2">
              <li><a href="/structure" className="text-btf-light/80 hover:text-btf-accent">BtF Structure</a></li>
              <li><a href="/compliance" className="text-btf-light/80 hover:text-btf-accent">Compliance</a></li>
              <li><a href="/faqs" className="text-btf-light/80 hover:text-btf-accent">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-btf-light font-semibold mb-4">For Professionals</h3>
            <ul className="space-y-2">
              <li><a href="/legal-professionals" className="text-btf-light/80 hover:text-btf-accent">Legal Professionals</a></li>
              <li><a href="/property-developers" className="text-btf-light/80 hover:text-btf-accent">Property Developers</a></li>
              <li><a href="/owners" className="text-btf-light/80 hover:text-btf-accent">Foreign Property Owners</a></li>
              <li><a href="/buyers" className="text-btf-light/80 hover:text-btf-accent">Property Buyers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-btf-light font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/terms" className="text-btf-light/80 hover:text-btf-accent">Terms of Service</a></li>
              <li><a href="/privacy" className="text-btf-light/80 hover:text-btf-accent">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-btf-light/10">
          <p className="text-center text-btf-light/60">
            © {new Date().getFullYear()} Better-than-Freehold™. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 