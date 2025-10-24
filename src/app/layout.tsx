import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import { ConditionalHeader } from '@/components/ConditionalHeader'
import Footer from '@/components/ui/footer'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: 'Kroolla | Break the Anxiety Cycle',
  description:
    'The only eBook that shows you how to break the anxiety cycle. Learn proven techniques to manage anxiety, stop panic attacks, and reclaim your peace of mind.',
  keywords:
    'anxiety management, panic attacks, mental health, mindfulness, breathing exercises, stress relief',
  authors: [{ name: 'Anxiety Management Team' }],
  openGraph: {
    title: 'Kroolla | Break the Anxiety Cycle',
    description:
      'Learn proven techniques to manage anxiety and stop panic attacks with our comprehensive 14-day program.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kroolla | Break the Anxiety Cycle',
    description:
      'Learn proven techniques to manage anxiety and stop panic attacks with our comprehensive 14-day program.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={dmSans.variable} suppressHydrationWarning>
      <body className={`${dmSans.className} antialiased`}>
        <ConditionalHeader />
        {children}
        <Footer />
      </body>
    </html>
  )
}
