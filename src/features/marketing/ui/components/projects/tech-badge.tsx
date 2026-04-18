"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

function getTechBadgeClass(tag: string) {
  const map: Record<string, string> = {
    "Next.js":
      "border-zinc-200/50 text-zinc-100 shadow-[0_0_20px_rgba(244,244,245,0.4),inset_0_0_20px_rgba(244,244,245,0.1)] hover:shadow-[0_0_30px_rgba(244,244,245,0.6),inset_0_0_20px_rgba(244,244,245,0.15)]",
    React:
      "border-sky-300/50 text-sky-200 shadow-[0_0_20px_rgba(56,189,248,0.4),inset_0_0_20px_rgba(56,189,248,0.1)] hover:shadow-[0_0_30px_rgba(56,189,248,0.6),inset_0_0_20px_rgba(56,189,248,0.15)]",
    "Tailwind CSS":
      "border-cyan-300/50 text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.4),inset_0_0_20px_rgba(34,211,238,0.1)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6),inset_0_0_20px_rgba(34,211,238,0.15)]",
    TypeScript:
      "border-blue-300/50 text-blue-200 shadow-[0_0_20px_rgba(59,130,246,0.4),inset_0_0_20px_rgba(59,130,246,0.1)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6),inset_0_0_20px_rgba(59,130,246,0.15)]",
    JavaScript:
      "border-amber-300/50 text-amber-200 shadow-[0_0_20px_rgba(251,191,36,0.4),inset_0_0_20px_rgba(251,191,36,0.1)] hover:shadow-[0_0_30px_rgba(251,191,36,0.6),inset_0_0_20px_rgba(251,191,36,0.15)]",
    "Node.js":
      "border-emerald-300/50 text-emerald-200 shadow-[0_0_20px_rgba(16,185,129,0.4),inset_0_0_20px_rgba(16,185,129,0.1)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6),inset_0_0_20px_rgba(16,185,129,0.15)]",
    Prisma:
      "border-teal-300/50 text-teal-200 shadow-[0_0_20px_rgba(45,212,191,0.4),inset_0_0_20px_rgba(45,212,191,0.1)] hover:shadow-[0_0_30px_rgba(45,212,191,0.6),inset_0_0_20px_rgba(45,212,191,0.15)]",
    PostgreSQL:
      "border-indigo-300/50 text-indigo-200 shadow-[0_0_20px_rgba(129,140,248,0.4),inset_0_0_20px_rgba(129,140,248,0.1)] hover:shadow-[0_0_30px_rgba(129,140,248,0.6),inset_0_0_20px_rgba(129,140,248,0.15)]",
    MySQL:
      "border-orange-300/50 text-orange-200 shadow-[0_0_20px_rgba(251,146,60,0.4),inset_0_0_20px_rgba(251,146,60,0.1)] hover:shadow-[0_0_30px_rgba(251,146,60,0.6),inset_0_0_20px_rgba(251,146,60,0.15)]",
    Docker:
      "border-sky-300/50 text-sky-200 shadow-[0_0_20px_rgba(56,189,248,0.4),inset_0_0_20px_rgba(56,189,248,0.1)] hover:shadow-[0_0_30px_rgba(56,189,248,0.6),inset_0_0_20px_rgba(56,189,248,0.15)]",
    Vercel:
      "border-zinc-200/50 text-zinc-100 shadow-[0_0_20px_rgba(244,244,245,0.4),inset_0_0_20px_rgba(244,244,245,0.1)] hover:shadow-[0_0_30px_rgba(244,244,245,0.6),inset_0_0_20px_rgba(244,244,245,0.15)]",
    "SEO técnico":
      "border-lime-300/50 text-lime-200 shadow-[0_0_20px_rgba(132,204,22,0.4),inset_0_0_20px_rgba(132,204,22,0.1)] hover:shadow-[0_0_30px_rgba(132,204,22,0.6),inset_0_0_20px_rgba(132,204,22,0.15)]",
  };

  return (
    map[tag] ??
    "border-zinc-200/40 text-zinc-200/90 shadow-[0_0_18px_rgba(244,244,245,0.25),inset_0_0_18px_rgba(244,244,245,0.08)] hover:shadow-[0_0_28px_rgba(244,244,245,0.4),inset_0_0_18px_rgba(244,244,245,0.12)]"
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
        "backdrop-blur-[2px] transition-all duration-300 ease-out",
        "hover:scale-105 hover:backdrop-blur-[4px]",
        getTechBadgeClass(label),
        className,
      )}
    >
      {label}
    </Badge>
  );
}
