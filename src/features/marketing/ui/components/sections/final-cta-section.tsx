import { finalCtaContent } from "@/features/marketing/content/final-cta";
import { Container } from "../shared/container";

import { Button } from "@/components/ui/button";

export function FinalCtaSection() {
  const { eyebrow, title, subtitle, primaryAction, secondaryAction } =
    finalCtaContent;

  return (
    <section
      id="contato"
      aria-labelledby="final-cta-title"
      className="bg-muted/40 py-20"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center space-y-6 pt-10">
          <p className="text-xs font-semibold tracking-widest text-muted-foreground">
            {eyebrow.toUpperCase()}
          </p>

          <h2
            id="final-cta-title"
            className="text-pretty text-3xl font-semibold md:text-4xl"
          >
            {title}
          </h2>

          <p className="text-pretty text-base text-muted-foreground md:text-lg">
            {subtitle}
          </p>

          <div className="flex flex-col items-center gap-3 pt-6 sm:flex-row sm:justify-center">
            {/* Botão principal (CTA principal) */}
            <Button asChild size="lg" className="rounded-xl px-8 font-medium">
              <a href={primaryAction.href}>{primaryAction.label}</a>
            </Button>

            {/* Link secundário */}
            <Button
              asChild
              variant="link"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              <a
                href={secondaryAction.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {secondaryAction.label}
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
