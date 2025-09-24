'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { SectionContainer } from '@/components/ui/section-container'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <SectionContainer id="hero" className="pt-20 pb-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* 1. Rating */}
          <motion.div 
            className="flex items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex text-accent-yellow">
              {[...Array(5)].map((_, i) => (
                <motion.svg 
                  key={i} 
                  className="w-5 h-5 fill-current" 
                  viewBox="0 0 20 20"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </motion.svg>
              ))}
            </div>
            <span className="text-sm text-text-secondary">4.9/5 rating</span>
          </motion.div>

          {/* 2. Stop Panic Attacks headline */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Stop Panic Attacks in{' '}
              <motion.span 
                className="text-accent-yellow"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                14 days
              </motion.span>
            </motion.h1>
            <motion.h2 
              className="text-2xl md:text-3xl font-semibold text-accent-yellow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              Or It's Free
            </motion.h2>
          </motion.div>
          
          {/* 3. New paragraph content */}
          <motion.p 
            className="text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            Anxiety comes back because it's a loop — this course shows you how to break it, stop panic attacks, calm anxiety, and live freely.
          </motion.p>

          {/* 4. Break the cycle button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <Button
              variant="primary"
              size="lg"
              className="text-lg px-8 py-4"
            >
              Break the cycle
            </Button>
          </motion.div>

          {/* 5. Landing page main image */}
          <motion.div 
            className="relative w-full max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <Image
              src="/images/landingpage-main.png"
              alt="Anxiety management program overview"
              width={800}
              height={600}
              className="w-full h-auto rounded-2xl shadow-2xl"
              priority
            />
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  )
}
