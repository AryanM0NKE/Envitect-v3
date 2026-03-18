import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/templates/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Solar Permit Plans | Residential & Commercial',
  description: 'Professional solar permit plan services. Complete documentation for faster approvals on residential and commercial projects. Get a quote!',
}

export default function SolarPermitPlansPage() {
  return (
    <ServicePageTemplate
      hero={{
        eyebrow: 'Solar Design & Engineering',
        h1: 'Solar Permit Plans',
        subheadline: 'Permit-ready solar design packages delivered in 24-48 hours. Everything your AHJ needs to say yes.',
      }}
      intro="Incomplete or inaccurate permit plans are the #1 cause of solar project delays. Our permit plan service delivers complete, code-compliant documentation packages that get approved the first time — helping solar installers close more jobs, faster."
      sections={[
        {
          title: "What's Included in Every Permit Package",
          items: [
            { title: 'Site Plan & Roof Layout', desc: 'Accurate roof dimensions, panel placement, setback compliance, and structural attachment points.' },
            { title: 'Single-Line Electrical Diagram', desc: 'Complete SLD with equipment specifications, wire sizing, conduit runs, and disconnect locations.' },
            { title: 'Structural Calculations', desc: 'Roof load analysis, wind and snow load calculations, and attachment hardware specifications.' },
            { title: 'Code Compliance Documentation', desc: 'NEC compliance, local jurisdiction requirements, and utility interconnection documentation.' },
          ],
        },
      ]}
      benefits={[
        '24-48 hour turnaround on most projects',
        'First-pass approval rate consistently high',
        'Covers residential and commercial installations',
        'NEC and local code compliant as standard',
        'Revisions included until permit is approved',
      ]}
      relatedServices={[
        { label: 'Solar Proposals', href: '/services/solar-design-engineering/solar-proposals/' },
        { label: 'Solar Engineering Review & PE Stamping', href: '/services/solar-design-engineering/solar-engineering-review-pe-stamping/' },
        { label: 'Solar Design & Engineering', href: '/services/solar-design-engineering/' },
      ]}
      cta={{ text: 'Get your permit plans in 24-48 hours.', href: '/contact/?quote=true' }}
    />
  )
}
