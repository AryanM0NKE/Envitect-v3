import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/templates/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Renovation & Remodeling Design | Home & Commercial',
  description: 'Professional renovation and remodeling design services. Transform existing spaces with modern, functional designs. Get a quote for your project!',
}

export default function RenovationRemodelingPage() {
  return (
    <ServicePageTemplate
      hero={{
        eyebrow: 'Architecture & Interior Design',
        h1: 'Renovation & Remodeling Design',
        subheadline: 'Transform your space without starting from scratch. Smart renovation designs that maximize value.',
      }}
      intro="Great renovation design isn't just about making things look new—it's about making them work better. We assess what you have, understand what you need, and design solutions that transform your existing space efficiently and cost-effectively."
      sections={[
        {
          title: 'Renovation & Remodeling Services',
          items: [
            { title: 'Home Renovation Design', desc: 'Kitchen and bathroom remodels, whole-home transformations, and addition and extension designs.' },
            { title: 'Commercial Renovation', desc: 'Office upgrades and rebranding, retail space refreshes, and tenant improvement plans.' },
            { title: 'Structural Assessment', desc: 'Feasibility analysis, load-bearing evaluations, and code compliance checks before you commit.' },
            { title: 'Permit Documentation', desc: 'Permit-ready drawings, contractor coordination packages, and inspection support.' },
          ],
        },
      ]}
      benefits={[
        'Transform existing spaces without rebuilding from scratch',
        'Full structural feasibility assessment upfront',
        'Permit-ready documentation for faster approvals',
        'Budget-controlled design solutions',
        'Experienced team across residential and commercial',
      ]}
      relatedServices={[
        { label: 'Residential Design', href: '/services/architecture-interior-design/residential-design/' },
        { label: 'CAD Drafting Services', href: '/services/cad-drafting-services/' },
        { label: 'As-Built Drawings', href: '/services/cad-drafting-services/as-built-drawings/' },
      ]}
      cta={{ text: 'Start your renovation project.', href: '/contact/?quote=true' }}
    />
  )
}
