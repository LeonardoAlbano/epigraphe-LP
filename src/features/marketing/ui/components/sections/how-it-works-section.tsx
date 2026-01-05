import { howItWorksContent } from "@/features/marketing/content/how-it-works";
import { Container } from "../shared/container";

export function HowItWorksSection() {
  const { eyebrow, title, subtitle, steps } = howItWorksContent;

  return (
    <section
      id="processo"
      aria-labelledby="how-it-works-title"
      className="border-t border-border/60 py-16"
    >
      <Container>
        <header className="space-y-4">
          <p className="text-xs font-semibold tracking-widest text-muted-foreground">
            {eyebrow.toUpperCase()}
          </p>

          <h2
            id="how-it-works-title"
            className="text-pretty text-3xl font-semibold md:text-4xl"
          >
            {title}
          </h2>

          <p className="text-pretty text-base text-muted-foreground md:text-lg">
            {subtitle}
          </p>
        </header>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-2xl border border-border/60 bg-card p-6"
            >
              <div className="text-xs font-mono text-muted-foreground">
                {step.number}
              </div>
              <h3 className="mt-2 text-sm font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
