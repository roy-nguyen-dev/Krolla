'use client'

import type { KeenSliderInstance } from 'keen-slider/react'

type AutoplayOptions = {
  delay?: number
  pauseOnHover?: boolean
  pauseOnFocus?: boolean
  ignoreReducedMotion?: boolean
  /** time duration animation */
  durationMs?: number
  pingpong?: boolean
  /** easing  animation (0→1) */
  easing?: (t: number) => number
}

export function useKeenAutoplay(
  instanceRef: React.MutableRefObject<KeenSliderInstance | null>,
  {
    delay = 3000,
    pauseOnHover = true,
    pauseOnFocus = true,
    ignoreReducedMotion = true,
    durationMs = 900,
    pingpong = false, // <-- bw to 1st item if true
    easing = (t) => 1 - Math.pow(1 - t, 3), // easeOutCubic (smooth)
  }: AutoplayOptions = {},
) {
  return (slider: KeenSliderInstance) => {
    let timer: ReturnType<typeof setTimeout> | null = null
    let paused = false
    let direction: 1 | -1 = 1 //fw (1) or bw (-1)

    const prefersReducedMotion =
      !ignoreReducedMotion &&
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const clear = () => {
      if (timer) clearTimeout(timer)
      timer = null
    }

    const next = () => {
      clear()
      if (paused || prefersReducedMotion) return

      timer = setTimeout(() => {
        if (!pingpong) {
          // loop mặc định
          slider.moveToIdx(slider.track.details.abs + 1, true, { duration: durationMs, easing })
          return
        }

        // ping-pong mode
        const track = slider.track.details
        const nextAbs = track.abs + direction
        if (nextAbs > track.maxIdx) {
          direction = -1
          slider.moveToIdx(track.abs - 1, true, { duration: durationMs, easing })
        } else if (nextAbs < 0) {
          direction = 1
          slider.moveToIdx(track.abs + 1, true, { duration: durationMs, easing })
        } else {
          slider.moveToIdx(nextAbs, true, { duration: durationMs, easing })
        }
      }, delay)
    }

    slider.on('created', () => {
      instanceRef.current = slider

      if (pauseOnHover) {
        slider.container.addEventListener('mouseenter', () => {
          paused = true
          clear()
        })
        slider.container.addEventListener('mouseleave', () => {
          paused = false
          next()
        })
      }

      if (pauseOnFocus) {
        slider.container.addEventListener('focusin', () => {
          paused = true
          clear()
        })
        slider.container.addEventListener('focusout', () => {
          paused = false
          next()
        })
      }

      next()
    })

    slider.on('dragStarted', clear)
    slider.on('animationEnded', next)
    slider.on('updated', next)
  }
}
