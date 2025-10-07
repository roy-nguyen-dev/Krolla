'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { emailSchema, EmailFormData } from '@/lib/validations'
import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal'
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
    name: 'Blake Beus',
    ageContext: '32, insomnia & anxiety 6 years',
    avatar: '/images/rating-avatar5.png',
    quote:
      "I've been stuck with anxiety disorder for 7 years, and after finishing this book, I feel like I've almost gotten my life back. No words can truly express my gratitude.",
    rating: 5,
  },
  {
    name: 'Qwantel Latay',
    ageContext: '21, panic attacks 2 years',
    avatar: '/images/rating-avatar6.png',
    quote:
      "This book didn't just give me knowledge it gave me peace. My anxiety no longer controls every part of my life.",
    rating: 5,
  },
  {
    name: 'Dave Baxter',
    ageContext: '30, trapped in endless worry',
    avatar: '/images/rating-avatar7.png',
    quote:
      "I've been through countless therapies and self-help guides, but this book finally made me feel understood and guided. Truly life-changing.",
    rating: 5,
  },
  {
    name: 'Dave Baxter',
    ageContext: "28, thought I'd never escape",
    avatar: '/images/rating-avatar7.png',
    quote:
      'Living with anxiety for so long felt endless. This book gave me tools, hope, and strength to believe I can heal.',
    rating: 5,
  },
]

export const HeroSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalType, setModalType] = useState<'success' | 'error'>('success')
  const [modalMessage, setModalMessage] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
  })

  const onSubmit = async (data: EmailFormData) => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (result.success) {
        setModalType('success')
        setModalMessage('Thank you! Your free eBook has been sent to your email address.')
        setIsModalOpen(true)
        reset()
      } else {
        throw new Error(result.message)
      }
    } catch (error) {
      setModalType('error')
      setModalMessage('Something went wrong. Please try again.')
      setIsModalOpen(true)
    }
  }

  return (
    <>
      <SectionContainer id="hero" className="py-20 bg-white">
        <div
          className="max-w-4xl mx-auto text-center relative min-h-[300px] md:min-h-[400px] pt-10 pb-10 md:pt-20 md:pb-20"
          style={{
            backgroundImage: 'url(/images/hero-background.svg)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
          }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-1.5 py-1.5 rounded-lg border border-dashed border-black bg-white mb-8"
          >
            <div className="w-full bg-black text-white px-6 py-0.5 rounded-lg font-medium italic text-xl">
              Only 8 Copies Left
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-black leading-tight mb-6"
            style={{
              fontWeight: 900,
              fontSize: '46.5px',
              lineHeight: '57.6px',
            }}
          >
            The Only Book To
            <br />
            <span className="italic text-gray-600">Break The Anxiety Loop</span>
          </motion.h1>

          {/* Email Form */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-lg mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            noValidate
          >
            <div className="flex gap-3">
              <div className="relative flex-1">
                <input
                  {...register('email')}
                  type="email"
                  placeholder="email@gmail.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 bg-gray-100"
                />
                {errors.email && (
                  <p className="absolute left-0 -bottom-6 text-red-500 text-sm">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <Button
                type="submit"
                size="lg"
                loading={isSubmitting}
                className="whitespace-nowrap bg-black text-white hover:bg-gray-800 px-6 py-3 rounded-lg"
              >
                Get Your Free Book
              </Button>
            </div>
          </motion.form>

          {/* Rating */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center justify-center gap-4"
          >
            {/* Avatars */}
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((num) => (
                <img
                  key={num}
                  src={`/images/rating-avatar${num}.png`}
                  alt={`Avatar ${num}`}
                  className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                  style={{ zIndex: 6 - num }}
                />
              ))}
            </div>

            {/* Stars and Rating Text */}
            <div className="flex flex-col items-start gap-1">
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <img key={i} src="/images/star.svg" alt="Star" className="w-6 h-5" />
                ))}
              </div>

              {/* Rating Text */}
              <span className="text-sm text-black">
                <span className="font-bold">4.9/5</span> based on reviews
              </span>
            </div>
          </motion.div>
        </div>
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
                    <img key={i} src="/images/star.svg" alt="Star" className="w-6 h-5" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* Success/Error Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalType === 'success' ? 'Success!' : 'Error'}
        message={modalMessage}
        type={modalType}
      />
    </>
  )
}
