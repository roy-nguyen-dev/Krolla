'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionContainer } from '@/components/ui/section-container'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export const AuthorSection: React.FC = () => {
  const router = useRouter()

  const handleRedirectTo = (href: string) => {
    router.push(href)
  }

  return (
    <SectionContainer className="py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-lg p-8" style={{ backgroundColor: '#F3F3F3' }}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src="/images/michael-avatar.svg"
              alt="Michael - Anxiety Recovery Expert"
              className="w-80 h-80 object-cover rounded-lg"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black">
              Hey, I'm Michael.
            </h2>
            
            <p className="text-xl text-gray-600 font-medium">
              Self recovery from anxiety without medication
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              I help people overcome anxiety and panic attacks through mindfulness, CBT, and lifestyle transformation.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => handleRedirectTo('/landing-page')}
                className="bg-black text-white hover:bg-gray-800 px-8 py-2"
              >
                Break the Cycle
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-black text-black hover:bg-gray-50 px-8 py-2"
              >
                View blogs
              </Button>
            </div>
          </motion.div>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}


