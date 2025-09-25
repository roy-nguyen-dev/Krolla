// src/components/sections/proof-section.tsx
'use client'

import { SectionContainer } from '@/components/ui/section-container'
import { ProofCard, Proof } from '@/components/ui/proof-card'
// (tuỳ) nếu muốn mobile auto-slide thì dùng Carousel của bạn
import Carousel from '@/components/ui/carousel'
import { useIsMobile } from '@/hooks/useIsMobile'

const proofs: Proof[] = [
  {
    id: 'p1',
    quote:
      'Before this course, panic attacks controlled my life. Now I finally understand my body and mind. The step-by-step lessons gave me peace I never thought possible.',
    name: 'Charlie Shrem',
    avatar: '/images/people/charlie.jpg', // hoặc 'CS'
    rating: 5,
  },
  { id: 'p2', quote: '...', name: 'Amanda Lee', avatar: 'AL', rating: 5 },
  { id: 'p3', quote: '...', name: 'Mark V.', avatar: '/images/people/mark.jpg', rating: 5 },
  { id: 'p4', quote: '...', name: 'Ben Howard', avatar: 'BH', rating: 5 },
]

export function ProofSection() {
  const isMobile = useIsMobile()

  return (
    <SectionContainer background="primary" className="py-12 md:py-16">
      {/* heading tuỳ bạn */}
      {isMobile ? (
        <Carousel
          className="py-2"
          perView={{ base: 1.05 }}
          spacing={16}
          mode="snap"
          autoplayMs={3200}
          autoplayDurationMs={950}
          autoplayIgnoreReducedMotion
          loop={false} // hoặc ping-pong theo hook bạn đã thêm
        >
          {proofs.map((p) => (
            <div key={p.id} className="px-2">
              <ProofCard {...p} />
            </div>
          ))}
        </Carousel>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {proofs.map((p) => (
            <ProofCard key={p.id} {...p} />
          ))}
        </div>
      )}
    </SectionContainer>
  )
}
