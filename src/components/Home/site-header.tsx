'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface NavItem {
  label: string
  href: string
  section: string
}

const navItems: NavItem[] = [
  { label: 'Program', href: '#hero', section: 'hero' },
  { label: 'Problems', href: '#problems', section: 'problems' },
  { label: 'Method', href: '#method', section: 'method' },
  { label: 'Results', href: '#results', section: 'results' },
  { label: 'FAQ', href: '#faq', section: 'faq' },
]

export default function SiteHeader() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  // Handle smooth scrolling to sections
  const handleNavClick = (href: string, section: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(section)
    }
    setIsMobileMenuOpen(false)
  }

  // Track active section based on scroll position
  useEffect(() => {
    if (isHomePage) return // Don't track sections on home page

    const handleScroll = () => {
      const sections = navItems.map(item => item.section)
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHomePage])

  return (
    <div className="sticky top-4 z-50">
      <div className="mx-auto w-full max-w-[1100px] px-4 md:px-6">
        <header className="flex h-14 md:h-16 items-center justify-between rounded-2xl border border-white/10 bg-black/70 backdrop-blur px-3 md:px-5 shadow-[0_6px_24px_rgba(0,0,0,0.35)]">
          <link rel="icon" href="/images/logo.svg" />
          
          {/* Logo - centered on home page, left-aligned on other pages */}
          <Link href="/" className={cn(
            "flex items-center gap-2 text-white",
            isHomePage ? "mx-auto" : ""
          )}>
            <div className="flex items-center gap-2">
              <Image
                src="/images/logo.svg"
                alt="Kroolla logo"
                width={32}
                height={32}
                priority
              />
              <span className="text-2xl font-bold text-white">Kroolla</span>
            </div>
          </Link>

          {/* Navigation - only show on non-home pages */}
          {!isHomePage && (
            <>
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.href, item.section)}
                    className={cn(
                      'text-sm font-medium transition-colors duration-200 hover:text-accent-yellow',
                      activeSection === item.section
                        ? 'text-accent-yellow'
                        : 'text-white/80'
                    )}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              {/* CTA Button */}
              <div className="hidden md:block">
                <Button
                  onClick={() => handleNavClick('#hero', 'hero')}
                  variant="primary"
                  size="md"
                  className="inline-flex items-center gap-2"
                >
                  <Image
                    src="/images/arterisk.svg"
                    alt="Asterisk"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                  Break the Cycle
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-white"
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
            </>
          )}
        </header>

        {/* Mobile Menu - only show on non-home pages */}
        {!isHomePage && isMobileMenuOpen && (
          <div className="md:hidden mt-2 rounded-2xl border border-white/10 bg-black/70 backdrop-blur px-4 py-4 shadow-[0_6px_24px_rgba(0,0,0,0.35)]">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href, item.section)}
                  className={cn(
                    'text-left text-sm font-medium transition-colors duration-200 hover:text-accent-yellow',
                    activeSection === item.section
                      ? 'text-accent-yellow'
                      : 'text-white/80'
                  )}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2">
                <Button
                  onClick={() => handleNavClick('#hero', 'hero')}
                  variant="primary"
                  size="md"
                  className="w-full inline-flex items-center justify-center gap-2"
                >
                  <Image
                    src="/images/arterisk.svg"
                    alt="Asterisk"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                  Break the Cycle
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </div>
  )
}
