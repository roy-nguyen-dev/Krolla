'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionContainer } from '@/components/ui/section-container'
import { TestimonialCard } from '@/components/ui/testimonial-card'

const writtenTestimonials = [
  {
    id: 'testimonial-1',
    name: 'Leo Shipulya',
    subtitle: 'Marketing @ WeavePay',
    avatar: '/images/landing-testimonial1.png',
    rating: 5,
    testimonial: 'This program completely changed my life. After years of struggling with panic attacks, I finally found a method that works. The daily exercises are simple but incredibly effective. I went from having multiple panic attacks a week to feeling calm and in control.'
  },
  {
    id: 'testimonial-2',
    name: 'John Hampton',
    subtitle: 'Founder at Schoolwise',
    avatar: '/images/landing-testimonial2.png',
    rating: 5,
    testimonial: 'I was skeptical at first, but the results speak for themselves. The CBT techniques taught in this program helped me understand my anxiety triggers and gave me practical tools to manage them. I\'m now able to handle stressful situations without spiraling into panic.'
  },
  {
    id: 'testimonial-3',
    name: 'Matt Downey',
    subtitle: 'Creative Founder, Digital Native',
    avatar: '/images/landing-testimonial3.png',
    rating: 5,
    testimonial: 'The breathing exercises and mindfulness techniques are game-changers. I sleep better, feel more confident, and my relationships have improved because I\'m no longer constantly worried. This program is worth every penny.'
  },
  {
    id: 'testimonial-4',
    name: 'Luna Lindsay',
    subtitle: 'Founder at Cleauv Home Services',
    avatar: '/images/landing-testimonial4.png',
    rating: 5,
    testimonial: 'I tried therapy and medication, but nothing worked as well as this program. The step-by-step approach made it easy to follow, and the progress tracking kept me motivated. I\'m finally free from the anxiety cycle that controlled my life for years.'
  }
]

export default function WrittenTestimonialsSection() {
  return (
    <SectionContainer className="py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Real Stories, Real Results
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our community members have to say about their transformation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {writtenTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <TestimonialCard
                testimonial={testimonial}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}
