'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionContainer } from '@/components/ui/section-container'
import { Button } from '@/components/ui/button'
import PillBar from '../ui/pill-bar'
import Image from 'next/image'

export default function MethodSection() {
  const [expandedModules, setExpandedModules] = useState<Set<number>>(new Set())

  const modules = [
    { id: 1, title: "Module 1: Getting Started" },
    { id: 2, title: "Module 2: Fundamentals" },
    { id: 3, title: "Module 3: Styleguide" },
    { id: 4, title: "Module 4: Structure & Layout" },
    { id: 5, title: "Module 5: Responsiveness" },
    { id: 6, title: "Module 6: Components" },
    { id: 7, title: "Module 7: Animations" },
    { id: 8, title: "Module 8: CMS" },
  ]

  const toggleModule = (moduleId: number) => {
    const newExpanded = new Set(expandedModules)
    if (newExpanded.has(moduleId)) {
      newExpanded.delete(moduleId)
    } else {
      newExpanded.add(moduleId)
    }
    setExpandedModules(newExpanded)
  }

  return (
    <SectionContainer id="method" className="py-20">
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
              icon="/images/method-section-logo.svg"
              text="Solution"
            />
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Break the Loop, Step by Step
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Our proven 14-day program combines evidence-based techniques to help you break free from anxiety permanently.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Table of Contents */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-card-background rounded-2xl border border-white/10 p-6">
              <h3 className="text-xl font-semibold text-white mb-6">Course Contents</h3>
              <div className="space-y-2">
                {modules.map((module, index) => (
                  <motion.div
                    key={module.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="border border-white/10 rounded-lg overflow-hidden"
                  >
                    {/* Module Header */}
                    <button
                      onClick={() => toggleModule(module.id)}
                      className="w-full flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 transition-colors duration-200"
                    >
                      <span className="text-white font-medium text-left">{module.title}</span>
                      <motion.div
                        animate={{ rotate: expandedModules.has(module.id) ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <svg
                          className="w-5 h-5 text-accent-yellow"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.div>
                    </button>

                    {/* Module Parts */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: expandedModules.has(module.id) ? 'auto' : 0,
                        opacity: expandedModules.has(module.id) ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 pt-0 space-y-2">
                        {[1, 2, 3, 4, 5].map((part) => (
                          <div
                            key={part}
                            className="flex items-center gap-3 p-3 bg-white/5 rounded-md hover:bg-white/10 transition-colors duration-200 cursor-pointer"
                          >
                            <div className="w-2 h-2 rounded-full bg-accent-yellow/60"></div>
                            <span className="text-text-secondary text-sm">
                              Part {part}: Placeholder content for part {part}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Pricing Card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-card-background rounded-2xl border border-accent-yellow/30 p-8 shadow-lg shadow-accent-yellow/10 hover:shadow-xl hover:shadow-accent-yellow/20 transition-all duration-300">
              {/* Learn Section Image */}
              <div className="mb-8">
                <Image
                  src="/images/learn-section.png"
                  alt="Learn Section"
                  width={400}
                  height={200}
                  className="w-full h-auto rounded-lg"
                />
              </div>

              {/* Pricing Header */}
              <div className="text-center mb-8">
                <div className="text-4xl font-bold text-white mb-2">
                  $249
                </div>
                <div className="text-text-secondary">One-time payment</div>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent-yellow flex items-center justify-center">
                    <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white">Save years of struggle</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent-yellow flex items-center justify-center">
                    <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white">Save thousands in medical costs</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent-yellow flex items-center justify-center">
                    <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white">Step-by-step guide to heal from the root</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent-yellow flex items-center justify-center">
                    <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white">Lifetime access, free updates</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent-yellow flex items-center justify-center">
                    <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white">14-day money-back guarantee</span>
                </div>
              </div>

              {/* CTA Button */}
              <Button
                variant="primary"
                size="lg"
                className="w-full text-lg py-4 flex items-center justify-center gap-2"
              >
                Break the cycle
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>

              {/* Payment Options */}
              <motion.div
                className="mt-4 flex justify-center gap-2 text-sm text-text-secondary"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 }}
              >
                <Image
                  src="/images/present-box.svg"
                  alt="Present box"
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
                <span>14-day money-back guarantee</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  )
}
