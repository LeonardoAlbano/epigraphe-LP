"use client";

import { Button } from "@/components/ui/button";
import { Brand } from "./brand";
import { MobileMenu } from "./mobile-menu";
import { NavLinks } from "./nav-links";
import { navItems } from "./nav-items";

export function MarketingNavbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/70 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Brand />

        <NavLinks items={navItems} />

        <div className="flex items-center gap-2">
          <Button asChild className="hidden lg:inline-flex">
            <a href="#contato">Agendar diagnóstico</a>
          </Button>

          <MobileMenu items={navItems} />
        </div>
      </div>
    </header>
  );
}
