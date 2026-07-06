"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

import { PhoneMockup } from "@/components/cinematic/phone";
import { GstScreen } from "@/components/cinematic/app-screens";
import { Marquee } from "@/components/cinematic/marquee";
import { SectionLabel } from "@/components/cinematic/section-label";
import { RevealText } from "@/components/cinematic/reveal-text";
import { EASE, viewportOnce } from "@/components/cinematic/lib/motion";
import { getService } from "@/lib/services";

const TERMS = [
  "GSTR-1",
  "GSTR-3B",
  "GSTR-2B",
  "Input tax credit",
  "LUT filing",
  "e-Invoicing",
  "GSTR-9",
  "Nil returns",
  "Amendments",
  "Notices",
];

/**
 * GST — an infinite marquee of GST terminology over a compliance checklist that
 * "draws in" (left rail scales, checks pop) beside a floating device.
 * Signature motion: term marquee + rail-draw list.
 */
export function GST() {
  const gst = getService("gst");
  const items = gst?.included ?? [];

  return (
    <section className="section-y relative overflow-hidden bg-canvas">
      {/* term marquee */}
      <Marquee className="border-y border-hairline py-5">
        {TERMS.map((t) => (
          <span
            key={t}
            className="mx-6 font-display text-2xl font-medium text-ink/25 md:text-4xl"
          >
            {t}
            <span className="ml-6 text-gold">✦</span>
          </span>
        ))}
      </Marquee>

      <div className="container-page mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionLabel index="07">GST services</SectionLabel>
          <div className="mt-4 inline-flex items-center gap-2 rounded-pill bg-mint px-3 py-1 font-mono text-xs text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Registration &amp; returns · from ₹999
          </div>
          <h2 className="mt-5 font-display text-display-lg font-semibold tracking-tight text-ink">
            <RevealText
              segments={[
                { text: "GST that never keeps you" },
                {
                  text: " up at night.",
                  className: "font-serif italic font-normal text-primary",
                },
              ]}
            />
          </h2>

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
                  show: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.55, ease: EASE },
                  },
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
                    show: {
                      scale: 1,
                      rotate: 0,
                      transition: { type: "spring", stiffness: 320, damping: 18 },
                    },
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
            href="/services/gst"
            className="link-underline mt-9 inline-flex items-center gap-2 font-medium text-ink"
          >
            Explore GST services
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* floating device */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotate: -3 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.9, ease: EASE }}
          className="mx-auto w-[248px] md:w-[280px]"
        >
          <div className="animate-float-slow">
            <PhoneMockup>
              <GstScreen />
            </PhoneMockup>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
