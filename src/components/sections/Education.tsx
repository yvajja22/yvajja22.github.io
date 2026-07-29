import { education } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-24 py-20 sm:py-28"
      aria-labelledby="education-heading"
    >
      <Container>
        <FadeIn>
          <SectionHeading
            id="education-heading"
            eyebrow="Education"
            title="Academic foundation"
            description="Computer Science with a Finance minor — pairing systems thinking with business context."
          />
        </FadeIn>

        <FadeIn delay={0.08}>
          <article className="mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">
                  {education.school}
                </h3>
                <p className="mt-2 text-base text-muted">{education.degree}</p>
                {education.minor ? (
                  <p className="mt-1 text-sm text-accent">{education.minor}</p>
                ) : null}
              </div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
                {education.graduation}
              </p>
            </div>

            <div className="mt-8">
              <h4 className="font-display text-sm font-semibold text-foreground">
                Relevant coursework
              </h4>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {education.coursework.map((course) => (
                  <li
                    key={course}
                    className="rounded-md border border-border bg-background/70 px-3 py-2 text-sm text-muted"
                  >
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </FadeIn>
      </Container>
    </section>
  );
}
