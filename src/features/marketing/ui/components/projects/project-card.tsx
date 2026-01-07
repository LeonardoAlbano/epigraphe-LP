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
        "group overflow-hidden rounded-3xl border border-border bg-card shadow-lg transition",
        "hover:-translate-y-0.5 hover:shadow-xl",
        isStack ? "flex max-h-[72vh] flex-col" : ""
      )}
    >
      <div
        className={cn(
          "relative w-full overflow-hidden border-b border-border",
          coverClass,
          isStack ? "shrink-0" : ""
        )}
      >
        <div className="absolute inset-0 bg-linear-to-t from-background/70 via-background/10 to-transparent" />

        {project.coverImageSrc ? (
          <Image
            src={project.coverImageSrc}
            alt={project.coverImageAlt ?? `Capa do projeto ${project.client}`}
            fill
            priority={Boolean(project.featured)}
            sizes="(min-width: 1024px) 900px, 100vw"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="absolute inset-0 bg-muted/20" />
        )}
      </div>

      <div
        className={cn("p-6", isStack ? "min-h-0 flex-1 overflow-y-auto" : "")}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-sm text-muted-foreground">{project.client}</p>
            <h3 className="mt-2 wrap-break-word text-pretty text-lg font-semibold leading-snug">
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
              className="h-8 w-auto shrink-0 opacity-80 transition group-hover:opacity-100"
            />
          ) : null}
        </div>

        <p className="mt-3 wrap-break-word text-sm text-muted-foreground">
          {project.summary}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.slice(0, 6).map((tag: string) => (
            <TechBadge key={tag} label={tag} />
          ))}
        </div>

        <ul className="mt-5 space-y-2 text-sm">
          {project.highlights.slice(0, 4).map((item: string) => (
            <li key={item} className="text-foreground/90">
              {item}
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
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition hover:bg-muted"
              >
                {ctaLabel}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            ) : (
              <Link
                href={href}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition hover:bg-muted"
              >
                {ctaLabel}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        ) : null}
      </div>
    </article>
  );
}
