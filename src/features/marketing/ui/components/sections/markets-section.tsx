import { Globe } from "lucide-react";

import { marketsContent } from "@/features/marketing/content/markets";
import { Container } from "../shared/container";

export function MarketsSection() {
  const { eyebrow, title, subtitle, served, expansion } = marketsContent;

  return (
    <section
      id="atuacao"
      aria-labelledby="markets-title"
      className="border-t border-border/60 py-16"
    >
      <Container>
        <div className="rounded-3xl border border-border/60 bg-card/40 p-8 md:p-10">
          <header className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-muted-foreground">
              <Globe className="h-4 w-4" />
              {eyebrow.toUpperCase()}
            </div>

            <h2
              id="markets-title"
              className="text-pretty text-3xl font-semibold md:text-4xl"
            >
              {title}
            </h2>

            <p className="text-pretty text-base text-muted-foreground md:text-lg">
              {subtitle}
            </p>
          </header>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border/60 bg-background/30 p-6">
              <div className="text-sm font-semibold">Países atendidos</div>
              <div className="mt-4 space-y-3">
                {served.map((c) => (
                  <div
                    key={c.name}
                    className="flex items-center justify-between gap-4 rounded-2xl border border-border/60 bg-background/20 px-4 py-3"
                  >
                    <div className="text-sm font-medium">{c.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {c.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border/60 bg-background/30 p-6">
              <div className="text-sm font-semibold">Expansão</div>
              <p className="mt-2 text-sm text-muted-foreground">
                Aberto a projetos internacionais com processo e entregas
                padronizadas.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {expansion.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border/60 bg-background/20 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
