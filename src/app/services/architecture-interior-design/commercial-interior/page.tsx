import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/templates/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Commercial Interior Design | Office & Retail Spaces',
  description: 'Professional commercial interior design for offices, retail, and hospitality. Create spaces that enhance productivity and reflect your brand. Get a quote today!',
}

export default function CommercialInteriorPage() {
  return (
    <ServicePageTemplate
      hero={{
        eyebrow: 'Architecture & Interior Design',
        h1: 'Commercial Interior Design',
        subheadline: 'Workspaces that work for you. Design commercial interiors that boost productivity and impress clients.',
      }}
      intro="Inefficient office layouts hurt productivity. Retail spaces that don't guide customers lose sales. Outdated interiors damage your brand. Our commercial interior design team creates purposeful, beautiful spaces that serve your business goals and your people."
      sections={[
        {
          title: 'Commercial Design Services',
          items: [
            { title: 'Office Interior Design', desc: 'Open plan and private office layouts, collaborative spaces, meeting rooms, and ergonomic furniture selection.' },
            { title: 'Retail Store Design', desc: 'Customer flow optimization, visual merchandising support, and brand-aligned store aesthetics.' },
            { title: 'Hospitality Design', desc: 'Restaurants, cafes, and hotels. Guest experience-focused layouts with functional back-of-house planning.' },
            { title: 'Healthcare & Educational Spaces', desc: 'Compliance with industry standards. Patient/student-centered design with durable, easy-to-maintain materials.' },
          ],
        },
      ]}
      benefits={[
        'Increased employee productivity',
        'Better customer experience and flow',
        'Stronger brand presence in your space',
        'Optimized space utilization',
        'Full compliance with building regulations',
      ]}
      relatedServices={[
        { label: 'Residential Design', href: '/services/architecture-interior-design/residential-design/' },
        { label: '3D Visualization', href: '/services/architecture-interior-design/3d-visualization/' },
        { label: 'Real Estate Branding', href: '/services/graphic-design/real-estate-branding/' },
      ]}
      cta={{ text: 'Transform your commercial space.', href: '/contact/?quote=true' }}
    />
  )
}
