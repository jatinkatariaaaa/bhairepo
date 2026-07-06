import type { Metadata } from "next";

import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { Prose } from "@/components/shared/prose";
import { site } from "@/lib/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Terms of Service",
  description: `The terms that govern your use of ${site.name}'s website and services.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        overline="Legal"
        title="Terms of Service"
        subtitle="The terms that govern your use of our website and services."
      />
      <Section>
        <Prose>
          {/* PLACEHOLDER: replace with your reviewed terms before launch. */}
          <p className="text-sm text-muted">
            Last updated: [DATE]. This is placeholder text provided as a
            starting point — please have it reviewed by a qualified
            professional before publishing.
          </p>

          <h2>Acceptance of terms</h2>
          <p>
            By accessing {site.name} or engaging our services, you agree to
            these terms. If you do not agree, please do not use the website or
            services.
          </p>

          <h2>Our services</h2>
          <p>
            {site.name} provides tax, licensing and compliance services. The
            scope, deliverables and fees of any engagement will be confirmed
            with you before work begins. Statutory timelines and outcomes may
            depend on third-party departments and the accuracy of information
            you provide.
          </p>

          <h2>Your responsibilities</h2>
          <ul>
            <li>Provide accurate, complete and timely information and documents.</li>
            <li>Make any government fees or statutory payments that apply.</li>
            <li>Review deliverables and raise questions promptly.</li>
          </ul>

          <h2>Fees</h2>
          <p>
            Professional fees are communicated up front and are separate from
            any government or statutory charges. Please see our Refund Policy
            for cancellations.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            To the extent permitted by law, {site.name}'s liability arising from
            an engagement is limited to the professional fees paid for that
            engagement.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms? Reach us at{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </Prose>
      </Section>
    </>
  );
}
