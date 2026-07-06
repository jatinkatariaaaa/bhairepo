import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { CtaBanner } from "@/components/shared/cta-banner";
import { ServiceCard } from "@/components/shared/service-card";
import { Reveal } from "@/components/shared/reveal";
import { Pill } from "@/components/shared/pill";
import { FaqJsonLd, ServiceJsonLd } from "@/components/shared/json-ld";
import { getService, getServiceSlugs, services } from "@/lib/services";
import { whatsappLink } from "@/lib/site";
import { createMetadata } from "@/lib/seo";

type ServicePageProps = { params: { slug: string } };

/** Pre-render every service page at build time. */
export function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = getService(params.slug);
  if (!service) return {};
  return createMetadata({
    title: service.name,
    description: service.short,
    path: `/services/${service.slug}`,
  });
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = getService(params.slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <ServiceJsonLd
        name={service.name}
        description={service.short}
        slug={service.slug}
      />
      <FaqJsonLd items={service.faqs} />

      <PageHero
        icon={service.icon}
        title={service.name}
        subtitle={service.promise}
      >
        <Pill tone="outline">From {service.priceFrom}</Pill>
        <Button asChild size="lg">
          <Link href={`/contact?service=${service.slug}#book`}>
            Book Free Consultation
          </Link>
        </Button>
        <Button asChild size="lg" variant="secondary">
          <a
            href={whatsappLink(`Hi TrusTax, I'd like help with ${service.name}.`)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="h-5 w-5" strokeWidth={1.75} />
            WhatsApp
          </a>
        </Button>
      </PageHero>

      {/* What's included + Who it's for */}
      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal className="h-full">
            <div className="h-full rounded-card border border-hairline bg-white p-6 shadow-card md:p-8">
              <h2 className="text-h3 font-display font-semibold text-ink">
                What&rsquo;s included
              </h2>
              <ul className="mt-6 space-y-3">
                {service.included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mint text-primary">
                      <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </span>
                    <span className="text-[15px] leading-relaxed text-body">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="h-full">
            <div className="h-full rounded-card border border-hairline bg-white p-6 shadow-card md:p-8">
              <h2 className="text-h3 font-display font-semibold text-ink">
                Who it&rsquo;s for
              </h2>
              <ul className="mt-6 space-y-3">
                {service.whoFor.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mint text-primary">
                      <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </span>
                    <span className="text-[15px] leading-relaxed text-body">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Process */}
      <Section className="bg-white">
        <SectionHeading
          align="center"
          overline="Simple process"
          title={`How ${service.name} works`}
          className="mx-auto max-w-2xl"
        />
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {service.process.map((step, index) => (
            <li key={step.title} className="h-full">
              <Reveal delay={index * 0.06} className="h-full">
                <div className="h-full rounded-card border border-hairline bg-canvas p-6">
                  <span className="font-mono text-sm font-semibold text-accent">
                    0{index + 1}
                  </span>
                  <h3 className="mt-2 text-h4 font-display font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-body">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            align="center"
            overline="FAQ"
            title="Frequently asked questions"
            className="mx-auto max-w-2xl"
          />
          <FaqAccordion items={service.faqs} className="mt-10" />
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <CtaBanner
          title={`Ready to get started with ${service.name}?`}
          subtitle="Book a free consultation and we'll handle the rest — accurately, on time and with clear, upfront pricing."
        />
      </Section>

      {/* Cross-sell */}
      <Section className="bg-white">
        <div className="flex items-end justify-between gap-4">
          <SectionHeading overline="Keep going" title="Explore more services" />
          <Button asChild variant="ghost" className="hidden shrink-0 sm:inline-flex">
            <Link href="/services">
              All services
              <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
            </Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((other) => (
            <ServiceCard key={other.slug} service={other} />
          ))}
        </div>
      </Section>
    </>
  );
}
