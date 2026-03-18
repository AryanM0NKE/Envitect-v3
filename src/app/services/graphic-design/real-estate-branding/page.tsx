import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/templates/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Real Estate Branding Services | Property Marketing',
  description: 'Professional real estate branding services. Logo design, property branding, and marketing collateral for developers and agents. Get a quote!',
}

export default function RealEstateBrandingPage() {
  return (
    <ServicePageTemplate
      hero={{
        eyebrow: 'Graphic Design',
        h1: 'Real Estate Branding',
        subheadline: 'A brand that sells before the salesperson does. Premium real estate branding that commands attention and trust.',
      }}
      intro="In real estate, your brand is your first impression — and often your most important one. Whether you're launching a new development or repositioning an agency, strong branding communicates quality, builds trust, and justifies premium pricing before a buyer ever steps on site."
      sections={[
        {
          title: 'Real Estate Branding Services',
          items: [
            { title: 'Logo & Brand Identity', desc: 'Unique logo concepts, full brand guidelines, color palette, typography, and visual identity system.' },
            { title: 'Property & Development Branding', desc: 'Project naming, visual identity, launch materials, and brand story for new developments.' },
            { title: 'Print Marketing Collateral', desc: 'Business cards, letterheads, site hoardings, brochures, and all physical branded materials.' },
            { title: 'Digital Brand Assets', desc: 'Social media graphics, email templates, website graphics, digital ads, and presentation templates.' },
          ],
        },
      ]}
      benefits={[
        'Brand identity that communicates premium value',
        'Consistent look and feel across all touchpoints',
        'Faster sales cycles through stronger first impressions',
        'Ready-to-use brand guidelines for your team',
        'Experienced in real estate and development sectors',
      ]}
      relatedServices={[
        { label: 'Marketing Brochures', href: '/services/graphic-design/marketing-brochures/' },
        { label: 'Signage & Wayfinding', href: '/services/graphic-design/signage-wayfinding/' },
        { label: 'Interactive Presentations', href: '/services/graphic-design/interactive-presentations/' },
      ]}
      cta={{ text: 'Build a brand that sells your property.', href: '/contact/?quote=true' }}
    />
  )
}
