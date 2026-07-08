"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";

import { EASE, viewportOnce } from "@/components/cinematic/lib/motion";
import { testimonials } from "@/lib/content";

/**
 * EventBeds "Trusted by people" — a scattered pile of rotated review cards.
 * When the cursor enters the pile, every card straightens and the whole
 * pile spreads out into a tidy 3+2 grid; on leave it collapses back.
 */

type PileStyle = {
  /** Card surface + text colors */
  card: string;
  stars: string;
  quote: string;
  divider: string;
  name: string;
  role: string;
  /** Scatter transform (desktop) */
  rotate: number;
  x: string;
  y: string;
  z: number;
  /** Tidy grid target (rem offsets from center) when pile is hovered */
  gx: number;
  gy: number;
};

const PILE: PileStyle[] = [
  {
    // Obsidian — far left, like EventBeds' black card
    card: "bg-obsidian",
    stars: "fill-gold text-gold",
    quote: "text-cream",
    divider: "bg-white/15",
    name: "text-cream",
    role: "text-cream/50",
    rotate: -10,
    x: "-24rem",
    y: "3rem",
    z: 1,
    gx: -23.5,
    gy: -9.5,
  },
  {
    // Emerald — upper middle-left, like the purple card
    card: "bg-primary",
    stars: "fill-gold text-gold",
    quote: "text-white",
    divider: "bg-white/20",
    name: "text-white",
    role: "text-white/60",
    rotate: 7,
    x: "-9rem",
    y: "-2.5rem",
    z: 2,
    gx: 0,
    gy: -9.5,
  },
  {
    // White — lower middle, like the white card
    card: "bg-white shadow-card",
    stars: "fill-gold text-gold",
    quote: "text-ink",
    divider: "bg-hairline",
    name: "text-ink",
    role: "text-muted",
    rotate: -4,
    x: "-2rem",
    y: "5rem",
    z: 3,
    gx: 23.5,
    gy: -9.5,
  },
  {
    // Mint accent — front center-right, like the lime card
    card: "bg-mint",
    stars: "fill-primary text-primary",
    quote: "text-ink",
    divider: "bg-primary/15",
    name: "text-ink",
    role: "text-ink/55",
    rotate: 8,
    x: "9rem",
    y: "1rem",
    z: 4,
    gx: -11.75,
    gy: 9.5,
  },
  {
    // White — far right, tucked behind
    card: "bg-white shadow-card",
    stars: "fill-gold text-gold",
    quote: "text-ink",
    divider: "bg-hairline",
    name: "text-ink",
    role: "text-muted",
    rotate: 6,
    x: "23rem",
    y: "-3rem",
    z: 1,
    gx: 11.75,
    gy: 9.5,
  },
];

export function Testimonials() {
  const cards = testimonials.slice(0, PILE.length);
  const pileRef = React.useRef<HTMLDivElement>(null);
  const inView = useInView(pileRef, { once: true, amount: 0.35 });
  const [spread, setSpread] = React.useState(false);

  return (
    <section className="section-y overflow-hidden bg-canvas">
      {/* Centered editorial header — EventBeds style */}
      <div className="container-page text-center">
        <div className="inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
          <span className="h-2 w-2 rounded-full bg-gold" />
          <span className="text-gold">(10)</span>
          <span>Rating &amp; reviews</span>
        </div>
        <h2 className="mt-5 font-display text-[clamp(2.4rem,6vw,5rem)] font-extrabold leading-[1.0] tracking-[-0.03em] text-ink text-balance">
          Trusted by <span className="text-primary">people.</span>
        </h2>
      </div>

      {/* Desktop: scattered pile — spreads into a tidy 3+2 grid on hover */}
      <div
        ref={pileRef}
        onMouseEnter={() => setSpread(true)}
        onMouseLeave={() => setSpread(false)}
        className="relative mx-auto mt-20 hidden h-[660px] max-w-6xl lg:block"
      >
        {cards.map((t, i) => {
          const s = PILE[i];
          return (
            <motion.figure
              key={t.name}
              initial={false}
              animate={
                !inView
                  ? { opacity: 0, x: 0, y: 90, rotate: 0 }
                  : spread
                    ? {
                        opacity: 1,
                        x: `${s.gx}rem`,
                        y: `${s.gy}rem`,
                        rotate: 0,
                        transition: { duration: 0.55, ease: EASE, delay: i * 0.03 },
                      }
                    : {
                        opacity: 1,
                        x: s.x,
                        y: s.y,
                        rotate: s.rotate,
                        transition: { duration: 0.6, ease: EASE, delay: inView ? i * 0.03 : 0 },
                      }
              }
              style={{
                left: "calc(50% - 170px)",
                top: "calc(50% - 150px)",
                zIndex: s.z,
              }}
              className={`absolute w-[340px] cursor-default rounded-[28px] p-8 will-change-transform ${s.card}`}
            >
              <TestimonialInner t={t} s={s} />
            </motion.figure>
          );
        })}
      </div>

      {/* Mobile / tablet: stacked cards with slight alternating tilt */}
      <div className="container-page mt-14 flex flex-col items-center gap-5 lg:hidden">
        {cards.map((t, i) => {
          const s = PILE[i];
          return (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? -2 : 2 }}
              viewport={viewportOnce}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.06 }}
              className={`w-full max-w-[400px] rounded-[28px] p-7 ${s.card}`}
            >
              <TestimonialInner t={t} s={s} />
            </motion.figure>
          );
        })}
      </div>
    </section>
  );
}

function TestimonialInner({
  t,
  s,
}: {
  t: (typeof testimonials)[number];
  s: PileStyle;
}) {
  return (
    <>
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={`h-4 w-4 ${s.stars}`} />
        ))}
      </div>
      <blockquote
        className={`mt-5 font-display text-[16px] font-medium leading-[1.5] tracking-[-0.01em] ${s.quote}`}
      >
        &ldquo;{t.quote}&rdquo;
      </blockquote>
      <div className={`mt-6 h-px w-3/4 ${s.divider}`} />
      <figcaption className="pt-5">
        <div className={`text-sm font-bold ${s.name}`}>{t.name}</div>
        <div className={`mt-0.5 text-xs ${s.role}`}>{t.role}</div>
      </figcaption>
    </>
  );
}
