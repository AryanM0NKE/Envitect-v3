import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/templates/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Paper to CAD Conversion | Digitize Drawings',
  description: 'Convert paper drawings to CAD format. Fast, accurate digitization of blueprints and hand drawings. Get a quote for your conversion project!',
}

export default function PaperToCADPage() {
  return (
    <ServicePageTemplate
      hero={{
        eyebrow: 'CAD Drafting Services',
        h1: 'Paper-to-CAD Conversion',
        subheadline: 'Bring your legacy drawings into the digital age. Fast, accurate conversion from paper to fully editable CAD files.',
      }}
      intro="Paper drawings are hard to store, share, scale, and modify. Converting them to CAD gives you editable, scalable, future-proof files that your entire team can access and build upon. We handle everything from yellowed blueprints to hand-drawn sketches."
      sections={[
        {
          title: 'Conversion Services',
          items: [
            { title: 'Blueprint Digitization', desc: 'Scan and convert existing blueprints to clean, layered CAD files with accurate scaling and notation.' },
            { title: 'Hand Drawing Conversion', desc: 'Transform sketch drawings and concept drawings into precise, construction-ready technical files.' },
            { title: 'PDF to DWG/DXF', desc: 'Convert raster PDFs and scanned files to fully editable vector CAD formats.' },
            { title: 'Archive Digitization', desc: 'Large-batch conversion of historical drawing sets, organized into structured digital archives.' },
          ],
        },
      ]}
      benefits={[
        'Editable CAD files instead of static scans',
        'Accurate to original scale and dimensions',
        'Clean layer organization for easy use',
        'Multiple output formats: DWG, DXF, PDF',
        'Handles large batches and archive sets',
      ]}
      relatedServices={[
        { label: 'As-Built Drawings', href: '/services/cad-drafting-services/as-built-drawings/' },
        { label: 'Architectural Drafting', href: '/services/cad-drafting-services/architectural-drafting/' },
        { label: 'Scan-to-BIM', href: '/services/bim-building-information-modeling/scan-to-bim/' },
      ]}
      cta={{ text: 'Digitize your drawings today.', href: '/contact/?quote=true' }}
    />
  )
}
