'use client'

import React from 'react'
import HeroSection from '@/components/landing/HeroSection'
import ProblemsSection from '@/components/landing/ProblemsSection'
import ConceptsSection from '@/components/landing/ConceptsSection'
import MethodSection from '@/components/landing/MethodSection'
import VideoTestimonialsSection from '@/components/landing/VideoTestimonialsSection'
import WrittenTestimonialsSection from '@/components/landing/WrittenTestimonialsSection'
import FAQSection from '@/components/landing/FAQSection'

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-primary">
      <HeroSection />
      <ProblemsSection />
      <ConceptsSection />
      <MethodSection />
      <VideoTestimonialsSection />
      <WrittenTestimonialsSection />
      <FAQSection />
    </main>
  )
}
