'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface HeroVideoPlayerProps {
  src: string
  poster?: string
  className?: string
}

const assetsBaseUrl = process.env.NEXT_PUBLIC_ASSETS_URL || ''

export default function HeroVideoPlayer({ src, poster, className }: HeroVideoPlayerProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Load video when in view (no autoplay)
  useEffect(() => {
    const video = videoRef.current
    if (!video || !isInView) return

    const handleCanPlay = () => {
      setIsLoading(false)
    }

    const handleError = () => {
      setHasError(true)
      setIsLoading(false)
    }

    const handleLoadStart = () => {
      setIsLoading(true)
    }

    video.addEventListener('canplay', handleCanPlay)
    video.addEventListener('error', handleError)
    video.addEventListener('loadstart', handleLoadStart)

    return () => {
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('error', handleError)
      video.removeEventListener('loadstart', handleLoadStart)
    }
  }, [isInView])

  const handlePlayClick = async () => {
    const video = videoRef.current
    if (!video) return

    try {
      if (video.paused) {
        video.muted = false // Unmute when user clicks
        await video.play()
        setIsPlaying(true)
      } else {
        video.pause()
        setIsPlaying(false)
      }
    } catch (error) {
      console.error('Video play/pause failed:', error)
    }
  }

  if (hasError) {
    return (
      <div
        className={cn(
          'relative w-full aspect-video bg-card-background rounded-2xl flex items-center justify-center',
          className,
        )}
      >
        <div className="text-center text-text-secondary">
          <p>Unable to load video</p>
          <p className="text-sm">Please check your connection</p>
        </div>
      </div>
    )
  }

  return (
    <div ref={containerRef} className={cn('relative w-full', className)}>
      {/* Loading State */}
      {isLoading && (
        <div className="absolute inset-0 bg-card-background rounded-2xl flex items-center justify-center z-10">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-accent-yellow border-t-transparent rounded-full animate-spin" />
            <p className="text-text-secondary">Loading video...</p>
          </div>
        </div>
      )}

      {/* Video Element */}
      {isInView && (
        <video
          ref={videoRef}
          className="w-full h-auto rounded-2xl shadow-2xl"
          poster={poster}
          preload="metadata"
          playsInline
          controls={isPlaying}
          onClick={handlePlayClick}
          style={{ cursor: isPlaying ? 'default' : 'pointer' }}
        >
          <source src={`${assetsBaseUrl}/${src}`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Play Button Overlay (when paused) */}
      {!isLoading && !isPlaying && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-2xl cursor-pointer"
          onClick={handlePlayClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-20 h-20 bg-accent-yellow rounded-full flex items-center justify-center shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-8 h-8 text-primary ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
          </motion.div>
        </motion.div>
      )}

      {/* Video Quality Indicator */}
      {isPlaying && (
        <div className="absolute top-4 right-4 bg-black/50 text-white text-xs px-2 py-1 rounded">
          HD
        </div>
      )}
    </div>
  )
}
