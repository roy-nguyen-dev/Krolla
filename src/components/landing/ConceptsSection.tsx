'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionContainer } from '@/components/ui/section-container'
import ConceptCard from '../ui/concept-card'
import PillBar from '../ui/pill-bar'

const concepts = [
  {
    title: 'Calm Doesn\'t Work',
    icon: '/images/concept-card1.png',
    description: 'You try to stay calm during panic, but fear always wins.'
  },
  {
    title: 'Trapped in Fear',
    icon: '/images/concept-card2.png',
    description: 'Every symptom makes you believe the worst, even when nothing\'s wrong.'
  },
  {
    title: 'The Same Loop',
    icon: '/images/concept-card3.png',
    description: 'You feel better for a while, but panic always comes back'
  }
]

export default function ConceptsSection() {
  return (
    <SectionContainer id="explanation" className="py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Pill Bar */}
          <motion.div 
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <PillBar
              icon="/images/concept-section-logo.svg"
              text="The Cycle of Fear"
            />
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Why anxiety keeps coming back?
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Understanding these three core concepts is the first step to breaking free from the anxiety cycle forever.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {concepts.map((concept, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <ConceptCard
                title={concept.title}
                icon={concept.icon}
                description={concept.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}
