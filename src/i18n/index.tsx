import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Locale = "en" | "de" | "zh";

export const LOCALES: { code: Locale; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "zh", label: "繁體中文", flag: "🇹🇼" },
];

type Dict = Record<string, string>;

const en: Dict = {
  "nav.home": "Home",
  "nav.courses": "Courses",
  "nav.book": "Book a Trial",
  "nav.testimonials": "Testimonials",
  "nav.faq": "FAQ",
  "nav.contact": "Contact",
  "nav.brand": "I-Land Coding Academy",
  "cta.start": "Set Sail",
  "cta.book": "Book a Free Trial",
  "cta.enroll": "Enroll Now",
  "cta.explore": "Explore Courses",

  "hero.eyebrow": "Ahoy, young coder!",
  "hero.title": "Minecraft Coding Adventures for Kids Ages 6–14",
  "hero.subtitle":
    "Sail the pirate islands of I-Land and learn real programming inside Minecraft Education. Live online classes taught by friendly captains — in English, Deutsch and 繁體中文.",
  "hero.badge1": "Minecraft Education",
  "hero.badge2": "Live Online",
  "hero.badge3": "Small Crews",

  "features.title": "Why parents choose I-Land",
  "features.f1.t": "Learn by building",
  "features.f1.d": "Kids code real Python & block scripts inside Minecraft worlds they love.",
  "features.f2.t": "Certified captains",
  "features.f2.d": "Trained instructors run small crews of 4–6 for maximum attention.",
  "features.f3.t": "Global crew",
  "features.f3.d": "Live classes in EN / DE / 繁體中文 across Europe and Asia.",
  "features.f4.t": "Safe harbor",
  "features.f4.d": "Private Minecraft server, moderated chat, parent dashboard.",

  "map.title": "Chart your course",
  "map.subtitle": "Every island is a new coding adventure. Pick where to dock next.",

  "courses.title": "The Course Catalog",
  "courses.subtitle": "Age-based islands, from first block to command-line captain.",
  "courses.age": "Ages",
  "courses.level": "Level",
  "courses.duration": "Duration",
  "courses.perTerm": "per term",
  "courses.view": "View course",

  "testimonials.title": "What parents say",
  "testimonials.subtitle": "Real reviews from crews in Germany, Taiwan and beyond.",

  "faq.title": "Frequently Asked Questions",
  "faq.subtitle": "Everything you need before your child sets sail.",

  "contact.title": "Send us a message in a bottle",
  "contact.subtitle": "We answer within one school day.",
  "contact.name": "Parent name",
  "contact.email": "Email",
  "contact.child": "Child’s age",
  "contact.message": "Message",
  "contact.send": "Send message",
  "contact.sent": "Message sent! Our crew will be in touch soon.",
  "contact.error": "Something went wrong. Please try again.",

  "book.title": "Book a free trial lesson",
  "book.subtitle": "Pick a time that suits your crew. First lesson is on us.",

  "footer.tagline": "Where kids code the seven seas.",
  "footer.rights": "All rights reserved.",
};

const de: Dict = {
  "nav.home": "Start",
  "nav.courses": "Kurse",
  "nav.book": "Probestunde",
  "nav.testimonials": "Stimmen",
  "nav.faq": "FAQ",
  "nav.contact": "Kontakt",
  "nav.brand": "I-Land Coding Academy",
  "cta.start": "Leinen los",
  "cta.book": "Kostenlose Probestunde",
  "cta.enroll": "Jetzt anmelden",
  "cta.explore": "Kurse entdecken",

  "hero.eyebrow": "Ahoi, kleiner Coder!",
  "hero.title": "Minecraft-Programmierkurse für Kinder von 6 bis 14",
  "hero.subtitle":
    "Segle durch die Pirateninseln von I-Land und lerne echtes Programmieren in Minecraft Education. Live-Online-Unterricht auf Deutsch, English und 繁體中文.",
  "hero.badge1": "Minecraft Education",
  "hero.badge2": "Live Online",
  "hero.badge3": "Kleine Crews",

  "features.title": "Warum Eltern uns wählen",
  "features.f1.t": "Bauen statt büffeln",
  "features.f1.d": "Kinder programmieren echtes Python & Blockcode in Minecraft-Welten.",
  "features.f2.t": "Zertifizierte Kapitäne",
  "features.f2.d": "Ausgebildete Lehrkräfte betreuen kleine Crews von 4–6 Kindern.",
  "features.f3.t": "Weltweite Crew",
  "features.f3.d": "Live-Kurse auf DE / EN / 繁體中文 in Europa und Asien.",
  "features.f4.t": "Sicherer Hafen",
  "features.f4.d": "Privater Minecraft-Server, moderierter Chat, Eltern-Dashboard.",

  "map.title": "Plane deine Route",
  "map.subtitle": "Jede Insel ist ein neues Coding-Abenteuer.",

  "courses.title": "Der Kurs-Kompass",
  "courses.subtitle": "Kurse nach Alter — vom ersten Block bis zum Kommandozeilen-Kapitän.",
  "courses.age": "Alter",
  "courses.level": "Level",
  "courses.duration": "Dauer",
  "courses.perTerm": "pro Trimester",
  "courses.view": "Kurs ansehen",

  "testimonials.title": "Was Eltern sagen",
  "testimonials.subtitle": "Echte Bewertungen aus Deutschland, Taiwan und mehr.",

  "faq.title": "Häufige Fragen",
  "faq.subtitle": "Alles, was ihr wissen müsst.",

  "contact.title": "Flaschenpost senden",
  "contact.subtitle": "Wir antworten innerhalb eines Schultages.",
  "contact.name": "Name des Elternteils",
  "contact.email": "E-Mail",
  "contact.child": "Alter des Kindes",
  "contact.message": "Nachricht",
  "contact.send": "Nachricht senden",
  "contact.sent": "Nachricht gesendet! Unsere Crew meldet sich bald.",
  "contact.error": "Etwas ist schiefgelaufen. Bitte erneut versuchen.",

  "book.title": "Kostenlose Probestunde buchen",
  "book.subtitle": "Wähle einen Termin. Die erste Stunde geht auf uns.",

  "footer.tagline": "Wo Kinder die sieben Meere programmieren.",
  "footer.rights": "Alle Rechte vorbehalten.",
};

const zh: Dict = {
  "nav.home": "首頁",
  "nav.courses": "課程",
  "nav.book": "預約試聽",
  "nav.testimonials": "家長評價",
  "nav.faq": "常見問題",
  "nav.contact": "聯絡我們",
  "nav.brand": "I-Land 程式學院",
  "cta.start": "揚帆啟航",
  "cta.book": "預約免費試聽",
  "cta.enroll": "立即報名",
  "cta.explore": "探索課程",

  "hero.eyebrow": "小小海盜，你好！",
  "hero.title": "6 至 14 歲兒童的 Minecraft 程式島冒險",
  "hero.subtitle":
    "在 I-Land 的海盜群島中，一邊玩 Minecraft Education，一邊學會真正的程式設計。線上直播小班制，提供中英德三語教學。",
  "hero.badge1": "Minecraft 教育版",
  "hero.badge2": "線上直播",
  "hero.badge3": "小班教學",

  "features.title": "家長選擇 I-Land 的理由",
  "features.f1.t": "邊玩邊學",
  "features.f1.d": "孩子在最愛的 Minecraft 世界裡寫 Python 與積木程式。",
  "features.f2.t": "認證船長",
  "features.f2.d": "受過訓練的老師帶領 4–6 人小組，關注每位學員。",
  "features.f3.t": "全球船員",
  "features.f3.d": "中／英／德三語直播，橫跨歐洲與亞洲。",
  "features.f4.t": "安全港灣",
  "features.f4.d": "私人 Minecraft 伺服器、聊天監管、家長儀表板。",

  "map.title": "規劃你的航線",
  "map.subtitle": "每一座島嶼都是全新的程式冒險。",

  "courses.title": "課程羅盤",
  "courses.subtitle": "依年齡分島，從第一塊方塊到指令列船長。",
  "courses.age": "年齡",
  "courses.level": "程度",
  "courses.duration": "時長",
  "courses.perTerm": "每學期",
  "courses.view": "查看課程",

  "testimonials.title": "家長怎麼說",
  "testimonials.subtitle": "來自德國、台灣等地家長的真實回饋。",

  "faq.title": "常見問題",
  "faq.subtitle": "啟航前想知道的一切。",

  "contact.title": "寄一封漂流瓶給我們",
  "contact.subtitle": "我們會在一個上課日內回覆。",
  "contact.name": "家長姓名",
  "contact.email": "電子郵件",
  "contact.child": "孩子年齡",
  "contact.message": "訊息內容",
  "contact.send": "送出訊息",
  "contact.sent": "已送出！我們會盡快聯絡您。",
  "contact.error": "發生錯誤，請再試一次。",

  "book.title": "預約免費試聽課",
  "book.subtitle": "挑選適合你們的時間，第一堂課我們請客。",

  "footer.tagline": "讓孩子在七大洋寫程式。",
  "footer.rights": "版權所有。",
};

const dicts: Record<Locale, Dict> = { en, de, zh };

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem("iland.locale") as Locale | null;
      if (stored && dicts[stored]) {
        setLocaleState(stored);
        return;
      }
      const nav = window.navigator.language.toLowerCase();
      if (nav.startsWith("de")) setLocaleState("de");
      else if (nav.startsWith("zh")) setLocaleState("zh");
    } catch {}
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    try { window.localStorage.setItem("iland.locale", l); } catch {}
  };

  const t = (key: string) => dicts[locale][key] ?? dicts.en[key] ?? key;

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useT() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useT must be used inside LanguageProvider");
  return ctx;
}
