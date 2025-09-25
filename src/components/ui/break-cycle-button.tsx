'use client'

import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface BreakCycleButtonProps {
  onClick?: () => void
  className?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'outline'
}

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

const variantClasses = {
  primary: 'bg-accent-yellow text-primary hover:bg-yellow-400 focus:ring-accent-yellow',
  outline: 'border-2 border-accent-yellow text-accent-yellow hover:bg-accent-yellow hover:text-primary focus:ring-accent-yellow',
}

export default function BreakCycleButton({ 
  onClick, 
  className,
  size = 'lg',
  variant = 'primary'
}: BreakCycleButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-button font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary disabled:opacity-50 disabled:cursor-not-allowed',
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      <span>Break the cycle</span>
      <Image
        src="/images/lightning-bolt.svg"
        alt="Lightning bolt"
        width={20}
        height={20}
        className="w-5 h-5"
      />
    </button>
  )
}
