import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/templates/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Solar Proposal Services | Production Estimates',
  description: 'Professional solar proposal services with accurate production estimates and financial analysis. Win more deals with compelling proposals. Get a quote!',
}

export default function SolarProposalsPage() {
  return (
    <ServicePageTemplate
      hero={{
        eyebrow: 'Solar Design & Engineering',
        h1: 'Solar Proposals',
        subheadline: 'Win more solar deals with proposals that educate, convince, and close. Built on accurate data.',
      }}
      intro="A great solar proposal does more than show the numbers — it tells a compelling story. Our professionally designed solar proposals combine accurate energy modeling with clear financial analysis and polished presentation, giving your customers the confidence to say yes."
      sections={[
        {
          title: "What's in Every Solar Proposal",
          items: [
            { title: 'Production Modeling', desc: 'PVWatts or Aurora-based energy analysis including shading analysis and accurate annual production estimates.' },
            { title: 'Financial Analysis', desc: 'ROI calculations, payback period, incentive optimization, utility bill comparison, and 25-year savings projection.' },
            { title: 'Equipment Specifications', desc: 'Panel and inverter details, warranty information, performance ratings, and comparative options.' },
            { title: 'Professional Presentation', desc: 'Branded proposal document with visual layouts, easy-to-read charts, and a compelling narrative.' },
          ],
        },
      ]}
      benefits={[
        'Higher close rates with professional proposals',
        'Accurate production data customers can trust',
        'Clear ROI and payback period presentation',
        'Branded to your company, not ours',
        'Fast turnaround to keep deals moving',
      ]}
      relatedServices={[
        { label: 'Solar Permit Plans', href: '/services/solar-design-engineering/solar-permit-plans/' },
        { label: 'Solar Engineering Review & PE Stamping', href: '/services/solar-design-engineering/solar-engineering-review-pe-stamping/' },
        { label: 'Interactive Presentations', href: '/services/graphic-design/interactive-presentations/' },
      ]}
      cta={{ text: 'Create proposals that win more deals.', href: '/contact/?quote=true' }}
    />
  )
}
