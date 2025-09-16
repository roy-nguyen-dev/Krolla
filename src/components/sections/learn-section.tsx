'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionContainer } from '@/components/ui/section-container'

export const LearnSection: React.FC = () => {
  return (
    <SectionContainer>
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
            Learn calm, step by step
          </h2>
          
          <p className="text-xl text-text-secondary leading-relaxed">
            Stop Panic Attacks in 14 days Or It's Free
          </p>

          <p className="text-lg text-text-secondary">
            Our comprehensive program guides you through proven techniques to manage anxiety, 
            with step-by-step instructions that you can implement immediately. No complex 
            theories, just practical solutions that work.
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-accent-green rounded-full flex items-center justify-center">
                <span className="text-white text-sm">✓</span>
              </div>
              <span className="text-text-secondary">14-day structured program</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-accent-green rounded-full flex items-center justify-center">
                <span className="text-white text-sm">✓</span>
              </div>
              <span className="text-text-secondary">Daily exercises and techniques</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-accent-green rounded-full flex items-center justify-center">
                <span className="text-white text-sm">✓</span>
              </div>
              <span className="text-text-secondary">Progress tracking tools</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-accent-green rounded-full flex items-center justify-center">
                <span className="text-white text-sm">✓</span>
              </div>
              <span className="text-text-secondary">Money-back guarantee</span>
            </div>
          </div>

          <Button size="lg" className="mt-8">
            Start your journey
          </Button>
        </motion.div>

        {/* Video Preview */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative bg-card-background rounded-card overflow-hidden shadow-2xl">
            {/* Video placeholder */}
            <div className="aspect-video bg-gradient-to-br from-accent-purple to-accent-green flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
                <h3 className="text-white text-xl font-semibold">Preview Video</h3>
                <p className="text-white/80 text-sm">See what you'll learn</p>
              </div>
            </div>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-16 h-16 bg-accent-yellow rounded-full flex items-center justify-center shadow-lg"
              >
                <Play className="w-6 h-6 text-primary ml-1" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  )
}
