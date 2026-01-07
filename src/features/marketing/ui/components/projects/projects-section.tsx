"use client";

import { useRef } from "react";

import {
  projects,
  projectsContent,
  type Project,
} from "@/features/marketing/content/projects";
import { Container } from "../shared/container";
import { useProjectsStackScroll } from "@/features/marketing/ui/hooks/use-projects-stack-scroll";
import { ProjectCard } from "./project-card";

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);

  useProjectsStackScroll({
    sectionRef,
    pinRef,
    cardSelector: "[data-project-stack-card]",
    itemCount: projects.length,
  });

  return (
    <section
      ref={sectionRef}
      id="projetos"
      aria-labelledby="projects-title"
      className="border-t border-border pt-14"
    >
      <Container>
        <header className="space-y-4">
          <p className="text-xs font-semibold tracking-widest text-muted-foreground">
            {projectsContent.eyebrow.toUpperCase()}
          </p>

          <h2
            id="projects-title"
            className="text-pretty text-3xl font-semibold md:text-4xl"
          >
            {projectsContent.title}
          </h2>

          <p className="text-pretty text-base text-muted-foreground md:text-lg">
            {projectsContent.subtitle}
          </p>
        </header>

        <div className="mt-10 grid gap-6 lg:hidden">
          {projects.map((p: Project) => (
            <ProjectCard key={p.slug} project={p} variant="grid" />
          ))}
        </div>

        <div ref={pinRef} className="mt-10 hidden lg:block">
          <div className="relative h-[82vh]">
            {projects.map((p: Project, idx: number) => (
              <div
                key={p.slug}
                data-project-stack-card
                className="absolute inset-0 flex items-start justify-center"
                style={{ zIndex: idx + 1 }}
              >
                <div className="w-full max-w-4xl">
                  <ProjectCard project={p} variant="stack" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
