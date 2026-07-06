import { Container } from "@/components/shared/container";
import { Icon } from "@/components/shared/icon";
import { trustBadges } from "@/lib/content";

/** Thin trust strip below the hero — credibility badges. */
export function TrustBar() {
  return (
    <div className="border-y border-hairline bg-white">
      <Container>
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-6">
          {trustBadges.map((badge) => (
            <li
              key={badge.label}
              className="flex items-center gap-2 text-sm font-medium text-body"
            >
              <Icon name={badge.icon} className="h-4 w-4 text-primary" />
              {badge.label}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
