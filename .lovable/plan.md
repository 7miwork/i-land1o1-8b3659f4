
# I-Land Coding Academy — Build Plan

A pirate-island, Minecraft-inspired multilingual site for kids 6–14, built on the current TanStack Start + Tailwind v4 stack (note: you asked for Next.js, but this Lovable project is TanStack Start — same React/Tailwind capabilities, file-based routing. I'll proceed on TanStack unless you'd rather I don't).

## Scope

### Pages (routes)
- `/` Home — animated ocean hero, treasure-map nav, value props, featured courses, testimonials teaser, CTA
- `/courses` Course catalog — cards per course (age band, level, price, "Book" + "Enroll")
- `/courses/$slug` Course detail — description, curriculum, Stripe checkout button, Calendly embed
- `/book` Calendly booking (trial lesson)
- `/testimonials` Parent testimonials
- `/faq` FAQ (accordion)
- `/contact` Contact form (validated, sends via server function)
- `/success` + `/cancel` Stripe return pages

### Multilingual (EN / DE / zh-TW)
- Locale via URL prefix: `/en`, `/de`, `/zh` (default redirect `/` → `/en`)
- Lightweight in-repo i18n: JSON dictionaries in `src/i18n/{en,de,zh}.ts` + `useT()` hook reading route param
- Language switcher in the top nav (compass rose)
- Per-locale `head()` metadata (title/description/og) + `hreflang` alternates

### Design system
- Tailwind v4 tokens in `src/styles.css`: sea/sand/wood/gold palette in oklch, pixel/blocky accent font (Press Start 2P or VT323 for headings, Inter for body — loaded via `<link>` in `__root.tsx`)
- Custom utilities: `.ocean-bg` (animated CSS gradient + SVG waves), `.treasure-card`, pixel border variant on Button
- Motion: CSS keyframe waves, floating islands, hover-lift on cards; respects `prefers-reduced-motion`
- Fully responsive (mobile-first, tested at 390px and desktop)

### Treasure map navigation
- Home features an SVG treasure map with clickable islands = sections (Courses, Book, Testimonials, FAQ, Contact). Falls back to a normal top nav on small screens and always available in the header.

### Features
- **Course catalog**: static data in `src/data/courses.ts` (title, slug, age, price cents, blurb, curriculum). Easy to extend later to Lovable Cloud.
- **Stripe payments**: Lovable built-in Stripe Payments (seamless, no keys). Server function creates Checkout Session per course; success/cancel routes. Requires enabling — I'll run `recommend_payment_provider` first, then enable and create products.
- **Calendly**: embedded via `<InlineWidget url=...>` (react-calendly). You'll paste your Calendly event URL into `src/config/site.ts` (or I'll prompt for it).
- **Testimonials**: static list with photo/name/quote in `src/data/testimonials.ts`.
- **FAQ**: accordion, localized Q&A.
- **Contact form**: zod-validated, submits to a TanStack server function. Without an email provider I'll log + return success; if you want real email delivery, we add Resend (needs API key).

### SEO
- Unique per-route `head()` targeting: "Minecraft Coding for Kids", "Coding Classes Germany", "Online Programming School" (mapped to Home / DE locale / Courses)
- `sitemap.xml` route enumerating all locale+page combos
- `public/robots.txt`
- JSON-LD: Organization on root, Course schema on course detail, FAQPage on FAQ
- `hreflang` alternates between EN/DE/zh-TW

## Technical notes
- Stack: TanStack Start (not Next.js) — please confirm this is OK.
- Images: hero + island illustrations generated via imagegen (pirate/Minecraft blocky style), saved under `src/assets/`.
- Payments enable step is interactive (you'll fill a form). I'll pause there.
- Calendly URL and any real testimonial photos/quotes needed from you — I'll use plausible placeholders otherwise.

## Open questions (I'll assume defaults if you don't answer)
1. **Framework**: OK to build on TanStack Start (current project) instead of Next.js? *(default: yes)*
2. **Calendly URL**: what's your Calendly event link? *(default: placeholder `https://calendly.com/your-org/trial-lesson`)*
3. **Course list**: give me 3–6 real courses (name, age, price EUR), or I'll invent pirate-themed ones (e.g. "Redstone Cove", "Command Block Cavern"). *(default: invent)*
4. **Contact form delivery**: log-only for now, or wire up Resend email? *(default: log-only)*

## Build order
1. Design tokens, fonts, ocean background, treasure-map SVG
2. i18n scaffolding + locale routes + language switcher
3. Home, Courses, Course detail, Book, Testimonials, FAQ, Contact
4. Enable Stripe Payments + create products + checkout server fn + success/cancel
5. SEO: per-route heads, sitemap.xml, robots.txt, JSON-LD
6. Generated pirate/Minecraft imagery, polish, responsive pass
