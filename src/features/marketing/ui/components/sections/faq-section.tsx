import { faqContent } from "@/features/marketing/content/faq";
import { Container } from "../shared/container";

export function FaqSection() {
  const { eyebrow, title, subtitle, items } = faqContent;

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="border-t border-border/60 py-16"
    >
      <Container>
        <header className="space-y-4">
          <p className="text-xs font-semibold tracking-widest text-muted-foreground">
            {eyebrow.toUpperCase()}
          </p>

          <h2
            id="faq-title"
            className="text-pretty text-3xl font-semibold md:text-4xl"
          >
            {title}
          </h2>

          <p className="text-pretty text-base text-muted-foreground md:text-lg">
            {subtitle}
          </p>
        </header>

        <div className="mt-10 grid gap-4">
          {items.map((item) => (
            <article
              key={item.question}
              className="rounded-2xl border border-border/60 bg-card p-6"
            >
              <h3 className="text-sm font-semibold text-foreground">
                {item.question}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.answer}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
