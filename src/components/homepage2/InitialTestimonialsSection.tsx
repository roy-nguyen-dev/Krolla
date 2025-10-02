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
    name: "Blake Beus",
    ageContext: "32, insomnia & anxiety 6 years",
    avatar: "/images/rating-avatar5.png",
    quote: "I've been stuck with anxiety disorder for 7 years, and after finishing this book, I feel like I've almost gotten my life back. No words can truly express my gratitude.",
    rating: 5
  },
  {
    name: "Qwantel Latay",
    ageContext: "21, panic attacks 2 years",
    avatar: "/images/rating-avatar6.png",
    quote: "This book didn't just give me knowledge it gave me peace. My anxiety no longer controls every part of my life.",
    rating: 5
  },
  {
    name: "Dave Baxter",
    ageContext: "30, trapped in endless worry",
    avatar: "/images/rating-avatar7.png",
    quote: "I've been through countless therapies and self-help guides, but this book finally made me feel understood and guided. Truly life-changing.",
    rating: 5
  },
  {
    name: "Dave Baxter",
    ageContext: "28, thought I'd never escape",
    avatar: "/images/rating-avatar7.png",
    quote: "Living with anxiety for so long felt endless. This book gave me tools, hope, and strength to believe I can heal.",
    rating: 5
  }
]

export const InitialTestimonialsSection: React.FC = () => {
  return (
    <SectionContainer className="py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between h-full"
              style={{ backgroundColor: '#F3F3F3' }}
            >
              {/* Avatar & Name */}
              <div className="flex items-center mb-4">
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

              {/* Quote */}
              <p className="text-gray-700 text-sm leading-relaxed mb-4 flex-grow">
                "{testimonial.quote}"
              </p>

              {/* Rating */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    src="/images/star.svg"
                    alt="Star"
                    className="w-6 h-5"
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}


