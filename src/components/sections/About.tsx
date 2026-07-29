import { aboutSummary, siteConfig } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28" aria-labelledby="about-heading">
      <Container>
        <FadeIn>
          <SectionHeading
            id="about-heading"
            eyebrow="About"
            title="Building reliable software with measurable impact"
            description="A concise look at my background, focus areas, and what I'm building toward."
          />
        </FadeIn>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
          <FadeIn delay={0.08}>
            <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
              {aboutSummary.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.14}>
            <aside className="rounded-xl border border-border bg-surface/80 p-6 backdrop-blur-sm">
              <h3 className="font-display text-sm font-semibold tracking-tight text-foreground">
                Currently
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
                <li>Incoming Software Engineer · Fidelity Investments (LEAP)</li>
                <li>B.S. Computer Science · UT Dallas</li>
                <li>Minor in Finance · Graduating May 2026</li>
                <li>Based in {siteConfig.location}</li>
                <li>
                  {siteConfig.citizenship}
                  <span className="text-muted/70"> · </span>
                  No sponsorship required
                </li>
                <li>Exploring AI engineering, LLMs, and scalable systems</li>
              </ul>
            </aside>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
