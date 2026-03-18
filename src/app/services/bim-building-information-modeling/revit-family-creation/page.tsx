import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/templates/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Revit Family Creation | Custom BIM Content',
  description: 'Custom Revit family creation services. Parametric furniture, equipment, and fixture families for your BIM projects. Get a quote!',
}

export default function RevitFamilyCreationPage() {
  return (
    <ServicePageTemplate
      hero={{
        eyebrow: 'BIM Services',
        h1: 'Revit Family Creation',
        subheadline: 'Custom parametric BIM content built to your exact specifications. Families that work the way your project demands.',
      }}
      intro="Revit families are the building blocks of every BIM model. Generic families from online libraries are rarely accurate enough for construction. Our custom family creation service delivers manufacturer-accurate, fully parametric Revit components that behave exactly as expected in your model."
      sections={[
        {
          title: 'Revit Family Types We Create',
          items: [
            { title: 'Furniture & Fixture Families', desc: 'Office furniture, residential furniture, kitchen and bathroom fixtures — accurate to manufacturer specifications.' },
            { title: 'MEP Equipment Families', desc: 'HVAC units, electrical panels, plumbing fixtures, and specialist equipment with correct connection points.' },
            { title: 'Architectural Component Families', desc: 'Custom doors, windows, curtain wall panels, decorative elements, and specialty architectural components.' },
            { title: 'Parametric & Multi-Type Families', desc: 'Fully adjustable families with multiple types, nested components, shared parameters, and material options.' },
          ],
        },
      ]}
      benefits={[
        'Manufacturer-accurate geometry and specifications',
        'Fully parametric — adjustable dimensions and types',
        'Shared parameters for scheduling and quantities',
        'Consistent performance in complex models',
        'Delivered as .rfa files ready to load',
      ]}
      relatedServices={[
        { label: 'Revit Modeling LOD 100-300', href: '/services/bim-building-information-modeling/revit-modeling-lod-100-300/' },
        { label: 'BIM Services', href: '/services/bim-building-information-modeling/' },
        { label: 'Clash Detection', href: '/services/bim-building-information-modeling/clash-detection/' },
      ]}
      cta={{ text: 'Get custom Revit families for your project.', href: '/contact/?quote=true' }}
    />
  )
}
