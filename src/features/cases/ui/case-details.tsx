import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { CaseStudy } from "../content/cases";

export function CaseDetails({ data }: { data: CaseStudy }) {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-3">
            <div className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
              {data.client.name}
            </div>
            <h1 className="text-balance text-3xl font-bold md:text-5xl">
              {data.title}
            </h1>
            <p className="text-pretty text-xl text-muted-foreground">
              {data.summary}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {data.stack.map((t) => (
                <span
                  key={t}
                  className="rounded-full border bg-card/30 px-3 py-1 text-xs text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Contexto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                {data.context.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Escopo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <ul className="space-y-2">
                  {data.scope.map((s) => (
                    <li key={s} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-olive" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {data.notes?.length ? (
            <Card>
              <CardHeader>
                <CardTitle>Notas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                {data.notes.map((n) => (
                  <p key={n}>{n}</p>
                ))}
              </CardContent>
            </Card>
          ) : null}

          <div className="flex flex-col gap-3 sm:flex-row">
            {data.client.url ? (
              <Button asChild variant="secondary">
                <Link href={data.client.url} target="_blank" rel="noreferrer">
                  Visitar site do cliente
                </Link>
              </Button>
            ) : null}
            <Button asChild>
              <Link href="/cases">Voltar para cases</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}