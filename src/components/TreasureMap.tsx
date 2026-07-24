import { Link } from "@tanstack/react-router";
import { useT } from "@/i18n";
import mapImg from "@/assets/treasure-map.jpg";

type Island = {
  to: "/courses" | "/book" | "/testimonials" | "/faq" | "/contact";
  labelKey: string;
  emoji: string;
  x: number; // %
  y: number; // %
};

const ISLANDS: Island[] = [
  { to: "/courses", labelKey: "nav.courses", emoji: "🏝️", x: 22, y: 40 },
  { to: "/book", labelKey: "nav.book", emoji: "⛵", x: 45, y: 60 },
  { to: "/testimonials", labelKey: "nav.testimonials", emoji: "💬", x: 68, y: 34 },
  { to: "/faq", labelKey: "nav.faq", emoji: "❓", x: 78, y: 62 },
  { to: "/contact", labelKey: "nav.contact", emoji: "📜", x: 30, y: 72 },
];

export function TreasureMap() {
  const { t } = useT();
  return (
    <div className="relative mx-auto aspect-[7/5] w-full max-w-5xl overflow-hidden rounded-3xl shadow-2xl ring-4 ring-wood-dark/60">
      <img
        src={mapImg}
        alt="Treasure map of I-Land Coding Academy sections"
        className="absolute inset-0 h-full w-full object-cover"
        width={1400}
        height={1000}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-parchment/10" aria-hidden />
      {ISLANDS.map((i) => (
        <Link
          key={i.to}
          to={i.to}
          className="group absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${i.x}%`, top: `${i.y}%` }}
        >
          <div className="flex flex-col items-center gap-1">
            <div className="grid h-14 w-14 place-items-center rounded-full bg-wood text-2xl shadow-lg ring-4 ring-gold/80 transition-transform group-hover:scale-110 md:h-16 md:w-16 md:text-3xl bob-slow">
              <span>{i.emoji}</span>
            </div>
            <div className="rounded-full bg-wood-dark px-3 py-1 text-xs font-semibold tracking-wide text-parchment shadow-md md:text-sm">
              {t(i.labelKey)}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
