export function ManInRain() {
  return (
    <svg viewBox="0 0 240 240" className="h-44 w-44 sm:h-56 sm:w-56">
      <defs>
        <radialGradient id="moon" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="oklch(0.85 0.06 80)" stopOpacity="0.7" />
          <stop offset="100%" stopColor="oklch(0.85 0.06 80)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ground" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.20 0.07 265)" stopOpacity="0" />
          <stop offset="100%" stopColor="oklch(0.20 0.07 265)" stopOpacity="0.7" />
        </linearGradient>
      </defs>
      <circle cx="170" cy="70" r="60" fill="url(#moon)" />
      <ellipse cx="120" cy="200" rx="110" ry="18" fill="url(#ground)" />
      {/* Distant silhouette */}
      <ellipse cx="190" cy="178" rx="6" ry="14" fill="oklch(0.36 0.14 18 / 0.5)" />
      {/* Lonely figure with umbrella */}
      <line x1="70" y1="120" x2="70" y2="180" stroke="oklch(0.96 0.01 80 / 0.85)" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="70" cy="108" r="9" fill="oklch(0.96 0.01 80 / 0.9)" />
      <path d="M40 105 Q70 80 100 105" stroke="oklch(0.82 0.14 82)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <line x1="70" y1="105" x2="70" y2="120" stroke="oklch(0.82 0.14 82)" strokeWidth="2" />
      <line x1="70" y1="180" x2="62" y2="200" stroke="oklch(0.96 0.01 80 / 0.85)" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="70" y1="180" x2="78" y2="200" stroke="oklch(0.96 0.01 80 / 0.85)" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function BrokenHeart() {
  return (
    <svg viewBox="0 0 200 180" className="h-40 w-40 animate-heartbeat sm:h-48 sm:w-48">
      <defs>
        <linearGradient id="heartG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.45 0.16 18)" />
          <stop offset="100%" stopColor="oklch(0.25 0.10 18)" />
        </linearGradient>
        <linearGradient id="goldCrack" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.92 0.14 82)" />
          <stop offset="100%" stopColor="oklch(0.62 0.13 60)" />
        </linearGradient>
      </defs>
      <path
        d="M100 160 C30 110 10 70 40 40 C60 20 90 30 100 55 C110 30 140 20 160 40 C190 70 170 110 100 160 Z"
        fill="url(#heartG)"
        stroke="oklch(0.82 0.14 82 / 0.4)"
        strokeWidth="1"
      />
      <path
        d="M100 55 L92 80 L106 100 L94 120 L102 155"
        stroke="url(#goldCrack)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        style={{ filter: "drop-shadow(0 0 4px oklch(0.82 0.14 82))" }}
      />
      <path
        d="M92 80 L80 88 M106 100 L120 96 M94 120 L82 130"
        stroke="url(#goldCrack)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        style={{ filter: "drop-shadow(0 0 4px oklch(0.82 0.14 82))" }}
      />
    </svg>
  );
}

export function MemoryTimeline() {
  const moments = ["☕", "🌙", "💌", "🌹", "✨"];
  return (
    <div className="relative flex items-center gap-3">
      <div className="absolute left-4 right-4 top-1/2 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      {moments.map((m, i) => (
        <div
          key={i}
          className="relative grid h-12 w-12 place-items-center rounded-full border border-gold/40 bg-card/60 text-xl shadow-glow backdrop-blur"
          style={{ animation: `particle-float ${3 + i * 0.4}s ease-in-out ${i * 0.3}s infinite` }}
        >
          {m}
        </div>
      ))}
    </div>
  );
}

export function MoonMemories() {
  return (
    <svg viewBox="0 0 240 200" className="h-44 w-56 sm:h-52 sm:w-64">
      <defs>
        <radialGradient id="moon2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="oklch(0.95 0.04 80)" />
          <stop offset="60%" stopColor="oklch(0.78 0.13 78 / 0.4)" />
          <stop offset="100%" stopColor="oklch(0.78 0.13 78 / 0)" />
        </radialGradient>
      </defs>
      <circle cx="120" cy="90" r="80" fill="url(#moon2)" />
      <circle cx="120" cy="90" r="34" fill="oklch(0.95 0.04 80 / 0.95)" />
      <circle cx="110" cy="82" r="4" fill="oklch(0.78 0.10 78 / 0.5)" />
      <circle cx="128" cy="96" r="3" fill="oklch(0.78 0.10 78 / 0.5)" />
      {[
        [40, 50], [200, 60], [60, 150], [190, 140], [30, 110], [210, 100],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2" fill="oklch(0.82 0.14 82)" style={{ filter: "drop-shadow(0 0 4px oklch(0.82 0.14 82))" }} />
      ))}
    </svg>
  );
}

export function RepairingHeart() {
  return (
    <svg viewBox="0 0 200 180" className="h-44 w-44 animate-heartbeat sm:h-52 sm:w-52">
      <defs>
        <linearGradient id="repair" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.55 0.18 18)" />
          <stop offset="100%" stopColor="oklch(0.32 0.12 18)" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="oklch(0.92 0.14 82 / 0.8)" />
          <stop offset="100%" stopColor="oklch(0.92 0.14 82 / 0)" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="90" fill="url(#glow)" />
      <path
        d="M100 160 C30 110 10 70 40 40 C60 20 90 30 100 55 C110 30 140 20 160 40 C190 70 170 110 100 160 Z"
        fill="url(#repair)"
      />
      <path
        d="M100 55 L100 155"
        stroke="oklch(0.92 0.14 82)"
        strokeWidth="4"
        strokeLinecap="round"
        style={{ filter: "drop-shadow(0 0 8px oklch(0.92 0.14 82))" }}
      />
      <path d="M85 80 L115 80 M82 105 L118 105 M88 130 L112 130" stroke="oklch(0.92 0.14 82)" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
    </svg>
  );
}

export function TwoSilhouettes() {
  return (
    <svg viewBox="0 0 280 180" className="h-44 w-64 sm:h-52 sm:w-72">
      <defs>
        <linearGradient id="path" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="oklch(0.92 0.14 82 / 0)" />
          <stop offset="50%" stopColor="oklch(0.92 0.14 82)" />
          <stop offset="100%" stopColor="oklch(0.92 0.14 82 / 0)" />
        </linearGradient>
      </defs>
      <path
        d="M60 120 Q140 60 220 120"
        stroke="url(#path)"
        strokeWidth="2"
        fill="none"
        style={{ filter: "drop-shadow(0 0 8px oklch(0.92 0.14 82))" }}
      />
      {/* Left silhouette */}
      <circle cx="60" cy="100" r="10" fill="oklch(0.96 0.01 80 / 0.85)" />
      <path d="M45 165 Q60 110 75 165 Z" fill="oklch(0.96 0.01 80 / 0.85)" />
      {/* Right silhouette */}
      <circle cx="220" cy="100" r="10" fill="oklch(0.92 0.14 82 / 0.9)" />
      <path d="M205 165 Q220 110 235 165 Z" fill="oklch(0.92 0.14 82 / 0.9)" />
      {/* Glow midpoint */}
      <circle cx="140" cy="78" r="6" fill="oklch(0.95 0.14 82)" style={{ filter: "drop-shadow(0 0 12px oklch(0.92 0.14 82))" }} />
    </svg>
  );
}

export function Sunrise() {
  return (
    <svg viewBox="0 0 320 180" className="h-44 w-72 sm:h-52 sm:w-80">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.30 0.10 30)" />
          <stop offset="50%" stopColor="oklch(0.60 0.16 50)" />
          <stop offset="100%" stopColor="oklch(0.82 0.14 80)" />
        </linearGradient>
        <radialGradient id="sun" cx="50%" cy="100%" r="60%">
          <stop offset="0%" stopColor="oklch(0.98 0.10 80)" />
          <stop offset="50%" stopColor="oklch(0.82 0.14 80 / 0.6)" />
          <stop offset="100%" stopColor="oklch(0.82 0.14 80 / 0)" />
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="320" height="180" rx="16" fill="url(#sky)" />
      <ellipse cx="160" cy="180" rx="160" ry="100" fill="url(#sun)" />
      <circle cx="160" cy="160" r="36" fill="oklch(0.98 0.10 80)" opacity="0.95" />
      <path d="M0 160 Q80 150 160 158 T320 160 L320 180 L0 180 Z" fill="oklch(0.20 0.07 265 / 0.6)" />
    </svg>
  );
}
