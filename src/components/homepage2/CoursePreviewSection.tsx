'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionContainer } from '@/components/ui/section-container'
import { Button } from '@/components/ui/button'
import { useIsMobile } from '@/hooks/useIsMobile'
import { useRouter } from 'next/navigation'

export const CoursePreviewSection: React.FC = () => {
  const isMobile = useIsMobile()
  const router = useRouter()

  const handleRedirectTo = (href: string) => {
    router.push(href)
  }

  return (
    <SectionContainer id="course" className="py-20 bg-white">
      {/* Learn Section Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Learn Calm, Step By Step
          </h2>
          <p className="text-lg text-gray-500">
            Save years of struggle - see results in weeks.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="rounded-lg p-8" style={{ backgroundColor: '#F3F3F3' }}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="/images/learn-section.png"
              alt="Learn section interface"
              className="w-full h-auto rounded-lg"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-sm font-medium">
              Bestseller
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              Stop Panic Attack in <br />
              14 days - Or It's Free
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed w-3/4">
              Anxiety comes back because it's a loop this course shows you how to break it, stop panic attacks, calm anxiety, and live freely.
            </p>

            {/* CTA Button */}
            <Button
              size="lg"
              onClick={() => handleRedirectTo('/landing-page')}
              className="bg-black text-white hover:bg-gray-800 px-8 py-2"
            >
              Break the Cycle
            </Button>

            {/* Rating with Avatars */}
            {isMobile ? (
              // MOBILE: Stack vertically
              <div className="flex flex-col items-start gap-3">
                {/* Avatars */}
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <img
                      key={num}
                      src={`/images/rating-avatar${num}.png`}
                      alt={`Avatar ${num}`}
                      className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                      style={{ zIndex: 6 - num }}
                    />
                  ))}
                </div>
                
                {/* Stars and Rating Text */}
                <div className="flex flex-col items-start gap-1">
                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <img
                        key={i}
                        src="/images/star.svg"
                        alt="Star"
                        className="w-6 h-5"
                      />
                    ))}
                  </div>
                  
                  {/* Rating Text */}
                  <span className="text-sm text-black">
                    <span className="font-bold">4.9/5</span> based on reviews
                  </span>
                </div>
              </div>
            ) : (
              // DESKTOP: Horizontal layout
              <div className="flex items-center gap-4">
                {/* Avatars */}
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <img
                      key={num}
                      src={`/images/rating-avatar${num}.png`}
                      alt={`Avatar ${num}`}
                      className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                      style={{ zIndex: 6 - num }}
                    />
                  ))}
                </div>
                
                {/* Stars and Rating Text */}
                <div className="flex flex-col items-start gap-1">
                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <img
                        key={i}
                        src="/images/star.svg"
                        alt="Star"
                        className="w-6 h-5"
                      />
                    ))}
                  </div>
                  
                  {/* Rating Text */}
                  <span className="text-sm text-black">
                    <span className="font-bold">4.9/5</span> based on reviews
                  </span>
                </div>
              </div>
            )}
          </motion.div>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}


