"use client";

import Link from "next/link";

export default function SiteHeader() {
  return (
    <div className="sticky top-4 z-50">
      <div className="mx-auto w-full max-w-[1100px] px-4 md:px-6">
        <header className="flex h-14 md:h-16 items-center justify-center rounded-2xl border border-white/10 bg-black/70 backdrop-blur px-3 md:px-5 shadow-[0_6px_24px_rgba(0,0,0,0.35)]">
          <Link href="/" className="flex items-center gap-2 text-white">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white text-black font-bold">
              {/* Thay bằng <Image> nếu có file logo riêng */}K
            </span>
            <span className="text-[15px] font-semibold">Krolla</span>
          </Link>
        </header>
      </div>
    </div>
  );
}
