'use client'
import React, { useRef, MouseEvent } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  href: string
  icon: React.ReactNode
  index?: number
}

export const ServiceCard3D = ({ title, description, href, icon, index = 0 }: ServiceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -6
    const rotateY = ((x - centerX) / centerX) * 6

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`
  }

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)'
    }
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative bg-white border border-slate-100 rounded-xl p-6 cursor-pointer"
      style={{
        transition: 'transform 0.15s ease, box-shadow 0.3s ease',
        transformStyle: 'preserve-3d',
        animationDelay: `${index * 0.1}s`,
      }}
    >
      {/* Teal accent top border on hover */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-teal rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Icon */}
      <div className="w-12 h-12 bg-teal/8 rounded-xl flex items-center justify-center mb-4 group-hover:bg-teal/15 transition-colors text-teal">
        {icon}
      </div>

      {/* Content */}
      <h3 className="font-display text-base font-medium text-navy mb-2">{title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed mb-4">{description}</p>

      {/* Link */}
      <Link
        href={href}
        className="inline-flex items-center gap-1.5 text-xs font-medium text-teal group-hover:gap-2.5 transition-all"
      >
        Learn more <ArrowRight size={12} />
      </Link>
    </div>
  )
}
