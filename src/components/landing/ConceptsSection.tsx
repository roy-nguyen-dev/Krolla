'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionContainer } from '@/components/ui/section-container'
import ConceptCard from '../ui/concept-card'

const concepts = [
  {
    title: 'Cognitive Distorted Views',
    icon: '/images/circular-icon-1.png', // Placeholder - will use the golden circle from images
    description: 'Your brain creates false, catastrophic interpretations of reality. What feels like a life-threatening situation is often just normal stress magnified by anxiety.'
  },
  {
    title: 'Triggered Fear',
    icon: '/images/circular-icon-2.png', // Placeholder - will use the slider controls from images
    description: 'Specific situations, thoughts, or sensations trigger your fight-or-flight response, even when there\'s no real danger present.'
  },
  {
    title: 'The Shame Loop',
    icon: '/images/circular-icon-3.png', // Placeholder - will use the anxiety disorder diagram
    description: 'You feel ashamed of your anxiety, which creates more anxiety about having anxiety, trapping you in an endless cycle of self-judgment.'
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
