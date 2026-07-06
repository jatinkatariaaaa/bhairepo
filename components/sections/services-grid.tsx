import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { ServiceCard } from "@/components/shared/service-card";
import { Reveal } from "@/components/shared/reveal";
import { services } from "@/lib/services";

/** Home services grid — all 8 services, 3 columns on desktop. */
export function ServicesGrid() {
  return (
    <Section id="services">
      <SectionHeading
        align="center"
        overline="What we do"
        title="Compliance, covered end to end"
        subtitle="From registrations to monthly filings, one certified team handles it all — so you can focus on running your business."
        className="mx-auto max-w-2xl"
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Reveal key={service.slug} delay={index * 0.05} className="h-full">
            <ServiceCard service={service} />
          </Reveal>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Button asChild variant="secondary" size="lg">
          <Link href="/services">
            View all services
            <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
