"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { site } from "@/lib/site";

const EASE = [0.16, 1, 0.3, 1] as const;

/** Closing band — ink-black, one giant uppercase statement, one link. */
export function CtaBand() {
  return (
    <section className="bg-ink text-canvas">
      <div className="container-wide py-20 md:py-28">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="font-mono text-[10px] uppercase tracking-[0.2em] text-canvas/50"
        >
          Filing window open — {site.hours}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1, ease: EASE, delay: 0.08 }}
          className="mt-6 font-display text-[clamp(2.75rem,9vw,7.5rem)] font-bold uppercase leading-[0.94] tracking-[-0.03em] text-canvas"
        >
          Begin the
          <br />
          analysis.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.18 }}
          className="mt-10 flex flex-wrap items-center gap-8"
        >
          <Link
            href="/contact#book"
            className="group inline-flex items-center gap-1.5 border-b-2 border-canvas pb-0.5 font-display text-sm font-extrabold uppercase tracking-[0.06em] text-canvas transition-colors hover:border-ochre hover:text-ochre"
          >
            Book free consultation
            <ArrowUpRight
              className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              strokeWidth={2.25}
            />
          </Link>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-canvas/50">
            No obligation · CA-certified · 100% online
          </span>
        </motion.div>
      </div>
    </section>
  );
}
