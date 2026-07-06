import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProcessStep } from "@/components/shared/process-step";
import { Reveal } from "@/components/shared/reveal";
import { processSteps } from "@/lib/content";

/** How it works — a 4-step horizontal timeline. */
export function Process() {
  return (
    <Section>
      <SectionHeading
        align="center"
        overline="How it works"
        title="From first call to full compliance"
        subtitle="A simple, transparent process. You share what you have, we handle the rest — and keep you on track all year."
        className="mx-auto max-w-2xl"
      />

      <div className="relative mt-14">
        {/* Connector track behind the numbered badges (desktop only) */}
        <div
          aria-hidden="true"
          className="absolute left-0 right-0 top-7 hidden h-px bg-hairline md:block"
        />
        <div className="grid gap-10 md:grid-cols-4 md:gap-8">
          {processSteps.map((step, index) => (
            <Reveal key={step.step} delay={index * 0.06}>
              <ProcessStep {...step} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
