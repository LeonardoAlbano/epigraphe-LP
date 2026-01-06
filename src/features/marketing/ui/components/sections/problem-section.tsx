"use client";

import { useRef } from "react";
import { problemContent } from "@/features/marketing/content/problem";
import { Container } from "../shared/container";
import { useProblemCardsScroll } from "../../hooks/use-problem-cards-scroll";

export function ProblemSection() {
  const { eyebrow, title, subtitle, items, highlight } = problemContent;

  const sectionRef = useRef<HTMLElement | null>(null);

  useProblemCardsScroll(sectionRef, { navOffset: 180 });

  return (
    <section
      ref={sectionRef}
      id="problema"
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

          <div>
            <div className="grid gap-4 sm:grid-cols-2 lg:hidden">
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

            <div className="relative hidden min-h-85 lg:block overflow-hidden">
              {items.map((item, index) => (
                <article
                  key={item.title}
                  data-problem-card
                  style={{
                    opacity: index === 0 ? 1 : 0,
                    visibility: index === 0 ? "visible" : "hidden",
                  }}
                  className="absolute inset-0 transform-gpu will-change-[transform,opacity] rounded-2xl border border-border/60 bg-background/40 p-6"
                >
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
