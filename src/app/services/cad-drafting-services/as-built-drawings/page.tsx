import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/templates/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'As-Built Drawing Services | Construction Documentation',
  description: 'Professional as-built drawing services. Document completed construction accurately for records and future renovations. Get a quote!',
}

export default function AsBuiltDrawingsPage() {
  return (
    <ServicePageTemplate
      hero={{
        eyebrow: 'CAD Drafting Services',
        h1: 'As-Built Drawing Services',
        subheadline: 'Document what was actually built. Accurate as-built drawings for records, maintenance, and future renovations.',
      }}
      intro="As-built drawings document the actual construction — including every change made from the original design. They're essential for building owners, facility managers, and anyone planning future renovations or maintenance. Without them, you're flying blind."
      sections={[
        {
          title: 'As-Built Drawing Services',
          items: [
            { title: 'Field Verification & Measurement', desc: 'On-site measurement, change documentation, and photo documentation to capture the actual built conditions.' },
            { title: 'Drawing Updates & Redlines', desc: 'Revise original drawings to reflect actual construction, including all field modifications and RFI responses.' },
            { title: 'Record Drawing Sets', desc: 'Organized, stamped, and fully documented drawing sets ready for owner handover and future reference.' },
            { title: 'Digital Archive Creation', desc: 'Structured digital file organization in DWG, PDF, and other formats for long-term accessibility.' },
          ],
        },
      ]}
      benefits={[
        'Accurate record of actual construction',
        'Essential for future renovations and additions',
        'Required for facilities management',
        'Supports warranty and insurance claims',
        'Organized digital and print format delivery',
      ]}
      relatedServices={[
        { label: 'Scan-to-BIM', href: '/services/bim-building-information-modeling/scan-to-bim/' },
        { label: 'Paper-to-CAD Conversion', href: '/services/cad-drafting-services/paper-to-cad-conversion/' },
        { label: 'Architectural Drafting', href: '/services/cad-drafting-services/architectural-drafting/' },
      ]}
      cta={{ text: 'Document your completed project.', href: '/contact/?quote=true' }}
    />
  )
}
