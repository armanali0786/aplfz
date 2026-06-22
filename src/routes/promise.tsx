import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { Particles } from "@/components/atmosphere";
import { RepairingHeart } from "@/components/visuals";

export const Route = createFileRoute("/promise")({
  head: () => ({ meta: [{ title: "My Promise" }] }),
  component: () => (
    <PageShell
      step={5}
      kicker="my promise"
      heading="I Promise To Be Better"
      visual={<RepairingHeart />}
      background={<Particles count={32} />}
      cta={{ label: "One Last Thing", to: "/heart" }}
    >
      <p>I cannot change yesterday.</p>
      <p className="italic text-gold-soft">But I can change myself.</p>
      <div className="mx-auto mt-4 space-y-2 rounded-2xl border border-gold/20 bg-card/40 p-6 text-left text-base sm:text-lg backdrop-blur">
        <p>✦ I promise to learn from this mistake.</p>
        <p>✦ I promise to listen more.</p>
        <p>✦ I promise to respect your feelings.</p>
        <p>✦ I promise to never take your love for granted again.</p>
      </div>
    </PageShell>
  ),
});
