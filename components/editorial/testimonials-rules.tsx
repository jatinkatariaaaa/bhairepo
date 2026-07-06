"use client";

import { motion } from "framer-motion";

import { testimonials } from "@/lib/content";

const EASE = [0.16, 1, 0.3, 1] as const;

/** Testimonials — three rule-divided editorial quotes, no cards, no avatars. */
export function TestimonialsRules() {
  return (
    <section className="border-b border-hairline bg-canvas">
      <div className="container-wide py-16 md:py-24">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-[clamp(2rem,5.5vw,4.25rem)] font-bold uppercase leading-none tracking-[-0.02em] text-ink">
            On the record
          </h2>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-muted sm:inline">
            Client statements
          </span>
        </div>

        <div className="mt-10 grid border-t border-ink/80 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
              className="flex flex-col justify-between border-b border-hairline py-8 pr-8 md:border-b-0 md:border-r md:last:border-r-0"
            >
              <blockquote className="text-pretty font-display text-lg font-medium leading-[1.4] tracking-tight text-ink">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8">
                <span className="block font-display text-sm font-bold uppercase tracking-[0.04em] text-ink">
                  {t.name}
                </span>
                <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  {t.role}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
