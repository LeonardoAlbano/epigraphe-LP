import Image from "next/image";

import { companiesContent } from "@/features/marketing/content/companies";
import { Container } from "../shared/container";

export function CompaniesSection() {
  const { title, subtitle, items } = companiesContent;

  const track = [...items, ...items, ...items, ...items];

  return (
    <section
      id="empresas"
      aria-labelledby="companies-title"
      className="border-t border-border/60 py-12"
    >
      <Container>
        <header className="space-y-2">
          <h2
            id="companies-title"
            className="text-sm font-semibold tracking-wide text-foreground"
          >
            {title}
          </h2>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </header>

        <div className="mt-8">
          <div className="relative overflow-hidden py-4">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-background to-transparent" />

            <div
              className="flex w-max items-center gap-14 whitespace-nowrap will-change-transform animate-[companies-marquee_34s_linear_infinite] motion-reduce:animate-none"
              aria-label="Logos de empresas"
            >
              {track.map((item, index) => (
                <div
                  key={`${item.name}-${index}`}
                  className="flex h-16 items-center justify-center"
                >
                  <Image
                    src={item.logoSrc ?? ""}
                    alt={item.alt ?? item.name}
                    width={220}
                    height={80}
                    className="h-11 w-auto max-w-55 opacity-70 grayscale transition-opacity duration-300 hover:opacity-95"
                    priority={index < items.length}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
