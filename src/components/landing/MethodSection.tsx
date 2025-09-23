'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionContainer } from '@/components/ui/section-container'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function MethodSection() {
  return (
    <SectionContainer id="method" className="py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Break the Loop, Step by Step
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Our proven 14-day program combines evidence-based techniques to help you break free from anxiety permanently.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - App Screenshots */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {/* Placeholder for app screenshot 1 */}
              <div className="relative w-full h-80 bg-card-background rounded-2xl border border-white/10 p-8 hover:border-accent-yellow/30 transition-colors duration-300">
                <div className="space-y-4">
                  <div className="h-4 bg-accent-yellow/20 rounded w-3/4"></div>
                  <div className="h-3 bg-white/20 rounded w-1/2"></div>
                  <div className="h-3 bg-white/20 rounded w-2/3"></div>
                  <div className="h-8 bg-accent-yellow/30 rounded w-1/3 mt-6"></div>
                </div>
                <div className="absolute top-4 right-4 text-xs text-text-secondary">Day 1-7</div>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Placeholder for app screenshot 2 */}
              <div className="relative w-full h-80 bg-card-background rounded-2xl border border-white/10 p-8 hover:border-accent-yellow/30 transition-colors duration-300">
                <div className="space-y-4">
                  <div className="h-4 bg-accent-yellow/20 rounded w-2/3"></div>
                  <div className="h-3 bg-white/20 rounded w-3/4"></div>
                  <div className="h-3 bg-white/20 rounded w-1/2"></div>
                  <div className="h-8 bg-accent-yellow/30 rounded w-1/2 mt-6"></div>
                </div>
                <div className="absolute top-4 right-4 text-xs text-text-secondary">Day 8-14</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Pricing Card */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-card-background rounded-2xl border border-accent-yellow/30 p-8 shadow-lg shadow-accent-yellow/10 hover:shadow-xl hover:shadow-accent-yellow/20 transition-all duration-300">
              {/* Pricing Header */}
              <div className="text-center mb-8">
                <div className="text-sm text-accent-yellow font-semibold mb-2">14-Day Program</div>
                <div className="text-4xl font-bold text-white mb-2">
                  $149
                </div>
                <div className="text-text-secondary">One-time payment</div>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent-yellow flex items-center justify-center">
                    <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white">Daily guided exercises</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent-yellow flex items-center justify-center">
                    <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white">CBT techniques & tools</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent-yellow flex items-center justify-center">
                    <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white">Breathing & mindfulness exercises</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent-yellow flex items-center justify-center">
                    <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white">Progress tracking & journal</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent-yellow flex items-center justify-center">
                    <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white">Lifetime access</span>
                </div>
              </div>

              {/* CTA Button */}
              <Button
                variant="primary"
                size="lg"
                className="w-full text-lg py-4"
              >
                Get Started Now
              </Button>

              {/* Money-back guarantee */}
              <div className="text-center mt-4">
                <div className="text-sm text-text-secondary">
                  30-day money-back guarantee
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  )
}
