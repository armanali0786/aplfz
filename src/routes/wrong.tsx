import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { Particles } from "@/components/atmosphere";
import { BrokenHeart } from "@/components/visuals";

export const Route = createFileRoute("/wrong")({
  component: () => (
    <PageShell
      step={2}
      kicker="i was wrong"
      heading="I Accept My Mistake"
      visual={<BrokenHeart />}
      background={<Particles count={30} />}
      cta={{ label: "Continue", to: "/realized" }}
    >
      <p>I'm not here to make excuses.</p>
      <p>I'm not here to blame circumstances.</p>
      <p>What happened was my mistake.</p>
      <p className="italic text-gold-soft">
        I hurt the person I love most, and that realization has been hurting me every single day.
      </p>
    </PageShell>
  ),
});
