'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionContainer } from '@/components/ui/section-container'
import { Headphones, Calendar, Search } from 'lucide-react'
import Image from 'next/image'

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
    <SectionContainer className="pt-10 pb-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left mb-4 pl-6"
        >
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
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
              className="p-6 flex flex-col h-full"
            >
              {/* Price */}
              <div className="text-[25px] font-black text-black mb-4 text-center">
                <div className="w-full bg-gray-100 rounded-[15px] px-4 py-2">
                  {addOn.price}
                </div>
              </div>

              {/* Content with nail icon */}
              <div className="border border-dashed border-gray-300 rounded-lg p-4 flex items-start gap-3 flex-1">
                <div className="flex-shrink-0">
                  <Image
                    src="/images/add-on-nail.svg"
                    alt="Add-on nail"
                    width={47}
                    height={50}
                    className="w-[47px] h-[50px]"
                  />
                </div>
                <div className="flex-1">
                  {/* Name */}
                  <h3 className="text-[25px] font-black text-black mb-3">
                    {addOn.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {addOn.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}


