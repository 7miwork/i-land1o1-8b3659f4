import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { COURSES, findCourse } from "@/data/courses";
import { useT } from "@/i18n";
import { Check } from "lucide-react";

export const Route = createFileRoute("/courses/$slug")({
  loader: ({ params }) => {
    const course = findCourse(params.slug);
    if (!course) throw notFound();
    return course;
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Course not found | I-Land" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = `${loaderData.title.en} — Minecraft Coding | I-Land`;
    const desc = loaderData.tagline.en + " Live online Minecraft coding class for kids.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: `/courses/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/courses/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: loaderData.title.en,
            description: loaderData.description.en,
            provider: {
              "@type": "EducationalOrganization",
              name: "I-Land Coding Academy",
            },
            offers: {
              "@type": "Offer",
              price: loaderData.priceEur,
              priceCurrency: "EUR",
            },
          }),
        },
      ],
    };
  },
  notFoundComponent: NotFound,
  component: CourseDetail,
});

function NotFound() {
  return (
    <div className="mx-auto max-w-lg px-6 py-24 text-center">
      <div className="text-5xl">🗺️</div>
      <h1 className="mt-4 font-display text-3xl text-wood-dark">Course not on the map</h1>
      <Link to="/courses" className="mt-6 inline-block rounded-full bg-wood-dark px-4 py-2 text-sm text-parchment">
        Back to catalog
      </Link>
    </div>
  );
}

function CourseDetail() {
  const c = Route.useLoaderData();
  const { t, locale } = useT();

  return (
    <div className="bg-parchment pb-16">
      <div className={`bg-gradient-to-br ${c.color} px-6 py-16 text-white`}>
        <div className="mx-auto max-w-5xl">
          <Link to="/courses" className="text-sm font-semibold text-white/90 hover:underline">← {t("nav.courses")}</Link>
          <div className="mt-6 flex flex-wrap items-center gap-6">
            <div className="text-7xl drop-shadow-lg">{c.emoji}</div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-white/90">
                {c.level} · {t("courses.age")} {c.ageMin}–{c.ageMax} · {c.durationWeeks} wks
              </div>
              <h1 className="mt-1 font-display text-4xl drop-shadow md:text-5xl">{c.title[locale]}</h1>
              <p className="mt-2 max-w-2xl text-lg text-white/95">{c.tagline[locale]}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 grid max-w-5xl gap-8 px-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <h2 className="font-display text-2xl text-wood-dark">About this voyage</h2>
          <p className="mt-3 text-foreground/80">{c.description[locale]}</p>

          <h3 className="mt-8 font-display text-xl text-wood-dark">Curriculum</h3>
          <ul className="mt-3 space-y-2">
            {c.curriculum[locale].map((line: string) => (
              <li key={line} className="flex items-start gap-3 rounded-xl bg-white p-3 shadow-sm">
                <Check className="mt-0.5 text-sea" size={20} />
                <span className="text-sm">{line}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <Fact label={t("courses.age")} value={`${c.ageMin}–${c.ageMax}`} />
            <Fact label={t("courses.level")} value={c.level} />
            <Fact label={t("courses.duration")} value={`${c.durationWeeks} weeks`} />
          </div>
        </div>

        <aside className="md:sticky md:top-24 md:self-start">
          <div className="rounded-2xl border-2 border-wood-dark/20 bg-white p-6 shadow-lg">
            <div className="font-display text-4xl text-wood-dark">€{c.priceEur}</div>
            <div className="text-xs text-foreground/60">{t("courses.perTerm")}</div>
            <Link
              to="/book"
              className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-gold px-4 py-3 font-bold text-wood-dark ring-2 ring-wood-dark hover:scale-[1.02]"
            >
              ⚓ {t("cta.book")}
            </Link>
            <button
              disabled
              title="Stripe checkout activates once payments are enabled."
              className="mt-3 w-full cursor-not-allowed rounded-full bg-sea px-4 py-3 font-bold text-white opacity-70"
            >
              💳 {t("cta.enroll")}
            </button>
            <p className="mt-3 text-center text-xs text-foreground/60">
              Secured by Stripe · 3-month installments available
            </p>
          </div>
        </aside>
      </div>

      <div className="mx-auto mt-16 max-w-5xl px-6">
        <h3 className="font-display text-xl text-wood-dark">Other islands</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {COURSES.filter((x) => x.slug !== c.slug).slice(0, 3).map((o) => (
            <Link
              key={o.slug}
              to="/courses/$slug"
              params={{ slug: o.slug }}
              className="group rounded-xl border border-wood-dark/20 bg-white p-4 shadow-sm hover:shadow-md"
            >
              <div className="text-3xl">{o.emoji}</div>
              <div className="mt-2 font-display text-lg text-wood-dark group-hover:text-sea">{o.title[locale]}</div>
              <div className="text-xs text-foreground/60">{t("courses.age")} {o.ageMin}–{o.ageMax}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-white p-4 text-center shadow-sm">
      <div className="text-xs uppercase tracking-widest text-foreground/60">{label}</div>
      <div className="mt-1 font-display text-lg text-wood-dark">{value}</div>
    </div>
  );
}
