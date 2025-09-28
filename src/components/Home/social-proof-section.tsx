'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { TestimonialCard } from '@/components/ui/testimonial-card'
import { SectionContainer } from '@/components/ui/section-container'
import Carousel from '@/components/ui/carousel'
import { Proof } from '@/types'
import { useIsMobile } from '@/hooks/useIsMobile'
import { ProofCard } from '../ui/proof-card'

const results: Proof[] = [
  {
    id: '1',
    name: 'Jennifer Martinez',
    avatar: 'JM',
    quote:
      'I reduced my anxiety by 80% in just 2 weeks. The breathing techniques and mindfulness exercises are game-changers.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Robert Kim',
    avatar: 'RK',
    quote:
      "After 10 years of struggling with panic attacks, this program finally gave me the tools I needed. I'm now panic-free for 6 months.",
    rating: 5,
  },
  {
    id: '3',
    name: 'Lisa Anderson',
    avatar: 'LA',
    quote:
      'The step-by-step approach made it so easy to follow. I went from daily anxiety to feeling calm and confident.',
    rating: 5,
  },
  {
    id: '4',
    name: 'Mark Wilson',
    avatar: 'MW',
    quote:
      'I was skeptical, but the results speak for themselves. My quality of life has improved dramatically.',
    rating: 5,
  },
  {
    id: '5',
    name: 'Amanda Taylor',
    avatar: 'AT',
    quote:
      "This program saved my career. I was about to quit my job due to anxiety, now I'm thriving.",
    rating: 5,
  },
  {
    id: '6',
    name: 'James Brown',
    avatar: 'JB',
    quote:
      'The techniques are so simple yet effective. I wish I had found this sooner. Highly recommend!',
    rating: 5,
  },
]

export const SocialProofSection: React.FC = () => {
  const isMobile = useIsMobile()
  const latestMobileProofs = results.slice(-7)
  const latestNotMobileProofs = results.slice(-4)

  return (
    <SectionContainer background="primary">
      {/* Heading + Stats */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h3 className="text-sm md:text-2xl font-semibold text-text-primary">
          Real voices - Real recovery
        </h3>
        <h2 className="mt-3 text-text-primary font-bold leading-tight text-[clamp(28px,6vw,64px)]">
          Because result matter
        </h2>
      </motion.div>

      {/* Testimonials */}
      {isMobile ? (
        <Carousel
          key="mobile-carousel"
          className="py-2 mb-12"
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
          {latestMobileProofs.map((t, i) => (
            <div key={t.id ?? i} className="px-1">
              <ProofCard proof={t} className="h-full" />
              {/* <TestimonialCard testimonial={t} className="h-full" /> */}
            </div>
          ))}
        </Carousel>
      ) : (
        <div
          key="desktop-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {latestNotMobileProofs.map((t, index) => (
            <motion.div
              key={t.id ?? index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              viewport={{ once: true }}
            >
              <ProofCard proof={t} />
            </motion.div>
          ))}
        </div>
      )}

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <Button className="inline-flex justify-center w-full sm:w-auto" size="lg">
          Break the Cycle⚡
        </Button>

        <div className="mt-3 flex items-center justify-center gap-2 text-sm text-text-secondary">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded bg-card-background">
            🎁
          </span>
          <span>14-day money-back guarantee</span>
        </div>
      </motion.div>
    </SectionContainer>
  )
}
