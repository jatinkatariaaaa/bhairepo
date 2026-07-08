"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

import { Marquee } from "@/components/cinematic/marquee";
import { EASE, viewportOnce } from "@/components/cinematic/lib/motion";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  // Duplicate for seamless marquee
  const row = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="section-y overflow-hidden bg-canvas">
      <div className="container-page">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
            <span className="h-2 w-2 rounded-full bg-gold" />
            <span className="text-gold">(10)</span>
            <span>Client stories</span>
          </div>
          <h2 className="mt-5 font-display text-[clamp(2.2rem,5.5vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-ink">
            Trusted by{" "}
            <span className="font-display font-extrabold text-primary">founders</span>{" "}
            across India.
          </h2>
        </div>
      </div>

      {/* Full-width marquee */}
      <div className="mask-fade-x mt-14">
        <Marquee pauseOnHover>
          {row.map((t, i) => (
            <TestimonialCard key={`${t.name}-${i}`} t={t} dark={i % 4 === 2} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}

function TestimonialCard({
  t,
  dark: _dark,
}: {
  t: typeof testimonials[number];
  dark?: boolean;
}) {
  return (
    <figure className="relative mx-2.5 flex min-h-[280px] w-[300px] shrink-0 flex-col rounded-[24px] bg-white p-8 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift md:w-[420px]">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-gold text-gold" />
        ))}
      </div>

      <blockquote className="mt-6 font-display text-[17px] font-medium leading-[1.5] tracking-[-0.01em] text-ink md:text-lg">
        &ldquo;{t.quote}&rdquo;
      </blockquote>

      {/* Hairline that fades — EventBeds divider language */}
      <div className="mt-auto h-px w-full bg-gradient-to-r from-hairline to-transparent" />

      <figcaption className="flex items-center gap-3.5 pt-6">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-primary text-xs font-bold text-white">
          {t.initials}
        </span>
        <div>
          <div className="text-sm font-bold text-ink">{t.name}</div>
          <div className="mt-0.5 text-xs text-muted">{t.role}</div>
        </div>
      </figcaption>
    </figure>
  );
}
