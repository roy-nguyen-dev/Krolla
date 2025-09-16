'use client'

import React from 'react'
import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'
import { TestimonialCardProps } from '@/types'

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  className,
}) => {
  const { name, avatar, testimonial: text, rating } = testimonial

  return (
    <div
      className={cn(
        'bg-card-background rounded-card p-6 hover:bg-gray-800 transition-colors duration-200',
        className
      )}
    >
      {/* Rating */}
      {rating && (
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={cn(
                'text-accent-yellow',
                i < rating ? 'fill-current' : 'text-gray-600'
              )}
            />
          ))}
        </div>
      )}

      {/* Testimonial text */}
      <p className="text-text-secondary text-sm leading-relaxed mb-4">
        "{text}"
      </p>

      {/* Author */}
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-accent-purple flex items-center justify-center text-white font-semibold text-sm mr-3">
          {avatar || name.charAt(0).toUpperCase()}
        </div>
        <div>
          <p className="text-text-primary font-medium text-sm">{name}</p>
        </div>
      </div>
    </div>
  )
}
