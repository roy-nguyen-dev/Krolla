'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionContainer } from '@/components/ui/section-container'
import { Button } from '@/components/ui/button'

export const AuthorSection: React.FC = () => {
  return (
    <SectionContainer className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <div className="w-80 h-80 bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <p className="text-gray-500 text-sm">Black and white illustration of person</p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black">
              Hey, I'm Michael.
            </h2>
            
            <p className="text-xl text-gray-600 font-medium">
              Self recovery from anxiety without medication
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              I help people overcome anxiety and panic attacks through mindfulness, CBT, and lifestyle transformation.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-black text-white hover:bg-gray-800 px-8 py-4"
              >
                Break the Cycle
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-black text-black hover:bg-gray-50 px-8 py-4"
              >
                View blogs
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  )
}


