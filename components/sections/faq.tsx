import Link from "next/link";
import { MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import {
  DEFAULT_WHATSAPP_MESSAGE,
  whatsappLink,
} from "@/lib/site";
import { homeFaqs } from "@/lib/content";

/** Home FAQ — editorial two-column layout. */
export function Faq() {
  return (
    <Section className="bg-white">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            overline="FAQ"
            title="Questions, answered"
            subtitle="Everything you need to know about working with TrusTax. Can't find your answer? We're one message away."
          />
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/contact#book">Book a consultation</Link>
            </Button>
            <Button asChild variant="secondary">
              <a
                href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={1.75} />
                WhatsApp us
              </a>
            </Button>
          </div>
        </div>

        <div className="lg:col-span-7">
          <FaqAccordion items={homeFaqs} />
        </div>
      </div>
    </Section>
  );
}
