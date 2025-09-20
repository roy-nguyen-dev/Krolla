'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { SectionContainer } from '@/components/ui/section-container'
import { ReviewStrip } from '@/components/ui/review-strip'

export const LearnSection: React.FC = () => {
  return (
    <SectionContainer background="primary" className="min-h-screen">
      {/* Heading center */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10 md:mb-14 "
      >
        <p className="text-sm md:text-base font-semibold text-text-secondary">Still Struggling?</p>
        <h2 className="mt-3 text-text-primary font-bold leading-tight text-[clamp(28px,6vw,64px)]">
          Learn calm, <span className="text-accent-yellow">step by step</span>
        </h2>
      </motion.div>

      {/* 2 columns */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid items-center gap-10 md:gap-14 md:grid-cols-2"
      >
        {/* LEFT */}
        <div>
          <h3 className="text-text-primary font-semibold text-2xl md:text-3xl leading-snug">
            Stop Panic Attack in <span className="text-accent-yellow italic">14 days</span>
            <br />
            Or <span className="text-accent-yellow italic">It’s Free</span>
          </h3>

          <p className="mt-4 text-text-secondary max-w-prose">
            Anxiety comes back because it’s a loop — this course shows you how to break it, stop
            panic attacks, calm anxiety, and live freely.
          </p>

          <div className="mt-6 text-center sm:text-left">
            <Button className="inline-flex justify-center" size="md">
              Break the Cycle⚡
            </Button>

            <div className="mt-3 flex items-center justify-center sm:justify-start gap-2 text-sm text-text-secondary">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded bg-card-background">
                🎁
              </span>
              <span>30-day money-back guarantee</span>
            </div>
          </div>

          {/* Review strip: hide mobile */}
          <ReviewStrip
            className="mt-4 hidden sm:flex"
            rating={4.9}
            avatars={[
              '/images/avatars/a1.jpg',
              '/images/avatars/a2.jpg',
              'SJ',
              '/images/avatars/a4.jpg',
              'AM',
            ]}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto w-full max-w-[560px] space-y-4"
        >
          <Image
            src="/images/learn-section.png"
            alt=""
            width={560}
            height={400}
            className="w-full h-auto object-cover"
            priority
          />
        </motion.div>
      </motion.div>
    </SectionContainer>
  )
}
