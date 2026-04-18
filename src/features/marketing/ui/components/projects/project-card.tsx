"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";
import type { Project } from "@/features/marketing/content/projects";
import { TechBadge } from "./tech-badge";

type CardVariant = "grid" | "stack";

export function ProjectCard({
  project,
  variant = "grid",
}: {
  project: Project;
  variant?: CardVariant;
}) {
  const href = project.links?.[0]?.href;
  const ctaLabel = project.links?.[0]?.label ?? "Abrir";
  const isExternal = typeof href === "string" && href.startsWith("http");
  const isStack = variant === "stack";

  const coverClass = isStack
    ? "h-[220px] lg:h-[240px]"
    : project.featured
      ? "aspect-16/7"
      : "aspect-16/10";

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-border/60 bg-card shadow-lg transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-2xl hover:border-border",
        "before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-primary/5 before:via-transparent before:to-transparent before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100",
        isStack ? "flex max-h-[72vh] flex-col" : "",
      )}
    >
      <div
        className={cn(
          "relative w-full overflow-hidden border-b border-border/60",
          coverClass,
          isStack ? "shrink-0" : "",
        )}
      >
        <div className="absolute inset-0 bg-linear-to-t from-background/80 via-background/20 to-transparent z-10" />

        {project.coverImageSrc ? (
          <Image
            src={project.coverImageSrc}
            alt={project.coverImageAlt ?? `Capa do projeto ${project.client}`}
            fill
            priority={Boolean(project.featured)}
            sizes="(min-width: 1024px) 900px, 100vw"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.05]"
          />
        ) : (
          <div className="absolute inset-0 bg-muted/30" />
        )}
      </div>

      <div
        className={cn(
          "p-6 relative z-20",
          isStack ? "min-h-0 flex-1 overflow-y-auto" : "",
        )}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {project.client}
            </p>
            <h3 className="mt-2 wrap-break-word text-pretty text-lg font-semibold leading-snug text-foreground">
              {project.title}
            </h3>
          </div>

          {project.brandLogoSrc ? (
            <Image
              src={project.brandLogoSrc}
              alt={`${project.client} logo`}
              width={140}
              height={40}
              unoptimized
              className="h-8 w-auto shrink-0 opacity-70 transition-opacity duration-300 group-hover:opacity-100"
            />
          ) : null}
        </div>

        <p className="mt-3 wrap-break-word text-sm text-muted-foreground/90">
          {project.summary}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.slice(0, 6).map((tag: string) => (
            <TechBadge key={tag} label={tag} />
          ))}
        </div>

        <ul className="mt-5 space-y-2 text-sm">
          {project.highlights.slice(0, 4).map((item: string) => (
            <li
              key={item}
              className="text-foreground/85 flex items-start gap-2"
            >
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {href ? (
          <div className="mt-6">
            {isExternal ? (
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/50 px-4 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:bg-primary/10 hover:border-primary/40 hover:shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)]"
              >
                {ctaLabel}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ) : (
              <Link
                href={href}
                className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/50 px-4 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:bg-primary/10 hover:border-primary/40 hover:shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)]"
              >
                {ctaLabel}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            )}
          </div>
        ) : null}
      </div>
    </article>
  );
}
