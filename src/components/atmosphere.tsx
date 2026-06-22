import { useMemo } from "react";

export function Rain({ density = 60 }: { density?: number }) {
  const drops = useMemo(
    () =>
      Array.from({ length: density }, (_, i) => ({
        left: Math.random() * 100,
        delay: Math.random() * 3,
        duration: 0.8 + Math.random() * 1.2,
        opacity: 0.2 + Math.random() * 0.5,
      })),
    [density]
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {drops.map((d, i) => (
        <span
          key={i}
          className="absolute top-0 block w-px bg-gradient-to-b from-transparent via-gold-soft/40 to-transparent"
          style={{
            left: `${d.left}%`,
            height: `${40 + Math.random() * 60}px`,
            opacity: d.opacity,
            animation: `rain-fall ${d.duration}s linear ${d.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

export function Particles({ count = 30 }: { count?: number }) {
  const items = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 2 + Math.random() * 4,
        delay: Math.random() * 5,
        duration: 4 + Math.random() * 6,
      })),
    [count]
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-gold/70 blur-[1px]"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            boxShadow: "0 0 8px var(--gold)",
            animation: `particle-float ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

export function Petals({ count = 24 }: { count?: number }) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 8 + Math.random() * 8,
        size: 10 + Math.random() * 14,
        hue: 350 + Math.random() * 20,
      })),
    [count]
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {petals.map((p, i) => (
        <svg
          key={i}
          viewBox="0 0 32 32"
          className="absolute -top-10"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            animation: `petal-fall ${p.duration}s linear ${p.delay}s infinite`,
            filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.4))",
          }}
        >
          <path
            d="M16 2 C22 8 28 14 16 30 C4 14 10 8 16 2 Z"
            fill={`hsl(${p.hue}, 60%, 55%)`}
            opacity="0.85"
          />
        </svg>
      ))}
    </div>
  );
}
