"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { services } from "@/lib/services";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Services index — a rule-divided table of contents, like the index page of
 * an annual report. Number, name, one-liner, price, arrow.
 */
export function ServicesIndex() {
  return (
    <section className="border-b border-hairline bg-canvas">
      <div className="container-wide py-16 md:py-24">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-[clamp(2rem,5.5vw,4.25rem)] font-bold uppercase leading-none tracking-[-0.02em] text-ink">
            Services
          </h2>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-muted sm:inline">
            Index — {String(services.length).padStart(2, "0")} filings
          </span>
        </div>

        <ul className="mt-10 border-t border-ink/80">
          {services.map((s, i) => (
            <motion.li
              key={s.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 0.55, ease: EASE, delay: (i % 4) * 0.06 }}
              className="border-b border-hairline"
            >
              <Link
                href={`/services/${s.slug}`}
                className="group grid grid-cols-[3rem_1fr_auto] items-baseline gap-4 py-5 transition-colors hover:bg-mint/60 md:grid-cols-[4rem_minmax(0,2fr)_minmax(0,2fr)_auto_2rem] md:gap-6 md:py-6"
              >
                <span className="tnum font-mono text-xs text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-lg font-bold uppercase tracking-[0.01em] text-ink md:text-xl">
                  {s.name}
                </span>
                <span className="hidden truncate text-sm text-body md:block">
                  {s.short}
                </span>
                <span className="tnum hidden font-mono text-xs text-body md:block">
                  from {s.priceFrom}
                </span>
                <ArrowUpRight
                  className="h-4 w-4 justify-self-end self-center text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  strokeWidth={2}
                />
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
