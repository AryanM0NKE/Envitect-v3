import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/templates/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Interactive Presentation Design | Sales Decks',
  description: 'Professional interactive presentation design services. Sales decks, investor presentations, and interactive PDFs that engage and convert. Get a quote!',
}

export default function InteractivePresentationsPage() {
  return (
    <ServicePageTemplate
      hero={{
        eyebrow: 'Graphic Design',
        h1: 'Interactive Presentations',
        subheadline: 'Presentations that do the heavy lifting. Engaging, interactive decks that guide decisions and close deals.',
      }}
      intro="Most presentations are forgettable. Walls of bullet points. Generic templates. Zero engagement. Our interactive presentation design service creates decks that are visually compelling, logically structured, and designed specifically to move your audience toward a decision."
      sections={[
        {
          title: 'Presentation Design Services',
          items: [
            { title: 'Sales & Property Presentations', desc: 'Pitch decks for property sales, development launches, and service proposals — designed to close.' },
            { title: 'Investor & Board Presentations', desc: 'Investor pitch decks, board reports, and financial summaries that communicate clearly and build confidence.' },
            { title: 'Interactive PDFs', desc: 'Clickable navigation, embedded video, form fields, and hyperlinks — a brochure that behaves like a website.' },
            { title: 'Branded Slide Templates', desc: 'Custom Keynote and PowerPoint template libraries your team can update and use independently.' },
          ],
        },
      ]}
      benefits={[
        'Presentations built around your specific audience',
        'Visual storytelling that guides decision-making',
        'Interactive elements that increase engagement',
        'Consistent brand identity throughout',
        'Editable templates your team can own long-term',
      ]}
      relatedServices={[
        { label: 'Real Estate Branding', href: '/services/graphic-design/real-estate-branding/' },
        { label: 'Marketing Brochures', href: '/services/graphic-design/marketing-brochures/' },
        { label: 'Solar Proposals', href: '/services/solar-design-engineering/solar-proposals/' },
      ]}
      cta={{ text: 'Create presentations that win.', href: '/contact/?quote=true' }}
    />
  )
}
