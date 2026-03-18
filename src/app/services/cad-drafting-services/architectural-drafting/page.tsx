import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/templates/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Architectural Drafting Services | Floor Plans & Elevations',
  description: 'Professional architectural drafting services. Floor plans, elevations, sections, and detail drawings with precision and speed. Get a quote!',
}

export default function ArchitecturalDraftingPage() {
  return (
    <ServicePageTemplate
      hero={{
        eyebrow: 'CAD Drafting Services',
        h1: 'Architectural Drafting Services',
        subheadline: 'Every line matters. Precise architectural drawings that communicate your design with clarity and accuracy.',
      }}
      intro="Architectural drafting is the language of construction. Our experienced CAD technicians produce clear, accurate, and fully coordinated drawings that your contractors, engineers, and permit offices can rely on — delivered fast."
      sections={[
        {
          title: 'Architectural Drafting Deliverables',
          items: [
            { title: 'Floor Plans', desc: 'Complete layout with dimensioning, room labels, area schedules, door and window tags, and furniture layouts.' },
            { title: 'Elevations', desc: 'All exterior and interior elevations with material annotations, height dimensions, and finish schedules.' },
            { title: 'Sections & Details', desc: 'Cut-through views showing structural relationships, ceiling heights, and custom construction details.' },
            { title: 'Site Plans', desc: 'Site layout, grading, setbacks, parking, landscaping, and utility connections.' },
          ],
        },
      ]}
      benefits={[
        'Industry-standard AutoCAD and Revit deliverables',
        'Clear annotation and dimensioning throughout',
        'Coordinated with structural and MEP drawings',
        'Multiple output formats: DWG, DXF, PDF',
        'Revision rounds included in all projects',
      ]}
      relatedServices={[
        { label: 'Structural & MEP Drafting', href: '/services/cad-drafting-services/structural-mep-drafting/' },
        { label: 'BIM Services', href: '/services/bim-building-information-modeling/' },
        { label: 'Architecture & Interior Design', href: '/services/architecture-interior-design/' },
      ]}
      cta={{ text: 'Get accurate architectural drawings.', href: '/contact/?quote=true' }}
    />
  )
}
