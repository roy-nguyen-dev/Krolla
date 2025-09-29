'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionContainer } from '@/components/ui/section-container'
import VideoTestimonialCard from '../ui/video-testimonial-card'
import PillBar from '../ui/pill-bar'

const videoTestimonials = [
  {
    thumbnail: '/images/testimonial-1.jpg',
    name: 'Harsh Patel',
    title: 'Founder at Macro',
    videoUrl: 'https://fsprniodoyeqkihv.public.blob.vercel-storage.com/testimonials1.mov',
    hasVideo: true
  },
  {
    thumbnail: '/images/testimonial-2.jpg',
    name: 'Andy Zhang',
    title: 'Co-Founder & CTO at Tower YC W24',
    videoUrl: 'https://fsprniodoyeqkihv.public.blob.vercel-storage.com/testimonials2.mov',
    hasVideo: true
  },
  {
    thumbnail: '/images/testimonial-3.jpg',
    name: 'Brandon Turp',
    title: 'Founder at Nextlayer',
    videoUrl: 'https://fsprniodoyeqkihv.public.blob.vercel-storage.com/testimonials3.mov',
    hasVideo: true
  },
  {
    thumbnail: '/images/testimonial-4.jpg',
    name: 'Drew',
    title: 'Founder Anabolic Insights',
    hasVideo: false
  },
  {
    thumbnail: '/images/testimonial-5.jpg',
    name: 'Jules Ioannidis',
    title: 'Co-founder at Gracenote',
    hasVideo: false
  },
  {
    thumbnail: '/images/testimonial-6.jpg',
    name: 'Carson Suite',
    title: 'Founder at InvolvChat',
    hasVideo: false
  }
]

export default function VideoTestimonialsSection() {
  return (
    <SectionContainer id="results" className="py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Pill Bar */}
          <motion.div 
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <PillBar
              icon="/images/video-testimo-logo.svg"
              text="Real Voices, Real Recovery"
            />
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Because <span className="text-accent-yellow">Results Matter</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            See how our program has helped real people break free from anxiety and reclaim their lives.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <VideoTestimonialCard
                thumbnail={testimonial.thumbnail}
                name={testimonial.name}
                title={testimonial.title}
                videoUrl={testimonial.videoUrl}
                hasVideo={testimonial.hasVideo}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}
