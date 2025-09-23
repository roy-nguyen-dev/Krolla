import React from 'react'
import { cn } from '@/lib/utils'
import { SectionContainerProps } from '@/types'

export const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  className,
  background = 'primary',
  id,
}) => {
  const backgroundClasses = {
    primary: 'bg-primary',
    card: 'bg-card-background',
  }

  return (
    <section id={id} className={cn('py-16 px-4', backgroundClasses[background], className)}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  )
}
