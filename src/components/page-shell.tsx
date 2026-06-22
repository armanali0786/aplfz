import { motion } from "framer-motion";
import { Link, useLocation } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { useTracking } from "../hooks/use-tracking";

interface PageShellProps {
  step: number;
  total?: number;
  kicker?: string;
  heading: string;
  children: ReactNode;
  cta?: { label: string; to: string };
  background?: ReactNode;
  visual?: ReactNode;
}

export function PageShell({
  step,
  total = 7,
  kicker,
  heading,
  children,
  cta,
  background,
  visual,
}: PageShellProps) {
  const location = useLocation();
  useTracking(location.pathname, heading, step);

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-romance">
      {background}

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="w-full max-w-2xl text-center"
        >
          {visual && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="mb-8 flex justify-center"
            >
              {visual}
            </motion.div>
          )}

          {kicker && (
            <p className="mb-3 font-script text-lg text-gold-soft/90 tracking-wide">
              {kicker}
            </p>
          )}

          <h1 className="text-balance font-display text-4xl font-medium leading-[1.1] text-foreground sm:text-5xl md:text-6xl">
            <span className="text-gradient-gold italic">{heading}</span>
          </h1>

          <div className="mx-auto mt-8 max-w-xl space-y-4 text-pretty font-display text-lg leading-relaxed text-foreground/85 sm:text-xl">
            {children}
          </div>

          {cta && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-12"
            >
              <Link
                to={cta.to}
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-gold/40 bg-gradient-to-r from-burgundy/60 via-navy/40 to-burgundy/60 px-9 py-4 font-display text-lg italic tracking-wide text-gold shadow-glow transition-all duration-500 hover:scale-105 hover:border-gold hover:text-gold"
              >
                <span
                  className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full"
                  aria-hidden
                />
                {cta.label}
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>

      <footer className="relative z-10 pb-6 text-center">
        <div className="mx-auto flex w-full max-w-xs items-center justify-center gap-2">
          {Array.from({ length: total }).map((_, i) => (
            <span
              key={i}
              className={`h-[3px] flex-1 rounded-full transition-all duration-700 ${
                i < step ? "bg-gold" : "bg-foreground/15"
              }`}
            />
          ))}
        </div>
        <p className="mt-3 font-display text-xs uppercase tracking-[0.3em] text-foreground/40">
          {step} / {total}
        </p>
      </footer>
    </main>
  );
}
