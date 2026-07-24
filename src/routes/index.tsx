import { createFileRoute, Link } from "@tanstack/react-router";
import { OceanBackground } from "@/components/OceanBackground";
import { TreasureMap } from "@/components/TreasureMap";
import { useT } from "@/i18n";
import { COURSES } from "@/data/courses";
import { TESTIMONIALS } from "@/data/testimonials";
import heroImg from "@/assets/hero-island.jpg";
import { Anchor, Compass, ShieldCheck, Sparkles, Star } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Minecraft Coding for Kids | I-Land Coding Academy" },
      {
        name: "description",
        content:
          "Live online Minecraft Education coding classes for kids ages 6–14. Small crews, certified captains, taught in English, Deutsch and 繁體中文. Free trial lesson.",
      },
      { name: "keywords", content: "Minecraft Coding for Kids, Online Programming School, kids coding Minecraft, coding classes for children" },
      { property: "og:title", content: "Minecraft Coding for Kids | I-Land Coding Academy" },
      { property: "og:description", content: "Pirate-island Minecraft coding adventures for kids 6–14, in EN / DE / 繁體中文." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroImg },
      { name: "twitter:title", content: "Minecraft Coding for Kids | I-Land Coding Academy" },
      { name: "twitter:description", content: "Live online Minecraft coding classes for kids 6–14." },
      { name: "twitter:image", content: heroImg },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "I-Land Coding Academy",
          description: "Minecraft Education coding school for children ages 6–14.",
          areaServed: ["DE", "AT", "CH", "TW"],
          sameAs: [],
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  const { t } = useT();
  const featured = COURSES.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <OceanBackground>
        <section className="relative mx-auto grid max-w-7xl gap-10 px-6 pb-40 pt-14 md:grid-cols-2 md:pb-56 md:pt-24">
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-gold/90 px-3 py-1 text-xs font-bold uppercase tracking-widest text-wood-dark shadow">
              <Sparkles size={14} /> {t("hero.eyebrow")}
            </span>
            <h1 className="mt-4 font-pirate text-4xl leading-tight text-white drop-shadow-[0_4px_0_rgb(0,0,0,0.35)] md:text-6xl">
              {t("hero.title")}
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/95 drop-shadow-md">
              {t("hero.subtitle")}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/book"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-bold text-wood-dark shadow-lg ring-2 ring-wood-dark transition hover:scale-[1.03]"
              >
                ⛵ {t("cta.book")}
              </Link>
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 rounded-full bg-parchment/95 px-6 py-3 font-bold text-wood-dark shadow-lg ring-2 ring-wood-dark transition hover:scale-[1.03]"
              >
                🗺️ {t("cta.explore")}
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold">
              {[t("hero.badge1"), t("hero.badge2"), t("hero.badge3")].map((b) => (
                <span key={b} className="rounded-full bg-white/25 px-3 py-1 text-white backdrop-blur">
                  ⚓ {b}
                </span>
              ))}
            </div>
          </div>

          <div className="relative z-10 self-center">
            <div className="overflow-hidden rounded-3xl shadow-2xl ring-4 ring-wood-dark/60 bob-slow">
              <img
                src={heroImg}
                alt="Pirate island in Minecraft voxel style with palm trees and a treasure chest"
                width={1600}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>
      </OceanBackground>

      {/* Features */}
      <section className="bg-parchment py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center font-display text-3xl text-wood-dark md:text-4xl">{t("features.title")}</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              { icon: <Anchor />, k: "f1" },
              { icon: <ShieldCheck />, k: "f2" },
              { icon: <Compass />, k: "f3" },
              { icon: <Star />, k: "f4" },
            ].map((f) => (
              <div
                key={f.k}
                className="rounded-2xl border-2 border-wood-dark/20 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-sea text-white">
                  {f.icon}
                </div>
                <h3 className="mt-4 font-display text-xl text-wood-dark">{t(`features.${f.k}.t`)}</h3>
                <p className="mt-1.5 text-sm text-foreground/70">{t(`features.${f.k}.d`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treasure Map nav */}
      <section className="relative bg-gradient-to-b from-parchment to-sand py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="font-display text-3xl text-wood-dark md:text-4xl">{t("map.title")}</h2>
          <p className="mx-auto mt-2 max-w-2xl text-foreground/70">{t("map.subtitle")}</p>
          <div className="mt-10">
            <TreasureMap />
          </div>
        </div>
      </section>

      {/* Featured courses */}
      <section className="bg-parchment py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl text-wood-dark md:text-4xl">{t("courses.title")}</h2>
              <p className="mt-1 text-foreground/70">{t("courses.subtitle")}</p>
            </div>
            <Link to="/courses" className="hidden text-sm font-semibold text-sea hover:underline md:inline">
              {t("cta.explore")} →
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featured.map((c) => (
              <CourseCard key={c.slug} slug={c.slug} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials teaser */}
      <section className="bg-sea-deep py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center font-display text-3xl md:text-4xl">{t("testimonials.title")}</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.slice(0, 3).map((tst) => (
              <TestimonialMini key={tst.name} name={tst.name} city={tst.city} emoji={tst.emoji} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/testimonials" className="rounded-full bg-gold px-5 py-2 font-bold text-wood-dark ring-2 ring-wood-dark">
              Read all reviews
            </Link>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-parchment py-16">
        <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-r from-sea to-sea-deep px-8 py-12 text-center text-white shadow-xl">
          <h2 className="font-display text-3xl md:text-4xl">Ready to set sail?</h2>
          <p className="mt-2 text-white/90">First lesson is free. No card required.</p>
          <Link
            to="/book"
            className="mt-6 inline-flex rounded-full bg-gold px-6 py-3 font-bold text-wood-dark shadow-lg ring-2 ring-wood-dark hover:scale-[1.03]"
          >
            ⚓ {t("cta.book")}
          </Link>
        </div>
      </section>
    </>
  );
}

function CourseCard({ slug }: { slug: string }) {
  const { t, locale } = useT();
  const c = COURSES.find((x) => x.slug === slug)!;
  return (
    <Link
      to="/courses/$slug"
      params={{ slug: c.slug }}
      className="group flex flex-col overflow-hidden rounded-2xl border-2 border-wood-dark/20 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className={`bg-gradient-to-br ${c.color} p-6 text-white`}>
        <div className="text-5xl">{c.emoji}</div>
        <div className="mt-4 text-xs font-semibold uppercase tracking-widest text-white/90">
          {c.level} · {t("courses.age")} {c.ageMin}–{c.ageMax}
        </div>
        <h3 className="mt-1 font-display text-2xl drop-shadow">{c.title[locale]}</h3>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm text-foreground/70">{c.tagline[locale]}</p>
        <div className="mt-auto flex items-end justify-between pt-4">
          <div>
            <div className="font-display text-2xl text-wood-dark">€{c.priceEur}</div>
            <div className="text-xs text-foreground/60">{t("courses.perTerm")}</div>
          </div>
          <span className="rounded-full bg-wood-dark px-3 py-1.5 text-xs font-bold text-parchment group-hover:bg-sea">
            {t("courses.view")} →
          </span>
        </div>
      </div>
    </Link>
  );
}

function TestimonialMini({ name, city, emoji }: { name: string; city: string; emoji: string }) {
  const { locale } = useT();
  const tst = TESTIMONIALS.find((x) => x.name === name)!;
  return (
    <blockquote className="parchment rounded-2xl p-6 text-wood-dark shadow-lg">
      <div className="flex items-center gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-full bg-wood text-2xl text-parchment">
          {emoji}
        </div>
        <div>
          <div className="font-display text-lg">{name}</div>
          <div className="text-xs text-wood-dark/70">{city} · {tst.child}</div>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed">“{tst.quote[locale]}”</p>
      <div className="mt-3 text-gold">★★★★★</div>
    </blockquote>
  );
}
