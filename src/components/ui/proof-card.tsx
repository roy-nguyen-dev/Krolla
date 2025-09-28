'use client'

import Image from 'next/image'
import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ProofCardProps, Proof } from '@/types'

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

export const ProofCard: React.FC<ProofCardProps> = ({ proof, className }) => {
  const { name, avatar, quote, rating = 5 } = proof

  const initials = (proof.avatar || proof.name?.slice(0, 2) || 'U')
    .toString()
    .slice(0, 2)
    .toUpperCase()
  const colorClass = avatarPalettes[stringToIndex(initials)]

  return (
    <article
      className={cn(
        'flex justify-between h-full min-h-[240px] flex-col rounded-2xl p-5 md:p-6 ring-1 shadow-sm',
        'bg-[#262626] ring-white/10 text-white',
        className,
      )}
    >
      {/* Quote */}
      <p className="text-[15px] leading-relaxed text-white/85">“{quote}”</p>

      {/* Stars */}
      <div className="mt-1 flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < rating ? 'text-amber-400 fill-amber-400' : 'text-white/20'}
            aria-hidden="true"
          />
        ))}
      </div>

      <div className="mt-1 flex items-center gap-3 pt-1">
        {typeof avatar === 'string' &&
        (avatar.endsWith('.jpg') ||
          avatar.endsWith('.jpeg') ||
          avatar.endsWith('.png') ||
          avatar.endsWith('.webp')) ? (
          <Image
            src={avatar}
            alt={`${name} avatar`}
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover"
          />
        ) : (
          <div
            className={cn(
              'h-10 w-10 rounded-full grid place-items-center text-sm font-semibold text-white',
              colorClass,
            )}
          >
            {initials}
          </div>
        )}

        <div className="min-w-0">
          <p className="text-[15px] font-semibold leading-tight truncate">{name}</p>
        </div>
      </div>
    </article>
  )
}
