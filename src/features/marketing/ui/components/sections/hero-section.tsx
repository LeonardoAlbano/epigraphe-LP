import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Container } from "../shared/container";

export function HeroSection() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative overflow-hidden py-20 md:py-32"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <header className="space-y-4">
              <h1
                id="hero-title"
                className="text-balance text-4xl font-bold leading-tight md:text-6xl"
              >
                Epigraphe Atelier Code
              </h1>

              <p className="text-pretty text-xl font-medium text-accent-foreground md:text-2xl">
                Escrevemos como artesãos. Entregamos como engenheiros.
              </p>

              <p className="text-lg text-muted-foreground">
                Do traço ao deploy.
              </p>
            </header>

            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="group relative w-full sm:w-auto">
                <div className="pointer-events-none absolute inset-0 rounded-full bg-emerald-400/10 blur-xl transition-all duration-300 group-hover:bg-emerald-400/20 group-hover:blur-2xl" />
                <div className="pointer-events-none absolute -inset-2 rounded-full bg-emerald-400/12 opacity-70 blur-2xl transition-all duration-300 group-hover:bg-emerald-400/20 group-hover:opacity-100" />

                <Button
                  asChild
                  size="lg"
                  className="relative h-10 w-full rounded-full border border-white/10 bg-white/5 px-7 text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300/35 hover:bg-white/8 hover:shadow-[0_0_0_1px_rgba(52,211,153,0.12),0_0_32px_rgba(52,211,153,0.16)] sm:w-auto"
                >
                  <a href="https://wa.me/" target="_blank" rel="noreferrer">
                    <span className="flex items-center gap-3">
                      <MessageCircle
                        size={20}
                        className="text-white/90 transition-all duration-300 group-hover:scale-110 group-hover:text-emerald-200"
                      />
                      <span className="font-medium">Falar no WhatsApp</span>
                    </span>
                  </a>
                </Button>
              </div>

              <div className="group relative w-full sm:w-auto">
                <div className="pointer-events-none absolute inset-0 rounded-full bg-sky-400/8 blur-xl transition-all duration-300 group-hover:bg-sky-400/16 group-hover:blur-2xl" />
                <div className="pointer-events-none absolute -inset-2 rounded-full bg-sky-400/10 opacity-60 blur-2xl transition-all duration-300 group-hover:bg-sky-400/18 group-hover:opacity-100" />

                <Button
                  asChild
                  size="lg"
                  className="relative h-10 w-full rounded-full border border-white/10 bg-white/5 px-7 text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-300/35 hover:bg-white/8 hover:shadow-[0_0_0_1px_rgba(125,211,252,0.12),0_0_32px_rgba(56,189,248,0.14)] sm:w-auto"
                >
                  <Link href="/cases">
                    <span className="flex items-center gap-3">
                      <span className="font-medium">Ver cases</span>
                      <ArrowRight
                        size={20}
                        className="text-white/90 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110 group-hover:text-sky-200"
                      />
                    </span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative h-64 w-64 md:h-80 md:w-80">
              <div className="absolute inset-0 rounded-full bg-linear-to-br from-olive via-moss to-lichen opacity-20 blur-2xl" />
              <div className="relative flex h-full w-full items-center justify-center rounded-full border-4 border-olive bg-card">
                <div className="space-y-2 text-center">
                  <div className="text-6xl font-mono font-bold text-primary">
                    E
                  </div>
                  <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                    Atelier Code
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
