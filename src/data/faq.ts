import type { Locale } from "@/i18n";

export type FaqItem = {
  q: Record<Locale, string>;
  a: Record<Locale, string>;
};

export const FAQS: FaqItem[] = [
  {
    q: {
      en: "Do we need to buy Minecraft?",
      de: "Müssen wir Minecraft kaufen?",
      zh: "我們需要另外購買 Minecraft 嗎？",
    },
    a: {
      en: "We provide a Minecraft Education licence for the duration of the course — nothing extra to buy.",
      de: "Wir stellen für die Kursdauer eine Minecraft-Education-Lizenz — kein zusätzlicher Kauf nötig.",
      zh: "課程期間我們會提供 Minecraft Education 版授權，無需另外購買。",
    },
  },
  {
    q: {
      en: "What computer do we need?",
      de: "Welchen Computer brauchen wir?",
      zh: "需要什麼樣的電腦？",
    },
    a: {
      en: "Any Windows, macOS or iPad from the last 5 years, plus a headset with microphone. A Chromebook works for beginner classes.",
      de: "Ein Windows, macOS oder iPad aus den letzten 5 Jahren plus Headset mit Mikrofon. Für Anfängerkurse reicht ein Chromebook.",
      zh: "近五年內的 Windows、macOS 或 iPad 皆可，並需備有麥克風耳機。初階課程 Chromebook 也可以。",
    },
  },
  {
    q: {
      en: "What size are the classes?",
      de: "Wie groß sind die Klassen?",
      zh: "班級人數多少？",
    },
    a: {
      en: "4 to 6 kids per crew so every young pirate gets airtime and help.",
      de: "4 bis 6 Kinder pro Crew, damit jeder Zeit und Hilfe bekommt.",
      zh: "每個小組 4 到 6 位孩子，確保每位小海盜都能發言與獲得協助。",
    },
  },
  {
    q: {
      en: "When are the classes?",
      de: "Wann finden die Kurse statt?",
      zh: "上課時間如何安排？",
    },
    a: {
      en: "Weekday afternoons (CET) and Saturday mornings for our Asian crews. Full timetable shown during booking.",
      de: "Werktags nachmittags (MEZ) und Samstagvormittag für unsere asiatischen Crews. Zeitplan bei der Buchung.",
      zh: "平日下午（歐洲時間）與週六上午（亞洲時間）皆有場次，預約時可看完整時段。",
    },
  },
  {
    q: {
      en: "Can I pay in installments?",
      de: "Kann ich in Raten zahlen?",
      zh: "可以分期付款嗎？",
    },
    a: {
      en: "Yes — 3-month split at checkout, no extra fees. Powered by Stripe.",
      de: "Ja — 3-Monats-Ratenzahlung an der Kasse, ohne Zusatzkosten. Über Stripe.",
      zh: "可以，結帳時可選擇 3 個月分期，免手續費，由 Stripe 提供。",
    },
  },
  {
    q: {
      en: "Is the trial lesson really free?",
      de: "Ist die Probestunde wirklich kostenlos?",
      zh: "試聽課真的免費嗎？",
    },
    a: {
      en: "100% free, no card needed. Book any time via our calendar.",
      de: "100% kostenlos, ohne Kreditkarte. Jederzeit über den Kalender buchbar.",
      zh: "完全免費，不需要信用卡。隨時可透過行事曆預約。",
    },
  },
];
