import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Case Studies | Real Project Results',
  description: 'Read our case studies to see how we\'ve helped clients achieve real results. BIM coordination, solar approvals, design efficiency, and more.',
}

const caseStudies = [
  {
    number: '01',
    tag: 'BIM Services',
    title: 'BIM Coordination Reduces Construction Errors by 40%',
    client: 'Commercial Construction Company',
    challenge: 'A fast-growing commercial contractor was experiencing frequent on-site clashes between structural, HVAC, and electrical systems. Each clash triggered costly change orders, schedule delays, and tense sub-contractor disputes. They needed a way to catch these conflicts before construction began.',
    solution: 'Envitect Designs created a fully federated BIM model combining architectural, structural, and MEP Revit models. We ran comprehensive hard and soft clash detection using Navisworks, generating a prioritized clash report with resolution recommendations for every conflict identified.',
    results: [
      '40% reduction in on-site construction errors',
      '2 weeks saved on the overall project schedule',
      'Over 300 clashes identified and resolved pre-construction',
      'Significant reduction in change order costs',
    ],
    stat: '40%',
    statLabel: 'Reduction in errors',
    href: '/contact/?consultation=true',
  },
  {
    number: '02',
    tag: 'Solar Design & Engineering',
    title: 'Solar Installer Achieves 50% Faster Permit Approvals',
    client: 'Regional Solar Installation Company',
    challenge: 'A regional solar installer was losing weeks — sometimes months — waiting for permit approvals. Incomplete documentation, inconsistent drawings, and AHJ rejections were stacking up, forcing their installation crews to wait and their sales pipeline to stall.',
    solution: 'Envitect Designs took over the company\'s permit plan production entirely. We standardized their documentation packages, implemented a quality check process, and delivered permit-ready sets — including structural calculations and code compliance sheets — within 24-48 hours of receiving project data.',
    results: [
      '50% faster average permit approval time',
      '30% more projects completed per quarter',
      'Near-zero first-submission rejection rate',
      'Installation crew downtime virtually eliminated',
    ],
    stat: '50%',
    statLabel: 'Faster approvals',
    href: '/contact/?consultation=true',
  },
  {
    number: '03',
    tag: 'CAD Drafting Services',
    title: 'Architecture Firm Triples Design Output with CAD Support',
    client: 'Boutique Architecture Firm',
    challenge: 'A growing architecture firm had more work than their in-house team could handle. Drafting backlogs were delaying project delivery, frustrating clients, and preventing the principals from taking on new commissions. Hiring full-time staff wasn\'t financially viable.',
    solution: 'Envitect Designs became the firm\'s dedicated CAD drafting partner. Our team handled all production drawing work — floor plans, elevations, sections, and detail drawings — working directly within the firm\'s CAD standards and file organization. The principals focused on design; we handled the production.',
    results: [
      '3x increase in overall design output',
      'Project delivery timelines cut by 35%',
      'Principals freed to focus on client relationships and design',
      'Flexible capacity — scaled up or down as needed',
    ],
    stat: '3×',
    statLabel: 'Design output increase',
    href: '/contact/?consultation=true',
  },
]

export default function CaseStudiesPage() {
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
        <div className="relative z-10 max-w-[1280px] mx-auto">
          <div className="inline-flex items-center gap-2 bg-teal/10 border border-teal/20 text-teal text-xs font-mono tracking-widest uppercase px-4 py-2 rounded-full mb-6">
            Case Studies
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-light text-white mb-4">
            Real Projects.<br />Real Results.
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            See how we've helped businesses solve real challenges and achieve measurable goals across architecture, BIM, CAD, and solar.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-teal py-10 px-8">
        <div className="max-w-[1280px] mx-auto grid grid-cols-3 gap-8 text-center">
          {[
            { stat: '40%', label: 'Reduction in construction errors' },
            { stat: '50%', label: 'Faster solar permit approvals' },
            { stat: '3×', label: 'Improved design output' },
          ].map((item) => (
            <div key={item.label}>
              <div className="font-display text-4xl font-light text-white mb-1">{item.stat}</div>
              <div className="font-mono text-xs text-white/70 uppercase tracking-widest">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-[#F8FAFC] py-24 px-8">
        <div className="max-w-[1280px] mx-auto space-y-16">
          {caseStudies.map((cs, i) => (
            <div
              key={cs.number}
              className={`bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="grid lg:grid-cols-3">
                {/* Stat sidebar */}
                <div className="bg-navy p-10 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-xs text-teal uppercase tracking-widest">{cs.tag}</span>
                    <div className="font-display text-7xl font-light text-white mt-4 mb-2">{cs.stat}</div>
                    <div className="font-mono text-xs text-white/50 uppercase tracking-widest">{cs.statLabel}</div>
                  </div>
                  <div>
                    <div className="font-mono text-xs text-white/30 mb-2">CLIENT</div>
                    <div className="text-sm text-white/70">{cs.client}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-2 p-10">
                  <div className="font-mono text-xs text-slate-400 uppercase tracking-widest mb-3">Case Study {cs.number}</div>
                  <h2 className="font-display text-2xl font-medium text-navy mb-6">{cs.title}</h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="font-mono text-xs text-teal uppercase tracking-widest mb-2">The Challenge</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-mono text-xs text-teal uppercase tracking-widest mb-2">Our Solution</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{cs.solution}</p>
                    </div>
                    <div>
                      <h3 className="font-mono text-xs text-teal uppercase tracking-widest mb-3">Results</h3>
                      <ul className="space-y-2">
                        {cs.results.map((r) => (
                          <li key={r} className="flex items-start gap-2 text-sm text-navy">
                            <CheckCircle2 size={15} className="text-teal flex-shrink-0 mt-0.5" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <Link
                      href={cs.href}
                      className="inline-flex items-center gap-2 text-teal font-medium text-sm hover:gap-3 transition-all"
                    >
                      Get similar results for your project <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 px-8">
        <div className="max-w-[1280px] mx-auto text-center">
          <h2 className="font-display text-4xl font-light text-white mb-4">Want similar results?</h2>
          <p className="text-white/60 mb-8 max-w-md mx-auto">Tell us about your project and we'll show you exactly how we can help.</p>
          <Link
            href="/contact/?consultation=true"
            className="inline-flex items-center gap-2 bg-teal text-white font-display text-sm font-medium px-8 py-3.5 rounded-lg hover:bg-teal-dark transition-colors"
          >
            Get a Free Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
