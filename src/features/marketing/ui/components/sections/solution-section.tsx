import { CheckCircle2, Code2, Layers, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { solutionContent } from "@/features/marketing/content/solution";
import { Container } from "../shared/container";
import { SectionBadge } from "../shared/section-badge";
import { cn } from "@/lib/utils";

const PILLAR_ICONS: LucideIcon[] = [CheckCircle2, Layers, Zap, Code2];

export function SolutionSection() {
  const { eyebrow, title, subtitle, pillars, note } = solutionContent;

  return (
    <section
      id="solucao"
      aria-labelledby="solution-title"
      className="border-t border-border/60 py-24"
    >
      <Container>
        <header className="space-y-5">
          <SectionBadge label={eyebrow} variant="green" />

          <h2
            id="solution-title"
            className="text-pretty text-3xl font-semibold md:text-4xl"
          >
            {title}
          </h2>

          <p className="max-w-2xl text-pretty text-base text-muted-foreground md:text-lg">
            {subtitle}
          </p>
        </header>

        {/* Pilares com grid conectado */}
        <div className="mt-14 overflow-hidden rounded-2xl border border-[rgb(34_197_94/0.12)] shadow-[0_0_60px_rgb(34_197_94/0.05)]">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {pillars.map((item, i) => {
              const Icon = PILLAR_ICONS[i];
              const isRightCol = i % 2 !== 0;
              const isFirstRow = i < 2;

              return (
                <article
                  key={item.title}
                  className={cn(
                    "group relative p-7 transition-all duration-500",
                    "hover:bg-[rgb(34_197_94/0.03)]",
                    !isRightCol && "sm:border-r sm:border-[rgb(34_197_94/0.12)]",
                    isFirstRow && "border-b border-[rgb(34_197_94/0.12)]",
                  )}
                >
                  <div className="mb-5 flex items-center gap-3">
                    <div
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-xl",
                        "border border-[rgb(34_197_94/0.30)] bg-[rgb(34_197_94/0.08)]",
                        "shadow-[0_0_14px_rgb(34_197_94/0.25),inset_0_0_10px_rgb(34_197_94/0.06)]",
                        "transition-all duration-500",
                        "group-hover:border-[rgb(34_197_94/0.50)] group-hover:shadow-[0_0_22px_rgb(34_197_94/0.40),inset_0_0_14px_rgb(34_197_94/0.10)]",
                      )}
                    >
                      <Icon className="h-4 w-4 text-[rgb(34_197_94)]" strokeWidth={1.6} />
                    </div>
                    <span className="text-[10px] font-semibold tracking-[0.2em] text-[rgb(34_197_94/0.45)] uppercase">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        {/* Nota final */}
        <div className="mt-5 rounded-2xl border border-[rgb(34_197_94/0.15)] bg-[rgb(34_197_94/0.04)] p-6 shadow-[inset_0_0_30px_rgb(34_197_94/0.03)]">
          <p className="text-sm font-semibold text-foreground">{note.title}</p>
          <p className="mt-1.5 text-sm text-muted-foreground">
            {note.description}
          </p>
        </div>
      </Container>
    </section>
  );
}
