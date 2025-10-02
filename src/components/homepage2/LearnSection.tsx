'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionContainer } from '@/components/ui/section-container'

export const LearnSection: React.FC = () => {
  return (
    <SectionContainer className="py-20 bg-white">
      <div className="max-w-4xl mx-auto text-center">
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
    </SectionContainer>
  )
}


