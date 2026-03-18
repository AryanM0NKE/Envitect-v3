import React from 'react'

/**
 * Envitect Designs Logo — Brand Guidelines v2
 *
 * The mark consists of:
 *  • Left L-shape  (Ink #0E0F0D on light / White on dark) — "Engineering"
 *  • Right L-shape (#0A8A7A Envitect Teal) — "Environment"
 *  • Gold lock-point rect (#F0C96B) — junction of the two L-shapes
 *  • Dashed CAD construction lines (engineering detail)
 *  • Organic curve (environmental softness)
 */

interface LogoProps {
  size?: number
  dark?: boolean     // true = on dark background (reversed logo)
  className?: string
}

export const EnvitectLogo = ({ size = 40, dark = false, className = '' }: LogoProps) => {
  const leftFill   = dark ? 'rgba(255,255,255,0.92)' : '#0E0F0D'
  const cadStroke  = dark ? 'rgba(255,255,255,0.18)' : 'rgba(14,15,13,0.18)'

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 84 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Envitect Designs Logo Mark"
    >
      {/* Left L — Engineering (Ink / White reversed) */}
      <path d="M6 6 L42 6 L42 42 L28 42 L28 20 L6 20 Z" fill={leftFill} />
      {/* Right L — Environment (Envitect Teal) */}
      <path d="M78 78 L42 78 L42 42 L56 42 L56 64 L78 64 Z" fill="#0A8A7A" />
      {/* Gold lock-point — junction of the two L-shapes */}
      <rect x="38" y="38" width="8" height="8" fill="#F0C96B" />
      {/* CAD construction lines — engineering precision detail */}
      <line x1="6"  y1="13" x2="42" y2="13" stroke={cadStroke} strokeWidth="1" strokeDasharray="3 3" />
      <line x1="16" y1="6"  x2="16" y2="20" stroke={cadStroke} strokeWidth="1" strokeDasharray="3 3" />
      {/* Organic curve — environmental softness */}
      <path
        d="M44 78 Q62 68 78 68"
        stroke={cadStroke}
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  )
}

export const LogoFull = ({
  dark = false,
  size = 'md',
}: {
  dark?: boolean
  size?: 'sm' | 'md' | 'lg'
}) => {
  const markSizes  = { sm: 28, md: 36, lg: 48 }
  const nameColor  = dark ? 'text-white' : 'text-ink'
  const subColor   = 'text-teal'
  const nameSizes  = { sm: 'text-lg', md: 'text-xl', lg: 'text-3xl' }

  return (
    <div className="flex items-center gap-3">
      <EnvitectLogo size={markSizes[size]} dark={dark} />
      <div className="flex flex-col leading-none">
        {/* ENVITECT — Barlow Condensed Bold Uppercase */}
        <span
          className={`font-display font-bold tracking-tight uppercase ${nameColor} ${nameSizes[size]}`}
          style={{ letterSpacing: '-0.01em' }}
        >
          ENVITECT
        </span>
        {/* DESIGNS — Barlow Condensed Light, wider tracking */}
        <span
          className={`font-display font-light uppercase ${subColor}`}
          style={{
            fontSize: size === 'lg' ? '11px' : '9px',
            letterSpacing: '0.25em',
          }}
        >
          DESIGNS
        </span>
      </div>
    </div>
  )
}
