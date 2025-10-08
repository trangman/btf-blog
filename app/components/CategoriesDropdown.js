'use client'
import { useState, useEffect } from 'react'

// Category mapping for display names
const categoryDisplayNames = {
  'glossary/definition': 'Glossary/Definition',
  'educational/how-to': 'Educational/How-To',
  'problem/solution': 'Problem/Solution',
  'market-analysis': 'Market Analysis',
  'legal-education': 'Legal Education',
  'technical': 'Technical',
  'industry-analysis': 'Industry Analysis',
  'professional-guidance': 'Professional Guidance',
  // Legacy categories for backward compatibility
  'general': 'General Information',
  'buyer': 'For Buyers',
  'accountant': 'For Accountants',
  'developer': 'For Developers',
  'lawyer': 'For Legal Professionals',
  'property-owner': 'For Property Owners'
}

export default function CategoriesDropdown({ isOpen, onClose }) {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Use predefined categories instead of fetching from API
    const predefinedCategories = [
      'glossary/definition',
      'educational/how-to', 
      'problem/solution',
      'market-analysis',
      'legal-education',
      'technical',
      'industry-analysis',
      'professional-guidance'
    ]
    
    setCategories(predefinedCategories)
    setLoading(false)
  }, [])

  const getCategoryDisplayName = (category) => {
    return categoryDisplayNames[category] || category.replace(/\//g, ' & ').replace(/-/g, ' ')
  }

  const getCategorySlug = (category) => {
    return category.replace(/\//g, '-')
  }

  if (!isOpen) return null

  return (
    <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
      <div className="py-1">
        <a
          href="/resources"
          className="block px-4 py-2 text-sm text-btf-accent hover:bg-btf-accent/10 font-medium transition-colors"
          onClick={onClose}
        >
          All Resources
        </a>
        <div className="border-t border-gray-100 my-1"></div>
        {loading ? (
          <div className="px-4 py-2 text-sm text-gray-500">Loading...</div>
        ) : categories.length > 0 ? (
          categories.map((category) => (
            <a
              key={category}
              href={`/categories/${getCategorySlug(category)}`}
              className="block px-4 py-2 text-sm text-btf-dark hover:bg-btf-accent/10 hover:text-btf-accent transition-colors"
              onClick={onClose}
            >
              {getCategoryDisplayName(category)}
            </a>
          ))
        ) : (
          <div className="px-4 py-2 text-sm text-gray-500">No categories available</div>
        )}
        <div className="border-t border-gray-100 my-1"></div>
        <a
          href="/categories"
          className="block px-4 py-2 text-sm text-btf-dark hover:bg-btf-accent/10 transition-colors"
          onClick={onClose}
        >
          View All Categories
        </a>
      </div>
    </div>
  )
}
