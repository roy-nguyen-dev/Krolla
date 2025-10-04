'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionContainer } from '@/components/ui/section-container'
import { cn } from '@/lib/utils'
import Image from 'next/image'

interface FAQ {
  question: string
  answer: string
  defaultOpen?: boolean
}

const faqs: FAQ[] = [
  {
    question: "Is this method safe?",
    answer: "Absolutely. All methods are simple and easy to practice, like CBT, Grounding Techniques, and EMDR. These are evidence-based approaches that have been used safely by millions of people worldwide.",
    defaultOpen: true
  },
  {
    question: "Can I stop taking my medication?",
    answer: "We always recommend consulting with your healthcare provider before making any changes to your medication. Our program is designed to work alongside your current treatment plan, not replace it.",
    defaultOpen: false
  },
  {
    question: "Is my information kept private?",
    answer: "Yes, absolutely. We take your privacy seriously and follow strict data protection protocols. Your personal information is encrypted and never shared with third parties.",
    defaultOpen: false
  },
  {
    question: "What is your refund policy?",
    answer: "We offer a 30-day money-back guarantee. If you're not satisfied with the program within the first 30 days, we'll provide a full refund, no questions asked.",
    defaultOpen: false
  },
  {
    question: "I'm still concerned. What should I do?",
    answer: "We understand your concerns. Feel free to reach out to our support team at any time. We're here to help and answer any questions you may have about the program.",
    defaultOpen: false
  }
]

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

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(
    faqs.findIndex(faq => faq.defaultOpen) || 0
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
                Frequently <span style={{ color: '#8A8A8A' }}>asked</span> questions
              </h2>
              <p className="text-lg text-gray-600">
                Got questions? Find quick answers here! If you need more details, feel free to get in touch anytime.
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
              {faqs.map((faq, index) => (
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