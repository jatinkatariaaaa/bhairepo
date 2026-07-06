import { Container } from "./container";
import { Icon, type IconName } from "./icon";
import { Pill } from "./pill";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  icon?: IconName;
  overline?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  /** Optional actions row (buttons, price pill, etc.). */
  children?: React.ReactNode;
  className?: string;
};

/** Reusable internal-page hero with an ambient orb and staggered reveal. */
export function PageHero({
  icon,
  overline,
  title,
  subtitle,
  align = "left",
  children,
  className,
}: PageHeroProps) {
  const center = align === "center";

  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-hairline",
        className,
      )}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 right-0 h-[420px] w-[420px] rounded-full bg-orb opacity-70" />
      </div>

      <Container>
        <div
          className={cn(
            "flex flex-col gap-5 py-16 md:py-20",
            center ? "mx-auto max-w-3xl items-center text-center" : "max-w-3xl items-start",
          )}
        >
          {icon && (
            <Reveal>
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-mint text-primary">
                <Icon name={icon} className="h-7 w-7" />
              </span>
            </Reveal>
          )}

          {overline && (
            <Reveal>
              <Pill dot>{overline}</Pill>
            </Reveal>
          )}

          <Reveal delay={0.05}>
            <h1 className="text-balance font-display text-h1-sm font-semibold text-ink md:text-h1">
              {title}
            </h1>
          </Reveal>

          {subtitle && (
            <Reveal delay={0.1}>
              <p
                className={cn(
                  "text-pretty text-body-lg text-body",
                  center ? "mx-auto max-w-2xl" : "max-w-2xl",
                )}
              >
                {subtitle}
              </p>
            </Reveal>
          )}

          {children && (
            <Reveal delay={0.15}>
              <div
                className={cn(
                  "flex flex-wrap items-center gap-3 pt-2",
                  center && "justify-center",
                )}
              >
                {children}
              </div>
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
