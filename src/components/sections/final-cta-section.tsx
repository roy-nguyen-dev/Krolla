'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { SectionContainer } from '@/components/ui/section-container'

export const FinalCtaSection: React.FC = () => {
  return (
    <SectionContainer background="card">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            Break anxiety, Stop panic
          </h2>
          
          <p className="text-xl text-text-secondary leading-relaxed">
            Don't let anxiety control your life any longer. Take the first step towards 
            freedom and download your copy of our proven anxiety management system.
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-accent-green rounded-full flex items-center justify-center">
                <span className="text-white text-sm">✓</span>
              </div>
              <span className="text-text-secondary">Instant download after purchase</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-accent-green rounded-full flex items-center justify-center">
                <span className="text-white text-sm">✓</span>
              </div>
              <span className="text-text-secondary">30-day money-back guarantee</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-accent-green rounded-full flex items-center justify-center">
                <span className="text-white text-sm">✓</span>
              </div>
              <span className="text-text-secondary">Lifetime access to updates</span>
            </div>
          </div>

          <Button size="lg" className="text-lg px-8 py-4">
            Download your copy
          </Button>
        </motion.div>

        {/* Book Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative mx-auto max-w-sm">
            {/* Book mockup */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-accent-yellow to-accent-green rounded-lg p-8 shadow-2xl transform rotate-3">
                <div className="bg-white rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-accent-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">📚</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    Anxiety Management
                  </h3>
                  <p className="text-sm text-gray-600">
                    Your Complete Guide
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="absolute -top-4 -right-4 bg-accent-green text-white p-2 rounded-full shadow-lg"
            >
              ✨
            </motion.div>
            <motion.div
              animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-4 -left-4 bg-accent-purple text-white p-2 rounded-full shadow-lg"
            >
              💚
            </motion.div>
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  )
}
