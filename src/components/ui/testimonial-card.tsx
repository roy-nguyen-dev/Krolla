'use client'

import Image from 'next/image'
import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'
import { TestimonialCardProps } from '@/types'

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, className }) => {
  const { name, avatar, testimonial: text, rating = 5 } = testimonial as any
  // OPTIONAL subtitle support
  const subtitle: string | undefined = (testimonial as any).subtitle

  return (
    <article
      className={cn(
        'flex h-full flex-col rounded-2xl bg-white text-slate-900 ring-1 ring-black/5 shadow-sm p-5 md:p-6',
        'transition-colors duration-300 hover:bg-slate-50 hover:ring-accent-yellow/40',
        className,
      )}
    >
      <div className="flex items-center gap-3">
        {/* Avatar is image address, show <Image>; If 2 charaacter, show circle initials */}
        {typeof avatar === 'string' &&
        (avatar.endsWith('.jpg') ||
          avatar.endsWith('.png') ||
          avatar.endsWith('.webp') ||
          avatar.endsWith('.jpeg')) ? (
          <Image
            src={avatar}
            alt={`${name} avatar`}
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover"
          />
        ) : (
          <div className="h-10 w-10 rounded-full bg-slate-900/80 text-white grid place-items-center text-sm font-semibold">
            {(avatar || name?.[0] || 'U').toString().slice(0, 2).toUpperCase()}
          </div>
        )}
        <div className="min-w-0">
          <p className="text-[15px] font-semibold leading-tight truncate">{name}</p>
          {subtitle && (
            <p className="text-[12px] text-slate-600 leading-tight truncate">{subtitle}</p>
          )}
        </div>
      </div>

      {/* Quote: Always bottom of card */}
      <p className="mt-4 text-[15px] leading-relaxed text-slate-700 flex-1">“{text}”</p>

      {/* Stars */}
      <div className="mt-4 flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={cn(i < rating ? 'text-amber-400 fill-amber-400' : 'text-slate-300')}
            aria-hidden="true"
          />
        ))}
        <span className="sr-only">{rating} stars</span>
      </div>
    </article>
  )
}
