import React from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

interface ServicePageProps {
  hero: {
    h1: string
    subheadline: string
    eyebrow?: string
  }
  heroVisual?: React.ReactNode
  intro?: string
  sections: {
    title: string
    items: { title: string; desc: string }[]
  }[]
  benefits: string[]
  relatedServices?: { label: string; href: string }[]
  cta: { text: string; href: string }
}

export const ServicePageTemplate = ({
  hero,
  heroVisual,
  intro,
  sections,
  benefits,
  relatedServices,
  cta,
}: ServicePageProps) => (
  <div className="pt-20">
    {/* Hero */}
    <section className="relative bg-navy py-24 px-8 overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(10,138,122,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(10,138,122,0.15) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="relative z-10 max-w-[1280px] mx-auto">
        {heroVisual ? (
          /* ── 2-column layout when a 3D viewer is provided ── */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text column */}
            <div>
              {hero.eyebrow && (
                <div className="inline-flex items-center gap-2 bg-teal/10 border border-teal/20 text-teal text-xs font-mono tracking-widest uppercase px-4 py-2 rounded-full mb-6">
                  {hero.eyebrow}
                </div>
              )}
              <h1 className="font-display text-4xl md:text-6xl font-light text-white mb-4">
                {hero.h1}
              </h1>
              <p className="text-white/70 text-lg mb-8">{hero.subheadline}</p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact/?consultation=true"
                  className="inline-flex items-center gap-2 bg-teal text-white font-display text-sm font-medium px-6 py-3 rounded-lg hover:bg-teal-deep transition-colors"
                >
                  Get Free Consultation <ArrowRight size={16} />
                </Link>
                <Link
                  href="/portfolio/"
                  className="inline-flex items-center gap-2 border border-white/20 text-white font-display text-sm font-medium px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
            {/* 3D viewer column */}
            <div className="h-[380px] lg:h-[460px] rounded-2xl overflow-hidden border border-teal/20 bg-ink/40 backdrop-blur-sm">
              {heroVisual}
            </div>
          </div>
        ) : (
          /* ── Original single-column layout ── */
          <>
            {hero.eyebrow && (
              <div className="inline-flex items-center gap-2 bg-teal/10 border border-teal/20 text-teal text-xs font-mono tracking-widest uppercase px-4 py-2 rounded-full mb-6">
                {hero.eyebrow}
              </div>
            )}
            <h1 className="font-display text-4xl md:text-6xl font-light text-white mb-4 max-w-3xl">
              {hero.h1}
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mb-8">{hero.subheadline}</p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact/?consultation=true"
                className="inline-flex items-center gap-2 bg-teal text-white font-display text-sm font-medium px-6 py-3 rounded-lg hover:bg-teal-deep transition-colors"
              >
                Get Free Consultation <ArrowRight size={16} />
              </Link>
              <Link
                href="/portfolio/"
                className="inline-flex items-center gap-2 border border-white/20 text-white font-display text-sm font-medium px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                View Portfolio
              </Link>
            </div>
          </>
        )}
      </div>
    </section>

    {/* Intro */}
    {intro && (
      <section className="bg-white py-16 px-8">
        <div className="max-w-[1280px] mx-auto max-w-3xl">
          <p className="text-lg text-slate-600 leading-relaxed border-l-4 border-teal pl-6">{intro}</p>
        </div>
      </section>
    )}

    {/* Service sections */}
    <section className="bg-[#F8FAFC] py-24 px-8">
      <div className="max-w-[1280px] mx-auto">
        {sections.map((section, si) => (
          <div key={section.title} className={`${si > 0 ? 'mt-16' : ''}`}>
            <h2 className="font-display text-3xl font-light text-navy mb-8">{section.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {section.items.map((item, i) => (
                <div
                  key={item.title}
                  className="bg-white rounded-xl p-6 border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-8 h-8 bg-teal text-white rounded-lg flex items-center justify-center font-display text-sm font-medium mb-4">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-display text-base font-medium text-navy mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Benefits */}
    <section className="bg-white py-16 px-8">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="font-display text-2xl font-light text-navy mb-6">Benefits</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {benefits.map((b) => (
            <div key={b} className="flex items-start gap-3 p-4 bg-teal/5 rounded-lg border border-teal/10">
              <CheckCircle2 size={16} className="text-teal mt-0.5 flex-shrink-0" />
              <span className="text-sm text-navy">{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Related services */}
    {relatedServices && relatedServices.length > 0 && (
      <section className="bg-[#F8FAFC] py-12 px-8">
        <div className="max-w-[1280px] mx-auto">
          <h3 className="font-mono text-xs text-slate-400 uppercase tracking-widest mb-4">Related Services</h3>
          <div className="flex flex-wrap gap-3">
            {relatedServices.map((rs) => (
              <Link
                key={rs.href}
                href={rs.href}
                className="inline-flex items-center gap-2 bg-white border border-slate-200 text-navy text-sm font-medium px-4 py-2 rounded-lg hover:border-teal hover:text-teal transition-colors"
              >
                {rs.label} <ArrowRight size={12} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    )}

    {/* CTA */}
    <section className="bg-teal py-16 px-8">
      <div className="max-w-[1280px] mx-auto text-center">
        <h2 className="font-display text-3xl font-light text-white mb-4">{cta.text}</h2>
        <Link
          href={cta.href}
          className="inline-flex items-center gap-2 bg-white text-teal font-display text-sm font-medium px-8 py-3.5 rounded-lg hover:shadow-lg transition-all"
        >
          Get Free Consultation <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  </div>
)
