'use client'

// Acronym definitions database
const ACRONYM_DEFINITIONS = {
  'BtF': 'Better-than-Freehold™',
  'CCC': 'Civil and Commercial Code',
  'FBA': 'Foreign Business Act',
  'AMLA': 'Anti-Money Laundering Act',
  'LTV': 'Loan-to-Value',
  'SPH': 'Siam Property Holdings',
  'TIN': 'Thailand Investor Network',
  'CBSA': 'Clear Blue Security Agents',
  'KYC': 'Know Your Customer',
  'AML': 'Anti-Money Laundering',
  'SPV': 'Special Purpose Vehicle',
  'IP': 'Intellectual Property',
  'VM': 'Venture Management Ltd',
  'AI': 'Artificial Intelligence'
}

export default function AcronymTooltip({ children, className = '' }) {
  return <span className={className}>{children}</span>
}

// Convenience function to automatically wrap acronyms in text
export function wrapAcronymsInText(text, className = '') {
  if (!text) return text

  // Create a regex pattern for all known acronyms
  const acronymPattern = new RegExp(`\\b(${Object.keys(ACRONYM_DEFINITIONS).join('|')})\\b`, 'g')
  
  const parts = []
  let lastIndex = 0
  let match

  while ((match = acronymPattern.exec(text)) !== null) {
    // Add text before the acronym
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }
    
    // Add the acronym wrapped in tooltip
    parts.push(
      <AcronymTooltip key={`${match[1]}-${match.index}`} acronym={match[1]} className={className}>
        {match[1]}
      </AcronymTooltip>
    )
    
    lastIndex = match.index + match[0].length
  }
  
  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }
  
  return parts.length > 1 ? parts : text
}
