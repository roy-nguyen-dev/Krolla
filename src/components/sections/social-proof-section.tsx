'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { TestimonialCard } from '@/components/ui/testimonial-card'
import { SectionContainer } from '@/components/ui/section-container'
import { Testimonial } from '@/types'

const results: Testimonial[] = [
  {
    id: '1',
    name: 'Jennifer Martinez',
    avatar: 'JM',
    testimonial: 'I reduced my anxiety by 80% in just 2 weeks. The breathing techniques and mindfulness exercises are game-changers.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Robert Kim',
    avatar: 'RK',
    testimonial: 'After 10 years of struggling with panic attacks, this program finally gave me the tools I needed. I\'m now panic-free for 6 months.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Lisa Anderson',
    avatar: 'LA',
    testimonial: 'The step-by-step approach made it so easy to follow. I went from daily anxiety to feeling calm and confident.',
    rating: 5,
  },
  {
    id: '4',
    name: 'Mark Wilson',
    avatar: 'MW',
    testimonial: 'I was skeptical, but the results speak for themselves. My quality of life has improved dramatically.',
    rating: 5,
  },
  {
    id: '5',
    name: 'Amanda Taylor',
    avatar: 'AT',
    testimonial: 'This program saved my career. I was about to quit my job due to anxiety, now I\'m thriving.',
    rating: 5,
  },
  {
    id: '6',
    name: 'James Brown',
    avatar: 'JB',
    testimonial: 'The techniques are so simple yet effective. I wish I had found this sooner. Highly recommend!',
    rating: 5,
  },
]

export const SocialProofSection: React.FC = () => {
  return (
    <SectionContainer background="card">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
          Because results matter
        </h2>
        <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-8">
          Real people, real results. See how our program has transformed lives.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-4xl font-bold text-accent-yellow mb-2">95%</div>
            <div className="text-text-secondary">Success Rate</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-4xl font-bold text-accent-green mb-2">10K+</div>
            <div className="text-text-secondary">People Helped</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-4xl font-bold text-accent-purple mb-2">14</div>
            <div className="text-text-secondary">Days to Results</div>
          </motion.div>
        </div>
      </motion.div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {results.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <TestimonialCard testimonial={testimonial} />
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <Button size="lg" className="text-lg px-8 py-4">
          Get started today
        </Button>
      </motion.div>
    </SectionContainer>
  )
}
