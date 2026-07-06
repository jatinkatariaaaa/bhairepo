import Link from "next/link";
import { Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { Pill } from "@/components/shared/pill";
import { Reveal } from "@/components/shared/reveal";

/** Home hero — big minimal headline with a serif italic accent word. */
export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Ambient background — soft emerald orbs + masked dot grid, no images */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-160px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-orb animate-float-slow" />
        <div className="absolute right-[6%] top-[36%] hidden h-64 w-64 rounded-full bg-orb opacity-60 md:block" />
        <div
          className="absolute inset-0 bg-dotgrid opacity-40"
          style={{
            WebkitMaskImage:
              "radial-gradient(ellipse at 50% 28%, #000, transparent 70%)",
            maskImage:
              "radial-gradient(ellipse at 50% 28%, #000, transparent 70%)",
          }}
        />
      </div>

      <Container>
        <div className="mx-auto max-w-4xl pb-16 pt-16 text-center md:pb-24 md:pt-24">
          <Reveal>
            <Pill dot>Certified CAs · 100% online</Pill>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-6 text-balance font-display text-h1-sm font-semibold text-ink md:text-h1 lg:text-display">
              Taxes, licenses &amp; compliance —{" "}
              <span className="font-serif font-normal italic text-primary">
                handled
              </span>
              .
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-body-lg text-body">
              Your CA-led team for GST, income tax, TDS, licenses and end-to-end
              compliance — accurate filings, transparent pricing, zero stress.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact#book">Book Free Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 text-sm text-muted sm:flex-row">
              <span className="flex items-center gap-0.5 text-gold" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </span>
              <span>
                <span className="font-semibold text-ink">500+ businesses</span>{" "}
                trust TrusTax · GST · ITR · MSME
              </span>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
