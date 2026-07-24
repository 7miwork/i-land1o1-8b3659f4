import { Link } from "@tanstack/react-router";
import { useT } from "@/i18n";
import { SITE } from "@/config/site";

export function Footer() {
  const { t } = useT();
  return (
    <footer className="mt-20 bg-wood-dark text-parchment">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 font-display text-xl">
            <span className="text-2xl">🏴‍☠️</span>
            {SITE.name}
          </div>
          <p className="mt-3 text-sm text-parchment/80">{t("footer.tagline")}</p>
        </div>
        <div>
          <h4 className="font-display text-sm uppercase tracking-widest text-gold">Ports</h4>
          <ul className="mt-3 space-y-1.5 text-sm">
            <li><Link to="/courses" className="hover:underline">{t("nav.courses")}</Link></li>
            <li><Link to="/book" className="hover:underline">{t("nav.book")}</Link></li>
            <li><Link to="/testimonials" className="hover:underline">{t("nav.testimonials")}</Link></li>
            <li><Link to="/faq" className="hover:underline">{t("nav.faq")}</Link></li>
            <li><Link to="/contact" className="hover:underline">{t("nav.contact")}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm uppercase tracking-widest text-gold">Signal us</h4>
          <p className="mt-3 text-sm text-parchment/80">{SITE.email}</p>
          <p className="mt-1 text-sm text-parchment/80">Serving Germany, Austria, Switzerland & Taiwan.</p>
        </div>
      </div>
      <div className="border-t border-parchment/10 py-4 text-center text-xs text-parchment/60">
        © {new Date().getFullYear()} {SITE.name}. {t("footer.rights")}
      </div>
    </footer>
  );
}