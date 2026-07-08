"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

import { PhoneMockup } from "@/components/cinematic/phone";
import { EASE, viewportOnce } from "@/components/cinematic/lib/motion";
import { getService } from "@/lib/services";

export function TaxFiling() {
  const itr = getService("income-tax");
  const items = itr?.included ?? [];

  return (
    <section className="section-y relative overflow-hidden bg-canvas">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-20">
        {/* Copy + checklist */}
        <div>
          <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
            <span className="h-2 w-2 rounded-full bg-gold" />
            <span className="text-gold">(06)</span>
            <span>Income tax & ITR</span>
          </div>
          <h2 className="mt-5 font-display text-[clamp(2.2rem,5.5vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-ink">
            File early.{" "}
            <span className="font-display font-extrabold text-primary">Refund faster.</span>
          </h2>
          <p className="mt-6 max-w-md text-body-lg leading-relaxed text-body">
            We compute your tax, claim every legitimate deduction and file the
            right form — early, so refunds land sooner.
          </p>

          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={{ show: { transition: { staggerChildren: 0.08 } } }}
            className="mt-8 space-y-4"
          >
            {items.slice(0, 5).map((it) => (
              <motion.li
                key={it}
                variants={{
                  hidden: { opacity: 0, x: -14 },
                  show: { opacity: 1, x: 0, transition: { duration: 0.55, ease: EASE } },
                }}
                className="relative flex items-start gap-4 pl-5"
              >
                <motion.span
                  variants={{
                    hidden: { scaleY: 0 },
                    show: { scaleY: 1, transition: { duration: 0.5, ease: EASE } },
                  }}
                  className="absolute left-0 top-1 h-[calc(100%-0.5rem)] w-0.5 origin-top rounded bg-primary/25"
                />
                <motion.span
                  variants={{
                    hidden: { scale: 0, rotate: -30 },
                    show: { scale: 1, rotate: 0, transition: { type: "spring", stiffness: 320, damping: 18 } },
                  }}
                  className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary text-white"
                >
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </motion.span>
                <span className="text-[15px] leading-relaxed text-body">{it}</span>
              </motion.li>
            ))}
          </motion.ul>

          <Link
            href="/services/income-tax"
            className="link-underline mt-9 inline-flex items-center gap-2 font-medium text-ink"
          >
            File your ITR
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Phone */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotate: 3 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.9, ease: EASE }}
          className="mx-auto w-[248px] md:w-[280px]"
        >
          <div className="animate-float-slow">
            <PhoneMockup>
              <Image
                src="/images/screens/refund-tracker.png"
                alt="TrustTax ITR refund tracker screen"
                fill
                sizes="280px"
                className="object-cover"
              />
            </PhoneMockup>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
