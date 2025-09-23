'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'

interface FAQ {
  question: string
  answer: string
}

interface FAQAccordionProps {
  faqs: FAQ[]
  defaultOpen?: number
  className?: string
}

export default function FAQAccordion({ 
  faqs, 
  defaultOpen = -1,
  className 
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState(defaultOpen)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <div className={cn('space-y-4', className)}>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-card-background rounded-2xl border border-white/10 overflow-hidden hover:border-accent-yellow/30 transition-all duration-300"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
          >
            <h3 className="text-lg font-semibold text-white pr-4">
              {faq.question}
            </h3>
            <div className="flex-shrink-0">
              <svg
                className={cn(
                  'w-5 h-5 text-accent-yellow transition-transform duration-200',
                  openIndex === index ? 'rotate-180' : 'rotate-0'
                )}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </button>
          
          <div
            className={cn(
              'overflow-hidden transition-all duration-300 ease-in-out',
              openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            )}
          >
            <div className="px-6 pb-4">
              <p className="text-text-secondary leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
