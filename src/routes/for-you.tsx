import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Petals, Particles } from "@/components/atmosphere";
import { Sunrise } from "@/components/visuals";

export const Route = createFileRoute("/for-you")({

  component: FinalPage,
});

function FinalPage() {
  const [response, setResponse] = useState<null | "talk" | "time">(null);

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-romance">
      {/* Sunrise glow */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, oklch(0.78 0.14 78 / 0.45) 0%, oklch(0.45 0.16 30 / 0.25) 40%, transparent 70%)",
        }}
      />
      <Particles count={20} />
      <Petals count={28} />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="w-full max-w-2xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6, delay: 0.3 }}
            className="mb-8 flex justify-center"
          >
            <Sunrise />
          </motion.div>

          <p className="mb-3 font-script text-xl text-gold-soft">for you</p>
          <h1 className="font-display text-4xl font-medium italic text-gradient-gold sm:text-5xl md:text-6xl">
            Thank You For Reading
          </h1>

          <div className="mx-auto mt-8 max-w-xl space-y-4 font-display text-lg leading-relaxed text-foreground/90 sm:text-xl">
            <p>No matter what happens,</p>
            <p>thank you for every beautiful memory.</p>
            <p>If there is even a small place left in your heart for us,</p>
            <p className="italic text-gold-soft">I will patiently wait.</p>
            <p>Because some people are worth waiting for.</p>
            <p className="font-script text-3xl text-gold">Always.</p>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-10 font-script text-3xl text-gold drop-shadow-[0_0_12px_oklch(0.82_0.14_82_/_0.5)]"
          >
            — Faiz ❤️
          </motion.p>

          {!response ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <button
                onClick={() => setResponse("talk")}
                className="group relative w-full overflow-hidden rounded-full border border-gold bg-gradient-to-r from-gold/90 to-gold-soft/90 px-9 py-4 font-display text-lg italic text-background shadow-glow transition-all duration-500 hover:scale-105 sm:w-auto"
              >
                Talk To Me
              </button>
              <button
                onClick={() => setResponse("time")}
                className="w-full rounded-full border border-gold/40 bg-card/40 px-9 py-4 font-display text-lg italic text-gold backdrop-blur transition-all duration-500 hover:scale-105 hover:border-gold sm:w-auto"
              >
                I Need Some Time
              </button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mt-12 rounded-2xl border border-gold/30 bg-card/50 p-8 backdrop-blur"
            >
              <p className="font-display text-2xl italic text-gradient-gold">
                {response === "talk"
                  ? "Thank you. You just gave me everything."
                  : "I understand. I'll be here, however long it takes."}
              </p>
              <p className="mt-3 font-script text-xl text-gold-soft">— Faiz</p>
            </motion.div>
          )}
        </motion.div>
      </div>

      <footer className="relative z-10 pb-6 text-center">
        <div className="mx-auto flex w-full max-w-xs items-center justify-center gap-2">
          {Array.from({ length: 7 }).map((_, i) => (
            <span key={i} className="h-[3px] flex-1 rounded-full bg-gold" />
          ))}
        </div>
        <p className="mt-3 font-display text-xs uppercase tracking-[0.3em] text-foreground/40">
          7 / 7
        </p>
      </footer>
    </main>
  );
}
