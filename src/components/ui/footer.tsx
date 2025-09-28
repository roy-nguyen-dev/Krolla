'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left section */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Image alt="Krolla Icon" src="/images/logo.svg" width={36} height={36}></Image>
            <span className="font-semibold text-white">Kroolla</span>
          </div>
          <p className="text-sm text-gray-400">Break free from anxiety in 14 days, not years.</p>
          <p className="text-xs text-gray-500">
            Copyright © {new Date().getFullYear()} - All rights reserved
          </p>
        </div>

        {/* Middle section */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-gray-400 uppercase">Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/#" className="hover:text-white">
                Course
              </Link>
            </li>
            <li>
              <Link href="/#" className="hover:text-white">
                About me
              </Link>
            </li>
            <li>
              <Link href="/#" className="hover:text-white">
                Support
              </Link>
            </li>
            <li>
              <Link href="/#" className="hover:text-white">
                Blog
              </Link>
            </li>
          </ul>
          <Link
            href="https://discord.com"
            target="_blank"
            className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md text-sm"
          >
            <Image
              alt="discord-image"
              src="/images/discord-icon-white.svg"
              width={20}
              height={20}
            ></Image>{' '}
            Join Us
          </Link>
        </div>

        {/* Right section */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-gray-400 uppercase">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/#" className="hover:text-white">
                Terms of services
              </Link>
            </li>
            <li>
              <Link href="/#" className="hover:text-white">
                Privacy policy
              </Link>
            </li>
            <li>
              <Link href="/#" className="hover:text-white">
                Disclaimer
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
