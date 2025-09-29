import React from 'react'
import { HeroSection } from './hero-section'
import { TestimonialsSection } from './testimonials-section'
import { LearnSection } from './learn-section'
import { SocialProofSection } from './social-proof-section'
import { PricingSection } from './pricing-section'
import { LetterSection } from './letter-section'
import { ContactSection } from './contact-section'

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TestimonialsSection />
      <LearnSection />
      <SocialProofSection />
      <PricingSection />
      <LetterSection />
      {/* <FinalCtaSection /> */}
      <ContactSection />
    </div>
  )
}

export default Home
