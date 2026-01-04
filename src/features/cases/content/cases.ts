export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  client: {
    name: string;
    url?: string;
  };
  context: string[];
  scope: string[];
  stack: string[];
  notes?: string[];
};

export const caseStudies: readonly CaseStudy[] = [
  {
    slug: "om-desenvolvimento-empresarial",
    title: "Presença digital com foco em clareza",
    summary: "Base de site e conteúdo organizados para conversão e evolução.",
    client: { name: "OM Desenvolvimento Empresarial" },
    context: [
      "Necessidade de presença digital consistente.",
      "Estrutura enxuta para apresentar serviços e facilitar contato.",
    ],
    scope: ["Estrutura de páginas", "Componentização", "Deploy e ajustes finos"],
    stack: ["Next.js", "Tailwind", "TypeScript"],
  },
  {
    slug: "cm2-arquitetura",
    title: "Site institucional para portfólio",
    summary: "Apresentação profissional de projetos e proposta de valor.",
    client: { name: "CM2 Arquitetura" },
    context: [
      "Mostrar portfólio e posicionamento.",
      "Organização para publicar novos projetos sem retrabalho.",
    ],
    scope: ["Seções e navegação", "Componentes reutilizáveis", "SEO base"],
    stack: ["Next.js", "Tailwind", "TypeScript"],
  },
  {
    slug: "bwlo-pt",
    title: "Entrega web para empresa em Portugal",
    summary: "Estrutura orientada a performance e manutenção simples.",
    client: { name: "BWL.O", url: "https://bwlo.pt" },
    context: [
      "Presença digital para público em Portugal.",
      "Foco em performance, clareza e padronização visual.",
    ],
    scope: ["Landing / institucional", "Boas práticas", "Ajustes pós-publicação"],
    stack: ["Next.js", "Tailwind", "TypeScript"],
  },
  {
    slug: "maleski-detailing",
    title: "Landing para serviço local",
    summary: "Página objetiva, com CTA e seções alinhadas ao serviço.",
    client: { name: "Maleski Detailing" },
    context: ["Aumentar conversão via WhatsApp.", "Comunicar serviços de forma direta."],
    scope: ["Copy + seções", "CTA", "Deploy"],
    stack: ["Next.js", "Tailwind", "TypeScript"],
  },
  {
    slug: "camaleao-digital-mentoria",
    title: "Sistema para mentoria",
    summary: "Base de sistema com rotas, organização por features e escalabilidade.",
    client: { name: "Camaleão Digital" },
    context: ["Estruturar fluxo de mentoria.", "Ter base sólida para evoluir features."],
    scope: ["Arquitetura", "UI base", "Estrutura de rotas e módulos"],
    stack: ["Next.js", "TypeScript", "Tailwind", "Clean architecture (feature-based)"],
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}