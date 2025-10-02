'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionContainer } from '@/components/ui/section-container'
import { Headphones, Calendar, Search } from 'lucide-react'

interface AddOn {
  price: string
  name: string
  description: string
  icon: React.ReactNode
}

const addOns: AddOn[] = [
  {
    price: "$47",
    name: "Priority Support",
    description: "Think you're losing control? Get fast, dedicated help with our Priority Support.",
    icon: <Headphones className="w-6 h-6" />
  },
  {
    price: "$97",
    name: "3 Months Support",
    description: "Help you build new habits, mindset, and daily practices in 3 months.",
    icon: <Calendar className="w-6 h-6" />
  },
  {
    price: "$127",
    name: "Deep Analysis",
    description: "We explore your past traumas and childhood memories to heal from the root.",
    icon: <Search className="w-6 h-6" />
  }
]

export const AddOnsSection: React.FC = () => {
  return (
    <SectionContainer className="py-20 bg-gray-50">
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
            Add-ons
          </h2>
        </motion.div>

        {/* Add-ons Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {addOns.map((addOn, index) => (
            <motion.div
              key={addOn.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              {/* Price */}
              <div className="text-3xl font-bold text-black mb-2">
                {addOn.price}
              </div>

              {/* Icon */}
              <div className="text-black mb-4">
                {addOn.icon}
              </div>

              {/* Name */}
              <h3 className="text-xl font-semibold text-black mb-3">
                {addOn.name}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {addOn.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}


