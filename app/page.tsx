import { FaqJsonLd, OrganizationJsonLd } from "@/components/shared/json-ld";
import { homeFaqs } from "@/lib/content";

import { Hero } from "@/components/cinematic/sections/hero";
import { Features } from "@/components/cinematic/sections/features";
import { WhyTrustTax } from "@/components/cinematic/sections/why-trustax";
import { Workflow } from "@/components/cinematic/sections/workflow";
import { DashboardPreview } from "@/components/cinematic/sections/dashboard-preview";
import { TaxFiling } from "@/components/cinematic/sections/tax-filing";
import { GST } from "@/components/cinematic/sections/gst";
import { ITR } from "@/components/cinematic/sections/itr";
import { BusinessRegistration } from "@/components/cinematic/sections/business-registration";
import { Testimonials } from "@/components/cinematic/sections/testimonials";
import { Faq } from "@/components/cinematic/sections/faq";
import { CTA } from "@/components/cinematic/sections/cta";

/**
 * TrustTax — "Fiscal Cinema" home. A cinematic, scroll-driven experience:
 * preloader curtain → layered hero → editorial + keynote sections, each with a
 * distinct animation. Real brand content is sourced from lib/content & services.
 */
export default function HomePage() {
  return (
    <>
      <OrganizationJsonLd />
      <FaqJsonLd items={homeFaqs} />

      <Hero />
      <Features />
      <WhyTrustTax />
      <Workflow />
      <DashboardPreview />
      <TaxFiling />
      <GST />
      <ITR />
      <BusinessRegistration />
      <Testimonials />
      <Faq />
      <CTA />
    </>
  );
}
