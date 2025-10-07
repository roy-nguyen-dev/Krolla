'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal'
import { contactFormSchema, ContactFormData } from '@/lib/validations'
import { SectionContainer } from '@/components/ui/section-container'

export const ContactSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalType, setModalType] = useState<'success' | 'error'>('success')
  const [modalMessage, setModalMessage] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setModalType('success')
      setModalMessage("Thank you for your message! We'll get back to you within 24 hours.")
      setIsModalOpen(true)
      reset()
    } catch (error) {
      setModalType('error')
      setModalMessage('Something went wrong. Please try again or email us directly.')
      setIsModalOpen(true)
    }
  }

  return (
    <>
      <SectionContainer>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Get in Touch</h2>
          <p className="text-xl text-text-secondary mb-12">
            Have questions? We're here to help. Send us a message and we'll respond as soon as
            possible.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                  Name
                </label>
                <input
                  {...register('name')}
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-button bg-card-background border border-gray-600 text-text-primary placeholder-text-secondary focus:border-accent-yellow focus:outline-none focus:ring-2 focus:ring-accent-yellow focus:ring-opacity-50"
                  placeholder="Your name"
                />
                {errors.name && <p className="mt-2 text-red-500 text-sm">{errors.name.message}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                  Email
                </label>
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-button bg-card-background border border-gray-600 text-text-primary placeholder-text-secondary focus:border-accent-yellow focus:outline-none focus:ring-2 focus:ring-accent-yellow focus:ring-opacity-50"
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="mt-2 text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                Message
              </label>
              <textarea
                {...register('message')}
                id="message"
                rows={6}
                className="w-full px-4 py-3 rounded-button bg-card-background border border-gray-600 text-text-primary placeholder-text-secondary focus:border-accent-yellow focus:outline-none focus:ring-2 focus:ring-accent-yellow focus:ring-opacity-50 resize-none"
                placeholder="Tell us how we can help you..."
              />
              {errors.message && (
                <p className="mt-2 text-red-500 text-sm">{errors.message.message}</p>
              )}
            </div>

            <Button type="submit" size="lg" loading={isSubmitting} className="w-full md:w-auto">
              Send message
            </Button>
          </form>
        </motion.div>
      </SectionContainer>

      {/* Success/Error Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalType === 'success' ? 'Message Sent!' : 'Error'}
        message={modalMessage}
        type={modalType}
      />
    </>
  )
}
