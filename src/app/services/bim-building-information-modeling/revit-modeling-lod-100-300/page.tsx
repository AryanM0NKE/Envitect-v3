import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/templates/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Revit Modeling Services | LOD 100-300',
  description: 'Professional Revit modeling services from LOD 100 to LOD 300. Architectural, structural, and MEP models for your projects. Request a quote!',
}

export default function RevitModelingPage() {
  return (
    <ServicePageTemplate
      hero={{
        eyebrow: 'BIM Services',
        h1: 'Revit Modeling Services (LOD 100–300)',
        subheadline: 'Intelligent models at the right level of detail. From early massing to construction-ready documentation.',
      }}
      intro="Level of Development (LOD) defines how much detail and reliability a BIM element contains. We deliver Revit models at the right LOD for your project phase — so you get exactly the information you need, when you need it, without unnecessary complexity."
      sections={[
        {
          title: 'LOD Levels We Deliver',
          items: [
            { title: 'LOD 100 — Conceptual', desc: 'Overall massing and basic geometry. Ideal for early design phases, approximate quantities, and feasibility studies.' },
            { title: 'LOD 200 — Schematic', desc: 'Generic systems and objects with approximate dimensions. Used for design development and coordination.' },
            { title: 'LOD 300 — Detailed', desc: 'Specific systems with accurate dimensions and quantities. Full construction documentation and coordination.' },
          ],
        },
        {
          title: 'Revit Model Types',
          items: [
            { title: 'Architectural Revit Models', desc: 'Walls, floors, roofs, doors, windows, curtain walls, stairs, and all interior architectural elements.' },
            { title: 'Structural Revit Models', desc: 'Columns, beams, slabs, foundations, bracing, and structural connections at the required LOD.' },
            { title: 'MEP Revit Models', desc: 'HVAC ductwork and equipment, electrical conduit and panels, plumbing pipes and fixtures.' },
            { title: 'Coordination Models', desc: 'Federated models combining all disciplines for clash detection and project coordination.' },
          ],
        },
      ]}
      benefits={[
        'Right level of detail for your project phase',
        'Accurate geometry for coordination and quantities',
        'Fully parametric and editable Revit families',
        'Compatible with Navisworks for clash detection',
        'Delivered in RVT format with full model structure',
      ]}
      relatedServices={[
        { label: 'BIM Clash Detection', href: '/services/bim-building-information-modeling/clash-detection/' },
        { label: 'Revit Family Creation', href: '/services/bim-building-information-modeling/revit-family-creation/' },
        { label: 'Structural & MEP Drafting', href: '/services/cad-drafting-services/structural-mep-drafting/' },
      ]}
      cta={{ text: 'Get your Revit model started.', href: '/contact/?quote=true' }}
    />
  )
}
