import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { LOCALES, useT, type Locale } from "@/i18n";
import { Menu, X } from "lucide-react";

const NAV: { to: "/" | "/courses" | "/book" | "/testimonials" | "/faq" | "/contact"; k: string }[] = [
  { to: "/", k: "nav.home" },
  { to: "/courses", k: "nav.courses" },
  { to: "/book", k: "nav.book" },
  { to: "/testimonials", k: "nav.testimonials" },
  { to: "/faq", k: "nav.faq" },
  { to: "/contact", k: "nav.contact" },
];

export function Header() {
  const { t, locale, setLocale } = useT();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-wood-dark/30 bg-parchment/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link to="/" className="flex items-center gap-2 font-display text-lg text-wood-dark md:text-xl">
          <span className="text-2xl">🏴‍☠️</span>
          <span className="leading-tight">{t("nav.brand")}</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="rounded-full px-3 py-1.5 text-sm font-semibold text-wood-dark transition hover:bg-wood-dark/10"
              activeProps={{ className: "bg-wood-dark text-parchment hover:bg-wood-dark" }}
            >
              {t(n.k)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguagePicker locale={locale} setLocale={setLocale} />
          <button
            className="rounded-md p-2 text-wood-dark md:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-wood-dark/20 bg-parchment px-4 py-2 md:hidden">
          <ul className="flex flex-col">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: n.to === "/" }}
                  className="block rounded-md px-3 py-2 text-sm font-semibold text-wood-dark hover:bg-wood-dark/10"
                  activeProps={{ className: "bg-wood-dark/10" }}
                >
                  {t(n.k)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

function LanguagePicker({ locale, setLocale }: { locale: Locale; setLocale: (l: Locale) => void }) {
  return (
    <div className="flex overflow-hidden rounded-full border border-wood-dark/30 bg-parchment text-xs">
      {LOCALES.map((l) => (
        <button
          key={l.code}
          onClick={() => setLocale(l.code)}
          className={
            "px-2 py-1 font-semibold transition " +
            (locale === l.code
              ? "bg-wood-dark text-parchment"
              : "text-wood-dark hover:bg-wood-dark/10")
          }
          aria-pressed={locale === l.code}
          aria-label={l.label}
          title={l.label}
        >
          <span className="mr-1">{l.flag}</span>
          <span className="uppercase">{l.code}</span>
        </button>
      ))}
    </div>
  );
}
