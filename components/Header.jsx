'use client'

import { useEffect, useState } from 'react'
import { links, nav } from '@/lib/site'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'border-b border-line bg-ink/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6">
        <a href={links.home} className="shrink-0" aria-label="Silkroad Latino, inicio">
          <img src="/assets/img/logo.png" alt="Silkroad Latino" className="h-14 w-auto drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]" />
        </a>

        <nav className="hidden lg:block" aria-label="Principal">
          <ul className="flex items-center gap-8">
            {nav.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-display text-sm font-semibold tracking-widest text-text/90 uppercase transition hover:text-gold-light"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={links.login} className="text-sm text-muted transition hover:text-gold-light">
            Iniciar sesión
          </a>
          <a href={links.download} className="btn-gold !px-5 !py-2.5">
            Jugar gratis
          </a>
        </div>

        <button
          type="button"
          className="rounded-md border border-line p-2 text-gold-light lg:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="menu-movil" className="border-t border-line px-4 pb-6 lg:hidden" aria-label="Menú móvil">
          <ul className="flex flex-col py-2">
            {nav.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="block py-3 font-display tracking-widest text-text uppercase">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex gap-3">
            <a href={links.download} className="btn-gold flex-1">Jugar gratis</a>
            <a href={links.login} className="btn-ghost flex-1">Entrar</a>
          </div>
        </nav>
      )}
    </header>
  )
}
