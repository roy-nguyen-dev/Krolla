'use client'

import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface PillBarProps {
  icon: string
  text: string
  className?: string
  onClick?: () => void
}

export default function PillBar({ 
  icon, 
  text, 
  className,
  onClick 
}: PillBarProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        'inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/20 bg-black/50 backdrop-blur-sm transition-all duration-200 hover:border-white/40 hover:bg-black/70 cursor-pointer',
        className
      )}
    >
      <Image
        src={icon}
        alt="Icon"
        width={20}
        height={20}
        className="w-5 h-5 flex-shrink-0"
      />
      <span className="text-white text-sm font-medium whitespace-nowrap">
        {text}
      </span>
    </div>
  )
}
