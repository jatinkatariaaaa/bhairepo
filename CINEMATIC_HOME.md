# TrustTax — "Fiscal Cinema" home

A premium, cinematic, scroll-driven home experience (EventBeds-grade polish, adapted
for an Indian CA / compliance brand). Built on top of the existing TrustTax site — the
rest of the site (services, about, contact, legal) is untouched.

## Stack added on top of the base app
- **Lenis** — buttery smooth scroll (site-wide), wired into…
- **GSAP + ScrollTrigger** — the horizontal-pinned *Workflow* section.
- **Framer Motion** — all scroll-linked & enter animations (one `useScroll` clock per section).
- **TailwindCSS** — design tokens (extended in `tailwind.config.ts`) + utilities (`app/globals.css`).

No external images: every device, screen and tag is pure CSS/SVG → zero image requests,
no layout shift, crisp at any DPI.

## Run it
```bash
npm install      # gsap + lenis are already in package.json
npm run dev      # http://localhost:3000
npm run build && npm run start   # production
```

## Where things live
```
components/providers/smooth-scroll.tsx   Lenis ⇄ GSAP ticker/ScrollTrigger bridge
lib/gsap.ts                              single ScrollTrigger registration
components/cinematic/
  lib/motion.ts        shared easing + variants
  reveal-text.tsx      word-by-word mask reveal (Instrument-Serif accent aware)
  phone.tsx            pure-CSS device shell
  app-screens.tsx      Dashboard / GST / ITR mini app UIs
  magnetic.tsx         cursor-magnetic CTA
  marquee.tsx          seamless infinite marquee
  proof-tag.tsx        glass compliance "proof" chips
  section-label.tsx    mono overline
  sections/            preloader + the 12 home sections (each a unique animation)
app/page.tsx           composes the experience
```

## The 12 sections & their signature motion
1. **Preloader** — mono counter + cycling service words → clip-path curtain wipe.
2. **Hero** — one scroll clock drives 3 depth-layered phones (A slow / B rotates / C scales), parallax proof-tags, orb + headline mask.
3. **Features** — clip-path wipe-in cards + cursor-following emerald spotlight.
4. **Why TrustTax** *(dark)* — scroll-scrubbed word-by-word illumination.
5. **Workflow** — GSAP ScrollTrigger horizontal pin with a scrubbed progress rail.
6. **Dashboard Preview** *(dark)* — sticky device 3D-tilts while its screen cross-fades Dashboard→GST→ITR; stat cards parallax from the edges.
7. **Tax Filing** — sticky-left column / scroll-right stack + count-up figure.
8. **GST** — term marquee + rail-draw checklist beside a floating device.
9. **ITR** — an acknowledgement that assembles row-by-row, then an e-Verified seal stamps on.
10. **Business Registration** — expanding accordion gallery (mobile → card grid).
11. **Testimonials** — two counter-drifting marquee rows with depth.
12. **FAQ** — indexed accordion with a shared-layout moving indicator.
13. **CTA** *(dark finale)* — mega mask headline, magnetic button, orbiting rings, service marquee.

## Accessibility / performance
- Every animation is **transform/opacity only** (GPU compositor) with `will-change` on moving layers.
- `prefers-reduced-motion`: Lenis is skipped, GSAP pin/parallax collapse to `0`, the preloader is bypassed, `RevealText` renders static text, and the *Workflow* section degrades to a vertical card grid.
- Fixed aspect-ratios on all devices → no CLS.

## Editing content
All copy/numbers come from the existing single sources of truth — edit those, not the components:
`lib/content.ts` (values, process, stats, testimonials, FAQs) and `lib/services.ts` (services).
