import React from 'react';

export interface GengarileoLogoProps {
  size?: number;
  variant?: 'gradient' | 'lavender' | 'sky' | 'dark' | 'white';
  showWordmark?: boolean;
  className?: string;
  isAppIcon?: boolean;
}

export const GengarileoLogo: React.FC<GengarileoLogoProps> = ({
  size = 36,
  variant = 'gradient',
  showWordmark = false,
  className = '',
  isAppIcon = false,
}) => {
  // Color configuration based on variant
  const colors = {
    gradient: {
      from: '#A855F7',
      to: '#38BDF8',
      star: '#FEF08A',
      starGlow: '#FDE047',
      ring: '#FFFFFF',
      bg: '#0F172A',
    },
    lavender: {
      from: '#A855F7',
      to: '#7C3AED',
      star: '#FFFFFF',
      starGlow: '#DDD6FE',
      ring: '#FFFFFF',
      bg: '#FAF5FF',
    },
    sky: {
      from: '#38BDF8',
      to: '#0284C7',
      star: '#FFFFFF',
      starGlow: '#BAE6FD',
      ring: '#FFFFFF',
      bg: '#F0F9FF',
    },
    dark: {
      from: '#0F172A',
      to: '#1E293B',
      star: '#FFFFFF',
      starGlow: '#94A3B8',
      ring: '#FFFFFF',
      bg: '#FFFFFF',
    },
    white: {
      from: '#FFFFFF',
      to: '#F1F5F9',
      star: '#FEF08A',
      starGlow: '#FFFFFF',
      ring: '#FFFFFF',
      bg: '#0F172A',
    },
  }[variant];

  const uniqueId = React.useId().replace(/:/g, '');

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <defs>
          <linearGradient id={`grad-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colors.from} />
            <stop offset="100%" stopColor={colors.to} />
          </linearGradient>

          <linearGradient id={`ring-grad-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.4" />
          </linearGradient>

          <filter id={`glow-${uniqueId}`} x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor={colors.from} floodOpacity="0.35" />
          </filter>
        </defs>

        {/* Optional App Icon Container */}
        {isAppIcon ? (
          <>
            <rect width="100" height="100" rx="24" fill={colors.bg} />
            <rect width="98" height="98" x="1" y="1" rx="23" stroke="#334155" strokeWidth="1.5" strokeOpacity="0.3" />
          </>
        ) : null}

        {/* Gengarileo Geometric Symbol */}
        <g transform={isAppIcon ? 'translate(0, 0)' : 'translate(0, 0)'}>
          
          {/* Cosmic Planetary Orbit Ring 1 (Galileo Astronomy) */}
          <ellipse
            cx="50"
            cy="52"
            rx="38"
            ry="15"
            transform="rotate(-26 50 52)"
            stroke={`url(#ring-grad-${uniqueId})`}
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeDasharray="180 50"
            opacity="0.95"
          />

          {/* Cosmic Planetary Orbit Ring 2 (Subtle Accent) */}
          <ellipse
            cx="50"
            cy="52"
            rx="34"
            ry="11"
            transform="rotate(-26 50 52)"
            stroke={colors.to}
            strokeWidth="1.5"
            strokeDasharray="140 70"
            opacity="0.6"
          />

          {/* Central Cosmic Crown Silhouette Body with Orbit Wing */}
          <path
            d="
              M 35 32
              L 41 42
              L 47 37
              L 50 42
              L 53 37
              L 59 42
              L 65 32
              C 71 42, 73 54, 71 66
              L 68 74
              L 62 69
              L 56 76
              L 50 68
              L 44 76
              L 38 69
              L 32 74
              C 27 54, 29 42, 35 32
              Z
            "
            fill={`url(#grad-${uniqueId})`}
            filter={`url(#glow-${uniqueId})`}
          />

          {/* Minimal Playful Triangular Eyes */}
          <path d="M 42 49 L 47 47 L 45 53 Z" fill={isAppIcon ? colors.bg : '#0F172A'} />
          <path d="M 58 49 L 53 47 L 55 53 Z" fill={isAppIcon ? colors.bg : '#0F172A'} />

          {/* Center 4-Point Galileo Nova Star (Butter Yellow Accent) */}
          <g transform="translate(50, 61)">
            {/* Soft Star Backing */}
            <circle r="7" fill={colors.starGlow} opacity="0.3" />
            {/* Diamond Star Shape */}
            <path
              d="M 0 -8 Q 0 0 -8 0 Q 0 0 0 8 Q 0 0 8 0 Q 0 0 0 -8 Z"
              fill={colors.star}
            />
            {/* Center Pure White Spark */}
            <circle r="1.5" fill="#FFFFFF" />
          </g>

          {/* Orbit Satellite Particle */}
          <circle cx="78" cy="40" r="2.5" fill="#38BDF8" opacity="0.9" />
          <circle cx="21" cy="62" r="2" fill="#FEF08A" opacity="0.85" />
        </g>
      </svg>

      {/* Wordmark */}
      {showWordmark && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="font-extrabold text-base tracking-tight text-[#0F172A]">
              Gengarileo
            </span>
            <span className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded bg-[#F3E8FF] text-[#7E22CE] tracking-wider">
              DS
            </span>
          </div>
          <span className="text-[11px] text-[#64748B] font-medium leading-none -mt-0.5">
            Design & Brand System
          </span>
        </div>
      )}
    </div>
  );
};
