import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { Rain, Particles } from "@/components/atmosphere";
import { ManInRain } from "@/components/visuals";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Please Read This — A Letter from Faiz" },
      { name: "description", content: "Before you close this... please give me a few moments." },
    ],
  }),
  component: Page1,
});

function Page1() {
  return (
    <PageShell
      step={1}
      kicker="please read this"
      heading="Before You Close This..."
      visual={<ManInRain />}
      background={
        <>
          <Rain density={70} />
          <Particles count={20} />
        </>
      }
      cta={{ label: "Yes, I'll Listen ❤️", to: "/wrong" }}
    >
      <p>I know you're hurt.</p>
      <p>I know you're disappointed.</p>
      <p>And maybe right now you don't even want to hear from me.</p>
      <p className="italic text-gold-soft">
        But if our memories ever meant something to you, please give me a few moments.
      </p>
    </PageShell>
  );
}
