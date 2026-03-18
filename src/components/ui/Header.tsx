'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { LogoFull } from './Logo'
import { ChevronDown, Menu, X } from 'lucide-react'
import { clsx } from 'clsx'

const services = [
  {
    title: 'Architecture & Interior Design',
    href: '/services/architecture-interior-design/',
    sub: ['Residential Design', 'Commercial Interior', '3D Visualization', 'Renovation & Remodeling'],
    subHrefs: [
      '/services/architecture-interior-design/residential-design/',
      '/services/architecture-interior-design/commercial-interior/',
      '/services/architecture-interior-design/3d-visualization/',
      '/services/architecture-interior-design/renovation-remodeling/',
    ],
  },
  {
    title: 'CAD Drafting Services',
    href: '/services/cad-drafting-services/',
    sub: ['Architectural Drafting', 'Structural & MEP Drafting', 'Paper-to-CAD Conversion', 'As-Built Drawings'],
    subHrefs: [
      '/services/cad-drafting-services/architectural-drafting/',
      '/services/cad-drafting-services/structural-mep-drafting/',
      '/services/cad-drafting-services/paper-to-cad-conversion/',
      '/services/cad-drafting-services/as-built-drawings/',
    ],
  },
  {
    title: 'BIM Services',
    href: '/services/bim-building-information-modeling/',
    sub: ['Revit Modeling LOD 100-300', 'Clash Detection', 'Scan-to-BIM', 'Revit Family Creation'],
    subHrefs: [
      '/services/bim-building-information-modeling/revit-modeling-lod-100-300/',
      '/services/bim-building-information-modeling/clash-detection/',
      '/services/bim-building-information-modeling/scan-to-bim/',
      '/services/bim-building-information-modeling/revit-family-creation/',
    ],
  },
  {
    title: 'Solar Design & Engineering',
    href: '/services/solar-design-engineering/',
    sub: ['Solar Permit Plans', 'Solar Proposals', 'Solar Engineering Review & PE Stamping'],
    subHrefs: [
      '/services/solar-design-engineering/solar-permit-plans/',
      '/services/solar-design-engineering/solar-proposals/',
      '/services/solar-design-engineering/solar-engineering-review-pe-stamping/',
    ],
  },
  {
    title: 'Graphic Design',
    href: '/services/graphic-design/',
    sub: ['Real Estate Branding', 'Marketing Brochures', 'Signage & Wayfinding', 'Interactive Presentations'],
    subHrefs: [
      '/services/graphic-design/real-estate-branding/',
      '/services/graphic-design/marketing-brochures/',
      '/services/graphic-design/signage-wayfinding/',
      '/services/graphic-design/interactive-presentations/',
    ],
  },
]

const navLinks = [
  { label: 'Portfolio',     href: '/portfolio/' },
  { label: 'Case Studies',  href: '/case-studies/' },
  { label: 'About',         href: '/about/' },
  { label: 'Blog',          href: '/blog/' },
  { label: 'Contact',       href: '/contact/' },
]

export const Header = () => {
  const [scrolled, setScrolled]     = useState(false)
  const [megaOpen, setMegaOpen]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const closeTimer = React.useRef(0)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const openMega  = () => {
    window.clearTimeout(closeTimer.current)
    setMegaOpen(true)
  }
  const closeMega = () => {
    closeTimer.current = window.setTimeout(() => setMegaOpen(false), 180)
  }

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-[300] transition-all duration-300',
        scrolled
          ? 'bg-paper/95 backdrop-blur-md border-b shadow-sm'
          : 'bg-ink/70 backdrop-blur-sm'
      )}
      style={{
        height: 80,
        borderBottomColor: scrolled ? 'rgba(14,15,13,0.1)' : 'transparent',
      }}
    >
      <div className="max-w-[1280px] mx-auto px-8 h-full flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <LogoFull dark={!scrolled} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">

          {/* Services Mega-menu */}
          <div
            className="relative"
            onMouseEnter={openMega}
            onMouseLeave={closeMega}
          >
            <button
              className={clsx(
                'flex items-center gap-1 font-display text-sm font-medium tracking-wide uppercase transition-colors',
                scrolled ? 'text-ink hover:text-teal' : 'text-white/90 hover:text-white'
              )}
            >
              Services
              <ChevronDown size={14} className={clsx('transition-transform', megaOpen && 'rotate-180')} />
            </button>

            {megaOpen && (
              <div
                onMouseEnter={openMega}
                onMouseLeave={closeMega}
                className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[800px] z-50"
              >
              <div
                className="bg-white shadow-xl border p-6 grid grid-cols-3 gap-4"
                style={{ borderColor: 'rgba(14,15,13,0.1)', borderRadius: '2px' }}
              >
                <div className="col-span-3 border-b pb-3 mb-2" style={{ borderColor: 'rgba(14,15,13,0.1)' }}>
                  <span className="font-mono text-[9px] text-slate uppercase tracking-widest" style={{ letterSpacing: '0.25em' }}>
                    Our Services
                  </span>
                </div>
                {services.map((cat) => (
                  <div key={cat.href}>
                    <Link
                      href={cat.href}
                      className="font-display text-sm font-semibold text-ink hover:text-teal block mb-2 transition-colors uppercase tracking-wide"
                    >
                      {cat.title}
                    </Link>
                    <ul className="space-y-1">
                      {cat.sub.map((s, i) => (
                        <li key={s}>
                          <Link
                            href={cat.subHrefs[i]}
                            className="font-mono text-[10px] text-slate hover:text-teal transition-colors block py-0.5 uppercase tracking-wider"
                          >
                            → {s}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                'font-display text-sm font-medium tracking-wide uppercase transition-colors',
                scrolled ? 'text-ink hover:text-teal' : 'text-white/90 hover:text-white'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button — "White on Teal" per brand guidelines */}
        <div className="hidden lg:block">
          <Link
            href="/contact/?quote=true"
            className="inline-flex items-center gap-2 bg-teal text-white font-display text-sm font-semibold px-5 py-2.5 uppercase tracking-wider transition-colors hover:bg-teal-deep"
            style={{ borderRadius: '2px' }}
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={clsx('lg:hidden', scrolled ? 'text-ink' : 'text-white')}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="lg:hidden bg-paper border-t shadow-lg max-h-[80vh] overflow-y-auto"
          style={{ borderTopColor: 'rgba(14,15,13,0.1)' }}
        >
          <div className="px-6 py-4 space-y-4">
            <div>
              <p className="font-mono text-[9px] text-slate uppercase mb-2" style={{ letterSpacing: '0.25em' }}>
                Services
              </p>
              {services.map((cat) => (
                <div key={cat.href} className="mb-3">
                  <Link
                    href={cat.href}
                    className="font-display text-sm font-semibold text-ink uppercase tracking-wide block mb-1"
                    onClick={() => setMobileOpen(false)}
                  >
                    {cat.title}
                  </Link>
                  {cat.sub.map((s, i) => (
                    <Link
                      key={s}
                      href={cat.subHrefs[i]}
                      className="font-mono text-[10px] text-slate block py-0.5 pl-3 uppercase tracking-wider hover:text-teal"
                      onClick={() => setMobileOpen(false)}
                    >
                      {s}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
            <div className="border-t pt-4 space-y-3" style={{ borderTopColor: 'rgba(14,15,13,0.1)' }}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block font-display text-sm font-medium text-ink uppercase tracking-wide hover:text-teal"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <Link
              href="/contact/?quote=true"
              className="block bg-teal text-white text-center font-display text-sm font-semibold px-5 py-3 mt-4 uppercase tracking-wider hover:bg-teal-deep"
              style={{ borderRadius: '2px' }}
              onClick={() => setMobileOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
