import { testimonials } from "@/features/marketing/content/testimonials";

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="pb-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight">Depoimentos</h2>
          <p className="mt-3 text-base text-muted-foreground">
            Prova social real. Se ainda não tiver autorização para nomes, use
            “empresa + cargo” ou anonimizado.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={`${t.name}-${t.quote}`}
              className="rounded-2xl border bg-card p-6 shadow-sm"
            >
              <blockquote className="text-sm leading-relaxed text-foreground/90">
                “{t.quote}”
              </blockquote>

              <figcaption className="mt-5 text-sm">
                <div className="font-semibold">{t.name}</div>
                <div className="text-muted-foreground">
                  {[t.role, t.company].filter(Boolean).join(" • ")}
                </div>
                {t.result ? (
                  <div className="mt-3 rounded-xl border px-4 py-3 text-xs text-muted-foreground">
                    Resultado: {t.result}
                  </div>
                ) : null}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
