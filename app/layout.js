import './globals.css'
import Script from 'next/script'
import PerformanceMonitor from './components/PerformanceMonitor'
import AuthSessionProvider from './components/SessionProvider'

// Compute base URL from env for production canonicals
const envBase = (process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_VERCEL_URL || '').trim()
const siteUrl = envBase
  ? (envBase.startsWith('http') ? envBase : `https://${envBase}`).replace(/\/+$/, '')
  : 'https://betterthanfreehold.com'

export const metadata = {
  metadataBase: new URL(siteUrl || 'http://localhost:3003'),
  title: {
    default: 'Better-than-Freehold™',
    template: '%s | Better-than-Freehold™',
  },
  description:
    'Legal, secure, and financeable property ownership solutions in Thailand for foreign buyers and developers.',
  keywords: [
    'Thailand property',
    'foreign property ownership Thailand',
    'BtF',
    'Better-than-Freehold',
    'Thai real estate',
  ],
  alternates: { canonical: siteUrl + '/' },
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
    apple: [
      { url: '/favicon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxImagePreview: 'large',
      maxSnippet: -1,
      maxVideoPreview: -1,
    },
  },
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Better-than-Freehold™',
    description: 'Legal, secure, and financeable property ownership in Thailand.',
    siteName: 'Better-than-Freehold™',
    locale: 'en_US',
    images: [
      { url: '/og/default.jpg', width: 1200, height: 630, alt: 'Better-than-Freehold' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@BtFPlatform',
    creator: '@BtFPlatform',
    title: 'Better-than-Freehold™',
    description: 'Legal, secure, and financeable property ownership in Thailand.',
    images: ['/og/default.jpg'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/btf-logo.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/favicon.png" as="image" type="image/png" />
        
        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="//samuirealtyth.lon1.cdn.digitaloceanspaces.com" />
        
        {/* Preconnect to CDN for faster video loading */}
        <link rel="preconnect" href="https://samuirealtyth.lon1.cdn.digitaloceanspaces.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Script
          id="org-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Better-than-Freehold™',
              url: siteUrl || '/',
              logo: (siteUrl ? `${siteUrl}` : '') + '/btf-logo.svg',
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
            }),
          }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Better-than-Freehold™',
              url: siteUrl || '/',
            }),
          }}
        />
        <AuthSessionProvider>
          {children}
          <PerformanceMonitor />
        </AuthSessionProvider>
      </body>
    </html>
  )
}
