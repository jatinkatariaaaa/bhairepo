"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

import { homeFaqs } from "@/lib/content";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

/** FAQ — numbered rule rows with a rotating plus. Pure editorial, no cards. */
export function FaqLedger() {
  const [open, setOpen] = React.useState<number | null>(0);

  return (
    <section className="border-b border-hairline bg-canvas">
      <div className="container-wide grid gap-10 py-16 md:py-24 lg:grid-cols-[1fr_2fr]">
        <div>
          <h2 className="font-display text-[clamp(2rem,5.5vw,4.25rem)] font-bold uppercase leading-none tracking-[-0.02em] text-ink">
            Q&amp;A
          </h2>
          <p className="mt-4 max-w-[32ch] text-sm leading-relaxed text-body">
            Straight answers on filing, pricing and process. Anything else —
            call us.
          </p>
        </div>

        <ul className="border-t border-ink/80">
          {homeFaqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.li
                key={faq.question}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{ duration: 0.5, ease: EASE, delay: i * 0.05 }}
                className="border-b border-hairline"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="grid w-full grid-cols-[2.5rem_1fr_auto] items-baseline gap-4 py-5 text-left"
                >
                  <span className="tnum font-mono text-xs text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-base font-bold tracking-tight text-ink md:text-lg">
                    {faq.question}
                  </span>
                  <Plus
                    aria-hidden="true"
                    className={cn(
                      "h-4 w-4 self-center text-muted transition-transform duration-300",
                      isOpen && "rotate-45 text-accent",
                    )}
                    strokeWidth={2}
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-premium",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-prose pb-6 pl-[3.5rem] text-sm leading-relaxed text-body">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
