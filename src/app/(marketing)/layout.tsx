import type { ReactNode } from "react";
import { MarketingNavbar } from "@/features/marketing/ui/components/marketing-navbar/marketing-navbar";
import { FooterSection } from "@/features/marketing/ui/components/footer/footer-section";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <MarketingNavbar />
      <main className="min-h-screen">{children}</main>
      <FooterSection />
    </>
  );
}
