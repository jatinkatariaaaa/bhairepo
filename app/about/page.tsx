import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { ValueCard } from "@/components/shared/value-card";
import { Reveal } from "@/components/shared/reveal";
import { CtaBanner } from "@/components/shared/cta-banner";
import { Stats } from "@/components/sections/stats";
import { values } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "TrusTax is a CA-led firm making tax, licensing and compliance simple for Indian businesses — transparent pricing, certified experts and a 100% online experience.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        align="center"
        overline="About TrusTax"
        title={
          <>
            Compliance made{" "}
            <span className="font-serif font-normal italic text-primary">
              simple
            </span>
          </>
        }
        subtitle="We're a CA-led team on a mission to make tax and compliance effortless for Indian businesses — without the jargon, opacity or missed deadlines."
      >
        <Button asChild size="lg">
          <Link href="/contact#book">Book Free Consultation</Link>
        </Button>
        <Button asChild size="lg" variant="secondary">
          <Link href="/services">Explore Services</Link>
        </Button>
      </PageHero>

      {/* Mission */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading overline="Our mission" title="Why we started TrusTax" />
          </div>
          <div className="space-y-4 text-body-lg text-body lg:col-span-7">
            <p>
              Running a business in India means navigating GST, income tax, TDS,
              licenses and a calendar full of deadlines. For most founders, it's
              confusing, opaque and stressful — and one missed due date can mean
              real penalties.
            </p>
            <p>
              We started TrusTax to change that. We pair certified Chartered
              Accountants with a simple, 100% online experience: clear pricing
              up front, secure document sharing, and proactive reminders so
              nothing slips.
            </p>
            <p>
              Today we help hundreds of businesses across India stay compliant
              and focus on what they do best — growing. Whether you're a
              first-time founder or an established firm, we're the CA team in
              your corner.
            </p>
          </div>
        </div>
      </Section>

      <Stats />

      {/* Values */}
      <Section className="bg-white">
        <SectionHeading
          align="center"
          overline="What we stand for"
          title="Principles that guide our work"
          subtitle="The standards we hold ourselves to on every filing, registration and consultation."
          className="mx-auto max-w-2xl"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={index * 0.05} className="h-full">
              <ValueCard value={value} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <CtaBanner />
      </Section>
    </>
  );
}
