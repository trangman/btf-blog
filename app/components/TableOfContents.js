'use client'

import { useState, useEffect } from 'react'

export default function TableOfContents({ headings = [] }) {
  const [activeId, setActiveId] = useState('')

  // Generate slug from heading text
  const generateSlug = (text) => {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .trim()
  }

  // Smooth scroll to element
  const scrollToElement = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  // Track active heading on scroll
  useEffect(() => {
    const handleScroll = () => {
      const headingElements = headings.map(h => document.getElementById(generateSlug(h.text)))
      const visibleHeadings = headingElements.filter(el => {
        if (!el) return false
        const rect = el.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })

      if (visibleHeadings.length > 0) {
        const activeHeading = visibleHeadings[0]
        setActiveId(activeHeading.id)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [headings])

  if (!headings || headings.length === 0) {
    return null
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
      <h3 className="text-lg font-semibold text-btf-dark mb-4">Table of Contents</h3>
      <nav className="space-y-2">
        {headings.map((heading, index) => {
          const slug = generateSlug(heading.text)
          const isActive = activeId === slug
          
          return (
            <button
              key={index}
              onClick={() => scrollToElement(slug)}
              className={`block w-full text-left px-3 py-2 rounded-md transition-colors duration-200 ${
                isActive
                  ? 'bg-btf-accent text-white'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-btf-dark'
              }`}
              style={{
                paddingLeft: `${(heading.level - 1) * 16 + 12}px`,
                fontSize: heading.level === 1 ? '0.95rem' : '0.875rem',
                fontWeight: heading.level === 1 ? '600' : '500'
              }}
            >
              {heading.text}
            </button>
          )
        })}
      </nav>
    </div>
  )
}
