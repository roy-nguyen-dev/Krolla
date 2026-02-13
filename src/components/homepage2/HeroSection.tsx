'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { emailSchema, EmailFormData } from '@/lib/validations'
import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal'
import { SectionContainer } from '@/components/ui/section-container'
import Carousel from '@/components/ui/carousel'
import { useIsMobile } from '@/hooks/useIsMobile'
import type { HeroContent } from '@/lib/content'

interface Props {
  content: HeroContent
}

export const HeroSection: React.FC<Props> = ({ content }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalType, setModalType] = useState<'success' | 'error'>('success')
  const [modalMessage, setModalMessage] = useState('')
  const isMobile = useIsMobile()

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
      <SectionContainer id="hero" className="py-4 bg-white">
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
              {content.badgeText}
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-black leading-tight mb-6 text-[36px] md:text-[46.5px] md:leading-[57.6px]"
            style={{
              fontWeight: 900
            }}
          >
            {content.headlineLine1}
            <br />
            <span className="italic">{content.headlineLine2}</span>
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
            <div className="flex flex-col md:flex-row gap-3">
              <div className="relative flex-1">
                <input
                  {...register('email')}
                  type="email"
                  placeholder={content.emailPlaceholder}
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
                {content.buttonText}
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
                <span className="font-bold">{content.ratingScore}</span> {content.ratingText}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Testimonials */}
        <div className="max-w-7xl mx-auto">
          {isMobile ? (
            // MOBILE: Carousel auto-play
            <Carousel
              key="mobile-carousel"
              className="py-2"
              spacing={20}
              perView={{ base: 1 }}
              autoplayMs={2300}
              autoplayDurationMs={500}
              autoplayIgnoreReducedMotion
              autoplayEasing={(t) => 1 - Math.pow(1 - t, 3)}
              mode="free-snap"
              loop={false}
              pingpong={true}
            >
              {content.testimonials.map((testimonial, i) => (
                <div key={i} className="px-1">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
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
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>

                    {/* Rating */}
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <img key={i} src="/images/star.svg" alt="Star" className="w-6 h-5" />
                      ))}
                    </div>
                  </motion.div>
                </div>
              ))}
            </Carousel>
          ) : (
            // DESKTOP: Grid static
            <div key="desktop-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {content.testimonials.map((testimonial, index) => (
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
                    &ldquo;{testimonial.quote}&rdquo;
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
          )}
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
