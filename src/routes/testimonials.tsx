import { createFileRoute } from "@tanstack/react-router";
import { TESTIMONIALS } from "@/data/testimonials";
import { useT } from "@/i18n";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Parent Testimonials | I-Land Coding Academy" },
      { name: "description", content: "Real parent reviews of I-Land Coding Academy's Minecraft coding classes from Germany, Austria and Taiwan." },
      { property: "og:title", content: "Parent Testimonials | I-Land" },
      { property: "og:description", content: "See what parents say about our kids' Minecraft coding classes." },
      { property: "og:url", content: "/testimonials" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  const { t, locale } = useT();
  return (
    <div className="bg-parchment">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center">
          <h1 className="font-display text-4xl text-wood-dark md:text-5xl">{t("testimonials.title")}</h1>
          <p className="mx-auto mt-3 max-w-2xl text-foreground/70">{t("testimonials.subtitle")}</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((tst) => (
            <blockquote key={tst.name} className="parchment rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-wood text-3xl text-parchment">
                  {tst.emoji}
                </div>
                <div>
                  <div className="font-display text-lg text-wood-dark">{tst.name}</div>
                  <div className="text-xs text-wood-dark/70">{tst.city} · {tst.child}</div>
                </div>
                <div className="ml-auto text-gold" aria-label={`${tst.rating} stars`}>
                  {"★".repeat(tst.rating)}
                </div>
              </div>
              <p className="mt-4 leading-relaxed text-wood-dark">“{tst.quote[locale]}”</p>
            </blockquote>
          ))}
        </div>
      </section>
    </div>
  );
}
