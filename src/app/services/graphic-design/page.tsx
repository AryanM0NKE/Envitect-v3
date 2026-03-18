import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/templates/ServicePageTemplate'
import { GraphicDesignViewer } from '@/components/3d/GraphicDesignViewer'

export const metadata: Metadata = {
  title: 'Graphic Design Services | Branding & Marketing',
  description: 'Professional graphic design services for real estate, marketing, and corporate needs. Branding, brochures, signage, and presentations. Get a quote!',
}

export default function GraphicDesignPage() {
  return (
    <ServicePageTemplate
      hero={{
        eyebrow: 'Graphic Design',
        h1: 'Graphic Design Services',
        subheadline: 'Design that makes an impact. From branding to marketing, we create visuals that tell your story.',
      }}
      heroVisual={<GraphicDesignViewer />}
      intro="First impressions matter. Professional design builds credibility, communicates value, and helps you stand out in a crowded market. Our designers specialize in the architecture, real estate, and engineering industries."
      sections={[
        {
          title: 'Design Services',
          items: [
            { title: 'Real Estate Branding', desc: 'Logo and identity design, property branding, marketing collateral, and digital assets.' },
            { title: 'Marketing Brochures', desc: 'Company brochures, property brochures, and sales materials in print and digital formats.' },
            { title: 'Signage & Wayfinding', desc: 'Exterior and interior signage systems. ADA-compliant and code-ready designs.' },
            { title: 'Interactive Presentations', desc: 'Sales decks, investor presentations, interactive PDFs, and branded templates.' },
          ],
        },
      ]}
      benefits={[
        'Consistent brand identity across touchpoints',
        'Professional marketing materials that convert',
        'Faster sales cycles',
        'Stronger market presence',
        'Industry-specific design expertise',
      ]}
      relatedServices={[
        { label: 'Architecture & Interior Design', href: '/services/architecture-interior-design/' },
        { label: '3D Visualization', href: '/services/architecture-interior-design/3d-visualization/' },
      ]}
      cta={{ text: 'Elevate your brand today.', href: '/contact/?quote=true' }}
    />
  )
}
