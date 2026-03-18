import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/templates/ServicePageTemplate'

export const metadata: Metadata = {
  title: '3D Visualization Services | Architectural Rendering',
  description: 'Photorealistic 3D visualization and architectural rendering services. See your project before it\'s built with stunning visuals. Get started today!',
}

export default function ThreeDVisualizationPage() {
  return (
    <ServicePageTemplate
      hero={{
        eyebrow: 'Architecture & Interior Design',
        h1: '3D Visualization Services',
        subheadline: 'See it before you build it. Photorealistic 3D renders that bring your designs to life.',
      }}
      intro="Traditional 2D drawings are hard to interpret. 3D visualization helps stakeholders understand the design, make informed decisions, and avoid costly changes during construction. Our renders are indistinguishable from photography — and deliver faster approvals."
      sections={[
        {
          title: '3D Visualization Services',
          items: [
            { title: 'Exterior 3D Rendering', desc: 'Building facades and landscapes. Day and night visualizations with contextual surroundings and materials.' },
            { title: 'Interior 3D Rendering', desc: 'Room-by-room photorealistic views with accurate material, lighting, furniture, and decor visualization.' },
            { title: '3D Walkthroughs & Animations', desc: 'Interactive virtual tours, flythrough animations, and VR-ready experiences for presentations and marketing.' },
            { title: '360° Panoramas', desc: 'Immersive full-sphere views, web-embedded viewers, and marketing-ready panoramic outputs.' },
          ],
        },
      ]}
      benefits={[
        'Clear design communication to all stakeholders',
        'Faster client approvals and sign-offs',
        'Reduced construction errors and change orders',
        'Powerful marketing materials ready to use',
        'Design iteration before a single brick is laid',
      ]}
      relatedServices={[
        { label: 'BIM Services', href: '/services/bim-building-information-modeling/' },
        { label: 'Residential Design', href: '/services/architecture-interior-design/residential-design/' },
        { label: 'Marketing Brochures', href: '/services/graphic-design/marketing-brochures/' },
      ]}
      cta={{ text: 'Visualize your project today.', href: '/contact/?consultation=true' }}
    />
  )
}
