'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionContainer } from '@/components/ui/section-container'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'

// Custom Pricing Card for CoachingSection with left alignment and custom icons
const CoachingPricingCard: React.FC<{
  name: string
  price: string
  paymentType: string
  features: string[]
  ctaText: string
  className?: string
  isSelected?: boolean
  onClick?: () => void
}> = ({
  name,
  price,
  paymentType,
  features,
  ctaText,
  className,
  isSelected = false,
  onClick
}) => {
    return (
      <div
        className={cn(
          'h-full flex flex-col justify-between rounded-lg p-8 shadow-sm border transition-all duration-150 ease-in-out hover:shadow-md bg-white text-black cursor-pointer',
          isSelected ? 'border-black border-2' : 'border-gray-200',
          className
        )}
        onClick={onClick}
      >
        <div>
          {/* Header - Left Aligned */}
          <div className="text-left mb-8">
            <div className="flex items-center gap-3 mb-2">
              <Image
                src="/images/price-tag.svg"
                alt="Price tag"
                width={28}
                height={29}
                className="w-7 h-7"
              />
              <h3 className="text-2xl font-bold">{name}</h3>
            </div>
            <div className="mb-2">
              <span className="text-4xl font-bold">{price}</span>
            </div>
            <p className="text-sm opacity-70">{paymentType}</p>
          </div>

          {/* Features */}
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Image
                  src="/images/check-mark.svg"
                  alt="Check mark"
                  width={19}
                  height={20}
                  className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0"
                />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <Button
          disabled={!isSelected}
          size="lg"
          className={cn(
            'w-full mt-8 transition-all duration-150 ease-in-out',
            isSelected
              ? 'bg-black text-white hover:bg-gray-800'
              : 'bg-white text-black border border-gray-300 hover:bg-gray-50'
          )}
        >
          {ctaText}
        </Button>
      </div>
    )
  }

export const CoachingSection: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<string | null>("Full Recovery")

  const handleCardClick = (cardName: string) => {
    setSelectedCard(selectedCard === cardName ? null : cardName)
  }

  const coachingPackages = [
    {
      name: "Calm Start",
      price: "$97",
      paymentType: "One-time payment",
      features: [
        "Personalized written feedback on your situation",
        "Clear steps to break free from anxiety",
        "Delivered within 48 hours"
      ],
      ctaText: "Break the Cycle"
    },
    {
      name: "Full Recovery",
      price: "$197",
      paymentType: "One-time payment",
      features: [
        "Everything in Calm Start",
        "1-Month Support",
        "Anxiety Toolkit",
        "Delivered within 24 hours"
      ],
      ctaText: "Break the Cycle"
    }
  ]

  return (
    <SectionContainer id="coaching" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Get Coached, Gain Control
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Personal guidance and clear steps to end the anxiety cycle.
          </p>
        </motion.div>
        <div className="rounded-lg p-8" style={{ backgroundColor: '#F3F3F3' }}>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
            {coachingPackages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CoachingPricingCard
                  name={pkg.name}
                  price={pkg.price}
                  paymentType={pkg.paymentType}
                  features={pkg.features}
                  ctaText={pkg.ctaText}
                  isSelected={selectedCard === pkg.name}
                  onClick={() => handleCardClick(pkg.name)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}


