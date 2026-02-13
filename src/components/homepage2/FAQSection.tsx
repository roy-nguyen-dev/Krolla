'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionContainer } from '@/components/ui/section-container'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import type { FAQContent } from '@/lib/content'

// Custom Plus Icon Component
const PlusIcon: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <div 
      className="w-9 h-9 border-3 border-[#B5B5B5] rounded-full flex items-center justify-center transition-transform duration-200"
      style={{ 
        borderWidth: '3px',
        transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)'
      }}
    >
      <div className="w-4 h-4 relative">
        {/* Horizontal line */}
        <div 
          className="absolute top-1/2 left-0 w-full h-0.5 bg-[#B5B5B5] transform -translate-y-1/2"
          style={{ height: '2px' }}
        />
        {/* Vertical line */}
        <div 
          className="absolute top-0 left-1/2 w-0.5 bg-[#B5B5B5] transform -translate-x-1/2"
          style={{ 
            height: '16px',
            width: '2px'
          }}
        />
      </div>
    </div>
  )
}

interface Props {
  content: FAQContent
}

export const FAQSection: React.FC<Props> = ({ content }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(
    content.faqs.findIndex(faq => faq.defaultOpen) || 0
  )

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <SectionContainer id="faq" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Header and Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Header */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                {content.headline.includes('asked') ? (
                  <>
                    {content.headline.split('asked')[0]}
                    <span style={{ color: '#8A8A8A' }}>asked</span>
                    {content.headline.split('asked')[1]}
                  </>
                ) : (
                  content.headline
                )}
              </h2>
              <p className="text-lg text-gray-600">
                {content.subheadline}
              </p>
            </div>

            {/* FAQ Logo */}
            <div className="flex justify-center lg:justify-start">
              <Image
                src="/images/faq-section-logo.png"
                alt="FAQ Section Logo"
                width={320}
                height={320}
                className="w-80 h-80 object-contain"
              />
            </div>
          </motion.div>

          {/* Right side - FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* FAQ Accordion */}
            <div className="space-y-4">
              {content.faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                  style={{ backgroundColor: '#F5F5F5' }}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span className="font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    <PlusIcon isOpen={openIndex === index} />
                  </button>
                  
                  <motion.div
                    initial={false}
                    animate={{ 
                      height: openIndex === index ? 'auto' : 0,
                      opacity: openIndex === index ? 1 : 0
                    }}
                    transition={{ 
                      duration: 0.4,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  )
}
