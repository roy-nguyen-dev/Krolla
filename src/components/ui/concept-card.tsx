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
      'group relative p-8 rounded-2xl bg-transparent border border-white/20 hover:border-accent-yellow/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent-yellow/20 hover:bg-white/5 text-center',
      className
    )}>
      {/* Title */}
      <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-accent-yellow transition-colors duration-300">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-sm text-text-secondary leading-relaxed mb-6 group-hover:text-white/80 transition-colors duration-300">
        {description}
      </p>
      
      {/* Icon */}
      <div className="relative w-full mx-auto group-hover:scale-110 transition-transform duration-300">
        <Image
          src={icon}
          alt={title}
          width={200}
          height={80}
          className="w-full h-auto object-contain"
        />
      </div>
      
      {/* Hover effect overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  )
}
