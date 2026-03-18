'use client'
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { ServiceCard3D } from '@/components/ui/ServiceCard3D'
import {
  Building2, PenTool, Layers3, Sun, Palette,
  Puzzle, Clock, ShieldCheck, TrendingUp,
  FileUp, Pencil, Search, Download,
  CheckCircle2, ArrowRight
} from 'lucide-react'

// Dynamically import 3D component (no SSR)
const HeroBIMViewer = dynamic(
  () => import('@/components/3d/HeroBIMViewer').then((m) => m.HeroBIMViewer),
  { ssr: false, loading: () => <div className="w-full h-full bg-navy/50" /> }
)

// ─── Animated counter ───────────────────────────────────────────────
const Counter = ({ end, suffix = '' }: { end: number; suffix?: string }) => {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let start = 0
        const step = end / 60
        const timer = setInterval(() => {
          start += step
          if (start >= end) { setCount(end); clearInterval(timer) }
          else setCount(Math.floor(start))
        }, 33)
        observer.disconnect()
      }
    })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end])
  return <span ref={ref}>{count}{suffix}</span>
}

// ─── Service data ───────────────────────────────────────────────────
const services = [
  {
    title: 'Architecture & Interior Design',
    description: 'Residential and commercial design solutions that blend aesthetics with functionality.',
    href: '/services/architecture-interior-design/',
    icon: <Building2 size={24} />,
  },
  {
    title: 'CAD Drafting Services',
    description: 'Precise technical drawings for architecture, structure, and MEP systems.',
    href: '/services/cad-drafting-services/',
    icon: <PenTool size={24} />,
  },
  {
    title: 'BIM Services',
    description: 'Intelligent 3D modeling with clash detection and coordination for error-free projects.',
    href: '/services/bim-building-information-modeling/',
    icon: <Layers3 size={24} />,
  },
  {
    title: 'Solar Design & Engineering',
    description: 'Permit-ready solar designs and engineering stamps for residential and commercial projects.',
    href: '/services/solar-design-engineering/',
    icon: <Sun size={24} />,
  },
  {
    title: 'Graphic Design',
    description: 'Professional branding, marketing materials, and presentations that make an impact.',
    href: '/services/graphic-design/',
    icon: <Palette size={24} />,
  },
]

const trustPoints = [
  { icon: <Puzzle size={22} />, title: 'Multi-disciplinary expertise', desc: 'Architecture, BIM, CAD, solar, and design—all handled by specialists who understand your industry.' },
  { icon: <Clock size={22} />, title: 'Faster project execution', desc: 'Streamlined workflows and experienced teams mean your projects move forward without delays.' },
  { icon: <ShieldCheck size={22} />, title: 'High accuracy and reliability', desc: 'Precision-driven processes ensure your designs are accurate, compliant, and ready for execution.' },
  { icon: <TrendingUp size={22} />, title: 'Scalable support', desc: 'From one-off projects to ongoing partnerships, we scale our services to match your needs.' },
]

const steps = [
  { icon: <FileUp size={28} />, title: 'Share Your Requirements', desc: 'Tell us about your project, goals, and timeline.' },
  { icon: <Pencil size={28} />, title: 'Plan & Design', desc: 'Our experts create detailed plans and designs tailored to your needs.' },
  { icon: <Search size={28} />, title: 'Review & Refine', desc: 'Collaborate with us to refine the output until it\'s perfect.' },
  { icon: <Download size={28} />, title: 'Deliver Output', desc: 'Receive final, ready-to-use files and documentation.' },
]

const portfolio = [
  { cat: 'BIM', title: 'Modern Residential BIM Model', desc: 'Complete BIM model for a 50-unit residential complex', color: 'from-navy/80' },
  { cat: 'Solar', title: 'Commercial Solar Installation', desc: '500kW commercial solar permit plans', color: 'from-teal/80' },
  { cat: 'Architecture', title: 'Luxury Interior Visualization', desc: 'Photorealistic 3D renders for a luxury apartment', color: 'from-charcoal/80' },
  { cat: 'CAD', title: 'Technical CAD Drawings', desc: 'Complete MEP coordination drawings', color: 'from-navy/80' },
  { cat: 'Graphic', title: 'Real Estate Branding Package', desc: 'Complete brand identity for new development', color: 'from-teal/60' },
  { cat: 'BIM', title: 'Clash Detection Analysis', desc: 'MEP coordination with 200+ clashes resolved', color: 'from-charcoal/80' },
]

const industries = [
  { icon: <Building2 size={28} />, title: 'Real Estate Developers', desc: 'From concept to marketing, we support your entire development lifecycle.' },
  { icon: <Sun size={28} />, title: 'Solar Installers & EPC Companies', desc: 'Permit-ready designs and engineering support for faster project completion.' },
  { icon: <PenTool size={28} />, title: 'Architects & Engineers', desc: 'CAD, BIM, and visualization services to enhance your design capabilities.' },
  { icon: <Layers3 size={28} />, title: 'Businesses & Corporates', desc: 'Interior design, branding, and presentation materials for your business needs.' },
]

// ─── HOMEPAGE ──────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <main className="overflow-x-hidden">

      {/* ═══ SECTION 2: HERO ════════════════════════════════════════ */}
      <section className="relative w-full h-screen min-h-[600px] bg-navy overflow-hidden">
        {/* Blueprint grid overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'linear-gradient(rgba(13,148,136,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(13,148,136,0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* 3D Viewer — right side */}
        <div className="absolute inset-0 lg:left-1/2">
          <HeroBIMViewer />
        </div>

        {/* Gradient overlay left */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent lg:via-navy/60" />

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-[1280px] mx-auto px-8 w-full">
            <div className="max-w-[680px]">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 bg-teal/10 border border-teal/20 text-teal text-xs font-mono tracking-widest uppercase px-4 py-2 rounded-full mb-6">
                <span className="w-1.5 h-1.5 bg-teal rounded-full" />
                Architecture × Engineering × Sustainability
              </div>

              {/* H1 */}
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight tracking-tight mb-6">
                Design.<br />
                Engineer.<br />
                <span className="text-teal">Deliver.</span>
              </h1>

              {/* H2 */}
              <h2 className="font-body text-lg md:text-xl text-white/70 font-light leading-relaxed mb-4">
                Architecture, BIM, CAD, Solar & Design Solutions<br className="hidden md:block" />
                for Faster, Smarter Project Execution
              </h2>

              <p className="text-sm text-white/50 leading-relaxed mb-8 max-w-lg">
                Envitect Designs combines environment + technology to help businesses design, plan, and execute projects with precision, speed, and clarity.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 mb-8">
                <Link
                  href="/contact/?consultation=true"
                  className="inline-flex items-center gap-2 bg-teal text-white font-display text-sm font-medium px-6 py-3 rounded-lg hover:bg-teal-dark transition-all hover:shadow-lg hover:shadow-teal/20 hover:-translate-y-0.5"
                >
                  Get Free Consultation <ArrowRight size={16} />
                </Link>
                <Link
                  href="/services/"
                  className="inline-flex items-center gap-2 border border-white/20 text-white font-display text-sm font-medium px-6 py-3 rounded-lg hover:bg-white/10 transition-all"
                >
                  Explore Services
                </Link>
              </div>

              {/* Trust bar */}
              <div className="flex flex-wrap gap-4 text-xs text-white/50 font-mono">
                {['Multi-disciplinary expertise', 'Fast turnaround', 'Global client support'].map((t) => (
                  <span key={t} className="flex items-center gap-1.5">
                    <CheckCircle2 size={12} className="text-teal" /> {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 3: SERVICES OVERVIEW ══════════════════════════ */}
      <section className="bg-white py-24 px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-12">
            <span className="font-mono text-xs text-teal uppercase tracking-widest mb-3 block">What We Do</span>
            <h2 className="font-display text-4xl md:text-5xl font-light text-navy mb-4">
              Everything You Need to Design<br className="hidden md:block" /> & Execute Projects
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              From concept to completion, we provide the expertise and tools to bring your projects to life.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {services.map((s, i) => (
              <ServiceCard3D key={s.href} {...s} index={i} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/services/" className="inline-flex items-center gap-2 text-teal font-medium text-sm hover:gap-3 transition-all">
              View All Services <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 4: WHY CHOOSE ENVITECT ════════════════════════ */}
      <section className="bg-[#F8FAFC] py-24 px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-mono text-xs text-teal uppercase tracking-widest mb-3 block">Why Us</span>
              <h2 className="font-display text-4xl md:text-5xl font-light text-navy mb-4">
                Why Businesses Choose<br />Envitect Designs
              </h2>
              <p className="text-slate-500 mb-8">
                We're not just a service provider—we're your project partner.
              </p>
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 bg-navy text-white font-display text-sm font-medium px-6 py-3 rounded-lg hover:bg-charcoal transition-colors"
              >
                Start Your Project <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {trustPoints.map((tp) => (
                <div
                  key={tp.title}
                  className="bg-white rounded-xl p-6 border border-slate-100 hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 bg-teal/8 rounded-lg flex items-center justify-center text-teal mb-3">
                    {tp.icon}
                  </div>
                  <h3 className="font-display text-sm font-medium text-navy mb-2">{tp.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{tp.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 5: PROCESS ════════════════════════════════════ */}
      <section className="bg-white py-24 px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-xs text-teal uppercase tracking-widest mb-3 block">How It Works</span>
            <h2 className="font-display text-4xl md:text-5xl font-light text-navy mb-4">
              Our Simple 4-Step Process
            </h2>
            <p className="text-slate-500">Getting started is easy. Here's how we work with you.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-teal via-teal/30 to-teal z-0" />

            {steps.map((step, i) => (
              <div key={step.title} className="relative z-10 text-center">
                <div className="w-16 h-16 bg-teal text-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-teal/20">
                  {step.icon}
                </div>
                <div className="font-mono text-xs text-teal mb-2">STEP {i + 1}</div>
                <h3 className="font-display text-base font-medium text-navy mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact/?consultation=true"
              className="inline-flex items-center gap-2 bg-teal text-white font-display text-sm font-medium px-6 py-3 rounded-lg hover:bg-teal-dark transition-colors"
            >
              Get Free Consultation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 6: PORTFOLIO PREVIEW ══════════════════════════ */}
      <section className="bg-gradient-to-b from-navy to-[#1e293b] py-24 px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="font-mono text-xs text-teal uppercase tracking-widest mb-3 block">Our Work</span>
              <h2 className="font-display text-4xl md:text-5xl font-light text-white">
                See What We've Delivered
              </h2>
            </div>
            <Link href="/portfolio/" className="inline-flex items-center gap-2 text-teal font-medium text-sm flex-shrink-0">
              View Full Portfolio <ArrowRight size={14} />
            </Link>
          </div>

          {/* 3D masonry grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolio.map((item, i) => (
              <div
                key={item.title}
                className={`group relative rounded-xl overflow-hidden border border-white/5 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal/10 ${i === 0 || i === 3 ? 'lg:col-span-2' : ''}`}
                style={{ minHeight: i % 3 === 1 ? 260 : 200 }}
              >
                {/* Simulated project image */}
                <div
                  className={`w-full h-full min-h-[200px] bg-gradient-to-br ${item.color} to-transparent flex flex-col justify-between p-6`}
                  style={{
                    background: `linear-gradient(135deg, ${
                      item.cat === 'BIM' ? '#0F172A' :
                      item.cat === 'Solar' ? '#0D9488' :
                      item.cat === 'Architecture' ? '#334155' :
                      item.cat === 'CAD' ? '#1e293b' : '#0D9488'
                    }88, #0F172A)`,
                  }}
                >
                  {/* Blueprint grid on cards */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: 'linear-gradient(rgba(13,148,136,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(13,148,136,0.3) 1px, transparent 1px)',
                      backgroundSize: '20px 20px',
                    }}
                  />
                  <div className="relative z-10">
                    <span className="inline-block bg-teal/20 text-teal text-xs font-mono px-3 py-1 rounded-full border border-teal/30">
                      {item.cat}
                    </span>
                  </div>
                  <div className="relative z-10">
                    <h3 className="font-display text-lg font-medium text-white mb-1">{item.title}</h3>
                    <p className="text-xs text-white/60">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 7: CASE STUDIES STATS ════════════════════════ */}
      <section className="bg-white py-24 px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-xs text-teal uppercase tracking-widest mb-3 block">Results</span>
            <h2 className="font-display text-4xl md:text-5xl font-light text-navy mb-4">
              Real Results for Real Clients
            </h2>
            <p className="text-slate-500">See how we've helped businesses achieve their goals.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { num: 40, suffix: '%', label: 'Reduction in Project Errors', context: 'With BIM clash detection' },
              { num: 50, suffix: '%', label: 'Faster Solar Permit Approvals', context: 'With accurate permit plans' },
              { num: 3, suffix: 'x', label: 'Improved Design Efficiency', context: 'With streamlined CAD workflows' },
            ].map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className="font-display text-6xl font-light text-teal mb-2">
                  <Counter end={stat.num} suffix={stat.suffix} />
                </div>
                <div className="font-display text-lg font-medium text-navy mb-1">{stat.label}</div>
                <div className="font-mono text-xs text-slate-400">{stat.context}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/case-studies/" className="inline-flex items-center gap-2 text-teal font-medium text-sm hover:gap-3 transition-all">
              View Case Studies <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 8: INDUSTRIES ════════════════════════════════ */}
      <section className="bg-[#F8FAFC] py-24 px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-12">
            <span className="font-mono text-xs text-teal uppercase tracking-widest mb-3 block">Who We Serve</span>
            <h2 className="font-display text-4xl md:text-5xl font-light text-navy mb-4">
              Industries We Work With
            </h2>
            <p className="text-slate-500">We serve a diverse range of industries with specialized expertise.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind) => (
              <div key={ind.title} className="bg-white rounded-xl p-6 border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-teal/8 rounded-xl flex items-center justify-center text-teal mb-4">
                  {ind.icon}
                </div>
                <h3 className="font-display text-base font-medium text-navy mb-2">{ind.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 9: FINAL CTA ══════════════════════════════════ */}
      <section className="relative bg-teal py-24 px-8 overflow-hidden">
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative z-10 max-w-[1280px] mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-light text-white mb-4">
            Let's Build Your Next Project
          </h2>
          <p className="text-white/80 mb-8 max-w-md mx-auto">
            We help you design, plan, and execute with confidence. Get started today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact/?consultation=true"
              className="inline-flex items-center gap-2 bg-white text-teal font-display text-sm font-medium px-8 py-3.5 rounded-lg hover:shadow-lg transition-all"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/contact/?quote=true"
              className="inline-flex items-center gap-2 border-2 border-white/40 text-white font-display text-sm font-medium px-8 py-3.5 rounded-lg hover:bg-white/10 transition-all"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
