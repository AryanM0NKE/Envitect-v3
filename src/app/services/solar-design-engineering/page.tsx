import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/templates/ServicePageTemplate'
import { SolarPanelViewer } from '@/components/3d/SolarPanelViewer'

export const metadata: Metadata = {
  title: 'Solar Design & Engineering Services | Permit Plans',
  description: 'Professional solar design and engineering services. Permit plans, proposals, and PE stamping for residential and commercial projects. Get a consultation!',
}

export default function SolarDesignPage() {
  return (
    <ServicePageTemplate
      hero={{
        eyebrow: 'Solar Design & Engineering',
        h1: 'Solar Design & Engineering Services',
        subheadline: 'Power your projects with precision. Permit-ready solar designs that get approved faster.',
      }}
      heroVisual={<SolarPanelViewer />}
      intro="Solar installations require precise planning to maximize energy production, ensure safety, and meet code requirements. Our professional solar design services help installers deliver projects faster and with fewer issues—with turnaround times as fast as 24 hours."
      sections={[
        {
          title: 'Solar Services',
          items: [
            { title: 'Solar Permit Plans', desc: 'Complete documentation including site plans, electrical diagrams, structural calculations, and code compliance.' },
            { title: 'Solar Proposals', desc: 'Production estimates, financial analysis, equipment specs, and professional branded presentations.' },
            { title: 'Engineering Review & PE Stamping', desc: 'Licensed structural and electrical PE stamps. All 50 states covered. Fast digital turnaround.' },
          ],
        },
      ]}
      benefits={[
        'Faster permit approvals',
        'Code-compliant designs every time',
        'Accurate energy production estimates',
        'Licensed PE stamps in all 50 states',
        '24-48 hour turnaround',
      ]}
      relatedServices={[
        { label: 'CAD Drafting Services', href: '/services/cad-drafting-services/' },
      ]}
      cta={{ text: 'Get solar designs that get approved faster.', href: '/contact/?quote=true' }}
    />
  )
}
