// ─── Content Types ───────────────────────────────────────────────

export interface NavItem {
  label: string
  href: string
  section: string
}

export interface HeroTestimonial {
  name: string
  ageContext: string
  avatar: string
  quote: string
  rating: number
}

export interface SocialTestimonial {
  name: string
  handle: string
  avatar: string
  quote: string
}

export interface CoachingPackage {
  name: string
  price: string
  paymentType: string
  features: string[]
  ctaText: string
}

export interface ProcessStep {
  title: string
  description: string
}

export interface FAQItem {
  question: string
  answer: string
  defaultOpen?: boolean
}

export interface AddOn {
  price: string
  name: string
  description: string
}

export interface FooterNavColumn {
  title: string
  links: string[]
}

// ─── Section Content Types ───────────────────────────────────────

export interface HeaderContent {
  logoText: string
  navItems: NavItem[]
  ctaButtonText: string
}

export interface HeroContent {
  badgeText: string
  headlineLine1: string
  headlineLine2: string
  emailPlaceholder: string
  buttonText: string
  ratingScore: string
  ratingText: string
  testimonials: HeroTestimonial[]
}

export interface CoursePreviewContent {
  sectionHeadline: string
  sectionSubheadline: string
  badge: string
  courseTitle: string
  courseDescription: string
  buttonText: string
  ratingScore: string
  ratingText: string
}

export interface SocialTestimonialsContent {
  headline: string
  subheadline: string
  testimonials: SocialTestimonial[]
}

export interface AuthorContent {
  headline: string
  tagline: string
  description: string
  primaryCta: string
  secondaryCta: string
}

export interface CoachingContent {
  headline: string
  subheadline: string
  packages: CoachingPackage[]
}

export interface HowItWorksContent {
  headline: string
  steps: ProcessStep[]
}

export interface FAQContent {
  headline: string
  subheadline: string
  faqs: FAQItem[]
}

export interface CommunityCTAContent {
  headline: string
  description: string
  buttonText: string
}

export interface FooterContent {
  brandLetter: string
  brandName: string
  description: string
  navigationColumns: FooterNavColumn[]
  copyright: string
  refundLinkText: string
  ctaButtonText: string
}

export interface AddOnsContent {
  headline: string
  addOns: AddOn[]
}

// ─── Full Site Content ───────────────────────────────────────────

export interface SiteContent {
  header: HeaderContent
  hero: HeroContent
  coursePreview: CoursePreviewContent
  socialTestimonials: SocialTestimonialsContent
  author: AuthorContent
  coaching: CoachingContent
  howItWorks: HowItWorksContent
  faq: FAQContent
  communityCTA: CommunityCTAContent
  footer: FooterContent
  addOns: AddOnsContent
}

// ─── Default Content ─────────────────────────────────────────────

export const defaultContent: SiteContent = {
  header: {
    logoText: 'Kroolla',
    navItems: [
      { label: 'eBook', href: '#hero', section: 'hero' },
      { label: 'Course', href: '#course', section: 'course' },
      { label: 'Coaching', href: '#coaching', section: 'coaching' },
      { label: 'FAQs', href: '#faq', section: 'faq' },
      { label: 'Community', href: '#community', section: 'community' },
    ],
    ctaButtonText: 'Break the Cycle',
  },
  hero: {
    badgeText: 'Only 8 Copies Left',
    headlineLine1: 'The Only Book To',
    headlineLine2: 'Break The Anxiety Loop',
    emailPlaceholder: 'email@gmail.com',
    buttonText: 'Get Your Free Book',
    ratingScore: '4.9/5',
    ratingText: 'based on reviews',
    testimonials: [
      {
        name: 'Blake Beus',
        ageContext: '32, insomnia & anxiety 6 years',
        avatar: '/images/rating-avatar5.png',
        quote:
          "I've been stuck with anxiety disorder for 7 years, and after finishing this book, I feel like I've almost gotten my life back. No words can truly express my gratitude.",
        rating: 5,
      },
      {
        name: 'Qwantel Latay',
        ageContext: '21, panic attacks 2 years',
        avatar: '/images/rating-avatar6.png',
        quote:
          "This book didn't just give me knowledge it gave me peace. My anxiety no longer controls every part of my life.",
        rating: 5,
      },
      {
        name: 'Dave Baxter',
        ageContext: '30, trapped in endless worry',
        avatar: '/images/rating-avatar7.png',
        quote:
          "I've been through countless therapies and self-help guides, but this book finally made me feel understood and guided. Truly life-changing.",
        rating: 5,
      },
      {
        name: 'James Logan',
        ageContext: "28, thought I'd never escape",
        avatar: '/images/rating-avatar8.jpg',
        quote:
          'Living with anxiety for so long felt endless. This book gave me tools, hope, and strength to believe I can heal.',
        rating: 5,
      },
    ],
  },
  coursePreview: {
    sectionHeadline: 'Learn Calm, Step By Step',
    sectionSubheadline: 'Save years of struggle - see results in weeks.',
    badge: 'Bestseller',
    courseTitle: "Stop Panic Attack in 14 days - Or It's Free",
    courseDescription:
      "Anxiety comes back because it's a loop this course shows you how to break it, stop panic attacks, calm anxiety, and live freely.",
    buttonText: 'Break the Cycle',
    ratingScore: '4.9/5',
    ratingText: 'based on reviews',
  },
  socialTestimonials: {
    headline: 'Because result matter',
    subheadline: 'Real voices - Real recovery',
    testimonials: [
      {
        name: 'Lora Smity',
        handle: '@lorasmity',
        avatar: '/images/review-avatar1.png',
        quote:
          'Before this course, panic attacks controlled my life. Now I finally understand my body and mind. The step-by-step lessons gave me peace I never thought possible.',
      },
      {
        name: 'Danko',
        handle: '@itsdanko',
        avatar: '/images/review-avatar2.png',
        quote:
          'Listening every day changed everything. The audio feels like a friend guiding me out of the anxiety loop. I sleep again, and my mind is calm.',
      },
      {
        name: 'Mila So.',
        handle: '@milahere',
        avatar: '/images/review-avatar3.png',
        quote:
          "I cried because my life finally feels normal again. I wish I had found Mike's course earlier it taught me how to overcome panic attacks.",
      },
      {
        name: 'Clara',
        handle: '@claranow',
        avatar: '/images/review-avatar4.png',
        quote:
          'Best investment I\'ve made for my mental health. Affordable, easy to follow, and more effective than months of searching online tips.',
      },
      {
        name: 'Tobi Kees',
        handle: '@heytobi',
        avatar: '/images/review-avatar5.png',
        quote:
          "I'll always be thankful for Mike and his course. It was like having a personal mentor who truly cared about my healing.",
      },
      {
        name: 'Franka',
        handle: '@workdes',
        avatar: '/images/review-avatar6.png',
        quote:
          'What makes this course so special is not only Mike\'s wisdom but also the community he built.',
      },
      {
        name: 'Lisa Lo',
        handle: '@styledoss',
        avatar: '/images/review-avatar7.png',
        quote:
          'After 5 years of anxiety, I felt hopeless. This course gave me clarity and tools.',
      },
      {
        name: 'Parker',
        handle: '@designjust',
        avatar: '/images/review-avatar8.png',
        quote:
          "I can't thank you enough, Mike. You didn't make me feel broken you made me feel understood. That changed everything.",
      },
      {
        name: 'Mino Mi',
        handle: '@minomimi',
        avatar: '/images/review-avatar9.png',
        quote:
          'The course gave me tools, and the community gave me hope. Thank you Mike for creating a place where healing truly happens.',
      },
    ],
  },
  author: {
    headline: "Hey, I'm Michael.",
    tagline: 'Self recovery from anxiety without medication',
    description:
      'I help people overcome anxiety and panic attacks through mindfulness, CBT, and lifestyle transformation.',
    primaryCta: 'Break the Cycle',
    secondaryCta: 'View blogs',
  },
  coaching: {
    headline: 'Get Coached, Gain Control',
    subheadline: 'Personal guidance and clear steps to end the anxiety cycle.',
    packages: [
      {
        name: 'Calm Start',
        price: '$97',
        paymentType: 'One-time payment',
        features: [
          'Personalized written feedback on your situation',
          'Clear steps to break free from anxiety',
          'Delivered within 48 hours',
        ],
        ctaText: 'Break the Cycle',
      },
      {
        name: 'Full Recovery',
        price: '$197',
        paymentType: 'One-time payment',
        features: [
          'Everything in Calm Start',
          '1-Month Support',
          'Anxiety Toolkit',
          'Delivered within 24 hours',
        ],
        ctaText: 'Break the Cycle',
      },
    ],
  },
  howItWorks: {
    headline: 'How It Works?',
    steps: [
      {
        title: 'Share Your Data',
        description: 'We collect your details and context to get a clear picture',
      },
      {
        title: 'Smart Analysis',
        description: 'We break down your info to design a personalized roadmap',
      },
      {
        title: 'Tailored Delivery',
        description:
          'We deliver your full roadmap with everything you need to start your recovery',
      },
    ],
  },
  faq: {
    headline: 'Frequently asked questions',
    subheadline:
      'Got questions? Find quick answers here! If you need more details, feel free to get in touch anytime.',
    faqs: [
      {
        question: 'Is this method safe?',
        answer:
          'Absolutely. All methods are simple and easy to practice, like CBT, Grounding Techniques, and EMDR. These are evidence-based approaches that have been used safely by millions of people worldwide.',
        defaultOpen: true,
      },
      {
        question: 'Can I stop taking my medication?',
        answer:
          'We always recommend consulting with your healthcare provider before making any changes to your medication. Our program is designed to work alongside your current treatment plan, not replace it.',
        defaultOpen: false,
      },
      {
        question: 'Is my information kept private?',
        answer:
          'Yes, absolutely. We take your privacy seriously and follow strict data protection protocols. Your personal information is encrypted and never shared with third parties.',
        defaultOpen: false,
      },
      {
        question: 'What is your refund policy?',
        answer:
          "We offer a 30-day money-back guarantee. If you're not satisfied with the program within the first 30 days, we'll provide a full refund, no questions asked.",
        defaultOpen: false,
      },
      {
        question: "I'm still concerned. What should I do?",
        answer:
          'We understand your concerns. Feel free to reach out to our support team at any time. We\'re here to help and answer any questions you may have about the program.',
        defaultOpen: false,
      },
    ],
  },
  communityCTA: {
    headline: 'Let us help you',
    description: 'A kind community that understands and stands by you.',
    buttonText: 'Join Community',
  },
  footer: {
    brandLetter: 'K',
    brandName: 'Kroolla',
    description:
      'I help people overcome anxiety and panic attacks through mindfulness, CBT, and lifestyle transformation.',
    navigationColumns: [
      {
        title: 'Link',
        links: ['Course', 'About me', 'Support', 'Blog'],
      },
      {
        title: 'Legal',
        links: ['Terms of services', 'Privacy policy', 'Disclaimer'],
      },
    ],
    copyright: '© Copyright @2025 All rights reserved',
    refundLinkText: 'Refund Policy',
    ctaButtonText: 'Join Us',
  },
  addOns: {
    headline: 'Add-ons',
    addOns: [
      {
        price: '$47',
        name: 'Priority Support',
        description:
          "Think you're losing control? Get fast, dedicated help with our Priority Support.",
      },
      {
        price: '$97',
        name: '3 Months Support',
        description:
          'Help you build new habits, mindset, and daily practices in 3 months.',
      },
      {
        price: '$127',
        name: 'Deep Analysis',
        description:
          'We explore your past traumas and childhood memories to heal from the root.',
      },
    ],
  },
}

// ─── Deep Merge Utility ──────────────────────────────────────────

function deepMerge<T>(defaults: T, overrides: Partial<T>): T {
  const result = { ...defaults } as Record<string, unknown>
  for (const key of Object.keys(overrides as Record<string, unknown>)) {
    const val = (overrides as Record<string, unknown>)[key]
    const def = (defaults as Record<string, unknown>)[key]
    if (
      val !== null &&
      val !== undefined &&
      typeof val === 'object' &&
      !Array.isArray(val) &&
      typeof def === 'object' &&
      !Array.isArray(def) &&
      def !== null
    ) {
      result[key] = deepMerge(def, val as Partial<typeof def>)
    } else if (val !== undefined) {
      result[key] = val
    }
  }
  return result as T
}

// ─── Content Fetcher (Server-side) ───────────────────────────────

const BLOB_CONTENT_URL_KEY = 'site-content-url'

export async function getContent(): Promise<SiteContent> {
  try {
    // Try to read the stored blob URL from a known location
    const { list } = await import('@vercel/blob')
    const { blobs } = await list({ prefix: 'site-content.json' })

    if (blobs.length > 0) {
      const response = await fetch(blobs[0].url, { cache: 'no-store' })
      if (response.ok) {
        const stored = await response.json() as Partial<SiteContent>
        return deepMerge(defaultContent, stored)
      }
    }
  } catch (error) {
    console.error('Failed to load content from Vercel Blob, using defaults:', error)
  }

  return defaultContent
}
