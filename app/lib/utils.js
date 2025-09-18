// Utility functions for the BtF website

// Get the site URL with fallback to production domain
export function getSiteUrl() {
  const envBase = (process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_VERCEL_URL || '').trim()
  return envBase
    ? (envBase.startsWith('http') ? envBase : `https://${envBase}`).replace(/\/+$/, '')
    : 'https://betterthanfreehold.com'
}

// Generate canonical URL for a page - ensure no trailing slashes
export function getCanonicalUrl(path = '') {
  const baseUrl = getSiteUrl()
  // Remove any leading slashes from path and ensure no trailing slashes
  const cleanPath = path.replace(/^\/+/, '').replace(/\/+$/, '')
  return cleanPath ? `${baseUrl}/${cleanPath}` : baseUrl
}

// Generate structured data URLs
export function getStructuredDataUrl(path = '') {
  return getCanonicalUrl(path)
}

// Check if running in development
export function isDevelopment() {
  return process.env.NODE_ENV === 'development'
}

// Check if running in production
export function isProduction() {
  return process.env.NODE_ENV === 'production'
}
