import { finalCtaContent } from "@/features/marketing/content/final-cta";
import { Container } from "../shared/container";

export function FinalCtaSection() {
  const { eyebrow, title, subtitle, primaryAction, secondaryAction } =
    finalCtaContent;

  return (
    <section
      id="contato"
      aria-labelledby="final-cta-title"
      className="border-t border-border/60 bg-muted/40 py-20"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center space-y-6">
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

          <div className="flex flex-col items-center gap-3 pt-4 sm:flex-row sm:justify-center">
            <a
              href={primaryAction.href}
              className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground"
            >
              {primaryAction.label}
            </a>

            <a
              href={secondaryAction.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              {secondaryAction.label}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
