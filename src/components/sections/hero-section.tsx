'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { emailSchema, EmailFormData } from '@/lib/validations'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal'
import { ReviewStrip } from '@/components/ui/review-strip'

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
      <section className="min-h-screen flex items-center bg-primary">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Kroolla Icon */}
              <div className="flex items-center gap-2">
                <Image
                  src="/images/logo.svg"
                  alt="Kroolla logo"
                  width={32} // size icon
                  height={32}
                  priority
                />
                <span className="text-2xl font-bold text-white">Kroolla</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-text-primary leading-tight">
                The Only eBook That Shows You How to{' '}
                <span className="text-accent-yellow">Break the Anxiety Cycle</span>
              </h1>

              <p className="text-xl text-text-secondary leading-relaxed">
                Discover proven techniques to manage anxiety, stop panic attacks, and reclaim your
                peace of mind. Join thousands who have already transformed their lives.
              </p>

              {/* Email Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-1">
                    <input
                      {...register('email')}
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 rounded-button bg-card-background border border-gray-600 text-text-primary placeholder-text-secondary focus:border-accent-yellow focus:outline-none focus:ring-2 focus:ring-accent-yellow focus:ring-opacity-50 mb-1 sm:mb-0"
                    />
                    {errors.email && (
                      <p className="absolute left-0 -bottom-5 text-red-500 text-sm mb-1 sm:mb-0">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    size="md"
                    loading={isSubmitting}
                    className="whitespace-nowrap"
                  >
                    Get your free copy⚡
                  </Button>
                </div>
              </form>

              <ReviewStrip
                className="mt-4 hidden sm:flex"
                rating={4.9}
                avatars={[
                  '/images/avatars/a1.jpg',
                  '/images/avatars/a2.jpg',
                  'SJ',
                  '/images/avatars/a4.png',
                  'AM',
                ]}
              />

              <p className="text-sm text-text-secondary">No spam, ever. Unsubscribe at any time.</p>
            </motion.div>

            {/* App Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative mx-auto max-w-sm">
                {/* Phone mockup */}
                <div className="bg-gray-900 rounded-3xl p-2 shadow-2xl">
                  <div className="bg-card-background rounded-2xl p-4 h-96 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-accent-yellow rounded-full mx-auto flex items-center justify-center">
                        <span className="text-2xl">📱</span>
                      </div>
                      <h3 className="text-text-primary font-semibold">Anxiety Management App</h3>
                      <p className="text-text-secondary text-sm">Your personal guide to calm</p>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-4 -right-4 bg-accent-green text-white p-3 rounded-full shadow-lg"
                >
                  ✓
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-4 -left-4 bg-accent-purple text-white p-3 rounded-full shadow-lg"
                >
                  💚
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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
