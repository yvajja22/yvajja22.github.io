"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { heroHighlights, siteConfig, socialLinks } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const transition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const };

  const fade = (delay: number) => ({
    initial: prefersReducedMotion ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { ...transition, delay: prefersReducedMotion ? 0 : delay },
  });

  return (
    <section
      id="top"
      className="relative min-h-[92vh] overflow-hidden pb-20 pt-28 sm:pb-28 sm:pt-36"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0">
        <Image
          src={siteConfig.dallasImage.src}
          alt={siteConfig.dallasImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%]"
        />
        <div className="hero-image-overlay absolute inset-0" />
        <div className="absolute inset-0 bg-atmosphere opacity-70" />
        <div className="absolute inset-0 grid-fade opacity-40" />
      </div>

      <Container className="relative flex min-h-[calc(92vh-8rem)] flex-col justify-center">
        <div className="max-w-3xl">
          <motion.p
            {...fade(0)}
            className="font-mono text-xs uppercase tracking-[0.22em] text-accent"
          >
            Incoming Software Engineer · Fidelity Investments
          </motion.p>

          <motion.h1
            id="hero-heading"
            {...fade(0.08)}
            className="mt-5 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            {siteConfig.name}
          </motion.h1>

          <motion.p
            {...fade(0.14)}
            className="mt-3 font-display text-xl text-muted sm:text-2xl"
          >
            {siteConfig.title}
            <span className="text-muted/70"> · </span>
            {siteConfig.location}
          </motion.p>

          <motion.p
            {...fade(0.2)}
            className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {siteConfig.description}
          </motion.p>

          <motion.ul
            {...fade(0.26)}
            className="mt-8 flex flex-wrap gap-2"
            aria-label="Highlights"
          >
            {heroHighlights.map((highlight) => (
              <li
                key={highlight}
                className="rounded-md border border-border/80 bg-background/55 px-3 py-1.5 text-xs text-muted backdrop-blur-md sm:text-sm"
              >
                {highlight}
              </li>
            ))}
          </motion.ul>

          <motion.div {...fade(0.32)} className="mt-10 flex flex-wrap gap-3">
            <Button href="#projects">View Projects</Button>
            <Button href={siteConfig.resumePath} variant="secondary" download>
              Download Resume
            </Button>
            {socialLinks.map((link) => (
              <Button
                key={link.label}
                href={link.href}
                variant="ghost"
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                {link.label === "Email" ? "Contact" : link.label}
              </Button>
            ))}
          </motion.div>
        </div>

        <motion.p
          {...fade(0.4)}
          className="mt-16 font-mono text-[11px] uppercase tracking-[0.18em] text-muted/80"
        >
          {siteConfig.dallasImage.credit}
        </motion.p>
      </Container>
    </section>
  );
}
