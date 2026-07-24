import { createFileRoute, Link } from "@tanstack/react-router";
import { COURSES } from "@/data/courses";
import { useT } from "@/i18n";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Course Catalog — Online Programming School | I-Land" },
      {
        name: "description",
        content:
          "Browse Minecraft coding courses for kids ages 6–14: block coding, JavaScript, Python, and Redstone logic. Small live online classes.",
      },
      { property: "og:title", content: "Course Catalog | I-Land Coding Academy" },
      { property: "og:description", content: "Online programming school courses for children 6–14, taught inside Minecraft Education." },
      { property: "og:url", content: "/courses" },
    ],
    links: [{ rel: "canonical", href: "/courses" }],
  }),
  component: CoursesPage,
});

function CoursesPage() {
  const { t, locale } = useT();
  return (
    <div className="bg-parchment">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center">
          <h1 className="font-display text-4xl text-wood-dark md:text-5xl">{t("courses.title")}</h1>
          <p className="mx-auto mt-3 max-w-2xl text-foreground/70">{t("courses.subtitle")}</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {COURSES.map((c) => (
            <Link
              key={c.slug}
              to="/courses/$slug"
              params={{ slug: c.slug }}
              className="group flex flex-col overflow-hidden rounded-3xl border-2 border-wood-dark/20 bg-white shadow-md transition hover:-translate-y-1 hover:shadow-2xl md:flex-row"
            >
              <div className={`flex items-center justify-center bg-gradient-to-br ${c.color} p-8 text-6xl md:w-48`}>
                <span className="drop-shadow-lg">{c.emoji}</span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="text-xs font-bold uppercase tracking-widest text-sea">
                  {c.level} · {t("courses.age")} {c.ageMin}–{c.ageMax} · {c.durationWeeks} wks
                </div>
                <h2 className="mt-1 font-display text-2xl text-wood-dark">{c.title[locale]}</h2>
                <p className="mt-1 text-sm text-foreground/70">{c.tagline[locale]}</p>
                <div className="mt-auto flex items-end justify-between pt-4">
                  <div>
                    <div className="font-display text-2xl text-wood-dark">€{c.priceEur}</div>
                    <div className="text-xs text-foreground/60">{t("courses.perTerm")}</div>
                  </div>
                  <span className="rounded-full bg-wood-dark px-4 py-2 text-xs font-bold text-parchment group-hover:bg-sea">
                    {t("courses.view")} →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
