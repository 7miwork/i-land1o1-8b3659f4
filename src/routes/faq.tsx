import { createFileRoute } from "@tanstack/react-router";
import { FAQS } from "@/data/faq";
import { useT } from "@/i18n";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Kids Minecraft Coding Classes | I-Land" },
      { name: "description", content: "Common questions about I-Land's Minecraft Education coding classes for kids: age groups, equipment, class size, pricing." },
      { property: "og:title", content: "FAQ | I-Land Coding Academy" },
      { property: "og:description", content: "Everything parents ask before enrolling in our kids' coding classes." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q.en,
            acceptedAnswer: { "@type": "Answer", text: f.a.en },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  const { t, locale } = useT();
  return (
    <div className="bg-parchment">
      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="text-center">
          <h1 className="font-display text-4xl text-wood-dark md:text-5xl">{t("faq.title")}</h1>
          <p className="mx-auto mt-3 text-foreground/70">{t("faq.subtitle")}</p>
        </div>

        <Accordion type="single" collapsible className="mt-10 space-y-3">
          {FAQS.map((f, i) => (
            <AccordionItem
              key={i}
              value={`f-${i}`}
              className="overflow-hidden rounded-2xl border-2 border-wood-dark/20 bg-white px-4 shadow-sm"
            >
              <AccordionTrigger className="text-left font-display text-lg text-wood-dark">
                {f.q[locale]}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80">{f.a[locale]}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
}
