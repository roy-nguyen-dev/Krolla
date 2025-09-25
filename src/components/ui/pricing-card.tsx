'use client'

import React from 'react'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { PricingCardProps } from '@/types'
import { Button } from './button'

export const PricingCard: React.FC<PricingCardProps> = ({ plan, className }) => {
  const { name, price, features, buttonText, variant, popular } = plan

  const cardVariants = {
    yellow: 'border-accent-yellow',
    green: 'border-accent-green',
  }

  const buttonVariants = {
    yellow: 'primary' as const,
    green: 'success' as const,
  }

  return (
    <div
      className={cn(
        'relative bg-card-background rounded-card p-8 border-2 transition-all duration-200 hover:shadow-xl',
        cardVariants[variant],
        // popular && 'ring-2 ring-accent-yellow ring-opacity-50',
        className,
      )}
    >
      {/* Popular badge */}
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-accent-yellow text-primary px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}

      {/* Plan name and price */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-text-primary mb-2">{name}</h3>
        <div className="text-4xl font-bold text-accent-yellow mb-2">{price}</div>
        <p className="text-text-secondary text-sm">One-time payment</p>
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check
              size={16}
              className={cn(
                'text-accent-green mr-3 mt-0.5 flex-shrink-0',
                variant === 'yellow' ? 'text-accent-yellow' : 'text-accent-green',
              )}
            />
            <span className="text-text-secondary text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <Button variant={buttonVariants[variant]} size="lg" className="w-full">
        {buttonText}
      </Button>
    </div>
  )
}
