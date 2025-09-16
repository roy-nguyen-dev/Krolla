'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { PricingCard } from '@/components/ui/pricing-card'
import { SectionContainer } from '@/components/ui/section-container'
import { PricingPlan } from '@/types'

const pricingPlans: PricingPlan[] = [
  {
    id: '1',
    name: 'Panic Attack Mastery',
    price: '$39',
    features: [
      'Complete 14-day anxiety management program',
      'Step-by-step breathing techniques',
      'Mindfulness and meditation exercises',
      'Progress tracking worksheets',
      'Email support for 30 days',
      'Lifetime access to materials',
      'Mobile-friendly PDF format',
    ],
    buttonText: 'Choose this plan',
    variant: 'yellow',
  },
  {
    id: '2',
    name: 'Ultimate Membership',
    price: '$149',
    features: [
      'Everything in Panic Attack Mastery',
      '1-on-1 consultation call (30 min)',
      'Personalized anxiety management plan',
      'Advanced techniques for severe anxiety',
      'Priority email support',
      'Monthly group coaching calls',
      'Exclusive video content library',
      'Community access and support',
      'Money-back guarantee (60 days)',
    ],
    buttonText: 'Choose this plan',
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
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
          It's your turn
        </h2>
        <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-8">
          Choose the plan that fits your needs. Both options include our proven anxiety management system.
        </p>
        <div className="text-sm text-text-secondary">
          All plans include a 30-day money-back guarantee
        </div>
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

      {/* Additional info */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <div className="bg-card-background rounded-card p-6 max-w-2xl mx-auto">
          <h3 className="text-lg font-semibold text-text-primary mb-2">
            Secure Payment
          </h3>
          <p className="text-text-secondary text-sm">
            Your payment is processed securely through our encrypted checkout system. 
            We accept all major credit cards and PayPal.
          </p>
        </div>
      </motion.div>
    </SectionContainer>
  )
}
