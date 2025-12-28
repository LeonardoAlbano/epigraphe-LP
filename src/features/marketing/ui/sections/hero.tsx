import { Button } from "@/components/ui/button";
import { landingContent } from "../../content/landing";

export function Hero() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm text-muted-foreground">
          {landingContent.brand.name}
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          {landingContent.brand.tagline}
        </h1>
        <p className="mt-4 text-base text-muted-foreground">
          {landingContent.brand.tagline2}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button>Falar no WhatsApp</Button>
          <Button variant="secondary">Ver cases</Button>
        </div>
      </div>
    </section>
  );
}
