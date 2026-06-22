import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { Particles } from "@/components/atmosphere";
import { MoonMemories } from "@/components/visuals";

export const Route = createFileRoute("/miss")({

  component: () => (
    <PageShell
      step={4}
      kicker="the things i miss"
      heading="I Miss Us"
      visual={<MoonMemories />}
      background={<Particles count={35} />}
      cta={{ label: "Keep Reading", to: "/promise" }}
    >
      <p>I miss our conversations.</p>
      <p>I miss your random messages.</p>
      <p>I miss making you laugh.</p>
      <p>I miss knowing you're okay.</p>
      <p className="italic text-gold-soft">
        Most of all, I miss being the reason for your smile.
      </p>
    </PageShell>
  ),
});
