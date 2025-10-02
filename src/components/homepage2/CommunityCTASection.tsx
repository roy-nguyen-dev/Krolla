'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionContainer } from '@/components/ui/section-container'
import { Button } from '@/components/ui/button'

export const CommunityCTASection: React.FC = () => {
  return (
    <SectionContainer id="community" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Illustration */}
          <div className="flex justify-center mb-8">
            <div className="w-64 h-64 bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <p className="text-gray-500 text-sm">Community/people illustration</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Let us help you
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            A kind community that understands and stands by you.
          </p>

          {/* CTA Button */}
          <Button
            size="lg"
            className="bg-black text-white hover:bg-gray-800 px-8 py-4"
          >
            Join Community
          </Button>
        </motion.div>
      </div>
    </SectionContainer>
  )
}


