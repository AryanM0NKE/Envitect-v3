import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/ui/Header'
import { Footer } from '@/components/ui/Footer'

// Note: Barlow Condensed, Cormorant Garamond, DM Mono are loaded via
// @import in globals.css (Google Fonts) per brand guidelines v2.
// Next.js font optimization is not used here as these fonts are not
// available in next/font/google's type definitions by default.

export const metadata: Metadata = {
  title: {
    default: 'Envitect Designs | Architecture, BIM, CAD & Solar Design Services',
    template: '%s | Envitect Designs',
  },
  description: 'Envitect Designs offers end-to-end architecture, BIM, CAD drafting, solar design & graphic design services. Get faster project execution with expert support. Get a free consultation today!',
  keywords: ['architecture services', 'BIM services', 'CAD drafting', 'solar design', 'graphic design'],
  authors: [{ name: 'Envitect Designs' }],
  metadataBase: new URL('https://envitectdesigns.com'),
  openGraph: {
    type: 'website',
    siteName: 'Envitect Designs',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* bg-paper = #F5F2EB, text-ink = #0E0F0D per brand guidelines */}
      <body className="antialiased bg-paper text-ink">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
