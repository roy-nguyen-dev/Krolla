'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionContainer } from '@/components/ui/section-container'
import FAQAccordion from '../ui/faq-accordion'

const faqs = [
  {
    question: 'How long does the program take?',
    answer: 'The program is designed to be completed over 14 days, with daily exercises that take 15-30 minutes each. However, you have lifetime access, so you can go at your own pace and revisit any content whenever you need it.'
  },
  {
    question: 'What if it doesn\'t work for me?',
    answer: 'We\'re so confident in our program that we offer a 30-day money-back guarantee. If you\'re not completely satisfied with your results, simply contact us within 30 days for a full refund, no questions asked.'
  },
  {
    question: 'Do I need any special equipment?',
    answer: 'No special equipment is required. The program uses simple breathing exercises, mindfulness techniques, and cognitive behavioral therapy tools that you can practice anywhere, anytime. All you need is a quiet space and a few minutes each day.'
  },
  {
    question: 'Is this suitable for severe anxiety?',
    answer: 'Our program is designed to help with various levels of anxiety, from mild to moderate. However, if you\'re experiencing severe anxiety or panic disorders, we recommend consulting with a healthcare professional first. This program can be used alongside professional treatment.'
  },
  {
    question: 'Can I access the program on my phone?',
    answer: 'Yes! The program is fully mobile-responsive and works on all devices. You can access your daily exercises, progress tracking, and all materials from your phone, tablet, or computer.'
  },
  {
    question: 'What makes this different from other anxiety programs?',
    answer: 'Our program combines evidence-based CBT techniques with practical, easy-to-follow exercises. Unlike generic meditation apps, we focus specifically on breaking the anxiety cycle through proven psychological methods. Plus, you get lifetime access and can revisit the content whenever you need it.'
  }
]

export default function FAQSection() {
  return (
    <SectionContainer id="faq" className="py-20">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Got questions? We've got answers. Here are the most common questions about our anxiety management program.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <FAQAccordion faqs={faqs} />
        </motion.div>
      </div>
    </SectionContainer>
  )
}
