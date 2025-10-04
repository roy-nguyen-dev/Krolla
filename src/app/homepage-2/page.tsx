'use client'

import React from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})
import { Homepage2Header } from '@/components/homepage2/Homepage2Header'
import { HeroSection } from '@/components/homepage2/HeroSection'
import { InitialTestimonialsSection } from '@/components/homepage2/InitialTestimonialsSection'
import { LearnSection } from '@/components/homepage2/LearnSection'
import { CoursePreviewSection } from '@/components/homepage2/CoursePreviewSection'
import { SocialTestimonialsSection } from '@/components/homepage2/SocialTestimonialsSection'
import { AuthorSection } from '@/components/homepage2/AuthorSection'
import { CoachingSection } from '@/components/homepage2/CoachingSection'
import { HowItWorksSection } from '@/components/homepage2/HowItWorksSection'
import { AddOnsSection } from '@/components/homepage2/AddOnsSection'
import { CommunityCTASection } from '@/components/homepage2/CommunityCTASection'
import { FAQSection } from '@/components/homepage2/FAQSection'
import { Homepage2Footer } from '@/components/homepage2/Homepage2Footer'

export default function Homepage2() {
  return (
    <main className={`min-h-screen bg-white ${inter.variable} font-sans`}>
      <Homepage2Header />
      <HeroSection />
      <InitialTestimonialsSection />
      <LearnSection />
      <CoursePreviewSection />
      <SocialTestimonialsSection />
      <AuthorSection />
      <CoachingSection />
      <AddOnsSection />
      <HowItWorksSection />
      <FAQSection />
      <CommunityCTASection />
      {/* <Homepage2Footer /> */}
    </main>
  )
}


