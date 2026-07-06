import type { Metadata } from "next";

import { site } from "@/lib/site";

/** Build an absolute URL from a path, based on the configured site.url. */
export function absoluteUrl(path = "/"): string {
  const base = site.url.replace(/\/$/, "");
  if (!path || path === "/") return `${base}/`;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

type CreateMetadataArgs = {
  title?: string;
  description?: string;
  /** Route path for the canonical URL, e.g. "/services/gst". */
  path?: string;
};

/**
 * Per-page metadata helper — sets title, description, canonical URL and
 * Open Graph / Twitter tags. The site-wide OG image comes from
 * app/opengraph-image.tsx automatically.
 */
export function createMetadata({
  title,
  description,
  path = "/",
}: CreateMetadataArgs = {}): Metadata {
  const url = absoluteUrl(path);
  const desc = description ?? site.description;
  const ogTitle = title ? `${title} · ${site.name}` : `${site.name} — ${site.tagline}`;

  return {
    title,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      title: ogTitle,
      description: desc,
      url,
      siteName: site.name,
      locale: site.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: desc,
    },
  };
}
