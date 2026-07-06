import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { ValueCard } from "@/components/shared/value-card";
import { Reveal } from "@/components/shared/reveal";
import { values } from "@/lib/content";

/** Why choose TrusTax — value propositions. */
export function WhyChoose() {
  return (
    <Section className="bg-white">
      <SectionHeading
        align="center"
        overline="Why TrusTax"
        title="Built for trust, priced with clarity"
        subtitle="Everything you'd expect from a modern CA firm — and none of the opacity that usually comes with compliance."
        className="mx-auto max-w-2xl"
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((value, index) => (
          <Reveal key={value.title} delay={index * 0.05} className="h-full">
            <ValueCard value={value} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
