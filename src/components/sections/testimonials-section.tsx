'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TestimonialCard } from '@/components/ui/testimonial-card'
import { SectionContainer } from '@/components/ui/section-container'
import { Testimonial } from '@/types'
import { cn } from '@/lib/utils'

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    avatar: 'SJ',
    testimonial:
      'This eBook completely changed my perspective on anxiety. The techniques are practical and easy to implement. I went from having daily panic attacks to feeling calm and in control.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Michael Chen',
    avatar: 'MC',
    testimonial:
      'I was skeptical at first, but the step-by-step approach really works. My anxiety levels have decreased significantly, and I feel more confident in social situations.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    avatar: 'ER',
    testimonial:
      'The breathing exercises and mindfulness techniques have been life-changing. I can now manage my anxiety without medication. Highly recommend!',
    rating: 5,
  },
  {
    id: '4',
    name: 'David Thompson',
    avatar: 'DT',
    testimonial:
      'As someone who struggled with anxiety for years, this eBook provided the breakthrough I needed. The practical advice is easy to follow and truly effective.',
    rating: 5,
  },
  {
    id: '5',
    name: 'David Thompson',
    avatar: 'DT',
    testimonial:
      'As someone who struggled with anxiety for years, this eBook provided the breakthrough I needed. The practical advice is easy to follow and truly effective.',
    rating: 5,
  },
  {
    id: '6',
    name: 'David Thompson',
    avatar: 'DT',
    testimonial:
      'As someone who struggled with anxiety for years, this eBook provided the breakthrough I needed. The practical advice is easy to follow and truly effective.',
    rating: 5,
  },
]

export const TestimonialsSection: React.FC = () => {
  return (
    <SectionContainer background="primary" className="min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12 md:mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-3 md:mb-4">
          What Our Readers Say
        </h2>
        <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
          Join thousands of people who have transformed their relationship with anxiety
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.07 }}
            viewport={{ once: true }}
            className={cn(i > 1 && 'hidden md:block')}
          >
            <TestimonialCard testimonial={t} className="h-full" />
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  )
}
