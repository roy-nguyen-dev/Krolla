'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionContainer } from '@/components/ui/section-container'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export const CommunityCTASection: React.FC = () => {
  return (
    <SectionContainer id="community" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-lg p-8 relative overflow-hidden" style={{ backgroundColor: '#F3F3F3' }}>
          {/* Background SVG Layer */}
          <Image
            src="/images/community-book-layer.svg"
            alt="Community book layer background"
            fill
            className="absolute inset-0 object-cover opacity-80"
          />
          <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Community Logo */}
          <div className="flex justify-center mb-8">
            <Image
              src="/images/community-logo.png"
              alt="Community Logo"
              width={108}
              height={92}
              className="object-contain"
            />
          </div>

          {/* Content */}
          <div className="flex justify-center ">
            {/* Text content block */}
            <div className="w-fit relative">
              <div className="w-fit">

                <h2 className="font-bold text-black mb-4" style={{ fontSize: '31.25px' }}>
                  Let us help you
                </h2>
                <p className="text-gray-600 text-sm md:text-base" style={{ fontSize: '16.45px' }}>
                  A kind community that understands and stands by you.
                </p>
              </div>
              <div className="absolute top-0 right-0 h-full md:flex items-center hidden" style={{ right: '-69px' }}>
                <Image
                  src="/images/add-on-nail.svg"
                  alt="Add-on nail icon"
                  width={69}
                  height={69}
                  className="w-30 h-30 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Mobile nail icon - positioned below text, above button */}
          <div className="flex justify-center mt-4 mb-4 md:hidden">
            <Image
              src="/images/add-on-nail.svg"
              alt="Add-on nail icon"
              width={69}
              height={69}
              className="w-30 h-30 object-contain"
            />
          </div>

          {/* CTA Button */}
          <Button
            size="lg"
            className="bg-black text-white hover:bg-gray-800 px-8 py-4"
          >
            Join Community
          </Button>
        </motion.div>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}


