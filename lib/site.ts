/**
 * Global site configuration — brand, contact details, navigation and socials.
 *
 * ⚠️ PLACEHOLDERS: the phone number, WhatsApp, email and address below are
 * demo values. Replace them with your real details before going live.
 */

// Raw digits used to build tel: and wa.me links — PLACEHOLDER
const PHONE_DIGITS = "919876543210"; // +91 98765 43210
const WHATSAPP_DIGITS = "919876543210";

export const site = {
  name: "TrusTax",
  legalName: "TrusTax Advisory LLP", // PLACEHOLDER
  tagline: "Taxes, licenses & compliance — handled.",
  description:
    "TrusTax is a CA-led firm handling GST, income tax, FSSAI, MSME, TDS and business compliance for Indian businesses — transparent pricing, certified experts, 100% online.",
  // Update to your production domain — used for canonical URLs, sitemap & OG tags
  url: "https://trustax.in",
  locale: "en_IN",

  // Contact — PLACEHOLDERS, replace before launch
  phoneDisplay: "+91 98765 43210",
  phoneHref: `tel:+${PHONE_DIGITS}`,
  whatsappDisplay: "+91 98765 43210",
  email: "hello@trustax.in",
  address: "Level 4, Trade Centre, MG Road, Bengaluru 560001",
  hours: "Mon–Sat, 10:00am – 7:00pm IST",

  socials: {
    linkedin: "https://linkedin.com/company/trustax", // PLACEHOLDER
    instagram: "https://instagram.com/trustax", // PLACEHOLDER
    twitter: "https://x.com/trustax", // PLACEHOLDER
    facebook: "https://facebook.com/trustax", // PLACEHOLDER
  },
} as const;

/**
 * Build a WhatsApp click-to-chat link with an optional prefilled message.
 */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_DIGITS}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hi TrusTax, I'd like to book a free consultation.";

/** Primary navigation shown in the navbar and mobile menu. */
export const mainNav = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

/** Footer link groups. Service links are generated from lib/services.ts. */
export const footerNav = {
  company: {
    title: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Contact", href: "/contact" },
      { label: "Book a consultation", href: "/contact#book" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Refund Policy", href: "/refund" },
    ],
  },
} as const;
