"use client";

import Link from "next/link";
import { footerContent } from "@/features/marketing/content/footer";
import { Container } from "../shared/container";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export function FooterSection() {
  const { brand, columns, bottom } = footerContent;

  return (
    <footer className="border-t border-border/60 bg-background/50 backdrop-blur-sm">
      <Container>
        <div className="grid gap-10 py-16 md:grid-cols-12">
          <div className="space-y-4 md:col-span-5">
            <div className="text-sm font-bold tracking-wider text-foreground">
              {brand.name}
            </div>
            <p className="text-sm text-muted-foreground/90 leading-relaxed">
              {brand.tagline}
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:col-span-7 md:justify-items-end">
            {columns.map((col) => (
              <div key={col.title} className="space-y-4">
                <div className="text-xs font-bold tracking-widest text-foreground/70 uppercase">
                  {col.title}
                </div>

                <ul className="space-y-3">
                  {col.links.map((l) => {
                    const isExternal =
                      l.href.startsWith("http") ||
                      l.href.startsWith("mailto:") ||
                      l.href.startsWith("tel:");

                    return (
                      <li key={l.href}>
                        {isExternal ? (
                          <Button
                            variant="link"
                            asChild
                            className="p-0 h-auto text-sm text-muted-foreground/80 hover:text-foreground hover:underline underline-offset-2"
                          >
                            <a
                              href={l.href}
                              target={
                                l.href.startsWith("http") ? "_blank" : undefined
                              }
                              rel={
                                l.href.startsWith("http")
                                  ? "noopener noreferrer"
                                  : undefined
                              }
                            >
                              {l.label}
                            </a>
                          </Button>
                        ) : (
                          <Button
                            variant="link"
                            asChild
                            className="p-0 h-auto text-sm text-muted-foreground/80 hover:text-foreground hover:underline underline-offset-2"
                          >
                            <Link href={l.href}>{l.label}</Link>
                          </Button>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Separador do rodapé inferior */}
        <Separator className="bg-border/40" />

        <div className="flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-muted-foreground/70 leading-relaxed">
            {bottom.copyright}
          </p>

          <div className="flex gap-6">
            {bottom.links.map((l) => (
              <Button
                key={l.label}
                variant="link"
                asChild
                className="p-0 h-auto text-xs text-muted-foreground/70 hover:text-foreground hover:underline underline-offset-2"
              >
                <Link href={l.href}>{l.label}</Link>
              </Button>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
