'use client'

import Image from 'next/image'
import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

// danh sách màu nền / chữ
const bgColors = [
  'bg-red-100 text-red-700',
  'bg-yellow-100 text-yellow-700',
  'bg-green-100 text-green-700',
  'bg-blue-100 text-blue-700',
  'bg-purple-100 text-purple-700',
  'bg-pink-100 text-pink-700',
  'bg-indigo-100 text-indigo-700',
]

type ReviewStripProps = {
  avatars: string[]
  rating?: number
  text?: string
  className?: string
}

const isImage = (s: string) => /\.(png|jpe?g|webp|gif|svg)$/i.test(s)

// hàm hash string thành index màu
function stringToColorIndex(str: string) {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
  }
  return Math.abs(hash) % bgColors.length
}

export const ReviewStrip: React.FC<ReviewStripProps> = ({
  avatars,
  rating = 4.9,
  text = 'based on reviews',
  className,
}) => {
  return (
    <div className={cn('flex items-center gap-4', className)}>
      {/* Avatar stack */}
      <div className="flex -space-x-3">
        {avatars.slice(0, 5).map((a, i) => {
          if (isImage(a)) {
            return (
              <Image
                key={i}
                src={a}
                alt=""
                width={36}
                height={36}
                className="h-9 w-9 rounded-full ring-2 ring-black/70 object-cover bg-white"
                aria-hidden="true"
                priority={i === 0}
              />
            )
          }
          const initials = a.slice(0, 2).toUpperCase()
          const colorClass = bgColors[stringToColorIndex(initials)]
          return (
            <div
              key={i}
              className={cn(
                'h-9 w-9 rounded-full ring-2 ring-black/70 grid place-items-center text-xs font-semibold select-none',
                colorClass,
              )}
            >
              {initials}
            </div>
          )
        })}
      </div>

      {/* Stars */}
      <div className="flex items-center gap-2 text-white">
        <div className="flex items-center">
          {Array.from({ length: 5 }).map((_, i) => {
            const fill = Math.min(Math.max(rating - i, 0), 1) * 100
            return (
              <div key={i} className="relative w-5 h-5">
                <Star size={20} className="absolute inset-0 text-white/30" aria-hidden />
                <div className="absolute inset-0 overflow-hidden" style={{ width: `${fill}%` }}>
                  <Star size={20} className="text-amber-400 fill-amber-400" aria-hidden />
                </div>
              </div>
            )
          })}
        </div>
        <span className="text-sm font-semibold">
          {Number.isInteger(rating) ? rating : rating.toFixed(1)}/5
        </span>
        <span className="text-sm text-white/70">{text}</span>
      </div>
    </div>
  )
}
