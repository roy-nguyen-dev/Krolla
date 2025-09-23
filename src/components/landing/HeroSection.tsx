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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-4">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Stop Panic Attacks in{' '}
                <motion.span 
                  className="text-accent-yellow"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  14 days
                </motion.span>
              </motion.h1>
              <motion.h2 
                className="text-2xl md:text-3xl font-semibold text-accent-yellow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Or It's Free
              </motion.h2>
            </div>
            
            <motion.p 
              className="text-lg text-text-secondary leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Break free from the anxiety cycle with our proven 14-day program. 
              Learn evidence-based techniques to manage panic attacks, reduce 
              constant worry, and reclaim your peace of mind.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button
                variant="primary"
                size="lg"
                className="text-lg px-8 py-4"
              >
                Start Free Trial
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4"
              >
                Watch Demo
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              className="flex items-center gap-6 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <div className="flex items-center gap-2">
                <div className="flex text-accent-yellow">
                  {[...Array(5)].map((_, i) => (
                    <motion.svg 
                      key={i} 
                      className="w-5 h-5 fill-current" 
                      viewBox="0 0 20 20"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 1.2 + i * 0.1 }}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                </div>
                <span className="text-sm text-text-secondary">4.9/5 rating</span>
              </div>
              <div className="text-sm text-text-secondary">
                <span className="font-semibold text-white">10,000+</span> people helped
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Anxiety Diagram */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* Placeholder for anxiety diagram - using the circular pattern from the images */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  className="relative w-80 h-80"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  {/* Central glowing circle */}
                  <motion.div 
                    className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-yellow/20 to-accent-yellow/5"
                    animate={{ 
                      scale: [1, 1.05, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  ></motion.div>
                  
                  {/* Concentric circles representing the anxiety loop */}
                  <motion.div 
                    className="absolute inset-4 rounded-full border-2 border-accent-yellow/30"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                  ></motion.div>
                  <motion.div 
                    className="absolute inset-8 rounded-full border-2 border-accent-yellow/20"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                  ></motion.div>
                  <motion.div 
                    className="absolute inset-12 rounded-full border-2 border-accent-yellow/10"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.6 }}
                  ></motion.div>
                  
                  {/* Central text */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                      className="text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.8 }}
                    >
                      <div className="text-6xl mb-2">😰</div>
                      <div className="text-white font-semibold">Anxiety Loop</div>
                    </motion.div>
                  </div>
                  
                  {/* Arrows indicating the cycle */}
                  <motion.div 
                    className="absolute top-4 left-1/2 transform -translate-x-1/2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 2.0 }}
                  >
                    <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-accent-yellow"></div>
                  </motion.div>
                  <motion.div 
                    className="absolute right-4 top-1/2 transform -translate-y-1/2"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 2.2 }}
                  >
                    <div className="w-0 h-0 border-t-4 border-b-4 border-l-8 border-t-transparent border-b-transparent border-l-accent-yellow"></div>
                  </motion.div>
                  <motion.div 
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 2.4 }}
                  >
                    <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-accent-yellow"></div>
                  </motion.div>
                  <motion.div 
                    className="absolute left-4 top-1/2 transform -translate-y-1/2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 2.6 }}
                  >
                    <div className="w-0 h-0 border-t-4 border-b-4 border-r-8 border-t-transparent border-b-transparent border-r-accent-yellow"></div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  )
}
