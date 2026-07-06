import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { ServiceCard } from "@/components/shared/service-card";
import { Reveal } from "@/components/shared/reveal";
import { CtaBanner } from "@/components/shared/cta-banner";
import { Process } from "@/components/sections/process";
import { services } from "@/lib/services";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Services",
  description:
    "Explore TrusTax services — GST, income tax, TDS, bookkeeping, FSSAI food license, MSME (Udyam), Shop Act registration and business consulting. Certified CAs, 100% online.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        align="center"
        overline="Our services"
        title={
          <>
            Everything you need to stay{" "}
            <span className="font-serif font-normal italic text-primary">
              compliant
            </span>
          </>
        }
        subtitle="Eight focused services covering registrations, filings and ongoing compliance — each handled by certified CAs, fully online."
      >
        <Button asChild size="lg">
          <Link href="/contact#book">Book Free Consultation</Link>
        </Button>
      </PageHero>

      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.05} className="h-full">
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Process />

      <Section>
        <CtaBanner />
      </Section>
    </>
  );
}
