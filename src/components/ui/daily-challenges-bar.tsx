'use client'

import React from 'react'
import PillBar from './pill-bar'

interface DailyChallengesBarProps {
  className?: string
  onClick?: () => void
}

export default function DailyChallengesBar({ 
  className,
  onClick 
}: DailyChallengesBarProps) {
  return (
    <PillBar
      icon="/images/lightning-bolt.svg"
      text="Your Daily Challenges"
      className={className}
      onClick={onClick}
    />
  )
}
