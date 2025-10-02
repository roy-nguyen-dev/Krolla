'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionContainer } from '@/components/ui/section-container'

interface Testimonial {
  name: string
  ageContext: string
  avatar: string
  quote: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    name: "Dave Baxter",
    ageContext: "30, trapped in endless worry",
    avatar: "https://ui-avatars.com/api/?name=Dave+Baxter&background=000000&color=ffffff",
    quote: "I've been through countless therapies and self-help guides, but this book finally made me feel understood and guided. Truly life-changing.",
    rating: 5
  },
  {
    name: "Dave Baxter",
    ageContext: "28, thought I'd never escape",
    avatar: "https://ui-avatars.com/api/?name=Dave+Baxter&background=000000&color=ffffff",
    quote: "Living with anxiety for so long felt endless. This book gave me tools, hope, and strength to believe I can heal.",
    rating: 5
  },
  {
    name: "Qwantel Latay",
    ageContext: "21, panic attacks 2 years",
    avatar: "https://ui-avatars.com/api/?name=Qwantel+Latay&background=000000&color=ffffff",
    quote: "This book didn't just give me knowledge it gave me peace. My anxiety no longer controls every part of my life.",
    rating: 5
  },
  {
    name: "Blake Beus",
    ageContext: "32, insomnia & anxiety 6 years",
    avatar: "https://ui-avatars.com/api/?name=Blake+Beus&background=000000&color=ffffff",
    quote: "I've been stuck with anxiety disorder for 7 years, and after finishing this book, I feel like I've almost gotten my life back. No words can truly express my gratitude.",
    rating: 5
  }
]

export const InitialTestimonialsSection: React.FC = () => {
  return (
    <SectionContainer className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              {/* Rating */}
              <div className="flex text-yellow-400 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                  <p className="text-gray-500 text-xs">{testimonial.ageContext}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}
