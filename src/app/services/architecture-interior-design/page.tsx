import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/templates/ServicePageTemplate'
import { ArchitectureInteriorViewer } from '@/components/3d/ArchitectureInteriorViewer'

export const metadata: Metadata = {
  title: 'Architecture & Interior Design Services',
  description: 'Professional architecture and interior design services for residential and commercial projects. From concept to visualization, we deliver stunning, functional spaces.',
}

export default function ArchitectureInteriorPage() {
  return (
    <ServicePageTemplate
      hero={{
        eyebrow: 'Architecture × Interior Design',
        h1: 'Architecture & Interior Design Services',
        subheadline: 'Create spaces that inspire. From modern homes to commercial interiors, we design with purpose.',
      }}
      heroVisual={<ArchitectureInteriorViewer />}
      intro="Your space tells your story. Our multidisciplinary team combines architectural precision with creative vision to deliver spaces that are both functional and beautiful—from initial concept through to permit-ready documentation."
      sections={[
        {
          title: 'What We Deliver',
          items: [
            { title: 'Residential Design', desc: 'Custom home designs tailored to your lifestyle. Floor plans, elevations, and 3D visualizations.' },
            { title: 'Commercial Interior Design', desc: 'Office spaces, retail stores, and hospitality design. Functional layouts that enhance productivity.' },
            { title: '3D Visualization', desc: 'Photorealistic renders before construction. Virtual walkthroughs and flythroughs.' },
            { title: 'Renovation & Remodeling', desc: 'Transform existing spaces with modern designs. Structural assessment and space optimization.' },
          ],
        },
      ]}
      benefits={[
        'Designs that balance aesthetics and functionality',
        'Clear visualization before construction',
        'Faster approval processes',
        'Cost-effective solutions',
        'Experienced designers with industry knowledge',
      ]}
      relatedServices={[
        { label: 'CAD Drafting Services', href: '/services/cad-drafting-services/' },
        { label: 'BIM Services', href: '/services/bim-building-information-modeling/' },
        { label: '3D Visualization', href: '/services/architecture-interior-design/3d-visualization/' },
      ]}
      cta={{ text: 'Ready to design your space?', href: '/contact/?consultation=true' }}
    />
  )
}
