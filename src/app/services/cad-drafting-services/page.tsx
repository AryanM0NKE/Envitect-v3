import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/templates/ServicePageTemplate'
import { CADDraftingViewer } from '@/components/3d/CADDraftingViewer'

export const metadata: Metadata = {
  title: 'CAD Drafting Services | Architectural & Technical Drawings',
  description: 'Professional CAD drafting services for architecture, structure, and MEP. Accurate technical drawings with fast turnaround. Request a quote today!',
}

export default function CADDraftingPage() {
  return (
    <ServicePageTemplate
      hero={{
        eyebrow: 'CAD Drafting',
        h1: 'CAD Drafting Services',
        subheadline: 'Precision in every line. Accurate technical drawings for architecture, structure, and MEP systems.',
      }}
      heroVisual={<CADDraftingViewer />}
      intro="Accurate drawings are the foundation of any construction project. Errors in drafting lead to costly mistakes, delays, and safety issues. Our professional CAD drafting team ensures every line is precise, compliant, and construction-ready."
      sections={[
        {
          title: 'Our CAD Services',
          items: [
            { title: 'Architectural Drafting', desc: 'Floor plans, elevations, sections, site plans, detail drawings, and schedules.' },
            { title: 'Structural & MEP Drafting', desc: 'Structural framing plans, HVAC, electrical, and plumbing coordination drawings.' },
            { title: 'Paper-to-CAD Conversion', desc: 'Digitize old drawings, as-built documentation, and historical preservation.' },
            { title: 'As-Built Drawings', desc: 'Document completed construction accurately for records and future renovations.' },
          ],
        },
      ]}
      benefits={[
        'High accuracy and precision',
        'Industry-standard software (AutoCAD, Revit)',
        'Fast turnaround times',
        'Multiple format outputs (DWG, DXF, PDF)',
        'Revision support included',
      ]}
      relatedServices={[
        { label: 'BIM Services', href: '/services/bim-building-information-modeling/' },
        { label: 'Architecture & Interior Design', href: '/services/architecture-interior-design/' },
      ]}
      cta={{ text: 'Get accurate drawings for your project.', href: '/contact/?quote=true' }}
    />
  )
}
