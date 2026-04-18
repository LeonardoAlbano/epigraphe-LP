"use client";

import { useRef } from "react";
import { MessageSquareX, Layers, Gauge, Code2, type LucideIcon } from "lucide-react";

import { problemContent } from "@/features/marketing/content/problem";
import { Container } from "../shared/container";
import { useProblemCardsScroll } from "../../hooks/use-problem-cards-scroll";
import { SectionBadge } from "../shared/section-badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const CARD_ICONS: LucideIcon[] = [MessageSquareX, Layers, Gauge, Code2];

export function ProblemSection() {
  const { eyebrow, title, subtitle, items, highlight } = problemContent;

  const sectionRef = useRef<HTMLElement | null>(null);

  useProblemCardsScroll(sectionRef, { navOffset: 80 });

  return (
    <section
      ref={sectionRef}
      id="problema"
      aria-labelledby="problem-title"
      className="border-t border-border/60 py-24"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">

          {/* ── Coluna esquerda ── */}
          <header className="space-y-6">
            <SectionBadge label={eyebrow} variant="rose" />

            <div className="space-y-4">
              <h2
                id="problem-title"
                className="text-pretty text-3xl font-semibold tracking-tight md:text-4xl"
              >
                {title}
              </h2>
              <p className="text-pretty text-base text-muted-foreground md:text-lg">
                {subtitle}
              </p>
            </div>

            <Separator className="bg-border/50" />

            {/* Card "O resultado" */}
            <div
              className={cn(
                "rounded-2xl border border-border/50 bg-card/70 p-6 backdrop-blur-sm",
                "shadow-[0_0_0_1px_hsl(var(--border)/0.08),0_0_20px_hsl(var(--primary)/0.07),0_0_50px_hsl(var(--primary)/0.04)]",
              )}
            >
              <p className="mb-3 text-sm font-semibold text-foreground">
                {highlight.title}
              </p>
              <p className="text-sm leading-6 text-muted-foreground">
                {highlight.description}
              </p>
            </div>
          </header>

          {/* ── Coluna direita ── */}
          <div>
            {/* Mobile: grid estático */}
            <div className="grid gap-4 sm:grid-cols-2 lg:hidden">
              {items.map((item, idx) => (
                <ProblemCard
                  key={item.title}
                  item={item}
                  icon={CARD_ICONS[idx]}
                  index={idx}
                />
              ))}
            </div>

            {/* Desktop: stack animado — overflow-hidden corta cards que saem do bounds */}
            <div
              className="relative hidden overflow-hidden lg:block"
              style={{ height: "340px" }}
            >
              {items.map((item, idx) => (
                <div
                  key={item.title}
                  data-problem-card
                  className="absolute inset-0 transform-gpu"
                >
                  <ProblemCard
                    item={item}
                    icon={CARD_ICONS[idx]}
                    index={idx}
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}

/* ─── Card individual ─── */
type ProblemCardProps = {
  item: { title: string; description: string };
  icon: LucideIcon;
  index: number;
};

function ProblemCard({ item, icon: Icon, index }: ProblemCardProps) {
  return (
    <div
      className={cn(
        "group flex h-full flex-col justify-center gap-5 rounded-2xl px-7 py-6",
        "border border-[rgb(34_197_94/0.14)] bg-background/50 backdrop-blur-sm",
        "transition-all duration-500",
        "shadow-[0_0_22px_rgb(34_197_94/0.10),0_0_56px_rgb(34_197_94/0.05)]",
        "hover:border-[rgb(34_197_94/0.30)] hover:shadow-[0_0_28px_rgb(34_197_94/0.20),0_0_72px_rgb(34_197_94/0.10)]",
      )}
    >
      {/* Ícone + número */}
      <div className="flex items-center gap-4">
        <div
          className={cn(
            "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl",
            "border border-[rgb(34_197_94/0.30)] bg-[rgb(34_197_94/0.08)]",
            "shadow-[0_0_16px_rgb(34_197_94/0.30),0_0_44px_rgb(34_197_94/0.12),inset_0_0_12px_rgb(34_197_94/0.08)]",
            "transition-all duration-500",
            "group-hover:border-[rgb(34_197_94/0.55)] group-hover:shadow-[0_0_26px_rgb(34_197_94/0.48),0_0_64px_rgb(34_197_94/0.20),inset_0_0_16px_rgb(34_197_94/0.14)]",
          )}
        >
          <Icon className="h-5 w-5 text-[rgb(34_197_94)]" strokeWidth={1.6} />
        </div>

        <p className="text-[11px] font-semibold tracking-[0.24em] text-primary/45 uppercase">
          {String(index + 1).padStart(2, "0")}
        </p>
      </div>

      {/* Divisor neon */}
      <div className="h-px bg-linear-to-r from-primary/25 via-border/30 to-transparent" />

      {/* Conteúdo */}
      <div className="space-y-3">
        <h3 className="text-xl font-semibold leading-snug text-foreground">
          {item.title}
        </h3>
        <p className="text-sm leading-7 text-muted-foreground">
          {item.description}
        </p>
      </div>
    </div>
  );
}
