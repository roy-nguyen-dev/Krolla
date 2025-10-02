'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'

interface PricingCardProps {
  name: string
  price: string
  paymentType: string
  features: string[]
  ctaText: string
  variant?: 'standard' | 'featured'
  className?: string
}

export const PricingCard: React.FC<PricingCardProps> = ({
  name,
  price,
  paymentType,
  features,
  ctaText,
  variant = 'standard',
  className
}) => {
  return (
    <div
      className={cn(
        'rounded-lg p-8 shadow-sm border transition-all duration-200 hover:shadow-md',
        variant === 'featured' 
          ? 'bg-black text-white border-black' 
          : 'bg-white text-black border-gray-200',
        className
      )}
    >
      {/* Header */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <div className="mb-2">
          <span className="text-4xl font-bold">{price}</span>
        </div>
        <p className="text-sm opacity-70">{paymentType}</p>
      </div>

      {/* Features */}
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check 
              className={cn(
                'w-5 h-5 mr-3 mt-0.5 flex-shrink-0',
                variant === 'featured' ? 'text-white' : 'text-black'
              )} 
            />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <Button
        size="lg"
        className={cn(
          'w-full',
          variant === 'featured'
            ? 'bg-white text-black hover:bg-gray-100'
            : 'bg-black text-white hover:bg-gray-800'
        )}
      >
        {ctaText}
      </Button>
    </div>
  )
}