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
import { SectionContainer } from '../ui/section-container'

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
      <SectionContainer className="flex items-center bg-primary">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h1 className="text-4xl md:text-4xl font-bold text-text-primary leading-tight">
                The Only eBook That Shows You How to{' '}
                <span className="text-accent-yellow">Break the Anxiety Cycle</span>
              </h1>

              <p className="text-l text-text-secondary leading-relaxed">
                Learn how to stop panic attacks, calm anxiety symptoms like dizziness and chest
                tightness, and finally take back control of your life.
              </p>

              {/* Email Form */}
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
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
                    Get your free copy
                  </Button>
                </div>
              </form>

              <ReviewStrip
                className="mt-4 hidden sm:flex"
                rating={4.9}
                avatars={['AA', 'BB', 'SJ', 'CC', 'AM']}
              />
            </motion.div>

            {/* Hero Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden md:flex justify-center md:justify-end"
            >
              <div className="relative aspect-[5/7] w-[82%] max-w-[560px] lg:max-w-[640px] xl:max-w-[720px] translate-x-2 md:translate-x-4">
                <div
                  className="pointer-events-none absolute -z-10 -inset-x-8 bottom-[-10%] h-[72%] 
                    rounded-full bg-black/50 blur-[90px]"
                />

                <div
                  className="pointer-events-none select-none absolute -left-10 sm:-left-12 md:-left-16 lg:-left-20 
                    -top-6 sm:-top-7 md:-top-8 text-accent-yellow 
                    text-[12px] sm:text-sm font-medium leading-tight hidden sm:flex flex-col items-start"
                >
                  <span className="translate-x-[-5rem] sm:translate-y-44 mt-1 text-base">
                    Written by someone who lived it
                  </span>
                  <Image
                    src="/images/Vector.svg"
                    alt=""
                    width={64}
                    height={64}
                    // priority
                    className="-rotate-12 translate-x-1 sm:translate-y-44 mt-1"
                  />
                </div>

                <Image
                  src="/images/header-image.png"
                  alt="Book cover mockup for The Other Side of Anxiety"
                  priority
                  width={406}
                  height={634}
                />
              </div>
            </motion.div>
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
