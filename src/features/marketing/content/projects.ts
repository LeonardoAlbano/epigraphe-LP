export type ProjectType = "landing" | "system";

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  client: string;
  location?: string;
  type: ProjectType;
  summary: string;
  highlights: string[];
  stack: string[];
  links?: ProjectLink[];
  brandLogoSrc?: string;
  coverImageSrc?: string;
  coverImageAlt?: string;
  featured?: boolean;
};

export const projectsContent = {
  eyebrow: "Portfólio",
  title: "Projetos entregues",
  subtitle:
    "Landing pages de alta conversão e sistemas internos, com foco em performance, clareza e manutenção.",
} as const;

export const projects = [
  {
    slug: "bwlo-pt-remodelagem",
    title: "Landing Page de alta conversão + remodelagem completa",
    client: "BWL.O",
    location: "Portugal",
    type: "landing",
    summary:
      "Reestruturação total para performance e clareza comercial, incluindo ajustes técnicos e operação.",
    highlights: [
      "Remodelagem integral (estrutura, copy e hierarquia visual)",
      "Apontamentos e organização de e-mail",
      "Configurações de domínio/DNS e hospedagem",
      "Ajustes focados em conversão e credibilidade",
    ],
    stack: ["Next.js", "Tailwind CSS", "SEO técnico", "Infra (DNS/Hospedagem)"],
    links: [{ label: "Visitar site", href: "https://bwlo.pt" }],
    brandLogoSrc: "/brands/bwlo-pt.svg",
    coverImageSrc: "/projects/bwlo-pt-home.png",
    coverImageAlt: "Home da landing page BWL.O",
    featured: true,
  },
  {
    slug: "camaleao-digital-mentoria",
    title: "Sistema de mentoria e gestão",
    client: "O Camaleão Digital",
    location: "Brasil",
    type: "system",
    summary:
      "Back-end e estrutura de dados com foco em escalabilidade, deploy e manutenção.",
    highlights: [
      "Modelagem e regras de negócio",
      "Ambiente com Docker e banco relacional",
      "Estrutura preparada para evolução (módulos e testes)",
    ],
    stack: ["C#", "Entity Framework", "PostgreSQL", "Docker"],
    links: [],
    brandLogoSrc: "/brands/o-camaleao.svg",
    coverImageSrc: "/projects/bwlo-pt-home.png",
    coverImageAlt: "Capa do projeto (placeholder)",
  },
  {
    slug: "cm2-landing-high-conversion",
    title: "Landing Page de alta conversão",
    client: "CM2",
    location: "Brasil",
    type: "landing",
    summary:
      "Página focada em conversão, performance e experiência com animações suaves.",
    highlights: [
      "Estrutura de copy + seções de prova social",
      "Animações e microinterações (sem prejudicar performance)",
      "Layout responsivo e acessível",
    ],
    stack: ["Next.js", "Tailwind CSS", "CSS", "GSAP"],
    links: [],
    brandLogoSrc: "/brands/cm2.svg",
    coverImageSrc: "/projects/bwlo-pt-home.png",
    coverImageAlt: "Capa do projeto (placeholder)",
  },
  {
    slug: "maleski-landing-high-conversion",
    title: "Landing Page de alta conversão",
    client: "Maleski Detailing",
    location: "Brasil",
    type: "landing",
    summary:
      "Entrega orientada a resultado: clareza, confiança e CTA consistente.",
    highlights: [
      "Design orientado a conversão",
      "Seções e narrativa comercial bem definidas",
      "Boas práticas de performance (Core Web Vitals)",
    ],
    stack: ["Next.js", "Tailwind CSS", "GSAP"],
    links: [],
    brandLogoSrc: "/brands/maleski-detailing.svg",
    coverImageSrc: "/projects/bwlo-pt-home.png",
    coverImageAlt: "Capa do projeto (placeholder)",
  },
] satisfies Project[];
