import Link from "next/link";

import { services } from "@/lib/services";
import { footerNav, site } from "@/lib/site";

const socialLinks = [
  { label: "LinkedIn", href: site.socials.linkedin },
  { label: "Instagram", href: site.socials.instagram },
  { label: "Facebook", href: site.socials.facebook },
];

/** Swiss Ledger footer — rule-divided columns, mono labels, no icons. */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-hairline bg-canvas">
      <div className="container-wide grid gap-12 py-14 md:py-20 lg:grid-cols-12">
        {/* Brand + contact */}
        <div className="lg:col-span-5">
          <p className="font-display text-2xl font-extrabold uppercase tracking-[0.01em] text-ink">
            TrusTax <span aria-hidden="true">®</span>
          </p>
          <p className="mt-4 max-w-xs text-pretty text-sm leading-relaxed text-body">
            CA-led tax, licensing and compliance for Indian businesses —
            transparent, certified, 100% online.
          </p>

          <dl className="mt-8 space-y-2 text-sm">
            <div className="flex gap-4">
              <dt className="w-16 font-mono text-[10px] uppercase leading-6 tracking-[0.16em] text-muted">
                Phone
              </dt>
              <dd>
                <a href={site.phoneHref} className="text-ink transition-colors hover:text-accent">
                  {site.phoneDisplay}
                </a>
              </dd>
            </div>
            <div className="flex gap-4">
              <dt className="w-16 font-mono text-[10px] uppercase leading-6 tracking-[0.16em] text-muted">
                Email
              </dt>
              <dd>
                <a href={`mailto:${site.email}`} className="text-ink transition-colors hover:text-accent">
                  {site.email}
                </a>
              </dd>
            </div>
            <div className="flex gap-4">
              <dt className="w-16 shrink-0 font-mono text-[10px] uppercase leading-6 tracking-[0.16em] text-muted">
                Office
              </dt>
              <dd className="text-body">{site.address}</dd>
            </div>
            <div className="flex gap-4">
              <dt className="w-16 font-mono text-[10px] uppercase leading-6 tracking-[0.16em] text-muted">
                Hours
              </dt>
              <dd className="text-body">{site.hours}</dd>
            </div>
          </dl>

          <div className="mt-8 flex items-center gap-6">
            {socialLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted transition-colors hover:text-ink"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-body transition-colors hover:text-ink"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              {footerNav.company.title}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {footerNav.company.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              {footerNav.legal.title}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {footerNav.legal.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom rule */}
      <div className="border-t border-hairline">
        <div className="container-wide flex flex-col items-start justify-between gap-2 py-5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted sm:flex-row sm:items-center">
          <p>
            © {year} {site.legalName}
          </p>
          <p>GST · ITR · TDS · MSME · FSSAI</p>
        </div>
      </div>
    </footer>
  );
}
