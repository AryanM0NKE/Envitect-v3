import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Get a Free Consultation',
  description: 'Contact Envitect Designs for a free consultation or quote. We\'re here to help with your architecture, BIM, CAD, solar, and design projects.',
}

export default function ContactPage() {
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
            Get In Touch
          </div>
          <h1 className="font-display text-5xl font-light text-white mb-4">Let's Discuss Your Project</h1>
          <p className="text-white/70 text-lg max-w-xl">Tell us about your project and we'll get back to you within 24 hours.</p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="bg-[#F8FAFC] py-24 px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm">
                <h2 className="font-display text-2xl font-light text-navy mb-6">Send Us a Message</h2>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block font-mono text-xs text-slate-500 uppercase tracking-wider mb-1.5">Name *</label>
                    <input type="text" className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-teal transition-colors" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-slate-500 uppercase tracking-wider mb-1.5">Email *</label>
                    <input type="email" className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-teal transition-colors" placeholder="your@email.com" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block font-mono text-xs text-slate-500 uppercase tracking-wider mb-1.5">Company</label>
                    <input type="text" className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-teal transition-colors" placeholder="Company name" />
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-slate-500 uppercase tracking-wider mb-1.5">Phone</label>
                    <input type="tel" className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-teal transition-colors" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block font-mono text-xs text-slate-500 uppercase tracking-wider mb-1.5">Service Interest</label>
                    <select className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-teal transition-colors bg-white text-slate-700">
                      <option>Select a service</option>
                      <option>Architecture & Interior Design</option>
                      <option>CAD Drafting</option>
                      <option>BIM Services</option>
                      <option>Solar Design</option>
                      <option>Graphic Design</option>
                      <option>Multiple Services</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-slate-500 uppercase tracking-wider mb-1.5">Budget Range</label>
                    <select className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-teal transition-colors bg-white text-slate-700">
                      <option>Select budget</option>
                      <option>Under $1,000</option>
                      <option>$1,000 - $5,000</option>
                      <option>$5,000 - $10,000</option>
                      <option>$10,000+</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block font-mono text-xs text-slate-500 uppercase tracking-wider mb-1.5">Message *</label>
                  <textarea
                    rows={5}
                    className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-teal transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="button"
                  className="w-full bg-teal text-white font-display text-sm font-medium py-3.5 rounded-lg hover:bg-teal-dark transition-colors"
                >
                  Send Message
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
                <h3 className="font-display text-lg font-medium text-navy mb-4">Contact Information</h3>
                <div className="space-y-4 text-sm text-slate-600">
                  <div>
                    <p className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-1">Email</p>
                    <a href="mailto:hello@envitectdesigns.com" className="text-teal hover:underline">hello@envitectdesigns.com</a>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-1">Phone</p>
                    <a href="tel:+15551234567" className="text-navy">+1 (555) 123-4567</a>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-1">Location</p>
                    <p>Global — India & US Operations</p>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-1">Response Time</p>
                    <div className="inline-flex items-center gap-2 bg-teal/10 text-teal text-xs font-mono px-3 py-1.5 rounded-full border border-teal/20">
                      <span className="w-1.5 h-1.5 bg-teal rounded-full animate-pulse" />
                      Within 24 hours
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-navy rounded-2xl p-6 text-white">
                <h3 className="font-display text-base font-medium mb-3">Free Consultation</h3>
                <p className="text-sm text-white/70 mb-4">Not ready to fill out the form? Schedule a free 30-minute discovery call.</p>
                <button className="w-full bg-teal text-white font-display text-sm font-medium py-2.5 rounded-lg hover:bg-teal-dark transition-colors">
                  Schedule a Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
