'use client'

import { useState, useRef, useEffect } from 'react'

export default function LazyVideo({ 
  src, 
  poster, 
  tracks = [], 
  className = "", 
  ...props 
}) {
  const [isVisible, setIsVisible] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const videoRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: '50px', // Start loading 50px before video comes into view
        threshold: 0.1
      }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleVideoLoad = () => {
    setIsLoaded(true)
  }

  const handleVideoError = () => {
    setHasError(true)
    console.error('Video failed to load:', src)
  }

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {!isVisible && !hasError && (
        <div className="absolute inset-0 bg-gray-900 rounded-xl flex items-center justify-center">
          <div className="text-center text-white">
            <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-lg">Loading video...</p>
          </div>
        </div>
      )}

      {hasError && (
        <div className="absolute inset-0 bg-gray-900 rounded-xl flex items-center justify-center">
          <div className="text-center text-white">
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚠️</span>
            </div>
            <p className="text-lg">Video failed to load</p>
            <button 
              onClick={() => {
                setHasError(false)
                setIsLoaded(false)
                if (videoRef.current) {
                  videoRef.current.load()
                }
              }}
              className="mt-2 px-4 py-2 bg-red-500 hover:bg-red-600 rounded text-sm transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
      )}
      
      {isVisible && (
        <video
          ref={videoRef}
          className={`w-full h-auto transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          controls
          preload="metadata"
          poster={poster}
          onLoadedData={handleVideoLoad}
          onError={handleVideoError}
          playsInline
          muted
          {...props}
        >
          <source src={src} type="video/mp4" />
          {tracks.map((track, index) => (
            <track
              key={index}
              kind="subtitles"
              src={track.src}
              srcLang={track.srcLang}
              label={track.label}
            />
          ))}
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  )
}
