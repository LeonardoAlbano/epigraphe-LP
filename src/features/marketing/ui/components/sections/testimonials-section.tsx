import { Quote } from "lucide-react";

import {
  testimonials,
  type Testimonial,
} from "@/features/marketing/content/testimonials";
import { Container } from "../shared/container";
import { CountryFlag } from "../shared/country-flag";
import { SectionBadge } from "../shared/section-badge";
import { cn } from "@/lib/utils";

export function TestimonialsSection() {
  return (
    <section
      id="depoimentos"
      aria-labelledby="testimonials-title"
      className="border-t border-border/60 py-24"
    >
      <Container>
        {/* Header */}
        <header className="space-y-4">
          <SectionBadge label="Depoimentos" variant="amber" />
          <h2
            id="testimonials-title"
            className="text-pretty text-3xl font-semibold tracking-tight md:text-4xl"
          >
            O que dizem os clientes
          </h2>
          <p className="max-w-xl text-base text-muted-foreground">
            Resultados reais de quem apostou em clareza, performance e execução
            orientada à conversão.
          </p>
        </header>

        {/* Grid 2×2 */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {testimonials.map((t) => (
            <TestimonialCard key={`${t.name}-${t.country}`} testimonial={t} />
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ─── Card ─── */
function TestimonialCard({ testimonial: t }: { testimonial: Testimonial }) {
  return (
    <figure
      className={cn(
        "group flex flex-col gap-5 rounded-2xl p-6",
        "border border-border/50 bg-background/50 backdrop-blur-sm",
        "transition-all duration-500",
        "shadow-[0_0_0_1px_rgb(251_191_36/0.12),0_0_20px_rgb(251_191_36/0.18),0_0_56px_rgb(251_191_36/0.10),0_0_100px_rgb(251_191_36/0.05)]",
        "hover:border-[rgb(251_191_36/0.28)] hover:shadow-[0_0_0_1px_rgb(251_191_36/0.22),0_0_28px_rgb(251_191_36/0.28),0_0_72px_rgb(251_191_36/0.16),0_0_120px_rgb(251_191_36/0.08)]",
      )}
    >
      {/* Ícone de aspas */}
      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[rgb(251_191_36/0.30)] bg-[rgb(251_191_36/0.08)] shadow-[0_0_14px_rgb(251_191_36/0.35),0_0_40px_rgb(251_191_36/0.14),inset_0_0_10px_rgb(251_191_36/0.08)] transition-all duration-500 group-hover:border-[rgb(251_191_36/0.55)] group-hover:shadow-[0_0_22px_rgb(251_191_36/0.50),0_0_60px_rgb(251_191_36/0.22),inset_0_0_14px_rgb(251_191_36/0.14)]">
        <Quote
          className="h-4 w-4 shrink-0 text-[rgb(251_191_36)]"
          strokeWidth={1.6}
        />
      </div>

      {/* Citação */}
      <blockquote className="flex-1 text-sm leading-7 text-foreground/80">
        {t.quote}
      </blockquote>

      {/* Resultado */}
      {t.result && (
        <div
          className={cn(
            "rounded-xl border border-[rgb(251_191_36/0.20)] bg-[rgb(251_191_36/0.06)] px-4 py-2.5",
            "text-xs leading-5 text-muted-foreground",
            "shadow-[inset_0_0_10px_rgb(251_191_36/0.04)]",
          )}
        >
          <span className="font-semibold text-[rgb(251_191_36/0.70)]">Resultado: </span>
          {t.result}
        </div>
      )}

      {/* Autor */}
      <figcaption className="flex items-center justify-between gap-3 border-t border-border/40 pt-4">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-foreground">
            {t.name}
          </p>
          {(t.role || t.company) && (
            <p className="truncate text-xs text-muted-foreground">
              {[t.role, t.company].filter(Boolean).join(" · ")}
            </p>
          )}
        </div>

        <CountryFlag code={t.country} />
      </figcaption>
    </figure>
  );
}
