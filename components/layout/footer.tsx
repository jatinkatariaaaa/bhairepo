import Link from "next/link";
import { Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Logo } from "@/components/shared/logo";
import { services } from "@/lib/services";
import { footerNav, site } from "@/lib/site";

const socialLinks = [
  { label: "LinkedIn", href: site.socials.linkedin, Icon: Linkedin },
  { label: "Instagram", href: site.socials.instagram, Icon: Instagram },
  { label: "Facebook", href: site.socials.facebook, Icon: Facebook },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-hairline bg-white">
      <Container>
        <div className="grid gap-12 py-16 lg:grid-cols-12">
          {/* Brand + contact */}
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-4 max-w-xs text-pretty text-sm leading-relaxed text-body">
              CA-led tax, licensing and compliance services for Indian
              businesses — transparent, certified and 100% online.
            </p>

            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <a
                  href={site.phoneHref}
                  className="flex items-center gap-3 text-body transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.75} />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-3 text-body transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.75} />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-body">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.75} />
                <span>{site.address}</span>
              </li>
              <li className="flex items-center gap-3 text-body">
                <Clock className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.75} />
                {site.hours}
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-2">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${site.name} on ${label}`}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-hairline bg-canvas text-body transition-colors hover:border-primary/30 hover:bg-mint hover:text-primary"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                Services
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-body transition-colors hover:text-primary"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                {footerNav.company.title}
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                {footerNav.company.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-body transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                {footerNav.legal.title}
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                {footerNav.legal.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-body transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-hairline py-6 text-sm text-muted sm:flex-row">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p className="text-center sm:text-right">
            Built for Indian businesses · GST · ITR · TDS · MSME · FSSAI
          </p>
        </div>
      </Container>
    </footer>
  );
}
