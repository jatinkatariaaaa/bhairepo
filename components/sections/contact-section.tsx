import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { ContactForm } from "@/components/shared/contact-form";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  DEFAULT_WHATSAPP_MESSAGE,
  site,
  whatsappLink,
} from "@/lib/site";
import { cn } from "@/lib/utils";

const details = [
  { Icon: Phone, label: "Phone", value: site.phoneDisplay, href: site.phoneHref, external: false },
  {
    Icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with us",
    href: whatsappLink(DEFAULT_WHATSAPP_MESSAGE),
    external: true,
  },
  { Icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}`, external: false },
  { Icon: MapPin, label: "Office", value: site.address, href: undefined, external: false },
  { Icon: Clock, label: "Hours", value: site.hours, href: undefined, external: false },
];

type ContactSectionProps = {
  className?: string;
  /** Prefill the form's service dropdown with this slug. */
  defaultService?: string;
  /** Override the eyebrow / title / subtitle copy. */
  overline?: string;
  title?: React.ReactNode;
  subtitle?: string;
};

/** Contact details + form. Reused on the home page and the /contact page. */
export function ContactSection({
  className,
  defaultService,
  overline = "Contact",
  title = "Let's sort your compliance",
  subtitle = "Reach out by form, phone or WhatsApp. Tell us what you need and we'll point you to the right service — with clear pricing up front.",
}: ContactSectionProps) {
  return (
    <Section id="contact" className={cn("bg-white", className)}>
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading overline={overline} title={title} subtitle={subtitle} />

          <ul className="mt-8 space-y-3">
            {details.map((detail) => {
              const inner = (
                <>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mint text-primary">
                    <detail.Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-xs uppercase tracking-wide text-muted">
                      {detail.label}
                    </span>
                    <span className="text-[15px] font-medium text-ink">
                      {detail.value}
                    </span>
                  </span>
                </>
              );

              return (
                <li key={detail.label}>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      target={detail.external ? "_blank" : undefined}
                      rel={detail.external ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 rounded-xl p-2 transition-colors hover:bg-mint/40"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-2">{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 rounded-card border border-hairline bg-canvas p-4 text-sm text-body">
            <span className="font-medium text-ink">Certified CAs</span>
            <span aria-hidden="true" className="text-hairline">
              •
            </span>
            <span>Data-secure</span>
            <span aria-hidden="true" className="text-hairline">
              •
            </span>
            <span>Transparent pricing</span>
          </div>
        </div>

        <div id="book" className="scroll-mt-28">
          <div className="rounded-card border border-hairline bg-canvas p-6 shadow-card md:p-8">
            <h3 className="text-h4 font-display font-semibold text-ink">
              Send us a message
            </h3>
            <p className="mt-1 text-sm text-muted">
              We'll get back to you within one business day.
            </p>
            <ContactForm defaultService={defaultService} className="mt-6" />
          </div>
        </div>
      </div>
    </Section>
  );
}
