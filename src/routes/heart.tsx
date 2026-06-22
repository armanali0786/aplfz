import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { Particles } from "@/components/atmosphere";
import { TwoSilhouettes } from "@/components/visuals";

export const Route = createFileRoute("/heart")({

  component: () => (
    <PageShell
      step={6}
      kicker="my heart"
      heading="If There Is Still A Chance..."
      visual={<TwoSilhouettes />}
      background={<Particles count={30} />}
      cta={{ label: "Final Message ❤️", to: "/for-you" }}
    >
      <p>I don't expect everything to become normal immediately.</p>
      <p>I only hope for one conversation.</p>
      <p>One opportunity.</p>
      <p className="italic text-gold-soft">
        One chance to show that my apology is real and my love is genuine.
      </p>
    </PageShell>
  ),
});
