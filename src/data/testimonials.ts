import type { Locale } from "@/i18n";

export type Testimonial = {
  name: string;
  city: string;
  child: string;
  rating: number;
  emoji: string;
  quote: Record<Locale, string>;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sabine K.",
    city: "München, DE",
    child: "Leo, 9",
    rating: 5,
    emoji: "🦜",
    quote: {
      en: "Leo used to hate homework. Now he begs me to log in early so he can 'debug his island'. The captains are patient and warm — worth every euro.",
      de: "Leo hasste Hausaufgaben. Jetzt bettelt er, sich früher einloggen zu dürfen, um seine Insel zu debuggen. Die Kapitäne sind geduldig — jeden Euro wert.",
      zh: "Leo 以前討厭寫作業，現在拜託我讓他提早登入去『修 bug』。船長們既有耐心又親切，非常值得。",
    },
  },
  {
    name: "Wei-Lin C.",
    city: "台北, TW",
    child: "Emma, 11",
    rating: 5,
    emoji: "🗺️",
    quote: {
      en: "Emma jumped from block coding to real Python in one term. The pirate story keeps her engaged when other classes would lose her.",
      de: "Emma wechselte in einem Trimester von Blöcken zu echtem Python. Die Piratengeschichte hält sie bei der Stange.",
      zh: "Emma 一個學期就從積木程式跳到真正的 Python。海盜故事讓她比其他課更投入。",
    },
  },
  {
    name: "Julian R.",
    city: "Berlin, DE",
    child: "Milan, 7",
    rating: 5,
    emoji: "⚓",
    quote: {
      en: "Small class sizes make a huge difference. Milan is the quiet type, and Captain Nora still gets him to present his island every week.",
      de: "Die kleinen Klassen machen den Unterschied. Milan ist eher schüchtern und Captain Nora bringt ihn dennoch dazu, wöchentlich seine Insel zu präsentieren.",
      zh: "小班制真的差很多。Milan 個性安靜，Nora 船長還是能讓他每週都展示自己的島嶼。",
    },
  },
  {
    name: "Marta S.",
    city: "Hamburg, DE",
    child: "Anna, 13",
    rating: 5,
    emoji: "🐙",
    quote: {
      en: "The Redstone course finally clicked what her school couldn't: what a logic gate actually is. She built an automatic drawbridge for our home 'server'.",
      de: "Der Redstone-Kurs hat endlich verständlich gemacht, was ein Logikgatter ist. Sie baute eine automatische Zugbrücke für unseren Heim-Server.",
      zh: "紅石課終於讓她理解學校講不清楚的邏輯閘概念，她還替家裡的伺服器蓋了一座自動吊橋。",
    },
  },
  {
    name: "Yi-Ting L.",
    city: "高雄, TW",
    child: "Kai, 10",
    rating: 5,
    emoji: "💎",
    quote: {
      en: "Kai's English improved as a bonus. Live classes with kids across Europe felt scary at first — now it's his highlight.",
      de: "Kais Englisch hat sich als Bonus verbessert. Live-Kurse mit Kindern aus Europa waren anfangs beängstigend — jetzt sein Highlight.",
      zh: "Kai 的英文順便進步了。一開始怕跟歐洲小朋友一起上課，現在反而是他一週的亮點。",
    },
  },
  {
    name: "Alex M.",
    city: "Wien, AT",
    child: "Tobi, 8",
    rating: 5,
    emoji: "🏴‍☠️",
    quote: {
      en: "Great parent dashboard: I can see what Tobi built and what he actually learned each week without hovering.",
      de: "Tolles Eltern-Dashboard: Ich sehe wöchentlich, was Tobi gebaut und gelernt hat, ohne ihm über die Schulter zu schauen.",
      zh: "家長儀表板超好用，每週都能看到 Tobi 蓋了什麼、學了什麼，不用一直盯著。",
    },
  },
];
