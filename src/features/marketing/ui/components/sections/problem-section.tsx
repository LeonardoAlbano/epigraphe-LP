import { problemContent } from "@/features/marketing/content/problem";
import { Container } from "../shared/container";

export function ProblemSection() {
  const { eyebrow, title, subtitle, items, highlight } = problemContent;

  return (
    <section
      id="problema"
      aria-labelledby="problem-title"
      className="border-t border-border/60 py-16"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <header className="space-y-4">
            <p className="text-xs font-semibold tracking-widest text-muted-foreground">
              {eyebrow.toUpperCase()}
            </p>

            <h2
              id="problem-title"
              className="text-pretty text-3xl font-semibold md:text-4xl"
            >
              {title}
            </h2>

            <p className="text-pretty text-base text-muted-foreground md:text-lg">
              {subtitle}
            </p>

            <div className="rounded-2xl border border-border/60 bg-card p-5">
              <div className="text-sm font-semibold text-foreground">
                {highlight.title}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {highlight.description}
              </p>
            </div>
          </header>

          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-border/60 bg-background/40 p-5"
              >
                <h3 className="text-sm font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
