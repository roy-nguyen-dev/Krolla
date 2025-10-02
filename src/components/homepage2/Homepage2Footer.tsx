'use client'

import React from 'react'
import { SectionContainer } from '@/components/ui/section-container'
import { Button } from '@/components/ui/button'

export const Homepage2Footer: React.FC = () => {
  const navigationColumns = [
    {
      title: "Link",
      links: ["Course", "About me", "Support", "Blog"]
    },
    {
      title: "Legal",
      links: ["Terms of services", "Privacy policy", "Disclaimer"]
    }
  ]

  return (
    <footer className="bg-black text-white">
      <SectionContainer className="py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-sm">K</span>
                </div>
                <span className="text-2xl font-bold text-white">Kroolla</span>
              </div>
              <p className="text-gray-300 leading-relaxed max-w-md">
                I help people overcome anxiety and panic attacks through mindfulness, CBT, and lifestyle transformation.
              </p>
            </div>

            {/* Navigation Columns */}
            {navigationColumns.map((column, index) => (
              <div key={index}>
                <h3 className="font-semibold text-white mb-4">{column.title}</h3>
                <ul className="space-y-3">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white transition-colors duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <p className="text-gray-400 text-sm">
                  © Copyright @2025 All rights reserved
                </p>
                <div className="flex items-center gap-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    Refund Policy
                  </a>
                </div>
              </div>
              
              <Button
                size="sm"
                className="bg-white text-black hover:bg-gray-100"
              >
                Join Us
              </Button>
            </div>
          </div>
        </div>
      </SectionContainer>
    </footer>
  )
}
