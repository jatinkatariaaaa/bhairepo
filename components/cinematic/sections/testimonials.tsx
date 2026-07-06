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
            <TestimonialCard key={`${t.name}-${i}`} t={t} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}

function TestimonialCard({ t }: { t: typeof testimonials[number] }) {
  return (
    <figure className="mx-3 w-[290px] shrink-0 rounded-card border border-hairline bg-white p-7 shadow-card transition-transform duration-500 hover:-translate-y-1 hover:shadow-lift md:w-[400px]">
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
        ))}
      </div>
      <blockquote className="mt-5 text-[15px] leading-relaxed text-ink">
        &ldquo;{t.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-hairline pt-5">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-primary text-xs font-bold text-white">
          {t.initials}
        </span>
        <div>
          <div className="text-sm font-semibold text-ink">{t.name}</div>
          <div className="text-xs text-muted">{t.role}</div>
        </div>
      </figcaption>
    </figure>
  );
}
