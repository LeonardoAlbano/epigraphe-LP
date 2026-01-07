"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

function getTechBadgeClass(tag: string) {
  const map: Record<string, string> = {
    "Next.js":
      "border-zinc-200/30 text-zinc-100 shadow-[0_0_18px_rgba(244,244,245,0.22)]",
    React:
      "border-sky-300/35 text-sky-200 shadow-[0_0_18px_rgba(56,189,248,0.22)]",
    "Tailwind CSS":
      "border-cyan-300/35 text-cyan-200 shadow-[0_0_18px_rgba(34,211,238,0.22)]",
    TypeScript:
      "border-blue-300/35 text-blue-200 shadow-[0_0_18px_rgba(59,130,246,0.22)]",
    JavaScript:
      "border-amber-300/35 text-amber-200 shadow-[0_0_18px_rgba(251,191,36,0.22)]",
    "Node.js":
      "border-emerald-300/35 text-emerald-200 shadow-[0_0_18px_rgba(16,185,129,0.20)]",
    Prisma:
      "border-teal-300/35 text-teal-200 shadow-[0_0_18px_rgba(45,212,191,0.20)]",
    PostgreSQL:
      "border-indigo-300/35 text-indigo-200 shadow-[0_0_18px_rgba(129,140,248,0.20)]",
    MySQL:
      "border-orange-300/35 text-orange-200 shadow-[0_0_18px_rgba(251,146,60,0.20)]",
    Docker:
      "border-sky-300/35 text-sky-200 shadow-[0_0_18px_rgba(56,189,248,0.20)]",
    Vercel:
      "border-zinc-200/30 text-zinc-100 shadow-[0_0_18px_rgba(244,244,245,0.18)]",
    "SEO técnico":
      "border-lime-300/35 text-lime-200 shadow-[0_0_18px_rgba(132,204,22,0.20)]",
  };

  return (
    map[tag] ??
    "border-zinc-200/20 text-zinc-200/90 shadow-[0_0_16px_rgba(244,244,245,0.12)]"
  );
}

export function TechBadge({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "rounded-full bg-transparent px-3 py-1 text-[11px] font-medium",
        "backdrop-blur-[2px]",
        getTechBadgeClass(label),
        className
      )}
    >
      {label}
    </Badge>
  );
}
