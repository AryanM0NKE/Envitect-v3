import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | Design + Technology',
  description: 'Learn about Envitect Designs. We\'re a multi-disciplinary design firm combining environment + technology to deliver exceptional project solutions.',
}

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-navy py-24 px-8 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(rgba(13,148,136,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(13,148,136,0.2) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative z-10 max-w-[1280px] mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-teal/10 border border-teal/20 text-teal text-xs font-mono tracking-widest uppercase px-4 py-2 rounded-full mb-6">
            Environment × Technology
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-light text-white mb-4">
            Designing the Future with Environment + Technology
          </h1>
          <p className="text-white/70 text-lg">We're Envitect Designs—where creativity meets precision.</p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-24 px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display text-4xl font-light text-navy mb-6">Our Story</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Envitect Designs was founded with a simple mission: to help businesses design, engineer, and deliver projects with confidence. We combine expertise in architecture, BIM, CAD, solar, and graphic design to provide end-to-end solutions under one roof.
              </p>
              <p className="text-slate-600 leading-relaxed">
                The name says it all — <strong className="text-navy">Envi</strong>ronment + Te<strong className="text-navy">chno</strong>logy. We believe the built environment and sustainable technology must evolve together, and that's the philosophy that drives every project we touch.
              </p>
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-teal pl-6">
                <h3 className="font-display text-lg font-medium text-navy mb-2">Our Mission</h3>
                <p className="text-slate-600 text-sm">To empower businesses with design and engineering solutions that are accurate, efficient, and impactful.</p>
              </div>
              <div className="border-l-4 border-charcoal pl-6">
                <h3 className="font-display text-lg font-medium text-navy mb-2">Our Vision</h3>
                <p className="text-slate-600 text-sm">To be the go-to partner for businesses worldwide seeking multi-disciplinary design and engineering expertise.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-[#F8FAFC] py-24 px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-light text-navy mb-3">Our Approach</h2>
            <p className="text-slate-500">Three simple steps that guide every engagement.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: '01', title: 'Understand', desc: 'We start by deeply understanding your needs, goals, and constraints.' },
              { num: '02', title: 'Design', desc: 'Our experts create solutions tailored to your project, budget, and timeline.' },
              { num: '03', title: 'Deliver', desc: 'We provide high-quality outputs on time, every time—with full support.' },
            ].map((step) => (
              <div key={step.num} className="bg-white rounded-xl p-8 border border-slate-100 text-center">
                <div className="font-mono text-4xl text-teal font-light mb-4">{step.num}</div>
                <h3 className="font-display text-xl font-medium text-navy mb-3">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why clients choose us */}
      <section className="bg-white py-24 px-8">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="font-display text-4xl font-light text-navy mb-8">Why Clients Choose Us</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              'Multi-disciplinary expertise under one roof',
              'Fast turnaround times',
              'Global client support (India & US)',
              'High accuracy and reliability',
              'Scalable services for any project size',
              'Transparent communication throughout',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 bg-teal/5 rounded-lg border border-teal/10">
                <CheckCircle2 size={16} className="text-teal flex-shrink-0" />
                <span className="text-sm text-navy">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 px-8">
        <div className="max-w-[1280px] mx-auto text-center">
          <h2 className="font-display text-3xl font-light text-white mb-4">Let's work together.</h2>
          <p className="text-white/60 mb-8">Join the businesses that trust Envitect Designs for their projects.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact/?consultation=true" className="inline-flex items-center gap-2 bg-teal text-white font-display text-sm font-medium px-8 py-3.5 rounded-lg hover:bg-teal-dark transition-colors">
              Get a Consultation <ArrowRight size={16} />
            </Link>
            <Link href="/careers/" className="inline-flex items-center gap-2 border border-white/20 text-white font-display text-sm font-medium px-8 py-3.5 rounded-lg hover:bg-white/10 transition-colors">
              Join Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
