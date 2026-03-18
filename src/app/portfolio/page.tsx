'use client'
import type { Metadata } from 'next'
import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const projects = [
  { cat: 'BIM', title: 'Modern Residential BIM Model', client: 'Residential Developer', desc: 'Complete BIM model for a 50-unit residential complex', color: '#0F172A' },
  { cat: 'Solar', title: 'Commercial Solar Installation Plans', client: 'Solar Installer', desc: '500kW commercial solar permit plans', color: '#0D9488' },
  { cat: 'Architecture', title: 'Luxury Interior Visualization', client: 'Interior Designer', desc: 'Photorealistic 3D renders for a luxury apartment', color: '#334155' },
  { cat: 'CAD', title: 'Technical CAD Drawings', client: 'Engineering Firm', desc: 'Complete MEP coordination drawings', color: '#1e293b' },
  { cat: 'Graphic', title: 'Real Estate Branding Package', client: 'Real Estate Developer', desc: 'Complete brand identity for new development', color: '#0F766E' },
  { cat: 'BIM', title: 'Clash Detection Analysis', client: 'General Contractor', desc: 'MEP coordination with 200+ clashes resolved', color: '#334155' },
]

const filters = ['All', 'Architecture', 'BIM', 'CAD', 'Solar', 'Graphic']

export default function PortfolioPage() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter((p) => p.cat === active)

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-navy py-20 px-8 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(rgba(13,148,136,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(13,148,136,0.2) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative z-10 max-w-[1280px] mx-auto">
          <div className="inline-flex items-center gap-2 bg-teal/10 border border-teal/20 text-teal text-xs font-mono tracking-widest uppercase px-4 py-2 rounded-full mb-6">
            Our Work
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-light text-white mb-4">
            Our Work Speaks<br />Through Results
          </h1>
          <p className="text-white/70 text-lg max-w-xl">
            Explore our portfolio of projects across architecture, BIM, CAD, solar, and design.
          </p>
        </div>
      </section>

      {/* Portfolio */}
      <section className="bg-[#F8FAFC] py-24 px-8">
        <div className="max-w-[1280px] mx-auto">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`font-mono text-xs uppercase tracking-wider px-4 py-2 rounded-full border transition-all ${
                  active === f
                    ? 'bg-teal text-white border-teal'
                    : 'bg-white text-slate-500 border-slate-200 hover:border-teal hover:text-teal'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((item, i) => (
              <div
                key={item.title}
                className={`group relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
                style={{ minHeight: 240 }}
              >
                <div
                  className="w-full h-full min-h-[240px] flex flex-col justify-between p-6"
                  style={{
                    background: `linear-gradient(135deg, ${item.color}ee, ${item.color}88)`,
                  }}
                >
                  {/* Blueprint grid overlay */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: 'linear-gradient(rgba(13,148,136,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(13,148,136,0.4) 1px, transparent 1px)',
                      backgroundSize: '20px 20px',
                    }}
                  />
                  <div className="relative z-10">
                    <span className="inline-block bg-teal/20 text-teal text-xs font-mono px-3 py-1 rounded-full border border-teal/30">
                      {item.cat}
                    </span>
                  </div>
                  <div className="relative z-10">
                    <p className="text-xs font-mono text-white/50 mb-1">{item.client}</p>
                    <h3 className="font-display text-xl font-medium text-white mb-1">{item.title}</h3>
                    <p className="text-xs text-white/60">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/contact/?consultation=true" className="inline-flex items-center gap-2 bg-teal text-white font-display text-sm font-medium px-8 py-3.5 rounded-lg hover:bg-teal-dark transition-colors">
              Start Your Project <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
