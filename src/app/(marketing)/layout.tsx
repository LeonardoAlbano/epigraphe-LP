import type { ReactNode } from "react";
import { MarketingNavbar } from "@/features/marketing/ui/components/marketing-navbar/marketing-navbar";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <MarketingNavbar />
      <main className="min-h-screen">{children}</main>
    </>
  );
}
