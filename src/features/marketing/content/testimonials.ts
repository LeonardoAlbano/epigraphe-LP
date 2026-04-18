export type CountryCode = "BR" | "PT" | "ES";

export type Testimonial = {
  quote: string;
  name: string;
  role?: string;
  company?: string;
  result?: string;
  country: CountryCode;
};

export const testimonials = [
  {
    quote:
      "A entrega foi precisa e o processo muito bem organizado. Saímos com uma landing page que realmente comunica valor — as métricas de retenção melhoraram visivelmente nas primeiras semanas.",
    name: "Maleski",
    role: "Fundador",
    company: "Maleski",
    result: "Aumento de retenção e clareza na proposta de valor",
    country: "BR",
  },
  {
    quote:
      "Trabalhar com a Epigraphe foi uma experiência diferente. Cada decisão de design tinha um motivo claro. O resultado foi uma página rápida, bonita e que converte de verdade.",
    name: "CM2",
    role: "Diretor Comercial",
    company: "CM2",
    result: "Landing page com foco em conversão e performance",
    country: "BR",
  },
  {
    quote:
      "Qualidade de execução que raramente encontro. O projeto foi entregue no prazo, com atenção ao detalhe e uma arquitectura de código que nos permitiu evoluir sem dor.",
    name: "Bwlo",
    role: "Co-fundador",
    company: "Bwlo",
    result: "Arquitectura sólida e entrega dentro do prazo",
    country: "PT",
  },
  {
    quote:
      "Nos entregaron un ERP completo, robusto y fácil de mantener. La documentación y la arquitectura del código reflejan un nivel de madurez técnica poco común en el mercado.",
    name: "AltaSemita ERP",
    role: "CTO",
    company: "AltaSemita",
    result: "Sistema ERP completo, documentado e escalável",
    country: "ES",
  },
] satisfies Testimonial[];
