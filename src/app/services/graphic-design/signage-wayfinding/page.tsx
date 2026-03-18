import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/templates/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Signage & Wayfinding Design | Interior & Exterior',
  description: 'Professional signage and wayfinding design services. Interior and exterior signs that guide, inform, and brand your spaces. Get a quote!',
}

export default function SignageWayfindingPage() {
  return (
    <ServicePageTemplate
      hero={{
        eyebrow: 'Graphic Design',
        h1: 'Signage & Wayfinding',
        subheadline: 'Design that guides, informs, and brands — all at once. Signage systems that make every space effortless to navigate.',
      }}
      intro="Good wayfinding is invisible — people just know where to go. Bad wayfinding causes frustration, delays, and a poor impression of your brand. Our signage and wayfinding design service creates clear, cohesive systems that work beautifully and comply with all regulations."
      sections={[
        {
          title: 'Signage & Wayfinding Services',
          items: [
            { title: 'Exterior Building Signage', desc: 'Fascia signs, monument signs, pylon signs, and hoarding graphics that make your building unmissable.' },
            { title: 'Interior Wayfinding Systems', desc: 'Directory boards, floor identification, room signs, corridor directionals, and tenant identification.' },
            { title: 'Digital Wayfinding', desc: 'Digital directory systems, interactive kiosks, and dynamic display content for modern facilities.' },
            { title: 'ADA & Regulatory Compliance', desc: 'ADA-compliant signage, Braille integration, safety signage, and local code compliance as standard.' },
          ],
        },
      ]}
      benefits={[
        'Cohesive system designed across all sign types',
        'Full ADA compliance as standard',
        'Works across multiple floors and building zones',
        'Consistent with your brand identity',
        'Production-ready artwork for fabrication',
      ]}
      relatedServices={[
        { label: 'Real Estate Branding', href: '/services/graphic-design/real-estate-branding/' },
        { label: 'Commercial Interior Design', href: '/services/architecture-interior-design/commercial-interior/' },
        { label: 'Marketing Brochures', href: '/services/graphic-design/marketing-brochures/' },
      ]}
      cta={{ text: 'Design your signage system.', href: '/contact/?quote=true' }}
    />
  )
}
