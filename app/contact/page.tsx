import type { Metadata } from "next";
import { MessageCircle, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/shared/page-hero";
import { ContactSection } from "@/components/sections/contact-section";
import { getService } from "@/lib/services";
import {
  DEFAULT_WHATSAPP_MESSAGE,
  site,
  whatsappLink,
} from "@/lib/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Contact TrusTax — book a free consultation for GST, income tax, TDS, licenses and compliance. Call, WhatsApp, email or send us a message.",
  path: "/contact",
});

export default function ContactPage({
  searchParams,
}: {
  searchParams: { service?: string };
}) {
  // Prefill the form's service dropdown when linked from a service page.
  const requested =
    typeof searchParams.service === "string" ? searchParams.service : undefined;
  const defaultService =
    requested && getService(requested) ? requested : undefined;

  return (
    <>
      <PageHero
        align="center"
        overline="Contact"
        title={
          <>
            Let's talk about your{" "}
            <span className="font-serif font-normal italic text-primary">
              compliance
            </span>
          </>
        }
        subtitle="Book a free consultation or send us a message — we usually reply within one business day."
      >
        <Button asChild size="lg">
          <a href={site.phoneHref}>
            <Phone className="h-5 w-5" strokeWidth={1.75} />
            {site.phoneDisplay}
          </a>
        </Button>
        <Button asChild size="lg" variant="secondary">
          <a
            href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="h-5 w-5" strokeWidth={1.75} />
            WhatsApp
          </a>
        </Button>
      </PageHero>

      <ContactSection
        overline="Send a message"
        title="Contact details"
        subtitle="Prefer to reach out directly? Here's how to find us — or use the form and we'll come back to you."
        defaultService={defaultService}
      />
    </>
  );
}
