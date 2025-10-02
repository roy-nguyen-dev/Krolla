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
    avatar: "https://ui-avatars.com/api/?name=Lora+Smity&background=000000&color=ffffff",
    quote: "Before this course, panic attacks controlled my life. Now I finally understand my body and mind. The step-by-step lessons gave me peace I never thought possible."
  },
  {
    name: "Clara",
    handle: "@claranow",
    avatar: "https://ui-avatars.com/api/?name=Clara&background=000000&color=ffffff",
    quote: "Best investment I've made for my mental health. Affordable, easy to follow, and more effective than months of searching online tips."
  },
  {
    name: "Lisa Lo",
    handle: "@styledoss",
    avatar: "https://ui-avatars.com/api/?name=Lisa+Lo&background=000000&color=ffffff",
    quote: "After 5 years of anxiety, I felt hopeless. This course gave me clarity and tools."
  },
  {
    name: "Danko",
    handle: "@itsdanko",
    avatar: "https://ui-avatars.com/api/?name=Danko&background=000000&color=ffffff",
    quote: "Listening every day changed everything. The audio feels like a friend guiding me out of the anxiety loop. I sleep again, and my mind is calm."
  },
  {
    name: "Tobi Kees",
    handle: "@heytobi",
    avatar: "https://ui-avatars.com/api/?name=Tobi+Kees&background=000000&color=ffffff",
    quote: "I'll always be thankful for Mike and his course. It was like having a personal mentor who truly cared about my healing."
  },
  {
    name: "Parker",
    handle: "@designjust",
    avatar: "https://ui-avatars.com/api/?name=Parker&background=000000&color=ffffff",
    quote: "I can't thank you enough, Mike. You didn't make me feel broken you made me feel understood. That changed everything."
  },
  {
    name: "Mila So.",
    handle: "@milahere",
    avatar: "https://ui-avatars.com/api/?name=Mila+So&background=000000&color=ffffff",
    quote: "I cried because my life finally feels normal again. I wish I had found Mike's course earlier it taught me how to overcome panic attacks."
  },
  {
    name: "Franka",
    handle: "@workdes",
    avatar: "https://ui-avatars.com/api/?name=Franka&background=000000&color=ffffff",
    quote: "What makes this course so special is not only Mike's wisdom but also the community he built."
  },
  {
    name: "Mino Mi",
    handle: "@minomimi",
    avatar: "https://ui-avatars.com/api/?name=Mino+Mi&background=000000&color=ffffff",
    quote: "The course gave me tools, and the community gave me hope. Thank you Mike for creating a place where healing truly happens."
  }
]

export const SocialTestimonialsSection: React.FC = () => {
  return (
    <SectionContainer className="py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Real voices Real recovery
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              {/* Header */}
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-3"
                />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                  <p className="text-gray-500 text-xs">{testimonial.handle}</p>
                </div>
              </div>

              {/* Quote */}
              <p className="text-gray-700 text-sm leading-relaxed">
                {testimonial.quote}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}


