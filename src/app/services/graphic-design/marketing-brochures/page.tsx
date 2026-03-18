import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/templates/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Marketing Brochure Design | Print & Digital',
  description: 'Professional marketing brochure design services. Company brochures, property brochures, and sales materials in print and digital formats. Get a quote!',
}

export default function MarketingBrochuresPage() {
  return (
    <ServicePageTemplate
      hero={{
        eyebrow: 'Graphic Design',
        h1: 'Marketing Brochures',
        subheadline: 'Leave something behind that does the selling for you. Brochures designed to inform, impress, and convert.',
      }}
      intro="A well-designed brochure is one of the most cost-effective marketing tools in real estate and construction. It works 24/7, travels with your prospects, and communicates your value long after the meeting ends. We design brochures that people actually keep."
      sections={[
        {
          title: 'Brochure Design Services',
          items: [
            { title: 'Company & Corporate Brochures', desc: 'Corporate overviews, service catalogues, and capability statements for B2B and corporate audiences.' },
            { title: 'Property & Development Brochures', desc: 'Residential, commercial, and mixed-use project brochures with renders, floorplans, and specs.' },
            { title: 'Sales & Marketing Materials', desc: 'Flyers, sell sheets, direct mail, and event collateral designed to drive enquiries.' },
            { title: 'Digital Brochures', desc: 'Interactive PDFs, e-brochures, and web-optimized digital formats ready to share by email or link.' },
          ],
        },
      ]}
      benefits={[
        'Professionally designed, print-ready artwork',
        'Available in both print and digital formats',
        'Consistent with your existing brand identity',
        'Fast production for time-sensitive launches',
        'Copy editing and layout support available',
      ]}
      relatedServices={[
        { label: 'Real Estate Branding', href: '/services/graphic-design/real-estate-branding/' },
        { label: 'Interactive Presentations', href: '/services/graphic-design/interactive-presentations/' },
        { label: '3D Visualization', href: '/services/architecture-interior-design/3d-visualization/' },
      ]}
      cta={{ text: 'Create brochures that convert prospects.', href: '/contact/?quote=true' }}
    />
  )
}
