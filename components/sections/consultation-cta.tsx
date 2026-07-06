import { Mail, MessageCircle, Phone } from "lucide-react";

import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import {
  DEFAULT_WHATSAPP_MESSAGE,
  site,
  whatsappLink,
} from "@/lib/site";

const channels = [
  {
    Icon: Phone,
    label: "Call us",
    value: site.phoneDisplay,
    hint: site.hours,
    href: site.phoneHref,
    external: false,
  },
  {
    Icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with us",
    hint: "Fastest response",
    href: whatsappLink(DEFAULT_WHATSAPP_MESSAGE),
    external: true,
  },
  {
    Icon: Mail,
    label: "Email",
    value: site.email,
    hint: "We reply within a day",
    href: `mailto:${site.email}`,
    external: false,
  },
];

/** Consultation CTA — free consultation with Call / WhatsApp / Email channels. */
export function ConsultationCta() {
  return (
    <Section>
      <div className="rounded-card border border-hairline bg-mint/40 px-6 py-12 md:px-12 md:py-14">
        <SectionHeading
          align="center"
          overline="Get started"
          title="Book a free consultation"
          subtitle="No cost, no obligation. Talk to a certified CA, get a clear plan and transparent pricing before you commit to anything."
          className="mx-auto max-w-2xl"
        />

        <div className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-3">
          {channels.map((channel, index) => (
            <Reveal key={channel.label} delay={index * 0.06} className="h-full">
              <a
                href={channel.href}
                target={channel.external ? "_blank" : undefined}
                rel={channel.external ? "noopener noreferrer" : undefined}
                className="group flex h-full flex-col items-start rounded-card border border-hairline bg-white p-6 shadow-card transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-mint text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <channel.Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <span className="mt-5 text-sm text-muted">{channel.label}</span>
                <span className="mt-1 text-h4 font-display font-semibold text-ink">
                  {channel.value}
                </span>
                <span className="mt-1 text-sm text-muted">{channel.hint}</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
