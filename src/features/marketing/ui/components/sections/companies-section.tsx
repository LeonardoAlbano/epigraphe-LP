import { companiesContent } from "@/features/marketing/content/companies";
import { Container } from "../shared/container";

export function CompaniesSection() {
  const { title, subtitle, items } = companiesContent;

  return (
    <section
      id="empresas"
      aria-labelledby="companies-title"
      className="border-t border-border/60 py-12"
    >
      <Container>
        <header className="space-y-2">
          <h2
            id="companies-title"
            className="text-sm font-semibold tracking-wide text-foreground"
          >
            {title}
          </h2>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </header>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {items.map((item) => (
            <div
              key={item.name}
              className="flex h-12 items-center justify-center rounded-xl border border-border/60 bg-card text-xs font-medium text-muted-foreground"
            >
              {item.name}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
