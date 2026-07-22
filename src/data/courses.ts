import type { Locale } from "@/i18n";

export type Course = {
  slug: string;
  ageMin: number;
  ageMax: number;
  level: "Cabin Boy" | "First Mate" | "Captain";
  durationWeeks: number;
  priceEur: number;
  emoji: string;
  color: string;
  title: Record<Locale, string>;
  tagline: Record<Locale, string>;
  description: Record<Locale, string>;
  curriculum: Record<Locale, string[]>;
};

export const COURSES: Course[] = [
  {
    slug: "blockshore-basics",
    ageMin: 6,
    ageMax: 8,
    level: "Cabin Boy",
    durationWeeks: 8,
    priceEur: 249,
    emoji: "🏝️",
    color: "from-sky to-sea-light",
    title: {
      en: "Blockshore Basics",
      de: "Blockstrand-Grundlagen",
      zh: "方塊沙灘入門",
    },
    tagline: {
      en: "First landing: drag-and-drop blocks in Minecraft.",
      de: "Erste Landung: Blockprogrammierung in Minecraft.",
      zh: "第一次登陸：Minecraft 積木程式初體驗。",
    },
    description: {
      en: "Little pirates take their first steps into coding using MakeCode blocks inside Minecraft Education. They'll build treehouses, tame parrots and cast their first spells.",
      de: "Kleine Piraten machen erste Schritte im Programmieren mit MakeCode-Blöcken in Minecraft Education. Baumhäuser bauen, Papageien zähmen und erste Zaubersprüche wirken.",
      zh: "小小海盜使用 MakeCode 積木在 Minecraft 教育版中踏出程式第一步，蓋樹屋、馴服鸚鵡、施展第一個魔法。",
    },
    curriculum: {
      en: [
        "Move & build with block scripts",
        "Loops and repeats: the parrot dance",
        "If-this-then-that treasure sensors",
        "Mini project: your own island base",
      ],
      de: [
        "Bewegen & bauen mit Blockskripten",
        "Schleifen: der Papageientanz",
        "Wenn-dann-Schatzsensoren",
        "Mini-Projekt: deine eigene Inselbasis",
      ],
      zh: [
        "以積木指令移動與建造",
        "迴圈：鸚鵡之舞",
        "條件判斷寶藏感應器",
        "迷你專題：打造自己的島嶼基地",
      ],
    },
  },
  {
    slug: "compass-coders",
    ageMin: 9,
    ageMax: 11,
    level: "First Mate",
    durationWeeks: 10,
    priceEur: 329,
    emoji: "🧭",
    color: "from-sea to-sea-deep",
    title: {
      en: "Compass Coders",
      de: "Kompass-Coder",
      zh: "羅盤程式員",
    },
    tagline: {
      en: "Bridge blocks to JavaScript & Python.",
      de: "Von Blöcken zu JavaScript & Python.",
      zh: "從積木橋接到 JavaScript 與 Python。",
    },
    description: {
      en: "First Mates level up from blocks to text code. They'll script agents, chart automated mining routes, and build their first working treasure map.",
      de: "First Mates wechseln von Blöcken zu Text-Code. Sie skriptenAgenten, planen automatische Minenrouten und bauen ihre erste Schatzkarte.",
      zh: "First Mate 從積木邁向文字程式，寫代理程式、規劃自動化採礦路線，並打造第一張功能齊全的寶藏地圖。",
    },
    curriculum: {
      en: [
        "Variables, functions & the Minecraft Agent",
        "For & while loops: the digging fleet",
        "Coordinates & vectors on the high seas",
        "Project: build a working treasure map",
      ],
      de: [
        "Variablen, Funktionen & der Minecraft-Agent",
        "For- & While-Schleifen: die Grab-Flotte",
        "Koordinaten & Vektoren auf hoher See",
        "Projekt: funktionierende Schatzkarte",
      ],
      zh: [
        "變數、函式與 Minecraft 代理",
        "for / while 迴圈：挖礦艦隊",
        "座標與向量在大海中",
        "專題：實作可用的寶藏地圖",
      ],
    },
  },
  {
    slug: "captains-cove-python",
    ageMin: 12,
    ageMax: 14,
    level: "Captain",
    durationWeeks: 12,
    priceEur: 399,
    emoji: "🐍",
    color: "from-grass to-gold",
    title: {
      en: "Captain's Cove: Python",
      de: "Kapitäns-Bucht: Python",
      zh: "船長海灣：Python",
    },
    tagline: {
      en: "Real Python. Real mods. Real ports.",
      de: "Echtes Python. Echte Mods. Echte Häfen.",
      zh: "真正的 Python，真正的模組，真正的港口。",
    },
    description: {
      en: "Captains dive into Python fundamentals: OOP, files, and simple APIs — all applied to modding Minecraft, generating dungeons and writing their first pirate CLI game.",
      de: "Captains lernen Python-Grundlagen: OOP, Dateien und einfache APIs — angewandt auf Minecraft-Mods, Dungeon-Generatoren und ein eigenes Piraten-CLI-Spiel.",
      zh: "船長們深入 Python 基礎：物件導向、檔案處理與簡易 API，用來製作 Minecraft 模組、產生地牢，並打造第一款海盜文字冒險遊戲。",
    },
    curriculum: {
      en: [
        "Python syntax & data structures",
        "Object-oriented pirate crews",
        "Procedural dungeon generation",
        "Capstone: publish your own mini-mod",
      ],
      de: [
        "Python-Syntax & Datenstrukturen",
        "Objektorientierte Piraten-Crews",
        "Prozedurale Dungeon-Generierung",
        "Abschluss: eigenes Mini-Mod veröffentlichen",
      ],
      zh: [
        "Python 語法與資料結構",
        "物件導向的海盜船員",
        "程序化地牢生成",
        "結業專題：發布自己的迷你模組",
      ],
    },
  },
  {
    slug: "redstone-engineers",
    ageMin: 10,
    ageMax: 14,
    level: "First Mate",
    durationWeeks: 8,
    priceEur: 289,
    emoji: "⚡",
    color: "from-coral to-gold",
    title: {
      en: "Redstone Engineers",
      de: "Redstone-Ingenieure",
      zh: "紅石工程師",
    },
    tagline: {
      en: "Logic gates, circuits and automation.",
      de: "Logikgatter, Schaltungen und Automatisierung.",
      zh: "邏輯閘、電路與自動化。",
    },
    description: {
      en: "Learn digital logic the fun way: AND / OR / NOT gates built in redstone, then translated into real code. Perfect prep for computer science.",
      de: "Lernt digitale Logik spielerisch: AND-/OR-/NOT-Gatter mit Redstone, dann in echten Code übersetzt.",
      zh: "以有趣的方式學習數位邏輯：用紅石搭建 AND / OR / NOT 邏輯閘，再轉換成真正的程式碼。",
    },
    curriculum: {
      en: [
        "Redstone signals & basic gates",
        "Building an 8-bit ship counter",
        "Automation with observers & pistons",
        "Project: a self-defending pirate cove",
      ],
      de: [
        "Redstone-Signale & Grundgatter",
        "Bau eines 8-Bit-Schiffszählers",
        "Automatisierung mit Beobachtern & Kolben",
        "Projekt: sich selbst verteidigende Bucht",
      ],
      zh: [
        "紅石訊號與基本邏輯閘",
        "打造 8 位元船隻計數器",
        "以觀察者與活塞自動化",
        "專題：會自我防禦的海盜港灣",
      ],
    },
  },
];

export const findCourse = (slug: string) => COURSES.find((c) => c.slug === slug);
