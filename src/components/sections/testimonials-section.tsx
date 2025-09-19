'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TestimonialCard } from '@/components/ui/testimonial-card'
import { SectionContainer } from '@/components/ui/section-container'
import Carousel from '@/components/ui/carousel'
import { Testimonial } from '@/types'
import { useIsMobile } from '@/hooks/useIsMobile'

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
    name: 'Amanda Taylor',
    avatar: 'AT',
    testimonial:
      'This program saved my career. I was about to quit my job due to anxiety, now I am thriving.',
    rating: 5,
  },
  {
    id: '6',
    name: 'James Brown',
    avatar: 'JB',
    testimonial:
      'The techniques are simple yet effective. I wish I had found this sooner. Highly recommend!',
    rating: 5,
  },
]

export const TestimonialsSection: React.FC = () => {
  const isMobile = useIsMobile()

  return (
    <SectionContainer background="primary">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-10 md:mb-12"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-text-primary">What Our Readers Say</h2>
        <p className="mt-2 text-text-secondary">
          Join thousands of people who have transformed their relationship with anxiety
        </p>
      </motion.div>

      {isMobile ? (
        // MOBILE: Carousel auto-play
        <Carousel
          key="mobile-carousel"
          className="py-2"
          spacing={20}
          perView={{ base: 1.1 }}
          autoplayMs={3200}
          autoplayDurationMs={1000}
          autoplayIgnoreReducedMotion
          autoplayEasing={(t) => 1 - Math.pow(1 - t, 3)}
          mode="free-snap"
          loop
        >
          {testimonials.map((t, i) => (
            <div key={t.id ?? i} className="px-1">
              <TestimonialCard testimonial={t} className="h-full" />
            </div>
          ))}
        </Carousel>
      ) : (
        // DESKTOP: Grid static
        <div key="desktop-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id ?? index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              viewport={{ once: true }}
            >
              <TestimonialCard testimonial={t} />
            </motion.div>
          ))}
        </div>
      )}
    </SectionContainer>
  )
}
