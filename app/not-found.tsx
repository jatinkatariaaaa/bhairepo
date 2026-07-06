import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";

export default function NotFound() {
  return (
    <Container>
      <div className="flex min-h-[62vh] flex-col items-center justify-center py-24 text-center">
        <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          404
        </p>
        <h1 className="mt-4 text-balance font-display text-h1-sm font-semibold text-ink md:text-h1">
          Page not found
        </h1>
        <p className="mt-4 max-w-md text-pretty text-body-lg text-body">
          The page you're looking for doesn't exist or has moved. Let's get you
          back on track.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg">
            <Link href="/">Back to home</Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="/services">Explore services</Link>
          </Button>
        </div>
      </div>
    </Container>
  );
}
