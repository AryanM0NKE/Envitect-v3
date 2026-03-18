import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/templates/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Scan-to-BIM Services | Point Cloud to Revit',
  description: 'Professional Scan-to-BIM services. Convert laser scan point clouds to accurate Revit models for renovation and documentation. Request a quote!',
}

export default function ScanToBIMPage() {
  return (
    <ServicePageTemplate
      hero={{
        eyebrow: 'BIM Services',
        h1: 'Scan-to-BIM Services',
        subheadline: 'From laser scan to intelligent model. Convert point cloud data into accurate, usable Revit models.',
      }}
      intro="Scan-to-BIM converts 3D laser scan data — called point clouds — into intelligent BIM models. It's the most accurate way to document existing buildings, plan renovations, and capture as-built conditions without expensive and time-consuming manual measurement."
      sections={[
        {
          title: 'Our Scan-to-BIM Process',
          items: [
            { title: 'Point Cloud Import & Processing', desc: 'Import, register, and clean multiple scan files into a unified, accurate point cloud environment.' },
            { title: 'Architectural Model Creation', desc: 'Extract walls, floors, ceilings, doors, windows, and all architectural elements from scan data.' },
            { title: 'Structural & MEP Modeling', desc: 'Model structural elements, mechanical systems, electrical, and plumbing from the point cloud.' },
            { title: 'Quality Verification', desc: 'Compare finished model against original scan to verify accuracy and deliver a quality-checked final model.' },
          ],
        },
        {
          title: 'Scan-to-BIM Applications',
          items: [
            { title: 'Existing Building Documentation', desc: 'Create accurate as-built BIM models of existing structures for ownership records and facilities management.' },
            { title: 'Renovation Planning', desc: 'Plan renovations with confidence using accurate existing conditions models.' },
            { title: 'Historical Preservation', desc: 'Document heritage buildings with high accuracy for preservation and restoration work.' },
            { title: 'Facility Management', desc: 'Deliver BIM models that facilities teams can use for ongoing operations and maintenance.' },
          ],
        },
      ]}
      benefits={[
        'Far more accurate than manual measurement',
        'Significantly faster than traditional survey methods',
        'Fully parametric Revit model as output',
        'Suitable for all building types and ages',
        'Supports renovation, FM, and preservation',
      ]}
      relatedServices={[
        { label: 'As-Built Drawings', href: '/services/cad-drafting-services/as-built-drawings/' },
        { label: 'Revit Modeling LOD 100-300', href: '/services/bim-building-information-modeling/revit-modeling-lod-100-300/' },
        { label: 'Clash Detection', href: '/services/bim-building-information-modeling/clash-detection/' },
      ]}
      cta={{ text: 'Convert your scans to intelligent BIM models.', href: '/contact/?quote=true' }}
    />
  )
}
