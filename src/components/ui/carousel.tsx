'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import { useKeenAutoplay } from './useKeenAutoplay'
import { cn } from '@/lib/utils'

export type CarouselProps = {
  children: React.ReactNode
  className?: string
  spacing?: number
  perView?: { base: number; md?: number; lg?: number; xl?: number }
  /** delay between autoplay (0 = tắt) */
  autoplayMs?: number
  pauseOnHover?: boolean
  pauseOnFocus?: boolean
  autoplayIgnoreReducedMotion?: boolean
  /** duration animation */
  autoplayDurationMs?: number
  /** custom easing autoplay */
  autoplayEasing?: (t: number) => number
  mode?: 'free' | 'free-snap' | 'snap'
  loop?: boolean
  pingpong?: boolean
}

export default function Carousel({
  children,
  className,
  spacing = 16,
  perView = { base: 1.15, md: 2.5, lg: 3.5 },
  autoplayMs = 3000,
  pauseOnHover = true,
  pauseOnFocus = true,
  autoplayIgnoreReducedMotion = true,
  autoplayDurationMs = 900,
  autoplayEasing,
  mode = 'free-snap',
  loop = true,
  pingpong,
}: CarouselProps) {
  const instanceRef = useRef(null)

  const autoplay = useKeenAutoplay(instanceRef, {
    delay: autoplayMs,
    pauseOnHover,
    pauseOnFocus,
    ignoreReducedMotion: autoplayIgnoreReducedMotion,
    durationMs: autoplayDurationMs,
    easing: autoplayEasing,
    pingpong,
  })

  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop,
      mode,
      renderMode: 'precision',
      rubberband: true,
      drag: true,
      slides: {
        perView: perView.base,
        spacing,
        origin: 'center',
      },
      breakpoints: {
        '(min-width: 768px)': {
          slides: { perView: perView.md ?? perView.base, spacing },
        },
        '(min-width: 1024px)': {
          slides: { perView: perView.lg ?? perView.md ?? perView.base, spacing },
        },
        '(min-width: 1280px)': {
          slides: { perView: perView.xl ?? perView.lg ?? perView.base, spacing },
        },
      },
      created: (s) => {
        s.container.setAttribute('role', 'list')
        s.slides.forEach((el) => el.setAttribute('role', 'listitem'))
      },
    },
    autoplayMs > 0 ? [autoplay] : [],
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      ref={sliderRef}
      className={cn('keen-slider', className)}
    >
      {Array.from(Array.isArray(children) ? children : [children]).map((child, i) => (
        <div key={i} className="keen-slider__slide">
          {child}
        </div>
      ))}
    </motion.div>
  )
}
