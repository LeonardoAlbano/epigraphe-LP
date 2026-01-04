import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { caseStudies } from "../content/cases";
import { Button } from "@/components/ui/button";

export function CaseList() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h1 className="text-balance text-3xl font-bold md:text-5xl">Cases</h1>
          <p className="text-pretty text-xl text-muted-foreground">
            Página detalhada por projeto, com escopo e stack.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((c) => (
            <Card key={c.slug} className="h-full">
              <CardHeader className="space-y-2">
                <div className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
                  {c.client.name}
                </div>
                <CardTitle className="text-xl">{c.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{c.summary}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {c.stack.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="rounded-full border bg-card/30 px-3 py-1 text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Button asChild className="w-full" variant="secondary">
                  <Link href={`/cases/${c.slug}`}>Ver detalhes</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button asChild>
            <Link href="/">Voltar para a home</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}