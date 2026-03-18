'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'

const faqs = [
  {
    cat: 'General',
    items: [
      { q: 'What services does Envitect Designs offer?', a: 'We offer architecture and interior design, CAD drafting, BIM services, solar design and engineering, and graphic design services — all under one roof.' },
      { q: 'How do I get started?', a: 'Simply fill out our contact form or schedule a free consultation. We\'ll discuss your project and provide a customized quote within 24 hours.' },
      { q: 'What is your turnaround time?', a: 'Turnaround varies by service. Most CAD drafting projects take 2-5 business days, solar permit plans take 24-48 hours, and BIM models may take 1-2 weeks. We\'ll provide a timeline with your quote.' },
    ],
  },
  {
    cat: 'Services',
    items: [
      { q: 'Do you work with international clients?', a: 'Yes! We work with clients globally, with strong presence in the US and India. We accommodate different time zones and communication preferences.' },
      { q: 'What software do you use?', a: 'We use industry-standard software including AutoCAD, Revit, SketchUp, 3ds Max, Adobe Creative Suite, and specialized solar design tools like Aurora and PVWatts.' },
      { q: 'Can you handle large projects?', a: 'Absolutely. We have the capacity and expertise to handle projects of all sizes, from single-family homes to large commercial developments.' },
    ],
  },
  {
    cat: 'Pricing',
    items: [
      { q: 'How do you price your services?', a: 'Pricing depends on project scope, complexity, and timeline. We provide detailed quotes after understanding your requirements — no hidden fees.' },
      { q: 'Do you offer ongoing partnerships?', a: 'Yes, we offer retainer arrangements for clients with ongoing design needs. This ensures priority service and consistent pricing.' },
    ],
  },
]

const AccordionItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-slate-100">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left gap-4"
      >
        <span className="font-display text-base font-medium text-navy">{q}</span>
        <ChevronDown size={16} className={`text-teal flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="pb-4">
          <p className="text-sm text-slate-600 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQPage() {
  return (
    <div className="pt-20">
      <section className="bg-navy py-20 px-8 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(rgba(13,148,136,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(13,148,136,0.2) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative z-10 max-w-[1280px] mx-auto">
          <h1 className="font-display text-5xl font-light text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-white/70 text-lg">Find answers to common questions about our services.</p>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-24 px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              {faqs.map((cat) => (
                <div key={cat.cat}>
                  <h2 className="font-mono text-xs text-teal uppercase tracking-widest mb-4">{cat.cat}</h2>
                  <div className="bg-white rounded-xl border border-slate-100 px-6">
                    {cat.items.map((item) => (
                      <AccordionItem key={item.q} q={item.q} a={item.a} />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <div className="bg-navy rounded-2xl p-6 text-white sticky top-24">
                <h3 className="font-display text-lg font-medium mb-3">Still have questions?</h3>
                <p className="text-sm text-white/70 mb-6">Our team is here to help. Reach out and we'll respond within 24 hours.</p>
                <Link href="/contact/" className="flex items-center justify-center gap-2 bg-teal text-white font-display text-sm font-medium py-3 rounded-lg hover:bg-teal-dark transition-colors">
                  Contact Us <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
