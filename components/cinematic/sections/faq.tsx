"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

import { RevealText } from "@/components/cinematic/reveal-text";
import { EASE } from "@/components/cinematic/lib/motion";
import { homeFaqs } from "@/lib/content";

export function Faq() {
  const [open, setOpen] = React.useState<number | null>(0);

  return (
    <section className="section-y bg-canvas">
      <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.4fr] lg:gap-20">
        {/* Sticky rail */}
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
            <span className="h-2 w-2 rounded-full bg-gold" />
            <span className="text-gold">(11)</span>
            <span>FAQ</span>
          </div>
          <h2 className="mt-5 font-display text-[clamp(2.2rem,5.5vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-ink">
            <RevealText
              segments={[
                { text: "Questions," },
                {
                  text: " answered.",
                  className: "font-serif italic font-normal text-primary",
                },
              ]}
            />
          </h2>

          {/* Animated counter */}
          <div className="mt-10 flex items-end gap-4">
            <div className="relative h-20 w-20 overflow-hidden">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={open ?? "none"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-100%" }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="absolute inset-0 flex items-center justify-center font-mono text-7xl font-bold text-mint-deep"
                >
                  {open === null ? "—" : String(open + 1).padStart(2, "0")}
                </motion.span>
              </AnimatePresence>
            </div>
            <span className="mb-3 max-w-[10rem] text-sm leading-relaxed text-muted">
              of {String(homeFaqs.length).padStart(2, "0")} common questions
            </span>
          </div>

          <Link
            href="/contact#book"
            className="link-underline mt-10 inline-flex items-center gap-2 font-medium text-ink"
          >
            Still curious? Talk to a CA →
          </Link>
        </div>

        {/* Accordion */}
        <ul className="divide-y divide-hairline border-t border-hairline">
          {homeFaqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <li key={f.question} className="relative">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-4 py-6 text-left"
                >
                  <span className="relative w-8 shrink-0">
                    {isOpen && (
                      <motion.span
                        layoutId="faq-bar"
                        className="absolute -left-[1px] top-1/2 h-8 w-0.5 -translate-y-1/2 rounded bg-primary"
                        transition={{ duration: 0.35, ease: EASE }}
                      />
                    )}
                    <span className="font-mono text-xs text-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </span>
                  <span className="flex-1 text-h3 font-medium text-ink">
                    {f.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: EASE }}
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-hairline text-ink"
                  >
                    <Plus className="h-4 w-4" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-7 pl-12 pr-10 text-body-lg leading-relaxed text-body">
                        {f.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
