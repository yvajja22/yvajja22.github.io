import { skillGroups } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-y border-border/60 bg-surface/40 py-20 sm:py-28"
      aria-labelledby="skills-heading"
    >
      <Container>
        <FadeIn>
          <SectionHeading
            id="skills-heading"
            eyebrow="Skills"
            title="Technical toolkit"
            description="Languages and platforms I've used to ship full-stack features, cloud pipelines, and campus-scale systems."
          />
        </FadeIn>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group, index) => (
            <FadeIn key={group.category} delay={0.05 * index}>
              <div className="h-full rounded-xl border border-border bg-background p-6">
                <h3 className="font-display text-sm font-semibold tracking-tight text-foreground">
                  {group.category}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label={group.category}>
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border border-border bg-surface px-3 py-1.5 text-sm text-muted"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
