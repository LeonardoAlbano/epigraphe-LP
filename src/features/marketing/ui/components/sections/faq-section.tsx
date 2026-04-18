"use client";

import { faqContent } from "@/features/marketing/content/faq";
import { Container } from "../shared/container";
import { SectionBadge } from "../shared/section-badge";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection() {
  const { eyebrow, title, subtitle, items } = faqContent;

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="border-t border-border/60 py-24"
    >
      <Container>
        <header className="space-y-5">
          <SectionBadge label={eyebrow} variant="cyan" />

          <h2
            id="faq-title"
            className="text-pretty text-3xl font-semibold md:text-4xl"
          >
            {title}
          </h2>

          <p className="max-w-2xl text-pretty text-base text-muted-foreground md:text-lg">
            {subtitle}
          </p>
        </header>

        <div className="mt-10">
          <Accordion type="single" collapsible className="w-full">
            {items.map((item) => (
              <AccordionItem
                key={item.question}
                value={item.question}
                className="border-b border-border/60"
              >
                <AccordionTrigger className="py-6 text-left text-base font-medium text-foreground hover:no-underline">
                  {item.question}
                </AccordionTrigger>

                <AccordionContent className="pb-6 text-sm leading-relaxed text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}
