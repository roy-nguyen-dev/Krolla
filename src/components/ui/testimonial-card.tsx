'use client'

import Image from 'next/image'
import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'
import { TestimonialCardProps } from '@/types'

const isImage = (s: string) => /\.(png|jpe?g|webp|gif|svg)$/i.test(s)

const avatarPalettes = [
  'bg-red-100 text-red-700',
  'bg-yellow-100 text-yellow-700',
  'bg-green-100 text-green-700',
  'bg-blue-100 text-blue-700',
  'bg-indigo-100 text-indigo-700',
  'bg-purple-100 text-purple-700',
  'bg-pink-100 text-pink-700',
]

function stringToIndex(str: string) {
  let hash = 0
  for (let i = 0; i < str.length; i++) hash = str.charCodeAt(i) + ((hash << 5) - hash)
  return Math.abs(hash) % avatarPalettes.length
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, className }) => {
  const { name, avatar, testimonial: text, rating = 5 } = testimonial as any
  const subtitle: string | undefined = (testimonial as any).subtitle

  const initials = (avatar || name?.slice(0, 2) || 'U').toString().slice(0, 2).toUpperCase()
  const colorClass = avatarPalettes[stringToIndex(initials)]

  return (
    <article
      className={cn(
        'flex h-full flex-col rounded-2xl bg-white text-slate-900 ring-1 ring-black/5 shadow-sm p-5 md:p-6',
        'transition duration-300 hover:opacity-90',
        className,
      )}
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        {/* Avatar: Image Address -> <Image>, Not Image -> 2 character name with random color*/}
        {typeof avatar === 'string' && isImage(avatar) ? (
          <Image
            src={avatar}
            alt={`${name} avatar`}
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover bg-white"
            priority={false}
          />
        ) : (
          <div
            className={cn(
              'h-10 w-10 rounded-full grid place-items-center text-sm font-semibold select-none',
              colorClass,
            )}
            aria-hidden="true"
          >
            {initials}
          </div>
        )}

        <div className="min-w-0">
          <p className="text-[15px] font-semibold leading-tight truncate">{name}</p>
          {subtitle && (
            <p className="text-[12px] text-slate-600 leading-tight truncate">{subtitle}</p>
          )}
        </div>
      </div>

      {/* Quote */}
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
