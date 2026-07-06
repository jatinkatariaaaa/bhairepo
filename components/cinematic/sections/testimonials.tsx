"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

import { Marquee } from "@/components/cinematic/marquee";
import { SectionLabel } from "@/components/cinematic/section-label";
import { RevealText } from "@/components/cinematic/reveal-text";
import { viewportOnce } from "@/components/cinematic/lib/motion";
import { testimonials, type Testimonial } from "@/lib/content";

/**
 * TESTIMONIALS — two counter-drifting marquee rows of quote cards with depth.
 * Signature motion: opposing infinite drift + hover lift. Pauses on hover.
 */
export function Testimonials() {
  // enough cards for a seamless loop on wide screens
  const row = [...testimonials, ...testimonials];

  return (
    <section className="section-y overflow-hidden bg-canvas">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <SectionLabel index="10">Client stories</SectionLabel>
            <h2 className="mt-5 font-display text-display-lg font-semibold tracking-tight text-ink">
              <RevealText
                segments={[
                  { text: "Trusted by founders who'd rather" },
                  {
                    text: " build.",
                    className: "font-serif italic font-normal text-primary",
                  },
                ]}
              />
            </h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            className="flex items-center gap-3 rounded-pill border border-hairline bg-white px-5 py-3 shadow-card"
          >
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold text-gold" />
              ))}
            </div>
            <span className="font-mono text-sm font-semibold text-ink">4.9/5</span>
            <span className="text-sm text-muted">· 500+ clients</span>
          </motion.div>
        </div>
      </div>

      <div className="mt-14 space-y-5">
        <Marquee>
          {row.map((t, i) => (
            <TestimonialCard key={`a-${i}`} t={t} />
          ))}
        </Marquee>
        <Marquee reverse>
          {row.map((t, i) => (
            <TestimonialCard key={`b-${i}`} t={t} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="mx-3 w-[290px] shrink-0 rounded-card border border-hairline bg-white p-7 shadow-card transition-transform duration-500 hover:-translate-y-1 hover:shadow-lift md:w-[400px]">
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
        ))}
      </div>
      <blockquote className="mt-5 text-[15px] leading-relaxed text-ink">
        “{t.quote}”
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
