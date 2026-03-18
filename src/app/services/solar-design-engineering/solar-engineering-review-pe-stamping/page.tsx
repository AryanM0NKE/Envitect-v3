import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/templates/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Solar PE Stamping | Engineering Review',
  description: 'Licensed solar engineering review and PE stamping services. Structural and electrical stamps for all 50 states. Get your projects approved!',
}

export default function SolarPEStampingPage() {
  return (
    <ServicePageTemplate
      hero={{
        eyebrow: 'Solar Design & Engineering',
        h1: 'Solar Engineering Review & PE Stamping',
        subheadline: 'Licensed PE stamps for all 50 states. Fast, reliable engineering review that gets your projects approved.',
      }}
      intro="Many jurisdictions require a licensed Professional Engineer (PE) to review and stamp solar designs before permits are issued. Our network of licensed engineers provides fast, reliable structural and electrical PE stamping services across all 50 states — so your projects never stall."
      sections={[
        {
          title: 'PE Stamping Services',
          items: [
            { title: 'Structural PE Review', desc: 'Licensed structural engineer review of roof structure, racking attachment, and load calculations for any building type.' },
            { title: 'Electrical PE Review', desc: 'Electrical engineer review of system design, SLD accuracy, wire sizing, and NEC code compliance.' },
            { title: 'PE Stamping & Sealing', desc: 'Digital PE stamps from licensed engineers in all 50 states — valid for AHJ permit submission.' },
            { title: 'Expedited Review', desc: 'Rush turnaround available for time-sensitive projects. Most stamps delivered in 24-48 hours.' },
          ],
        },
      ]}
      benefits={[
        'Licensed PEs in all 50 US states',
        'Structural and electrical stamps available',
        'Digital stamps for fast permit submission',
        '24-48 hour turnaround on most projects',
        'Revisions included until permit is accepted',
      ]}
      relatedServices={[
        { label: 'Solar Permit Plans', href: '/services/solar-design-engineering/solar-permit-plans/' },
        { label: 'Solar Proposals', href: '/services/solar-design-engineering/solar-proposals/' },
        { label: 'Solar Design & Engineering', href: '/services/solar-design-engineering/' },
      ]}
      cta={{ text: 'Get your PE stamps — all 50 states covered.', href: '/contact/?quote=true' }}
    />
  )
}
