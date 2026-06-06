"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ViewCounter from '@/components/ViewCounter'

const Navbar = () => {
  const pathname = usePathname()

  const linkClass = (href) => {
    const isActive = pathname === href

    return `px-1 py-1 transition hover:text-yellow-100 ${isActive ? 'font-bold underline decoration-yellow-300 decoration-2 underline-offset-8' : ''}`
  }

  return (
    <nav className='min-h-16 bg-black flex flex-wrap justify-between gap-2 px-3 py-3 items-center text-yellow-300 sm:gap-3 sm:px-4'>
      <div className="logo flex items-center gap-3 text-lg font-bold sm:text-2xl">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/web-tab-logo.webp"
            alt="SnipLink logo"
            width={36}
            height={36}
            className="h-8 w-8 rounded-full sm:h-9 sm:w-9"
            priority
          />
          <span>SnipLink</span>
        </Link>
        <span
          className='rounded-full border border-yellow-300/35 bg-yellow-300/10 px-3 py-1.5 text-xs font-bold text-yellow-100 sm:text-sm'
          aria-label='Total website visitors'
        >
          <ViewCounter /> visitors
        </span>
      </div>
      <ul className='flex flex-wrap justify-end gap-3 text-sm font-medium sm:gap-4 sm:text-base items-center'>
        <li><Link href="/" className={linkClass("/")}>Home</Link></li>
        <li><Link href="/shorten" className={linkClass("/shorten")}>Shorten</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
