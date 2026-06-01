"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()

  const linkClass = (href) => {
    const isActive = pathname === href

    return `px-1 py-1 transition hover:text-yellow-100 ${isActive ? 'font-bold underline decoration-yellow-300 decoration-2 underline-offset-8' : ''}`
  }

  return (
    <nav className='min-h-16 bg-black flex flex-wrap justify-between gap-3 px-4 py-3 items-center text-yellow-300'>
      <div className="logo text-xl font-bold sm:text-2xl"> 
        <Link href="/">SnipLink</Link>
      </div>
      <ul className='flex flex-wrap justify-end gap-2 text-sm font-medium sm:gap-4 sm:text-base items-center'>
        <li><Link href="/" className={linkClass("/")}>Home</Link></li>
        <li><Link href="/shorten" className={linkClass("/shorten")}>Shorten</Link></li>
        <li className='flex gap-3'>
          <Link href="/shorten" className='bg-yellow-400 text-black rounded-lg shadow-lg px-3 py-1.5 font-bold hover:bg-yellow-300'>Try Now</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
