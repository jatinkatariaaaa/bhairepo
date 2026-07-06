"use client";

import * as React from "react";
import Link from "next/link";
import { animate, motion, useInView } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

import { SectionLabel } from "@/components/cinematic/section-label";
import { RevealText } from "@/components/cinematic/reveal-text";
import { EASE, viewportOnce } from "@/components/cinematic/lib/motion";
import { getService } from "@/lib/services";

/**
 * TAX FILING — sticky-left editorial column against a scroll-right card stack,
 * anchored by a count-up "returns filed" figure. Signature motion: pinned
 * headline + animated number + staggered right-hand reveal.
 */
export function TaxFiling() {
  const itr = getService("income-tax");
  const items = itr?.included ?? [];

  return (
    <section className="section-y bg-canvas">
      <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* sticky left */}
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <SectionLabel index="06">Income tax &amp; ITR</SectionLabel>
          <h2 className="mt-5 font-display text-display-lg font-semibold tracking-tight text-ink">
            <RevealText
              segments={[
                { text: "Filing, without" },
                { text: " the fire drill.", className: "text-primary" },
              ]}
            />
          </h2>
          <p className="mt-6 max-w-md text-body-lg leading-relaxed text-body">
            We compute your tax, claim every legitimate deduction and file the
            right form — early, so refunds land sooner.
          </p>

          <div className="mt-10 flex items-baseline gap-3">
            <span className="font-mono text-6xl font-bold text-primary md:text-7xl">
              <CountUp value={12000} />+
            </span>
            <span className="max-w-[8rem] text-sm text-muted">
              returns filed &amp; counting
            </span>
          </div>

          <Link
            href="/services/income-tax"
            className="link-underline mt-8 inline-flex items-center gap-2 font-medium text-ink"
          >
            See income-tax plans
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* scrolling right */}
        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={{ show: { transition: { staggerChildren: 0.09 } } }}
          className="space-y-3"
        >
          {items.map((it, i) => (
            <motion.li
              key={it}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: EASE },
                },
              }}
              className="group flex items-start gap-4 rounded-card border border-hairline bg-white p-5 shadow-card transition-transform duration-500 hover:-translate-y-0.5 hover:shadow-lift"
            >
              <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-mint text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <Check className="h-4 w-4" strokeWidth={2.5} />
              </span>
              <div>
                <span className="font-mono text-xs text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-1 text-[15px] leading-relaxed text-ink">{it}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

/** Number that counts up (Indian grouping) once scrolled into view. */
function CountUp({ value }: { value: number }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const [n, setN] = React.useState(0);

  React.useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.7,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setN(v),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="tnum">
      {Math.round(n).toLocaleString("en-IN")}
    </span>
  );
}
