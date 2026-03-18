import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/templates/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Residential Design Services | Custom Home Design',
  description: 'Custom residential design services for modern homes. Floor plans, 3D visualizations, and interior design tailored to your lifestyle. Start your dream home today!',
}

export default function ResidentialDesignPage() {
  return (
    <ServicePageTemplate
      hero={{
        eyebrow: 'Architecture & Interior Design',
        h1: 'Residential Design Services',
        subheadline: 'Your dream home, designed to perfection. From cozy apartments to luxury villas, we create spaces you\'ll love.',
      }}
      intro="Your home is your sanctuary. Good design enhances your daily life, maximizes space, and reflects your personality. Poor design leads to wasted space, functionality issues, and costly renovations later. Our residential design team ensures every square foot works for you."
      sections={[
        {
          title: 'Our Residential Design Services',
          items: [
            { title: 'Custom Home Design', desc: 'Personalized floor plans for your lifestyle. Modern, contemporary, or traditional styles with sustainable and energy-efficient options.' },
            { title: 'Interior Space Planning', desc: 'Optimized room layouts for flow and function. Furniture placement, space utilization, lighting and ventilation planning.' },
            { title: '3D Home Visualization', desc: 'See your home before it\'s built. Photorealistic renders, virtual tours, and multiple design options to choose from.' },
            { title: 'Renovation Design', desc: 'Transform existing homes with kitchen and bathroom redesigns, whole-home transformations, and addition and extension plans.' },
          ],
        },
      ]}
      benefits={[
        'Designs tailored to your family\'s needs',
        'Maximized natural light and ventilation',
        'Future-proof layouts that grow with you',
        'Budget-conscious solutions without compromise',
        'Quick turnaround times on all deliverables',
      ]}
      relatedServices={[
        { label: '3D Visualization', href: '/services/architecture-interior-design/3d-visualization/' },
        { label: 'Commercial Interior Design', href: '/services/architecture-interior-design/commercial-interior/' },
        { label: 'CAD Drafting Services', href: '/services/cad-drafting-services/' },
      ]}
      cta={{ text: "Let's design your dream home.", href: '/contact/?consultation=true' }}
    />
  )
}
