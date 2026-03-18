import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/templates/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Structural & MEP Drafting | Engineering Drawings',
  description: 'Structural and MEP drafting services. Framing plans, HVAC, electrical, and plumbing layouts for construction projects. Request a quote!',
}

export default function StructuralMEPDraftingPage() {
  return (
    <ServicePageTemplate
      hero={{
        eyebrow: 'CAD Drafting Services',
        h1: 'Structural & MEP Drafting',
        subheadline: 'Engineering precision on every sheet. Structural and MEP drawings that coordinate seamlessly across all disciplines.',
      }}
      intro="Structural and MEP systems are the backbone of any building. Our specialist drafting team produces fully coordinated drawings for framing, foundations, HVAC, electrical, and plumbing — reducing on-site conflicts and costly change orders."
      sections={[
        {
          title: 'Structural & MEP Drafting Services',
          items: [
            { title: 'Structural Drafting', desc: 'Framing plans, foundation details, connection details, and structural schedules for all building types.' },
            { title: 'HVAC Drafting', desc: 'Ductwork layouts, equipment schedules, ventilation plans, and coordination with architectural elements.' },
            { title: 'Electrical Drafting', desc: 'Lighting layouts, power distribution plans, panel schedules, and low-voltage systems.' },
            { title: 'Plumbing Drafting', desc: 'Water supply and drainage plans, fixture schedules, isometric diagrams, and riser diagrams.' },
          ],
        },
      ]}
      benefits={[
        'Full coordination across structural and MEP disciplines',
        'Reduces on-site conflicts and RFIs',
        'Compliant with local building codes',
        'Experienced with residential and commercial projects',
        'Fast turnaround — 2 to 5 business days',
      ]}
      relatedServices={[
        { label: 'Architectural Drafting', href: '/services/cad-drafting-services/architectural-drafting/' },
        { label: 'BIM Clash Detection', href: '/services/bim-building-information-modeling/clash-detection/' },
        { label: 'Revit Modeling', href: '/services/bim-building-information-modeling/revit-modeling-lod-100-300/' },
      ]}
      cta={{ text: 'Get your MEP drawings started.', href: '/contact/?quote=true' }}
    />
  )
}
