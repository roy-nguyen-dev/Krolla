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
]

export const TestimonialsSection: React.FC = () => {
  const isMobile = useIsMobile()

  return (
    <SectionContainer background="primary">
      {isMobile ? (
        // MOBILE: Carousel auto-play
        <Carousel
          key="mobile-carousel"
          className="py-2"
          spacing={20}
          perView={{ base: 1 }}
          autoplayMs={2300}
          autoplayDurationMs={500}
          autoplayIgnoreReducedMotion
          autoplayEasing={(t) => 1 - Math.pow(1 - t, 3)}
          mode="free-snap"
          loop={false}
          pingpong={true}
        >
          {testimonials.map((t, i) => (
            <div key={t.id ?? i} className="px-1">
              <TestimonialCard testimonial={t} className="h-full" />
            </div>
          ))}
        </Carousel>
      ) : (
        // DESKTOP: Grid static
        <div key="desktop-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
