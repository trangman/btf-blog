export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://betterthanfreehold.com/sitemap.xml',
  }
}
