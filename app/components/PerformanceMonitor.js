'use client'

import { useEffect } from 'react'

export default function PerformanceMonitor() {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return

    // Monitor Core Web Vitals with web-vitals package
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS((metric) => console.log('CLS:', metric))
      getFID((metric) => console.log('FID:', metric))
      getFCP((metric) => console.log('FCP:', metric))
      getLCP((metric) => console.log('LCP:', metric))
      getTTFB((metric) => console.log('TTFB:', metric))
    }).catch(() => {
      // Fallback to basic performance monitoring if web-vitals fails
      console.log('Web Vitals not available, using basic performance monitoring')
    })

    // Monitor video performance
    const videoElements = document.querySelectorAll('video')
    videoElements.forEach(video => {
      video.addEventListener('loadstart', () => {
        console.log('Video loading started')
      })
      
      video.addEventListener('canplay', () => {
        console.log('Video can start playing')
      })
      
      video.addEventListener('loadeddata', () => {
        console.log('Video data loaded')
      })
    })

    // Monitor intersection observer performance
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            console.log('Element entered viewport:', entry.target)
          }
        })
      })
      
      // Observe all video containers
      const videoContainers = document.querySelectorAll('[data-video-container]')
      videoContainers.forEach(container => observer.observe(container))
    }

    // Basic performance monitoring fallback
    if ('performance' in window) {
      // Monitor page load time
      window.addEventListener('load', () => {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart
        console.log('Page load time:', loadTime + 'ms')
      })

      // Monitor navigation timing
      if ('navigation' in performance) {
        const navigation = performance.getEntriesByType('navigation')[0]
        if (navigation) {
          console.log('DOM Content Loaded:', navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart + 'ms')
          console.log('First Paint:', performance.getEntriesByType('paint')[0]?.startTime + 'ms')
        }
      }
    }
  }, [])

  return null // This component doesn't render anything
}
