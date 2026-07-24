import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { InlineWidget } from "react-calendly";
import { SITE } from "@/config/site";
import { useT } from "@/i18n";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a Free Trial Lesson | I-Land Coding Academy" },
      { name: "description", content: "Book a free trial Minecraft coding class for your child. Pick a time that suits your family — no card required." },
      { property: "og:title", content: "Book a Free Trial | I-Land" },
      { property: "og:description", content: "Free trial lesson for kids' Minecraft coding classes." },
      { property: "og:url", content: "/book" },
    ],
    links: [{ rel: "canonical", href: "/book" }],
  }),
  component: BookPage,
});

function BookPage() {
  const { t } = useT();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="bg-parchment">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center">
          <h1 className="font-display text-4xl text-wood-dark md:text-5xl">{t("book.title")}</h1>
          <p className="mx-auto mt-3 max-w-2xl text-foreground/70">{t("book.subtitle")}</p>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border-2 border-wood-dark/20 bg-white shadow-xl">
          {mounted ? (
            <InlineWidget
              url={SITE.calendlyUrl}
              styles={{ height: "760px" }}
              pageSettings={{
                backgroundColor: "fdf6e3",
                primaryColor: "1c4a7a",
                textColor: "2a1f14",
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
              }}
            />
          ) : (
            <div className="grid h-[760px] place-items-center text-foreground/50">Loading calendar…</div>
          )}
        </div>

        <p className="mt-4 text-center text-xs text-foreground/60">
          Powered by Calendly — set your event URL in <code>src/config/site.ts</code>.
        </p>
      </section>
    </div>
  );
}
