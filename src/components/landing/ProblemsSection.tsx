'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionContainer } from '@/components/ui/section-container'
import ProblemCard from '../ui/problem-card'

const problems = [
  {
    icon: '😰',
    title: 'Constant Panic Attacks',
    description: 'Sudden, overwhelming fear that strikes without warning, leaving you feeling helpless and out of control.'
  },
  {
    icon: '💭',
    title: 'Endless Worry & Overthinking',
    description: 'Your mind races with catastrophic thoughts, making it impossible to focus or find peace.'
  },
  {
    icon: '😴',
    title: 'Sleep Disturbances',
    description: 'Anxiety keeps you awake at night, creating a cycle of exhaustion that makes everything worse.'
  },
  {
    icon: '🔄',
    title: 'The Vicious Cycle',
    description: 'You feel better for a while, but panic always comes back, trapping you in an endless loop.'
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
