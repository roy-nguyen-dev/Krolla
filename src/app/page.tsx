import React from 'react'
import { HeroSection } from '@/components/sections/hero-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { LearnSection } from '@/components/sections/learn-section'
import { SocialProofSection } from '@/components/sections/social-proof-section'
import { PricingSection } from '@/components/sections/pricing-section'
import { FinalCtaSection } from '@/components/sections/final-cta-section'
import { ContactSection } from '@/components/sections/contact-section'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TestimonialsSection />
      <LearnSection />
      <SocialProofSection />
      <PricingSection />
      <FinalCtaSection />
      <ContactSection />
    </main>
  )
}
