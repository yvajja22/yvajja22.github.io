import { projects } from "@/lib/data";
import type { Project } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isSoon = project.status === "coming-soon";

  return (
    <FadeIn delay={0.05 * index} className="h-full">
      <article
        className={cn(
          "group flex h-full flex-col rounded-xl border border-border bg-surface p-6 transition-colors duration-300",
          !isSoon && "hover:border-accent/35 hover:bg-surface-elevated",
          isSoon && "border-dashed opacity-90",
        )}
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-lg font-semibold tracking-tight text-foreground">
              {project.title}
            </h3>
            {project.period ? (
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                {project.period}
              </p>
            ) : null}
          </div>
          {isSoon ? (
            <span className="shrink-0 rounded-md bg-surface-elevated px-2 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
              Coming soon
            </span>
          ) : null}
        </div>

        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        {project.impact?.length ? (
          <ul className="mt-5 space-y-2">
            {project.impact.map((item) => (
              <li
                key={item}
                className="flex gap-2 text-sm text-foreground/90"
              >
                <span className="text-accent" aria-hidden>
                  →
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border bg-background/60 px-2.5 py-1 font-mono text-[11px] text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </article>
    </FadeIn>
  );
}

export function Projects() {
  const shipped = projects.filter((project) => project.status === "shipped");
  const upcoming = projects.filter((project) => project.status === "coming-soon");

  return (
    <section
      id="projects"
      className="scroll-mt-24 py-20 sm:py-28"
      aria-labelledby="projects-heading"
    >
      <Container>
        <FadeIn>
          <SectionHeading
            id="projects-heading"
            eyebrow="Projects"
            title="Selected work and what's next"
            description="Shipped systems with clear outcomes, plus placeholders for upcoming AI engineering projects."
          />
        </FadeIn>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {shipped.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <FadeIn delay={0.08}>
          <h3 className="mt-14 font-display text-lg font-semibold tracking-tight text-foreground">
            AI engineering — in progress
          </h3>
          <p className="mt-2 max-w-2xl text-sm text-muted">
            Exploratory projects focused on LLMs, retrieval systems, and agents.
            Cards below are intentional placeholders until work is ready to share.
          </p>
        </FadeIn>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {upcoming.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index + shipped.length}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
