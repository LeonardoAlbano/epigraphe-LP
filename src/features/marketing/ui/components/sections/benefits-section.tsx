"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { benefitsContent } from "@/features/marketing/content/benefits";
import { Container } from "../shared/container";
import { SectionBadge } from "../shared/section-badge";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

// Neon azul: confiança, clareza, valor
const NEON = "96_165_250";

export function BenefitsSection() {
  const { eyebrow, title, subtitle, items } = benefitsContent;
  const sectionRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-benefit-card]");

      gsap.set(cards, { opacity: 0, y: 24 });

      ScrollTrigger.create({
        trigger: section,
        start: "top 72%",
        once: true,
        onEnter: () => {
          gsap.to(cards, {
            opacity: 1,
            y: 0,
            duration: 0.55,
            stagger: 0.08,
            ease: "power2.out",
          });
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="beneficios"
      aria-labelledby="benefits-title"
      className="border-t border-border/60 py-24"
    >
      <Container>
        <header className="space-y-5">
          <SectionBadge label={eyebrow} variant="blue" />

          <h2
            id="benefits-title"
            className="text-pretty text-3xl font-semibold md:text-4xl"
          >
            {title}
          </h2>

          <p className="max-w-2xl text-pretty text-base text-muted-foreground md:text-lg">
            {subtitle}
          </p>
        </header>

        {/* Grid com linhas conectoras neon */}
        <div
          className={cn(
            "mt-14 overflow-hidden rounded-2xl",
            "border border-[rgb(96_165_250/0.12)]",
            "shadow-[0_0_60px_rgb(96_165_250/0.05)]",
          )}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, i) => {
              const col3 = i % 3;       // coluna no grid de 3
              const col2 = i % 2;       // coluna no grid de 2
              const isLastRow3 = i >= items.length - 3;
              const isLastRow2 = i >= items.length - 2;

              return (
                <article
                  key={item.title}
                  data-benefit-card
                  className={cn(
                    "group relative p-7 transition-all duration-500",
                    `hover:bg-[rgb(${NEON}/0.04)]`,
                    // ── lg: grid 3 colunas ──
                    col3 < 2 && `lg:border-r lg:border-[rgb(${NEON}/0.12)]`,
                    !isLastRow3 && `lg:border-b lg:border-[rgb(${NEON}/0.12)]`,
                    // ── sm: grid 2 colunas ──
                    col2 === 0 && `sm:max-lg:border-r sm:max-lg:border-[rgb(${NEON}/0.12)]`,
                    !isLastRow2 && `sm:max-lg:border-b sm:max-lg:border-[rgb(${NEON}/0.12)]`,
                    // ── mobile: coluna única ──
                    i < items.length - 1 && `max-sm:border-b max-sm:border-[rgb(${NEON}/0.12)]`,
                  )}
                >
                  {/* Dot + número */}
                  <div className="mb-5 flex items-center gap-2.5">
                    <span
                      className={cn(
                        "block h-1.5 w-1.5 rounded-full",
                        `bg-[rgb(${NEON})]`,
                        `shadow-[0_0_8px_rgb(${NEON}/0.80)]`,
                      )}
                    />
                    <span
                      className={`text-[10px] font-semibold tracking-[0.20em] text-[rgb(${NEON}/0.45)] uppercase`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="text-sm font-semibold leading-snug text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>

                  {/* Glow corner no hover */}
                  <div
                    className={cn(
                      "pointer-events-none absolute inset-0 rounded-none opacity-0 transition-opacity duration-500",
                      "group-hover:opacity-100",
                      `[background:radial-gradient(ellipse_at_top_left,rgb(${NEON}/0.06)_0%,transparent_70%)]`,
                    )}
                  />
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
