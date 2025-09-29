'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { SectionContainer } from '@/components/ui/section-container'

export const LetterSection: React.FC = () => {
  return (
    <SectionContainer background="primary">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <div className="max-w-7xl mx-auto">
          <Image
            src="/images/Letter.png"
            alt="Personal letter from Michael about anxiety recovery journey"
            width={1600}
            height={2000}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </motion.div>
    </SectionContainer>
  )
}
