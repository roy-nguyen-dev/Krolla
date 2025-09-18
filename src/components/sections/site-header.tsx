'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function SiteHeader() {
  return (
    <div className="sticky top-4 z-50">
      <div className="mx-auto w-full max-w-[1100px] px-4 md:px-6">
        <header className="flex h-14 md:h-16 items-center justify-center rounded-2xl border border-white/10 bg-black/70 backdrop-blur px-3 md:px-5 shadow-[0_6px_24px_rgba(0,0,0,0.35)]">
          <Link href="/" className="flex items-center gap-2 text-white">
            <div className="flex items-center gap-2">
              <Image
                src="/images/logo.svg"
                alt="Kroolla logo"
                width={32} // size icon
                height={32}
                priority
              />
              <span className="text-2xl font-bold text-white">Kroolla</span>
            </div>
          </Link>
        </header>
      </div>
    </div>
  )
}
