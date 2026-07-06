import type { Metadata } from "next";

import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { Prose } from "@/components/shared/prose";
import { site } from "@/lib/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses and protects your information.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        overline="Legal"
        title="Privacy Policy"
        subtitle="How we collect, use and protect your information."
      />
      <Section>
        <Prose>
          {/* PLACEHOLDER: replace with your reviewed policy before launch. */}
          <p className="text-sm text-muted">
            Last updated: [DATE]. This is placeholder text provided as a
            starting point — please have it reviewed by a qualified
            professional before publishing.
          </p>

          <h2>Information we collect</h2>
          <p>
            When you contact {site.name} or use our services, we may collect
            information you provide directly — such as your name, email address,
            phone number and details relevant to the service you request.
          </p>

          <h2>How we use your information</h2>
          <p>
            We use your information to respond to enquiries, deliver our
            services, comply with statutory obligations, and communicate with
            you about your engagement. We do not sell your personal information.
          </p>

          <h2>Data security</h2>
          <p>
            We use secure, access-controlled systems and reasonable technical
            and organisational measures to protect your information. Documents
            are shared over encrypted channels.
          </p>

          <h2>Data retention</h2>
          <p>
            We retain your information only for as long as necessary to provide
            our services and to meet legal, accounting and regulatory
            requirements.
          </p>

          <h2>Your rights</h2>
          <p>
            You may request access to, correction of, or deletion of your
            personal information, subject to legal and contractual limits. To
            make a request, email us at{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
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
