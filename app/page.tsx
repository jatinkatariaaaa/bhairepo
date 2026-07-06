import { FaqJsonLd, OrganizationJsonLd } from "@/components/shared/json-ld";
import { homeFaqs } from "@/lib/content";

import { Hero } from "@/components/editorial/hero";
import { StepsStrip } from "@/components/editorial/steps-strip";
import { Report } from "@/components/editorial/report";
import { ServicesIndex } from "@/components/editorial/services-index";
import { ProcessLedger } from "@/components/editorial/process-ledger";
import { TestimonialsRules } from "@/components/editorial/testimonials-rules";
import { FaqLedger } from "@/components/editorial/faq-ledger";
import { CtaBand } from "@/components/editorial/cta-band";

/**
 * TrusTax — "Swiss Ledger" home. An editorial, annual-report-inspired layout:
 * masthead hero with a giant outlined figure → tricolor step band →
 * report spread → rule-divided indexes for services, process, quotes and Q&A.
 */
export default function HomePage() {
  return (
    <>
      <OrganizationJsonLd />
      <FaqJsonLd items={homeFaqs} />

      <Hero />
      <StepsStrip />
      <Report />
      <ServicesIndex />
      <ProcessLedger />
      <TestimonialsRules />
      <FaqLedger />
      <CtaBand />
    </>
  );
}
