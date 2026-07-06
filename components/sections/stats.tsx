import { Section } from "@/components/shared/section";
import { StatItem } from "@/components/shared/stat-item";
import { Reveal } from "@/components/shared/reveal";
import { stats } from "@/lib/content";

/** Stats band — four headline metrics in tabular mono figures. */
export function Stats() {
  return (
    <Section className="bg-white">
      <div className="rounded-card border border-hairline bg-canvas px-6 py-10 shadow-card md:px-12 md:py-12">
        <p className="text-center text-overline font-semibold uppercase text-primary">
          Trusted by businesses across India
        </p>
        <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.06}>
              <StatItem stat={stat} className="items-center text-center" />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
