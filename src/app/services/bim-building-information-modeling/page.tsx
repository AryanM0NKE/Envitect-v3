import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/templates/ServicePageTemplate'
import { BIMModelingViewer } from '@/components/3d/BIMModelingViewer'

export const metadata: Metadata = {
  title: 'BIM Services | Building Information Modeling',
  description: 'Professional BIM services including Revit modeling, clash detection, and Scan-to-BIM. Reduce errors and improve coordination. Get a consultation!',
}

export default function BIMServicesPage() {
  return (
    <ServicePageTemplate
      hero={{
        eyebrow: 'Building Information Modeling',
        h1: 'BIM Services',
        subheadline: 'Build smarter with BIM. Intelligent 3D models that reduce errors, save time, and improve coordination.',
      }}
      heroVisual={<BIMModelingViewer />}
      intro="Building Information Modeling goes beyond 3D visualization. It's a collaborative process that creates intelligent models with data—helping teams detect conflicts, estimate costs, and manage projects more effectively."
      sections={[
        {
          title: 'Our BIM Services',
          items: [
            { title: 'Revit Modeling (LOD 100-300)', desc: 'Architectural, structural, and MEP models with Level of Development customization.' },
            { title: 'Clash Detection', desc: 'Identify conflicts between systems before construction. MEP coordination and structural interference checks.' },
            { title: 'Scan-to-BIM', desc: 'Convert point clouds to BIM models for as-built documentation and renovation planning.' },
            { title: 'Revit Family Creation', desc: 'Custom parametric families for furniture, equipment, and fixtures.' },
          ],
        },
      ]}
      benefits={[
        'Reduced construction errors',
        'Better project coordination',
        'Accurate cost estimation',
        'Faster decision-making',
        'Improved facility management',
      ]}
      relatedServices={[
        { label: 'CAD Drafting Services', href: '/services/cad-drafting-services/' },
        { label: '3D Visualization', href: '/services/architecture-interior-design/3d-visualization/' },
      ]}
      cta={{ text: 'Start with BIM today.', href: '/contact/?consultation=true' }}
    />
  )
}
