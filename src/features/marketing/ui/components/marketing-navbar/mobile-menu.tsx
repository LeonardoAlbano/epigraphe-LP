"use client";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

type NavLinkItem = {
  label: string;
  href: string;
};

type MobileMenuProps = {
  items: readonly NavLinkItem[];
};

export function MobileMenu({ items }: MobileMenuProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="lg:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-[320px]">
        <div className="mt-6 flex flex-col gap-3">
          <div className="text-xs font-medium tracking-widest text-muted-foreground">
            NAVEGAÇÃO
          </div>

          <div className="mt-2 flex flex-col">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm text-foreground/90 transition-colors hover:bg-card"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="mt-4 flex flex-col gap-2">
            <Button asChild>
              <a href="#contato">Agendar diagnóstico</a>
            </Button>

            <Button variant="secondary" asChild>
              <a href="https://wa.me/" target="_blank" rel="noreferrer">
                Falar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
