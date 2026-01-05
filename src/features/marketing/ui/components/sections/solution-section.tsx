import { solutionContent } from "@/features/marketing/content/solution";
import { Container } from "../shared/container";

export function SolutionSection() {
  const { eyebrow, title, subtitle, pillars, note } = solutionContent;

  return (
    <section
      id="solucao"
      aria-labelledby="solution-title"
      className="border-t border-border/60 py-16"
    >
      <Container>
        <header className="space-y-4">
          <p className="text-xs font-semibold tracking-widest text-muted-foreground">
            {eyebrow.toUpperCase()}
          </p>

          <h2
            id="solution-title"
            className="text-pretty text-3xl font-semibold md:text-4xl"
          >
            {title}
          </h2>

          <p className="text-pretty text-base text-muted-foreground md:text-lg">
            {subtitle}
          </p>
        </header>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {pillars.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-border/60 bg-card p-5"
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

        <div className="mt-10 rounded-2xl border border-border/60 bg-background/40 p-6">
          <div className="text-sm font-semibold text-foreground">
            {note.title}
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            {note.description}
          </p>
        </div>
      </Container>
    </section>
  );
}
