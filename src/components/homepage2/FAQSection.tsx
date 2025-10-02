'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionContainer } from '@/components/ui/section-container'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

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
          {/* Left side - Illustration */}
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
                <p className="text-gray-500 text-sm">Character illustration</p>
              </div>
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
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Frequently asked questions
              </h2>
              <p className="text-lg text-gray-600">
                Got questions? Find quick answers here! If you need more details, feel free to get in touch anytime.
              </p>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span className="font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        'w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0',
                        openIndex === index && 'rotate-180'
                      )}
                    />
                  </button>
                  
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-4"
                    >
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  )
}


