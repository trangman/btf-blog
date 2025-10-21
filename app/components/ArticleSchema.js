export default function ArticleSchema({ 
  title, 
  description, 
  pubDate, 
  heroImage, 
  categories, 
  slug,
  author = "BTF Legal Team",
  organizationName = "Better-than-Freehold™",
  organizationUrl = "https://btf-blog.vercel.app",
  siteUrl = "https://btf-blog.vercel.app",
  faqs = []
}) {
  const articleUrl = `${siteUrl}/resources/${slug}`
  const imageUrl = heroImage ? (heroImage.startsWith('http') ? heroImage : `${siteUrl}${heroImage}`) : `${siteUrl}/btf-logo.svg`
  
  // Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": imageUrl,
    "datePublished": pubDate,
    "dateModified": pubDate,
    "author": {
      "@type": "Organization",
      "name": author,
      "url": organizationUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": organizationName,
      "url": organizationUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/btf-logo.svg`,
        "width": 200,
        "height": 60
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": articleUrl
    },
    "url": articleUrl,
    "articleSection": categories,
    "keywords": [
      "Thailand property law",
      "foreign property ownership",
      "Better-than-Freehold",
      "nominee company risks",
      "AMLA compliance",
      "Thai property investment"
    ],
    "inLanguage": "en-US",
    "isPartOf": {
      "@type": "WebSite",
      "name": organizationName,
      "url": siteUrl
    }
  }

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Resources",
        "item": `${siteUrl}/resources`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": title,
        "item": articleUrl
      }
    ]
  }

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": organizationName,
    "url": organizationUrl,
    "logo": `${siteUrl}/btf-logo.svg`,
    "description": "Legal compliance solutions for foreign property investment in Thailand through Better-than-Freehold™ structures.",
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "TH"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "url": `${siteUrl}/contact`
    },
    "sameAs": [
      organizationUrl
    ]
  }

  // WebPage Schema
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": articleUrl,
    "isPartOf": {
      "@type": "WebSite",
      "name": organizationName,
      "url": siteUrl
    },
    "about": {
      "@type": "Thing",
      "name": "Thailand Property Law"
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": imageUrl
    },
    "datePublished": pubDate,
    "dateModified": pubDate,
    "author": {
      "@type": "Organization",
      "name": author
    },
    "publisher": {
      "@type": "Organization",
      "name": organizationName,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/btf-logo.svg`
      }
    }
  }

  // FAQ Schema (if FAQs are provided)
  const faqSchema = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer.replace(/\*\*(.*?)\*\*/g, '$1') // Remove markdown bold formatting
      }
    }))
  } : null

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  )
}
