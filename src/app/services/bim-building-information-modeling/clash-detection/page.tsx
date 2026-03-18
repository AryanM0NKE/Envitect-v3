import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/templates/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'BIM Clash Detection Services | Coordination',
  description: 'Professional BIM clash detection services. Identify and resolve conflicts between architectural, structural, and MEP systems before construction.',
}

export default function ClashDetectionPage() {
  return (
    <ServicePageTemplate
      hero={{
        eyebrow: 'BIM Services',
        h1: 'BIM Clash Detection',
        subheadline: 'Catch conflicts in the model, not on the site. Clash detection that prevents costly rework and delays.',
      }}
      intro="A duct running through a structural beam. A pipe clashing with electrical conduit. These conflicts are invisible in 2D drawings — but catastrophic when discovered during construction. BIM clash detection finds and resolves every conflict in the digital model, before the first shovel hits the ground."
      sections={[
        {
          title: 'Clash Detection Services',
          items: [
            { title: 'Hard Clash Detection', desc: 'Identifies physical intersections between building elements — where two objects literally occupy the same space.' },
            { title: 'Soft Clash Detection', desc: 'Detects clearance violations where elements are too close for maintenance access, insulation, or safety.' },
            { title: 'Workflow Clash Detection', desc: 'Identifies sequence and timing conflicts in construction scheduling and phasing.' },
            { title: 'Clash Resolution & Reporting', desc: 'Detailed clash reports with issue severity, recommended solutions, and updated coordination models.' },
          ],
        },
      ]}
      benefits={[
        'Significantly reduced RFIs and change orders',
        'Faster construction schedules',
        'Lower overall project costs',
        'Better coordination between all trades',
        'Detailed clash reports for every discipline',
      ]}
      relatedServices={[
        { label: 'Revit Modeling LOD 100-300', href: '/services/bim-building-information-modeling/revit-modeling-lod-100-300/' },
        { label: 'Structural & MEP Drafting', href: '/services/cad-drafting-services/structural-mep-drafting/' },
        { label: 'Scan-to-BIM', href: '/services/bim-building-information-modeling/scan-to-bim/' },
      ]}
      cta={{ text: 'Prevent costly clashes before construction.', href: '/contact/?consultation=true' }}
    />
  )
}
