'use client'

import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import HeroVideoPlayer from './hero-video-player'

interface VideoTestimonialCardProps {
  thumbnail: string
  name: string
  videoUrl?: string
  hasVideo?: boolean
  className?: string
}

export default function VideoTestimonialCard({
  thumbnail,
  name,
  videoUrl,
  hasVideo = false,
  className,
}: VideoTestimonialCardProps) {
  return (
    <div
      className={cn(
        'group relative rounded-2xl overflow-hidden bg-card-background border border-white/10 hover:border-accent-yellow/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent-yellow/10',
        className,
      )}
    >
      {/* Video or Thumbnail - Full Card */}
      <div className="relative w-full h-full min-h-[300px]">
        {hasVideo && videoUrl ? (
          <HeroVideoPlayer
            src={videoUrl}
            poster={thumbnail}
            className="w-full h-full aspect-[858/1524]"
          />
        ) : (
          <div className="relative w-full h-full bg-gradient-to-br from-accent-yellow/20 to-accent-purple/20 aspect-[858/1524]">
            <Image src={thumbnail} alt={`${name} testimonial`} fill className="object-cover" />
            {/* Play Button Overlay for thumbnail-only cards */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors duration-300">
              <div className="w-16 h-16 rounded-full bg-accent-yellow flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-6 h-6 text-primary ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </div>
            </div>
          </div>
        )}

        {/* Floating Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
          {/* Star Rating */}
          <div className="flex items-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-accent-yellow fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          {/* Name */}
          <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-accent-yellow transition-colors duration-300">
            {name}
          </h3>

        </div>
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  )
}
