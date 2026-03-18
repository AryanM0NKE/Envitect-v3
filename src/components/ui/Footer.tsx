import React from 'react'
import Link from 'next/link'
import { LogoFull } from './Logo'
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react'

const footerCols = [
  {
    title: 'Services',
    links: [
      { label: 'Architecture & Interior Design', href: '/services/architecture-interior-design/' },
      { label: 'CAD Drafting Services',           href: '/services/cad-drafting-services/' },
      { label: 'BIM Services',                    href: '/services/bim-building-information-modeling/' },
      { label: 'Solar Design & Engineering',      href: '/services/solar-design-engineering/' },
      { label: 'Graphic Design',                  href: '/services/graphic-design/' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us',     href: '/about/' },
      { label: 'Careers',      href: '/careers/' },
      { label: 'Blog',         href: '/blog/' },
      { label: 'Case Studies', href: '/case-studies/' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Portfolio',       href: '/portfolio/' },
      { label: 'FAQ',             href: '/support/faq/' },
      { label: 'Support',         href: '/support/faq/' },
      { label: 'Privacy Policy',  href: '/privacy-policy/' },
    ],
  },
]

export const Footer = () => (
  /* bg-ink (#0E0F0D) per brand guidelines — primary dark background */
  <footer className="bg-ink text-white" style={{ position: 'relative' }}>
    {/* Teal left accent band */}
    <div
      className="absolute left-0 top-0 bottom-0"
      style={{ width: '4px', background: 'linear-gradient(180deg, #0A8A7A 0%, #065A4F 100%)' }}
    />

    {/* Subtle blueprint grid overlay */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '56px 56px',
      }}
    />

    <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="max-w-[1280px] mx-auto px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Col 1: Brand */}
          <div>
            <LogoFull dark size="md" />
            {/* Cormorant Garamond italic for sub-description per brand voice */}
            <p className="mt-4 font-body font-light text-sm leading-relaxed max-w-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Multidisciplinary design studio merging architectural precision with environmental innovation.
            </p>
            {/* Brand promise italic serif accent */}
            <p className="mt-3 font-serif italic text-sm" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '13px' }}>
              Design. Engineer. Deliver.
            </p>
            <div className="flex gap-4 mt-6">
              {[
                { Icon: Linkedin,  href: '#', label: 'LinkedIn' },
                { Icon: Twitter,   href: '#', label: 'Twitter' },
                { Icon: Instagram, href: '#', label: 'Instagram' },
                { Icon: Youtube,   href: '#', label: 'YouTube' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 border flex items-center justify-center text-slate hover:text-teal hover:border-teal transition-colors"
                  style={{ borderColor: 'rgba(255,255,255,0.1)', borderRadius: '2px' }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Cols 2–4: Nav Links */}
          {footerCols.map((col) => (
            <div key={col.title}>
              {/* Column header — DM Mono uppercase */}
              <h4
                className="font-mono text-white mb-4 uppercase"
                style={{ fontSize: '10px', letterSpacing: '0.2em', fontWeight: 500 }}
              >
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-display font-light text-sm transition-colors hover:text-teal"
                      style={{ color: 'rgba(255,255,255,0.45)' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div>
            <h4
              className="font-mono text-white mb-4 uppercase"
              style={{ fontSize: '10px', letterSpacing: '0.2em', fontWeight: 500 }}
            >
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm font-light" style={{ color: 'rgba(255,255,255,0.45)' }}>
                <Mail size={14} className="text-teal flex-shrink-0" />
                <a href="mailto:hello@envitectdesigns.com" className="hover:text-teal transition-colors">
                  hello@envitectdesigns.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm font-light" style={{ color: 'rgba(255,255,255,0.45)' }}>
                <Phone size={14} className="text-teal flex-shrink-0" />
                <a href="tel:+15551234567" className="hover:text-teal transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm font-light" style={{ color: 'rgba(255,255,255,0.45)' }}>
                <MapPin size={14} className="text-teal flex-shrink-0 mt-0.5" />
                <span>Global — India &amp; US Operations</span>
              </li>
            </ul>
            {/* Response indicator with teal pulse */}
            <div
              className="mt-4 inline-flex items-center gap-2 text-teal"
              style={{
                background: 'rgba(10,138,122,0.1)',
                border: '1px solid rgba(10,138,122,0.2)',
                borderRadius: '2px',
                padding: '6px 12px',
              }}
            >
              <span className="w-1.5 h-1.5 bg-teal rounded-full animate-pulse" />
              <span className="font-mono uppercase" style={{ fontSize: '9px', letterSpacing: '0.15em' }}>
                Responds within 24 hours
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div
          className="mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <p className="font-mono uppercase" style={{ fontSize: '9px', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.2)' }}>
            © 2025 Envitect Designs. All rights reserved.
          </p>
          <p className="font-mono uppercase" style={{ fontSize: '9px', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.2)' }}>
            envitectdesigns.com
          </p>
        </div>
      </div>
    </div>
  </footer>
)
