import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { Particles } from "@/components/atmosphere";
import { MemoryTimeline } from "@/components/visuals";

export const Route = createFileRoute("/realized")({

  component: () => (
    <PageShell
      step={3}
      kicker="what i realized"
      heading="I Finally Understood"
      visual={<MemoryTimeline />}
      background={<Particles count={28} />}
      cta={{ label: "Next Memory", to: "/miss" }}
    >
      <p>Sometimes we only realize someone's value when we risk losing them.</p>
      <p>These days made me understand how important you are to me.</p>
      <p className="font-script text-2xl text-gold">Your smile. Your presence. Your care.</p>
      <p className="italic text-gold-soft">Everything.</p>
    </PageShell>
  ),
});
