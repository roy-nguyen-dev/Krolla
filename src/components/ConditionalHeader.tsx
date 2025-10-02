'use client'

import { usePathname } from 'next/navigation'
import SiteHeader from '@/components/homepage/site-header'

export const ConditionalHeader: React.FC = () => {
  const pathname = usePathname()
  
  // Hide global header on homepage-2 route
  if (pathname === '/homepage-2') {
    return null
  }
  
  return <SiteHeader />
}
