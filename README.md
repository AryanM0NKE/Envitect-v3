# Envitect Designs — Next.js Website

A full-featured Next.js 14 website for Envitect Designs, built with:
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Three.js / React Three Fiber** (3D hero BIM viewer)
- **Framer Motion / GSAP** (animations)
- **Space Grotesk + Inter** fonts

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open http://localhost:3000
```

---

## Project Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout (header + footer)
│   ├── page.tsx                  # Homepage (all 10 sections)
│   ├── globals.css               # Global styles + Tailwind
│   ├── sitemap.ts                # Auto-generated sitemap
│   ├── robots.ts                 # Robots.txt
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── portfolio/page.tsx
│   ├── support/faq/page.tsx
│   └── services/
│       ├── architecture-interior-design/page.tsx
│       ├── cad-drafting-services/page.tsx
│       ├── bim-building-information-modeling/page.tsx
│       ├── solar-design-engineering/page.tsx
│       └── graphic-design/page.tsx
│
├── components/
│   ├── ui/
│   │   ├── Logo.tsx              # Brand logo (SVG from guidelines)
│   │   ├── Header.tsx            # Sticky nav + mega menu
│   │   ├── Footer.tsx            # 4-column footer
│   │   └── ServiceCard3D.tsx     # 3D tilt service cards
│   ├── 3d/
│   │   └── HeroBIMViewer.tsx     # Three.js BIM hero viewer
│   └── templates/
│       └── ServicePageTemplate.tsx  # Reusable service page layout
│
└── styles/
    └── tokens.css                # Design token CSS variables
```

---

## Design System

### Brand Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--navy` | `#0F172A` | Primary text, dark backgrounds |
| `--charcoal` | `#334155` | Secondary text |
| `--teal` | `#0D9488` | Accent, CTAs, highlights |
| `--soft-white` | `#F8FAFC` | Page backgrounds |

### Typography
- **Display / Headings:** Space Grotesk (Light 300, Medium 500)
- **Body:** Inter (Regular 400, Medium 500)
- **Mono:** JetBrains Mono (labels, tags, codes)

### Logo
The logo is embedded as an SVG React component (`src/components/ui/Logo.tsx`).
It recreates the exact brand guidelines wireframe "E" with teal arc.

---

## Pages to Complete

The following sub-pages use the `ServicePageTemplate` and need to be created:

### Architecture & Interior Design Sub-pages
- [ ] `/services/architecture-interior-design/residential-design/`
- [ ] `/services/architecture-interior-design/commercial-interior/`
- [ ] `/services/architecture-interior-design/3d-visualization/`
- [ ] `/services/architecture-interior-design/renovation-remodeling/`

### CAD Drafting Sub-pages
- [ ] `/services/cad-drafting-services/architectural-drafting/`
- [ ] `/services/cad-drafting-services/structural-mep-drafting/`
- [ ] `/services/cad-drafting-services/paper-to-cad-conversion/`
- [ ] `/services/cad-drafting-services/as-built-drawings/`

### BIM Sub-pages
- [ ] `/services/bim-building-information-modeling/revit-modeling-lod-100-300/`
- [ ] `/services/bim-building-information-modeling/clash-detection/`
- [ ] `/services/bim-building-information-modeling/scan-to-bim/`
- [ ] `/services/bim-building-information-modeling/revit-family-creation/`

### Solar Sub-pages
- [ ] `/services/solar-design-engineering/solar-permit-plans/`
- [ ] `/services/solar-design-engineering/solar-proposals/`
- [ ] `/services/solar-design-engineering/solar-engineering-review-pe-stamping/`

### Graphic Design Sub-pages
- [ ] `/services/graphic-design/real-estate-branding/`
- [ ] `/services/graphic-design/marketing-brochures/`
- [ ] `/services/graphic-design/signage-wayfinding/`
- [ ] `/services/graphic-design/interactive-presentations/`

### Navigation Pages
- [ ] `/case-studies/` (with full 3 case studies)
- [ ] `/careers/` (with application form)
- [ ] `/blog/` (with featured posts)

All content for these pages is in `Envitect_Designs_Website_Spec.md`.
The `ServicePageTemplate` component makes adding sub-pages fast.

---

## 3D Components

### HeroBIMViewer
- Built with React Three Fiber
- Auto-rotating architectural wireframe building
- Blueprint grid floor
- Floating teal particles
- Disable on mobile: The `dynamic()` import with `ssr: false` handles lazy loading
- For mobile: Consider replacing with a static SVG blueprint image

### ServiceCard3D
- CSS `transform3d` mouse-tracking tilt
- Perspective 1000px
- Max rotation ±6 degrees

---

## SEO

Each page exports `metadata` with:
- `title` (with template `%s | Envitect Designs`)
- `description`
- Schema markup: Add JSON-LD via `<Script>` in relevant pages

See `src/app/sitemap.ts` for auto-generated XML sitemap at `/sitemap.xml`.

---

## Performance Notes

- 3D hero is dynamically imported (no SSR)
- Use `next/image` for all project portfolio images when real images are added
- GSAP scroll animations: Install and initialize in client components
- Target LCP < 2.5s: Keep hero overlay content render-blocking-free

---

## Environment Variables

Create `.env.local` for any future integrations:
```
NEXT_PUBLIC_SITE_URL=https://envitectdesigns.com
# Add form submission, analytics keys here
```
