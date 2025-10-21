'use client'
import { useState, useEffect, useRef } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isWhoDropdownOpen, setIsWhoDropdownOpen] = useState(false)
  const whoDropdownRef = useRef(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  
  const toggleWhoDropdown = () => {
    setIsWhoDropdownOpen(!isWhoDropdownOpen)
  }

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (whoDropdownRef.current && !whoDropdownRef.current.contains(event.target)) {
        setIsWhoDropdownOpen(false)
      }
      // No categories dropdown
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <nav className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 relative">
          <div className="flex items-center absolute left-1/2 -translate-x-1/2 md:static md:transform-none">
            <a href="/" className="flex items-center">
              <img 
                src="/btf-logo.svg" 
                alt="Better-than-Freehold™ Logo" 
                className="h-12 w-auto"
              />
            </a>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-6">
              <a href="/about" className="text-btf-dark hover:text-btf-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </a>
              {/* Categories dropdown removed; Resources remains as top-level link */}
              {/* Who is BtF for Dropdown */}
              <div className="relative" ref={whoDropdownRef}>
                <button
                  onClick={toggleWhoDropdown}
                  className="text-btf-dark hover:text-btf-accent px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                >
                  Who is BtF For?
                  <svg className={`ml-1 h-4 w-4 transition-transform ${isWhoDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isWhoDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                    <div className="py-1">
                      <a
                        href="/legal-professionals"
                        className="block px-4 py-2 text-sm text-btf-dark hover:bg-btf-accent/10 hover:text-btf-accent transition-colors"
                        onClick={() => setIsWhoDropdownOpen(false)}
                      >
                        Legal Professionals
                      </a>
                      <a
                        href="/property-developers"
                        className="block px-4 py-2 text-sm text-btf-dark hover:bg-btf-accent/10 hover:text-btf-accent transition-colors"
                        onClick={() => setIsWhoDropdownOpen(false)}
                      >
                        Property Developers
                      </a>
                      <a
                        href="/owners"
                        className="block px-4 py-2 text-sm text-btf-dark hover:bg-btf-accent/10 hover:text-btf-accent transition-colors"
                        onClick={() => setIsWhoDropdownOpen(false)}
                      >
                        Foreign Property Owners
                      </a>
                      <a
                        href="/buyers"
                        className="block px-4 py-2 text-sm text-btf-dark hover:bg-btf-accent/10 hover:text-btf-accent transition-colors"
                        onClick={() => setIsWhoDropdownOpen(false)}
                      >
                        Buyers
                      </a>
                    </div>
                  </div>
                )}
              </div>
              <a href="/structure" className="text-btf-dark hover:text-btf-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Structure
              </a>
              <a href="/compliance" className="text-btf-dark hover:text-btf-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Compliance
              </a>
              <a href="/faqs" className="text-btf-dark hover:text-btf-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">
                FAQs
              </a>
              <a href="/resources" className="text-btf-dark hover:text-btf-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">Resources</a>
              <a href="/contact" className="bg-btf-accent text-white hover:bg-btf-dark px-4 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-btf-dark hover:text-btf-accent focus:outline-none focus:text-btf-accent"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-50 border-t border-gray-200">
          <a href="/about" className="text-btf-dark hover:text-btf-accent block px-3 py-2 rounded-md text-base font-medium">
            About
          </a>
          <a href="/resources" className="text-btf-dark hover:text-btf-accent block px-3 py-2 rounded-md text-base font-medium">
            Resources
          </a>
          {/* Categories link removed from mobile menu */}
          <span className="text-btf-dark block px-3 pt-2 text-base font-medium">
            Who is BtF For?
          </span>
          <a href="/legal-professionals" className="text-btf-dark hover:text-btf-accent block px-3 py-2 rounded-md text-base font-medium ml-4">
            Legal Professionals
          </a>
          <a href="/property-developers" className="text-btf-dark hover:text-btf-accent block px-3 py-2 rounded-md text-base font-medium ml-4">
            Property Developers
          </a>
          <a href="/owners" className="text-btf-dark hover:text-btf-accent block px-3 py-2 rounded-md text-base font-medium ml-4">
            Foreign Property Owners
          </a>
          <a href="/buyers" className="text-btf-dark hover:text-btf-accent block px-3 py-2 rounded-md text-base font-medium ml-4">
            Buyers
          </a>
          <a href="/structure" className="text-btf-dark hover:text-btf-accent block px-3 py-2 rounded-md text-base font-medium">
            Structure
          </a>
          <a href="/compliance" className="text-btf-dark hover:text-btf-accent block px-3 py-2 rounded-md text-base font-medium">
            Compliance
          </a>
          <a href="/faqs" className="text-btf-dark hover:text-btf-accent block px-3 py-2 rounded-md text-base font-medium">
            FAQs
          </a>
          <a href="/resources" className="text-btf-dark hover:text-btf-accent block px-3 py-2 rounded-md text-base font-medium">
            Resources
          </a>
          <a href="/contact" className="bg-btf-accent text-white hover:bg-btf-dark block px-3 py-2 rounded-md text-base font-medium">
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
} 