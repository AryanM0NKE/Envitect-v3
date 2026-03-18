import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://envitectdesigns.com'
  const now = new Date()

  const routes = [
    '/',
    '/services/architecture-interior-design/',
    '/services/architecture-interior-design/residential-design/',
    '/services/architecture-interior-design/commercial-interior/',
    '/services/architecture-interior-design/3d-visualization/',
    '/services/architecture-interior-design/renovation-remodeling/',
    '/services/cad-drafting-services/',
    '/services/cad-drafting-services/architectural-drafting/',
    '/services/cad-drafting-services/structural-mep-drafting/',
    '/services/cad-drafting-services/paper-to-cad-conversion/',
    '/services/cad-drafting-services/as-built-drawings/',
    '/services/bim-building-information-modeling/',
    '/services/bim-building-information-modeling/revit-modeling-lod-100-300/',
    '/services/bim-building-information-modeling/clash-detection/',
    '/services/bim-building-information-modeling/scan-to-bim/',
    '/services/bim-building-information-modeling/revit-family-creation/',
    '/services/solar-design-engineering/',
    '/services/solar-design-engineering/solar-permit-plans/',
    '/services/solar-design-engineering/solar-proposals/',
    '/services/solar-design-engineering/solar-engineering-review-pe-stamping/',
    '/services/graphic-design/',
    '/services/graphic-design/real-estate-branding/',
    '/services/graphic-design/marketing-brochures/',
    '/services/graphic-design/signage-wayfinding/',
    '/services/graphic-design/interactive-presentations/',
    '/portfolio/',
    '/case-studies/',
    '/about/',
    '/careers/',
    '/blog/',
    '/contact/',
    '/support/faq/',
  ]

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: now,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : route.split('/').length <= 3 ? 0.8 : 0.6,
  }))
}
