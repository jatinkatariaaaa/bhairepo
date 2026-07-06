import { absoluteUrl } from "@/lib/seo";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Structured data is static and trusted (built from our own config).
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Organisation / local-business schema for the firm. */
export function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "AccountingService",
        name: site.name,
        legalName: site.legalName,
        description: site.description,
        url: site.url,
        telephone: site.phoneDisplay,
        email: site.email,
        priceRange: "₹₹",
        areaServed: "IN",
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address,
          addressCountry: "IN",
        },
        sameAs: Object.values(site.socials),
        makesOffer: services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.name,
            description: service.short,
            url: absoluteUrl(`/services/${service.slug}`),
          },
        })),
      }}
    />
  );
}

/** FAQPage schema — pass the same FAQ items rendered on the page. */
export function FaqJsonLd({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }}
    />
  );
}

/** Service schema for a single service detail page. */
export function ServiceJsonLd({
  name,
  description,
  slug,
}: {
  name: string;
  description: string;
  slug: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: name,
        name,
        description,
        url: absoluteUrl(`/services/${slug}`),
        provider: {
          "@type": "AccountingService",
          name: site.name,
          url: site.url,
        },
        areaServed: "IN",
      }}
    />
  );
}
