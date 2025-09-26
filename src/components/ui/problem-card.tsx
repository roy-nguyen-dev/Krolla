'use client'

import React from 'react'
import Image from 'next/image'
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
      'group relative p-8 rounded-2xl bg-transparent border border-white/20 hover:border-accent-yellow/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent-yellow/20 hover:bg-white/5',
      className
    )}>
      {/* Icon - Centered above title */}
      <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Image
          src={icon}
          alt={title}
          width={80}
          height={80}
          className="w-20 h-20 object-contain"
        />
      </div>
      
      {/* Title - Centered */}
      <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-accent-yellow transition-colors duration-300">
        {title}
      </h3>
      
      {/* Description - Centered */}
      <p className="text-text-secondary leading-relaxed text-center group-hover:text-white/80 transition-colors duration-300">
        {description}
      </p>
      
      {/* Hover effect overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  )
}
