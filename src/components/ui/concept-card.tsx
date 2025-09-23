'use client'

import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface ConceptCardProps {
  title: string
  icon: string
  description: string
  className?: string
}

export default function ConceptCard({ 
  title, 
  icon, 
  description, 
  className 
}: ConceptCardProps) {
  return (
    <div className={cn(
      'group relative p-8 rounded-2xl bg-card-background border border-white/10 hover:border-accent-yellow/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent-yellow/10 text-center',
      className
    )}>
      {/* Icon */}
      <div className="relative w-20 h-20 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
        {/* Placeholder for circular icon - using golden circle design */}
        <div className="w-full h-full rounded-full bg-gradient-to-br from-accent-yellow to-yellow-600 flex items-center justify-center shadow-lg">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-white to-accent-yellow/20 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-accent-yellow/30"></div>
          </div>
        </div>
      </div>
      
      {/* Title */}
      <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-accent-yellow transition-colors duration-300">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-text-secondary leading-relaxed group-hover:text-white/80 transition-colors duration-300">
        {description}
      </p>
      
      {/* Hover effect overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  )
}
