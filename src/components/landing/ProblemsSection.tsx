'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionContainer } from '@/components/ui/section-container'
import ProblemCard from '../ui/problem-card'
import PillBar from '../ui/pill-bar'

const problems = [
  {
    icon: '/images/problem-card1.png',
    title: 'Panic Attacks',
    description: 'Heart racing, chest tightness, overwhelming fear — even when nothing is actually wrong.'
  },
  {
    icon: '/images/problem-card2.png',
    title: 'Sleepless Nights',
    description: 'Eyes closed but the mind won\'t stop — worry keeps replaying and sleep never comes.'
  },
  {
    icon: '/images/problem-card3.png',
    title: 'Fear of Losing Control',
    description: 'Avoiding travel, social events, or work, afraid panic might hit without warning.'
  },
  {
    icon: '/images/problem-card4.png',
    title: 'Body in Distress',
    description: 'Dizziness, headaches, chest tightness, shortness of breath — symptoms so real you fear something serious'
  }
]

export default function ProblemsSection() {
  return (
    <SectionContainer id="problems" className="py-20">
      <div className="max-w-6xl mx-auto">
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
              icon="/images/problem-section-icon.svg"
              text="Your Daily Challenges"
            />
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Struggling with these?
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            You're not alone. These are the most common anxiety challenges that keep people trapped in fear and worry.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProblemCard
                icon={problem.icon}
                title={problem.title}
                description={problem.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}
