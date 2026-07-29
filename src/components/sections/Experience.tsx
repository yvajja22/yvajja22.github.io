"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { experiences } from "@/lib/data";
import type { Experience } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

function StatusBadge({ status }: { status?: Experience["status"] }) {
  if (status === "upcoming") {
    return (
      <span className="rounded-md bg-accent-soft px-2 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
        Upcoming
      </span>
    );
  }
  return null;
}

export function Experience() {
  const [activeId, setActiveId] = useState(experiences[0]?.id ?? "");
  const active = experiences.find((item) => item.id === activeId) ?? experiences[0];

  return (
    <section
      id="experience"
      className="scroll-mt-24 border-y border-border/60 bg-surface/40 py-20 sm:py-28"
      aria-labelledby="experience-heading"
    >
      <Container>
        <FadeIn>
          <SectionHeading
            id="experience-heading"
            eyebrow="Experience"
            title="Career timeline"
            description="Roles that show progression from campus systems and enterprise delivery to an incoming full-time software engineering path."
          />
        </FadeIn>

        <div className="mt-12 grid gap-8 lg:grid-cols-[240px_1fr]">
          <FadeIn delay={0.05}>
            <ol className="relative space-y-1 border-l border-border pl-5" aria-label="Experience timeline">
              {experiences.map((item) => {
                const isActive = item.id === active.id;
                return (
                  <li key={item.id} className="relative">
                    <span
                      className={cn(
                        "absolute -left-[1.54rem] top-3 h-2.5 w-2.5 rounded-full border",
                        isActive
                          ? "border-accent bg-accent"
                          : "border-border bg-background",
                      )}
                      aria-hidden
                    />
                    <button
                      type="button"
                      onClick={() => setActiveId(item.id)}
                      className={cn(
                        "w-full rounded-md px-3 py-3 text-left transition-colors",
                        isActive
                          ? "bg-accent-soft text-foreground"
                          : "text-muted hover:bg-surface-elevated hover:text-foreground",
                      )}
                      aria-current={isActive ? "true" : undefined}
                    >
                      <p className="font-display text-sm font-medium">{item.company}</p>
                      <p className="mt-1 text-xs">{item.start} — {item.end}</p>
                    </button>
                  </li>
                );
              })}
            </ol>
          </FadeIn>

          <FadeIn delay={0.1}>
            <AnimatePresence mode="wait">
              <motion.article
                key={active.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-xl border border-border bg-background p-6 sm:p-8"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">
                      {active.role}
                    </h3>
                    <p className="mt-1 text-sm text-accent">{active.company}</p>
                  </div>
                  <StatusBadge status={active.status} />
                </div>

                <p className="mt-3 font-mono text-xs uppercase tracking-[0.14em] text-muted">
                  {active.start} — {active.end}
                  {active.location ? ` · ${active.location}` : ""}
                </p>

                <p className="mt-5 text-base leading-relaxed text-muted">
                  {active.summary}
                </p>

                {active.achievements?.length ? (
                  <ul className="mt-6 space-y-3">
                    {active.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="flex gap-3 text-sm leading-relaxed text-foreground/90"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-6 rounded-md border border-dashed border-border bg-surface/50 px-4 py-3 text-sm text-muted">
                    Role details will be added after I begin at Fidelity. No
                    projects, tools, or achievements are claimed ahead of start
                    date.
                  </p>
                )}
              </motion.article>
            </AnimatePresence>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
