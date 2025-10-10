'use client'

import { usePathname } from 'next/navigation'
import SiteHeader from '@/components/homepage/site-header'

export const ConditionalHeader: React.FC = () => {
  const pathname = usePathname()
  
  // Hide global header on homepage-2 route
  if (pathname === '/') {
    return null
  }
  
  return <SiteHeader />
}
