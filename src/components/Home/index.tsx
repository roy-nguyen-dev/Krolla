import React from 'react'
import { HeroSection } from './hero-section'
import { TestimonialsSection } from './testimonials-section'
import { LearnSection } from './learn-section'
import { SocialProofSection } from './social-proof-section'
import { PricingSection } from './pricing-section'
import { ContactSection } from './contact-section'
import { ProofSection } from './proof-section'

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TestimonialsSection />
      <LearnSection />
      {/* <SocialProofSection /> */}
      <ProofSection />
      <PricingSection />
      {/* <FinalCtaSection /> */}
      <ContactSection />
    </div>
  )
}

export default Home
