'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { PricingCard } from '@/components/ui/pricing-card'
import { SectionContainer } from '@/components/ui/section-container'
import { PricingPlan } from '@/types'

const pricingPlans: PricingPlan[] = [
  {
    id: '1',
    name: '3 Months Membership',
    price: '$25',
    features: [
      'Recovery roadmap for anxiety',
      'Supportive recovery community',
      'Weekly mentor Q&A',
    ],
    buttonText: 'Join the community',
    variant: 'yellow',
  },
  {
    id: '2',
    name: 'Lifetime Membership',
    price: '$45',
    features: [
      'Everything in Starter, and...',
      'Private Support',
      'Save $50 when you join the course',
      'Community of recovered students',
      'Priority email support',
    ],
    buttonText: 'Join the community',
    variant: 'green',
    popular: true,
  },
]

export const PricingSection: React.FC = () => {
  return (
    <SectionContainer>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h3 className="text-sm md:text-2xl font-semibold text-text-primary mb-4">
          500+ <span className="text-accent-yellow font-bold">lives changed</span>
        </h3>
        <h1 className="mt-3 text-text-primary font-bold leading-tight text-[clamp(28px,6vw,64px)] mb-4">
          It's your turn
        </h1>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <PricingCard plan={plan} />
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  )
}
