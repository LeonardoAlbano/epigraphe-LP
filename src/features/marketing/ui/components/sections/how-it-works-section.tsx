import { howItWorksContent } from "@/features/marketing/content/how-it-works";
import { Container } from "../shared/container";
import { SectionBadge } from "../shared/section-badge";
import { cn } from "@/lib/utils";

export function HowItWorksSection() {
  const { eyebrow, title, subtitle, steps } = howItWorksContent;

  return (
    <section
      id="processo"
      aria-labelledby="how-it-works-title"
      className="border-t border-border/60 py-24"
    >
      <Container>
        <header className="space-y-5">
          <SectionBadge label={eyebrow} variant="orange" />

          <h2
            id="how-it-works-title"
            className="text-pretty text-3xl font-semibold md:text-4xl"
          >
            {title}
          </h2>

          <p className="max-w-2xl text-pretty text-base text-muted-foreground md:text-lg">
            {subtitle}
          </p>
        </header>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {steps.map((step, i) => (
            <article
              key={step.number}
              className={cn(
                "group rounded-2xl border border-border/60 bg-card/60 p-6",
                "transition-all duration-500",
                "hover:border-[rgb(251_146_60/0.20)] hover:shadow-[0_0_24px_rgb(251_146_60/0.10)]",
              )}
            >
              <div className="mb-3 flex items-center gap-2">
                <span
                  className={cn(
                    "flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-semibold",
                    "border border-[rgb(251_146_60/0.35)] bg-[rgb(251_146_60/0.08)]",
                    "text-[rgb(251_146_60)] shadow-[0_0_10px_rgb(251_146_60/0.25)]",
                  )}
                >
                  {i + 1}
                </span>
                <div className="h-px flex-1 bg-linear-to-r from-[rgb(251_146_60/0.20)] to-transparent" />
              </div>
              <h3 className="text-sm font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
