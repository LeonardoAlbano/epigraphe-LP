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
              <Button
                asChild
                size="lg"
                className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <a href="https://wa.me/" target="_blank" rel="noreferrer">
                  <MessageCircle size={20} />
                  Falar no WhatsApp
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 bg-transparent hover:bg-muted"
              >
                <Link href="/cases">
                  Ver cases
                  <ArrowRight size={20} />
                </Link>
              </Button>
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
