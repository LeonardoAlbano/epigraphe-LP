"use client";

import { useActionState, useEffect, useRef } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

import { marketsContent } from "@/features/marketing/content/markets";
import {
  sendContactEmail,
  type ContactState,
} from "@/app/actions/contact";
import { Container } from "../shared/container";
import { SectionBadge } from "../shared/section-badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const COUNTRIES: { code: "BR" | "PT" | "ES"; label: string; detail: string }[] = [
  { code: "BR", label: "Brasil", detail: "Joinville/SC + remoto" },
  { code: "PT", label: "Portugal", detail: "Projetos remotos" },
  { code: "ES", label: "Espanha", detail: "Projetos remotos" },
];

const NEON = "129_140_248"; // indigo

/* ─── Formulário ─── */
const INITIAL_STATE: ContactState = { status: "idle" };

function ContactForm() {
  const [state, action, pending] = useActionState(sendContactEmail, INITIAL_STATE);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  return (
    <form ref={formRef} action={action} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="name" className="text-xs font-medium text-muted-foreground">
            Nome
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="Seu nome"
            required
            disabled={pending}
            className={cn(
              "border-border/60 bg-background/40 text-sm placeholder:text-muted-foreground/50",
              `focus-visible:border-[rgb(${NEON}/0.50)] focus-visible:ring-[rgb(${NEON}/0.20)]`,
            )}
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email" className="text-xs font-medium text-muted-foreground">
            E-mail
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="seu@email.com"
            required
            disabled={pending}
            className={cn(
              "border-border/60 bg-background/40 text-sm placeholder:text-muted-foreground/50",
              `focus-visible:border-[rgb(${NEON}/0.50)] focus-visible:ring-[rgb(${NEON}/0.20)]`,
            )}
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message" className="text-xs font-medium text-muted-foreground">
          Sobre o projeto
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Descreva brevemente o que você precisa..."
          rows={4}
          required
          disabled={pending}
          className={cn(
            "resize-none border-border/60 bg-background/40 text-sm placeholder:text-muted-foreground/50",
            `focus-visible:border-[rgb(${NEON}/0.50)] focus-visible:ring-[rgb(${NEON}/0.20)]`,
          )}
        />
      </div>

      {/* Feedback */}
      {state.status === "success" && (
        <div className={`flex items-center gap-2 rounded-xl border border-[rgb(34_197_94/0.25)] bg-[rgb(34_197_94/0.06)] px-4 py-3 text-sm text-[rgb(34_197_94)]`}>
          <CheckCircle2 className="h-4 w-4 shrink-0" />
          Mensagem enviada! Entrarei em contato em breve.
        </div>
      )}
      {state.status === "error" && (
        <div className="flex items-center gap-2 rounded-xl border border-[rgb(251_113_133/0.25)] bg-[rgb(251_113_133/0.06)] px-4 py-3 text-sm text-[rgb(251_113_133)]">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {state.message}
        </div>
      )}

      <Button
        type="submit"
        disabled={pending}
        className={cn(
          "mt-1 w-full gap-2 rounded-xl font-medium",
          `bg-[rgb(${NEON}/0.15)] border border-[rgb(${NEON}/0.30)] text-[rgb(${NEON})]`,
          `hover:bg-[rgb(${NEON}/0.22)] hover:border-[rgb(${NEON}/0.50)]`,
          `shadow-[0_0_16px_rgb(${NEON}/0.20)] hover:shadow-[0_0_24px_rgb(${NEON}/0.30)]`,
          "transition-all duration-300",
        )}
      >
        <Send className="h-4 w-4" />
        {pending ? "Enviando..." : "Enviar mensagem"}
      </Button>
    </form>
  );
}

/* ─── Section ─── */
export function MarketsSection() {
  const { eyebrow, title, subtitle, expansion } = marketsContent;

  return (
    <section
      id="atuacao"
      aria-labelledby="markets-title"
      className="border-t border-border/60 py-24"
    >
      <Container>
        <div
          className={cn(
            "rounded-3xl border border-border/60 bg-card/40 p-8 md:p-10",
            `shadow-[0_0_60px_rgb(${NEON}/0.05)]`,
          )}
        >
          <div className="grid gap-10 lg:grid-cols-2">
            {/* ── Esquerda: info + bandeiras ── */}
            <div className="space-y-8">
              <header className="space-y-4">
                <SectionBadge label={eyebrow} variant="indigo" />

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

              {/* Bandeiras circulares */}
              <div>
                <p className="mb-5 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                  Países atendidos
                </p>
                <div className="flex items-start gap-6">
                  {COUNTRIES.map((c) => (
                    <div key={c.code} className="flex flex-col items-center gap-2">
                      <div
                        className={cn(
                          "h-14 w-14 overflow-hidden rounded-full",
                          `ring-2 ring-[rgb(${NEON}/0.20)]`,
                          `shadow-[0_0_16px_rgb(${NEON}/0.18)]`,
                        )}
                        role="img"
                        aria-label={c.label}
                        title={c.label}
                      >
                        {c.code === "BR" && (
                          <svg viewBox="0 0 20 14" className="h-full w-full" aria-hidden>
                            <rect width="20" height="14" fill="#009c3b" />
                            <polygon points="10,1.4 18.6,7 10,12.6 1.4,7" fill="#ffdf00" />
                            <circle cx="10" cy="7" r="3.2" fill="#002776" />
                            <rect x="6.2" y="6.55" width="7.6" height="0.9" fill="#fff" rx="0.45" />
                          </svg>
                        )}
                        {c.code === "PT" && (
                          <svg viewBox="0 0 20 14" className="h-full w-full" aria-hidden>
                            <rect width="20" height="14" fill="#dc241f" />
                            <rect width="8" height="14" fill="#006600" />
                            <circle cx="8" cy="7" r="2.4" fill="#ffdf00" stroke="#dc241f" strokeWidth="0.5" />
                            <circle cx="8" cy="7" r="1.2" fill="none" stroke="#002776" strokeWidth="0.7" />
                          </svg>
                        )}
                        {c.code === "ES" && (
                          <svg viewBox="0 0 20 14" className="h-full w-full" aria-hidden>
                            <rect width="20" height="14" fill="#c60b1e" />
                            <rect y="3.5" width="20" height="7" fill="#ffc400" />
                          </svg>
                        )}
                      </div>
                      <span className="text-xs font-medium text-foreground/80">
                        {c.label}
                      </span>
                      <span className="text-[10px] text-muted-foreground">
                        {c.detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expansão */}
              <div>
                <p className="mb-3 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                  Expansão
                </p>
                <p className="mb-3 text-sm text-muted-foreground">
                  Aberto a projetos internacionais com processo e entregas padronizadas.
                </p>
                <div className="flex flex-wrap gap-2">
                  {expansion.map((item) => (
                    <span
                      key={item}
                      className={`rounded-full border border-[rgb(${NEON}/0.25)] bg-[rgb(${NEON}/0.06)] px-3 py-1 text-xs text-[rgb(${NEON}/0.80)]`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Direita: formulário ── */}
            <div
              className={cn(
                "rounded-2xl border border-border/60 bg-background/30 p-6",
                `shadow-[inset_0_0_30px_rgb(${NEON}/0.03)]`,
              )}
            >
              <p className="mb-1 text-base font-semibold text-foreground">
                Fale sobre o seu projeto
              </p>
              <p className="mb-6 text-sm text-muted-foreground">
                Respondo em até 24h.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
