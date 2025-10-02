'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionContainer } from '@/components/ui/section-container'
import { FileText, BarChart3, Package } from 'lucide-react'

interface ProcessStep {
  icon: React.ReactNode
  title: string
  description: string
  stepNumber: number
}

const processSteps: ProcessStep[] = [
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Share Your Data",
    description: "We collect your details and context to get a clear picture",
    stepNumber: 1
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Smart Analysis",
    description: "We break down your info to design a personalized roadmap",
    stepNumber: 2
  },
  {
    icon: <Package className="w-8 h-8" />,
    title: "Tailored Delivery",
    description: "We deliver your full roadmap with everything you need to start your recovery",
    stepNumber: 3
  }
]

export const HowItWorksSection: React.FC = () => {
  return (
    <SectionContainer className="py-20 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How It Works?
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.stepNumber}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              {/* Step Number */}
              <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                {step.stepNumber}
              </div>

              {/* Icon */}
              <div className="text-white mb-4 flex justify-center">
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-4">
                {step.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}


