'use client'

import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface PillBarProps {
  icon: string
  text: string
  className?: string
}

export default function PillBar({ 
  icon, 
  text, 
  className
}: PillBarProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/20 bg-black/50 backdrop-blur-sm',
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
