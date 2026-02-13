import React from 'react'
import { Inter } from 'next/font/google'
import { getContent } from '@/lib/content'
import { Homepage2Header } from '@/components/homepage2/Homepage2Header'
import { HeroSection } from '@/components/homepage2/HeroSection'
import { CoursePreviewSection } from '@/components/homepage2/CoursePreviewSection'
import { SocialTestimonialsSection } from '@/components/homepage2/SocialTestimonialsSection'
import { AuthorSection } from '@/components/homepage2/AuthorSection'
import { CoachingSection } from '@/components/homepage2/CoachingSection'
import { HowItWorksSection } from '@/components/homepage2/HowItWorksSection'
import { FAQSection } from '@/components/homepage2/FAQSection'
import { CommunityCTASection } from '@/components/homepage2/CommunityCTASection'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const dynamic = 'force-dynamic'

export default async function Homepage2() {
  const content = await getContent()

  return (
    <main className={`min-h-screen bg-white ${inter.variable} font-sans`}>
      <Homepage2Header content={content.header} />
      <HeroSection content={content.hero} />
      <CoursePreviewSection content={content.coursePreview} />
      <SocialTestimonialsSection content={content.socialTestimonials} />
      <AuthorSection content={content.author} />
      <CoachingSection content={content.coaching} />
      <HowItWorksSection content={content.howItWorks} />
      <FAQSection content={content.faq} />
      <CommunityCTASection content={content.communityCTA} />
    </main>
  )
}
