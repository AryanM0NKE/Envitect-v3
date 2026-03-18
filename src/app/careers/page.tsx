import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, MapPin, Clock, Briefcase } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Careers | Join Envitect Designs',
  description: 'Build your career with Envitect Designs. We\'re hiring architects, BIM modelers, CAD drafters, solar designers, and graphic designers. Apply today!',
}

const openings = [
  {
    title: 'BIM Modeler',
    type: 'Full-time',
    location: 'Remote',
    dept: 'BIM Services',
    requirements: ['Revit expertise required', '2+ years BIM experience', 'Coordination and clash detection experience', 'Navisworks is a plus'],
  },
  {
    title: 'CAD Drafter',
    type: 'Full-time',
    location: 'Remote',
    dept: 'CAD Drafting',
    requirements: ['AutoCAD proficiency required', 'Architecture or structural focus', '1+ year professional drafting experience', 'Revit knowledge is a plus'],
  },
  {
    title: 'Solar Designer',
    type: 'Full-time',
    location: 'Remote',
    dept: 'Solar Design',
    requirements: ['Solar design experience required', 'Aurora or Helioscope proficiency', 'NABCEP certification preferred', 'Knowledge of NEC and local codes'],
  },
  {
    title: 'Graphic Designer',
    type: 'Part-time',
    location: 'Remote',
    dept: 'Graphic Design',
    requirements: ['Portfolio required', 'Adobe Creative Suite proficiency', 'Real estate or architecture experience a plus', 'Strong typography and layout skills'],
  },
]

const perks = [
  { title: 'Work on diverse projects', desc: 'From residential homes to large commercial developments across the globe.' },
  { title: 'Fully remote', desc: 'Work from anywhere. We care about your output, not your location.' },
  { title: 'Grow with us', desc: 'Regular feedback, skill development opportunities, and a clear growth path.' },
  { title: 'Collaborative culture', desc: 'Work alongside specialists across architecture, engineering, solar, and design.' },
  { title: 'Competitive pay', desc: 'Compensation that reflects your skill and contribution to every project.' },
  { title: 'Flexible hours', desc: 'We operate across time zones and accommodate flexible working arrangements.' },
]

export default function CareersPage() {
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
            Careers
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-light text-white mb-4">
            Build Your Career<br />with Envitect Designs
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Join a team that's shaping the future of architecture, engineering, and design. We work on meaningful projects — and we invest in the people who deliver them.
          </p>
        </div>
      </section>

      {/* Why Join */}
      <section className="bg-white py-24 px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-12">
            <span className="font-mono text-xs text-teal uppercase tracking-widest mb-3 block">Why Envitect</span>
            <h2 className="font-display text-4xl font-light text-navy">Why Work With Us</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((perk) => (
              <div key={perk.title} className="bg-[#F8FAFC] rounded-xl p-6 border border-slate-100">
                <h3 className="font-display text-base font-medium text-navy mb-2">{perk.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-[#F8FAFC] py-24 px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-12">
            <span className="font-mono text-xs text-teal uppercase tracking-widest mb-3 block">We're Hiring</span>
            <h2 className="font-display text-4xl font-light text-navy">Open Positions</h2>
          </div>
          <div className="space-y-4">
            {openings.map((job) => (
              <div key={job.title} className="bg-white rounded-xl border border-slate-100 p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="inline-flex items-center gap-1 bg-teal/10 text-teal text-xs font-mono px-2.5 py-1 rounded-full">
                        <Briefcase size={10} /> {job.dept}
                      </span>
                      <span className="inline-flex items-center gap-1 bg-slate-100 text-slate-500 text-xs font-mono px-2.5 py-1 rounded-full">
                        <Clock size={10} /> {job.type}
                      </span>
                      <span className="inline-flex items-center gap-1 bg-slate-100 text-slate-500 text-xs font-mono px-2.5 py-1 rounded-full">
                        <MapPin size={10} /> {job.location}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-medium text-navy mb-3">{job.title}</h3>
                    <ul className="space-y-1">
                      {job.requirements.map((req) => (
                        <li key={req} className="text-sm text-slate-500 flex items-center gap-2">
                          <span className="w-1 h-1 bg-teal rounded-full flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href="#apply"
                    className="inline-flex items-center gap-2 bg-navy text-white font-display text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-charcoal transition-colors flex-shrink-0"
                  >
                    Apply Now <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="bg-white py-24 px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <span className="font-mono text-xs text-teal uppercase tracking-widest mb-3 block">Apply Now</span>
              <h2 className="font-display text-4xl font-light text-navy">Send Us Your Application</h2>
              <p className="text-slate-500 mt-3">We review every application carefully. You'll hear back from us within 5 business days.</p>
            </div>
            <div className="bg-[#F8FAFC] rounded-2xl border border-slate-100 p-8">
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block font-mono text-xs text-slate-500 uppercase tracking-wider mb-1.5">Full Name *</label>
                  <input type="text" className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-teal transition-colors" placeholder="Your name" />
                </div>
                <div>
                  <label className="block font-mono text-xs text-slate-500 uppercase tracking-wider mb-1.5">Email *</label>
                  <input type="email" className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-teal transition-colors" placeholder="your@email.com" />
                </div>
              </div>
              <div className="mb-4">
                <label className="block font-mono text-xs text-slate-500 uppercase tracking-wider mb-1.5">Position Applying For *</label>
                <select className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-teal transition-colors text-slate-700">
                  <option>Select a position</option>
                  {openings.map((j) => <option key={j.title}>{j.title}</option>)}
                  <option>Other / General Application</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block font-mono text-xs text-slate-500 uppercase tracking-wider mb-1.5">Portfolio / LinkedIn URL</label>
                <input type="url" className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-teal transition-colors" placeholder="https://" />
              </div>
              <div className="mb-4">
                <label className="block font-mono text-xs text-slate-500 uppercase tracking-wider mb-1.5">Upload CV / Resume *</label>
                <input type="file" className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-teal transition-colors" accept=".pdf,.doc,.docx" />
              </div>
              <div className="mb-6">
                <label className="block font-mono text-xs text-slate-500 uppercase tracking-wider mb-1.5">Tell Us About Yourself *</label>
                <textarea rows={4} className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-teal transition-colors resize-none" placeholder="Your experience, skills, and why you want to join Envitect Designs..." />
              </div>
              <button className="w-full bg-teal text-white font-display text-sm font-medium py-3.5 rounded-lg hover:bg-teal-dark transition-colors">
                Submit Application
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
