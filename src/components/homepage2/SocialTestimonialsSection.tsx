'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionContainer } from '@/components/ui/section-container'

interface SocialTestimonial {
  name: string
  handle: string
  avatar: string
  quote: string
}

const socialTestimonials: SocialTestimonial[] = [
  {
    name: "Lora Smity",
    handle: "@lorasmity",
    avatar: "/images/review-avatar1.png",
    quote: "Before this course, panic attacks controlled my life. Now I finally understand my body and mind. The step-by-step lessons gave me peace I never thought possible."
  },
  {
    name: "Danko",
    handle: "@itsdanko",
    avatar: "/images/review-avatar2.png",
    quote: "Listening every day changed everything. The audio feels like a friend guiding me out of the anxiety loop. I sleep again, and my mind is calm."
  },
  {
    name: "Mila So.",
    handle: "@milahere",
    avatar: "/images/review-avatar3.png",
    quote: "I cried because my life finally feels normal again. I wish I had found Mike's course earlier it taught me how to overcome panic attacks."
  },
  {
    name: "Clara",
    handle: "@claranow",
    avatar: "/images/review-avatar4.png",
    quote: "Best investment I've made for my mental health. Affordable, easy to follow, and more effective than months of searching online tips."
  },
  {
    name: "Tobi Kees",
    handle: "@heytobi",
    avatar: "/images/review-avatar5.png",
    quote: "I'll always be thankful for Mike and his course. It was like having a personal mentor who truly cared about my healing."
  },
  {
    name: "Franka",
    handle: "@workdes",
    avatar: "/images/review-avatar6.png",
    quote: "What makes this course so special is not only Mike's wisdom but also the community he built."
  },
  {
    name: "Lisa Lo",
    handle: "@styledoss",
    avatar: "/images/review-avatar7.png",
    quote: "After 5 years of anxiety, I felt hopeless. This course gave me clarity and tools."
  },
  {
    name: "Parker",
    handle: "@designjust",
    avatar: "/images/review-avatar8.png",
    quote: "I can't thank you enough, Mike. You didn't make me feel broken you made me feel understood. That changed everything."
  },
  {
    name: "Mino Mi",
    handle: "@minomimi",
    avatar: "/images/review-avatar9.png",
    quote: "The course gave me tools, and the community gave me hope. Thank you Mike for creating a place where healing truly happens."
  }
]

export const SocialTestimonialsSection: React.FC = () => {
  return (
    <SectionContainer className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-2">
            Because result matter
          </h2>
          <p className="text-lg sm:text-xl text-gray-500">
            Real voices - Real recovery
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {socialTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-xl lg:rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              {/* Profile Section */}
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 lg:w-14 lg:h-14 rounded-full object-cover"
                />
                <div>
                  <p className="text-base lg:text-lg font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.handle}</p>
                </div>
              </div>

              {/* Quote */}
              <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                {testimonial.quote}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}


