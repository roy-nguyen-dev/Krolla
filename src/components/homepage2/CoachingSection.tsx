'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionContainer } from '@/components/ui/section-container'
import { PricingCard } from '@/components/ui/pricing-card'

export const CoachingSection: React.FC = () => {
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
      ctaText: "Break the Cycle",
      variant: "standard" as const
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
      ctaText: "Break the Cycle",
      variant: "featured" as const
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

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {coachingPackages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <PricingCard
                name={pkg.name}
                price={pkg.price}
                paymentType={pkg.paymentType}
                features={pkg.features}
                ctaText={pkg.ctaText}
                variant={pkg.variant}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}


