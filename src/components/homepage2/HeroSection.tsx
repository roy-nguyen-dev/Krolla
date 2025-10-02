'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { emailSchema, EmailFormData } from '@/lib/validations'
import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal'
import { SectionContainer } from '@/components/ui/section-container'

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
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-red-50 text-red-700 text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
            Free Only 8 Copies Left
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-tight mb-6"
          >
            The Only Book To{' '}
            <span className="text-gray-600">Break The Anxiety Loop</span>
          </motion.h1>

          {/* Rating */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-2 mb-8"
          >
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-gray-600">4.9/5 based on reviews</span>
          </motion.div>

          {/* Email Form */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-md mx-auto space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <input
                  {...register('email')}
                  type="email"
                  placeholder="email@gmail.com"
                  className="w-full px-4 py-4 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
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
                className="whitespace-nowrap bg-black text-white hover:bg-gray-800 px-8 py-4"
              >
                Get Your Free Book
              </Button>
            </div>
          </motion.form>
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


