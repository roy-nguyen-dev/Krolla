'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionContainer } from '@/components/ui/section-container'
import FAQAccordion from '../ui/faq-accordion'
import PillBar from '../ui/pill-bar'

const faqs = [
  {
    question: 'Is this method safe?',
    answer: 'Yes, absolutely. Everything in the course is safe and based on proven, science-backed methods. You\’ll learn to calm your mind and body naturally — no medication, no side effects.'
  },
  {
    question: 'Do I have to stop taking my medication?',
    answer: 'No, you shouldn\’t stop suddenly. Stopping medication is a gradual process that should always be done under your doctor\’s guidance. This course is designed to work safely alongside your current treatment, helping you recover more naturally and confidently.'
  },
  {
    question: 'How long will it take, and will I fully recover?',
    answer: 'Everyone\’s journey is different. Many students notice significant improvements within the first 1–2 weeks of consistent practice. If you follow the steps and stay committed, you\’ll continue to see real progress and long-lasting results.'
  },
  {
    question: 'What if I don\’t understand something in the course?',
    answer: 'Don\’t worry - you can always ask for help. Our team is here to support you and make sure you clearly understand every step. Just email us at support@kroolla.com, and we\’ll be happy to guide you.'
  },
  {
    question: 'What is your refund policy?',
    answer: 'We offer a 14-day money-back guarantee. If you\’re not satisfied within the first 14 days, simply contact us and you\’ll receive a full refund — no questions asked.'
  },
  {
    question: 'I\’m still concerned. What should I do?',
    answer: 'You can reach our support team anytime at support@kroolla.com. We\’re here to help you with any questions.'
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
          {/* Pill Bar */}
          <motion.div 
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <PillBar
              icon="/images/faq-section-logo.svg"
              text="FAQ"
            />
          </motion.div>

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
