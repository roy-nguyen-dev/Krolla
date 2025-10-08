'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionContainer } from '@/components/ui/section-container'

interface ProcessStep {
  title: string
  description: string
}

const processSteps: ProcessStep[] = [
  {
    title: "Share Your Data",
    description: "We collect your details and context to get a clear picture"
  },
  {
    title: "Smart Analysis",
    description: "We break down your info to design a personalized roadmap"
  },
  {
    title: "Tailored Delivery",
    description: "We deliver your full roadmap with everything you need to start your recovery"
  }
]

export const HowItWorksSection: React.FC = () => {
  return (
    <SectionContainer className="py-0 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-lg px-10 py-16" style={{ backgroundColor: '#1f1f1f' }}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              How It Works?
            </h2>
          </motion.div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-left"
              >
                {/* Circle with gradient and dashed line */}
                <div className="flex items-center mb-6">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-gray-400 to-white"></div>
                  <div className="flex-1 h-0 border-t-2 border-white ml-2" style={{ 
                    borderImage: 'url("data:image/svg+xml,%3csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3e%3cdefs%3e%3cpattern id=\'dash\' patternUnits=\'userSpaceOnUse\' width=\'4\' height=\'2\'%3e%3crect width=\'2\' height=\'2\' fill=\'white\'/%3e%3c/pattern%3e%3c/defs%3e%3crect width=\'100\' height=\'2\' fill=\'url(%23dash)\'/%3e%3c/svg%3e") 1',
                    borderImageRepeat: 'repeat'
                  }}></div>
                </div>

                {/* Content */}
                <h3 className="text-[25px] font-black text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}