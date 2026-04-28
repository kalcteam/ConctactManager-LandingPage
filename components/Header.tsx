'use client'

import { useEffect, useState } from 'react'
import { ContactManagerLogo } from '@/components/ContactManagerLogo'

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <ContactManagerLogo width={190} />

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#funciones" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Funciones
          </a>
          <a href="#precios" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Precios
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#precios"
            className="rounded-lg bg-[#0035b9] px-4 py-2 text-sm font-semibold text-white hover:bg-[#002494] transition-colors"
          >
            Registrarse
          </a>
        </div>
      </div>
    </header>
  )
}
