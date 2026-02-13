'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import type { HeaderContent } from '@/lib/content'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

interface Props {
  content: HeaderContent
}

export const Homepage2Header: React.FC<Props> = ({ content }) => {
  const [activeSection, setActiveSection] = useState(content.navItems[0]?.section || 'hero')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const router = useRouter()

  // Handle smooth scrolling to sections
  const handleNavClick = (href: string, section: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  const handleRedirectTo = (href: string) => {
    router.push(href);
  }

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = content.navItems.map(item => item.section)
      const scrollPosition = window.scrollY + 100

      const isNearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section) {
          if (i === sections.length - 1 && isNearBottom) {
            setActiveSection(sections[i])
            break
          }
          if (section.offsetTop <= scrollPosition) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [content.navItems])

  return (
    <div className={`md:sticky md:top-0 z-50 bg-white border-b border-gray-200 ${inter.variable} font-sans`} suppressHydrationWarning>
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <header className="flex h-16 items-center justify-between">
          <link rel="icon" href="/images/logo.svg" />
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-black">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-black">{content.logoText}</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {content.navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href, item.section)}
                className={cn(
                  'text-sm font-medium transition-colors duration-200 hover:text-gray-900',
                  activeSection === item.section
                    ? 'text-black font-bold'
                    : 'text-gray-600'
                )}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => handleRedirectTo('/landing-page')}
              variant="primary"
              size="md"
              className="bg-black text-white hover:bg-gray-800"
            >
              {content.ctaButtonText}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </header>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <nav className="flex flex-col space-y-4 py-4">
              {content.navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href, item.section)}
                  className={cn(
                    'text-left text-sm font-medium transition-colors duration-200 hover:text-gray-900',
                    activeSection === item.section
                      ? 'text-black font-bold'
                      : 'text-gray-600'
                  )}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2">
                <Button
                  onClick={() => handleRedirectTo('/landing-page')}
                  variant="primary"
                  size="md"
                  className="w-full bg-black text-white hover:bg-gray-800"
                >
                  {content.ctaButtonText}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </div>
  )
}
