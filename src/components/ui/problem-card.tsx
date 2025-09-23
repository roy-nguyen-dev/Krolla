'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface ProblemCardProps {
  icon: string
  title: string
  description: string
  className?: string
}

export default function ProblemCard({ 
  icon, 
  title, 
  description, 
  className 
}: ProblemCardProps) {
  return (
    <div className={cn(
      'group relative p-8 rounded-2xl bg-card-background border border-white/10 hover:border-accent-yellow/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent-yellow/10',
      className
    )}>
      {/* Icon */}
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      
      {/* Title */}
      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-accent-yellow transition-colors duration-300">
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
