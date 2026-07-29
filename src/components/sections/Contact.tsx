import { siteConfig, socialLinks } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-border/60 bg-surface/40 py-20 sm:py-28"
      aria-labelledby="contact-heading"
    >
      <Container>
        <FadeIn>
          <SectionHeading
            id="contact-heading"
            eyebrow="Contact"
            title="Let's connect"
            description="Open to conversations about software engineering roles, technical collaboration, and opportunities at the intersection of full-stack, cloud, and AI systems."
          />
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="mt-10 max-w-2xl rounded-xl border border-border bg-background p-6 sm:p-8">
            <dl className="space-y-5">
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                  Location & work authorization
                </dt>
                <dd className="mt-1 text-base text-foreground">
                  {siteConfig.location}
                  <span className="text-muted"> · </span>
                  {siteConfig.citizenship}
                  <span className="text-muted"> · </span>
                  No sponsorship required
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                  Email
                </dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-base text-foreground transition-colors hover:text-accent"
                  >
                    {siteConfig.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                  GitHub
                </dt>
                <dd className="mt-1">
                  <a
                    href="https://github.com/yvajja22"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-foreground transition-colors hover:text-accent"
                  >
                    github.com/yvajja22
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                  LinkedIn
                </dt>
                <dd className="mt-1">
                  <a
                    href="https://linkedin.com/in/yatin-vajja"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-foreground transition-colors hover:text-accent"
                  >
                    linkedin.com/in/yatin-vajja
                  </a>
                </dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={`mailto:${siteConfig.email}`}>Send Email</Button>
              <Button href={siteConfig.resumePath} variant="secondary" download>
                Download Resume
              </Button>
              {socialLinks
                .filter((link) => link.label !== "Email")
                .map((link) => (
                  <Button
                    key={link.label}
                    href={link.href}
                    variant="ghost"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </Button>
                ))}
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
