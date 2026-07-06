# TrusTax — CA & Compliance Marketing Website

A production-ready, minimal, premium marketing website for **TrusTax**, an Indian
Chartered Accountant (CA) & business-compliance services firm.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**,
shadcn-style UI primitives, **Framer Motion** and **lucide-react**. Fast,
accessible (WCAG AA), SEO-ready and deployable on Vercel out of the box.

---

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the dev server                 |
| `npm run build` | Production build                     |
| `npm run start` | Serve the production build           |
| `npm run lint`  | Run ESLint                           |

Requires **Node.js 18.17+**.

---

## Tech stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** with a full design-token config
- **shadcn/ui-style** components (Button, Card, Accordion, Sheet, Input, Textarea, Select, Label)
- **Framer Motion** for subtle, tasteful motion (respects `prefers-reduced-motion`)
- **lucide-react** icons, **next/font** (Google) fonts
- Built-in **Metadata API**, `sitemap.ts`, `robots.ts`, dynamic OG image, JSON-LD structured data

---

## Project structure

```
app/
  layout.tsx            # Root layout — fonts, metadata, Navbar/Footer, skip link
  page.tsx              # Home page (all sections)
  globals.css           # Design tokens + base styles
  icon.svg              # Favicon (auto-detected)
  opengraph-image.tsx   # Dynamic OG/Twitter card (no image assets needed)
  sitemap.ts            # /sitemap.xml
  robots.ts             # /robots.txt
  manifest.ts           # PWA web manifest
  not-found.tsx         # 404 page
  api/contact/route.ts  # Contact form endpoint (stub — wire to email/CRM)
  services/
    page.tsx            # Services overview grid
    [slug]/page.tsx     # Service detail template (one per service)
  about/page.tsx
  contact/page.tsx
  privacy | terms | refund /page.tsx   # Legal placeholders

components/
  ui/                   # Base primitives (button, card, accordion, sheet, input, …)
  layout/               # navbar, mobile-menu, footer
  sections/             # Home & shared page sections (hero, stats, faq, …)
  shared/               # Reusable pieces (logo, pill, section-heading, cards, forms, icon, …)

lib/
  services.ts           # ⭐ SINGLE SOURCE OF TRUTH for all 8 services
  site.ts               # Brand, contact details, navigation, socials
  content.ts            # Home content — trust badges, values, process, stats, testimonials, FAQs
  seo.ts                # Metadata helper
  utils.ts              # cn() class helper
```

---

## Design system

All tokens live in **`tailwind.config.ts`** and are mirrored as CSS variables in
**`app/globals.css`**. Change them in one place to re-theme the whole site.

### Colour palette — "Trust Emerald"

| Token            | Hex       | Usage                          |
| ---------------- | --------- | ------------------------------ |
| `canvas`         | `#FAFAF7` | Page background (off-white)    |
| `ink`            | `#0B0F0E` | Headings / near-black          |
| `body`           | `#5B6B66` | Body text (slate)              |
| `muted`          | `#8A968F` | Captions / muted text          |
| `primary`        | `#0E5C43` | Deep emerald (brand)           |
| `accent`         | `#10B981` | Bright emerald (highlights)    |
| `mint`           | `#E7F5EF` | Soft tint (badges / sections)  |
| `hairline`       | `#E7E5E0` | 1px borders                    |
| `gold`           | `#C6A15B` | Premium accent (use sparingly) |
| `success/warning/error` | `#10B981` / `#E0A100` / `#DC2626` | Status |

> **Swap to the "Navy + Gold" alternative:** edit the `primary`, `accent`,
> `canvas`, `ink`, `mint` and `hairline` values in `tailwind.config.ts` (and the
> matching `:root` variables in `globals.css`). No component changes needed.

### Typography

Loaded via `next/font/google` in `app/layout.tsx`:

- **Display / headings:** Inter Tight (`font-display`) — a drop-in fallback for
  Satoshi / General Sans (see below to swap).
- **Body:** Inter (`font-sans`).
- **Editorial accent:** Instrument Serif italic (`font-serif`) — used for one
  accent word in hero headlines.
- **Numbers / stats:** JetBrains Mono (`font-mono`).

**Type scale** (custom Tailwind sizes): `text-display`, `text-h1`, `text-h2`,
`text-h3`, `text-h4`, `text-body-lg`, `text-overline` — each with responsive
`-sm` variants where relevant.

> **To use Satoshi / General Sans:** download the font files (e.g. from
> Fontshare), place them in `app/fonts/`, load them with `next/font/local`, and
> point the `--font-inter-tight` variable at the local font in `app/layout.tsx`.

### Spacing, radius & shadows

- 4px base scale. Section padding: `py-section` (128px) / `py-section-sm` (72px).
- Container: `max-w-container` (1200px) with 24px gutters — use `<Container>`.
- Radius: `rounded-card` (20px), `rounded-button` / `rounded-input` (12px), `rounded-pill`.
- Shadows: `shadow-soft`, `shadow-card`, `shadow-lift` — layered and very soft.

### Motion

On-scroll reveals use the `<Reveal>` component (fade + 16px rise, staggered,
ease `[0.16,1,0.3,1]`). Cards lift on hover; buttons scale subtly. All motion is
disabled automatically when the user prefers reduced motion.

---

## Editing content

Everything is data-driven — no need to touch markup for copy changes.

### Services (add / edit / remove)

Edit **`lib/services.ts`**. Each service object drives the home grid, the
`/services` page, its `/services/[slug]` detail page, the contact-form dropdown
and the sitemap automatically.

```ts
{
  slug: "gst",
  name: "GST Services",
  tagline: "Registration & compliance",
  short: "One-line description used on cards…",
  promise: "Longer promise for the detail-page hero…",
  icon: "FileText",            // must exist in components/shared/icon.tsx
  priceFrom: "₹999",           // indicative price (placeholder)
  included: ["…"],             // "What's included" bullets
  whoFor: ["…"],               // "Who it's for" bullets
  process: [{ title, description }],  // 3 steps
  faqs: [{ question, answer }],       // 3–4 FAQs
}
```

To use a **new icon**, import it from `lucide-react` and add it to the map in
`components/shared/icon.tsx`.

### Brand, contact details & navigation

Edit **`lib/site.ts`** — business name, phone, WhatsApp, email, address, hours,
social links and nav/footer menus.

### Home page content

Edit **`lib/content.ts`** — trust badges, value props, process steps, stats,
testimonials and FAQs.

---

## Contact form

The form (`components/shared/contact-form.tsx`) posts to
**`app/api/contact/route.ts`**, which currently validates the payload and logs
it server-side. To make it live, integrate your provider in that route handler —
e.g. **Resend** or **Nodemailer** (email), **HubSpot / Zoho** (CRM), or a Google
Sheet. The integration point is marked with a `TODO` comment.

---

## ⚠️ Placeholders to replace before launch

Search the codebase for these:

- **Contact details** in `lib/site.ts` — phone (`+91 98765 43210`), WhatsApp
  digits, email (`hello@trustax.in`), address, `legalName`, and `url` (your
  production domain, used for canonical URLs, sitemap and OG tags).
- **Social links** in `lib/site.ts`.
- **Stats & testimonials** in `lib/content.ts` (marked `PLACEHOLDER`).
- **Pricing** (`priceFrom`) in `lib/services.ts`.
- **Legal pages** — `app/privacy`, `app/terms`, `app/refund` contain placeholder
  text; have them reviewed by a professional.

---

## SEO & accessibility

- Per-page metadata via the Metadata API + `lib/seo.ts` helper (canonical URLs,
  Open Graph, Twitter cards).
- `sitemap.xml`, `robots.txt`, PWA manifest and a dynamic OG image.
- JSON-LD structured data: `AccountingService`, `FAQPage`, and `Service`.
- Semantic HTML, skip-to-content link, keyboard-navigable menu & accordion,
  visible focus states, ARIA labels and AA-contrast colours.

---

## Deploy to Vercel

1. Push this repo to GitHub/GitLab.
2. Import it into [Vercel](https://vercel.com/new) — the defaults work as-is.
3. Set your production domain and update `site.url` in `lib/site.ts`.

Or from the CLI:

```bash
npm i -g vercel
vercel
```

---

Built for Indian businesses · GST · ITR · TDS · MSME · FSSAI
