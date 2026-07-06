import type { Metadata } from "next";

import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { Prose } from "@/components/shared/prose";
import { site } from "@/lib/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Refund Policy",
  description: `${site.name}'s policy on cancellations and refunds.`,
  path: "/refund",
});

export default function RefundPage() {
  return (
    <>
      <PageHero
        overline="Legal"
        title="Refund Policy"
        subtitle="Our approach to cancellations and refunds."
      />
      <Section>
        <Prose>
          {/* PLACEHOLDER: replace with your reviewed policy before launch. */}
          <p className="text-sm text-muted">
            Last updated: [DATE]. This is placeholder text provided as a
            starting point — please have it reviewed by a qualified
            professional before publishing.
          </p>

          <h2>Consultations</h2>
          <p>
            Initial consultations are free of charge, so no refund applies.
          </p>

          <h2>Professional fees</h2>
          <p>
            If you cancel an engagement before work has begun, you are eligible
            for a full refund of professional fees paid. Once work has started,
            refunds are prorated based on the work completed.
          </p>

          <h2>Government & statutory fees</h2>
          <p>
            Government fees, statutory charges and third-party costs are
            non-refundable once paid to the relevant department.
          </p>

          <h2>How to request a refund</h2>
          <p>
            Email us at <a href={`mailto:${site.email}`}>{site.email}</a> with
            your engagement details. Approved refunds are processed to the
            original payment method within 7–10 business days.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this policy? Reach us at{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a> or {site.phoneDisplay}.
          </p>
        </Prose>
      </Section>
    </>
  );
}
